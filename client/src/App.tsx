import { Toaster } from "@/components/ui/sonner";
import CanonicalURL from "./components/CanonicalURL";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Emergency from "./pages/Emergency";
import Commercial from "./pages/Commercial";
import Residential from "./pages/Residential";
import HVACServices from "./pages/HVACServices";
import PlumbingServices from "./pages/PlumbingServices";
import ElectricalServices from "./pages/ElectricalServices";
import HVACCayce from "./pages/services/hvac-cayce";
import PlumbingCayce from "./pages/services/plumbing-cayce";
import ElectricalCayce from "./pages/services/electrical-cayce";
import HVACColumbia from "./pages/services/hvac-columbia";
import PlumbingColumbia from "./pages/services/plumbing-columbia";
import ElectricalColumbia from "./pages/services/electrical-columbia";
import HVACForestAcres from "./pages/services/hvac-forest-acres";
import PlumbingForestAcres from "./pages/services/plumbing-forest-acres";
import ElectricalForestAcres from "./pages/services/electrical-forest-acres";
import ArcadiaLakesHVAC from "./pages/services/ArcadiaLakesHVAC";
import ArcadiaLakesPlumbing from "./pages/services/ArcadiaLakesPlumbing";
import ArcadiaLakesElectrical from "./pages/services/ArcadiaLakesElectrical";
import BlythewoodHVAC from "./pages/services/BlythewoodHVAC";
import BlythewoodPlumbing from "./pages/services/BlythewoodPlumbing";
import BlythewoodElectrical from "./pages/services/BlythewoodElectrical";
import EastoverHVAC from "./pages/services/EastoverHVAC";
import EastoverPlumbing from "./pages/services/EastoverPlumbing";
import EastoverElectrical from "./pages/services/EastoverElectrical";
import ElginHVAC from "./pages/services/ElginHVAC";
import ElginPlumbing from "./pages/services/ElginPlumbing";
import ElginElectrical from "./pages/services/ElginElectrical";
// 1000-word comprehensive location pages
import HVACColumbia1000 from "./pages/services/hvac-columbia-1000";
import PlumbingColumbia1000 from "./pages/services/plumbing-columbia-1000";
import ElectricalColumbia1000 from "./pages/services/electrical-columbia-1000";
import HVACCayce1000 from "./pages/services/hvac-cayce-1000";
import PlumbingCayce1000 from "./pages/services/plumbing-cayce-1000";
import ElectricalCayce1000 from "./pages/services/electrical-cayce-1000";
import HVACForestAcres1000 from "./pages/services/hvac-forest-acres-1000";
import PlumbingForestAcres1000 from "./pages/services/plumbing-forest-acres-1000";
import ElectricalForestAcres1000 from "./pages/services/electrical-forest-acres-1000";
import HVACArcadiaLakes1000 from "./pages/services/hvac-arcadia-lakes-1000";
import PlumbingArcadiaLakes1000 from "./pages/services/plumbing-arcadia-lakes-1000";
import ElectricalArcadiaLakes1000 from "./pages/services/electrical-arcadia-lakes-1000";
import HVACBlythewood1000 from "./pages/services/hvac-blythewood-1000";
import PlumbingBlythewood1000 from "./pages/services/plumbing-blythewood-1000";
import ElectricalBlythewood1000 from "./pages/services/electrical-blythewood-1000";
import TanklessVsTraditional from "./pages/comparisons/TanklessVsTraditional";
import FiltrationSystems from "./pages/comparisons/FiltrationSystems";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BoydenArbor from "./pages/locations/boyden-arbor";
import WindsorEstates from "./pages/locations/windsor-estates";
import FairwoldAcres from "./pages/locations/fairwold-acres";
import MountainBrook from "./pages/locations/mountain-brook";
import CedarCreek from "./pages/locations/cedar-creek";
import EauClaire from "./pages/locations/eau-claire";
import Riverside from "./pages/locations/riverside";
import SpringHill from "./pages/locations/spring-hill";
import StatePark from "./pages/locations/state-park";
import Killian from "./pages/locations/killian";
import Kingville from "./pages/locations/kingville";
import Leesburg from "./pages/locations/leesburg";
import Lykes from "./pages/locations/lykes";
import Bookman from "./pages/locations/bookman";
import HorrellHill from "./pages/locations/horrell-hill";
import Pontiac from "./pages/locations/pontiac";
import Wateree from "./pages/locations/wateree";
import Gadsden from "./pages/locations/gadsden";
import Olympia from "./pages/locations/olympia";
import Woodfield from "./pages/locations/woodfield";
import Columbia from "./pages/locations/columbia";
import Irmo from "./pages/locations/irmo";
import Cayce from "./pages/locations/cayce";
import ForestAcres from "./pages/locations/forest-acres";
import Blythewood from "./pages/locations/blythewood";
import Arthurtown from "./pages/locations/arthurtown";
import CapitolView from "./pages/locations/capitol-view";
import Dentsville from "./pages/locations/dentsville";
import Hopkins from "./pages/locations/hopkins";
import LakeMurray from "./pages/locations/lake-murray";
import StAndrews from "./pages/locations/st-andrews";
import Eastover from "./pages/locations/eastover";
import Elgin from "./pages/locations/elgin";
import ArcadiaLakes from "./pages/locations/arcadia-lakes";
import DutchFork from "./pages/locations/dutch-fork";
import FortJackson from "./pages/locations/fort-jackson";
import IntownColumbia from "./pages/locations/intown-columbia";
import LowerRichland from "./pages/locations/lower-richland";

