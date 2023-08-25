console.log("working");

const everyBody = document.querySelector("body");
let div = document.createElement("div");

div.className = "go-back";
document.body.appendChild(div);

let backLink = document.createElement("a");
div.appendChild(backLink);
backLink.setAttribute("href", "../index.html");

/* <i class="fas fa-arrow-left"></i> */
let icon = document.createElement("i");
icon.className = "fas fa-arrow-left";
backLink.appendChild(icon);

console.log(everyBody);
console.log(div.innerHTML);

/*styles*/

everyBody.style.position = "relative";
div.style.position = "fixed";
backLink.style.width = "50px";
backLink.style.height = "50px";
backLink.style.background = "rgba(255,255,255,0.5)";
backLink.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
backLink.style.borderRadius = "50%";
backLink.style.display = "flex";
backLink.style.justifyContent = "center";
backLink.style.alignItems = "center";
div.style.top = "20px";
div.style.left = "20px";
backLink.style.color = "#666";
backLink.style.textDecoration = "none";
