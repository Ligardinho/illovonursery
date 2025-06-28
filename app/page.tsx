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
import { LuBeer, LuCat } from "react-icons/lu"



export default function Component() {
  return (
    <div className="min-h-screen bg-white transition-all">
      {/* Header */}
      <header
        className="bg-white shadow-sm sticky top-0 z-50 intersect:motion-opacity-in-0 intersect:motion-preset-expand intersect:motion-blur-in-xl intersect:motion-duration-1200  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" className="h-16 w-auto"/>
            </div>
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 font-medium">
                About
              </a>
              <a href="#products" className="text-gray-700 hover:text-green-600 font-medium">
                Products
              </a>
              <a href="#services" className="text-gray-700 hover:text-green-600 font-medium">
                Marketplace
              </a>
              <a href="https://illovonursery.co.za/terrace/" target="_ " className="text-gray-700 hover:text-green-600 font-medium">
                The Terrace
              </a>
            </nav>
            <a href="#contact">
              <Button className="bg-green-600 hover:bg-green-700 rounded-lg px-7 py-3 border-b-3 border-green-700 font-semibold">Contact</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" data-aos="fade-right" className="bg-gradient-to-br from-[#0D3824] to-green-600 text-white py-20 relative overflow-hidden max-w-7xl xl:mx-auto mx-[15px] px-4 sm:px-6 lg:px-8 rounded-2xl my-5 shadow-xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                Transform Your Garden
                <span className="block">Dream into Reality</span>
              </h1>
              <p className="md:text-lg text-lg text-green-100 mb-8 leading-relaxed">
                Discover premium plants, expert landscaping services, and everything you need to create your perfect
                garden oasis at Illovo Nursery. Discover a one-of-a-kind destination blending lush greenery, local flavor, and creative energy. Whether you&apos;re here to explore our vibrant plant nursery, unwind in our beer garden, or browse handmade treasures, there&apos;s something for everyone
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://maps.app.goo.gl/38eySRVVsQuhjSRE9" target="_ ">
                <Button className="bg-green-500 hover:bg-green-400 font-semibold text-white md:px-10 py-6 md:text-lg text-sm border-b-3 border-green-600">
                  Visit Us Now
                </Button>
                </a>
              </div>
            </div>
            <div className="lg:flex hidden">
              <img src="/home.jpg" className="rounded-[128px] object-left h-[500px] w-[800px] object-cover z-10 relative"/>
              <div className="bg-green-800 z-30 absolute rounded-2xl p-3 w-[300px] top-90 left-[45%] border-b-4 border-green-900" data-aos="fade-right" data-aos-delay="200">
                <div className="space-y-2 flex flex-col justify-center items-center">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-green-400">84%</div>
                  <div>
                    <div className="font-semibold text-sm">Customer Satisfaction</div>
                    <div className="text-green-200 text-xs">Based on 1,100+ reviews</div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <Star className="h-3 w-3 text-white fill-current" />
                  <span className="text-green-200 ml-2">Excellent Rating</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create from a small garden section */}
      <section className="pt-20 pb-10 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-zoom-in">
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

          <div className="grid lg:grid-cols-2 gap-8 items-center" data-aos="fade-zoom-in">
            <div className="space-y-8">
              <Image
                src="/2.jpg"
                alt="Small garden transformation"
                width={500}
                height={300}
                className="rounded-xl shadow-lg object-cover md:w-[540px] xl:h-[360px] h-[360px] min-w-full"
              />
            </div>

            <div className="bg-green-700 text-white p-8 rounded-2xl sm:max-h-[360px] lg:min-h-[360px]">
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
                  <span>Ongoing maintenance and support products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trees section */}
      <section className="pb-16 pt-0 bg-white" data-aos="fade-zoom-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="bg-green-700 text-white p-8 rounded-2xl max-h-[375px] lg:h-[320px] flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">Tranquil is our middle name</h3>
              <p className="text-green-100 mb-6">
                Visitors return not only to shop our beautiful plants and accessories but also to attend our unique Terrace restaurant, Beer Garden, weekend Craft Market, Pet Shop, Book Shop, weekend Art Gallery and much more. 
              </p>
              <a href="#services">
                <Button className="bg-green-500 hover:bg-green-400 text-white w-fit border-b-3 border-green-600">See More</Button>
              </a>
            </div>
            <div className="lg:col-span-2">
              <Image
                src="/tranquil.jpg"
                alt="Beautiful trees"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-[800px] lg:h-[320px] h-[370px] object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-gray-50" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-zoom-in" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">
              Our garden experts have curated a collection of products, fresh from the nursery just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Trees and Palms", image: "/ferns.jpg", delay: "0" , direction: "fade-right", description:"Add structure and beauty to any landscape with our selection of trees and palms—ideal for shade, privacy, or creating a tropical feel."},
              { name: "Seedlings", image: "/seedlings.jpg", delay: "100", direction: "fade-right", description:"Healthy and ready-to-plant seedlings to kickstart your garden—perfect for vegetables, herbs, and flowers."},
              { name: "Shrubs", image: "/shrubs.jpg", delay: "200", direction: "fade-right", description:"Low-maintenance, hardy shrubs to define borders, fill empty spaces, and bring year-round greenery or seasonal color."},
              { name: "Indoor plants", image: "/indoor.jpg", delay: "300", direction: "fade-right", description:"Liven up your home or office with air-purifying indoor plants that thrive in various light conditions."},
              { name: "Pots", image: "/pots.jpg", delay: "400", direction: "fade-right", description:"From modern to classic styles, our wide range of pots suits any plant and complements your décor, indoors or out."},
              { name: "Water features", image: "/water.jpg", delay: "500", direction: "fade-right", description:"Transform your garden into a peaceful retreat with elegant water features that bring soothing sounds and visual charm."},
              { name: "Garden Ornaments", image: "/garden.jpg", delay: "600", direction: "fade-right", description:"Enhance your garden's personality with unique ornaments—from statues to decorative accents that add character and charm."},
              { name: "Potting soil and Fertilizers", image: "/soil.jpg", delay: "700", direction: "fade-right", description:"Nourish your plants with premium potting soil and fertilizers designed to boost growth and keep your garden thriving."},

            ].map((plant, index) => (
              <Card key={index} className={`group hover:shadow-lg transition-shadow`} data-aos={plant.direction} data-aos-delay={plant.delay}>
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
                    <p className="text-sm text-gray-600">{plant.description}</p>
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
            <div className="bg-green-800 text-white p-12 rounded-2xl max-w-7xl mx-auto lg:mx-0 lg:w-[400px] lg:h-[440px] shadow-xl" data-aos="fade-right">
              <h3 className="text-3xl font-bold mb-6">FRAGRANT <br/>FLOWER SCENT</h3>
              <p className="text-green-100 mb-8 text-lg">
                Experience the enchanting world of <br/>fragrant flowers that will fill your <br/>garden with delightful scents<br/>
                throughout the seasons.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-green-400">84%</div>
                  <div>
                    <div className="font-semibold">Customer Satisfaction</div>
                    <div className="text-green-200 text-sm">Based on 1,100+ reviews</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-white fill-current" />
                  <span className="text-green-200 ml-2">Excellent Rating</span>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="bg-green-800 text-white shadow-xl p-5 rounded-2xl xl:w-[850px] xl:grid hidden xl:grid-cols-2 items-center gap-6 xl:h-[440px] lg:h-[520px] max-w-full">
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
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-zoom-in">
            <div className="flex items-center justify-center mb-4">
              <TreePine className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-green-600 font-semibold">Our Marketplace</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Our Marketplace: A Curated Mix of Plants, Crafts, Bites & More
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Nursery & Garden Center",
                description:
                  "From houseplants to landscaping essentials, find the perfect greenery to bring your space to life. Our experts are here to help your garden thrive.",
                icon: <Flower className="h-8 w-8" />,
                delay: "0",
              },
              {
                title: "Craft Market",
                description:
                  "Support local artisans! Discover handmade goods, unique gifts, and seasonal finds in our ever-changing market.",
                icon: <Shovel className="h-8 w-8" />,
                delay: "100",
              },
              {
                title: "Pet Shop",
                description:
                  "Spoil your furry (or feathery, or scaly) friends with premium pet supplies, toys, and treats. Pet-friendly vibes always!",
                icon: <LuCat className="h-8 w-8 font-semibold" />,
                delay: "200",
              },
              {
                title: "Beer Garden",
                description:
                  "Kick back under the trees with craft beers, local ciders, and refreshing drinks. The perfect spot to relax after browsing the plants!",
                icon: <LuBeer className="h-8 w-8" />,
                delay: "300",
              },
            ].map((service, index) => (
              <div key={index} className={`p-6 hover:shadow-lg transition-shadow bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm max-w-full`} data-aos="fade-up" data-aos-delay={service.delay}>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12" data-aos="fade-zoom-in">What They&apos;re Saying</h2>

          <div className="bg-green-50 rounded-2xl p-8 relative shadow-lg" data-aos="fade-right">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8" data-aos="fade-zoom-in">
              <div className="relative">
                <div className="rounded-full flex items-center justify-center">
                  <Image
                    src="/a.png"
                    alt="Customer testimonial"
                    width={120}
                    height={120}
                    className="rounded-full object-cover w-36 h-36"
                  />
                </div>
              </div>
              <div className="flex-1 text-left">
                <p className="text-normal text-gray-700 mb-4 italic">
                  &quot;Wonderful venue for a breakaway breakfast, lunch or brunch. Great service and food so delicious you want to stay for more. The nursery has everything from plants, pets and patio or garden furniture. Experience overall here was wonderfully refreshing for a Monday morning. I will urge anyone taking their significant other on a quiet &quot;date day&quot; to try this place at least once. You will be glad you did!&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">Andre Warden</div>
                  <div className="text-gray-600">Local Guide, eManzimtoti</div>
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
            <h2 className="text-4xl font-bold mb-8" data-aos="fade-zoom-in">Building Your Dream Garden</h2>
            <div className="relative inline-block" data-aos="fade-zoom-in">
              <Image
                src="/4.jpg"
                alt="Garden video thumbnail"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover h-[400px] w-[600px]"
              />
              <Button
                size="lg"
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              >
                <Play className="h-6 w-6 text-white ml-1" />
              </Button>
            </div>
            <p className="text-xl text-green-100 mt-8 max-w-2xl mx-auto" data-aos="fade-zoom-in">
              Watch how we transform ordinary spaces into extraordinary gardens. See our process from design to
              completion.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 " id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="" data-aos="fade-zoom-in">
              <div className="flex items-center space-x-2 mb-6">
                <img src="/logo.png" className="h-16 w-auto brightness-0 invert-100 "/>
              </div>
              <p className="text-gray-400 mb-6">
                Creating beautiful gardens and outdoor spaces for over 35 years. Your trusted partner in bringing nature
                home.
              </p>
              <a href="https://maps.app.goo.gl/38eySRVVsQuhjSRE9" target="_ ">
                  <Button className="bg-green-600 hover:bg-green-700 border-b-3 border-green-800">Visit Our Nursery</Button>
              </a>
            </div>

            <div className="" data-aos="fade-zoom-in">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white">
                    Our Products
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="https://illovonursery.co.za/terrace/" target="_ " className="hover:text-white">
                  The Terrace Restaurent
                  </a>
                </li>
              </ul>
            </div>

            <div className="" data-aos="fade-zoom-in">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white">
                    Nursery & Garden Center
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Craft Market
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Pet Shop
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Beer Garden
                  </a>
                </li>
              </ul>
            </div>

            <div className="" data-aos="fade-zoom-in">
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
                  <span>illovonursery@telkomsa.net</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400" data-aos="fade-zoom-in">
            <p>&copy; 2025 Illovo Nursery. Designed by Prestige Sites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
