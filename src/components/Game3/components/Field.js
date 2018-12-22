import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';
import {FieldGenerator} from "../FieldGenerator";

export default class Field extends React.Component {
    constructor(props) {
        super(props);
        const {width, height} = this.props;
        const field = FieldGenerator.generate({height: height, width: width});
        this.state = {
          field: field
        };
        this.lastClickedElement = null;
    }

    update(imageKey, rowIndex, columnIndex) {
        const {field} = this.state;
        const clickedElement = field[rowIndex][columnIndex];
        clickedElement.displayed = true;

        this.setState({
            field: field
        }, () => {
            if (this.lastClickedElement === null) {
                this.handle(imageKey, rowIndex, columnIndex);
            } else {
                setTimeout(() => this.handle(imageKey, rowIndex, columnIndex), 600)
            }
        });
    }

    handle(imageKey, rowIndex, columnIndex) {
        const {field} = this.state;
        const clickedElement = field[rowIndex][columnIndex];

        if (this.lastClickedElement === null) {
            this.lastClickedElement = {
                rowIndex: rowIndex,
                columnIndex: columnIndex,
                imageKey: imageKey
            };
            clickedElement.displayed = true;
        } else if (this.comparePosition(clickedElement, this.lastClickedElement)) {
            return;
        } else if (this.compareImageKey(clickedElement, this.lastClickedElement)) {
            clickedElement.displayed = true;
            this.lastClickedElement = null;

        } else {
            clickedElement.displayed = false;
            field[this.lastClickedElement.rowIndex][this.lastClickedElement.columnIndex].displayed = false;
            this.lastClickedElement = null;
        }
        let everyDisplayed = true;
        for (let row of this.state.field)
            for (let elem of row) {
                if (!elem.displayed) {
                    everyDisplayed = false;
                    break;
                }
            }
        if (everyDisplayed)
            this.props.gameCallback(this.props.width * this.props.height);
        this.setState({field: field});
    }

    comparePosition(firstElement, secondElement){
        return firstElement.rowIndex === secondElement.rowIndex
        && firstElement.columnIndex === secondElement.columnIndex;
    }

    compareImageKey(firstElement, secondElement) {
        return firstElement.imageKey === secondElement.imageKey;
    }

    createCallback(rowIndex, columnIndex) {
        return (imageKey) => this.update(imageKey, rowIndex, columnIndex);
    }

    createRow(rowIndex) {
        const {field} = this.state;
        const row = field[rowIndex];
        return (
            <div className={'row'}>
                {row.map((element, index) => this.createCard(element.imageKey, element.displayed, this.createCallback(rowIndex, index)))}
            </div>
        )
    }

    createCard(imageKey, displayed, callback) {
        return (
            <Card imageKey={imageKey} callback={callback} displayed={displayed}/>
        )
    }

    render () {
        const {field} = this.state;
        const items = [];
        for (let i = 0; i < field.length; i++) {
            items.push(this.createRow(i));
        }
        return (
            <div className={'field'}>
                {items}
            </div>
        )
    }
}

Field.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    gameCallback: PropTypes.func.isRequired
};