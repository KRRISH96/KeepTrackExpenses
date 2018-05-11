import React, { Component } from 'react';

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.details,
      handleRemoval: this.props.handleRemoval
    }
  }

    render() {
      const {details} = this.state;
        return(
          <div>
          {details.map((detail,index) => {
            return (
              <ul  key={index} className='sub-item'>
                  <li className='sub-header'>
                  {details[index]}
                  </li>
                  </ul>
                )
            })}
            <button onClick={()=>this.state.handleRemoval(details[0])}>Remove</button>
          </div>
        )
    }
  }

export default Subscription;
