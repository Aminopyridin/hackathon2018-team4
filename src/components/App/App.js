import React from 'react';
import ChristmasTree from '../ChristmasTree/ChristmasTree';
import styles from './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from "../Game3/Game";
export default class App extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/tree">ChristosTree</Link>
                        </li>
                        <li>
                            <Link to="/game3">Game3</Link>
                        </li>
                    </ul>
                    <hr />
                    <Route path="/tree" component={this.Tree} />
                    <Route path="/game3" component={Game} />
                </div>
            </Router>
        )
    }

    Tree() {
        return (
            <div className={styles.app}>
                <div className={styles.treeWrapper}>
                    <ChristmasTree />
                </div>
            </div>
        )
    }
}