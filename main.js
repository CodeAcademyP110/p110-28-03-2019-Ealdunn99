"use strict";



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



// let arr=["alma","ev","masin","adam","kurs","yol","test","avtobus"]
// let letter="a"

// let same =(newarr,newletter)=>{
//     let samearr=[]
//     for (const n of newarr) {
//         n[0]==newletter ? samearr.push(n):null
//           }
// return(samearr)
// }

// alert(same(arr,letter))





