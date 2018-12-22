import React, {Component} from 'react';
import styles from './game2.css';

export class TrashItem extends Component {
    constructor(props) {
        super(props);
        this.trashRef = React.createRef();
    }

    render() {
        return (
            <div ref={this.trashRef} className={styles["trash-item"]}/>
        );
    }

    remove1() {
        this.trashRef.current.remove();
    }

    componentDidMount() {
        setImmediate(() => this.trashRef.current.style.top = '90vh');
        setTimeout(() => this.trashRef.current.remove(), 3000);
    }
}

