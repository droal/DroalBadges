import React from 'react'

import '../styles/BadgeNew.css';
import header from '../images/logo.png'

import Navbar from '../components/NavBar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm';


class BadgeNew extends React.Component{

  render(){
    return(
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Dario"
                lastName="Rodriguez"
                twitter="droal"
                jobTitle="Developer"
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>

            <div className="col-6">
              <BadgeForm/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew