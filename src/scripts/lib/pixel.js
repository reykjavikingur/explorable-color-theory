class Pixel {

    constructor(imageData) {
        this.imageData = imageData;
        this._x = 0;
        this._y = 0;
    }

    get width() {
        return this.imageData.width;
    }

    get height() {
        return this.imageData.height;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        // TODO validate value
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        // TODO validate value
        this._y = value;
    }

    get r() {
        return this.imageData.data[this.byteIndex + 0];
    }

    set r(value) {
        // TODO validate value
        this.imageData.data[this.byteIndex + 0] = value;
    }

    get g() {
        return this.imageData.data[this.byteIndex + 1];
    }

    set g(value) {
        // TODO validate value
        this.imageData.data[this.byteIndex + 1] = value;
    }

    get b() {
        return this.imageData.data[this.byteIndex + 2];
    }

    set b(value) {
        // TODO validate value
        this.imageData.data[this.byteIndex + 2] = value;
    }

    get a() {
        return this.imageData.data[this.byteIndex + 3];
    }

    set a(value) {
        // TODO validate value
        this.imageData.data[this.byteIndex + 3] = value;
    }

    get byteIndex() {
        let pixelIndex = this.y * this.width + this.x;
        return pixelIndex * 4;
    }
}

module.exports = Pixel;
