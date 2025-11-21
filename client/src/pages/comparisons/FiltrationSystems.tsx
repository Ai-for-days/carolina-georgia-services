import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Phone } from "lucide-react";
import FAQSchema from "@/components/FAQSchema";

export default function TanklessVsTraditional() {
  const faqs = [
    {
      question: "How much can I save with a tankless water heater?",
      answer: "Tankless water heaters can save 20-30% on water heating costs compared to traditional tank models. For an average household, this translates to $100-200 per year in energy savings."
    },
    {
      question: "How long do tankless water heaters last?",
      answer: "Tankless water heaters typically last 20+ years with proper maintenance, compared to 10-15 years for traditional tank water heaters. This longer lifespan helps offset the higher upfront cost."
    },
    {
      question: "Can a tankless water heater supply enough hot water for my whole house?",
      answer: "Yes, when properly sized. A professional assessment considers your home's hot water demand, number of bathrooms, and simultaneous usage patterns to recommend the right capacity tankless system."
    },
    {
      question: "Do tankless water heaters require special maintenance?",
      answer: "Tankless water heaters require annual descaling to remove mineral buildup, especially in areas with hard water. This maintenance is simple and helps maintain efficiency and longevity."
    }
  ];

  return (
    <div className="min-h-screen">
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002244] to-[#003366] text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tankless vs Traditional Water Heaters
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Compare features, costs, and benefits to choose the right water heating solution for your home
            </p>
            <Button size="lg" className="bg-[#FB4F14] hover:bg-[#e03d00] text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call (888) 885-7330 for Expert Advice
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Comparison</h2>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-[#002244] text-white">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Tankless</th>
                  <th className="p-4 text-center">Traditional Tank</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Upfront Cost</td>
                  <td className="p-4 text-center">$2,500 - $4,500</td>
                  <td className="p-4 text-center">$800 - $1,500</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Lifespan</td>
                  <td className="p-4 text-center text-green-600 font-semibold">20+ years</td>
                  <td className="p-4 text-center">10-15 years</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Energy Efficiency</td>
                  <td className="p-4 text-center text-green-600 font-semibold">95-98%</td>
                  <td className="p-4 text-center">60-70%</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Hot Water Supply</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Endless</td>
                  <td className="p-4 text-center">Limited (40-80 gal)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Space Required</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Wall-mounted, compact</td>
                  <td className="p-4 text-center">Large floor space</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Annual Energy Cost</td>
                  <td className="p-4 text-center text-green-600 font-semibold">$200-300</td>
                  <td className="p-4 text-center">$400-600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Maintenance</td>
                  <td className="p-4 text-center">Annual descaling</td>
                  <td className="p-4 text-center">Minimal</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">Installation Time</td>
                  <td className="p-4 text-center">4-8 hours</td>
                  <td className="p-4 text-center">2-4 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Tankless */}
            <Card className="border-2 border-[#FB4F14]">
              <CardHeader className="bg-[#FB4F14] text-white">
                <CardTitle className="text-2xl">Tankless Water Heaters</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-[#002244]">Advantages</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Endless hot water</strong> - Never run out during showers or when running multiple appliances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>20-30% energy savings</strong> - Only heats water when needed, no standby heat loss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Space-saving design</strong> - Wall-mounted units free up valuable floor space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>20+ year lifespan</strong> - Lasts twice as long as traditional tanks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>No flood risk</strong> - No tank to rupture and cause water damage</span>
                  </li>
                </ul>

                <h3 className="font-bold text-lg mb-4 text-[#002244]">Disadvantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Higher upfront cost</strong> - 2-3x more expensive than traditional tanks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Complex installation</strong> - May require electrical or gas line upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Annual maintenance required</strong> - Descaling needed in hard water areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Slight delay</strong> - 1-2 second wait for hot water to reach faucet</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Traditional */}
            <Card>
              <CardHeader className="bg-[#002244] text-white">
                <CardTitle className="text-2xl">Traditional Tank Water Heaters</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-[#002244]">Advantages</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Lower upfront cost</strong> - More affordable initial investment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Simple installation</strong> - Faster, easier replacement process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Familiar technology</strong> - Most plumbers experienced with repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Instant hot water</strong> - Pre-heated water ready immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Minimal maintenance</strong> - Simple annual flushing recommended</span>
                  </li>
                </ul>

                <h3 className="font-bold text-lg mb-4 text-[#002244]">Disadvantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Limited hot water</strong> - Can run out during high-demand periods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Higher energy costs</strong> - Constantly reheats water, even when not in use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Shorter lifespan</strong> - Needs replacement every 10-15 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Takes up space</strong> - Requires dedicated floor space in utility area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Flood risk</strong> - Tank failure can cause significant water damage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Long-Term Cost Analysis</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#002244]">20-Year Total Cost of Ownership</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border-2 border-[#FB4F14] rounded-lg p-6">
                        <h4 className="font-bold text-lg mb-3 text-[#FB4F14]">Tankless Water Heater</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>Initial Cost:</span>
                            <span className="font-semibold">$3,500</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Energy (20 years @ $250/yr):</span>
                            <span className="font-semibold">$5,000</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Maintenance (20 years @ $100/yr):</span>
                            <span className="font-semibold">$2,000</span>
                          </li>
                          <li className="flex justify-between border-t-2 pt-2 mt-2">
                            <span className="font-bold">Total 20-Year Cost:</span>
                            <span className="font-bold text-[#FB4F14]">$10,500</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border-2 border-[#002244] rounded-lg p-6">
                        <h4 className="font-bold text-lg mb-3 text-[#002244]">Traditional Tank (2 replacements)</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>Initial + 2 Replacements:</span>
                            <span className="font-semibold">$3,600</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Energy (20 years @ $500/yr):</span>
                            <span className="font-semibold">$10,000</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Maintenance (minimal):</span>
                            <span className="font-semibold">$400</span>
                          </li>
                          <li className="flex justify-between border-t-2 pt-2 mt-2">
                            <span className="font-bold">Total 20-Year Cost:</span>
                            <span className="font-bold text-[#002244]">$14,000</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-6 text-center text-lg font-semibold text-green-600">
                      Tankless saves $3,500 over 20 years
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-[#002244]">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FB4F14] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Water Heater?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts will assess your home's needs and recommend the best water heating solution for your budget and lifestyle.
          </p>
          <Button size="lg" className="bg-white text-[#FB4F14] hover:bg-gray-100">
            <Phone className="mr-2 h-5 w-5" />
            Call (888) 885-7330 for Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
