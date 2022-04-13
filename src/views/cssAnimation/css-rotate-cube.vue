<template>
  <div class="cube-container">
    <div class="cube">
      <div class="face face-up">U</div>
      <div class="face face-down">D</div>
      <div class="face face-left">L</div>
      <div class="face face-right">R</div>
      <div class="face face-front">F</div>
      <div class="face face-back">B</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.cube-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
@keyframes rotate {
  0% {
    transform: rotate3d(0, 0, 0, 0);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}
.cube {
  width: 100px;
  height: 100px;
  margin: 100px;
  perspective: 1500px; //定义了观察者眼睛与投影面的距离，来制造一种空间感
  -webkit-perspective: 1500px;
  transform-style: preserve-3d; //设置该元素的所有子元素都处于 3D 空间
  -webkit-transform-style: preserve-3d;
  transform-origin: 100px 100px 100px;
  -webkit-transform-origin: 100px 100px 100px;
  animation: rotate 2s linear reverse infinite; //一直旋转的动画
}
.face {
  width: 100px;
  height: 100px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #fff;
  opacity: 0.8;
}
.face-up {
  transform: rotateX(90deg) translateZ(50px);
  -webkit-transform: rotateX(90deg) translateZ(50px);
  background-color: rgb(0, 140, 255);
}
.face-down {
  transform: rotateX(-90deg) translateZ(50px);
  -webkit-transform: rotateX(-90deg) translateZ(50px);
  background-color: orange;
}
.face-left {
  transform: rotateY(-90deg) translateZ(50px);
  -webkit-transform: rotateY(-90deg) translateZ(50px);
  background-color: yellow;
}
.face-right {
  transform: rotateY(90deg) translateZ(50px);
  -webkit-transform: rotateY(90deg) translateZ(50px);
  background-color: rgb(37, 180, 37);
}
.face-front {
  transform: translateZ(50px);
  -webkit-transform: translateZ(50px);
  background-color: red;
}
.face-back {
  transform: rotateX(180deg) translateZ(50px);
  -webkit-transform: rotateX(180deg) translateZ(50px);
  background-color: rgb(233, 106, 180);
}
</style>
