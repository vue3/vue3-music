import Particle from "./particle";
import _, { merge } from "lodash";

// 默认参数
const __default_option = {
  effect: "circlewave",
  accuracy: 128,
  width: 256,
  height: 100,
  circlewave: {
    maxHeight: 20,
    minHeight: -5,
    spacing: 1,
    color: ["#fb6d6b", "#c10056", " #a50053", "#51074b"],
    shadowBlur: 2,
    shadowColor: "#caa",
    fadeSide: true,
    prettify: true,
    particle: true,
    maxParticle: 100,
    circleRadius: 128,
    showProgress: true,
  },
};

/**
 * 构造函数
 * @param {object} audioSource HTMLAudioSource/MediaStream
 * @param {object} canvasElement HTMLCanvasElement
 * @param {object} option 可选配置参数
 */
class Vudio {
  audioSrc: any;
  canvasEle: any;
  option: any;
  meta: any;
  stat: any;
  freqByteData: any;
  particles: any;
  coverImg: any;
  context2d: any;
  width: any;
  height: any;
  analyser: any;
  constructor(audioSource: any, canvasElement: any, option: any) {
    if (
      [
        "[object HTMLAudioSource]",
        "[object HTMLAudioElement]",
        "[object MediaStream]",
      ].indexOf(Object.prototype.toString.call(audioSource)) === -1
    ) {
      throw new TypeError("Invaild Audio Source");
    }
    if (
      Object.prototype.toString.call(canvasElement) !==
      "[object HTMLCanvasElement]"
    ) {
      throw new TypeError("Invaild Canvas Element");
    }

    this.audioSrc = audioSource;
    this.canvasEle = canvasElement;
    // this.option = __mergeOption(__default_option, option);
    this.option = merge(__default_option, option);
    this.meta = {};

    this.stat = 0;
    this.freqByteData = null;
    this.particles = [];
    this.coverImg = new Image();

    this.__init();
  }
  __init() {
    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext ||
      (window as any).mozAudioContext)();
    const source =
      Object.prototype.toString.call(this.audioSrc) !== "[object MediaStream]"
        ? audioContext.createMediaElementSource(this.audioSrc)
        : audioContext.createMediaStreamSource(this.audioSrc);
    const dpr = window.devicePixelRatio || 1;

    this.analyser = audioContext.createAnalyser();
    this.meta.spr = audioContext.sampleRate;

    source.connect(this.analyser);
    this.analyser.fftSize = this.option.accuracy * 2;
    this.analyser.connect(audioContext.destination);

    this.freqByteData = new Uint8Array(this.analyser.frequencyBinCount);
    this.context2d = this.canvasEle.getContext("2d");
    this.width = this.option.width;
    this.height = this.option.height;

    // ready for HD screen
    this.context2d.canvas.width = this.width * dpr;
    this.context2d.canvas.height = this.height * dpr;
    this.context2d.scale(dpr, dpr);
    this.context2d.globalCompositeOperation = "lighter";

    // prepare for coverImage
    this.coverImg.src = this.option.circlewave.coverImg || "";

