import React from 'react'

const Message = (props) => {

  return (
    <>
    <div>
        {props.message && <div className={`text-${props.message.color}-500`}>
        <span>{props.message.message}</span>
        </div>}
    </div>
    </>
    
  )
}

export default Message
