import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { message } from 'antd'
import CryptoJS from 'crypto-js'
import Cookies from 'js-cookie'
import service from '@/service'
import FormBox from '../components/FormBox'
import '../index.less'

@inject('Root')
@observer
class Login extends Component {
    constructor(props) {
        super(props)
    }

    submit = form => {
        const { Root, history } = this.props
        const { updateName, loading } = Root
        form.validateFields(async(err, values) => {
            if (!err && !loading) {
                let { userName, password } = values
                const param = {
                    userName,
                    password
                }
                const result = await service.login(param)
                if (result.success) {
                    let message = `M&${userName}&${password}`
                    let key = 'react_starter'
                    let session = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(message, key))
                    Cookies.set('JSESSIONID', session, { expires: 1, path: '/' })
                    Cookies.set('userName', userName, { expires: 1, path: '/' })
                    updateName(userName)
                    history.push('/home')
                } else {
                    message.error('账号：admin ； 密码：123456')
                }
            }
        })
    }

    render() {
        return (
            <div className='Login_wrap w100p h100p clearfix'>
                <div className='form bgc-white tc pt-50 absolute absolute--fill'>
                    <span className='font icon-react'></span>
                    <FormBox submit={this.submit} />
                </div>
            </div>
        )
    }
}

export default Login
