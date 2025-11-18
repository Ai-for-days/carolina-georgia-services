import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Clock, Phone, MapPin, Navigation, Cloud, Building2, Users, Zap } from 'lucide-react';
import { Link } from 'wouter';

export default function Columbia() {
  return (
    <div className="min-h-screen">
      <SEO
        title="HVAC, Plumbing & Electrical Services in Columbia, SC | Carolina Georgia Services"
        description="Expert HVAC, plumbing, and electrical services in Columbia, South Carolina. Serving downtown, USC, Five Points, and all Columbia neighborhoods with 24/7 emergency service."
        keywords="HVAC Columbia SC, plumber Columbia, electrician Columbia, AC repair Columbia, emergency plumber Columbia SC, Columbia HVAC repair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-8 w-8" />
              <span className="text-sm font-semibold uppercase tracking-wide">Columbia, South Carolina</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Columbia's Trusted HVAC, Plumbing & Electrical Experts
            </h1>
            <p className="text-xl mb-8 opacity-95">
              Serving South Carolina's capital city for over a decade. From the State House to USC campus, from Five Points to Forest Acres, we're your local service experts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-5 w-5" />
                Call (888) 885-7330
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                24/7 Emergency Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Details */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Coverage Across Columbia</h2>
            <p className="text-xl text-muted-foreground">
              We serve every neighborhood, business district, and community in Columbia, SC
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <MapPin className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Service Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete coverage of Columbia and surrounding areas:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Downtown Columbia</li>
                  <li>• USC & Five Points</li>
                  <li>• The Vista District</li>
                  <li>• Shandon & Rosewood</li>
                  <li>• Forest Acres</li>
                  <li>• Eau Claire & Olympia</li>
                  <li>• North Columbia</li>
                  <li>• South Columbia</li>
                  <li>• East Columbia</li>
                  <li>• West Columbia Border</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Response Times</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Fast response times across all Columbia areas:
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold">Downtown/Vista</div>
                    <div className="text-muted-foreground">12-20 minutes</div>
                  </div>
                  <div>
                    <div className="font-semibold">USC/Five Points</div>
                    <div className="text-muted-foreground">15-25 minutes</div>
                  </div>
                  <div>
                    <div className="font-semibold">Shandon/Rosewood</div>
                    <div className="text-muted-foreground">18-28 minutes</div>
                  </div>
                  <div>
                    <div className="font-semibold">North/South Columbia</div>
                    <div className="text-muted-foreground">20-30 minutes</div>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <strong>Average arrival:</strong> 18 minutes citywide
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Navigation className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Easy Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Strategically located for rapid response across Columbia:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Minutes from I-26, I-77, I-20</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Central Columbia location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>GPS-tracked fleet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Real-time ETA updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Find Us in Columbia</h2>
            <p className="text-xl text-muted-foreground">
              Easy access from major Columbia landmarks and interstates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>From SC State House</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>1. Head north on Main Street</p>
                <p>2. Turn right onto Gervais Street</p>
                <p>3. Continue to Assembly Street</p>
                <p>4. We serve all of Columbia - call for directions</p>
                <p className="font-semibold mt-4">Drive time: 5-8 minutes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>From USC Campus / Five Points</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>1. Exit campus onto Harden Street</p>
                <p>2. Head north toward downtown</p>
                <p>3. Turn right onto Blossom Street</p>
                <p>4. Call (888) 885-7330 for specific directions</p>
                <p className="font-semibold mt-4">Drive time: 6-10 minutes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>From Columbia Metropolitan Airport</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>1. Take Airport Boulevard toward I-26</p>
                <p>2. Merge onto I-26 East</p>
                <p>3. Take exit for downtown Columbia</p>
                <p>4. We'll come to you anywhere in Columbia!</p>
                <p className="font-semibold mt-4">Drive time: 12-18 minutes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>From I-26 / I-126 / I-77 Interchange</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>1. Take I-126 East toward downtown</p>
                <p>2. Exit at Assembly Street or Main Street</p>
                <p>3. Follow signs to your Columbia neighborhood</p>
                <p>4. Available 24/7 for emergencies</p>
                <p className="font-semibold mt-4">Drive time: 8-12 minutes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weather Challenges */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Columbia Weather & Your Home Systems</h2>
            <p className="text-xl text-muted-foreground">
              How Columbia's climate affects your HVAC, plumbing, and electrical systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Extreme Summer Heat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Columbia summers regularly hit 95-100°F with oppressive humidity. Capital city heat island effect makes it even hotter.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Issues:</div>
                  <ul className="space-y-1 ml-4">
                    <li>• AC units running 24/7</li>
                    <li>• System breakdowns during heat waves</li>
                    <li>• Skyrocketing energy bills</li>
                    <li>• Refrigerant leaks</li>
                    <li>• Compressor failures</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <strong>Our Solution:</strong> Preventive maintenance plans, energy-efficient AC upgrades, emergency same-day service
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Severe Storms & Flooding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Columbia experiences severe thunderstorms, occasional hurricanes, and historic flooding (2015 flood).
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Issues:</div>
                  <ul className="space-y-1 ml-4">
                    <li>• Power surges damaging HVAC/appliances</li>
                    <li>• Lightning strikes</li>
                    <li>• Basement/crawl space flooding</li>
                    <li>• Sump pump failures</li>
                    <li>• Sewer backups</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <strong>Our Solution:</strong> Whole-home surge protection, backup generators, sump pump installation, emergency flood response
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Mild Winters with Freezes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Winters are generally mild, but sudden cold snaps and occasional ice storms cause problems.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Issues:</div>
                  <ul className="space-y-1 ml-4">
                    <li>• Frozen pipes during cold snaps</li>
                    <li>• Heat pump failures</li>
                    <li>• Ice storm power outages</li>
                    <li>• Water heater strain</li>
                    <li>• Outdoor faucet damage</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <strong>Our Solution:</strong> Pipe insulation, heat pump service, emergency burst pipe repair, generator backup
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Major Employers */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Columbia's Major Employers</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by South Carolina's largest businesses and institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Government</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• SC State Government</li>
                  <li>• City of Columbia</li>
                  <li>• Richland County</li>
                  <li>• Fort Jackson (Army)</li>
                  <li>• Federal offices</li>
                  <li>• Court buildings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Prisma Health</li>
                  <li>• Lexington Medical Center</li>
                  <li>• Palmetto Health</li>
                  <li>• VA Hospital</li>
                  <li>• Medical practices</li>
                  <li>• Dental offices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• University of South Carolina</li>
                  <li>• Columbia College</li>
                  <li>• Benedict College</li>
                  <li>• Allen University</li>
                  <li>• Richland School Districts</li>
                  <li>• Private schools</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Business & Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• BlueCross BlueShield SC</li>
                  <li>• Colonial Life</li>
                  <li>• SCANA/Dominion Energy</li>
                  <li>• Hotels & restaurants</li>
                  <li>• Shopping centers</li>
                  <li>• Office buildings</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              Need commercial HVAC, plumbing, or electrical service for your Columbia business?
            </p>
            <Link href="/commercial">
              <Button size="lg">
                View Commercial Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Neighborhood Content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Columbia Neighborhoods We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Expert service in every Columbia neighborhood
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Downtown & The Vista</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Historic downtown with State House, business district, and entertainment venues. Mix of historic and modern buildings.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• Commercial HVAC maintenance</li>
                    <li>• Restaurant plumbing</li>
                    <li>• Historic building electrical</li>
                    <li>• Emergency repairs</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 12-20 minutes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>USC Campus & Five Points</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  University area with student housing, apartments, and entertainment district. High-density residential.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• Apartment HVAC service</li>
                    <li>• Multi-unit plumbing</li>
                    <li>• Electrical panel upgrades</li>
                    <li>• Water heater replacement</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 15-25 minutes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shandon & Rosewood</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Established residential neighborhoods with historic homes (1920s-1950s) and tree-lined streets.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• Older home plumbing updates</li>
                    <li>• HVAC system replacement</li>
                    <li>• Electrical rewiring</li>
                    <li>• Duct sealing</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 18-28 minutes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Forest Acres</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Upscale residential area with shopping centers. Mix of mid-century and newer homes.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• AC replacement (aging units)</li>
                    <li>• Smart thermostat installation</li>
                    <li>• Tankless water heaters</li>
                    <li>• Generator installation</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 20-30 minutes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eau Claire & Olympia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Diverse neighborhoods with family homes built 1960s-1990s. Strong community feel.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• HVAC maintenance</li>
                    <li>• Drain cleaning</li>
                    <li>• Ceiling fan installation</li>
                    <li>• Water heater service</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 18-28 minutes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>North & South Columbia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Growing residential areas with newer subdivisions and commercial development.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• New construction electrical</li>
                    <li>• HVAC installation</li>
                    <li>• Plumbing for additions</li>
                    <li>• Smart home wiring</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 20-30 minutes
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Columbia Residents Choose Us</h2>
            <p className="text-xl text-muted-foreground">
              See how we compare to other Columbia service providers
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Carolina Georgia Services</th>
                    <th className="p-4 text-center">Other Columbia Companies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">All 3 Services (HVAC, Plumbing, Electrical)</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Usually only 1 service</td>
                  </tr>
                  <tr className="border-b bg-muted/20">
                    <td className="p-4 font-semibold">24/7 True Emergency Service</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Limited hours or answering service</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Average Response Time</td>
                    <td className="p-4 text-center font-semibold text-primary">18 minutes</td>
                    <td className="p-4 text-center text-muted-foreground">60-120 minutes</td>
                  </tr>
                  <tr className="border-b bg-muted/20">
                    <td className="p-4 font-semibold">Upfront, Transparent Pricing</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Often hidden fees</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Licensed & Insured</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b bg-muted/20">
                    <td className="p-4 font-semibold">Comprehensive Warranty</td>
                    <td className="p-4 text-center font-semibold text-primary">Parts & Labor</td>
                    <td className="p-4 text-center text-muted-foreground">Limited or parts only</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Serves All Columbia Neighborhoods</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Limited coverage areas</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-4 font-semibold">Same-Day Service Available</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Often 2-3 day wait</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg">
              <h3 className="font-bold text-lg mb-2">The Carolina Georgia Services Advantage in Columbia:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>One call does it all:</strong> HVAC, plumbing, and electrical - no need to coordinate multiple contractors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Fastest response in Columbia:</strong> Average 18-minute arrival time vs. 60-120 minutes for competitors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Columbia expertise:</strong> We understand the capital city's unique challenges - from historic homes to modern high-rises</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>No surprise charges:</strong> Upfront pricing before we start work - what we quote is what you pay</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services in Columbia</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>HVAC Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• AC Installation & Repair</li>
                  <li>• Heating System Service</li>
                  <li>• Duct Cleaning & Sealing</li>
                  <li>• Preventive Maintenance</li>
                  <li>• Emergency 24/7 Service</li>
                </ul>
                <Link href="/services/hvac">
                  <Button variant="outline" className="w-full mt-4">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Plumbing Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Leak Detection & Repair</li>
                  <li>• Drain Cleaning</li>
                  <li>• Water Heater Service</li>
                  <li>• Pipe Repair & Replacement</li>
                  <li>• Emergency Plumber</li>
                </ul>
                <Link href="/services/plumbing">
                  <Button variant="outline" className="w-full mt-4">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Electrical Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Electrical Repairs</li>
                  <li>• Panel Upgrades</li>
                  <li>• Lighting Installation</li>
                  <li>• Generator Installation</li>
                  <li>• Emergency Electrician</li>
                </ul>
                <Link href="/services/electrical">
                  <Button variant="outline" className="w-full mt-4">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Serve Your Columbia Home or Business</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Call now for fast, reliable HVAC, plumbing, or electrical service anywhere in Columbia, SC
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call (888) 885-7330
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              24/7 Emergency Service
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-90">
            Serving Columbia, SC and all surrounding Richland County communities
          </p>
        </div>
      </section>
    </div>
  );
}
