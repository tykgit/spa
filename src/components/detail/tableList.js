import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeStr, changeNum } from '../../store/index/action';
import store from '../../store/store';
import BreadcrumbCustom from '../common/BreadcrumbCustom';
import { Button } from 'antd';
class Gauge extends Component {
    constructor(props) {
        super(props);
        this.state={
          
        }
    }
    componentDidMount() {
        // console.log(this.props.location.state.id)
    }

    change() {
      // 取得store里全部数据
      store.dispatch({ type:'CHANGENUM',num:1000000000 })
      store.dispatch({ type:'CHANGESTR',str:'改变了字符串' })
    }
    
    render() {
      return (
        <div>
          <BreadcrumbCustom paths={['首页','详情']}/>
          <p>{this.props.indexData.num}</p>
          <p>{this.props.indexData.str}</p>
          <Button type="primary" onClick={e=>this.change()}>点击</Button>
        </div>
      )
    }
}

export default connect(state => ({ 
  indexData: state.indexData,
}), {
  changeStr, 
  changeNum
})(Gauge);