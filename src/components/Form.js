import React, { Component } from 'react';
import Subscription from './Subscription';
import { MonthlyExpenses } from './Expenses';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purpose: '',
      priceTag: '',
      payFreq: '',
      expenses: 0,
      subscriptions: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    const {purpose,priceTag,payFreq} = this.state;
    const id = Math.floor(Math.random() * 100);
    const subDetails = {id,purpose,priceTag,payFreq};
      this.state.subscriptions.push(subDetails);
    this.setState((prevState)=>{
      return {
        expenses: prevState.expenses + parseFloat(MonthlyExpenses(priceTag,payFreq)),
        purpose: '',
        priceTag: '',
        payFreq: '',
      }
    });
    e.preventDefault();
  }

  handleRemoval = (id,price,period) => {
    this.setState((prevState) => {
      return {
      subscriptions: prevState.subscriptions.filter(subscription => subscription.id !== id),
      expenses: prevState.expenses - parseFloat(MonthlyExpenses(price,period)),
    }
    });
  }

  render() {
    const frequency = ['Yearly','Monthly','Twice a Month','Weekly','Daily'];
    const {purpose, priceTag, payFreq,expenses,subscriptions} = this.state;
    let totalExpenses = expenses.toFixed(2);
    return (
      <div>
          <div>
            {expenses > 0.00 && <p>Monthly Spending<br></br>{totalExpenses}$! That is a lot of money!</p>}
          </div>
        <h2>Add an Expense</h2>
        <form  onSubmit={this.handleSubmit} id='mainForm'>
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
            min='0.01'
            max='99999'
            name='priceTag'
            value={priceTag}
            onChange={this.handleChange}
            required />

          <label
            htmlFor='payment-freq'>
            Frequency of Payment
          </label>
          <select
            id='payment-freq'
            name='payFreq'
            value={payFreq}
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
          {expenses <= 0.00 && <p>No expenses! Good! You did good in life!</p>}
          <ul>
            {subscriptions.map((subscription, index) => {
              return (
                <li key={index}>
                  <Subscription details={subscription} handleRemoval={this.handleRemoval}/>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Form;
