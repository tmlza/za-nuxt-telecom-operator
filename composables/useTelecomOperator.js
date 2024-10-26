// composables/useTelecomOperator.js

import { format_phone } from '../utils/phoneFormatter';

export const getTelecomOperatorName = (phoneNumber,countryCode) => {
    switch(countryCode) {
        case '95':
            return getMyanmarTeleComOperators(phoneNumber);
        case '66':
            return getThailandTeleComOperators(phoneNumber);
        case '65':
            return getSingaporeTeleComOperators(phoneNumber);
        default:
            return 'Unsupported country code';
    }
};

export function getMyanmarTeleComOperators(phoneNumber) {
    if (!phoneNumber) {
        return 'Phone number is required';
      }
    
      const telecomOperators = {
        "099": { name: "Ooredoo", logo: "https://access.cdndata.cloud/marketplace/svg/ooredoo.svg" },
        "097": { name: "Telenor", logo: "https://access.cdndata.cloud/marketplace/svg/atom.svg" },
        "096": { name: "MyTel", logo: "https://access.cdndata.cloud/marketplace/svg/mytel.svg" },
        "093": { name: "MEC", logo: "https://access.cdndata.cloud/marketplace/svg/mec.svg" }
    };
    
    const mptPrefixes = ["098", "095", "094", "092"];
    mptPrefixes.forEach(prefix => {
        telecomOperators[prefix] = { name: "MPT", logo: "https://access.cdndata.cloud/marketplace/svg/mpt.svg" };
    });
    
    const formattedPhoneNumber = format_phone(phoneNumber);
    const prefix = formattedPhoneNumber.substring(0, 3);
    
    if (telecomOperators[prefix].name === "MPT" || telecomOperators[prefix].name === "MEC") {
      return phoneNumber.length < 8 || phoneNumber.length > 11 ? 'Invalid phone number' : telecomOperators[prefix] || 'Unknown number';
    }else{
      return phoneNumber.length !== 11 ? 'Invalid phone number' : telecomOperators[prefix] || 'Unknown number';
    }
}

export function getThailandTeleComOperators(phoneNumber) {
    if (!phoneNumber) {
        return 'Phone number is required';
      }

    const telecomOperators = {};

    const dtacPrefixes = ["085","089", "084"];

    dtacPrefixes.forEach(prefix => {
        telecomOperators[prefix] = { name: "DTAC", logo: "https://access.cdndata.cloud/marketplace/svg/mpt.svg" };
    });

    const trueMoveHPrefixes = ["083","084", "088"];
    trueMoveHPrefixes.forEach(prefix => {
        telecomOperators[prefix] = {name: "TrueMoveH", logo: "https://access.cdndata.cloud/marketplace/svg/mpt.svg"};
    })

    const aisPrefixes = ["080","081","090"];
    aisPrefixes.forEach(prefix=> {
        telecomOperators[prefix] = {name: "AIS", logo: "https://access.cdndata.cloud/marketplace/svg/mpt.svg"};
    })
    
    const formattedPhoneNumber = format_phone(phoneNumber);
    const prefix = formattedPhoneNumber.substring(0, 3);
    
    return phoneNumber.length !== 7 ? 'Invalid phone number' : telecomOperators[prefix] || 'Unknown number';
    
}

export function getSingaporeTeleComOperators(phoneNumber) {
    return 'Singapore Telecom Operators';
}


export function getCountryCodes() {
    return [
            {
                country : 'Myanmar',
                code : '95',
                flag : 'mm-flag.svg',
                
            },
            {
                country : 'Singapore',
                code : '65',
                flag : 'singapore-flag.svg',
            },
            {
                country : 'Thailand',
                code : '66',
                flag : 'thai-flag.svg',
            },
            // {
            //     country : 'Malaysia',
            //     code : '60',
            //     flag : 'malaysia-flag.svg',
            // },
            // {
            //     country : 'China',
            //     code : '86',
            //     flag : 'china-flag.svg',
            // },
            // {
            //     country : 'USA',
            //     code : '1',
            //     flag : 'US-flag.svg',
            // },
            // {
            //     country : 'Japan',
            //     code : '81',
            //     flag : 'japan-flag.svg',
            // },
            // {
            //     country : 'South Korea',
            //     code : '82',
            //     flag : 'korea-flag.svg',
            // },
            // {
            //     country : 'India',
            //     code : '91',
            //     flag : 'india-flag.svg',
            // },
        ]
}

module.exports = {
    getTelecomOperatorName,
}