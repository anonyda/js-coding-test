/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const rgbToHexConversion = (...rgbValues) => {
    if(rgbValues.length != 3){
        throw new Error('Invalid Input');
    }
    let hexCode = '#';
    let hexValues = {
        10: 'a',
        11: 'b',
        12: 'c',
        13: 'd',
        14: 'e',
        15: 'f'
    }
    rgbValues.forEach((value) => {
        if((typeof(value) !== 'number') || (value > 255) || (value < 0)){
            throw new Error('Invalid Input');
        }

        let decimal = value/16;

        let firstHex = Math.floor(decimal);
        let secondHex = ((decimal % 1) * 16);
        
        if(firstHex > 9){
            if(firstHex in hexValues){
                firstHex = hexValues[firstHex];
            }
        }

        if(secondHex > 9){
            if(secondHex in hexValues){
                secondHex = hexValues[secondHex];
            }
        }
        hexCode += firstHex;
        hexCode += secondHex;

    })
    return hexCode;
};

console.log(rgbToHexConversion(220, 100, 40))

module.exports = rgbToHexConversion;
