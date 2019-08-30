import React from 'react'
import { Spin, Icon } from 'antd'

const Loading = ({ children, loading }) => {
    return (
        <Spin
            tip='LOADING'
            wrapperClassName='h100p'
            spinning={loading}
            indicator={<Icon type='loading' style={{ fontSize: 24 }} spin />}
        >
            {children}
        </Spin>
    )
}

export default Loading
