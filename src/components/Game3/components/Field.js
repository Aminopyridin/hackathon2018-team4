import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

export default class Field extends React.Component {
    constructor(props) {
        super(props);
        const field = FieldGenerator.generate();
        this.state = {
          field: field
        };
    }

    update(imageKey, rowIndex, columnIndex) {
        alert(`${imageKey}_${rowIndex}_${columnIndex}`);
        const {field} = this.state;
        field[rowIndex][columnIndex].displayed = !field[rowIndex][columnIndex].displayed;
        this.setState({
            field: field
        });
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

export class FieldGenerator {
    static generate() {
            const field = [];
            for (let i = 0; i < 3; i++) {
            field[i] = [];
            for(let j = 0; j < 3; j++)
                field[i][j] = this.createCardInfo(i + j.toString());
        }
        return field;
    }

    static createCardInfo(imageKey, displayed = true) {
        return {
            imageKey: imageKey,
            displayed: displayed
        }
    }

}

/*Field.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}; */