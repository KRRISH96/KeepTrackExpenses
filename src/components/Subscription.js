import React, { Component } from 'react';
// import { ReduceExpenses } from './Form';

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purpose: this.props.purpose,
      priceTag: this.props.priceTag,
      payFreq: this.props.payFreq,
    }
  }


handleDisplay = () => {
  this.setState({
    purpose: '',
    priceTag: 0,
    payFreq: '',
  });
  // ReduceExpenses(this.state.priceTag,this.state.payFreq);
}
    render() {
      const {purpose,priceTag,payFreq} = this.state;
      return (
        <div>
        { (purpose && priceTag && payFreq) &&
          <div className='subscription'>
          <div className='sub-header'>
          <p>{purpose}</p>
          <button onClick={this.handleDisplay}>Remove</button>
          </div>
          <div className='sub-body'>
          <p>Price:{priceTag}</p>
          <p>Frequency:{payFreq}</p>
          </div>
          </div>
        }
        </div>
      )
    }
  }

export default Subscription;
