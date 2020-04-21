import React, { Fragment } from 'react';

class Counter extends React.Component {

    constructor(probs) {
        super(probs);

        this.state = {
            counter: 15
        }
    }

    onClickPlusBtn = () => {
        this.setState({
            counter: this.state.counter + 1
        })
        console.log('clicked btn +');
    }

    onClickMinusBtn = () => {
        this.setState({
            counter: this.state.counter - 1
        })
        console.log('clicked btn -');
    }

    render () {
        return (
            <div className="page-container">
                <h1>Counter App</h1>

                <ul>
                    <li><button name="minusBtn" onClick={this.onClickMinusBtn}>-</button></li>
                    <li>{ this.state.counter }</li>
                    <li><button name="plusBtn" onClick={this.onClickPlusBtn}>+</button></li>
                </ul>
            </div>
        )
    }
}

export default Counter;
