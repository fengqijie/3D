<template>
  <div class="">
    <canvas id="canvas2" width="800" height="600"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ctx: "",
      canvas: {
        width: 400,
        height: 400
      }
    };
  },
  methods: {
    initCanvas() {
      // 初始化canvas
      var ctx = document.getElementById("canvas2");
      ctx = ctx.getContext("2d");

      this.ctx = ctx;
      var _that = this;
      setInterval(function() {
        _that.drawTime(); // 秒针
      }, 1000);
    },
    // 画表盘的圆
    //ctx：canvas画柄，r：圆的半径，pi：旋转角度，x:开始横坐标，y：开始的纵坐标
    draw(ctx, r, x, y) {
      let pi = Math.PI;
      ctx.save(pi * 2); // 2π 是360°
      ctx.beginPath();
      ctx.arc(x, y, r, 0, pi * 2);
      ctx.stroke();
      ctx.closePath();
    },
    // 表表盘刻度
    //ctx：canvas画柄，n：刻度个数，pi：旋转角度， beg：线段开始点, fin：线段结束点,color：线段颜色
    drawHand(ctx, n, pi, beg, fin, color) {
      ctx.translate(200, 200);
      for (var i = 0; i < n; i++) {
        ctx.rotate(pi);
        ctx.beginPath();
        ctx.moveTo(beg, 0);
        ctx.lineTo(fin, 0);
        ctx.strokeStyle = color ? color : "";
        ctx.stroke();
        ctx.closePath();
      }
      ctx.restore();
      ctx.save();
    },
    // 表盘数字
    //ctx：canvas画柄，L：数字到圆心的距离，x0 & y0：圆心的位置
    drawNumber(ctx, L, x0, y0) {
      for (let i = 0; i < 12; i++) {
        let angel = -90 + i * (360 / 12); //角度
        let [x, y] = [
          x0 + Math.cos((angel * Math.PI) / 180) * L,
          y0 + Math.sin((angel * Math.PI) / 180) * L
        ];
        let num = i == 0 ? 12 : i;
        ctx.save();
        ctx.beginPath();
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(num, x, y);
        ctx.closePath();
        ctx.restore();
      }
    },
    // 时针
    drawTime() {
      let ctx = this.ctx;
      //清除所有内容
      ctx.clearRect(0, 0, 800, 600);

      this.draw(ctx, 100, 200, 200); // 表盘外侧的大圆
      this.draw(ctx, 5, 200, 200); // 表盘中间的圆心
      this.drawHand(ctx, 60, Math.PI / 30, 85, 95, "pink");
      this.drawHand(ctx, 12, Math.PI / 6, 80, 95);
      let [x0, y0] = [this.canvas.width / 2, this.canvas.height / 2]; //获取圆心x,y
      this.drawNumber(ctx, 70, x0, y0);

      ctx.save();
      ctx.translate(200, 200); // 把钟表圆心作为下次绘图的原点
      ctx.rotate(-Math.PI / 2); // 将初始位置指向12的位置
      var time = new Date();
      var hour = time.getHours();
      var min = time.getMinutes();
      var sec = time.getSeconds();
      hour = hour > 12 ? hour - 12 : hour;
      // console.log(hour + ":" + min + ":" + sec);

      // 秒针
      ctx.beginPath(); // 画笔开始
      ctx.rotate(((2 * Math.PI) / 60) * sec);
      ctx.moveTo(-20, 0);
      ctx.lineTo(75, 0);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "pink";
      ctx.stroke();
      ctx.closePath(); // 画笔结束
      ctx.restore(); // 是从绘图堆栈中弹出上一个Canvas的状态。
      ctx.save(); // 保存目前Canvas的状态。通过save()函数它会将目前Canvas的状态推到绘图堆栈中

      // 分针
      ctx.translate(200, 200);
      ctx.rotate(-Math.PI / 2);
      ctx.beginPath();
      ctx.rotate(((2 * Math.PI) / 60) * min + ((2 * Math.PI) / 60 / 60) * sec);
      ctx.moveTo(-20, 0);
      ctx.lineTo(50, 0);
      ctx.lineWidth = 3;
      ctx.strokeStyle = "orange";
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
      ctx.save();

      // 时针
      ctx.translate(200, 200);
      ctx.rotate(-Math.PI / 2);
      ctx.beginPath();
      // 2 * Math.PI/ 12 * hour 得到1小时转的角度*该时刻小时数
      // 2 * Math.PI / 60/12 * min 获取每一分钟转的角度 * 该时刻分钟数
      // 2* Math.PI/12/60/60 * sec 获取每一秒钟转的角度 * 该时刻的秒钟数

      ctx.rotate(
        ((2 * Math.PI) / 12) * hour +
          ((2 * Math.PI) / 60 / 12) * min +
          ((2 * Math.PI) / 12 / 60 / 60) * sec
      );
      ctx.moveTo(-20, 0);
      ctx.lineTo(35, 0);
      ctx.lineWidth = 4;
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initCanvas();
  }
};
</script>
