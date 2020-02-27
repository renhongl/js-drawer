
# js-drawer

Javascript drawer tool, use to draw something and animate it.

If you like it, **[STAR](https://github.com/renhongl/js-drawer)** it please :)

Online demo: [Demo](https://renhongl.github.io/source/drawer/)

Source code: [Code](https://github.com/renhongl/js-drawer)

<!--more-->

## Installation

* `npm install --save js-drawer`

## Example Code

```js
import Drawer from 'js-drawer';

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

drawer.setColor('red');
drawer.setSize('20');
drawer.setState('pencil');
setTimeout(() => {
    drawer.animate();
}, 5000);

```






## Drawer configuration

Name|Type|Desc|Default|Required
---|---|---|---|---
container|DOM Object|DOM element|body|false
width|Number|Canvas width|400|false
height|Number|Canvas height|400|false
size|Number|Stroke size|1|false
color|String|Stroke color|#000000|false
speed|Number|Animation speed|20|false
loop|Number|Animation next loop waiting time|3000|false


## Drawer API

Name|Type|Desc|Parameter|Param Example
---|---|---|---|---|---|---
setColor|Function|Set stroke color before draw next line|color\<String\>|#fff
setSize|Function|Set stroke size before draw next line|size\<Number\>|20
setState|Function|Set stroke state before draw next line|state\<String\>|pen / pencil / rect
animate|Function|Make animation use exsiting graph||



## License

MIT
