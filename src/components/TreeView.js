import * as React from 'react';
import styles from "./App/style.css";
import ChristmasTree from "./ChristmasTree/ChristmasTree";
import PropTypes from 'prop-types';

export class TreeView extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <div className={styles.treeWrapper}>
                    <div style={{position: 'relative', top: this.props.top, left: this.props.left}}>
                        <ChristmasTree/>
                    </div>
                </div>
            </div>
        );
    }
}

TreeView.propTypes = {
    top: PropTypes.string,
    left: PropTypes.string,
};