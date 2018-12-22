import * as React from 'react';
import styles from "../App/style.css";
import ChristmasTree from "../ChristmasTree/ChristmasTree";
import PropTypes from 'prop-types';

export class TreeView extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <div className={styles.treeWrapper}>
                    <div style={{position: 'relative', top: this.props.top, left: this.props.left}}>
                        <ChristmasTree/>
                        {this.props.goodCount > 0 && <Goods top="20px" left="40px"/>}
                        {this.props.goodCount > 1 && <Goods top="120px" left="30px"/>}
                        {this.props.goodCount > 2 && <Goods top="20px" left="100px"/>}
                        {this.props.goodCount > 3 && <Goods top="150px" left="155px"/>}

                    </div>
                </div>
            </div>
        );
    }
}

class Goods extends React.Component {
    render() {
        return (
            <div style={{
                position: 'absolute',
                top: this.props.top,
                left: this.props.left,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'green'
            }}/>
        );
    }
}

Goods.propTypes = {
    top: PropTypes.string,
    left: PropTypes.string,
};

TreeView.propTypes = {
    top: PropTypes.string,
    left: PropTypes.string,
    goodCount: PropTypes.number,
};