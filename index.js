let textField;

let Main = () => {
    textField = document.getElementById('message-field');
}

let AddNewPost = (string) => {
    if(string === undefined) {
        string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
            "            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n" +
            "            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n" +
            "            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n" +
            "            anim id est laborum.";
    }

    let wall = document.getElementById('wall');

    let barDiv = document.createElement('div');
    barDiv.className = 'bar-div';
    wall.insertAdjacentElement('beforeend', barDiv);

    let fooDiv = document.createElement('div');
    fooDiv.className = 'foo-div';
    barDiv.insertAdjacentElement('beforeend', fooDiv);

    let paragraph = document.createElement('p');
    paragraph.insertAdjacentText('beforeend', string);
    fooDiv.insertAdjacentElement('beforeend', paragraph);

    console.log(document.documentElement.scrollHeight);
}

document.addEventListener('DOMContentLoaded', Main);

document.addEventListener('keyup', (e) => {
    if (e.code === "KeyD") {
        console.log("topnav height: " + document.getElementById('topnav').clientHeight);
    } else if (e.code === 'KeyW') {
        AddNewPost();
    } else if (e.code === 'Enter') {
        e.preventDefault();
        console.log("enter");
    }
})

document.addEventListener('scroll', (e) => {
    console.log("SCROLLIN!");
});