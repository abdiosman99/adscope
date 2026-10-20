import {createClient} from '@sanity/client';
import {Competitor,Ad,seedCompetitors,seedAds,demoMode} from './data';
const client=createClient({projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID||'eqzq0mtw',dataset:process.env.NEXT_PUBLIC_SANITY_DATASET||'production',apiVersion:'2025-02-01',useCdn:false,token:process.env.SANITY_API_TOKEN||undefined});
export async function getCompetitors():Promise<Competitor[]>{if(demoMode)return seedCompetitors;return client.fetch(`*[_type == "adscopeCompetitor"] | order(name asc){_id,name,domain,industry,initials,color,metaUrl,googleUrl,linkedinUrl,createdAt}`)}
export async function getAds():Promise<Ad[]>{if(demoMode)return seedAds;return client.fetch(`*[_type == "adscopeAd"] | order(firstSeen desc){_id,competitorId,platform,headline,body,cta,format,landingPage,libraryUrl,firstSeen,lastSeen,status,tag,image}`)}
export async function addCompetitor(v:Omit<Competitor,'_id'>){return client.create({_type:'adscopeCompetitor',...v,createdAt:new Date().toISOString()})}
export async function removeCompetitor(id:string){return client.delete(id)}
export async function addAd(v:Omit<Ad,'_id'>){return client.create({_type:'adscopeAd',...v})}
export function isAdmin(request:Request){const key=process.env.ADSCOPE_ADMIN_KEY;return !!key&&request.headers.get('x-admin-key')===key}
