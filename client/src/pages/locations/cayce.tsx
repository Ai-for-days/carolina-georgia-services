import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Clock, MapPin, AlertCircle, CheckCircle2, Zap, Droplets, Flame } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect } from 'react';

export default function Cayce() {
  // Schema markup for local business and emergency services
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "HVACBusiness", "Plumber", "Electrician", "EmergencyService"],
      "name": "Carolina Georgia Services - Cayce, SC",
      "image": "https://carolinageorgiaservices.com/logo.webp",
      "telephone": "+18888857330",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cayce",
        "addressRegion": "SC",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.9657,
        "longitude": -81.0734
      },
      "url": "https://carolinageorgiaservices.com/locations/cayce",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": {
        "@type": "City",
        "name": "Cayce",
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
              "description": "24/7 emergency air conditioning and heating repair in Cayce, SC"
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
        title="Emergency HVAC, Plumbing & Electrical Cayce SC | 24/7 Service"
        description="Need emergency HVAC, plumbing, or electrical service in Cayce, SC? Call (888) 885-7330 for 24/7 rapid response. AC failures, burst pipes, power outages - we fix it fast!"
        keywords="emergency HVAC Cayce SC, emergency plumber Cayce, 24/7 electrician Cayce, AC repair Cayce, burst pipe Cayce, emergency service Cayce South Carolina"
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
              Emergency HVAC, Plumbing & Electrical Services in Cayce, SC
            </h1>
            <p className="text-xl mb-8 opacity-95">
              AC stopped working in this South Carolina heat? Burst pipe flooding your home? Power out? We're here 24/7 with rapid response to Cayce emergencies. Average arrival time: <strong>15-20 minutes</strong>.
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
              Licensed & Insured • Upfront Pricing • No Overtime Charges
            </p>
          </div>
        </div>
      </section>

      {/* Urgent Situations Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Experiencing an Emergency in Cayce? We're On Our Way
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              When your AC fails during a scorching Cayce summer, a pipe bursts in your Riverwalk home, or you lose power at your business near Guignard Park, every minute counts. Carolina Georgia Services provides immediate emergency response to Cayce residents and businesses 24 hours a day, 7 days a week, 365 days a year.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-red-200">
                <CardHeader>
                  <Flame className="h-12 w-12 text-red-600 mb-2" />
                  <CardTitle className="text-red-600">HVAC Emergencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• AC stopped cooling (critical in SC heat)</li>
                    <li>• Furnace won't heat (winter cold snaps)</li>
                    <li>• Strange noises or burning smells</li>
                    <li>• System won't turn on</li>
                    <li>• Refrigerant leaks</li>
                    <li>• Frozen coils or lines</li>
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
                    <li>• Burst pipes flooding your property</li>
                    <li>• Sewer backups or overflows</li>
                    <li>• Water heater failures (no hot water)</li>
                    <li>• Major leaks or water damage</li>
                    <li>• Clogged drains backing up</li>
                    <li>• Sump pump failures</li>
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
                    <li>• Complete power loss</li>
                    <li>• Sparking outlets or switches</li>
                    <li>• Burning electrical smell</li>
                    <li>• Tripped breakers that won't reset</li>
                    <li>• Storm damage to electrical system</li>
                    <li>• Exposed or damaged wiring</li>
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
                  <h3 className="font-bold text-lg mb-2">Don't Wait - Call Now</h3>
                  <p className="text-muted-foreground mb-3">
                    Emergency situations worsen quickly. A small leak becomes major water damage. A struggling AC unit fails completely in 95°F heat. An electrical issue becomes a fire hazard. Our Cayce emergency team is standing by right now to help you.
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

      {/* Why Cayce Trusts Us */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Cayce Residents Call Us First in Emergencies
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Fastest Response in Cayce</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We know Cayce inside and out. From the Riverwalk to Guignard Park, from City Hall to the Congaree River, we reach you fast. Our average emergency response time in Cayce is just 15-20 minutes - not hours like other companies.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Riverwalk area:</strong> 12-18 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Guignard Park vicinity:</strong> 15-20 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Near I-77/I-26:</strong> 10-15 minutes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>All Three Trades - One Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Unlike other companies that only handle one trade, we do it all. HVAC, plumbing, and electrical - all under one roof. When your AC fails and you discover a water leak, you don't need to call multiple contractors. One call to <a href="tel:+18888857330" className="text-primary font-semibold underline">(888) 885-7330</a> handles everything.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Licensed HVAC technicians</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Master plumbers on staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Licensed electricians ready 24/7</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>We Know Cayce's Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Cayce's location along the Congaree River, combined with South Carolina's brutal summer heat and humidity, creates unique challenges for home systems. We understand what Cayce properties face:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Summer heat stress:</strong> AC units work overtime in 95-100°F temperatures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>High humidity:</strong> Causes mold, condensation issues, and system strain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Flood risk:</strong> River proximity means sump pumps and drainage are critical</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Severe storms:</strong> Lightning, power surges, and wind damage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Transparent Emergency Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    No surprise charges. No "emergency fees" that triple your bill. We provide upfront pricing before we start work, even at 2 AM. You'll know exactly what you're paying before we fix your emergency.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>No overtime charges for nights/weekends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Upfront quotes before work begins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Comprehensive warranty on all repairs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Cayce Businesses */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Trusted by Cayce's Major Employers & Businesses
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              From City Hall to the hospitals, from manufacturing facilities to retail stores, Cayce businesses trust us for emergency commercial HVAC, plumbing, and electrical service. When your business operations are at risk, we respond immediately.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Commercial Emergency Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We serve Cayce's business community including:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• City of Cayce government facilities</li>
                    <li>• Lexington Medical Center Cayce</li>
                    <li>• Manufacturing plants along Knox Abbott Drive</li>
                    <li>• Retail stores and restaurants</li>
                    <li>• Office buildings and professional services</li>
                    <li>• Warehouses and distribution centers</li>
                  </ul>
                  <p className="mt-4 text-sm">
                    <strong>Commercial emergency line:</strong> <a href="tel:+18888857330" className="text-primary font-semibold underline">(888) 885-7330</a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Businesses Choose Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Minimize downtime:</strong> We understand lost business time costs money</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>After-hours service:</strong> We work around your business schedule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Preventive maintenance:</strong> Avoid emergencies with regular service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Commercial expertise:</strong> Large systems, complex issues - we handle it</span>
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
              Cayce Weather Emergencies We Handle Daily
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              South Carolina's extreme weather puts constant stress on your home systems. Here's what we see most often in Cayce:
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flame className="h-6 w-6 text-red-600" />
                    Summer Heat Emergencies (June-September)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    When temperatures hit 95-100°F with oppressive humidity, AC failures become life-threatening emergencies, especially for elderly residents and young children. We see a surge in calls when:
                  </p>
                  <ul className="space-y-2 text-sm mb-4">
                    <li>• AC units fail under extreme load</li>
                    <li>• Compressors burn out from overwork</li>
                    <li>• Refrigerant leaks cause complete cooling loss</li>
                    <li>• Electrical panels trip from AC power draw</li>
                  </ul>
                  <p className="text-sm font-semibold">
                    <strong>AC emergency? Don't suffer in dangerous heat.</strong> Call <a href="tel:+18888857330" className="text-primary underline">(888) 885-7330</a> now for same-day AC repair.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-6 w-6 text-blue-600" />
                    Storm & Flood Emergencies (Year-Round)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Cayce's proximity to the Congaree River and severe thunderstorms create plumbing and electrical emergencies:
                  </p>
                  <ul className="space-y-2 text-sm mb-4">
                    <li>• Sump pump failures causing basement flooding</li>
                    <li>• Lightning strikes damaging electrical systems</li>
                    <li>• Power surges destroying HVAC equipment</li>
                    <li>• Sewer backups during heavy rains</li>
                  </ul>
                  <p className="text-sm font-semibold">
                    <strong>Flooding or storm damage?</strong> Call our 24/7 emergency line: <a href="tel:+18888857330" className="text-primary underline">(888) 885-7330</a>
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
                    While Cayce winters are mild, sudden cold snaps catch homeowners off guard:
                  </p>
                  <ul className="space-y-2 text-sm mb-4">
                    <li>• Frozen pipes bursting when temperatures drop below freezing</li>
                    <li>• Heat pumps failing in extreme cold</li>
                    <li>• Water heaters struggling with increased demand</li>
                    <li>• Furnaces that haven't run in months refusing to start</li>
                  </ul>
                  <p className="text-sm font-semibold">
                    <strong>No heat or burst pipes?</strong> Emergency heating and plumbing: <a href="tel:+18888857330" className="text-primary underline">(888) 885-7330</a>
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
              Don't Wait - Your Emergency Won't Fix Itself
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Every minute you wait, the problem gets worse and more expensive. Our Cayce emergency team is standing by RIGHT NOW - fully stocked trucks, experienced technicians, ready to roll. We answer our phones 24/7/365, even on holidays.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-lg">
                <Phone className="h-6 w-6" />
                <span className="font-bold">Emergency Hotline:</span>
                <a href="tel:+18888857330" className="text-3xl font-bold underline">(888) 885-7330</a>
              </div>
              <p className="text-sm opacity-90">
                <Clock className="inline h-5 w-5 mr-1" />
                Average response time in Cayce: 15-20 minutes
              </p>
            </div>
            <Button size="lg" variant="secondary" className="text-xl px-12 py-8">
              <Phone className="mr-3 h-8 w-8" />
              <a href="tel:+18888857330" className="font-bold">Call Now - We're Waiting For Your Call</a>
            </Button>
            <p className="mt-8 text-sm opacity-90">
              Serving all of Cayce, SC including Riverwalk, Guignard Park, Knox Abbott Drive, State Street, and all surrounding areas. Licensed, insured, and trusted by your neighbors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
