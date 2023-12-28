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
        if (user) {
            return NextResponse.json({
                status: 500,
                message: "User already exists"
            })
        }
        const newUser = new User({
            username,
            email,
            password,
        })
        const savedUser = await newUser.save();
        console.log(savedUser)
        return NextResponse.json({
            message: "User Registered",
            status: 200
        })
    } catch (err: any) {
        return NextResponse.json({
            error: err.message,
            status: 500
        })
    }

}