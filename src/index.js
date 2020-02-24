

import Drawer from './jsDrawer';

const drawer = new Drawer({
    container: document.body,
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    loop: 3000,
    size: 1,
    speed: 20,
    color: '#000000',
    toolBar: true,
});
// drawer.setColor('red');
// drawer.setSize('20');
// drawer.setState('pencil');
// setTimeout(() => {
//     drawer.animate();
// }, 5000);