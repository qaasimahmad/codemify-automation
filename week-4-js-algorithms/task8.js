const min = 1;
const max = 100;

for (let i = min; i < max; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  } else if(i % 3 === 0){
    console.log("Fizz");
  } else if(i % 5 === 0){
    console.log("Buzz");
  } else {
    console.log(i);
  }
}