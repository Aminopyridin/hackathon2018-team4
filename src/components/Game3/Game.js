import React from 'react';
import Field from "./components/Field";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameover: false,
            count: 0
        }
    }

    render() {
        return (
            <div>
                <Field width={6} height={5} gameCallback={(c) => this.callback(c)}/>
                {this.state.gameover && <p>Win count: {this.state.count}</p>}
            </div>
        )
    }

    callback(count) {
        this.setState({
            gameover: true,
            count: count
        })
    }
}