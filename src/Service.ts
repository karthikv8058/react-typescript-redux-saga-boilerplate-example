const inArray = (needle:any, haystack:any[]) => {
    let length = haystack.length;
    for (let i = 0; i < length; i++) {
      if(haystack[i] === needle) return true;
    }
    return false;
}
export default inArray;
// export {inArray, pair};