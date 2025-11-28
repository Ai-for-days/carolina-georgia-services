import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, Clock, CheckCircle, AlertCircle, ArrowRight, Wind, Droplet, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";

import Footer from "@/components/Footer";
import { ServiceData } from "@/data/serviceData";
import { LocationData } from "@/data/locationData";

interface ServiceLocationTemplateProps {
  service: ServiceData;
  location: LocationData;
}

export default function ServiceLocationTemplate({ service, location }: ServiceLocationTemplateProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneNumber = "(888) 885-7330";
  const phoneLink = "tel:+18888857330";
  
  // Replace {city} placeholder in all content
  const replaceCity = (text: string) => text.replace(/{city}/g, location.name);
  
  const metaTitle = replaceCity(service.metaTitleTemplate);
  const metaDescription = replaceCity(service.metaDescriptionTemplate);
  const keywords = service.keywordsTemplate.map(k => replaceCity(k)).join(", ");

  const getServiceIcon = () => {
    switch (service.icon) {
      case "wind":
        return <Wind className="h-8 w-8" />;
      case "droplet":
        return <Droplet className="h-8 w-8" />;
      case "zap":
        return <Zap className="h-8 w-8" />;
      default:
        return <CheckCircle className="h-8 w-8" />;
    }
  };

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        keywords={keywords}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": `${service.name} Services`,
          "provider": {
            "@type": "LocalBusiness",
            "name": `Carolina Georgia Services - ${location.name}`,
            "telephone": phoneNumber,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": location.name,
              "addressRegion": location.stateAbbr,
              "addressCountry": "US"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": location.name
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
        <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12">
          <div className="container text-center">
            <div className="flex items-center gap-3 mb-4 justify-center">
              {getServiceIcon()}
              <span className="text-xl font-bold">24/7 EMERGENCY {service.name.toUpperCase()} SERVICE</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {replaceCity(service.heroTitle)}
            </h1>
            <p className="text-xl mb-6 leading-relaxed">
              {replaceCity(service.heroDescription)}
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
                <span className="font-semibold">Response: {service.emergencyInfo.responseTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our {service.name} Services in {location.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.services.map((svc, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-xl">{svc.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{replaceCity(svc.description)}</p>
                    <ul className="space-y-2">
                      {svc.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-sm">
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
              <p className="text-lg mb-4">
                Need {service.name.toLowerCase()} service in {location.name}? <strong>Call now: <a href={phoneLink} className="text-orange-600 hover:underline">{phoneNumber}</a></strong>
              </p>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Common {service.name} Problems We Solve in {location.name}
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              {location.name} homeowners and businesses face these {service.name.toLowerCase()} emergencies. We're here to help 24/7.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.commonProblems.map((problem, idx) => (
                <Card key={idx} className="border-l-4 border-l-orange-600">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-start gap-2">
                      <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{replaceCity(problem.title)}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{replaceCity(problem.description)}</p>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <p className="font-semibold text-orange-900 mb-2">Our Solution:</p>
                      <ul className="space-y-1">
                        {problem.solutions.map((solution, solIdx) => (
                          <li key={solIdx} className="text-sm text-gray-700 flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg">
                Experiencing any of these issues? <strong>Call: <a href={phoneLink} className="text-orange-600 hover:underline">{phoneNumber}</a></strong>
              </p>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-12 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our {service.name} Service Process in {location.name}
            </h2>
            <div className="max-w-4xl mx-auto">
              {service.process.map((step, idx) => (
                <div key={idx} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-700">{replaceCity(step.description)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" variant="default" className="bg-orange-600 hover:bg-orange-700" asChild>
                <a href={phoneLink}>
                  <Phone className="mr-2 h-5 w-5" />
                  Start Your Service Now: {phoneNumber}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 bg-orange-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Us for {service.name} in {location.name}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {service.whyChooseUs.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{replaceCity(reason)}</span>
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

        {/* FAQs */}
        <section className="py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions About {service.name} in {location.name}
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {service.faqs.map((faq, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg">{replaceCity(faq.question)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{replaceCity(faq.answer)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">
              {replaceCity(service.emergencyInfo.title)}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {replaceCity(service.emergencyInfo.description)}
            </p>
            <Button size="lg" variant="default" className="bg-white text-red-600 hover:bg-gray-100 text-xl px-8 py-6" asChild>
              <a href={phoneLink}>
                <Phone className="mr-2 h-6 w-6" />
                {phoneNumber}
              </a>
            </Button>
            <p className="mt-6 text-lg">
              Available 24/7/365 • {service.emergencyInfo.responseTime} Response • No Overtime Charges
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
              More Services in {location.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>All Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    View our complete service offerings for {location.name}.
                  </p>
                  <Link href="/services">
                    <Button variant="outline" className="w-full">View All Services</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Emergency Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    24/7 emergency HVAC, plumbing, and electrical service.
                  </p>
                  <Link href="/emergency">
                    <Button variant="outline" className="w-full">Emergency Service</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{location.name} Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Learn more about our services in {location.name}.
                  </p>
                  <Link href={`/locations/${location.slug}`}>
                    <Button variant="outline" className="w-full">View Location</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
