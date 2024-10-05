// Good Luck 💪🏾
function makeCapital(str) {
    
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}


console.log(makeCapital("my name is ali")); 
console.log(makeCapital("fikrcamp Bootcamp")); 
console.log(makeCapital("i live In Paris")); 