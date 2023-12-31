

import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
    try {
        const response = NextResponse.json({
            message: "Logged Out Successfully",
            status: 200,
        })
        response.cookies.set("token", "", { expires: new Date(0) })
        return response
    } catch (err: any) {
        return NextResponse.json({
            message: err.message,
            status: 500
        })

    }
}