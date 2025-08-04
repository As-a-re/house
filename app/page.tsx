import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Home, Users, Shield, MessageCircle, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">HomeFind Ghana</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="text-green-600"> Affordable Home</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover verified, affordable housing options across Ghana. From rentals to cooperatives, find your ideal
            home with trusted agents and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/listings">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                Browse Listings
              </Button>
            </Link>
            <Link href="/map">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                <MapPin className="mr-2 h-5 w-5" />
                View Map
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose HomeFind Ghana?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Verified Listings</CardTitle>
                <CardDescription>
                  All properties and agents are thoroughly verified for your safety and peace of mind.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Location-Based Search</CardTitle>
                <CardDescription>
                  Find homes near your workplace, schools, or preferred neighborhoods with our map view.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Direct Communication</CardTitle>
                <CardDescription>
                  Chat directly with verified agents and property owners through our secure messaging system.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Housing Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Housing Options Available</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle>Rentals</CardTitle>
                <CardDescription>Affordable rental properties across Ghana</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle>Cooperatives</CardTitle>
                <CardDescription>Community-owned housing cooperatives</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <CardTitle>For Sale</CardTitle>
                <CardDescription>Affordable homes for purchase</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle>Shared</CardTitle>
                <CardDescription>Shared accommodations and roommates</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your New Home?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of Ghanaians who have found their perfect affordable home through HomeFind Ghana.
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-6 w-6 text-green-400" />
                <span className="text-lg font-bold">HomeFind Ghana</span>
              </div>
              <p className="text-gray-400">Making affordable housing accessible to all Ghanaians.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Renters</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/listings" className="hover:text-white">
                    Browse Listings
                  </Link>
                </li>
                <li>
                  <Link href="/map" className="hover:text-white">
                    Map Search
                  </Link>
                </li>
                <li>
                  <Link href="/saved" className="hover:text-white">
                    Saved Homes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Agents</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/agent/dashboard" className="hover:text-white">
                    Agent Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/agent/listings" className="hover:text-white">
                    Manage Listings
                  </Link>
                </li>
                <li>
                  <Link href="/agent/profile" className="hover:text-white">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HomeFind Ghana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
