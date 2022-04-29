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
    <div class="form_div">
      <div>
        <el-input
          placeholder="请输入用户"
          prefix-icon="el-icon-s-custom"
          v-model="username"
          class="input_common"
        >
        </el-input>
      </div>
      <div>
        <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model="password"
          class="input_common"
        >
        </el-input>
      </div>
      <div>
        <el-button type="primary" round>登 录</el-button>
      </div>
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
      ctx: "",
      username: "",
      password: ""
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

<style lang="less">
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
  width: 270px;
  height: 82px;
}
.form_div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-80px, -81px);
}
.input_common {
  width: 320px;
  margin-bottom: 20px;
  .el-input__inner {
    border-radius: 20px;
    padding-left: 36px;
  }
  .el-input__prefix {
    font-size: 18px;
    left: 10px;
  }
  .el-input.is-active .el-input__inner,
  .el-input__inner:focus {
    border-color: #ff409bb8;
  }
}
.el-button--primary {
  font-size: 16px;
  width: 320px;
  background-color: #ff409b61;
  border-color: #ff409b61;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background-color: #ff409bb8;
  border-color: #ff409bb8;
}
</style>
