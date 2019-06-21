import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Tooltip } from 'antd'
import Cookies from 'js-cookie'
import Loading from '@/components/Loading'
import Router from '@/router'

@withRouter
@inject('Root')
@observer
class Right extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        let { userInfo, updateName } = this.props.Root
        if (userInfo.name == '') {
            updateName(Cookies.get('userName'))
        }
    }

    titleNode = () => {
        return (
            <span
                style={{ fontSize: '14px', cursor: 'pointer' }}
                onClick={this.logout}
            >
                退出
            </span>
        )
    }

    logout = () => {
        this.props.logout()
    }

    render() {
        const { name } = this.props.Root.userInfo
        return (
            <div className='right'>
                <div className='header clear clearFix'>
                    <div className='user'>
                        <span className='font icon-touxiang'></span>
                        <Tooltip title={this.titleNode()}>
                            <span className='name'>{name}</span>
                        </Tooltip>
                    </div>
                </div>
                <div className='routeWrap'>
                    <Loading>
                        <Router />
                    </Loading>
                </div>
            </div>
        )
    }
}

export default Right
