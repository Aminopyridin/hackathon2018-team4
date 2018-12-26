import React from 'react';
import * as classNames from 'classnames'
import styles from './style.css';
import PropTypes from "prop-types";

const SequenceContext = React.createContext();

export default class Lights extends React.Component {
    constructor() {
        super();
        this.state = {
            sequence: [7, 5, 6, 8, 10, 9],
            cursor: 0,
            attemp: 1,
            turnArr: [false, false, false, false, false, false],
            KOSTYLb: false
        };
    }

    shouldComponentUpdate() {
        return true;
    }

    handleClick = (id, id2) => {
        if (id === this.state.sequence[this.state.cursor]) {
            let turnArr2 = this.state.turnArr;
            turnArr2[id2] = true;
            this.setState(state => ({sequence: [7, 5, 6, 8, 10, 9], cursor: state.cursor + 1, turnArr: turnArr2, KOSTYLb: false}));
            return 'OK';
        } else {
            let turnArr2 = this.state.turnArr;
            turnArr2[id2] = true;
            this.setState(state => ({sequence: [7, 5, 6, 8, 10, 9], cursor: state.cursor + 1, turnArr: turnArr2, KOSTYLb: false}));
            setTimeout(() => {
                this.setState(() => ({
                    sequence: [7, 5, 6, 8, 10, 9],
                    cursor: 0,
                    turnArr: [false, false, false, false, false, false],
                    KOSTYLb: false
                }));
            }, 500);
            return 'NE_OK';
        }
    };

    componentDidUpdate() {
        if (this.state.cursor === this.state.sequence.length) {
            setTimeout(() => {
                this.setState(() => ({
                    sequence: [7, 5, 6, 8, 10, 9],
                    cursor: 0,
                    turnArr: [false, false, false, false, false, false],
                    KOSTYLb: true
                }));
            }, 500);
        }
    }

    render() {
        if (this.state.KOSTYLb) {
            alert("ВЫ ВЫИГРАЛИ!!")
        }

        return (
            <div className={styles.lights}>
                {/*<Light positionClass={styles.light1} />
                <Light positionClass={styles.light2} />
                <Light positionClass={styles.light3} />
                <Light positionClass={styles.light4} />*/}
                <Light positionClass={styles.light5} id={5} id2={0} isTurned={this.state.turnArr[0]}
                       handleClick={this.handleClick}/>
                <Light positionClass={styles.light6} id={6} id2={1} isTurned={this.state.turnArr[1]}
                       handleClick={this.handleClick}/>
                <Light positionClass={styles.light7} id={7} id2={2} isTurned={this.state.turnArr[2]}
                       handleClick={this.handleClick}/>
                <Light positionClass={styles.light8} id={8} id2={3} isTurned={this.state.turnArr[3]}
                       handleClick={this.handleClick}/>
                <Light positionClass={styles.light9} id={9} id2={4} isTurned={this.state.turnArr[4]}
                       handleClick={this.handleClick}/>
                <Light positionClass={styles.light10} id={10} id2={5} isTurned={this.state.turnArr[5]}
                       handleClick={this.handleClick}/>
                {/*<Light positionClass={styles.light11} />
                <Light positionClass={styles.light12} />*/}
            </div>
        );
    }
}

class Light extends React.PureComponent {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            style: !this.props.isTurned
                ? {backgroundColor: 'white'}
                : {backgroundColor: 'red'},
            isTurned: this.props.isTurned
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {
            style: !props.isTurned
                ? {backgroundColor: 'white'}
                : {backgroundColor: 'red'},
            isTurned: props.isTurned
        };
    }

    handleChange = () => {
        this.props.handleClick(this.props.id, this.props.id2);
    };

    render() {
        return (
            <div className={classNames(styles.light, this.props.positionClass)} style={this.state.style}
                 onClick={this.handleChange}/>);
    }
}

Light.propTypes = {
    positionClass: PropTypes.string,
    isTurned: PropTypes.bool,
    id: PropTypes.number,
    id2: PropTypes.number,
    handleClick: PropTypes.func
};