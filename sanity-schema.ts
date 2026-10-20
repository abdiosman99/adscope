// Add these document schemas to your existing Sanity Studio schemaTypes.
// If using defineType/defineField, these plain objects can be adapted directly.
export const adscopeCompetitor = {
 name:'adscopeCompetitor',title:'AdScope Competitor',type:'document',fields:[
 {name:'name',title:'Company name',type:'string',validation:(Rule:any)=>Rule.required()},
 {name:'domain',title:'Website domain',type:'string',validation:(Rule:any)=>Rule.required()},
 {name:'industry',title:'Industry',type:'string'},
 {name:'initials',title:'Initials',type:'string'},
 {name:'color',title:'Brand color',type:'string'},
 {name:'metaUrl',title:'Meta library URL',type:'url'},
 {name:'googleUrl',title:'Google library URL',type:'url'},
 {name:'linkedinUrl',title:'LinkedIn library URL',type:'url'},
 {name:'createdAt',title:'Created at',type:'datetime'}
 ]};
export const adscopeAd = {
 name:'adscopeAd',title:'AdScope Ad',type:'document',fields:[
 {name:'competitorId',title:'Competitor document ID',type:'string'},
 {name:'platform',title:'Platform',type:'string',options:{list:['Meta','Google','LinkedIn']}},
 {name:'headline',title:'Headline',type:'string'},
 {name:'body',title:'Copy',type:'text'},
 {name:'cta',title:'Call to action',type:'string'},
 {name:'format',title:'Format',type:'string'},
 {name:'landingPage',title:'Landing page',type:'url'},
 {name:'libraryUrl',title:'Source library URL',type:'url'},
 {name:'firstSeen',title:'First observed',type:'date'},
 {name:'lastSeen',title:'Last observed',type:'date'},
 {name:'status',title:'Observation status',type:'string'},
 {name:'tag',title:'Messaging theme',type:'string'},
 {name:'image',title:'Image URL',type:'url'}
 ]};
