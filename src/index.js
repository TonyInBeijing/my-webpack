import _ from 'lodash';
import './style.css';

function createDomElement() {
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['Hello', 'Webpack'], ',');
    dom.className = 'hello';
    return dom;
}

document.body.append(createDomElement());