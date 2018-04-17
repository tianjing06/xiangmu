<template>
  <div>
    <el-row>
      <el-col :span='12'><h3>整体情况</h3></el-col>
        <el-col :span='12'>
          <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
          </el-date-picker>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="6"><el-card shadow="always" class="grid-content">曝光量(次)</el-card></el-col>
        <el-col :span="6"><el-card shadow="always" class="grid-content">点击量(次)</el-card></el-col>
        <el-col :span="6"><el-card shadow="always" class="grid-content">点击量(次)</el-card></el-col>
        <el-col :span="6"><el-card shadow="always" class="grid-content">点击量(次)</el-card></el-col>
    </el-row>
    <el-row :span="12">
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </el-row>
    <el-row>
      <div ref="graph" class="graph"></div>
    </el-row>
  </div>
</template>
<script>
import Echart, { init } from "echarts";
export default {
  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      value1: "",
      value2: "",
      dataX: ['2018/1', '2018/2', '2018/3', '2018/4', '2018/5', '2018/6', '2018/7'],
      seriesData: [966, 993, 385, 113, 181, 696, 1052]
    };
  },
  mounted() {
    let graphInstance = init(this.$refs.graph);
    let option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line"
        }
      ]
    };
    graphInstance.setOption(option);
    this.drawLine()
  },
   methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: this.dataX
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.seriesData,
            type: 'line'
          }
        ]
      })
      window.onresize = function () {
        myChart.resize()
      }
    }
  },
  watch: {
    seriesData (newD, oldD) {
      this.drawLine()
    },
    month2 (nextYM, old) {
      let prevYM = this.month1 // 上一次
      // nextYM  下一次
      home({
        startTime: prevYM,
        endTime: nextYM,
        dimLeft: 6878,
        dimRight: 8102
      }).then(res => {
        this.seriesData = res.data.dataY1
      })
      
      let prevY = prevYM.split('/')[0]
      let nextY = nextYM.split('/')[0]
      let prevM = prevYM.split('/')[1]*1
      let nextM = nextYM.split('/')[1]*1
      let newarr = []
      let len = (nextY-prevY)*12+(nextM - prevM)
      let str = ''
      let num = 0
      for (let i = 0; i <= len; i++) {
          if (prevM+i > 12) {
            str = (prevY*1+Math.floor(num/12)*1+1)+'/'+((prevM+i)%12==0?12:(prevM+i)%12)
            ++num
          } else {
            str = prevY+'/'+(prevM+i)
          }
        newarr.push(str)
      }
      this.dataX = newarr
      this.drawLine()
    }
  },
};
</script>
<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.grid-content {
  width: 240px;
  height: 79px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
}
.graph{
  width: 100%;
  height: 300px;
}
</style>


