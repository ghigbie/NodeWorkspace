require('./instantHello'); // "./" prefix forces the file to look outside of the node modules folder
const goodbye = require('./talk/goodbye');
const talk = require('./talk');

talk.intro();
talk.hello('Bubba');
goodbye();