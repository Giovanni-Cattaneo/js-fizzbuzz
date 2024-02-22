console.log("hello");


for (let i = 1; i <= 100; i++){
    let divideThree = (i % 3); // questa variabile per verificare i multipli di 3
    let divideFive = (i % 5); // questa variabile per verificare i multipli di 5
   
    if (divideThree === 0 && divideFive === 0){ // qui verifichiamo che non ci siano avanzi dall'operazione di i divisa per un numero multiplo di 3 o 5
        console.log("Fizz-buz");
    } else if(divideFive === 0){ // qui verifichiamo che non ci siano avanzi dall'operazione di i divisa per un numero multiplo di 5
        console.log("buzz");
    } else if( divideThree === 0){ // qui verifichiamo che non ci siano avanzi dall'operazione di i divisa per un numero multiplo di 3
        console.log("fizz");
    } else{
        console.log(i);
    }

    document.getElementById("btn").addEventListener("click", myFunction)

    function myFunction(){
        let ul = document.querySelector("ul.list")
        const element= `<li class="box"></li>`
        ul.innerHTML += element;
        let box = document.querySelector(".box")
        if (divideThree === 0 && divideFive === 0){ 
            box.innerHTML = "Fizz-buz";
        } else if(divideFive === 0){ 
            box.textContent = "buzz";
        } else if( divideThree === 0){ 
            box.textContent = "fizz";
        } else{
            box.textContent = i;
        }
        
    }
}


