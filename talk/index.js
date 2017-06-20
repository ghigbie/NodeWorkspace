let hello = (name) => {
    console.log(`Hello ${name}`);
};

let intro = () => {
    console.log(`I'm a node file called index.js`);  
};

module.exports = {
    hello,
    intro
};