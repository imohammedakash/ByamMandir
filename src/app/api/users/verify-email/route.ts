import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import commonHelper from '@/helpers/commonHelper'
import { NextRequest, NextResponse } from "next/server";
import template from "@/DocumentTemplate/template";
connect()
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        let { otp } = reqBody;
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
            throw new Error('Unauthorized Access of Resource')
        }
        if (user.otp === null && user.isverified) {
            return NextResponse.json({
                message: 'Email Already Verified',
                status: 204
            })
        }
        if (user.otp === null && !user.isverified) {
            return NextResponse.json({
                message: 'Please try resending otp',
                status: 500
            })
        }
        if (user.otp === otp) {
            user.isverified = true;
            user.otp= null;
            await user.save();
            await commonHelper.sendMail(user.email, template.EMAIL_VERIFIED_SUCCESS_SUBJECT(), template.EMAIL_VERIFIED_SUCCESS_BODY(user) );
            return NextResponse.json({
                message: 'Email verified successfully',
                status: 200
            })
        }
        throw new Error('Invalid Otp')
    } catch (err: any) {
        return NextResponse.json({
            message: err.message,
            status: 500
        })
    }

}