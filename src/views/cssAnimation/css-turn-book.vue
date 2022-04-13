<template>
  <flipbook
    class="flipbook"
    :pages="pages"
    :clickToZoom="false"
    v-slot="flipbook"
  >
    <el-button-group>
      <el-button
        type="primary"
        size="mini"
        icon="el-icon-arrow-left"
        @click="flipbook.flipLeft"
        >上一页</el-button
      >
      <el-button type="primary" size="mini" @click="flipbook.flipRight"
        >下一页<i class="el-icon-arrow-right el-icon--right"></i
      ></el-button>
    </el-button-group>
    <!-- <button @click="flipbook.flipLeft">上一页</button>
    <button @click="flipbook.flipRight">下一页</button> -->
  </flipbook>
</template>

<script>
import flipbook from "flipbook-vue";
export default {
  name: "App",
  data() {
    return {
      pages: [
        null,
        require("@/assets/火影1.jpeg"),
        require("@/assets/火影2.jpeg"),
        require("@/assets/火影3.jpeg"),
        require("@/assets/火影4.jpeg"),
        require("@/assets/火影5.jpeg"),
        require("@/assets/火影6.jpeg"),
        require("@/assets/火影7.jpeg"),
        require("@/assets/火影8.jpeg")
      ]
    };
  },

  components: {
    flipbook
  }
};
</script>

<style lang="less" scoped>
.flipbook {
  width: 90vw;
  height: 90vh;
}
</style>
