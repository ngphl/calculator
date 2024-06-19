import React from 'react'
import "./Screen.css"

interface DisplayProps {
    value:string
}

const Screen: React.FC<DisplayProps> = ({value}) => {
  return (
    <div className='screen'>{value}</div>
  )
}

export default Screen