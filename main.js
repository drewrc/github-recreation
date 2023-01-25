const BASE_URL = "https://api.github.com/users/drewrc";

//const avatar
//const followers =


function generateHTML(data) {
    console.log(data);

    const source = document.querySelector("#profile-card").innerHTML;
    const template = Handlebars.compile(source);

    const html = template(data);
    document
    .querySelector(".side-profile")
    .insertAdjacentHTML("afterbegin", html);
}

fetch(`${BASE_URL}`)
.then(function (response) {
    return response.json();
})

//.then((response) => response.json())
//json -> javascript object notation

.then(function (data) {
  console.log(data)
    generateHTML(data);
});

//repo info and organization 

