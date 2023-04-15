import React from 'react'

function Alert(props) {
  return (
      <div class="alert alert-primary" role="alert">
      <strong>{props.alert}</strong>
    </div>
  )
}

export default Alert
