import React, { Fragment } from 'react';

class count extends React.Component {

    constructor(probs) {
        super(probs);

        this.state = {
            count: 15
        }
    }

    onClickPlusBtn = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log('clicked btn +');
    }

    onClickMinusBtn = () => {
        this.setState({
            count: this.state.count - 1
        })
        console.log('clicked btn -');
    }

    render () {
        return (
            <div className="page-container">
                <h1>count App</h1>

                <ul>
                    <li><button name="minusBtn" onClick={this.onClickMinusBtn}>-</button></li>
                    <li><p>{ this.state.count }</p></li>
                    <li><button name="plusBtn" onClick={this.onClickPlusBtn}>+</button></li>
                </ul>
            </div>
        )
    }
}

export default count;
