var jpg = require("./Cat03.jpg");
function avatar() {
    var root =  document.getElementById('root');
    var img =  new Image();
    img.src = jpg;
    img.classList.add("avatar");
    root.append(img);
}

export default avatar;