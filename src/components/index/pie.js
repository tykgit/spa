import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
export default class Pie extends Component {
    constructor(props) {
        super(props);
        this.state={
          pieDate:['北海', '南宁','桂林','柳州']
        }
    }
    componentDidMount() {
        
    }
    // 配置饼图参数
    getPieOption(){
      let option = {
       title: {
           text: '天气情况统计',
           // subtext: '虚构数据',
           left: 'center'
       },
       tooltip : {
           trigger: 'item',
           formatter: "{b} : {c} ({d}%)"
       },
       legend: {
           // orient: 'vertical',
           // top: 'middle',
           bottom: 10,
           left: 'center',
           data: this.state.pieDate
       },
       series : [
           {
               type: 'pie',
               radius : '65%',
               center: ['50%', '50%'],
               selectedMode: 'single',
               data:[
                   {
                       label: {
                           normal: {
                               backgroundColor: '#eee',
                               borderColor: '#777',
                               borderWidth: 1,
                               borderRadius: 4,
                               rich: {
                                   title: {
                                       color: '#eee',
                                       align: 'center'
                                   },
                                   abg: {
                                       backgroundColor: '#333',
                                       width: '100%',
                                       align: 'right',
                                       height: 25,
                                       borderRadius: [4, 4, 0, 0]
                                   },
                                   Sunny: {
                                       height: 30,
                                       align: 'left',
                                       
                                   },
                                   Cloudy: {
                                       height: 30,
                                       align: 'left',
                                       
                                   },
                                   Showers: {
                                       height: 30,
                                       align: 'left',
                                       
                                   },
                                   weatherHead: {
                                       color: '#333',
                                       height: 24,
                                       align: 'left'
                                   },
                                   hr: {
                                       borderColor: '#777',
                                       width: '100%',
                                       borderWidth: 0.5,
                                       height: 0
                                   },
                                   value: {
                                       width: 20,
                                       padding: [0, 20, 0, 30],
                                       align: 'left'
                                   },
                                   valueHead: {
                                       color: '#333',
                                       width: 20,
                                       padding: [0, 20, 0, 30],
                                       align: 'center'
                                   },
                                   rate: {
                                       width: 40,
                                       align: 'right',
                                       padding: [0, 10, 0, 0]
                                   },
                                   rateHead: {
                                       color: '#333',
                                       width: 40,
                                       align: 'center',
                                       padding: [0, 10, 0, 0]
                                   }
                               }
                           }
                       }
                   },
                   {value:535, name: '北海'},
                   {value:510, name: '南宁'},
                   {value:634, name: '桂林'},
                   {value:735, name: '柳州'}
               ],
               itemStyle: {
                   emphasis: {
                       shadowBlur: 10,
                       shadowOffsetX: 0,
                       shadowColor: 'rgba(0, 0, 0, 0.5)'
                   }
               }
           }
       ]
      }
      return option
   }
    render() {
      return (
        <ReactEcharts
          option={this.getPieOption()}
        />
      )
    }
}