import React, { Component } from 'react'; 
import BreadcrumbCustom from '../common/BreadcrumbCustom';
import { Card, Avatar, Row, Col, Table, Icon } from 'antd';
import './index.less';
import CountUp from 'react-countup';
// 饼图
import Pie from './pie'
// 柱状图
import Line from './line'
// gague
import Gauge from './gauge'
//panel
import Panel from './panel'
// timeline
import Timeline from './timeline'
const { Meta } = Card;

export default class MIndex extends Component {
    constructor(props) {
        super(props);
        this.state={
            data : [{
                key: '1',
                img: <Avatar style={{ backgroundColor: '#f56a00' }}>Z</Avatar>,
                name: 'tangyongkang',
                state: <Icon type="caret-up" style={{ color: 'red' }}/>,
                written: '0000000000000000',
                mail: '',
                time: '2015-03-01 17:55:21',
            }, {
                key: '2',
                img: <Avatar style={{ backgroundColor: '#7265e6' }}>H</Avatar>,
                name: 'Jim Green',
                state: <Icon type="caret-up" style={{ color: 'red' }}/>,
                written: '0000000000000000',
                mail: '',
                time: '2015-06-03 18:22:13',
            },{
                key: '3',
                img: <Avatar style={{ backgroundColor: '#ffbf00' }}>A</Avatar>,
                name: 'Joe Black',
                state: <Icon type="caret-down" style={{ color: 'gray' }}/>,
                written: '0000000000000000',
                mail:'',
                time: '2016-01-02 23:11:01',
            },{
                key: '4',
                img: <Avatar style={{ backgroundColor: '#00a2ae' }}>O</Avatar>,
                name: 'Jim Red',
                state:<Icon type="caret-up" style={{ color: 'red' }}/>,
                written: '0000000000000000',
                mail: '',
                time: '2016-12-21 13:03:59',
            },{
                key: '5',
                img: <Avatar style={{ backgroundColor: '#48ae6a' }}>Y</Avatar>,
                name: 'Jake White',
                state: <Icon type="caret-down" style={{ color: 'gray' }}/>,
                written: '0000000000000000',
                mail: '',
                time: '2017-03-06 10:19:07',
            },{
                key: '6',
                img: <Avatar style={{ backgroundColor: '#ae007c' }}>U</Avatar>,
                name: 'Smith White',
                state: <Icon type="caret-up" style={{ color: 'red' }}/>,
                written: '0000000000000000',
                mail: '',
                time: '2017-11-03 13:43:33',
            }],
            columns: [
                { title: '头像', width: 100, dataIndex: 'img', key: 'img', fixed: 'left' },
                { title: '姓名', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
                { title: '状态', width: 80, dataIndex: 'state', key: 'state', fixed: 'left' },
                { title: '留言', width: '62%', dataIndex: 'written', key: 'written', className:'column-written' },
                { title: '邮箱', width: 200,dataIndex: 'mail', key: 'mail', fixed: 'right' },
                { title: '时间', width: 200,dataIndex: 'time', key: 'time', fixed: 'right' },
                { title: '操作', width: 200,dataIndex: 'detail', key: 'detail', fixed: 'right' ,render: (text, record) => (
                    <span>
                      <a href="javascript:;" onClick={e=>this.tableDetail()}>详情</a>
                    </span>
                  ),}
            ]
        }
    }
    CountUp(){
        let imgSrc = ["mail","chat","cart","heart"];
        let imgName = ["Mails","Dialogue","Carts","Collection"];
        let count = ["1379","768","192","413"];
        let cu = imgSrc.map(function(item,index){
            return(
                <Col md={6} key={item}>
                    <Card style={{cursor:'pointer', marginBottom:16}}
                          actions={[<Icon type="info-circle-o" />, <Icon type="ellipsis" />]}>
                        <Meta
                            style={{fontSize:22}}
                            avatar={<img src={require('../../style/img/'+item+'.png')} alt=""/>}
                            title={imgName[index]}
                            description={<CountUp start={0} end={count[index]} duration={2.75}/>}
                        />
                    </Card>
                </Col>
            )
        });
        return cu;
    }
    tableDetail() {
        this.props.history.push({pathname:'/app/detail/dateilList',state:{
            id:999999
        }})
    }
    render() {
        return (
            <div>
                <BreadcrumbCustom paths={['首页']}/>
                <div className='mindex'>
                    <Row gutter={6}>
                        <Col md={6}>
                            <Card
                                style={{marginBottom:16}}
                                bodyStyle={{padding: 0,height:'300px',overflow:'hidden'}}>
                                <Pie/>
                            </Card>
                        </Col>
                        <Col md={10}>
                            <Card
                                style={{marginBottom:16}}
                                bodyStyle={{padding: 0,height:'300px',overflow:'hidden'}}>
                                <Line/>
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Card
                                style={{marginBottom:16}}
                                bodyStyle={{padding: 0,height:'300px',overflow:'hidden'}}>
                                <Gauge/>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <Card
                                style={{marginBottom:16}}
                            >
                                <div style={{marginBottom:16}}>
                                    <h3>panel</h3>
                                </div>
                                <Panel/>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <Card
                                style={{marginBottom:16}}
                            >
                                <div style={{marginBottom:16}}>
                                    <h3>Timeline</h3>
                                </div>
                                <Timeline/>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <Card>
                                <div style={{marginBottom:16}}>
                                    <h3>列表</h3>
                                </div>
                                <Table
                                    columns={this.state.columns}
                                    dataSource={this.state.data}
                                    scroll={{ x: '110%' }}
                                    pagination = {true}
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
   