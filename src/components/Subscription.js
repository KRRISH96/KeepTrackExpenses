import React from 'react';

function Subscription (props) {
        return(
          <div className='subDetails'>
                <div className='subHead'>
                  <h4>
                    {props.details.purpose}
                  </h4>
                  <button onClick={()=>props.handleRemoval(props.details.id,props.details.priceTag,props.details.payFreq)}>Remove</button>
                  </div>
                  <p>
                    Price: <span>{props.details.priceTag}$</span>
                  </p>
                  <p>
                    Frequency: <span>{props.details.payFreq}</span>
                  </p>
          </div>
        )
  }

export default Subscription;
