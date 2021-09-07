import React from 'react';
import  '../containers/Card.css'; 

const Card = ({ name, email, id }) =>{
    return(
        <div className ="Card" >
      <img src={`https://robohash.org/${id}?200*200`} alt="v"/>

          <div>
            <h2> {name}</h2>
            <p> {email}</p>
          </div>  
        </div>
    )
}

 export default Card;
