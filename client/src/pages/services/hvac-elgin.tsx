import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, Clock, CheckCircle, MapPin, Wind, ThermometerSun, Snowflake, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

export default function HVACArcadiaLakes1000() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneNumber = "(888) 885-7330";
  const phoneLink = "tel:+18888857330";

  return (
    <>
      <SEO
        title="HVAC Services in Arcadia Lakes, SC | 24/7 Emergency Heating and Air Conditioning | Carolina Georgia Services"
        description="Expert HVAC services in Arcadia Lakes, SC. 24/7 emergency heating and air conditioning repair, installation, and maintenance. 8-12 minute response time. Call (888) 885-7330."
        keywords="HVAC Arcadia Lakes SC, air conditioning repair Arcadia Lakes, heating repair Arcadia Lakes, AC installation Arcadia Lakes, furnace repair Arcadia Lakes, emergency HVAC Arcadia Lakes"
        schema={{
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          "name": "Carolina Georgia Services - Arcadia Lakes HVAC",
          "telephone": phoneNumber,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Arcadia Lakes",
            "addressRegion": "SC",
            "addressCountry": "US"
          },
          "areaServed": {
            "@type": "City",
            "name": "Arcadia Lakes"
          }
        }}
      />
      <div className="min-h-screen flex flex-col">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wind className="h-10 w-10" />
              <span className="text-2xl font-bold">24/7 EMERGENCY HVAC SERVICE IN ARCADIA LAKES, SC</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Expert Heating and Air Conditioning Services in Arcadia Lakes, South Carolina
            </h1>
            <p className="text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
              AC failure during Arcadia Lakes' sweltering summers? Furnace breakdown on a cold winter night? Carolina Georgia Services responds in 8-12 minutes with expert HVAC solutions. Serving Arcadia Lakes homeowners and businesses with professional heating, cooling, and ventilation services 24/7/365.
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
          <div className="container max-w-5xl text-center">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12 mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-foreground text-center">Arcadia Lakes' Trusted HVAC Experts</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Arcadia Lakes, South Carolina is an exclusive lakefront community known for its beautiful waterfront properties, tree-lined streets, and upscale homes. This small but affluent town surrounds its namesake lake, creating a unique environment where lakefront living meets suburban comfort. The proximity to water, mature landscaping, and high-end construction create specific HVAC challenges that require professional expertise and rapid emergency response.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Carolina Georgia Services has built strong relationships with Arcadia Lakes homeowners by providing fast, reliable HVAC services when they're needed most. Our strategic positioning allows us to reach any Arcadia Lakes address within 8-12 minutes for emergency HVAC repairs—faster than any other HVAC company serving the area. Whether you're dealing with a complete AC breakdown during July heat, a furnace failure on a January morning, or you need routine maintenance to prevent problems, our licensed HVAC technicians are ready to help 24/7/365.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                We understand that HVAC emergencies in Arcadia Lakes' valuable homes create immediate discomfort and potential property damage. That's why we maintain fully-stocked service vehicles positioned throughout Richland County, ensuring rapid response to every Arcadia Lakes property. No overtime charges, no hidden fees, no pressure sales tactics—just honest, professional HVAC service at fair prices.
              </p>
            </div>

            {/* Why Arcadia Lakes Needs Reliable HVAC */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground text-center">Why Arcadia Lakes Homes Need Reliable HVAC Systems</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Arcadia Lakes' lakefront location and upscale housing create specific HVAC challenges that homeowners must understand. The combination of extreme summer heat, high humidity from lake proximity, unpredictable winter weather, and valuable property means your heating and cooling system must perform reliably under demanding conditions. Here's what makes Arcadia Lakes unique:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Waves className="h-6 w-6 text-primary" />
                      Lakefront Humidity Challenges
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Arcadia Lakes' proximity to water creates consistently higher humidity levels than inland areas. This excess moisture puts additional stress on air conditioning systems, which must work harder to remove humidity while cooling. High humidity also accelerates HVAC component corrosion, promotes mold growth in ductwork, and makes homes feel warmer even at lower temperatures. Proper HVAC sizing and dehumidification capabilities are essential for Arcadia Lakes homes to maintain comfort and prevent moisture damage.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ThermometerSun className="h-6 w-6 text-primary" />
                      Extreme Summer Heat
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Arcadia Lakes summers are brutal. Average July temperatures hover around 93°F, but heat index values frequently exceed 105°F due to oppressive humidity from the lake. Your air conditioning system runs almost continuously for 4-5 months each year, putting enormous stress on compressors, condensers, and refrigerant systems. This constant operation accelerates wear and increases the likelihood of mid-summer breakdowns when you need AC most. Regular maintenance is essential to prevent failures.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Snowflake className="h-6 w-6 text-primary" />
                      Winter Temperature Swings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Arcadia Lakes winters are mild compared to northern climates, but temperature swings create unique challenges. One week might bring 65°F sunny days perfect for lakefront activities, while the next could drop to 25°F with freezing conditions. These dramatic fluctuations force your heating system to cycle frequently, stressing components and increasing the risk of furnace failures during the coldest nights when reliable heat is essential for safety and comfort.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wind className="h-6 w-6 text-primary" />
                      Upscale Home Construction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Arcadia Lakes features primarily upscale homes with complex HVAC requirements including multi-zone systems, high-efficiency equipment, smart thermostats, and integrated home automation. These sophisticated systems require professional expertise for installation, maintenance, and repair. Additionally, many Arcadia Lakes homes have large square footage, high ceilings, and extensive windows that increase cooling loads and require properly-sized, high-capacity HVAC systems to maintain consistent comfort.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Comprehensive HVAC Services */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground text-center">Comprehensive HVAC Services for Arcadia Lakes Homes & Businesses</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                Carolina Georgia Services provides complete heating, ventilation, and air conditioning solutions for residential and commercial properties throughout Arcadia Lakes. Our licensed technicians have the training, experience, and equipment to handle any HVAC challenge, from routine maintenance to emergency repairs to complete system replacements in upscale lakefront properties.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">24/7 Emergency HVAC Repair</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      HVAC emergencies don't wait for convenient times. Your AC compressor fails at 3 PM on a 98°F Saturday. Your heat pump quits at midnight when temperatures drop to 28°F. Your thermostat stops working during a holiday weekend. When these emergencies strike your Arcadia Lakes home, you need immediate help from licensed HVAC professionals who can diagnose and fix problems quickly.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      Carolina Georgia Services maintains 24/7/365 emergency HVAC service throughout Arcadia Lakes with no overtime charges or weekend fees. Our technicians carry extensive parts inventory on every service vehicle, allowing us to complete most emergency repairs on the first visit. We arrive in 8-12 minutes, diagnose the problem using advanced diagnostic equipment, explain your options clearly, provide upfront pricing, and restore comfort to your home as quickly as possible.
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
                      If your Arcadia Lakes home has an air conditioning system that's more than 10-12 years old, you're likely paying far more than necessary for cooling while receiving less comfort. Modern high-efficiency AC systems use 30-50% less electricity than older units while providing superior humidity control, quieter operation, and more consistent temperatures throughout your home—especially important in large lakefront properties.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      We help Arcadia Lakes homeowners select the right AC system for their specific needs, considering factors like home size, lakefront humidity levels, insulation quality, window efficiency, ductwork condition, and budget. Our installations are performed by factory-trained technicians who follow manufacturer specifications precisely, ensuring optimal performance and protecting your warranty. We handle all permits, inspections, and old equipment disposal, making the entire process hassle-free.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li>High-efficiency central air conditioning (16-20+ SEER)</li>
                      <li>Multi-zone systems for large lakefront homes</li>
                      <li>Heat pump systems for year-round comfort</li>
                      <li>Smart thermostat installation and integration</li>
                      <li>Whole-home dehumidification systems</li>
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
                      While Arcadia Lakes winters are milder than northern climates, reliable heating remains essential for comfort and safety during cold snaps. We service and repair all types of heating systems including gas furnaces, electric heat pumps, dual-fuel systems, and emergency heat. Our technicians can diagnose heating problems quickly and recommend whether repair or replacement makes the most financial sense for your situation.
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
                      Regular HVAC maintenance is the single most important thing you can do to prevent expensive breakdowns, extend equipment life, and keep energy costs under control—especially important for Arcadia Lakes' high-value homes. Our comprehensive maintenance programs include twice-yearly service visits (spring AC tune-up and fall heating inspection) that catch small problems before they become major failures.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      During each maintenance visit, our technicians perform a detailed 32-point inspection, clean critical components including outdoor coils affected by lake humidity, test system performance, check refrigerant levels, inspect electrical connections, and ensure your HVAC system is operating safely and efficiently. Maintenance program members also receive priority emergency service, exclusive discounts on repairs, and extended warranties on parts and labor.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Indoor Air Quality Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Arcadia Lakes' lakefront location creates significant indoor air quality challenges including high humidity, mold spores, and allergen accumulation. We install and service advanced air purification systems, whole-home dehumidifiers, UV light sanitizers, and high-efficiency air filters that remove allergens, mold spores, bacteria, and other contaminants from your home's air, creating a healthier living environment for your family.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Ductwork Repair & Replacement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Leaky or poorly-designed ductwork can waste 20-30% of your HVAC system's output, dramatically increasing energy bills and creating hot/cold spots throughout your Arcadia Lakes home. We provide professional duct sealing, insulation upgrades, and complete duct replacement services that improve comfort, reduce energy waste, and ensure your HVAC system operates at peak efficiency.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground text-center">Why Arcadia Lakes Residents Choose Carolina Georgia Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">8-12 Minute Emergency Response</h3>
                        <p className="text-foreground/90">
                          We maintain service vehicles throughout Richland County for rapid response to Arcadia Lakes HVAC emergencies. When you call, we dispatch immediately.
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
                        <h3 className="font-bold text-xl mb-2">Licensed and Insured Technicians</h3>
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
              <h2 className="text-3xl font-bold mb-4">Need HVAC Service in Arcadia Lakes?</h2>
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
