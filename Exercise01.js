function phrase3words(value1, value2, value3) { 
    var answer = value1 + " " + value2 + " " + value3;
    return answer; 
} 

var result1 = phrase3words("smile","at","everyone"); 
console.log(result1); 

var result2 = phrase3words("everyone","wave", "back"); 
console.log(result2); 

var result3 = phrase3words("coding","is", "fun"); 
console.log(result3);


function reformatName(first, last) { 
    return last + ", " + first;
}

var result = reformatName("Susan", "Rodger"); 
console.log(result); 

result = reformatName("Robert", "Duvall"); 
console.log(result);