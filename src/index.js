var Header = require("./header.js");
var Content = require("./content.js");
// var Sidebar = require("./sidebar.js");
var jpg = require("./Cat03.jpg");
import style from './index.css';
import './font/iconfont.css'
import avatar from "./createAvatar.js"
import './test.scss';
import "@babel/polyfill";
// import jpg from "./Cat03.jpg"
// import Header from "./header.js"
// import Content from "./content.js"
// import { Sidebar,  } from "./sidebar.js"
import { Sidebar, Footer } from "./sidebar";

console.log(jpg, '---s-----true----66');
var root =  document.getElementById('root');
var img =  new Image();
img.src = jpg;
img.classList.add("avatar");
root.append(img);


let test = promise()
    .then((data) => {
        console.log(data);
    });


function promise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(300);
        }, 5000)
    })
}

new Header();
new Content();
new Sidebar();
new avatar();
// new Footer();