import React from 'react'

function Button(props) {
  return (
    <a 
      href={props.link ? props.link : "#"} 
      type={props.type ? props.type : "button"}
      className={props.className ? props.className + " button" : "button button__left__right"}>
        {props.text}
    </a>
  )
}

export default Button