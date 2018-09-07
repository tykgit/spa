import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';
import '../../style/index.less';
import routerMap from '../../routes/routerMap'
import SiderCustom from './SiderCustom';
import HeaderCustom from './HeaderCustom';
import noMatch from './404';
const {Content, Footer} = Layout;

export default class App extends Component {
    state = {
        collapsed: localStorage.getItem("mspa_SiderCollapsed") === "true",
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        }, function () {
            localStorage.setItem("mspa_SiderCollapsed", this.state.collapsed);
        });
    };

    componentDidMount() {
        //保存用户左侧收缩还是展示
        if (localStorage.getItem("mspa_SiderCollapsed") === null) {
            localStorage.setItem("mspa_SiderCollapsed", false);
        }
    }

    render() {
        const {collapsed} = this.state;
        const {location} = this.props;
        let name;
        if (localStorage.getItem("mspa_user") === null) {
            return <Redirect to="/login"/>
        } else {
            name = location.state === undefined ? JSON.parse(localStorage.getItem("mspa_user")).username : location.state.username;
        }

        return (
            <Layout className="ant-layout-has-sider" style={{height: '100%'}}>
                <SiderCustom collapsed={collapsed} path={location.pathname}/>
                <Layout>
                    <HeaderCustom collapsed={collapsed} toggle={this.toggle} username={name}/>
                    <Content style={{margin: '0 16px'}}>
                        <Switch>
                            {
                                routerMap.map((item, index) => {
                                     return <Route exact key={index} path={item.path} component={item.component}/>
                                })
                            }
                            <Route component={noMatch} />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Tangyongkang ©2017-{new Date().getFullYear()} Created by tyk
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
