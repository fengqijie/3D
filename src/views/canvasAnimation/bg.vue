<template>
  <div class="bg">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="40"
      shapeType="star"
      :particleSize="4"
      linesColor="#FFFFFF"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="cash"
    >
    </vue-particles>
    <div class="text">
      <canvas id="content"></canvas>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueParticles from "vue-particles";
Vue.use(VueParticles);

export default {
  data() {
    return {
      ctx: ""
    };
  },
  mounted() {
    this.initContent();
  },
  methods: {
    initContent() {
      // 初始化canvas
      var ctx = document.getElementById("content");
      ctx = ctx.getContext("2d");
      // this.ctx = ctx;
      ctx.save();
      ctx.beginPath();
      ctx.font = "40px 娃娃体-简";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineWidth = 3;
      ctx.strokeStyle = "white";
      ctx.strokeText("canvas 入门", 130, 40);
      ctx.fillStyle = "pink"; //设置填充颜色
      ctx.fillText("canvas 入门", 130, 40);
      ctx.closePath();
      ctx.restore();
    }
  }
};
</script>

<style lang="less" scoped>
.cash {
  position: fixed;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(to bottom, #dcdcdc 0%, palevioletred 100%);
}
.text {
  position: absolute;
  z-index: 100;
}
</style>
