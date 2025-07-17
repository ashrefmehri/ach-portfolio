import { CareerSection } from "@/modules/overview/carrer-section";
import { InsightsSection } from "@/modules/overview/insights-section";
import { WelcomeSection } from "@/modules/overview/welcome-section";


export default function Home() {
  return (
    <div className="space-y-2 pb-6 ">
       <WelcomeSection/>
       <CareerSection/>
       <InsightsSection/>
    </div>
  );
}
