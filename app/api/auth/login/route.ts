import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // In a real app, you would validate credentials against Supabase
    // For demo purposes, we'll simulate authentication
    if (email && password) {
      const user = {
        id: "1",
        email,
        firstName: "John",
        lastName: "Doe",
        userType: "renter",
        verified: true,
      }

      return NextResponse.json({
        success: true,
        user,
        message: "Login successful",
      })
    }

    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Login failed" }, { status: 500 })
  }
}
