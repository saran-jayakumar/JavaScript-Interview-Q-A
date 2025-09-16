function isPalindrome(str){
    const reversedString = str.split("").reverse().join("");
    if(str === reversedString){
        console.log(str + " It is a palindrome");
    } else {
        console.log(str + " It is not a palindrome");
    }
}  
console.log(isPalindrome("madam"));