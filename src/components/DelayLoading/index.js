import React from 'react'

const DelayLoading = ({ pastDelay, error }) => {
    if (error) {
        return <div>Sorry, there was a problem loading the page.</div>
    } else {
        return null
    }
}
export default DelayLoading
