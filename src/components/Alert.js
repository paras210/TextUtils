import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:'50px'}}>
            {props.alertInfo && <div className={`alert alert-${props.alertInfo.type} alert-dismissible fade show`} role="alert">
                {props.alertInfo.msg}.
            </div>}
        </div>
    )
}
