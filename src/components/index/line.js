import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
export default class Line extends Component {
    constructor(props) {
        super(props);
        this.state={
          lineDate: ['网购', '线下', '其他']
        }
    }
    componentDidMount() {
        
    }
    // 配置柱状图参数
    getLineOption(){
      let option = {
        backgroundColor: "#fff",
        color: ['rgb(216, 151, 235)', 'rgb(246, 152, 153)', 'rgb(100, 234, 145)'],
        title: [{
            text: '账单/亿',
            left: '2%',
            top: '6%',
            textStyle: {
                fontWeight:'normal',
            },
        }],
        tooltip: {
            trigger: 'axis'
        },
        grid:{
            left:'6%',
            width:'90%',
        },
        legend: {
            //x: 300,
            top: '7%',
            right: '3%',
            textStyle: {
                color: 'gray',
            },
            data: this.state.lineDate
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine:{
                lineStyle:{
                    color:'lightgray',
                },
            },
            axisLabel:{
                color:'gray'
            },
            data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017']
        },
        yAxis: {
            min: 0,
            max: 100,
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'lightgray',
                },
            },
            axisLabel:{
                color:'gray'
            },
        },
        series: [{
            name: '网购',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [10, 40, 32, 20, 80, 90, 97]
        }, {
            name: '线下',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [70, 50, 50, 87, 90, 80, 70]
        },{
            name: '其他',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [30, 40, 10, 20, 33, 66, 54]
        }]
    };
    return option;
   }
    render() {
      return (
        <ReactEcharts
          option={this.getLineOption()}
        />
      )
    }
}