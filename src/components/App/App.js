import React from 'react';
import ChristmasTree from '../ChristmasTree/ChristmasTree';
import Lights from '../firstGame/Lights/Lights'
import styles from './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from "../Game3/Game";
import {Game2} from "../game2/Game2";
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
                            <Link to="/game2">Game2</Link>
                        </li>
                        <li>
                            <Link to="/game3">Game3</Link>
                        </li>
                    </ul>
                    <hr />
                    <Route path="/tree" component={this.Tree} />
                    <Route path="/game2" component={Game2} />
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
                    <Lights/>
                </div>
            </div>
        )
    }
}