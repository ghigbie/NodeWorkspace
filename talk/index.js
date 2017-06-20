const filename = "index.js"

var hello = (name) => {
    console.log(`Hello ${name}!`);
};

var intro = () => {
    console.log(`I'm a node file called ${filename}.`);  
};

module.exports = {
    hello,
    intro
};