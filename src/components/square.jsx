import React from 'react'

const Sqaure = (props) => {
  return (
    <div 
      onClick={props.onClick}

      style = {{
      border : "1px solid",
      height : "100px",
      width : "100%",
      display: 'flex',
      justifyContent : 'center',
      alignItems : 'center'

    }}>
      <h4>{props.value}</h4>
    </div>
  )
}

export default Sqaure
