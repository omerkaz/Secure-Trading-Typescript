const referralCodes = require("referral-codes")
export const generateReferenceCode = () => {
    const referenceCode = referralCodes.generate({
        length: 8,
        count: 1,
      });
   return referenceCode[0]
}

export const generateSmsCode = () => {
    const SMSCode = referralCodes.generate({
        length: 6,
        count: 1,
      });
    return SMSCode[0]
}