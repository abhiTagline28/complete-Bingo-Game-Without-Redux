import React from 'react'

const ButtonComponent = (props) => {
    return (
        <>
            <div style={{ marginTop: '10px' }} className="text-center">
                <button className="btn btn-primary" onClick={props.handleClick}>{props.label}</button>
            </div>
        </>
    )
}

export default ButtonComponent
