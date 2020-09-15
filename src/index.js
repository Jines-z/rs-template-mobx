import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import 'slcss'
import 'slcss/css/reset/index'
import 'slcss/css/pc-scrollBar/index'
import '@/styles/antd.less'
import '@/styles/common.less'
import Pages from '@/pages'

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Pages />
            </HashRouter>
        )
    }
}

render(<App />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept()
}
