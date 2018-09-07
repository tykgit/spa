import React, { Component } from 'react';
import BreadcrumbCustom from '../common/BreadcrumbCustom';
export default class Gauge extends Component {
    constructor(props) {
        super(props);
        this.state={
          
        }
    }
    componentDidMount() {
        // console.log(this.props.location.state.id)
    }
    
    render() {
      return (
        <div>
          <BreadcrumbCustom paths={['首页','详情']}/>
          列表详情
        </div>
      )
    }
}