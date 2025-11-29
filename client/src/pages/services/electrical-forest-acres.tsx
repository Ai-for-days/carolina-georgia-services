import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, Clock, CheckCircle, MapPin, Zap, Shield, AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

export default function ElectricalForestAcres1000() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneNumber = "(888) 885-7330";
  const phoneLink = "tel:+18888857330";

  return (
    <>
      <SEO
        title="Electrician in Forest Acres, SC | 24/7 Emergency Electrical Services | Carolina Georgia Services"
        description="Licensed electrician in Forest Acres, SC. 24/7 emergency electrical repairs, panel upgrades, wiring, lighting, generators, and more. 10-15 minute response. Call (888) 885-7330."
        keywords="electrician Forest Acres SC, emergency electrician Forest Acres, electrical repair Forest Acres, panel upgrade Forest Acres, electrical services Forest Acres, generator installation Forest Acres"
        schema={{
          "@context": "https://schema.org",
          "@type": "Electrician",
          "name": "Carolina Georgia Services - Forest Acres Electrical",
          "telephone": phoneNumber,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Forest Acres",
            "addressRegion": "SC",
            "addressCountry": "US"
          },
          "areaServed": {
            "@type": "City",
            "name": "Forest Acres"
          }
        }}
      />
      <div className="min-h-screen flex flex-col">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-10 w-10" />
              <span className="text-2xl font-bold">24/7 EMERGENCY ELECTRICAL SERVICE IN FOREST ACRES, SC</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Licensed Electrician Services in Forest Acres, South Carolina
            </h1>
            <p className="text-2xl mb-8 leading-relaxed max-w-4xl">
              Power outage? Circuit breaker tripping? Electrical emergency? Carolina Georgia Services responds in 10-15 minutes with licensed electricians ready to solve any electrical problem. Serving Forest Acres homes and businesses with professional electrical repairs, panel upgrades, wiring, lighting installation, generator service, and emergency electrical work 24/7/365.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-red-600 hover:bg-gray-100 text-xl px-8 py-6" asChild>
                <a href={phoneLink}>
                  <Phone className="mr-2 h-6 w-6" />
                  Call {phoneNumber}
                </a>
              </Button>
              <div className="flex items-center gap-3 bg-white/20 px-8 py-4 rounded-lg">
                <Clock className="h-6 w-6" />
                <span className="font-semibold text-xl">Response: 10-15 minutes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container max-w-5xl text-center">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12 mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Forest Acres' Most Trusted Licensed Electricians</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Electrical problems create immediate safety hazards and require professional expertise. A sparking outlet could indicate dangerous wiring faults that might start a fire. A circuit breaker that keeps tripping signals overloaded circuits or short circuits. A complete power loss leaves your Forest Acres home without lights, heating, cooling, or refrigeration. When these electrical emergencies strike, you need a licensed electrician who responds immediately and fixes problems safely.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Carolina Georgia Services provides fast, reliable electrical services throughout Forest Acres with licensed electricians available 24/7/365. Our strategic positioning allows us to reach any Forest Acres address within 10-15 minutes for emergency electrical repairs—faster response than any other electrical company serving the area. Our electricians carry extensive parts inventory, diagnostic equipment, and safety gear to handle any electrical challenge safely and efficiently.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Unlike handymen or unlicensed "electricians," our team holds proper South Carolina electrical contractor licenses, carries comprehensive liability insurance, and follows National Electrical Code (NEC) requirements on every job. We never cut corners on safety, and we stand behind our work with written warranties and a 100% satisfaction guarantee.
              </p>
            </div>

            {/* Forest Acres Electrical Challenges */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Why Forest Acres Homes Face Unique Electrical Challenges</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Forest Acres' combination of mid-century housing stock, mature tree canopy, severe weather, and increasing electrical demands creates specific challenges that homeowners must understand to protect their families and property. Electrical fires cause millions of dollars in property damage annually in South Carolina, with many incidents traced to preventable electrical problems in older homes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                      Outdated Electrical Systems
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Most Forest Acres homes were built in the 1950s-1970s with electrical panels and wiring designed for a much simpler lifestyle. These outdated systems use obsolete technology like fuse boxes or early circuit breakers that can't safely handle modern electrical loads from computers, large TVs, electric vehicles, and high-efficiency HVAC systems. Federal Pacific and Zinsco panels, common in 1960s-1980s Forest Acres homes, are known fire hazards that should be replaced immediately.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-6 w-6 text-primary" />
                      Insufficient Electrical Capacity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Older Forest Acres homes were built with 60-100 amp electrical service—adequate for 1950s-1970s lifestyles but dangerously inadequate for modern electrical demands. Today's homes typically need 200 amp service to safely power multiple air conditioning units, electric water heaters, kitchen appliances, home offices, entertainment systems, and EV chargers. Insufficient capacity causes frequent circuit breaker trips, flickering lights, and potential fire hazards from overloaded circuits.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-6 w-6 text-primary" />
                      Aluminum Wiring Hazards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Many Forest Acres homes built in the 1960s-1970s have aluminum wiring, which was popular during a copper shortage but is now recognized as a serious fire hazard. Aluminum wiring expands and contracts more than copper, causing connections to loosen over time and creating dangerous arcing that can start fires. If your Forest Acres home has aluminum wiring, professional evaluation and remediation are essential for safety.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-primary" />
                      Severe Weather & Power Surges
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Forest Acres experiences frequent severe thunderstorms, particularly during spring and summer months. Lightning strikes and power grid fluctuations create dangerous electrical surges that can destroy sensitive electronics, damage appliances, and start electrical fires. Forest Acres' mature trees also increase power outage risks when branches fall on power lines during storms. Without whole-home surge protection and backup power, your home remains vulnerable to thousands of dollars in damage.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Comprehensive Electrical Services */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Complete Electrical Services for Forest Acres Homes & Businesses</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                Carolina Georgia Services provides comprehensive electrical solutions for residential and commercial properties throughout Forest Acres. Our licensed electricians have the training, experience, and equipment to handle any electrical challenge safely and efficiently, from simple outlet repairs to complex whole-home rewiring projects.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">24/7 Emergency Electrical Repair</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Electrical emergencies create immediate safety hazards that require professional response. A sparking outlet could indicate dangerous wiring faults that might start a fire. A circuit breaker that won't reset suggests serious electrical problems. A complete power loss leaves your family without essential services. When these emergencies strike your Forest Acres home, you need a licensed electrician immediately—not tomorrow morning.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      Carolina Georgia Services maintains 24/7/365 emergency electrical service throughout Forest Acres with no overtime charges. Our electricians arrive in 10-15 minutes with diagnostic equipment and parts to identify and fix electrical problems safely. We never compromise on safety, and we always follow proper electrical codes and procedures.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li>Power outages and electrical failures</li>
                      <li>Circuit breaker problems and tripping breakers</li>
                      <li>Sparking outlets and electrical arcing</li>
                      <li>Burning smells and electrical odors</li>
                      <li>Flickering lights and power fluctuations</li>
                      <li>Emergency electrical safety inspections</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Electrical Panel Upgrades & Replacement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Your electrical panel is the heart of your home's electrical system, distributing power safely to every circuit. Outdated panels create serious safety hazards including electrical fires, electrocution risks, and inability to safely power modern electrical loads. If your Forest Acres home has a fuse box, Federal Pacific panel, Zinsco panel, or any electrical panel more than 25 years old, professional evaluation and likely replacement are essential.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      We install modern electrical panels that meet current NEC requirements and provide adequate capacity for your home's electrical needs. Our panel upgrades typically include increasing service from 100 amps to 200 amps, installing AFCI and GFCI circuit breakers for enhanced safety, adding circuits for new appliances or additions, and ensuring proper grounding and bonding. We handle all permit applications, utility coordination, and final inspections.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li>100 amp to 200 amp service upgrades</li>
                      <li>Federal Pacific and Zinsco panel replacement</li>
                      <li>Fuse box to circuit breaker conversion</li>
                      <li>Sub-panel installation for additions or outbuildings</li>
                      <li>AFCI and GFCI breaker installation</li>
                      <li>Emergency panel repairs and breaker replacement</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Whole-Home Rewiring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Homes built in Forest Acres before 1980 often have outdated wiring that doesn't meet modern safety standards. Cloth-insulated wiring, knob-and-tube wiring, and aluminum wiring all present serious fire hazards. Even copper wiring deteriorates over decades, with insulation becoming brittle and connections loosening. If your Forest Acres home has old wiring, frequent electrical problems, or you're planning major renovations, professional rewiring protects your family and property.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      Our whole-home rewiring services include complete evaluation of your existing electrical system, design of new wiring layout that meets current codes, installation of modern wiring with proper grounding, upgrade of outlets and switches throughout the home, and final inspection and testing. We work efficiently to minimize disruption and coordinate with other contractors during renovations.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Generator Installation & Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Forest Acres experiences frequent power outages during severe thunderstorms and tropical systems, especially when mature trees fall on power lines. Extended power losses create serious problems including spoiled food, no air conditioning during summer heat, no heating during winter cold, and loss of medical equipment power. A professionally-installed standby generator automatically restores power within seconds of an outage, keeping your family comfortable and safe.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      We install and service whole-home standby generators from leading manufacturers including Generac, Kohler, and Briggs & Stratton. Our generator installations include proper sizing for your home's electrical needs, installation of automatic transfer switch, natural gas or propane connection, concrete pad preparation, and all necessary permits and inspections. We also provide generator maintenance and repair services to ensure your backup power system works when you need it most.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Lighting Installation & Upgrades</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Proper lighting enhances safety, security, and aesthetics while reducing energy costs. We install all types of residential and commercial lighting including recessed LED lights, under-cabinet lighting, landscape lighting, security lighting, ceiling fans with lights, chandeliers, and smart lighting systems. Our electricians ensure proper wiring, switching, and dimming capabilities for every installation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Outlet & Switch Installation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Modern homes need more outlets than older Forest Acres homes provide. We install additional outlets, USB charging outlets, GFCI outlets in bathrooms and kitchens, weatherproof outdoor outlets, dedicated circuits for appliances, and smart switches for home automation. All installations meet current NEC requirements for safety and functionality.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Surge Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Whole-home surge protection defends your Forest Acres home against damaging power surges from lightning strikes, utility grid fluctuations, and internal electrical events. We install surge protection devices at your electrical panel that safeguard all electronics, appliances, and electrical systems throughout your home—protection that individual plug-in surge protectors can't provide.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">EV Charger Installation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Electric vehicle ownership is growing rapidly in Forest Acres. We install Level 2 EV chargers that fully charge your electric vehicle overnight, providing 25-40 miles of range per hour of charging. Our installations include proper circuit sizing, dedicated breaker installation, weatherproof mounting, and all necessary permits and inspections.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Electrical Safety Inspections</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      If you're buying an older Forest Acres home, experiencing frequent electrical problems, or simply want peace of mind about your electrical system's safety, our comprehensive electrical inspections identify potential hazards and code violations. We provide detailed written reports with photographs and recommendations for repairs or upgrades.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Why Forest Acres Residents Trust Carolina Georgia Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">10-15 Minute Emergency Response</h3>
                        <p className="text-foreground/90">
                          We maintain service vehicles throughout Richland County for rapid response to Forest Acres electrical emergencies. When you call, we dispatch immediately.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">Licensed and Insured Electricians</h3>
                        <p className="text-foreground/90">
                          Every electrician holds proper South Carolina electrical contractor licenses, carries comprehensive liability insurance, and follows NEC requirements on every job.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">Upfront, Honest Pricing</h3>
                        <p className="text-foreground/90">
                          We provide clear pricing before starting any work. No hidden fees, no surprise charges, no overtime rates—ever.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">100% Satisfaction Guarantee</h3>
                        <p className="text-foreground/90">
                          We stand behind our work with written warranties and a complete satisfaction guarantee. If you're not happy, we'll make it right.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Need an Electrician in Forest Acres?</h2>
              <p className="text-xl mb-6">
                24/7 emergency service • 10-15 minute response • Licensed & insured
              </p>
              <Button size="lg" variant="default" className="bg-white text-red-600 hover:bg-gray-100 text-xl px-8 py-6" asChild>
                <a href={phoneLink}>
                  <Phone className="mr-2 h-6 w-6" />
                  Call {phoneNumber} Now
                </a>
              </Button>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
