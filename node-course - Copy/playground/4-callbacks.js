// setTimeout(() => {
//     console.log("This was printed after waiting patiently for two seconds")
// }, 2000);

// const names = ["Federico", "Jess", "James"]
// const shortNames = names.filter((name) => {
//     return names.length <= 4
// });

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }
// //Asynchronous does not have a return
// geocode("Argentina", (data) => {
//     console.log(data)
// });


const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y)
    }, 2000)
};
add(1, 4, (sum) => {
    console.log(sum)
});
