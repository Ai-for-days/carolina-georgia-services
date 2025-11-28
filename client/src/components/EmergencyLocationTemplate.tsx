import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, Clock, MapPin, AlertCircle, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocationData } from "@/data/locationData";

interface EmergencyLocationTemplateProps {
  location: LocationData;
}

export default function EmergencyLocationTemplate({ location }: EmergencyLocationTemplateProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneNumber = "(888) 885-7330";
  const phoneLink = "tel:+18888857330";

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        keywords={location.keywords}
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `Carolina Georgia Services - ${location.name}`,
          "description": location.metaDescription,
          "telephone": phoneNumber,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": location.name,
            "addressRegion": location.stateAbbr,
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": location.latitude,
            "longitude": location.longitude
          },
          "areaServed": {
            "@type": "City",
            "name": location.name
          },
          "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
          "priceRange": "$$"
        }}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* Emergency Alert Hero */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12">
          <div className="container text-center">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <AlertCircle className="w-8 h-8 animate-pulse" />
              <span className="text-xl font-bold">24/7 EMERGENCY SERVICE</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {location.heroTitle}
            </h1>
            <p className="text-xl mb-6 leading-relaxed">
              {location.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-red-600 hover:bg-gray-100" asChild>
                <a href={phoneLink}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {phoneNumber}
                </a>
              </Button>
              <div className="flex items-center gap-2 bg-white/20 px-6 py-3 rounded-lg">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Avg Response: {location.avgResponseTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Response Times */}
        <section className="py-12 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Lightning-Fast Response Across {location.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {location.responseTimes.map((rt, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Zap className="h-5 w-5 text-orange-600" />
                      {rt.area}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-orange-600">{rt.time}</p>
                    <p className="text-sm text-gray-600 mt-2">Average arrival time</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg mb-4">
                Don't wait hours for help. <strong>Call now: <a href={phoneLink} className="text-orange-600 hover:underline">{phoneNumber}</a></strong>
              </p>
            </div>
          </div>
        </section>

        {/* Weather Challenges */}
        <section className="py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8">
              {location.name} Weather Emergencies We Handle 24/7
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {location.weatherChallenges.map((challenge, idx) => (
                <Card key={idx} className="border-l-4 border-l-red-600">
                  <CardHeader>
                    <div className="text-sm font-semibold text-orange-600 mb-2">{challenge.season}</div>
                    <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{challenge.description}</p>
                    <ul className="space-y-2 mb-4">
                      {challenge.issues.map((issue, issueIdx) => (
                        <li key={issueIdx} className="flex items-start gap-2 text-sm">
                          <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <p className="text-sm font-semibold text-orange-900">{challenge.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Details */}
        <section className="py-12 bg-gray-50">
          <div className="container text-center">
            {location.localDetails.map((detail, idx) => (
              <div key={idx} className="mb-12 last:mb-0">
                <h2 className="text-3xl font-bold mb-4">{detail.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{detail.description}</p>
                <ul className="grid md:grid-cols-2 gap-4">
                  {detail.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8">
              We Serve Every Neighborhood in {location.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.neighborhoods.map((neighborhood, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-orange-600" />
                      {neighborhood.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-3">{neighborhood.description}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-orange-600">
                      <Clock className="h-4 w-4" />
                      Response: {neighborhood.responseTime}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg mb-4">
                No matter where you are in {location.name}, we'll be there fast. <strong>Call: <a href={phoneLink} className="text-orange-600 hover:underline">{phoneNumber}</a></strong>
              </p>
            </div>
          </div>
        </section>

        {/* Driving Directions */}
        <section className="py-12 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8">
              Driving Directions from Major {location.name} Landmarks
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {location.landmarks.map((landmark, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-orange-600" />
                      {landmark.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2 mb-4">
                      {landmark.directions.map((direction, dirIdx) => (
                        <li key={dirIdx} className="text-sm text-gray-700 flex gap-2">
                          <span className="font-semibold text-orange-600">{dirIdx + 1}.</span>
                          <span>{direction}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="text-sm font-semibold text-gray-600">
                      Typical drive time: {landmark.driveTime}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Major Employers */}
        <section className="py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Trusted by {location.name}'s Largest Employers
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We serve commercial and residential properties across {location.name}, including businesses in these key sectors:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.employers.map((employer, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg">{employer.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {employer.list.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-sm text-gray-700 flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg">
                Commercial or residential emergency? <strong>We're ready: <a href={phoneLink} className="text-orange-600 hover:underline">{phoneNumber}</a></strong>
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 bg-orange-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why {location.name} Chooses Carolina Georgia Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {location.competitiveAdvantages.map((advantage, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{advantage}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" variant="default" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                <a href={phoneLink}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {phoneNumber} Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Links */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Services in {location.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>HVAC Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    AC repair, heating, installation, and maintenance for {location.name} homes and businesses.
                  </p>
                  <Link href={`/services/hvac-${location.slug}-sc`}>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Plumbing Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Leak repair, drain cleaning, water heaters, and emergency plumbing for {location.name}.
                  </p>
                  <Link href={`/services/plumbing-${location.slug}-sc`}>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Electrical Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Panel upgrades, wiring, lighting, and electrical repairs for {location.name} properties.
                  </p>
                  <Link href={`/services/electrical-${location.slug}-sc`}>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">
              Emergency in {location.name}? We're On Our Way.
            </h2>
            <p className="text-xl mb-8">
              Don't wait. Call now for {location.avgResponseTime} average response time.
            </p>
            <Button size="lg" variant="default" className="bg-white text-red-600 hover:bg-gray-100 text-xl px-8 py-6" asChild>
              <a href={phoneLink}>
                <Phone className="mr-2 h-6 w-6" />
                {phoneNumber}
              </a>
            </Button>
            <p className="mt-6 text-lg">
              Available 24/7/365 • No Overtime Charges • Upfront Pricing
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
