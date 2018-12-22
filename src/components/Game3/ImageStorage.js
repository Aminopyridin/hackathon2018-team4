import putin from './images/putin.png'
import medvedev from './images/dimon.png'
import milonov from './images/milonov.png'
import yarovaya from './images/yarovaya.png'
import navalny from './images/navalny.png'
import defaultImg from './images/default.png'

export class ImageStorage {
    static storage = {
        'putin': putin,
        'medvedev': medvedev,
        'milonov': milonov,
        'navalny': navalny,
        'yarovaya': yarovaya,
        'default': defaultImg
    };

    static getNames() {
        const names = [];
        for(let name in this.storage) {
            names.push(name);
        }
        return names;
    }

    static getNamesWithoutDefault() {
        return this.getNames().filter(x => x != 'default');
    }
}