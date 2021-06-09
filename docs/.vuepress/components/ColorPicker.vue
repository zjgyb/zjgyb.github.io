<template>
  <div class="color-picker">
    <header class="title _drag-child">{{ title }}</header>
    <main class="main">
      <div class="container">
        <img src="../images/colordisk.svg" ref="myImage" style="display:none" />
        <canvas class="color-box" ref="myCanvas" width="192" height="192"></canvas>
        <div class="show-color">
          <div class="color-opacity"></div>
          <div class="color-bg" :style="showColor"></div>
          <div ref="colorBar" :style="showColor" class="color-bar"></div>
          <div ref="selectColor" class="color-round">
            <div ref="colorRadio" class="radio" @mousedown="controlColor"></div>
          </div>
        </div>
      </div>

      <div class="line">
        <div class="select-opacity" ref="selectOpacity">
          <div class="opacity-bar"></div>
          <div class="radio" ref="opacityRadio" :style="{ left: oLeft}" @mousedown="controlOpacity"></div>
        </div>
        <div ref="selectGrey" class="select-grey">
          <div ref="greyRadio" class="radio" :style="{ left: gLeft }" @mousedown="controlGrey"></div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <my-button class="btn-cancel" @click="cancel">Cancel</my-button>
      <my-button type="primary" @click="confirm">Done</my-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'color-picker',
  props: {
    rgba: String,
    title: String
  },
  data() {
    return {
      alpha: 1, // 透明度
      defaultColor: 'hsla(124, 96%, 50%, 1)', // 默认颜色
      oLeft: '0', // 透明度距离左边的距离
      gLeft: '50%' // 亮度距离左边的距离
    };
  },
  computed: {
    showColor() {
      const obj = {
        backgroundColor: this.defaultColor
      };
      return obj;
    }
  },
  mounted() {
    if (this.rgba) {
      const rgba = this.rgba;
      const alpha = +rgba.substring(
        rgba.lastIndexOf(',') + 1,
        rgba.lastIndexOf(')')
      );
      this.alpha = alpha;
      const hsl = this.rgbToHSLArr(rgba);
      this.oLeft = (100 - alpha * 100) + '%';
      this.gLeft = hsl[2];
      this.defaultColor = `hsla(${hsl.join(',')}, ${this.alpha})`;
    }
    this.drawColorPicker();
  },
  methods: {
    // 把color-picker图片复制到canvas中
    drawColorPicker() {
      const c = this.$refs.myCanvas;
      const ctx = c.getContext('2d');
      const img = this.$refs.myImage;
      img.onload = function() {
        ctx.drawImage(img, 0, 0, c.width, c.height);
      };
    },
    controlColor() {
      document.addEventListener('mousemove', this.moveColorBar);
      document.addEventListener('mouseup', this.removeColorBar);
    },
    moveColorBar(event) {
      const canvas = this.$refs.myCanvas;
      const selectColor = this.$refs.selectColor;
      const colorBar = this.$refs.colorBar;
      const centerPos = canvas.getBoundingClientRect();
      const centerX = centerPos.right - centerPos.width / 2;
      const centerY = centerPos.bottom - centerPos.height / 2;
      const scrollTop = document.documentElement.scrollTop;
      const { pageX, pageY } = event;
      const x = pageX - centerX;
      const y = pageY - scrollTop - centerY;
      const z = Math.sqrt(x ** 2 + y ** 2);
      const sinX = x / z;
      let deg = (Math.asin(sinX) / Math.PI / 2) * 360;
      if (y >= 0) {
        deg = deg >= 0 ? 180 - deg : -180 - deg;
      }
      selectColor.style.transform = `rotate(${deg.toFixed(2)}deg)`;
      colorBar.style.transform = `rotate(${deg.toFixed(2)}deg)`;
      const ctx = canvas.getContext('2d');
      const r = centerPos.width / 2;
      // 这里r - 5的原因是svg实际渲染的时候小于盒子192px大小，因此我这里减去10来消除误差
      let pixelX = ((r - 10) / z) * x + r;
      let pixelY = ((r - 10) / z) * y + r;
      const imgDatas = ctx.getImageData(pixelX, pixelY, 1, 1);
      const hsl = this.rgbToHSLArr(
        `rgb(${imgDatas.data.slice(0, 3).join(',')})`
      );
      this.defaultColor = `hsla(${hsl.join(',')}, ${this.alpha})`;
    },
    removeColorBar() {
      document.removeEventListener('mousemove', this.moveColorBar);
      document.removeEventListener('mouseup', this.removeColorBar);
    },
    getLeftPer(event, childEle, parentEle) {
      const parent = parentEle.getBoundingClientRect();
      const parentWidth = parent.width;
      const parentLeft = parent.left;
      const pageX = event.pageX;
      let left = pageX - parentLeft;
      left = Math.max(0, left);
      left = Math.min(parentWidth, left);
      const per = left / parentWidth;
      childEle.style.left = `${per * 100}%`;
      return per;
    },
    // 控制透明度
    controlOpacity() {
      document.addEventListener('mousemove', this.moveOpacityBar);
      document.addEventListener('mouseup', this.removeOpactiyBar);
    },
    moveOpacityBar(event) {
      const opacityRadio = this.$refs.opacityRadio;
      const selectOpacity = this.$refs.selectOpacity;
      const opacity = this.getLeftPer(event, opacityRadio, selectOpacity);
      const RGB = this.defaultColor.match(/\d+(%?)/g);
      this.alpha = 1 - opacity.toFixed(2);
      this.defaultColor = `hsla(${RGB.slice(0, 3).join(',')}, ${this.alpha})`;
    },
    removeOpactiyBar() {
      document.removeEventListener('mousemove', this.moveOpacityBar);
      document.removeEventListener('mouseup', this.removeOpactiyBar);
    },

    rgbToHSLArr(str) {
      const colorArr = str.match(/\d+/g);
      const r = colorArr[0] / 255;
      const g = colorArr[1] / 255;
      const b = colorArr[2] / 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const num = max - min;
      let h = 0;
      let s = 0;
      let l = 0.5 * (max + min);
      if (max !== min) {
        s = l <= 0.5 ? num / (2 * l) : num / (2 - 2 * l);
        switch (max) {
          case b:
            h = ((r - g) / num) * 60 + 240;
            break;
          case g:
            h = ((b - r) / num) * 60 + 120;
            break;
          case r:
            h = g >= b ? ((g - b) / num) * 60 : ((g - b) / num) * 60 + 360;
            break;
          default:
            break;
        }
      }
      h = Math.round(h);
      s = Math.round(s * 100) + '%';
      l = Math.round(l * 100) + '%';
      return [h, s, l];
    },

    hslaToRgba(str) {
      const colorArr = str.match(/(0\.)?\d+/g);
      let [h, s, l, opacity] = colorArr;
      h = h / 360;
      s = s / 100;
      l = l / 100;
      if (s === 0) {
        l = Math.round(l * 255);
        return `rgb(${l}, ${l}, ${l})`;
      }

      const getRGB = num => {
        let q = l >= 0.5 ? l + s - l * s : l * (1 + s);
        let p = 2 * l - q;
        if (num < 0) {
          num += 1;
        }
        if (num > 1) {
          num -= 1;
        }
        switch (true) {
          case num > 2 / 3:
            num = p;
            break;
          case num >= 1 / 2:
            num = p + (q - p) * 6 * (2 / 3 - num);
            break;
          case num >= 1 / 6:
            num = q;
            break;
          default:
            num = p + (q - p) * 6 * num;
            break;
        }
        return Math.round(num * 255);
      };
      let tR = getRGB(h + 1 / 3);
      let tG = getRGB(h);
      let tB = getRGB(h - 1 / 3);
      return `rgba(${tR}, ${tG}, ${tB}, ${opacity})`;
    },
    // 控制灰度
    controlGrey() {
      document.addEventListener('mousemove', this.moveGreyBar);
      document.addEventListener('mouseup', this.removeGreyBar);
    },
    // 灰度移动的时候控制颜色
    moveGreyBar(event) {
      const greyRadio = this.$refs.greyRadio;
      const selectGrey = this.$refs.selectGrey;
      const per = this.getLeftPer(event, greyRadio, selectGrey);
      const hsl = this.defaultColor.match(/\d+(%?)/g);
      hsl[2] = Math.ceil(per * 100) + '%';
      this.defaultColor = `hsla(${hsl.slice(0, 3).join(',')}, ${this.alpha})`;
    },
    removeGreyBar() {
      document.removeEventListener('mousemove', this.moveGreyBar);
      document.removeEventListener('mouseup', this.removeGreyBar);
    },
    cancel() {
      this.$emit('cancel');
    },
    confirm() {
      const rgba = this.hslaToRgba(this.defaultColor);
      alert('rgba颜色：' + rgba);
      this.$emit('done', rgba);
    }
  }
};
</script>
<style lang="scss" scoped>
// .color-picker {
//   width: 278px;
//   margin: 0 auto;
//   // background-color: #fff;
//   // border-radius: 8px;
//   // box-shadow: 6px 6px 24px rgba(0, 0, 0, 0.3);
// }

