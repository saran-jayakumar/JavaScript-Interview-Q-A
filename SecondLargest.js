function secondLargest(numbers){
    let unique = [...new Set(numbers)];
    unique.sort((a,b) => b - a);
    return unique[1];
}
console.log(secondLargest([1,22,34,55,66,7,8,99,11]))