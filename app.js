require('./instantHello'); // "./" prefix forces the file to look outside of the node modules folder
const goodbye = require('./talk/goodbye');
const talk = require('./talk');
const question = require('./talk/question');

talk.intro();
talk.hello('Bubba');
var answer = question.ask("Why is the sky blue?");
console.log(answer);
goodbye();