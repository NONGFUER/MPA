import _ from 'lodash'
// import './style.css'
// import Icon from './tan.jpg'
// import Data from './data.xml'
import printMe from './print.js'

function component(){
    var element = document.createElement("div");
    var btn = document.createElement("button");
    element.innerHTML = _.join(['Hello', 'webpack',"yes"], ' ');
    btn.innerHTML = 'Click me and check the console! ';
    btn.onclick = printMe;
    element.appendChild(btn);
    //element.classList.add('hello');

    //将图像添加到我们现有的div
    //var myIcon = new Image();
    //myIcon.src = Icon;

   // element.appendChild(myIcon);

    //console.log(Data);
    return element;
}
document.body.appendChild(component());