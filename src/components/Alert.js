import React from 'react'

function Alert(props) {
    const capatalize = (word) => {
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
        props.alert && <div style={{position:'absolute',bottom:'0'}} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {capatalize(props.alert.type)} | {props.alert.msg}
        </div>
  )
}

export default Alert