.title {
  height: 21px;
  padding: 18px;
  font-size: 18px;
  font-weight: 500;
  color: #707070;
  text-align: center;
  user-select: none;
}

.main {
  height: 280px;
  box-shadow: 0 1px rgba(0, 0, 0, 0.16), 0 -1px rgba(0, 0, 0, 0.16);
  padding: 0 43px;
  // border-radius: 8px;
}
.container {
  position: relative;
  height: 208px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  .color-box {
    width: 192px;
    height: 192px;
    z-index: 1;
  }
}

%radio {
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  cursor: move;
}
// 选择颜色和显示颜色的部分
.show-color {
  width: 173px;
  height: 173px;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #fff;
  // top: 26.15px;
  // left: 18.8%;

  .color-opacity {
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    left: calc(50% - 32px);
    background-image: url('../images/MaskGroup2.svg');
    background-repeat: repeat;
  }

  .color-bg {
    position: relative;
    // margin: 0 auto;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    z-index: 1;
  }

  .color-bar {
    height: 100%;
    width: 3px;
    position: absolute;
    left: calc(50% - 1.5px);
    clip-path: inset(0 0 68.5% 0);
    transform: rotate(0deg);
  }

  .color-round {
    @extend .color-bar;
    // clip-path: inset(0 0 50% 0);
    clip-path: none;

    .radio {
      @extend %radio;
      top: -6%;
      left: -6px;
    }
  }
}

// 控制透明度和灰度部分
.line {
  height: 69px;
  margin-top: 12px;
}

%select {
  position: relative;
  width: 192px;
  height: 8px;
  border: 0.1px solid #707070;
  border-radius: 4px;
}

// 透明度
.select-opacity {
  @extend %select;
  background: url('../images/MaskGroup2.svg') no-repeat 100% 100%;

  .opacity-bar {
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 1)
    );
  }

  .radio {
    @extend %radio;
    top: -4px;
    left: 0%;
  }
}

.select-grey {
  @extend %select;
  background-image: linear-gradient(
    to left,
    #fff,
    rgb(175, 175, 175),
    rgb(0, 0, 0)
  );
  margin-top: 20px;

  .radio {
    @extend %radio;
    top: -4px;
    left: calc(50% - 7.5px);
  }
}

.footer {
  height: 56px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;

  .btn-cancel {
    margin-right: 16px;
  }
}
</style>
