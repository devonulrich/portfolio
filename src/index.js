import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function component() {
    var element = document.createElement('div');
    element.innerHTML = "hello world";
    return element;
}

