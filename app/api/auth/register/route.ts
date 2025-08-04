import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, password, userType } = await request.json()

    // In a real app, you would create user in Supabase
    // For demo purposes, we'll simulate registration
    if (email && password && firstName && lastName) {
      const user = {
        id: Date.now().toString(),
        email,
        firstName,
        lastName,
        phone,
        userType,
        verified: false,
        createdAt: new Date().toISOString(),
      }

      return NextResponse.json({
        success: true,
        user,
        message: "Registration successful",
      })
    }

    return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Registration failed" }, { status: 500 })
  }
}
