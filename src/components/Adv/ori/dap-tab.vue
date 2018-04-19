<template>
  <div class="dsp-tab">
      <ul>
          <li @click="changeActive(index)" :class="index==selected?'active':''" v-for="(x,index) in tabData">{{x.label}}</li>
          <li @click="addTab" v-if="editable">+添加创意</li>
      </ul>
      <div class="content">
            <slot></slot>
      </div>

  </div>
</template>
<script>
export default {
data(){
    return{
        selected:0
    }
},
  name:'dsaTab',
  props:{
      tabData:{
          required:true,
          type:Array
      },
      editable:{
          required:true,
          type:Boolean
      }
  },
  mounted(){
      console.log(this.$slots)
  },
  methods:{
      addTab(){
          this.$emit('edit')
      },
      changeActive(index){
          console.log(index)
          this.selected = index
      }
  },
  watch:{
    '$slots':function(n,o){
        console.log(n)
    }
  },
}
</script>
<style>
.dsp-tab{
    width: 100%;
    height: 45px;
}
.dsp-tab ul{
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
}
.dsp-tab ul li{
    margin-left: 10px
}
</style>


