export type Platform = 'Meta' | 'Google' | 'LinkedIn';
export type Competitor = {_id:string; name:string; domain:string; industry:string; initials:string; color:string; metaUrl?:string; googleUrl?:string; linkedinUrl?:string; createdAt?:string};
export type Ad = {_id:string;competitorId:string;platform:Platform;headline:string;body:string;cta:string;format:string;landingPage?:string;libraryUrl?:string;firstSeen:string;lastSeen:string;status:'Observed'|'Not observed';tag:string;image?:string};
export const seedCompetitors:Competitor[] = [
 {_id:'c1',name:'Notion',domain:'notion.so',industry:'Productivity',initials:'N',color:'#161616'},
 {_id:'c2',name:'Linear',domain:'linear.app',industry:'Software',initials:'L',color:'#6861ca'},
 {_id:'c3',name:'Monday.com',domain:'monday.com',industry:'Work management',initials:'M',color:'#f8bd36'},
 {_id:'c4',name:'Asana',domain:'asana.com',industry:'Work management',initials:'A',color:'#ef7c77'},
 {_id:'c5',name:'ClickUp',domain:'clickup.com',industry:'Productivity',initials:'C',color:'#ab59d3'},
 {_id:'c6',name:'Airtable',domain:'airtable.com',industry:'Database',initials:'A',color:'#f2b944'},
];
export const seedAds:Ad[] = [
 {_id:'a1',competitorId:'c1',platform:'Meta',headline:'One workspace. Every possibility.',body:'Bring your docs, projects, and knowledge together in one connected place.',cta:'Learn more',format:'Static image',firstSeen:'2026-10-17',lastSeen:'2026-10-20',status:'Observed',tag:'Productivity'},
 {_id:'a2',competitorId:'c2',platform:'LinkedIn',headline:'Build products, not spreadsheets.',body:'A streamlined way for product teams to plan and build.',cta:'Explore platform',format:'Carousel',firstSeen:'2026-10-16',lastSeen:'2026-10-20',status:'Observed',tag:'Product-led'},
 {_id:'a3',competitorId:'c3',platform:'Google',headline:'Make work flow, your way',body:'Manage your projects and workflows with a flexible work platform.',cta:'Get started',format:'Search',firstSeen:'2026-10-14',lastSeen:'2026-10-19',status:'Observed',tag:'Efficiency'},
 {_id:'a4',competitorId:'c4',platform:'Meta',headline:'More clarity. Less busywork.',body:'Keep your team aligned and your work moving.',cta:'Try it free',format:'Video',firstSeen:'2026-10-12',lastSeen:'2026-10-19',status:'Observed',tag:'Teamwork'},
 {_id:'a5',competitorId:'c5',platform:'LinkedIn',headline:'One app to replace them all.',body:'Tasks, docs, goals, and collaboration in one workspace.',cta:'See how',format:'Static image',firstSeen:'2026-10-10',lastSeen:'2026-10-18',status:'Observed',tag:'Consolidation'},
 {_id:'a6',competitorId:'c6',platform:'Google',headline:'Build apps on your data',body:'Move from ideas to workflows faster.',cta:'Discover more',format:'Search',firstSeen:'2026-10-08',lastSeen:'2026-10-17',status:'Observed',tag:'Automation'},
];
export const demoMode = !process.env.SANITY_API_TOKEN;
export const libraryLink=(p:Platform,q:string)=>p==='Meta'?`https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=ALL&q=${encodeURIComponent(q)}`:p==='Google'?'https://adstransparency.google.com/':'https://www.linkedin.com/ad-library/';
