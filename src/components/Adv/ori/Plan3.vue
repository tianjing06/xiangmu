<template>
  <div>
    <div class="content">
        <h1>广告创意</h1>
        <p>落地页</p>
        <p>
            <span>着陆页地址</span>
            <input type="text">
            <span>预览</span>
        </p>
        <p>上传创意</p>
        <p class="blue" @click="open"><b>+</b><span>添加创意</span></p>
        <button>提交</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
 
    };
  },
  methods: {
    open() {
      const h = this.$createElement;
      this.$msgbox({
        title: "消息",
        message: h("p", null, [
          h("span", null, "单图 "),
          h("span", { style: "margin: 10px" }, "多图")
        ])
      });
    },
    addImage() {
      this.active = false;
      this.dataArr.push("单");
      this.dialog = "dialognone";
    }
  }
};
</script>
<style scoped>
h1 {
  width: 100%;
  height: 45px;
  font-size: 20px;
  line-height: 45px;
}
.content {
  margin-top: 30px;
}
.content p {
  width: 100%;
  height: 45px;
  line-height: 45px;
}
button {
  width: 166px;
  height: 52px;
  background: #e8e8e8;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-top: 20px;
}
.blue {
  color: skyblue;
}
</style>


