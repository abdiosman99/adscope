import Dashboard from '../components/Dashboard';
import {getCompetitors,getAds} from '../lib/sanity';
import {demoMode} from '../lib/data';
export const dynamic='force-dynamic';
export default async function Page(){const [competitors,ads]=await Promise.all([getCompetitors(),getAds()]);return <Dashboard initialCompetitors={competitors} initialAds={ads} demo={demoMode}/>}
