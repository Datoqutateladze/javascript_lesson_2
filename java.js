function ragaca(...ricxvebi){
    let numbersSum = 0;
    for(let item of ricxvebi){
        numbersSum = numbersSum + item;
    }
    return numbersSum;
}
let result = ragaca(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result);

function saxeli(...cifrebi){
    let numbers = 0;
    for(let item of cifrebi){
         if(item > 0){
             numbers = numbers + item;
        }

        }
         return numbers;
     }
     let result = saxeli(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
     console.log(result);

    function getValue(array){
         return Math.max(... array);
    };
     let myArray = [10,20,30,40,50,60,70];
    console.log(getValue(myArray));
 