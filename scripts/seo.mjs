import {readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
export async function applySeo(root,output){
 const config=JSON.parse(await readFile(path.join(root,'config/seo.json'),'utf8'));
 const base=config.baseUrl;
 if(base!=='https://www.actionartist.de')throw Error('Unexpected canonical domain');
 const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
 const url=file=>base+'/'+file.replace(/index\.html$/,'');
 const titles=new Set();
 for(const [file,p] of Object.entries(config.pages)){
  if(!p.title?.trim()||!p.description?.trim()||!config.pages[p.alternate]||config.pages[p.alternate].alternate!==file)throw Error('Invalid SEO entry: '+file);
  if(titles.has(p.title))throw Error('Duplicate title: '+file);titles.add(p.title);
  let h=await readFile(path.join(output,file),'utf8');
  if(/noindex/i.test(h))throw Error('Unexpected indexing block: '+file);
  h=h.replace(/<title>[\s\S]*?<\/title>/i,'').replace(/<meta\s+name="description"[^>]*>/gi,'');
  const en=file.startsWith('en/');const de=en?p.alternate:file;const eng=en?file:p.alternate;
  const graph=[{'@type':'WebPage','@id':url(file)+'#webpage',url:url(file),name:p.title,description:p.description,inLanguage:en?'en':'de'}];
  if(file==='index.html')graph.push({'@type':'WebSite',name:'Action Artist',url:base+'/'});
  if(file==='profil.html'||file==='en/profile.html')graph.push({'@type':'Person','@id':base+'/#ilian-simeonow',name:'Ilian Simeonow',url:url(file),sameAs:['https://www.imdb.com/de/name/nm4125422/','https://www.crew-united.com/de/Ilian-Simeonow_96713.html','https://www.theapolis.de/de/profil/ilian-simeonow']});
  const tags=`<title>${escape(p.title)}</title><meta name="description" content="${escape(p.description)}"><link rel="canonical" href="${url(file)}"><link rel="alternate" hreflang="de" href="${url(de)}"><link rel="alternate" hreflang="en" href="${url(eng)}"><link rel="alternate" hreflang="x-default" href="${url(de)}"><meta property="og:type" content="website"><meta property="og:title" content="${escape(p.title)}"><meta property="og:description" content="${escape(p.description)}"><meta property="og:url" content="${url(file)}"><script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c')}</script>`;
  h=h.replace('</head>',tags+'</head>');await writeFile(path.join(output,file),h);
 }
 await writeFile(path.join(output,'robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);
 await writeFile(path.join(output,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+Object.keys(config.pages).map(f=>`  <url><loc>${url(f)}</loc></url>`).join('\n')+'\n</urlset>\n');
 console.log(`SEO: ${titles.size} unique titles, descriptions, canonicals, language pairs and sitemap entries generated.`);
}
