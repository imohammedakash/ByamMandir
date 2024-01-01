import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import commonHelper from '@/helpers/commonHelper'
import { NextRequest, NextResponse } from "next/server";
import template from "@/DocumentTemplate/template";
connect()
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
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
        let keys = Object.keys(reqBody);
        for (let i = 0; i < keys.length; i++) {
          if (keys[i] !== 'isAdmin' && keys[i] !== 'password' && keys[i] !== 'email' ) {
            user[keys[i]] = reqBody[keys[i]];
          }
        }      
        await user.save();
        return NextResponse.json({
            message: 'User Updated successfully',
            status: 200
        })
    } catch (err: any) {
        return NextResponse.json({
            message: err.message,
            status: 500
        })
    }

}