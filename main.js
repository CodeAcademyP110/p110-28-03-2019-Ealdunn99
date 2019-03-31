"use strict";

//HOMEWORK 3
// let numbers = [];
// let arrayLength = +prompt("Arrayin uzunlugunu daxil edin: ");
// let sumOfAll = 0;
// let sumOfEvens = 0;

// for(let i = 0; i < arrayLength; i++)
// {
//     let n = +prompt(i+1 + "-ci reqemi daxil edin: ");
//     numbers.push(n);

//     sumOfAll += n;
//     n % 2 == 0 ? sumOfEvens += n : null;
// }

// for(let i = 0; i < numbers.length; i++)
// {
//     sumOfAll += numbers[i];
//     // if(numbers[i] % 2 == 0) sumOfEvens += numbers[i];
//     numbers[i] % 2 == 0 ? sumOfEvens += numbers[i] : null;
// }

// console.log(`Sum of all: ${sumOfAll}; Sum of evens: ${sumOfEvens}; Sum of odds: ${sumOfAll - sumOfEvens}`);


// // HOMEWORK 4
// let words = [];

// for(let i = 0; i < 5; i++)
// {
//     let word = prompt(i+1 + "-ci sozu daxil edin: ");
//     words.push(word);
// }

// let maxWord = words[0];
// let minWord = words[0];

// for (let w of words) 
// {
//     w.length > maxWord.length ? maxWord = w : null;
//     w.length < minWord.length ? minWord = w : null;
// }

// console.log(maxWord, minWord);


// FUNCTION - Reusable code block

// function FindPower(powerBase, power)
// {
//     let result = 1;

//     for (let i = 0; i < power; i++) {
//         result *= powerBase;
//     }

//     return result;
// }

// const GetPI = () => 3.14;

// function SumNumbers() 
// {
//     let sum = 0;
//     for (const n of arguments) 
//     {
//         if(+n)
//             sum += n;
//     }

//     return sum;
// }

// function DoMath(n1, n2, operator = "+")
// {
//     switch (operator) {
//         case "+":
//             return n1 + n2;
//         case "-":
//             return n1 - n2;
//         case "*":
//             return n1 * n2;
//         case "/":
//             return n1 / n2;
//         case "%":
//             return n1 % n2;
//         default:
//             throw new Error("operation is not valid");
//     }
// }

// function DoMathInfinite()
// {
//     let operator = arguments[0];

//     let sum;

//     switch (operator) {
//         case "+":
//             sum = 0;
//             break;
//         case "-":
//             sum = arguments[1];
//             break;
//         case "*":
//             sum = 1;
//             break;
//         default:
//             break;
//     }

//     for (let i = 1; i < arguments.length; i++) {
//         switch (operator) {
//             case "+":
//                 sum += arguments[i];
//                 break;
//             case "-":
//                 sum -= arguments[i];
//                 break;
//             case "*":
//                 sum *= arguments[i];
//                 break;
//             default:
//                 break;
//         }
//     }

//     return sum;
// }

// console.log(DoMathInfinite("-", 25, 12, 13, 45, 54));

// var points = [40, 100, 85, 92, 78, 67];
// let grades = [];
// points.sort(
//     function(a, b)
//     {
//         return a - b;
//     }
// );

// points.forEach(function(point){
//     grades.push(GetGrade(point));
// })
    
// function GetGrade(point)
// {
//     if(point >= 91) return "A";
//     if(point >= 81) return "B";
//     if(point >= 71) return "C";
//     if(point >= 61) return "D";
//     if(point >= 51) return "E";
//     return "F";
// }




//  let arr = [];

// for (let i = 0; i < 5; i++) {
//  let n = prompt(`soz  ${i+1}`)
//  while(!isNaN(n)){
//      alert("sef")
//      n = prompt(`soz  ${i+1}`)
//  }
//   arr.push(n)
    
 
// }
// let maxWord = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length>maxWord.length) {
//         maxWord = arr[i]
        
//     }
    
// }
// alert(maxWord)


// function say(a,b) {
//      return(a+b)
// }
// let a=+prompt("a")
// let b=+prompt("b")

//  let value = say(a,b);
// alert(value)


// let arr = [" alma" ,"salamnese.com", "code@mail.com"]


// let newarr =arr.filter(email => email.indexOf("@") != -1)

// alert(arr)
// alert(newarr)





// let arr = ["me1  surname1" ,"nameyryttyr3  surname3", "name2  surname2"]


// // let newarr =arr.filter(email => email.split(" ")[0].length >3);

// let newarr=arr.filter(function(email){
// if(email.split(" ")[0].length>3){
//     return email
// }
// })

// alert(newarr)
////elave



// let yes = n => n*5;
// let no = n => n-10;


// let say = n => {
//   if (n==5){ return yes(n) }
//   else  return no(n)


// };
// let a=prompt("reqem")
// alert( say(a))



////array

// let arr = ["Apple", "Or@ange", "Plum"];
// let newarr = [];
// for( let n of arr){
   
//  // if(n.indexOf("@")>=0){ newarr.push(n)}

//   n.indexOf("@")>=0?newarr.push(n):null;
// }
// alert(newarr)


// let a = prompt("eded yaz")
// a>=10 ? alert("if1") : a<=10 ? alert("if2") :alert("outline");
// sual ? yes : no : else 
// sual ? yes : sual ? yes : no : else  : else 










// home yuxarida




// ders asagida




































/////////////////












// let a = 5;
// let b = 8;
// let c = 5;
// if (a > 3) {
//     if (b == 8) {
//         console.log(b)
//     }
// } else {
//     console.log("sehfdir")
// }
// a > 3 ? b == 8 ? console.log(b) : null : console.log("sehfdir")

