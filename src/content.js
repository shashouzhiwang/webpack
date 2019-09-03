function Content() {
    var dom = document.getElementById('root');
    var header = document.createElement("div");
    header.innerText = "Content";
    dom.append(header);
}

// export default Content;

// commonjs
module.exports = Content;