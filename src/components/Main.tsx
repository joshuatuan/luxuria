import HansenTablet from "@/sections/HansenTablet";
import HomeStaging from "@/sections/HomeStaging";
import MarketingPlan from "@/sections/MarketingPlan";
import Partners from "@/sections/Partners";
import Processes from "@/sections/Processes";
import ProvenTrackRecord from "@/sections/ProvenTrackRecord ";

export default function Main() {
  return (
    <main className="space-y-36 mx-auto p-3 md:p-0">
      <MarketingPlan />
      <HomeStaging />
      <Processes />
      <ProvenTrackRecord />
      <HansenTablet />
      <Partners />
    </main>
  );
}
