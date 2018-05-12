import React from 'react';

function Subscription (props) {
        return(
          <div>
              <ul className='sub-item'>
                  <li className='sub-header'>
                  {props.details.purpose}
                  </li>
                  <li>
                  {props.details.priceTag}
                  </li>
                  <li>
                  {props.details.payFreq}
                  </li>
                  </ul>
            <button onClick={()=>props.handleRemoval(props.details.id,props.details.priceTag,props.details.payFreq)}>Remove</button>
          </div>
        )
  }

export default Subscription;
