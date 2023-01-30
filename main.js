// function fun1(msg, callback) {
//     console.log(msg);
//         callback();
//     }
//     function fun2() {
//         console.log('welcome to js');
//     }
   
//     fun1('hello', fun2);

//     setTimeout(()=>{
//         console.log(1);
//         setTimeout(()=>{
//             console.log(2);
//             setTimeout(()=>{
//                 console.log(3);
//                 setTimeout(()=>{
//                     console.log(4);
//                     setTimeout(()=>{
//                         console.log(5);
//                         setTimeout(()=>{
//                             console.log(6);
//                             setTimeout(()=>{
//                                 console.log(7);
                                
//                             }, 1000)
                            
//                         }, 1000)
                        
//                     }, 1000)
                    
//                 }, 1000)
                
//             }, 1000)
            
//         }, 1000)
//     }, 1000)



//     setTimeout(()=>{
//         console.log(1);
//         setTimeout(()=>{
//             console.log(2);
//             setTimeout(()=>{
//                 console.log(3);
//                 setTimeout(()=>{
//                     console.log(4);
//                     setTimeout(()=>{
//                         console.log(5);
//                         setTimeout(()=>{
//                             console.log(6);
//                             setTimeout(()=>{
//                                 console.log(7);
                                
//                             }, 1000)
                            
//                         }, 2000)
                        
//                     }, 3000)
                    
//                 }, 4000)
                
//             }, 5000)
            
//         }, 6000)
//     }, 7000)


//     let printNumber = (time, num) => {
//         return new Promise((res, rej) => {
//             if(num){
//                 setTimeout(()=>{
//                     res(num());
//                 }, time)
//             }
//             else{
//                 rej(console.log("No Number"))
//             }
    
//         })
//     }
    
//     printNumber(0, ()=>console.log("Number"))
//     .then(()=>{
//         printNumber(1000, ()=>console.log("1"))
//     })
//     .then(()=>{
//         printNumber(2000, ()=>console.log("2"))
//     })
//     .then(()=>{
//         printNumber(3000, ()=>console.log("3"))
//     })
//     .then(()=>{
//         printNumber(4000, ()=>console.log("4"))
//     })
//     .then(()=>{
//         printNumber(5000, ()=>console.log("5"))
//     })
//     .then(()=>{
//         printNumber(6000, ()=>console.log("6"))
//     })
//     .then(()=>{
//         printNumber(7000, ()=>console.log("7"))
//     })


//     let x = function(condition){
//         return new Promise((resolve, reject)=>{
//             if(condition == 'yes'){
//                 resolve('promise resolved')
//             }
//             else{
//                 reject('promise rejected')
//             }
//         })
//     }
    
//     x('yes').then(response => console.log(response)).catch(err=>console.log(err))



//     function CallBackfun() {
//         CallBackfun1()
//         function CallBackfun1() {
//             CallBackfun2()
//             function CallBackfun2() {
//                 CallBackfun3()
//                 function CallBackfun3() {
//                     CallBackfun4()
//                     function CallBackfun4() {
//                         console.log("Callback Functon");
//                     }
//                 }
//             }
//         }
//     }
//     CallBackfun()


//     function mypromfuntion(){
//         return new Promise((res,rej) => {
//             let value = false;
    
//             if (value) {
//                 res("sucess");
//               } 
//               else {
//                 rej("not sucess");
//               }
//         })
//       }
//       mypromfuntion().then((msg) => {
//         console.log(msg);
//       })
//       .catch((msg2) => {
//         console.log(msg2);
    
//       })



console.log("hi")
let name=new Promise(function(resolve,reject){
  setTimeout(()=>{resolve("Abhi")},2000)  
})
async function x(){
    let result=await name;
    console.log(result);
    console.log("hello")
}
x();