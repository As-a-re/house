import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // In a real app, you would fetch from Supabase
    // For demo purposes, we'll return mock data
    const listings = [
      {
        id: "1",
        title: "Modern 2-Bedroom Apartment in East Legon",
        price: 1200,
        location: "East Legon, Accra",
        bedrooms: 2,
        bathrooms: 2,
        area: 85,
        type: "apartment",
        images: ["/placeholder.svg?height=200&width=300"],
        agent: { name: "Kwame Asante", verified: true },
        description: "Beautiful modern apartment with great amenities",
        createdAt: "2024-01-15",
      },
      {
        id: "2",
        title: "Affordable 3-Bedroom House in Tema",
        price: 800,
        location: "Tema, Greater Accra",
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        type: "house",
        images: ["/placeholder.svg?height=200&width=300"],
        agent: { name: "Ama Osei", verified: true },
        description: "Perfect family home in a quiet neighborhood",
        createdAt: "2024-01-14",
      },
    ]

    return NextResponse.json(listings)
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch listings" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const listingData = await request.json()

    // In a real app, you would save to Supabase
    const newListing = {
      id: Date.now().toString(),
      ...listingData,
      createdAt: new Date().toISOString(),
      views: 0,
      inquiries: 0,
    }

    return NextResponse.json({
      success: true,
      listing: newListing,
      message: "Listing created successfully",
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to create listing" }, { status: 500 })
  }
}
