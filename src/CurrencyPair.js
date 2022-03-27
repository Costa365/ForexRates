import React, { Component } from 'react';
import './styles.css';

export default class CurrencyPair extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded : false,
      base : props.base.toLowerCase(),
      quote : props.quote.toLowerCase(),
      rate : 0
    };
  }

  componentDidMount(){
    let url = `api/rate?base=${this.state.base}&quote=${this.state.quote}` 
    fetch(url)
    .then(res => res.json())
    .then(json => {
      let rate = json['rate'];
      this.setState({
        isLoaded: true,
        rate: rate
      })
    });
  }

  render() {
    let {isLoaded, base, quote, rate} = this.state;

    let pair = `${base.toUpperCase()} / ${quote.toUpperCase()}`;

    return (
      <div className="flex-item">
      <h2>{pair}</h2>
      {isLoaded?rate:'Loading...'}
      </div>   
    );
  }
}