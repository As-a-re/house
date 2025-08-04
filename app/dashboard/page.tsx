"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Heart, MessageCircle, Bell, Settings, MapPin, Plus, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface SavedListing {
  id: string
  title: string
  price: number
  location: string
  image: string
  savedAt: string
}

interface Message {
  id: string
  agentName: string
  propertyTitle: string
  lastMessage: string
  timestamp: string
  unread: boolean
}

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [savedListings, setSavedListings] = useState<SavedListing[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [notifications, setNotifications] = useState<any[]>([])

  useEffect(() => {
    // Load user data from localStorage or API
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }

    // Load saved listings, messages, and notifications
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    // Mock data - in real app, fetch from API
    setSavedListings([
      {
        id: "1",
        title: "Modern 2-Bedroom Apartment in East Legon",
        price: 1200,
        location: "East Legon, Accra",
        image: "/placeholder.svg?height=150&width=200",
        savedAt: "2024-01-15",
      },
      {
        id: "2",
        title: "Affordable 3-Bedroom House in Tema",
        price: 800,
        location: "Tema, Greater Accra",
        image: "/placeholder.svg?height=150&width=200",
        savedAt: "2024-01-14",
      },
    ])

    setMessages([
      {
        id: "1",
        agentName: "Kwame Asante",
        propertyTitle: "Modern 2-Bedroom Apartment",
        lastMessage: "The property is still available. Would you like to schedule a viewing?",
        timestamp: "2 hours ago",
        unread: true,
      },
      {
        id: "2",
        agentName: "Ama Osei",
        propertyTitle: "Affordable 3-Bedroom House",
        lastMessage: "Thank you for your interest. The viewing is confirmed for tomorrow.",
        timestamp: "1 day ago",
        unread: false,
      },
    ])

    setNotifications([
      {
        id: "1",
        title: "New property matches your criteria",
        message: "A new 2-bedroom apartment in East Legon is now available",
        timestamp: "1 hour ago",
        type: "property",
      },
      {
        id: "2",
        title: "Price drop alert",
        message: "The house in Tema you saved has reduced its price by GH₵100",
        timestamp: "3 hours ago",
        type: "price",
      },
    ])
  }

  const mockUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    userType: "renter",
    joinedAt: "2024-01-01",
  }

  const currentUser = user || mockUser

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">HomeFind Ghana</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <Link href="/listings">
                <Button className="bg-green-600 hover:bg-green-700">Browse Listings</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {currentUser.firstName}!</h1>
          <p className="text-gray-600">Here's what's happening with your housing search</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-red-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{savedListings.length}</p>
                  <p className="text-gray-600">Saved Properties</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MessageCircle className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{messages.filter((m) => m.unread).length}</p>
                  <p className="text-gray-600">New Messages</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Eye className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-gray-600">Property Views</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Bell className="h-8 w-8 text-purple-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{notifications.length}</p>
                  <p className="text-gray-600">Notifications</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="saved" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="saved">Saved Properties</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="saved" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Saved Properties</h2>
              <Link href="/listings">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Find More Properties
                </Button>
              </Link>
            </div>

            {savedListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedListings.map((listing) => (
                  <Card key={listing.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image
                        src={listing.image || "/placeholder.svg"}
                        alt={listing.title}
                        width={200}
                        height={150}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-red-500">
                        <Heart className="h-3 w-3 mr-1" />
                        Saved
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{listing.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{listing.location}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">GH₵{listing.price.toLocaleString()}</span>
                        <Link href={`/listings/${listing.id}`}>
                          <Button size="sm">View Details</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No saved properties yet</h3>
                  <p className="text-gray-600 mb-4">Start browsing to save properties you're interested in</p>
                  <Link href="/listings">
                    <Button>Browse Properties</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <h2 className="text-2xl font-bold">Messages</h2>

            {messages.length > 0 ? (
              <div className="space-y-4">
                {messages.map((message) => (
                  <Card key={message.id} className={message.unread ? "border-green-200 bg-green-50" : ""}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{message.agentName}</h3>
                          <p className="text-sm text-gray-600">{message.propertyTitle}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-gray-500">{message.timestamp}</span>
                          {message.unread && <Badge className="ml-2 bg-green-600">New</Badge>}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{message.lastMessage}</p>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Reply
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                  <p className="text-gray-600">Messages from agents will appear here</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <h2 className="text-2xl font-bold">Notifications</h2>

            {notifications.length > 0 ? (
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <Card key={notification.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold mb-1">{notification.title}</h3>
                          <p className="text-gray-700 mb-2">{notification.message}</p>
                          <span className="text-sm text-gray-500">{notification.timestamp}</span>
                        </div>
                        <Bell className="h-5 w-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
                  <p className="text-gray-600">You're all caught up!</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-2xl font-bold">Profile Settings</h2>

            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <p className="text-gray-900">{currentUser.firstName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <p className="text-gray-900">{currentUser.lastName}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p className="text-gray-900">{currentUser.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Account Type</label>
                  <Badge variant="secondary">
                    {currentUser.userType === "renter" ? "Home Seeker" : currentUser.userType}
                  </Badge>
                </div>
                <Button>Edit Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
