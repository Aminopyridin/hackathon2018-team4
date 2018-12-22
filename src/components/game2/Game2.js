import * as React from 'react';
import * as classNames from 'classnames';
import './game2.css';
import {TreeView} from "./TreeView";
import {getNextKey} from "./getNextKey";
import styles from "./game2.css";
import PropTypes from 'prop-types';

export class Game2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trashItems: [],
            goodCount: 0,
            badCount: 0,
        }
    }

    render() {
        return <div>
            <TreeView top={"200px"} left={"-50px"} goodCount={this.state.goodCount}/>
            <BadView count={this.state.badCount}/>
            {this.state.trashItems.map(i => i.item)}
        </div>
    }

    componentDidMount() {
        this.startGame();
    }

    startGame = () => {
        this.timer = setInterval(() => {
            this.createTrash(Math.random() > 0.5);
        }, 1000);
        window.onkeypress = evt => {
            console.log(evt.which);
            if (evt.which == 97) {
                const trash = this.state.trashItems[0];
                trash.itemRef.current.style.display = 'none';
                this.setState(state => ({
                    trashItems: state.trashItems.slice(1),
                    goodCount: trash.good ? state.goodCount + 1 : state.goodCount
                }));
            }
            if (evt.which == 100) {
                const trash = this.state.trashItems[0];
                trash.itemRef.current.style.display = 'none';
                this.setState(state => ({
                    trashItems: state.trashItems.slice(1),
                    badCount: !trash.good ? state.badCount + 1 : state.badCount
                }));
            }

        };
        setTimeout(() => this.endGame(), 10000)
    };

    endGame = () => {
        clearInterval(this.timer);
    };


    createTrash = (isGood) => {
        const trashRef = React.createRef();
        const className = classNames(styles["trash-item"], {[styles["trash-good"]]: isGood}, {[styles["trash-bad"]]: !isGood});
        const trash = <div ref={trashRef} className={className} key={getNextKey()}/>;
        setTimeout(() => trashRef.current.style.top = '90vh', 50);
        this.setState(state => ({
            trashItems: [...state.trashItems,
                {
                    item: trash,
                    itemRef: trashRef,
                    good: isGood,
                    remove: () => trashRef.current.remove()
                }]
        }));
        // setTimeout(() => trashRef.current.remove(), 3000);
    };

    removeLastTrash = () => {
        const last = this.state.trashItems[this.state.trashItems.length - 1];
        if (last) {
            last.itemRef.current.remove();
            this.setState({trashItems: this.state.trashItems.slice(0, this.state.trashItems.length - 2)});
        }
    }
}

function BadView(props) {
    return <div style={{position: 'absolute', display: 'flex', flexDirection: 'column-reverse', bottom: '10px', right: '10px'}}>
        {/* eslint-disable-next-line react/jsx-key */}
        {Array(props.count).fill(undefined).map(_ => <div
            style={{width: '50px', height: '50px', borderRadius: '50%', background: 'red'}}/>)}
    </div>
}

BadView.propTypes = {
    count: PropTypes.number
};