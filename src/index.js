module.exports = function check(str, bracketsConfig) {
  if (!str.length || !bracketsConfig.length) {
    console.log("1")
    return false;
  } 
  if (str.length % 2) {
    console.log("2")
    return false
  }
  let strToClear = str;
  const regexps = bracketsConfig.map(bracketsPair => {
    if(!isNaN(+bracketsPair[0] && !isNaN(+bracketsPair[1]))) {
        let regexp = new RegExp(`${bracketsPair[0]}${bracketsPair[1]}`, '');
        return regexp; 
    }
    let regexp = new RegExp(`\\${bracketsPair[0]}\\${bracketsPair[1]}`, '');
    return regexp;
  })
  console.log(regexps)
  let mark = true;
  while(mark) {
    mark = strToClear.length;
    for(let i = 0; i < regexps.length; i++) {
      if(!strToClear.match(regexps[i])) {
        console.log("3")
        mark = false;
      }
      if(strToClear.match(regexps[i])) {
        strToClear = strToClear.replace(regexps[i], "")
        mark = true;
        break;
      }
    }
  }
  return !strToClear.length
}
