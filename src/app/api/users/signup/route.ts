import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import commonHelper from '@/helpers/commonHelper'
import { NextRequest, NextResponse } from "next/server";
import template from "@/DocumentTemplate/template";
connect()
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { firstname, lastname, email, password, phone } = reqBody;
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({
                status: 500,
                message: "User already exists"
            })
        }
        let otp = commonHelper.generateOTP();
        let newPassword: any = ''
        await commonHelper.hashPassword(password).then(res => newPassword = res.password).catch(error => { throw new Error('Error generating token:') });
        const newUser = new User({ firstname, lastname, email, password: newPassword, phone, otp })
        let savedUser = await newUser.save();
        let token: string = '';
        await commonHelper.generateToken(savedUser._id).then((res: any) => token = res.data).catch(error => { throw new Error('Error generating token:') });
        let mailStatus: number = 500;
        await commonHelper.sendMail(email, template.EMAIL_VERIFY_SUBJECT(), template.VERIFY_MAIL_BODY(savedUser)).then((res: any) => { mailStatus = 200 }).catch((err) => { mailStatus = 500 });
        const response = NextResponse.json({
            message: "User Registered",
            status: 200,
            mailStatus: mailStatus
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