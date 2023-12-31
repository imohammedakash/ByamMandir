import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import commonHelper from '@/helpers/commonHelper'
import { NextRequest, NextResponse } from "next/server";
connect()
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({
                status: 500,
                message: "Invalid Email or Password"
            })
        }
        let match: boolean = false
        await commonHelper.comparePassword(password, user.password).then((res: any) => match = res.match).catch((err: any) => match = false)
        if (!match) {
            return NextResponse.json({
                status: 500,
                message: "Invalid Email or Password"
            })
        }
        let token: string = '';
        await commonHelper.generateToken(user._id).then((res: any) => token = res.data).catch(error => { throw new Error('Error generating token:') });
        const response = NextResponse.json({
            message: "User Logged In Successfully",
            status: 200,
        })
        response.cookies.set("token", token, { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) })
        return response
    } catch (err: any) {
        return NextResponse.json({
            message: err.message,
            status: 500
        })
    }

}