function Router() {
  return (
    <>
      <Header />
      <Switch>
         <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
      <Route path={"/emergency"} component={Emergency} />
      <Route path={"/commercial"} component={Commercial} />
      <Route path={"/residential"} component={Residential} />
      <Route path={"/services/hvac"} component={HVACServices} />
      <Route path={"/services/plumbing"} component={PlumbingServices} />
      <Route path={"/services/electrical"} component={ElectricalServices} />
      {/* 1000-word comprehensive location pages */}
      <Route path={"/services/hvac-columbia-1000"} component={HVACColumbia1000} />
      <Route path={"/services/plumbing-columbia-1000"} component={PlumbingColumbia1000} />
      <Route path={"/services/electrical-columbia-1000"} component={ElectricalColumbia1000} />
      <Route path={"/services/hvac-cayce-1000"} component={HVACCayce1000} />
      <Route path={"/services/plumbing-cayce-1000"} component={PlumbingCayce1000} />
      <Route path={"/services/electrical-cayce-1000"} component={ElectricalCayce1000} />
      <Route path={"/services/hvac-forest-acres-1000"} component={HVACForestAcres1000} />
      <Route path={"/services/plumbing-forest-acres-1000"} component={PlumbingForestAcres1000} />
      <Route path={"/services/electrical-forest-acres-1000"} component={ElectricalForestAcres1000} />
      <Route path={"/services/hvac-arcadia-lakes-1000"} component={HVACArcadiaLakes1000} />
      <Route path={"/services/plumbing-arcadia-lakes-1000"} component={PlumbingArcadiaLakes1000} />
      <Route path={"/services/electrical-arcadia-lakes-1000"} component={ElectricalArcadiaLakes1000} />
      <Route path={"/services/hvac-blythewood-1000"} component={HVACBlythewood1000} />
      <Route path={"/services/plumbing-blythewood-1000"} component={PlumbingBlythewood1000} />
      <Route path={"/services/electrical-blythewood-1000"} component={ElectricalBlythewood1000} />
      {/* Comparison Pages */}
      <Route path={"/comparisons/tankless-vs-traditional"} component={TanklessVsTraditional} />
      <Route path={"/comparisons/water-filtration-systems"} component={FiltrationSystems} />
      <Route path={"/services/hvac-cayce-sc"} component={HVACCayce} />
      <Route path={"/services/plumbing-cayce-sc"} component={PlumbingCayce} />
      <Route path={"/services/electrical-cayce-sc"} component={ElectricalCayce} />
      <Route path={"/services/hvac-columbia-sc"} component={HVACColumbia} />
      <Route path={"/services/plumbing-columbia-sc"} component={PlumbingColumbia} />
      <Route path={"/services/electrical-columbia-sc"} component={ElectricalColumbia} />
      <Route path={"/services/hvac-forest-acres-sc"} component={HVACForestAcres} />
      <Route path={"/services/plumbing-forest-acres-sc"} component={PlumbingForestAcres} />
      <Route path={"/services/electrical-forest-acres-sc"} component={ElectricalForestAcres} />
      <Route path={"/services/hvac-arcadia-lakes-sc"} component={ArcadiaLakesHVAC} />
      <Route path={"/services/plumbing-arcadia-lakes-sc"} component={ArcadiaLakesPlumbing} />
      <Route path={"/services/electrical-arcadia-lakes-sc"} component={ArcadiaLakesElectrical} />
      <Route path={"/services/hvac-blythewood-sc"} component={BlythewoodHVAC} />
      <Route path={"/services/plumbing-blythewood-sc"} component={BlythewoodPlumbing} />
      <Route path={"/services/electrical-blythewood-sc"} component={BlythewoodElectrical} />
      <Route path={"/services/hvac-eastover-sc"} component={EastoverHVAC} />
      <Route path={"/services/plumbing-eastover-sc"} component={EastoverPlumbing} />
      <Route path={"/services/electrical-eastover-sc"} component={EastoverElectrical} />
      <Route path={"/services/hvac-elgin-sc"} component={ElginHVAC} />
      <Route path={"/services/plumbing-elgin-sc"} component={ElginPlumbing} />
      <Route path={"/services/electrical-elgin-sc"} component={ElginElectrical} />
      <Route path={"/locations/boyden-arbor"} component={BoydenArbor} />
      <Route path={"/locations/windsor-estates"} component={WindsorEstates} />
      <Route path={"/locations/fairwold-acres"} component={FairwoldAcres} />
      <Route path={"/locations/mountain-brook"} component={MountainBrook} />
      <Route path={"/locations/cedar-creek"} component={CedarCreek} />
      <Route path={"/locations/eau-claire"} component={EauClaire} />
      <Route path={"/locations/riverside"} component={Riverside} />
      <Route path={"/locations/spring-hill"} component={SpringHill} />
      <Route path={"/locations/state-park"} component={StatePark} />
      <Route path={"/locations/killian"} component={Killian} />
      <Route path={"/locations/kingville"} component={Kingville} />
      <Route path={"/locations/leesburg"} component={Leesburg} />
      <Route path={"/locations/lykes"} component={Lykes} />
      <Route path={"/locations/bookman"} component={Bookman} />
      <Route path={"/locations/horrell-hill"} component={HorrellHill} />
      <Route path={"/locations/pontiac"} component={Pontiac} />
      <Route path={"/locations/wateree"} component={Wateree} />
      <Route path={"/locations/gadsden"} component={Gadsden} />
      <Route path={"/locations/olympia"} component={Olympia} />
      <Route path={"/locations/woodfield"} component={Woodfield} />
      <Route path={"/locations/columbia"} component={Columbia} />
      <Route path={"/locations/irmo"} component={Irmo} />
      <Route path={"/locations/cayce"} component={Cayce} />
      <Route path={"/locations/forest-acres"} component={ForestAcres} />
      <Route path={"/locations/blythewood"} component={Blythewood} />
      <Route path={"/locations/arthurtown"} component={Arthurtown} />
      <Route path={"/locations/capitol-view"} component={CapitolView} />
      <Route path={"/locations/dentsville"} component={Dentsville} />
      <Route path={"/locations/hopkins"} component={Hopkins} />
      <Route path={"/locations/lake-murray"} component={LakeMurray} />
      <Route path={"/locations/st-andrews"} component={StAndrews} />
      <Route path={"/locations/eastover"} component={Eastover} />
      <Route path={"/locations/elgin"} component={Elgin} />
      <Route path={"/locations/arcadia-lakes"} component={ArcadiaLakes} />
      <Route path={"/locations/dutch-fork"} component={DutchFork} />
      <Route path={"/locations/fort-jackson"} component={FortJackson} />
      <Route path={"/locations/intown-columbia"} component={IntownColumbia} />
      <Route path={"/locations/lower-richland"} component={LowerRichland} />
      <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <CanonicalURL />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
