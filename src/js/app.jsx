import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // set the variables to be manipulated by react
    this.state = {
      balance: '',
      rate: '',
      term: '',
      payment: ''
    }
    // the variables that are being updated by the input section
    this.updateBalance = this.updateBalance.bind(this);
    this.updateRate = this.updateRate.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  updateBalance(e) {
    this.setState({
      balance: e.target.value
    })
  }

  updateRate(e) {
    this.setState({
      rate: e.target.value
    })
  }

  updateTerm(e) {
    this.setState({
      term: e.target.value
    })
  }
// event handler and calculation of inputs
  calculate(e) {
    e.preventDefault();
    let balance = (this.state.balance);
    let rate = (this.state.rate);
    let term = (this.state.term);

    console.log(balance + " balance");
    console.log(rate + " interest");
    console.log(term + " term");

// mortage calculation math
    let mRate = rate / 100 / 12;
    let totalMonths = term * 12;
    let top = mRate * Math.pow((1 + mRate), totalMonths);
    let bottom = Math.pow((1 + mRate), totalMonths) - 1;
    let equation = balance * (top / bottom).toFixed(2);
    // let result = equation.toFixed(2);

    this.setState({
      payment: "$" + equation + " is your monthly payment"
    })
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-offset-2 col-md-10">
          <h3>Mortgage Calculator</h3>
          <hr />
        </div>
        <form className="form-horizontal" onSubmit={this.calculate}>
          <div className="form-group">
            <label className="control-label col-md-2">
              <strong>Loan Balance</strong>
            </label>
            <div className="col-md-10">
              <div className="input-group">
                <input
                  type="number"
                  name="balance"
                  className="form-control"
                  placeholder="Enter amount"
                  value={this.state.balance}
                  onChange={this.updateBalance}
                />
              </div>
            </div>
          </div>

          <div className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-md-2">
                <strong>Interest Rate (%)</strong>
              </label>
              <div className="col-md-10" >
                <div className="input-group">
                  <input
                    type="number"
                    name="rate"
                    className="form-control"
                    placeholder="Enter amount"
                    value={this.state.rate}
                    onChange={this.updateRate}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-md-2">
                <strong>Loan Term (years)</strong>
              </label>
              <div className="btn-group col-md-10">
                <select type="number" name="term" className="form-control" value={this.state.term} onChange={this.updateTerm}>
                  <option>15</option>
                  <option>30</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
              <button type="submit" name="submit" className="btn btn-primary">Submit</button>
            </div>
            <h3 id="output">
              <p>{this.state.payment}</p>
            </h3>
          </div>
        </form>
      </div>
    );
  }
}