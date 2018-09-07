import React, { Component } from 'react';
import '../../style/login.less';
import { Form, Icon, Input, Button, Checkbox, message, Spin } from 'antd';
const FormItem = Form.Item;

const login = [{ // 限制登录人
    username:'admin',
    password:'admin'
},{
    username:'guest',
    password:'guest'
}];

function PatchUser(values) {  //匹配用户
    const results = login.map(function(item){
        if(values.username === item.username && values.password === item.password){
            return 1; //匹配成功
        }else{
            return 0; //匹配失败
        }
    });
    return results.includes(1);
};

class NormalLoginForm extends Component {
    state = {
        isLoding:false,
        loading: false
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if(PatchUser(values)){
                    this.setState({
                        isLoding: true,
                    });
                    this.setState({
                        loading:true
                    })
                    localStorage.setItem('mspa_user',JSON.stringify(values));
                    message.success('登录成功'); //成功信息
                    let that = this;
                    that.setState({
                        loading:false
                    })
                    setTimeout(function() { //延迟登录
                        that.props.history.push({pathname:'/app',state:values});
                    }, 2000);
                }else{
                    this.setState({
                        loading:false
                    })
                    message.error('登录失败'); //失败信息
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            this.state.isLoding?<Spin size="large" className="loading" />:
            <div className="login">
                <div className="login-form">
                    <div className="login-logo">
                        <div className="login-name">LOGIN</div>
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem style={{marginBottom:'0'}}>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                            <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading} style={{width: '100%'}}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

const Login = Form.create()(NormalLoginForm);
export default Login;