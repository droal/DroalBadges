import React from 'react'

import '../styles/Badge.css'
import confLogo from '../images/logo.jpeg'

class Badge extends React.Component{

  render(){
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo"/>
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src= "https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
          <h1>Dario A<br/> Rodriguez</h1>
        </div>

        <div className="Badge__section-info">
          <h3> Front developer</h3>
          <div>@Droal</div>
        </div>

        <div className="Badge__footer">
          #DroalConf
        </div>

      </div>
    )
  }
}

export default Badge