import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Play, Phone, Mail, MapPin, Leaf, TreePine, Flower, Shovel } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" className="h-16 w-auto"/>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Plants
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Contact
              </a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700 rounded-full px-7 py-3">Contact</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D3824] to-green-600 text-white py-20 relative overflow-hidden max-w-7xl md:mx-auto mx-[15px] px-4 sm:px-6 lg:px-8 rounded-2xl mt-5">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                Transform Your Garden
                <span className="block">Dream into Reality</span>
              </h1>
              <p className="md:text-xl text-lg text-green-100 mb-8 leading-relaxed">
                Discover premium plants, expert landscaping services, and everything you need to create your perfect
                garden oasis at Illovo Nursery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-500 hover:bg-green-400 font-medium text-white md:px-10 py-6 md:text-md text-sm">
                  Visit Us Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create from a small garden section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Leaf className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-green-600 font-semibold">Illovo Nursery</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Create from a small garden</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start your gardening journey with our carefully selected plants and expert guidance to transform any space
              into a green paradise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <Image
                src="/2.jpg"
                alt="Small garden transformation"
                width={500}
                height={300}
                className="rounded-xl shadow-lg object-cover md:w-[540px] h-[343px] min-w-full"
              />
            </div>

            <div className="bg-green-700 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Create from a small garden to beautify your environment</h3>
              <p className="text-green-100 mb-6">
                Whether you have a tiny balcony or a sprawling backyard, our expert team will help you design and create
                the perfect garden space that reflects your style and needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Professional garden design consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Premium quality plants and materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Ongoing maintenance and support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trees section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <Image
                src="/1.jpg"
                alt="Beautiful trees"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-[800px] h-[308px] object-cover"
              />
            </div>
            <div className="bg-green-800 text-white p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">Trees are the lungs of the world</h3>
              <p className="text-green-100 mb-6">
                Discover our extensive collection of indigenous and exotic trees that will transform your landscape
                while contributing to a healthier environment.
              </p>
              <Button className="bg-green-500 hover:bg-green-400 text-white">Explore Trees</Button>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h2>
            <p className="text-xl text-gray-600">
              Our garden experts have curated a collection of plants, fresh from the nursery just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Fiddle Leaf Fig", price: "R299", image: "/placeholder.svg?height=200&width=200" },
              { name: "Snake Plant", price: "R149", image: "/placeholder.svg?height=200&width=200" },
              { name: "Monstera Deliciosa", price: "R399", image: "/placeholder.svg?height=200&width=200" },
              { name: "Peace Lily", price: "R199", image: "/placeholder.svg?height=200&width=200" },
              { name: "Rubber Plant", price: "R249", image: "/placeholder.svg?height=200&width=200" },
              { name: "Aloe Vera", price: "R89", image: "/placeholder.svg?height=200&width=200" },
              { name: "Bird of Paradise", price: "R449", image: "/placeholder.svg?height=200&width=200" },
              { name: "Cactus Collection", price: "R129", image: "/placeholder.svg?height=200&width=200" },
            ].map((plant, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={plant.image || "/placeholder.svg"}
                      alt={plant.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{plant.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{plant.price}</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fragrant Flowers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex lg:flex-row flex-col items-center justify-center gap-8">
            <div className="bg-green-800 text-white p-12 rounded-2xl max-w-7xl mx-auto lg:mx-0 lg:w-[400px] lg:h-[440px]">
              <h3 className="text-3xl font-bold mb-6">FRAGRANT <br/>FLOWER SCENT</h3>
              <p className="text-green-100 mb-8 text-lg">
                Experience the enchanting world of <br/>fragrant flowers that will fill your <br/>garden with delightful scents<br/>
                throughout the seasons.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-green-400">95%</div>
                  <div>
                    <div className="font-semibold">Customer Satisfaction</div>
                    <div className="text-green-200 text-sm">Based on 500+ reviews</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-green-200 ml-2">Excellent Rating</span>
                </div>
              </div>
            </div>

            <div className="bg-green-800 text-white p-5 rounded-2xl xl:w-[850px] xl:grid hidden xl:grid-cols-2 items-center gap-6 xl:h-[440px] lg:h-[520px] max-w-full">
              <Image
                src="/6.jpg"
                alt="Fragrant flowers"
                width={500}
                height={500}
                className="rounded-2xl shadow-lg object-cover h-[400px] w-[300px] md:w-[550px] object-bottom"
              />
              <div className="flex flex-col space-y-6 max-w-fit">
                <div>
                  <h1 className="font-semibold">Seeds and Seedlings</h1>
                  <p className="text-gray-200">Choose from a variety of premium seeds and healthy seedlings to ensure a strong start for your crops.</p>
                </div>
                <div>
                  <h1 className="font-semibold">Fertilizers and Soil Enhancers</h1>
                  <p className="text-gray-200">Enhance soil fertility and promote healthy plant growth with our range of organic fertilizers and soil amendments.</p>
                </div>
                <div>
                  <h1 className="font-semibold">Crop Protection</h1>
                  <p className="text-gray-200">Safeguard your crops from pests and diseases with our proven range of environmentally friendly crop protection solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <TreePine className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-green-600 font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete gardening and landscaping services available for your outdoor space
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Garden Design",
                description:
                  "Custom garden design services tailored to your space, style, and budget. Our expert designers will create a beautiful and functional outdoor space.",
                icon: <Flower className="h-8 w-8" />,
              },
              {
                title: "Landscape Installation",
                description:
                  "Our expert landscapers will bring your garden design to life, meticulously planting each tree, shrub, and flower to create the garden of your dreams, tailored to your unique outdoor space.",
                icon: <Shovel className="h-8 w-8" />,
              },
              {
                title: "Hardscaping",
                description:
                  "Professional hardscaping services including patios, walkways, retaining walls, and water features to complement your garden design.",
                icon: <TreePine className="h-8 w-8" />,
              },
              {
                title: "Maintenance",
                description:
                  "Regular garden maintenance services to keep your outdoor space looking its best year-round, including pruning, fertilizing, and pest control.",
                icon: <Leaf className="h-8 w-8" />,
              },
            ].map((service, index) => (
              <div key={index} className="p-6 hover:shadow-lg transition-shadow bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm max-w-full">
                <Accordion type="single" collapsible className="flex items-start space-x-4 max-w-full">
                  <AccordionItem value="item-1" className="min-w-full">
                    <AccordionTrigger className="flex flex-row justify-between items-center max-w-full">
                      <div className="text-green-600 mt-1 flex flex-row justify-between items-center gap-3">
                        {service.icon}
                        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 max-w-full">{service.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What They&apos;re Saying</h2>

          <div className="bg-green-50 rounded-2xl p-8 relative">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <div className="rounded-full flex items-center justify-center">
                  <Image
                    src="/profile.jpg"
                    alt="Customer testimonial"
                    width={120}
                    height={120}
                    className="rounded-full object-cover w-32 h-32"
                  />
                </div>
              </div>
              <div className="flex-1 text-left">
                <p className="text-lg text-gray-700 mb-4 italic">
                  &quot;Illovo Nursery transformed our backyard into a stunning garden paradise. Their expertise, quality
                  plants, and exceptional service exceeded all our expectations. We couldn&apos;t be happier with the
                  results!&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-gray-600">Homeowner, Illovo</div>
                </div>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Building Your Dream Garden</h2>
            <div className="relative inline-block">
              <Image
                src="/4.jpg"
                alt="Garden video thumbnail"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover h-[400px] w-[600px]"
              />
              <Button
                size="lg"
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              >
                <Play className="h-6 w-6 text-white ml-1" />
              </Button>
            </div>
            <p className="text-xl text-green-100 mt-8 max-w-2xl mx-auto">
              Watch how we transform ordinary spaces into extraordinary gardens. See our process from design to
              completion.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img src="/logo.png" className="h-16 w-auto brightness-0 invert-100"/>
              </div>
              <p className="text-gray-400 mb-6">
                Creating beautiful gardens and outdoor spaces for over 20 years. Your trusted partner in bringing nature
                home.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">Visit Our Nursery</Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Plants
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Garden Care Tips
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Garden Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Landscaping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Plant Installation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Maintenance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <span>40 Elizabeth Ave, Illovo Beach, Durban, 3136</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-500" />
                  <span>+27 31 916 6212</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-500" />
                  <span>info@illovo-nursery.co.za</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Illovo Nursery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