// let a = ["said", "elcin", "medine"];


// while(true){

// }


// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])

// }

// let i=0;
// for (const element of a) {
//     console.log(element,i)
//     i++;

// }

// a.forEach(element,index,array=>{
//     console.log(`${element}  ${index}  ${array}`)
// });

// let text ="sadsd"

// text.search("s",3)

// a.slice()



// let text =SumElements(5,3);
// console.log(text+" funksiya deyer qaytarmadi")

// let SumElements = (a, b) => a + b;
// let sum=0;
// function SumElements() {
//     for (const element of arguments) {
//          sum+=element;
//     }
//     return sum;
// }

// console.log(SumElements(5,3, "wasd",5, 3));

// let arrOfNumbers = [4, 5, 6, 7, 8, 9];
// function GetCallBackFunction(n) {
//      if(n%2==0){
//          return n;
//      }
//     }
// // let GetCallBackFunction2 = (n) => n % 3 == 0 ? n : null;
// function getDividedElements(arr, callbackFn) {//arr=[4, 5, 6, 7, 8, 9];//
//     let powedArr = [];
//     for (const elemnt of arr) {
//         let number = elemnt
//         if (callbackFn(elemnt)) {
//             powedArr.push(number *= number);
//         }
//     }
//     return powedArr;
// }

// console.log(getDividedElements(arrOfNumbers, GetCallBackFunction))
// // console.log(getDividedElements(arrOfNumbers, GetCallBackFunction2))

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
//   });
// let arr = ["Bilbo", "Gandalf", "Nazgul"]
// arr.forEach((item, index) => {
//     alert(item + index )
//   });

// let arr = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
  
//   let user = arr.find(item => item.id == 1);
  
//   alert(user.name); // John

// let arr = [1,2,3,4,5,6,7,8,9,10];
  
//   let newarr = arr.filter(n => n % 2==0  );
  
//   alert(newarr); 


//   let arr = [1,2,3,4,5,6,7,8,9,10];
  
//   let newarr = arr.map(n => n % 2==0  );
  
//   alert(newarr); 



// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "ok" );
//   }
  
//   function showCancel() {
//     alert( "cansel" );
//   }
  

//   ask("Do you agree?", showOk, showCancel);
























/////////////// homework

////1



// let sentence = prompt("Write your message")

// //eger ancaq soz olmali olsa while yandir
// while (isNaN(sentence) || sentence==0 ) {
//     alert("Try again")
//     sentence = prompt("Write your message")
// }

// let spacefind = (message) => {
//     let a=0;
//     let message2=message.trim()
//    for (const n of message2) {
//        n==" " ? a++ :null; 
//    }
//    return(a) 
// }
// alert(spacefind(sentence))

////1ci (1cinin diger versiyasi)

// let sentence = prompt("Write your message")

// //eger ancaq soz olmali olsa while yandir
// while (isNaN(sentence) || sentence==0 ) {
//     alert("Try again")
//     sentence = prompt("Write your message")
// }

// let spacefind = (message) => {
//     let message2=message.trim()
//     let arr =message2.split(" ")
//     return(arr.length-1)
// }
// alert(spacefind(sentence))



// //2

// let arr = [1,2,3,8,1]
// let sumfun=(newarr)=>{
//     let sum=0
//     for (const n of newarr) {
//         sum+=n
//     } 
//     return(sum/newarr.length) 
// }
// alert(sumfun(arr))

// //3

// let arr = [1,2,3,4,5,6,7,8,9,10]
//  let fun2=(newarr)=> {
//     let arr2=[]
//     for (const n of newarr) {
//        n%2==0 ? arr2.push(n):null;
//             } 
//     return(arr2) 
// }
// alert(fun2(arr))



////4


// let arr = [1,2,3,4,5,6,7,8,9,10]
// let sumMiddlefun=(newarr)=>{
//     let sum=0
//     for (const n of newarr) {
//         sum+=n
//     } 
//     let middleNum=sum/newarr.length
//     let arr2=[]
//     for (const n of newarr ){
//         n>middleNum ? arr2.push(n):null;
//     }
//     return arr2

// }
// alert(sumMiddlefun(arr))





////5

// let arr = ['Bilbo' ,'Gandalf','Nazgul','Bilbo' ,'Gandalf','Nazgul'];

// let comma = (newarr) => {
//     let arrcomma
//     return arrcomma = newarr.join(',    ');
// }

// alert(comma(arr)); 





// //6

// let arr = ['Bilbo1' ,'Gandalf2','Nazgul3','Bilbo4' ,'Gandalf5'];
// let reversefun = (newarr) => {
//     let reversearr=[]
//     for (let i = newarr.length-1; i >=0; i--) {
//         reversearr.push(newarr[i])
//          }
//     return(reversearr)
// }
// alert(reversefun(arr)); 



// //7

// let arr = ['Bilbo' ,'Gandalf22','Nazgul','Bilbo55' ,'Gandalf','Emin'];
// let arr2 = ['Bilbo' ,'Gandalf33','Bilbo66' ,'Gandalf','Emin', 'Nazgul'];

// const sameletter=( newarr,newarr2)=>{
//     let samearr=[]//for return
//     for (const n of newarr) {
//       for (const n2 of newarr2) {
//             n==n2 ? samearr.push(n):null;
//           }
// }
// return(samearr)
// }

// alert(sameletter(arr,arr2))






/////8



let arr=["alma","ev","masin","adam","kurs","yol","test","avtobus"]
let letter="a"

let same =(newarr,newletter)=>{
    let samearr=[]
    for (const n of newarr) {
        n[0]==newletter ? samearr.push(n):null
          }
return(samearr)
}

alert(same(arr,letter))




//9

