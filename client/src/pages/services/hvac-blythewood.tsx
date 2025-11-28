import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, Clock, CheckCircle, MapPin, Wind, ThermometerSun, Snowflake, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

export default function HVACColumbia1000() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneNumber = "(888) 885-7330";
  const phoneLink = "tel:+18888857330";

  return (
    <>
      <SEO
        title="HVAC Services in Columbia, SC | 24/7 Emergency Heating and Air Conditioning | Carolina Georgia Services"
        description="Expert HVAC services in Columbia, SC. 24/7 emergency heating and air conditioning repair, installation, and maintenance. 15-25 minute response time. Call (888) 885-7330."
        keywords="HVAC Columbia SC, air conditioning repair Columbia, heating repair Columbia, AC installation Columbia, furnace repair Columbia, emergency HVAC Columbia"
        schema={{
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          "name": "Carolina Georgia Services - Columbia HVAC",
          "telephone": phoneNumber,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Columbia",
            "addressRegion": "SC",
            "addressCountry": "US"
          },
          "areaServed": {
            "@type": "City",
            "name": "Columbia"
          },
          "availableChannel": {
            "@type": "ServiceChannel",
            "servicePhone": {
              "@type": "ContactPoint",
              "telephone": phoneNumber,
              "contactType": "Emergency Service",
              "availableLanguage": "English",
              "hoursAvailable": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
            }
          }
        }}
      />
      <div className="min-h-screen flex flex-col">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wind className="h-10 w-10" />
              <span className="text-2xl font-bold">24/7 EMERGENCY HVAC SERVICE IN COLUMBIA, SC</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Expert Heating and Air Conditioning Services in Columbia, South Carolina
            </h1>
            <p className="text-2xl mb-8 leading-relaxed max-w-4xl">
              When your AC fails during Columbia's sweltering summers or your furnace breaks down on a cold winter night, Carolina Georgia Services responds in 15-25 minutes with expert HVAC solutions. Serving Columbia homeowners and businesses with professional heating, cooling, and ventilation services since day one.
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
                <span className="font-semibold text-xl">Response: 15-25 minutes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container max-w-5xl">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Columbia's Trusted HVAC Experts</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Columbia, South Carolina experiences some of the most challenging climate conditions in the Southeast. Summer temperatures regularly soar above 95°F with oppressive humidity, while winter cold snaps can push temperatures below freezing. Your HVAC system works harder in Columbia than in most other cities, making professional maintenance and rapid emergency response absolutely critical for your comfort and safety.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Carolina Georgia Services has built our reputation in Columbia by providing fast, reliable HVAC services when you need them most. Whether you're dealing with a complete AC breakdown during a July heatwave, a furnace failure on a January morning, or you simply need routine maintenance to keep your system running efficiently, our licensed HVAC technicians are ready to help 24 hours a day, 7 days a week.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                We understand that HVAC emergencies don't wait for convenient times. That's why we maintain a strategic presence throughout Richland County with fully-stocked service vehicles and experienced technicians who can reach your Columbia home or business in 15-25 minutes. No overtime charges, no hidden fees—just honest, professional HVAC service at fair prices.
              </p>
            </div>

            {/* Why Columbia Needs Reliable HVAC */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Why Columbia Homes Need Reliable HVAC Systems</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Columbia's subtropical climate creates unique challenges for heating and cooling systems. The combination of extreme summer heat, high humidity, occasional winter freezes, and year-round temperature fluctuations means your HVAC system must perform reliably under demanding conditions. Here's what makes Columbia's climate so tough on HVAC equipment:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ThermometerSun className="h-6 w-6 text-primary" />
                      Brutal Summer Heat
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Columbia summers are relentless. With average July temperatures around 93°F and heat index values frequently exceeding 105°F, your air conditioning system runs almost continuously for 4-5 months each year. This constant operation puts enormous stress on compressors, fans, and refrigerant systems, leading to premature wear and unexpected breakdowns.
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
                      Columbia winters are unpredictable. One week might bring 60°F sunny days, the next could drop to 25°F with freezing rain. These dramatic temperature swings force your heating system to cycle on and off frequently, stressing components and increasing the likelihood of furnace failures during the coldest nights when you need heat most.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wind className="h-6 w-6 text-primary" />
                      High Humidity Challenges
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Columbia's humidity levels regularly exceed 70%, creating perfect conditions for mold growth, indoor air quality problems, and excessive strain on your AC's dehumidification capabilities. Without proper HVAC maintenance, high humidity can damage your home, trigger allergies, and dramatically increase cooling costs.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="h-6 w-6 text-primary" />
                      Aging HVAC Infrastructure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">
                      Many Columbia homes, particularly in established neighborhoods like Shandon, Forest Acres, and Rosewood, have HVAC systems that are 10-15 years old or older. These aging systems are less efficient, more prone to breakdowns, and often lack modern features like smart thermostats and variable-speed compressors that could save you hundreds of dollars annually.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Comprehensive HVAC Services */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Comprehensive HVAC Services for Columbia Homes & Businesses</h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                Carolina Georgia Services provides complete heating, ventilation, and air conditioning solutions for residential and commercial properties throughout Columbia. Our licensed technicians have the training, experience, and equipment to handle any HVAC challenge, from routine maintenance to complex system installations.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">24/7 Emergency HVAC Repair</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      HVAC emergencies strike without warning. Your AC compressor fails during a 98°F afternoon. Your furnace quits at 2 AM when temperatures drop to 28°F. Your heat pump freezes over during an ice storm. When these emergencies happen, you need immediate help—not an appointment three days from now.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      Carolina Georgia Services maintains 24/7/365 emergency HVAC service throughout Columbia with no overtime charges. Our technicians carry extensive parts inventory on every service vehicle, allowing us to complete most emergency repairs on the first visit. We diagnose the problem quickly, explain your options clearly, provide upfront pricing, and get your system running again as fast as possible.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li>AC compressor failures and refrigerant leaks</li>
                      <li>Furnace ignition problems and heating failures</li>
                      <li>Thermostat malfunctions and wiring issues</li>
                      <li>Frozen heat pumps and defrost cycle problems</li>
                      <li>Blower motor failures and airflow issues</li>
                      <li>Emergency system shutdowns and safety concerns</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Air Conditioning Installation & Replacement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      If your Columbia home has an air conditioning system that's more than 10-12 years old, you're likely paying far more than necessary for cooling. Modern high-efficiency AC systems use 30-50% less electricity than older units while providing superior comfort, better humidity control, and quieter operation.
                    </p>
                    <p className="text-foreground/90 mb-4">
                      We help Columbia homeowners select the right AC system for their specific needs, considering factors like home size, insulation quality, window efficiency, and budget. Our installations are performed by factory-trained technicians who follow manufacturer specifications precisely, ensuring optimal performance and protecting your warranty. We handle all permits, inspections, and old equipment disposal, making the entire process hassle-free.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li>High-efficiency central air conditioning systems (16-20+ SEER)</li>
                      <li>Ductless mini-split AC for room additions and renovations</li>
                      <li>Heat pump systems for year-round heating and cooling</li>
                      <li>Smart thermostat installation and home automation integration</li>
                      <li>Zoned HVAC systems for multi-level homes</li>
                      <li>Energy-efficient upgrades and rebate assistance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Heating System Repair & Replacement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      While Columbia winters are milder than northern climates, reliable heating is still essential for comfort and safety during cold snaps. We service and repair all types of heating systems including gas furnaces, electric heat pumps, and dual-fuel systems. Our technicians can diagnose heating problems quickly and recommend whether repair or replacement makes the most financial sense.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li>Gas furnace repair and replacement (all major brands)</li>
                      <li>Heat pump service and emergency heat troubleshooting</li>
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
                      During each maintenance visit, our technicians perform a detailed 32-point inspection, clean critical components, test system performance, check refrigerant levels, inspect electrical connections, and ensure your HVAC system is operating safely and efficiently. Maintenance program members also receive priority emergency service and exclusive discounts on repairs.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Indoor Air Quality Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Columbia's high humidity and pollen levels create significant indoor air quality challenges. We install and service advanced air purification systems, whole-home dehumidifiers, UV light sanitizers, and high-efficiency air filters that remove allergens, mold spores, bacteria, and other contaminants from your home's air.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Ductwork Repair & Replacement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Leaky or poorly-designed ductwork can waste 20-30% of your HVAC system's output, dramatically increasing energy bills and creating hot/cold spots throughout your home. We provide professional duct sealing, insulation upgrades, and complete duct replacement services that improve comfort and reduce energy waste.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Why Columbia Residents Choose Carolina Georgia Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">15-25 Minute Emergency Response</h3>
                        <p className="text-foreground/90">
                          We maintain service vehicles throughout Columbia for rapid response to HVAC emergencies. When you call, we dispatch immediately—not hours later.
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
              <h2 className="text-3xl font-bold mb-4">Need HVAC Service in Columbia?</h2>
              <p className="text-xl mb-6">
                24/7 emergency service • 15-25 minute response • No overtime charges
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
