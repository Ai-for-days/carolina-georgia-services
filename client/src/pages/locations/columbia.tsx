import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Clock, MapPin, AlertCircle, CheckCircle2, Zap, Droplets, Flame } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect } from 'react';

export default function Columbia() {
  // Schema markup for local business and emergency services
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "HVACBusiness", "Plumber", "Electrician", "EmergencyService"],
      "name": "Carolina Georgia Services - Columbia, SC",
      "image": "https://carolinageorgiaservices.com/logo.webp",
      "telephone": "+18888857330",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Columbia",
        "addressRegion": "SC",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.0007,
        "longitude": -81.0348
      },
      "url": "https://carolinageorgiaservices.com/locations/columbia",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": {
        "@type": "City",
        "name": "Columbia",
        "containedInPlace": {
          "@type": "State",
          "name": "South Carolina"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Emergency Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency HVAC Repair",
              "description": "24/7 emergency air conditioning and heating repair in Columbia, SC"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Plumbing",
              "description": "24/7 emergency plumbing services including burst pipes and water heater failures"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Electrical",
              "description": "24/7 emergency electrical repairs and power restoration"
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Emergency HVAC, Plumbing and Electrical Columbia SC | 24/7 Service"
        description="Need emergency HVAC, plumbing, or electrical service in Columbia, SC? Call (888) 885-7330 for 24/7 rapid response. AC failures, burst pipes, power outages - we fix it fast!"
        keywords="emergency HVAC Columbia SC, emergency plumber Columbia, 24/7 electrician Columbia, AC repair Columbia, burst pipe Columbia, emergency service Columbia South Carolina"
      />

      {/* Emergency Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertCircle className="h-10 w-10 animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wide">24/7 Emergency Service Available Now</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency HVAC, Plumbing and Electrical Services in Columbia, SC
            </h1>
            <p className="text-xl mb-8 opacity-95">
              AC died in Columbia's brutal heat? Pipe burst flooding your downtown home? Power outage at your USC-area business? We're here 24/7 with the fastest emergency response in the capital city. Average arrival time: <strong>12-18 minutes</strong>.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Phone className="mr-2 h-6 w-6" />
                <a href="tel:+18888857330" className="font-bold">Call (888) 885-7330 Now</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <Clock className="mr-2 h-6 w-6" />
                Available 24/7/365
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-90">
              <CheckCircle2 className="inline h-5 w-5 mr-1" />
              Licensed and Insured • Upfront Pricing • No Overtime Charges
            </p>
          </div>
        </div>
      </section>

      {/* Urgent Situations Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Columbia Emergency? We're Already On Our Way
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              When your AC fails during a sweltering Columbia summer, a pipe bursts in your Shandon home, or you lose power at your State House-area office, every second matters. Carolina Georgia Services provides immediate emergency response across all Columbia neighborhoods 24 hours a day, 7 days a week, 365 days a year - including holidays.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-red-200">
                <CardHeader>
                  <Flame className="h-12 w-12 text-red-600 mb-2" />
                  <CardTitle className="text-red-600">HVAC Emergencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• AC complete failure (life-threatening in SC heat)</li>
                    <li>• Heat pump not working (winter emergencies)</li>
                    <li>• Burning smell from HVAC system</li>
                    <li>• System making loud grinding noises</li>
                    <li>• Refrigerant leak (warm air blowing)</li>
                    <li>• Frozen evaporator coils</li>
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-red-600">
                    Call <a href="tel:+18888857330" className="underline">(888) 885-7330</a> immediately
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <Droplets className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-600">Plumbing Emergencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Burst pipes causing flooding</li>
                    <li>• Sewer backup into home/business</li>
                    <li>• Water heater complete failure</li>
                    <li>• Major leaks damaging property</li>
                    <li>• Toilet overflowing continuously</li>
                    <li>• Sump pump failure (flooding risk)</li>
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-blue-600">
                    24/7 emergency plumber: <a href="tel:+18888857330" className="underline">(888) 885-7330</a>
                  </p>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardHeader>
                  <Zap className="h-12 w-12 text-yellow-600 mb-2" />
                  <CardTitle className="text-yellow-600">Electrical Emergencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Total power loss to property</li>
                    <li>• Sparking outlets (fire hazard)</li>
                    <li>• Burning electrical odor</li>
                    <li>• Breakers constantly tripping</li>
                    <li>• Storm/lightning damage</li>
                    <li>• Exposed wiring (dangerous)</li>
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-yellow-600">
                    Emergency electrician: <a href="tel:+18888857330" className="underline">(888) 885-7330</a>
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-red-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Don't Wait - Every Minute Counts</h3>
                  <p className="text-muted-foreground mb-3">
                    Emergency situations escalate rapidly in Columbia's climate. A small leak becomes catastrophic water damage. A struggling AC unit fails completely when it hits 98°F. An electrical spark becomes a house fire. Our Columbia emergency team is standing by RIGHT NOW - fully stocked trucks, experienced technicians, ready to roll to your location.
                  </p>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    <Phone className="mr-2 h-5 w-5" />
                    <a href="tel:+18888857330">Call (888) 885-7330 - We Answer Immediately</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Columbia Trusts Us */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Columbia Calls Us First in Emergencies
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Fastest Response Across All Columbia Neighborhoods</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We know every street in Columbia. From downtown to Five Points, from Shandon to Forest Acres, from the Vista to Rosewood, we reach you faster than anyone else. Our average emergency response time in Columbia is just 12-18 minutes - not the 2-3 hours other companies make you wait.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Downtown/State House area:</strong> 10-15 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>USC/Five Points:</strong> 12-18 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Shandon/Rosewood:</strong> 15-20 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Forest Acres/Trenholm:</strong> 12-18 minutes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>All Three Trades - One Emergency Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Unlike competitors who only handle one trade, we do it all. HVAC, plumbing, electrical - all under one roof with one emergency number. When your AC fails and you discover an electrical issue, you don't waste time calling multiple contractors. One call to <a href="tel:+18888857330" className="text-primary font-semibold underline">(888) 885-7330</a> solves everything.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>State-licensed HVAC technicians</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Master plumbers available 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Licensed electricians on call</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>We Understand Columbia's Unique Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Columbia's position at the confluence of the Saluda, Broad, and Congaree rivers, combined with South Carolina's extreme heat and the historic 2015 flood, creates unique challenges. We understand what Columbia properties face:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Extreme summer heat:</strong> AC units struggle in 95-102°F temperatures with high humidity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Flood vulnerability:</strong> River proximity means drainage and sump pumps are critical</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Historic homes:</strong> Shandon, Rosewood, and Elmwood have aging systems needing expert care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Severe storms:</strong> Lightning strikes, power surges, and wind damage are common</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Honest Emergency Pricing - No Surprises</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    No hidden fees. No "emergency surcharges" that double your bill at 3 AM. We provide transparent, upfront pricing before we start any work - even in the middle of the night. You'll know exactly what you're paying before we fix your emergency.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>No overtime charges for nights/weekends/holidays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Upfront quotes before work begins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Full warranty on all emergency repairs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Columbia Businesses & Major Employers */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Trusted by Columbia's Largest Employers & Businesses
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              From the State House to Fort Jackson, from Prisma Health to the University of South Carolina, Columbia businesses and institutions trust us for emergency commercial HVAC, plumbing, and electrical service. When your operations are at risk, we respond immediately with commercial-grade solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Commercial Emergency Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We serve Columbia's major employers and business sectors:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• State of South Carolina government facilities</li>
                    <li>• Prisma Health, Lexington Medical, Palmetto Health</li>
                    <li>• University of South Carolina campus buildings</li>
                    <li>• Fort Jackson military installation</li>
                    <li>• Manufacturing and distribution centers</li>
                    <li>• Downtown office buildings and hotels</li>
                    <li>• Retail and restaurant establishments</li>
                  </ul>
                  <p className="mt-4 text-sm">
                    <strong>Commercial emergency line:</strong> <a href="tel:+18888857330" className="text-primary font-semibold underline">(888) 885-7330</a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Columbia Businesses Choose Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Minimize downtime:</strong> We know every hour closed costs you money</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>After-hours service:</strong> We work around your business hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Preventive contracts:</strong> Avoid emergencies with regular maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Commercial expertise:</strong> Large systems, complex issues - we handle it all</span>
                    </li>
                  </ul>
                  <Link href="/commercial">
                    <Button variant="outline" className="w-full mt-4">
                      View Commercial Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Weather-Specific Emergencies */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Columbia Weather Emergencies We Handle Every Day
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              South Carolina's capital city faces extreme weather that constantly stresses home and business systems. Here's what we see most often:
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flame className="h-6 w-6 text-red-600" />
                    Summer Heat Emergencies (May-September)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Columbia regularly hits 95-102°F with crushing humidity. AC failures become medical emergencies, especially for elderly residents, young children, and those with health conditions. We see emergency calls spike when:
                  </p>
                  <ul className="space-y-2 text-sm mb-4">
                    <li>• AC units fail under extreme heat load</li>
                    <li>• Compressors burn out from constant operation</li>
                    <li>• Refrigerant leaks cause total cooling loss</li>
                    <li>• Electrical panels overload from AC power draw</li>
                    <li>• Ductwork leaks waste precious cool air</li>
                  </ul>
                  <p className="text-sm font-semibold">
                    <strong>AC emergency? Don't risk heat stroke.</strong> Call <a href="tel:+18888857330" className="text-primary underline">(888) 885-7330</a> for same-day AC repair.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-6 w-6 text-blue-600" />
                    Storm & Flood Emergencies (Year-Round, Especially Fall)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Columbia's three rivers and the devastating 2015 "1000-year flood" remind us that water emergencies are always a threat. Severe thunderstorms create immediate plumbing and electrical crises:
                  </p>
                  <ul className="space-y-2 text-sm mb-4">
                    <li>• Sump pump failures causing rapid basement flooding</li>
                    <li>• Lightning strikes destroying HVAC and electrical systems</li>
                    <li>• Power surges frying expensive equipment</li>
                    <li>• Sewer backups during heavy rainfall</li>
                    <li>• Tree damage to power lines and roof penetrations</li>
                  </ul>
                  <p className="text-sm font-semibold">
                    <strong>Flooding or storm damage?</strong> 24/7 emergency line: <a href="tel:+18888857330" className="text-primary underline">(888) 885-7330</a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-yellow-600" />
                    Winter Cold Snap Emergencies (December-February)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    While Columbia winters are generally mild, sudden cold snaps catch homeowners unprepared:
                  </p>
                  <ul className="space-y-2 text-sm mb-4">
                    <li>• Frozen pipes bursting when temperatures drop below 25°F</li>
                    <li>• Heat pumps failing in extreme cold (backup heat needed)</li>
                    <li>• Water heaters overwhelmed by increased demand</li>
                    <li>• Furnaces that haven't run in months refusing to start</li>
                    <li>• Outdoor faucets and irrigation systems freezing</li>
                  </ul>
                  <p className="text-sm font-semibold">
                    <strong>No heat or burst pipes?</strong> Emergency service: <a href="tel:+18888857330" className="text-primary underline">(888) 885-7330</a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AlertCircle className="h-16 w-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Emergency Won't Wait - Neither Should You
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Every minute you delay, the problem worsens and repair costs increase. Our Columbia emergency team is standing by RIGHT NOW with fully stocked trucks, experienced technicians, and the parts needed to fix your problem. We answer our phones 24/7/365 - even Christmas Day.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-lg">
                <Phone className="h-6 w-6" />
                <span className="font-bold">Emergency Hotline:</span>
                <a href="tel:+18888857330" className="text-3xl font-bold underline">(888) 885-7330</a>
              </div>
              <p className="text-sm opacity-90">
                <Clock className="inline h-5 w-5 mr-1" />
                Average response time in Columbia: 12-18 minutes
              </p>
            </div>
            <Button size="lg" variant="secondary" className="text-xl px-12 py-8">
              <Phone className="mr-3 h-8 w-8" />
              <a href="tel:+18888857330" className="font-bold">Call Now - We're Ready For Your Call</a>
            </Button>
            <p className="mt-8 text-sm opacity-90">
              Serving all of Columbia, SC including Downtown, Five Points, Shandon, Rosewood, Forest Acres, The Vista, Elmwood Park, and all surrounding neighborhoods. Licensed, insured, and trusted by your neighbors and Columbia's largest employers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
