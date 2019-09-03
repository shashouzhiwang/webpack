export function Sidebar() {
    var dom = document.getElementById('root');
    var header = document.createElement("div");
    header.innerText = "sidbar";
    dom.append(header);
}

export function Footer() {
    var dom = document.getElementById('root');
    var header = document.createElement("div");
    header.innerText = "footer";
    dom.append(header);
}

// export const test = {
//     add: () => {
//         console.log("---");
//     }
// }

// export default Sidebar;

// commonjs
// module.exports = Sidebar;