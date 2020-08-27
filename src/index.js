import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

AOS.init();

function component() {
    var element = document.createElement('div');
    element.innerHTML = "hello world";
    return element;
}

