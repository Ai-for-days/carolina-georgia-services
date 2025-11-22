import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, Clock, CheckCircle, MapPin, Wind, ThermometerSun, Snowflake, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

export default function HVACCayce1000() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneNumber = "(888) 885-7330";
  const phoneLink = "tel:+18888857330";

  return (
    <>
      <SEO
        title="HVAC Services in Cayce, SC | 24/7 Emergency Heating & Air Conditioning | Carolina Georgia Services"
        description="Expert HVAC services in Cayce, SC. 24/7 emergency heating and air conditioning repair, installation, and maintenance. 8-12 minute response time. Call (888) 885-7330."
        keywords="HVAC Cayce SC, air conditioning repair Cayce, heating repair Cayce, AC installation Cayce, furnace repair Cayce, emergency HVAC Cayce"
        schema={{
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          "name": "Carolina Georgia Services - Cayce HVAC",
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
              <Wind className="h-10 w-10" />
              <span className="text-2xl font-bold">24/7 EMERGENCY HVAC SERVICE IN CAYCE, SC</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Expert Heating & Air Conditioning Services in Cayce, South Carolina
            </h1>
            <p className="text-2xl mb-8 leading-relaxed max-w-4xl">
              AC failure during Cayce's humid summers? Furnace breakdown on a cold winter night? Carolina Georgia Services responds in 8-12 minutes with expert HVAC solutions. Serving Cayce homeowners and businesses with professional heating, cooling, and ventilation services 24/7/365.
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
              <h2 className="text-4xl font-bold mb-6 text-foreground">Cayce's Trusted HVAC Experts</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Cayce, South Carolina sits directly across the Congaree River from Columbia, sharing the same challenging subtropical climate that puts enormous stress on heating and cooling systems. Summer temperatures regularly exceed 95°F with oppressive humidity that makes air conditioning essential for comfort and safety. Winter cold snaps can drop temperatures into the 20s, requiring reliable heating to keep families comfortable.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Carolina Georgia Services has built strong relationships with Cayce homeowners and businesses by providing fast, reliable HVAC services when they're needed most. Our strategic location near Cayce allows us to reach any address in the city within 8-12 minutes for emergency HVAC repairs—faster than any other HVAC company serving the area. Whether you're dealing with a complete AC breakdown during July heat, a furnace failure on a January morning, or you need routine maintenance to prevent problems, our licensed HVAC technicians are ready to help 24/7/365.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                We understand that HVAC emergencies create immediate discomfort and potential safety hazards. That's why we maintain fully-stocked service vehicles positioned throughout Lexington and Richland Counties, ensuring rapid response to every Cayce address. No overtime charges, no hidden fees, no pressure sales tactics—just honest, professional HVAC service at fair prices.
              </p>
            </div>

            {/* Why Cayce Needs Reliable HVAC */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Why Cayce Homes Need Reliable HVAC Systems</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Cayce's location in the South Carolina Midlands creates unique HVAC challenges. The combination of extreme summer heat, high humidity, unpredictable winter weather, and proximity to the Congaree River means your heating and cooling system must perform reliably under demanding conditions. Here's what makes Cayce's climate so challenging for HVAC equipment:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ThermometerSun className="h-6 w-6 text-primary" />
                      Extreme Summer Heat & Humidity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Cayce summers are brutal. Average July temperatures hover around 93°F, but heat index values frequently exceed 105°F due to oppressive humidity from the nearby Congaree River. Your air conditioning system runs almost continuously for 4-5 months each year, putting enormous stress on compressors, condensers, and refrigerant systems. This constant operation accelerates wear and increases the likelihood of mid-summer breakdowns when you need AC most.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Snowflake className="h-6 w-6 text-primary" />
                      Unpredictable Winter Weather
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Cayce winters are mild compared to northern climates, but temperature swings create unique challenges. One week might bring 65°F sunny days perfect for outdoor activities, while the next could drop to 25°F with freezing rain. These dramatic fluctuations force your heating system to cycle frequently, stressing components and increasing the risk of furnace failures during the coldest nights when reliable heat is essential for safety and comfort.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wind className="h-6 w-6 text-primary" />
                      River Proximity & Moisture
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Cayce's location along the Congaree River creates persistently high humidity levels that challenge HVAC systems year-round. Excessive moisture promotes mold growth in ductwork, reduces indoor air quality, and forces air conditioning systems to work harder to remove humidity from indoor air. Without proper HVAC maintenance and humidity control, Cayce homes can develop serious moisture problems that damage property and trigger respiratory issues.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-6 w-6 text-primary" />
                      Mix of Old & New Construction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Cayce features a diverse housing stock ranging from historic homes in Old Brookland and downtown Cayce to newer developments near Riverwalk Park. Older homes often have undersized, inefficient HVAC systems that struggle to maintain comfort, while newer homes may have improperly-sized equipment installed by builders focused on minimizing costs rather than maximizing comfort and efficiency. Professional HVAC evaluation ensures your system matches your home's specific needs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Comprehensive HVAC Services */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Comprehensive HVAC Services for Cayce Homes & Businesses</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                Carolina Georgia Services provides complete heating, ventilation, and air conditioning solutions for residential and commercial properties throughout Cayce. Our licensed technicians have the training, experience, and equipment to handle any HVAC challenge, from routine maintenance to emergency repairs to complete system replacements.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">24/7 Emergency HVAC Repair</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      HVAC emergencies don't wait for convenient times. Your AC compressor fails at 3 PM on a 98°F Saturday. Your heat pump quits at midnight when temperatures drop to 28°F. Your thermostat stops working during a holiday weekend. When these emergencies strike your Cayce home, you need immediate help from licensed HVAC professionals who can diagnose and fix problems quickly.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      Carolina Georgia Services maintains 24/7/365 emergency HVAC service throughout Cayce with no overtime charges or weekend fees. Our technicians carry extensive parts inventory on every service vehicle, allowing us to complete most emergency repairs on the first visit. We arrive in 8-12 minutes, diagnose the problem using advanced diagnostic equipment, explain your options clearly, provide upfront pricing, and restore comfort to your home as quickly as possible.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li>AC compressor failures and refrigerant leaks</li>
                      <li>Furnace ignition problems and heating system failures</li>
                      <li>Heat pump defrost issues and emergency heat problems</li>
                      <li>Thermostat malfunctions and control system failures</li>
                      <li>Blower motor failures and airflow problems</li>
                      <li>Complete system breakdowns and safety shutdowns</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Air Conditioning Installation & Replacement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      If your Cayce home has an air conditioning system that's more than 10-12 years old, you're likely paying far more than necessary for cooling while receiving less comfort. Modern high-efficiency AC systems use 30-50% less electricity than older units while providing superior humidity control, quieter operation, and more consistent temperatures throughout your home.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      We help Cayce homeowners select the right AC system for their specific needs, considering factors like home size, insulation quality, window efficiency, ductwork condition, and budget. Our installations are performed by factory-trained technicians who follow manufacturer specifications precisely, ensuring optimal performance and protecting your warranty. We handle all permits, inspections, and old equipment disposal, making the entire process hassle-free.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li>High-efficiency central air conditioning (16-20+ SEER)</li>
                      <li>Ductless mini-split systems for additions and renovations</li>
                      <li>Heat pump systems for year-round comfort</li>
                      <li>Smart thermostat installation and integration</li>
                      <li>Zoned HVAC systems for multi-level homes</li>
                      <li>Energy-efficient upgrades with rebate assistance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Heating System Repair & Replacement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      While Cayce winters are milder than northern climates, reliable heating remains essential for comfort and safety during cold snaps. We service and repair all types of heating systems including gas furnaces, electric heat pumps, dual-fuel systems, and emergency heat. Our technicians can diagnose heating problems quickly and recommend whether repair or replacement makes the most financial sense for your situation.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li>Gas furnace repair and replacement (all major brands)</li>
                      <li>Heat pump service and defrost cycle troubleshooting</li>
                      <li>Electric heating system repair and upgrades</li>
                      <li>Dual-fuel system installation for maximum efficiency</li>
                      <li>Heating system tune-ups and safety inspections</li>
                      <li>Carbon monoxide testing and safety device installation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Preventive Maintenance Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Regular HVAC maintenance is the single most important thing you can do to prevent expensive breakdowns, extend equipment life, and keep energy costs under control. Our comprehensive maintenance programs include twice-yearly service visits (spring AC tune-up and fall heating inspection) that catch small problems before they become major failures.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      During each maintenance visit, our technicians perform a detailed 32-point inspection, clean critical components, test system performance, check refrigerant levels, inspect electrical connections, and ensure your HVAC system is operating safely and efficiently. Maintenance program members also receive priority emergency service, exclusive discounts on repairs, and extended warranties on parts and labor.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Indoor Air Quality Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Cayce's high humidity and proximity to the Congaree River create significant indoor air quality challenges including mold growth, allergen accumulation, and excessive moisture. We install and service advanced air purification systems, whole-home dehumidifiers, UV light sanitizers, and high-efficiency air filters that remove allergens, mold spores, bacteria, and other contaminants from your home's air, creating a healthier living environment for your family.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Ductwork Repair & Replacement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Leaky or poorly-designed ductwork can waste 20-30% of your HVAC system's output, dramatically increasing energy bills and creating hot/cold spots throughout your Cayce home. We provide professional duct sealing, insulation upgrades, and complete duct replacement services that improve comfort, reduce energy waste, and ensure your HVAC system operates at peak efficiency.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Why Cayce Residents Choose Carolina Georgia Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">8-12 Minute Emergency Response</h3>
                        <p className="text-foreground/90">
                          Our strategic location near Cayce allows us to reach any address in the city within 8-12 minutes for emergency HVAC repairs—faster than any other company.
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
                        <h3 className="font-bold text-xl mb-2">Licensed & Insured Technicians</h3>
                        <p className="text-foreground/90">
                          Every technician is fully licensed, background-checked, and continuously trained on the latest HVAC technology and best practices.
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
              <h2 className="text-3xl font-bold mb-4">Need HVAC Service in Cayce?</h2>
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
