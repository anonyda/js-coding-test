const rotateString = (str, n, direction) => {
  // str = input string
  // n = number of rotations
  //
  // input str = random ,1, right
  // output mrando

  if (typeof(str) !== 'string'){
    throw new Error('Invalid Input')
  }

  if(direction.toLowerCase() === 'left'){
    return str.substring(n, str.length) + str.substring(0, n);
    
  }
  else if(direction.toLowerCase() === 'right'){
    return str.substring(str.length - n, str.length) + str.substring(0, str.length - n);
  }
  else{
    throw new Error('Invalid Direction');
  }
};

module.exports = rotateString;
