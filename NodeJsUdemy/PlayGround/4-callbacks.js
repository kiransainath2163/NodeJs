// setTimeout(()=>{
//     console.log('Two seconds are up!!')
// },2000)

// let ab = (address,cb)=>{
//     setTimeout(()=>{
//         let data={
//             longitude:0,
//             latitude:0
//         }
//         cb(data)
//     },2000)
// }

// ab('Kukatpally',(data)=>{
//     console.log(data)
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

let add = (a,b,cb)=>{
    setTimeout(()=>{
        let d = a+b
        cb(d)

    },2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})