import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import commonHelper from '@/helpers/commonHelper'
import { NextRequest, NextResponse } from "next/server";
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
        await commonHelper.sendMail(email, 'One Time Password (OTP) for verifying your email address', `<div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); text-align: start;">
        <span>Dear <b>${firstname}</b>, <br/> Thanks for Signing Up with Byam Mandir</span>
          <p style="color: #666;">Your One-Time Password (OTP) is:</p>
          <div style="font-size: 24px; font-weight: bold; color: #4CAF50; margin: 20px 0;">${otp}</div>
          <p style="margin-top: 20px; color: #999;">This OTP is valid for a short period. Do not share it with anyone.</p>
        </div>`).then((res: any) => { mailStatus = 200; console.log(res) }).catch((err) => { mailStatus = 500 });
        const response = NextResponse.json({
            message: "User Registered",
            status: 200,
            mailStatus: mailStatus
        })
        response.cookies.set("token", token, { httpOnly: true })
        return response
    } catch (err: any) {
        return NextResponse.json({
            message: err.message,
            status: 500
        })
    }

}