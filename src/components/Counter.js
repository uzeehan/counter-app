import React, { Fragment } from 'react';

class Counter extends React.Component {
    render () {
        return (
            <div className="page-container">
                <h1>Counter App</h1>

                <ul>
                    <li><button>-</button></li>
                    <li>display counter</li>
                    <li><button>+</button></li>
                </ul>
            </div>
        )
    }
}

export default Counter;
