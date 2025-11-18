import { Toaster } from "@/components/ui/sonner";
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
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
