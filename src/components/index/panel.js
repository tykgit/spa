import React, { Component } from 'react';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;
export default class Panels extends Component {
    constructor(props) {
        super(props);
        this.state={
          text:'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.'
        }
    }
    componentDidMount() {
        
    }
    callback(key) {
      console.log(key)
    }
    render() {
      return (
        <Collapse onChange={e=>this.callback(e)}>
        <Panel header="This is panel header 1" key="1">
          <Collapse defaultActiveKey="1">
            <Panel header="This is panel nest panel" key="1">
              <p>{this.state.text}</p>
            </Panel>
          </Collapse>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{this.state.text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{this.state.text}</p>
        </Panel>
      </Collapse>
      )
    }
}