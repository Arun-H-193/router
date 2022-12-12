import React from 'react'
import Radium from 'radium'

function Radium1 (){
    const style={
        ':hover':{
            backgroundColor:'blue',
            color:'black',
        }
    }
  return (
    <div>Radium
        <button style={style}>example of radium</button>
    </div>
  )
}
export default Radium(Radium1);
