import React from 'react';
import ChristmasTree from '../ChristmasTree/ChristmasTree';
import Lights from '../firstGame/Lights/Lights'
import styles from './style.css';

export default class App extends React.Component {
    render () {
        return (
            <div className={styles.app}>
                <div className={styles.treeWrapper}>
                    <ChristmasTree />
                    <Lights/>
                </div>
            </div>
        );
    }
}