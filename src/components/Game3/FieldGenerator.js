export class FieldGenerator {
    static generate() {
        const field = [];
        field[0] = [this.c('putin'), this.c('putin')];
        field[1] = [this.c('medvedev'), this.c('medvedev')];
        return field;
    }

    static c(imageKey, displayed = false) {
        return {
            imageKey: imageKey,
            displayed: displayed
        }
    }

}