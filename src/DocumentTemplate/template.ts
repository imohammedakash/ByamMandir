class DocumentTemplate {
    VERIFY_MAIL_BODY = (user: any) => `<div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); text-align: start;">
    <span>Dear <b>${user.firstname}</b>, <br/> Thanks for Signing Up with Byam Mandir</span>
      <p style="color: #666;">Your One-Time Password (OTP) is:</p>
      <div style="font-size: 24px; font-weight: bold; color: #4CAF50; margin: 20px 0;">${user.otp}</div>
      <p style="margin-top: 20px; color: #999;">This OTP is valid for a short period. Do not share it with anyone.</p>
    </div>`;
    EMAIL_VERIFY_SUBJECT = () => `One Time Password (OTP) for verifying your email address`
    EMAIL_VERIFIED_SUCCESS_SUBJECT = () => `Email Verified Successfully`
    EMAIL_VERIFIED_SUCCESS_BODY = (user: any) => `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Email Verification Success</title></head><body style="font-family: 'Arial', sans-serif; background-color: #f5f5f5; margin: 0; padding: 0;">
    <div style="background-color: #060d20; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); text-align: start; max-width: 600px; margin: 20px auto;"><img src="https://res.cloudinary.com/dn83xtspp/image/upload/v1676199461/Byam_Mandir__3_-removebg-preview_1_adss24.png" alt="Byam Mandir Logo" style="max-width: 100%; height: auto;"><h2 style="color: #4CAF50; margin-top: 20px;">Email Verified Successfully</h2><p style="color: #b5b5b5;">Dear <b>${user.firstname}</b>,</p><p style="color: #b5b5b5;">Thank you for signing up with Byam Mandir. Your email has been verified successfully.</p><p style="color: #b5b5b5;">Feel free to explore our platform and enjoy the benefits of being a member.</p><div style="font-size: 24px; font-weight: bold; color: #4CAF50; margin: 20px 0;">🎉 Welcome aboard!</div><p style="margin-top: 20px; color: #999;">If you have any questions or need assistance, don't hesitate to contact our support team.</p><p style="margin-top: 20px; color: #999;">Best regards,<br/>The Byam Mandir Team</p></div></body></html>`
}

export default new DocumentTemplate()