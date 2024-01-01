import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import commonHelper from '@/helpers/commonHelper'
import { NextRequest, NextResponse } from "next/server";
connect()
export async function POST(request: NextRequest) {
    try {
        let token = request.cookies.get('token');
        if (!token?.value) {
            return NextResponse.json({
                status: 500,
                message: "Unauthorized Access of Resource",
            });
        }
        let data: any = await commonHelper.JwtParser(token?.value)
        const user = await User.findOne({ _id: data.userID });
        if (!user) {
            throw new Error('Unauthorized Access of Resource User not found')
        }
        let { _id, otp, isverified, isAdmin, __v, password, ...rest } = user?._doc
        return NextResponse.json({
            message: 'User Profile Found ',
            status: 200,
            data: rest
        })
    } catch (err: any) {
        return NextResponse.json({
            message: err.message,
            status: 500
        })
    }

}