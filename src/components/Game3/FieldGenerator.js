import {ImageStorage} from "./ImageStorage";

export class FieldGenerator {

    static generate(size) {
        const names = ImageStorage.getNamesWithoutDefault();
        const elementsCount = size.height*size.width;
        if (elementsCount === 0 || elementsCount % 2 != 0) {
            throw new Error('ватафакмазафак');
        }
        let elements = [];
        for(let i = 0, j = 0; i < elementsCount; i+=2, j++) {
            const imageKey = names[j % names.length];
            elements[i] = imageKey;
            elements[i+1] = imageKey;
        }
        elements = this.shuffle(elements);
        let field = [];
        for (let i = 0; i < size.height; i++) {
            field[i] = [];
            for(let j = 0; j < size.width; j++) {
                field[i][j] = this.c(elements[i * size.width + j]);
            }
        }
        return field;
    }

    static shuffle(array) {
        for(let i = 0; i < 1000; i++) {
            array.sort(this.compareRandom);
        }
        return array;
    }

    static compareRandom(a, b) {
        return Math.random() - 0.5;
    }

    static c(imageKey, displayed = false) {
        return {
            imageKey: imageKey,
            displayed: displayed
        }
    }

}