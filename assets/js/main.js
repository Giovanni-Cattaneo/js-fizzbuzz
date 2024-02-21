console.log("hello");


for (let i = 1; i <= 100; i++){
    let divideThree = (i % 3);
    let divideFive = (i % 5);
   
    if (divideThree === 0 && divideFive === 0){
        console.log("Fizz-buz");
    } else if(divideFive === 0){
        console.log("buzz");
    } else if( divideThree === 0){
        console.log("fizz");
    } else{
        console.log(i);
    }
}