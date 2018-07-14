//LEVEL 0
// fetch("https://swapi.co/api/people")
//     .then(response => {
//         return response.json();//response.json() is asynchronous 
//     })
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => {
//         return err
//     });

//LEVEL 1 WITHOUT ASYNC
// fetch("https://swapi.co/api/people")
//     .then(response => {
//         return response.json();//response.json() is asynchronous 
//     })
//     .then(response => {
//         console.log(response.results)
//     })
//     .catch(err => {
//         return err
//     });

// //LEVEL 2 WITH ASYNC AWAIT
// fetch("https://swapi.co/api/people")
//     .then(async (response) => {
//         response = await response.json()
//         console.log(response.results)
//     })
//     .catch(err => {
//         return err
//     });

//LEVEL 2 WITHOUT ASYNC
// fetch("https://swapi.co/api/people")
//     .then(response => {
//         return response.json();//response.json() is asynchronous 
//     })
//     .then(response => {
//         response.results.map((res, index) => {
//             document.getElementById("character-list").innerHTML = document.getElementById("character-list").innerHTML +
//                 `<div>No.${index + 1}</br>Name : ${res.name}</br>Height: ${res.height}</br>Hair Color: ${res.hair_color}<hr></div>`
//         })
//     })
//     .catch(err => {
//         return err
//     });


//LEVEL 2 WITH ASYNC AWAIT
// const fn = async () => {
//     let response = await fetch("https://swapi.co/api/people")
//         .then(async (response) => {
//             response = await response.json()
//             return response.results;
//         })
//         .catch(err => {
//             return err
//         });
//     console.log(response)
//     response.map((res, index) => {
//         document.getElementById("character-list").innerHTML = document.getElementById("character-list").innerHTML +
//             `<div>No.${index + 1}</br>Name : ${res.name}</br>Height: ${res.height}</br>Hair Color: ${res.hair_color}<hr></div>`
//     })
// }

// fn() 