import API_KEY from "./api.js";

const BASE_URL = "https://api.github.com/users/drewrc";
const ORG_URL = "https://api.github.com/users/drewrc/orgs"

//const avatar
//const followers =
//const repos = "repos_url"

function generateHTML(data) {
  console.log(data.created_at);

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

fetch(`${BASE_URL}/repos`)
  .then(function (response) {
    return response.json();
  })
  .then(function (list) {
    reposList(list);
    console.log(list);
  });

//repo info and organization

function reposList(list) {
  // console.log(list);

  const source = document.querySelector("#repos-list").innerHTML;
  const template = Handlebars.compile(source);

  const html = template({ repos: list });
  document.querySelector(".repo-container").insertAdjacentHTML("afterbegin", html);

  
}

fetch(`${ORG_URL}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (orgs) {
    organization(orgs);
    console.log(orgs)
  });

//repo info and organization

function organization(orgs) {
 console.log(orgs);

  const source = document.querySelector("#orgs-list").innerHTML;
  const template = Handlebars.compile(source);

  const html = template({ organizations: orgs });
  document.querySelector(".org-icons").insertAdjacentHTML("afterbegin", html);
}



fetch(`${BASE_URL}`)
  .then(function (response) {
    return response.json();
  })
  //.then((response) => response.json())
  //json -> javascript object notation
  .then(function (user) {
    console.log(user);
    userInfo(user);
  });

 // const created = user.created_at
 // console.log(created)


 function userInfo(user) {
  console.log(user);

  const source = document.querySelector("#profile-card").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(user);
  document
    .querySelector(".side-profile")
    .insertAdjacentHTML("afterbegin", html);
}
