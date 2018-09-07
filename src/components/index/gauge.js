import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
export default class Gauge extends Component {
    constructor(props) {
        super(props);
        this.state={
          
        }
    }
    componentDidMount() {
        
    }
    // 配置饼图参数
    getGaugeOption(){
      let option = {
        tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          feature: {
              restore: {},
              saveAsImage: {}
          }
      },
      series: [
          {
              name: '业务指标',
              type: 'gauge',
              detail: {formatter:'{value}%'},
              data: [{value: 50, name: '完成率'}]
          }
      ]
      }
      return option
   }
    render() {
      return (
        <ReactEcharts
          option={this.getGaugeOption()}
        />
      )
    }
}