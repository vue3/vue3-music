# vue3 music

key: vue3、music、webapp

## 技术

使用 Web Audio API 实现简单的音频可视化
使用 HTML5 API(AudioContext)实现可视化频谱效果

## 资料

audio 标签  
Audio 对象的实例 new Audio()

HTML5 中提供了[Web Audio API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API)，开发者可以通过这个 API 为音频添加特效，实现音频可视化效果。

es6 音频库  
Howler.js  
Annyang.js
...
[10 个优秀的 Javascript 的音频库](https://blog.csdn.net/u012612399/article/details/50071801)

鲸鱼音效，音乐可视化效果

FFmpeg  
Port of FFmpeg with Emscripten  
[ffmpeg.js](https://github.com/Kagami/ffmpeg.js)

协议(RTMP/HTTP(HLS))

WebGL 实现的粒子效果

three.js:  
const listener = new THREE.AudioListener();
const sound = new THREE.Audio(listener);
const loader = new THREE.AudioLoader();

this.waveform = new Uint8Array(analyser.frequencyBinCount);
this.frequency = new Uint8Array(analyser.frequencyBinCount);

WebGL（全写 Web Graphics Library）是一种 3D 绘图协议，这种绘图技术标准允许把 JavaScript 和 OpenGL ES 2.0（OpenGL for Embedded Systems，OpenGL 嵌入式版本，针对手机、游戏机等设备相对较轻量级的版本）结合在一起，通过增加 OpenGL ES 2.0 的一个 JavaScript 绑定，WebGL 可以为 HTML 5 Canvas 提供硬件 3D 加速渲染，这样 Web 开发人员就可以借助系统显卡来在浏览器里更流畅地展示 3D 场景和模型了，还能创建复杂的导航和数据视觉化。

简介：Three.js 是 WebGL 的 JavaScript 3D 库，其对 WebGL 提供的接口进行了非常好的封装，简化了很多细节，大大降低了学习成本，成为前端开发者完成 3D 绘图的得力工具。

three.js 官方文档 ：threejs.org/
three.js 中文文档 ： techbrood.com/threejs/doc…
Three.js 整体认知（附：Three.js 功能概览）

threejs 三大组件（场景-scene，相机-camera，渲染器-renderer）

gsap => TweenMax

## 参考

- [手把手教你用 Js 实现音频可视化](https://www.jianshu.com/p/7c4f58ee8972)
- [Web Audio API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API)
- [音频可视化引发的思考](https://www.jianshu.com/p/002d83bd98a3)
- [Web Audio 在音频可视化中的应用](https://segmentfault.com/a/1190000020498421)
- [利用 AudioContext 来实现网易云音乐的鲸鱼音效](https://segmentfault.com/a/1190000017090438)
- [音乐可视化-Web Audio Api 接口，AudioContext 对象](https://baijiahao.baidu.com/s?id=1624606995991147075&wfr=spider&for=pc)
- [模拟制作网易云音乐(AudioContext)](https://www.cnblogs.com/rynxiao/p/7798419.html)
- [margox/vudio.js](https://github.com/margox/vudio.js)
- [https://alex2wong.github.io/vudio.js/](https://alex2wong.github.io/vudio.js/)
- []()