    const __that = this;
    // listen click on vudioEle
    this.canvasEle.addEventListener("click", function () {
      if (__that.stat === 0) {
        __that.audioSrc.play();
        __that.dance();
      } else {
        __that.pause();
        __that.audioSrc.pause();
      }
    });
  }

  __recreateAnalyzer() {
    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext ||
      (window as any).mozAudioContext)();
    const source =
      Object.prototype.toString.call(this.audioSrc) !== "[object MediaStream]"
        ? audioContext.createMediaElementSource(this.audioSrc)
        : audioContext.createMediaStreamSource(this.audioSrc);

    this.analyser = audioContext.createAnalyser();
    this.meta.spr = audioContext.sampleRate;

    source.connect(this.analyser);
    this.analyser.fftSize = this.option.accuracy * 2;
    this.analyser.connect(audioContext.destination);
  }

  __rebuildData(freqByteData: any, horizontalAlign: any) {
    let __freqByteData;

    if (horizontalAlign === "center") {
      __freqByteData = [].concat(
        (Array.from(freqByteData) as any)
          .reverse()
          .splice(this.option.accuracy / 2, this.option.accuracy / 2),
        (Array.from(freqByteData) as any).splice(0, this.option.accuracy / 2)
      );
    } else if (horizontalAlign === "left") {
      __freqByteData = freqByteData;
    } else if (horizontalAlign === "right") {
      __freqByteData = Array.from(freqByteData).reverse();
    } else {
      __freqByteData = [].concat(
        (Array.from(freqByteData) as any)
          .reverse()
          .splice(this.option.accuracy / 2, this.option.accuracy / 2),
        (Array.from(freqByteData) as any).splice(0, this.option.accuracy / 2)
      );
    }

    return __freqByteData;
  }

  readAudioSrc(fileEle: any, vudio: any, label: any) {
    if (fileEle.files.length === 0) {
      label.innerText = "Drop Audio file here to play";
      return;
    }
    const file = fileEle.files[0];
    const fr = new FileReader();
    if (file.type.indexOf("audio") !== 0) return;
    label.innerText = file.name;
    fr.onload = function (evt) {
      vudio.audioSrc.src = evt.target!.result;
      vudio.audioSrc.play();
      vudio.dance();
    };
    fr.readAsDataURL(file);
  }

  __animate() {
    if (this.stat === 1) {
      this.analyser.getByteFrequencyData(this.freqByteData);
      typeof this.__effects()[this.option.effect] === "function" &&
        this.__effects()[this.option.effect](this.freqByteData);
      requestAnimationFrame(this.__animate.bind(this));
    }
  }

  __testFrame() {
    this.analyser.getByteFrequencyData(this.freqByteData);
    typeof this.__effects()[this.option.effect] === "function" &&
      this.__effects()[this.option.effect](this.freqByteData);
  }

  // effect functions
  __effects(): any {
    const __that = this;

    return {
      circlewave: function (freqByteData: any) {
        const __circlewaveOption = __that.option.circlewave;
        let __fadeSide = __circlewaveOption.fadeSide;
        let __prettify = __circlewaveOption.prettify;
        const __freqByteData = __that.__rebuildData(
          freqByteData,
          __circlewaveOption.horizontalAlign
        );
        const __angle = (Math.PI * 2) / __freqByteData.length;
        let __maxHeight, __width, __height, __left, __linearGradient: any;
        const circleRadius = __circlewaveOption.circleRadius;
        const __particle = __circlewaveOption.particle;
        const __maxParticle = __circlewaveOption.maxParticle;
        const __showProgress = __circlewaveOption.showProgress;
        const __progress =
          __that.audioSrc.currentTime / __that.audioSrc.duration;
        let __isStart = true;
        const __color = __circlewaveOption.color;

        if (__circlewaveOption.horizontalAlign !== "center") {
          __fadeSide = false;
          __prettify = false;
        }

        // clear canvas
        __that.context2d.clearRect(0, 0, __that.width, __that.height);
        __that.context2d.save();
        __that.context2d.lineWidth = 4;
        __that.context2d.fillStyle = "rgba(200, 200, 200, .2)";
        __that.context2d.translate(
          __that.width / 2 - 0.5,
          __that.height / 2 - 0.5
        );

        // generate and render particles if enabled
        if (__particle) {
          const deg = Math.random() * Math.PI * 2;
          __that.particles.push(
            new Particle({
              x: (circleRadius + 20) * Math.sin(deg),
              y: (circleRadius + 20) * Math.cos(deg),
              vx: 0.3 * Math.sin(deg) + Math.random() * 0.5 - 0.3,
              vy: 0.3 * Math.cos(deg) + Math.random() * 0.5 - 0.3,
              life: Math.random() * 10,
              // color: __circlewaveOption.color
            })
          );
          // should clean dead particle before render.
          if (__that.particles.length > __maxParticle) {
            __that.particles.shift();
          }
          __that.particles.forEach((dot: any) => {
            dot.update(__that.context2d);
          });
        }

        if (__circlewaveOption.shadowBlur > 0) {
          __that.context2d.shadowBlur = __circlewaveOption.shadowBlur;
          __that.context2d.shadowColor = __circlewaveOption.shadowColor;
        }

        __that.context2d.beginPath();

        // draw circlewave
        __freqByteData.forEach(function (value: any, index: number) {
          __width =
            (circleRadius * Math.PI -
              __that.option.accuracy * __circlewaveOption.spacing) /
            __that.option.accuracy;
          __left = index * (__width + __circlewaveOption.spacing);
          __circlewaveOption.spacing !== 1 &&
            (__left += __circlewaveOption.spacing / 2);

          if (__prettify) {
            if (index <= __that.option.accuracy / 2) {
              __maxHeight =
                (1 -
                  (__that.option.accuracy / 2 - 1 - index) /
                    (__that.option.accuracy / 2)) *
                __circlewaveOption.maxHeight;
            } else {
              __maxHeight =
                (1 -
                  (index - __that.option.accuracy / 2) /
                    (__that.option.accuracy / 2)) *
                __circlewaveOption.maxHeight;
            }
          } else {
            __maxHeight = __circlewaveOption.maxHeight;
          }

          __height = (value / 256) * __maxHeight;
          __height =
            __height < __circlewaveOption.minHeight
              ? __circlewaveOption.minHeight
              : __height;

          if (__color instanceof Array) {
            __linearGradient = __that.context2d.createLinearGradient(
              -circleRadius - __maxHeight,
              -circleRadius - __maxHeight,
              circleRadius + __maxHeight,
              circleRadius + __maxHeight
            );

            __color.forEach(function (color, index) {
              let effectiveColor;
              if (color instanceof Array) {
                effectiveColor = color[1];
              } else {
                effectiveColor = color;
              }
              const __pos = index / __color.length;
              __linearGradient.addColorStop(__pos, effectiveColor);
            });

            __that.context2d.strokeStyle = __linearGradient;
            __that.context2d.fillStyle = __linearGradient;
          } else {
            __that.context2d.strokeStyle = __color;
            __that.context2d.fillStyle = __color;
          }

          if (__fadeSide) {
            if (index <= __that.option.accuracy / 2) {
              __that.context2d.globalAlpha =
                1 -
                (__that.option.accuracy / 2 - 1 - index) /
                  (__that.option.accuracy / 2);
            } else {
              __that.context2d.globalAlpha =
                1 -
                (index - __that.option.accuracy / 2) /
                  (__that.option.accuracy / 2);
            }
          } else {
            __that.context2d.globalAlpha = 1;
          }

          const curAngle = __angle * index;
          const __x = Math.sin(curAngle) * (circleRadius + __height);
          const __y = Math.cos(curAngle) * (circleRadius + __height);

          // __that.context2d.rotate(__angle * index);
          if (__isStart) {
            __that.context2d.moveTo(__x, __y);
            __isStart = false;
          } else {
            __that.context2d.lineTo(__x, __y);
          }
        });
        const globalAlpha = __that.context2d.globalAlpha;
        __that.context2d.closePath();
        __that.context2d.stroke();
        __that.context2d.globalAlpha = 0.5;
        __that.context2d.fill();
        __that.context2d.globalAlpha = globalAlpha;

        if (__showProgress) {
          __that.drawProgress(__color, __progress, circleRadius);
        }
        __that.drawCover(__progress, circleRadius);

        // need to restore canvas after translate to center..
        __that.context2d.restore();
      },
    };
  }

  // 开始
  dance() {
    if (this.stat === 0 || this.analyser.context.state === "suspended") {
      this.analyser.context.resume();
      this.stat = 1;
      this.__animate();
    }
    return this;
  }

  // 暂停
  pause() {
    this.stat = 0;
    //// for saving CPU, could cancle animation.
    return this;
  }

  // 改变参数
  setOption(option: any) {
    // this.option = __mergeOption(this.option, option);
    this.option = merge(this.option, option);
  }

  drawCover(__progress: any, circleRadius: any) {
    const __that = this;
    // draw cover image
    if (__that.coverImg.width !== 0) {
      const img = __that.coverImg;
      __that.context2d.save();
      __that.context2d.beginPath();
      __that.context2d.lineWidth = 0.5;
      __that.context2d.globalCompositeOperation = "source-over";
      __that.context2d.rotate((Math.PI * 2 * __progress) / 2);
      __that.context2d.arc(
        0,
        0,
        circleRadius - 13,
        -Math.PI / 2,
        Math.PI * 2 - Math.PI / 2
      );
      __that.context2d.stroke();
      __that.context2d.clip();
      if (img.width / img.height > 1) {
        const croppedImgWidth =
          (circleRadius * 2 * (img.width - img.height)) / img.height;
        __that.context2d.drawImage(
          img,
          -circleRadius - 10 - croppedImgWidth / 2,
          -circleRadius - 10,
          (circleRadius * 2 * img.width) / img.height,
          circleRadius * 2
        );
      } else {
        __that.context2d.drawImage(
          img,
          -circleRadius - 10,
          -circleRadius - 10,
          circleRadius * 2,
          (circleRadius * 2 * img.height) / img.width
        );
      }
      __that.context2d.restore();
    }
  }

  drawProgress(__color: any, __progress: any, circleRadius: any) {
    // draw progress circular.
    const __that = this;
    __that.context2d.beginPath();
    __that.context2d.strokeStyle = __color;
    __that.context2d.lineWidth = 4;
    __that.context2d.lineCap = "round";
    __that.context2d.shadowBlur = 8;
    __that.context2d.arc(
      0,
      0,
      circleRadius - 10,
      -Math.PI / 2,
      Math.PI * 2 * __progress - Math.PI / 2
    );
    __that.context2d.stroke();
  }
}

// // private functions
// function __mergeOption(a: any, b: any) {
//   const __result: any = {};

//   Array.prototype.forEach.call(arguments, function (argument) {
//     let __prop;
//     // let __value;

//     for (__prop in argument) {
//       if (Object.prototype.hasOwnProperty.call(argument, __prop)) {
//         if (
//           Object.prototype.toString.call(argument[__prop]) === "[object Object]"
//         ) {
//           __result[__prop] = __mergeOption(__result[__prop], argument[__prop]);
//         } else {
//           __result[__prop] = argument[__prop];
//         }
//       }
//     }
//   });

//   return __result;
// }

export default Vudio;
