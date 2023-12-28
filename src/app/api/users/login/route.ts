import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
connect()
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        console.log(reqBody);
        const { username, email, password } = reqBody;
        console.log(reqBody);
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({
                status: 500,
                message: "Invalid Email or Password"
            })
        }
        return NextResponse.json({
            message: "User Found",
            status: 200,
            user
        })
    } catch (err: any) {
        return NextResponse.json({
            error: err.message,
            status: 500
        })
    }

}