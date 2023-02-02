import API_KEY from "./api.js"; 

const BASE_URL = "https://api.github.com/users/drewrc";

//const avatar
//const followers =
//const repos = "repos_url"

function generateHTML(data) {
    console.log(data);

    const source = document.querySelector("#profile-card").innerHTML;
    const template = Handlebars.compile(source);

    const html = template(data);
    document
    .querySelector(".side-profile")
    .insertAdjacentHTML("afterbegin", html);
}


//function reposList(list) {
 //   console.log(list);

 //   const source = document.querySelector("#repos-list").innerHTML;
 //   const template = Handlebars.compile(source);

 //   const html = template(list);
 //   document
 //   .querySelector(".side-profile")
  //  .insertAdjacentHTML("afterbegin", html);
//}





fetch(`${BASE_URL}${"/repos"}`)
.then(function (response) {
    return response.json();
})
//.then((response) => response.json())
//json -> javascript object notation
.then(function (list) {
  console.log(list)
  console.log(list[.0].name)
  console.log(list[1].name)
//    reposList(list);

});

//repo info and organization 

function reposList(list) {
   // console.log(list);
  
    const source = document.querySelector("#repos-list").innerHTML;
    const template = Handlebars.compile(source);

    const html = template(list);
    document
    .querySelector(".repos-list")
    .insertAdjacentHTML("afterbegin", html);

}


//fetch(`${BASE_URL}${"/followers"}`)
//.then(function (response) {
 //   return response.json();
//})

//.then(function (followers) {
 // console.log(followers)
//});


fetch(`${BASE_URL}`)
.then(function (response) {
    return response.json();
})
//.then((response) => response.json())
//json -> javascript object notation
.then(function (user) {
  console.log(user)
    userInfo(user);
});


function userInfo(user) {
    console.log(user);

    const source = document.querySelector("#profile-card").innerHTML;
    const template = Handlebars.compile(source);

    const html = template(user);
    document
    .querySelector(".side-profile")
    .insertAdjacentHTML("afterbegin", html);

}

