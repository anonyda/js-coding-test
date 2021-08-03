/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {

    if(typeof(seconds) !== 'number'){
        throw new Error('Invalid Input');
    }

    let H = Math.floor(seconds / 3600);
    let M = Math.floor((seconds - (H * 3600)) / 60);
    let S = seconds - (H * 3600 ) - (M * 60);

    return {
       hours: H,
       minutes: M,
       seconds: S,
    }
};

module.exports = convertTime;
