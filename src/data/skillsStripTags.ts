/**
 * prompt: on web view, render skills carousel (Body Stunt etc.) under hero on all routes
 * Shared skill-tag labels for the horizontal carousel strip — DE / EN
 */
export const skillsStripTags = {
  de: [
    ["Body Stunt", true],
    ["Highfall", false],
    ["Fechten & Schwertkampf", true],
    ["Stuntreiter", false],
    ["Trampolin-Kaskadeur", true],
    ["Globe of Speed", false],
    ["Kampfchoreographie", true],
    ["Todesrad", false],
    ["Zauberei & Illusion", true],
    ["Feuerspucken", false],
    ["Akrobatik", true],
    ["Acting & Comedy", false],
  ],
  en: [
    ["Body Stunt", true],
    ["High Fall", false],
    ["Fencing & Sword Fighting", true],
    ["Stunt Riding", false],
    ["Trampoline Stunt Performer", true],
    ["Globe of Speed", false],
    ["Fight Choreography", true],
    ["Wheel of Death", false],
    ["Magic & Illusion", true],
    ["Fire Breathing", false],
    ["Acrobatics", true],
    ["Acting & Comedy", false],
  ],
} as const;
