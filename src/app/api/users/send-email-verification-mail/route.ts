import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import commonHelper from '@/helpers/commonHelper'
import { NextRequest, NextResponse } from "next/server";
import template from "@/DocumentTemplate/template";
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
        const user = await User.findOne({ _id: data.userID }, 'otp email');
        if (!user) {
            throw new Error('Unauthorized Access of Resource')
        }
        let otp = commonHelper.generateOTP();
        user.otp = otp;
        let savedUser = await user.save();
        let mailStatus: number = 500;
        await commonHelper.sendMail(savedUser.email, template.EMAIL_VERIFY_SUBJECT(), template.VERIFY_MAIL_BODY(savedUser)).then((res: any) => { mailStatus = 200 }).catch((err) => { mailStatus = 500 });
        if (mailStatus === 500) {
            throw new Error('Failed to send Otp')
        }
        return NextResponse.json({
            message: "Otp Sent Successfully",
            status: mailStatus
        })
    } catch (err: any) {
        return NextResponse.json({
            message: err.message,
            status: 500
        })
    }

}