import React, { Component } from 'react';
import Subscription from './Subscription';
import { MonthlyExpenses } from './Expenses';
const items = [];
// let expenses = 0;


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purpose: '',
      priceTag: 0,
      payFreq: '',
      toDisplay: false,
      expenses: 0
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formInput = this.state;
      items.push(formInput);
    this.setState({
      toDisplay: true,
      expenses: formInput.expenses+AddExpenses(formInput.priceTag,formInput.payFreq)
    });
  }

  render() {
    const frequency = ['Yearly','Monthly','Twice a Month','Weekly','Daily'];
    const {purpose, priceTag, payFreq,toDisplay,expenses} = this.state;
    let totalExpenses = expenses.toFixed(2);
    return (
      <div>
          <div>
            {toDisplay && <p>Your Expenses are :{totalExpenses}</p>}
          </div>
        <h2>Add an Expense</h2>
        <form  onSubmit={this.handleSubmit}>
          <label
            htmlFor='name'>
            Payment Name/Website
          </label>
          <input
            id='name'
            type='text'
            placeholder='Ex: Amazon Prime'
            name='purpose'
            value={purpose}
            onChange={this.handleChange}
            required/>

          <label
            htmlFor='price'>
            Price
          </label>
          <input
            id='price'
            type='number'
            placeholder='Ex: 10'
            step='0.01'
            min='0'
            max='99999'
            name='priceTag'
            onChange={this.handleChange}
            required />

          <label
            htmlFor='payment-freq'>
            Frequency of Payment
          </label>
          <select
            id='payment-freq'
            name='payFreq'
            onChange={this.handleChange}
            required>
            <option key='default' value={null} hidden>Select Frequency</option>
              {frequency.map((item) => {
                return (
                  <option key={item} value={item}>{item}</option>
                )
              })}
          </select>
          <button type='submit' disabled={!(purpose && priceTag && payFreq)}>Add</button>
        </form>
        <h2>Subscriptions</h2>
        <div>
          <ul className='sub-item'>
            {toDisplay && items.map((item, index) => {
              return (
                  <li key={index}>
                    <Subscription purpose={item.purpose} priceTag={item.priceTag} payFreq={item.payFreq}
                    expenses={item.expenses}/>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    )
  }
}
function AddExpenses (price,period) {
  console.log('added');
return parseFloat(MonthlyExpenses(price,period));
}
// export function ReduceExpenses (price,period) {
//     expenses -= parseFloat(MonthlyExpenses(price,period));
//     console.log(expenses+'--removed');
//     return expenses;
//   }

export default Form;
