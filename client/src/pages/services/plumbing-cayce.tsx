import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, Clock, CheckCircle, MapPin, Droplet, Wrench, AlertTriangle, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

export default function PlumbingCayce1000() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneNumber = "(888) 885-7330";
  const phoneLink = "tel:+18888857330";

  return (
    <>
      <SEO
        title="Plumbing Services in Cayce, SC | 24/7 Emergency Plumber | Carolina Georgia Services"
        description="Expert plumbing services in Cayce, SC. 24/7 emergency plumber for burst pipes, water heaters, drains, gas lines, and more. 8-12 minute response. Call (888) 885-7330."
        keywords="plumber Cayce SC, emergency plumber Cayce, burst pipe repair Cayce, water heater Cayce, drain cleaning Cayce, plumbing services Cayce"
        schema={{
          "@context": "https://schema.org",
          "@type": "Plumber",
          "name": "Carolina Georgia Services - Cayce Plumbing",
          "telephone": phoneNumber,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cayce",
            "addressRegion": "SC",
            "addressCountry": "US"
          },
          "areaServed": {
            "@type": "City",
            "name": "Cayce"
          }
        }}
      />
      <div className="min-h-screen flex flex-col">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Droplet className="h-10 w-10" />
              <span className="text-2xl font-bold">24/7 EMERGENCY PLUMBING SERVICE IN CAYCE, SC</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Expert Plumbing Services in Cayce, South Carolina
            </h1>
            <p className="text-2xl mb-8 leading-relaxed max-w-4xl">
              Burst pipe flooding your Cayce home? Water heater failure? Sewer backup? Carolina Georgia Services responds in 8-12 minutes with expert plumbing solutions. Serving Cayce homeowners and businesses with professional plumbing, drain cleaning, water heater installation, gas line service, and emergency repairs 24/7/365.
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
                <span className="font-semibold text-xl">Response: 8-12 minutes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container max-w-5xl">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Cayce's Most Trusted Plumbing Company</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Plumbing emergencies strike without warning and require immediate professional response. A burst pipe floods your Cayce home with hundreds of gallons per hour. Your water heater fails on Sunday morning, leaving your family without hot water. Your main sewer line backs up, creating unsanitary conditions and health hazards. When these disasters happen, you need a licensed plumber who answers immediately, arrives quickly, and fixes the problem right the first time.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Carolina Georgia Services has earned Cayce's trust by providing fast, reliable plumbing services when homeowners and businesses need help most. Our strategic location near Cayce allows us to reach any address in the city within 8-12 minutes for emergency plumbing repairs—faster response than any other plumbing company serving the area. We maintain fully-equipped service vehicles and experienced, licensed plumbers ready to handle any plumbing challenge 24/7/365.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Unlike many plumbing companies that charge premium rates for after-hours service, we never add overtime charges or weekend fees. You pay the same fair price whether you call at 2 PM on Tuesday or 2 AM on Saturday. Our upfront pricing means you know exactly what you'll pay before we start work—no surprises, no hidden fees, no pressure tactics.
              </p>
            </div>

            {/* Cayce Plumbing Challenges */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Why Cayce Homes Face Unique Plumbing Challenges</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Cayce's location along the Congaree River creates specific plumbing challenges that homeowners must understand to protect their property and avoid expensive water damage. The combination of river proximity, high water tables, aging infrastructure, and clay soil conditions means Cayce plumbing systems face more stress than homes in many other areas.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Waves className="h-6 w-6 text-primary" />
                      River Proximity & High Water Tables
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Cayce's location along the Congaree River means many homes have high water tables that put constant pressure on underground plumbing systems. During heavy rains or river flooding, groundwater can infiltrate sewer lines through cracks or damaged joints, causing backups and requiring professional repair. High water tables also accelerate corrosion of underground pipes and create challenges for sump pumps and drainage systems.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                      Aging Plumbing Infrastructure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Many Cayce neighborhoods—particularly in Old Brookland, downtown Cayce, and along Knox Abbott Drive—have homes built in the 1940s-1970s with original plumbing systems. These aging pipes are prone to corrosion, leaks, and sudden failures. Galvanized steel pipes common in older homes deteriorate from the inside out, causing low water pressure, rusty water, and eventually catastrophic pipe failures that flood homes and require expensive emergency repairs.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Droplet className="h-6 w-6 text-primary" />
                      Hard Water Problems
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Cayce's water supply contains high levels of dissolved minerals, creating "hard water" that causes scale buildup inside pipes, water heaters, and fixtures. This mineral accumulation reduces water flow, decreases water heater efficiency, shortens appliance lifespan, and eventually leads to expensive repairs. Water heaters in Cayce typically fail 2-3 years sooner than in soft water areas, making regular maintenance and timely replacement essential.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="h-6 w-6 text-primary" />
                      Clay Soil & Sewer Line Issues
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Cayce sits on expansive clay soil that swells when wet and shrinks when dry. This constant soil movement puts tremendous pressure on underground sewer lines, causing joints to separate, pipes to crack, and tree roots to infiltrate damaged sections. Sewer line problems are extremely common in Cayce, often requiring video inspection and professional repair or replacement to restore proper drainage.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Comprehensive Plumbing Services */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Complete Plumbing Services for Cayce Homes & Businesses</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                Carolina Georgia Services provides comprehensive plumbing solutions for residential and commercial properties throughout Cayce. Our licensed plumbers have the training, experience, and equipment to handle any plumbing challenge, from simple faucet repairs to complex sewer line replacements.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">24/7 Emergency Plumbing Repair</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Plumbing emergencies cause immediate damage and require instant response. A burst pipe can flood your Cayce home with hundreds of gallons per hour, destroying floors, walls, and personal belongings. A sewer backup creates unsanitary conditions and serious health hazards. A water heater failure leaves your family without hot water for showers, laundry, and dishes. When these emergencies strike, every minute counts.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      Carolina Georgia Services maintains 24/7/365 emergency plumbing service throughout Cayce with no overtime charges or weekend fees. Our plumbers carry extensive parts inventory on every service vehicle, allowing us to complete most emergency repairs on the first visit. We arrive in 8-12 minutes, diagnose the problem quickly, explain your options clearly, provide upfront pricing, and fix the issue right the first time.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li>Burst pipe repair and emergency water shutoff</li>
                      <li>Sewer line backups and drain emergencies</li>
                      <li>Water heater failures and gas leaks</li>
                      <li>Frozen pipe thawing and burst pipe prevention</li>
                      <li>Major leak detection and repair</li>
                      <li>Emergency fixture repairs (toilets, faucets, disposals)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Water Heater Installation & Repair</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Water heaters are one of the hardest-working appliances in your Cayce home, heating water 24/7/365 for showers, laundry, dishwashing, and more. Cayce's hard water accelerates mineral buildup inside tanks, reducing efficiency and shortening lifespan. Most water heaters in Cayce need replacement after 8-10 years, and failures often happen without warning, leaving families without hot water at the worst possible times.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      We install and service all types of water heaters including traditional tank models, tankless systems, heat pump water heaters, and hybrid units. Our plumbers help you select the right size and type for your household's needs, considering factors like family size, hot water usage patterns, energy costs, and available space. We handle all installation work including gas line connections, electrical wiring, venting, and code compliance.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li>Traditional tank water heater repair and replacement</li>
                      <li>Tankless water heater installation and service</li>
                      <li>Water heater maintenance and anode rod replacement</li>
                      <li>Emergency same-day water heater replacement</li>
                      <li>Energy-efficient water heater upgrades</li>
                      <li>Water heater expansion tank installation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Drain Cleaning & Sewer Line Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Clogged drains and sewer line problems are among the most common plumbing issues in Cayce homes. Kitchen drains clog with grease and food debris. Bathroom drains accumulate hair, soap scum, and personal care products. Main sewer lines become blocked by tree roots, collapsed pipes, or foreign objects. These problems start as minor annoyances but quickly escalate into major emergencies if ignored.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      Our professional drain cleaning services use advanced equipment including motorized drain snakes, hydro-jetting systems, and video inspection cameras to clear even the toughest clogs and identify underlying problems. We don't just clear the immediate blockage—we diagnose the root cause and recommend permanent solutions to prevent recurring problems.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li>Professional drain cleaning for all fixtures</li>
                      <li>Video camera drain and sewer line inspection</li>
                      <li>Hydro-jetting for stubborn clogs and root removal</li>
                      <li>Main sewer line repair and replacement</li>
                      <li>Trenchless sewer line repair (no yard excavation)</li>
                      <li>Preventive drain maintenance programs</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Water Line Repair & Replacement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Your home's main water line brings fresh water from the street to your house. When this critical pipe develops leaks or breaks completely, you face immediate water damage, loss of water service, and potentially expensive property damage. Water line problems in Cayce are often caused by soil movement, tree root intrusion, corrosion, or high water table pressure.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      We provide fast water line leak detection using electronic listening equipment and pressure testing. Our plumbers can repair minor leaks or replace entire water lines using modern materials like PEX and copper that resist corrosion and last decades. We handle all excavation, pipe installation, pressure testing, and restoration work.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Gas Line Installation & Repair</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Natural gas provides efficient, economical energy for furnaces, water heaters, stoves, dryers, and fireplaces. However, gas line work requires specialized training, licensing, and equipment to ensure safety. Improper gas line installation or repair can create dangerous gas leaks, fire hazards, and carbon monoxide risks.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      Our licensed plumbers are trained and certified for gas line work. We install new gas lines for appliances and gas logs, repair existing gas leaks, perform safety inspections, and handle all gas appliance connections. Every gas line installation includes pressure testing and leak detection to ensure complete safety.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Water Filtration Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Cayce's hard water and river proximity make whole-home water filtration systems increasingly popular. We install and service Waterdrop Filter products including whole-house filtration systems, under-sink filters, and reverse osmosis systems that remove chlorine, sediment, minerals, and contaminants from your water supply, providing cleaner, better-tasting water throughout your home.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Fixture Repairs & Replacements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Leaking faucets, running toilets, and broken garbage disposals are common plumbing annoyances that waste water and money. We repair and replace all types of plumbing fixtures including toilets, faucets, sinks, garbage disposals, and shower valves. Our plumbers carry common fixtures and parts on every service vehicle for same-day repairs.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Remodeling & New Construction Plumbing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Planning a bathroom renovation? Kitchen remodel? Home addition? We provide complete plumbing design and installation services for residential and commercial remodeling projects throughout Cayce. Our plumbers work closely with contractors, designers, and homeowners to deliver plumbing systems that meet code requirements while matching your vision and budget.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Why Cayce Residents Trust Carolina Georgia Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">8-12 Minute Emergency Response</h3>
                        <p className="text-foreground/90">
                          Our strategic location near Cayce allows us to reach any address in the city within 8-12 minutes for emergency plumbing repairs—faster than any other company.
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
                        <h3 className="font-bold text-xl mb-2">Licensed & Insured Plumbers</h3>
                        <p className="text-foreground/90">
                          Every plumber is fully licensed, background-checked, and continuously trained on the latest plumbing codes and techniques.
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
                          We stand behind our work with a complete satisfaction guarantee. If you're not happy, we'll make it right.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Need a Plumber in Cayce?</h2>
              <p className="text-xl mb-6">
                24/7 emergency service • 8-12 minute response • No overtime charges
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
