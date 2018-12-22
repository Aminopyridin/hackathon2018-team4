import React from 'react';
import * as classNames from 'classnames'
import styles from './style.css';
import PropTypes from "prop-types";

const SequenceContext = React.createContext();

export default class Lights extends React.PureComponent {
    constructor() {
        super();
        this.state = {isCorrect: true, sequence: [7, 5, 6, 8, 10, 9], cursor: 0, attemp: 1};
    }

    handleClick =(id)=>{
        if (id === this.state.sequence[this.state.cursor]){
            this.setState(state=>({isCorrect: true, sequence: [7, 5, 6, 8, 10, 9], falsecursor: state.cursor + 1, attemp: state.attemp}));
            console.log(this.state.cursor);
            return 'OK';
        } else {
            this.setState(state=>({isCorrect: false, sequence: [7, 5, 6, 8, 10, 9], cursor: state.cursor + 1, attemp: state.attemp+1}));
            this.render();
            return 'NE_OK';
        }
    };

    reload =()=>{
        this.setState(state=>({isCorrect: true, sequence: [7, 5, 6, 8, 10, 9], cursor: 0}));
    }

    render() {
        const gameManager = this.state;
        return (
            <div className={styles.lights}>
                    {/*<Light positionClass={styles.light1} />
                <Light positionClass={styles.light2} />
                <Light positionClass={styles.light3} />
                <Light positionClass={styles.light4} />*/}
                    <Light positionClass={styles.light5} id={5} isTurned={false} functionPack={{handleClick: this.handleClick, reload: this.reload }} attemp={this.state.attemp}/>
                    <Light positionClass={styles.light6} id={6} isTurned={false} functionPack={{handleClick: this.handleClick, reload: this.reload }} attemp={this.state.attemp}/>
                    <Light positionClass={styles.light7} id={7} isTurned={false} functionPack={{handleClick: this.handleClick, reload: this.reload }} attemp={this.state.attemp}/>
                    <Light positionClass={styles.light8} id={8} isTurned={false} functionPack={{handleClick: this.handleClick, reload: this.reload }} attemp={this.state.attemp}/>
                    <Light positionClass={styles.light9} id={9} isTurned={false} functionPack={{handleClick: this.handleClick, reload: this.reload }} attemp={this.state.attemp}/>
                    <Light positionClass={styles.light10} id={10} isTurned={false} functionPack={{handleClick: this.handleClick, reload: this.reload }} attemp={this.state.attemp}/>
                    {/*<Light positionClass={styles.light11} />
                <Light positionClass={styles.light12} />*/}
                <p>{this.state.cursor}</p>

            </div>
        );
    }
}

class Light extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            style: !this.props.isTurned
                ? {backgroundColor: 'white'}
                : {backgroundColor: 'red'},
            isTurned: this.props.isTurned};
    }
    handleChange = () => {
        switch(this.props.functionPack.handleClick(this.props.id)) {
            case 'OK':
                this.setState(state =>
                    !state.isTurned ?
                        {style: {backgroundColor: 'red'}, isTurned: true} :
                        {style: {backgroundColor: 'white'}, isTurned: false});
                return;
            case 'NE_OK':
                this.setState(state =>
                    !state.isTurned ?
                        {style: {backgroundColor: 'red'}, isTurned: true} :
                        {style: {backgroundColor: 'white'}, isTurned: false});
                setTimeout(() => {
                    this.setState(state =>
                        !state.isTurned ?
                            {style: {backgroundColor: 'red'}, isTurned: true} :
                            {style: {backgroundColor: 'white'}, isTurned: false});
                    this.props.functionPack.reload();
                }, 1000);
                return;
        }
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
    attemp: PropTypes.number,
    functionPack: PropTypes.object
};