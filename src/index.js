//import _ from 'lodash'
import './style.css'
// import Icon from './tan.jpg'
// import Data from './data.xml'
import printMe from './print.js'
import { cube } from './math.js'
function component(){
    //var element = document.createElement("div");
    //var btn = document.createElement("button");
    //element.innerHTML = _.join(['Hello', 'webpack',"yes1"], ' ');
   // btn.innerHTML = 'Click me and check the console! ';
   // btn.onclick = printMe;
   // element.appendChild(btn);
    //element.classList.add('hello');

    //将图像添加到我们现有的div
    //var myIcon = new Image();
    //myIcon.src = Icon;

   // element.appendChild(myIcon);

    //console.log(Data);
    var element = document.createAttribute.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    return element;
}
//document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log('Accepting the updated printMe module!');
       // printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}