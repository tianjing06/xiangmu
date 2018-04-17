import echarts from 'echarts'

export default function drawLine (xAxis) {
  let myChart = echarts.init(document.getElementById('home-echarts'))
  let seriesData = []
  for (let i = 0; i < xAxis.length; i++) {
    seriesData.push(Math.random() * 2000)
  }
  myChart.setOption({
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxis
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '视频广告',
      type: 'line',
      stack: '总量',
      data: seriesData
    }]
  })
}
