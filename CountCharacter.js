function countChar(str){
    let count = {};
    for(let ch of str){
        count[ch] = (count[ch] || 0) + 1 
    }
    return count;
}
console.log(countChar("Banana"))