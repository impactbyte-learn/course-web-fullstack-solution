//LEVEL 3 WITHOUT ASYNC
// fetch("http://api.github.com/users/muhammadhaekal/followers")
//     .then(response => {
//         return response.json();//response.json() is asynchronous 
//     })
//     .then(response => {
//         response.map((res, index) => {
//             document.getElementById("github-followers").innerHTML = document.getElementById("github-followers").innerHTML +
//                 `
//                 <div class="col-3 mb-3">
//                     <div class="card">
//                     <img class="card-img-top" src="${res.avatar_url}" alt="Card image cap">
//                         <div class="card-body">
//                             <h5 class="card-title">${res.login}</h5>
//                             <a href="${res.html_url}" class="btn btn-primary">Go to profile</a>
//                         </div>
//                     </div>
//                 </div>
//                 `
//         })
//     })
//     .catch(err => {
//         return err
//     });


//LEVEL 3 WITH ASYNC AWAIT
const fn = async () => {
    //get response from server and store into variable
    let response = await fetch("http://api.github.com/users/muhammadhaekal/followers")
        .then(async (response) => {
            response = await response.json()
            return response;
        })
        .catch(err => {
            return err
        });

    //map response from server
    response.map((res, index) => {
        document.getElementById("github-followers").innerHTML = document.getElementById("github-followers").innerHTML +
            `
                <div class="col-3 mb-3">
                    <div class="card">
                    <img class="card-img-top" src="${res.avatar_url}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${res.login}</h5>
                            <a href="${res.html_url}" class="btn btn-primary">Go to profile</a>
                        </div>
                    </div>
                </div>
                `
    })
}

fn() 