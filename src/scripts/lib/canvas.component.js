const Pixel = require('./pixel');

const template = `
<canvas ref="canvas"></canvas>
`;

const DEFAULT_CANVAS_WIDTH = 256;
const DEFAULT_CANVAS_HEIGHT = 256;

const component = Vue.component('fw-canvas', {
    template: template,

    mounted: function () {
        this.init();
        this.fill();
    },

    methods: {
        init: function () {
            let canvas = this.$refs.canvas;
            canvas.width = DEFAULT_CANVAS_WIDTH;
            canvas.height = DEFAULT_CANVAS_HEIGHT;
            let context = canvas.getContext('2d');
            context.fillStyle = 'white';
            context.fillRect(0, 0, canvas.width, canvas.height);
        },

        fill: function () {
            let canvas = this.$refs.canvas;
            let context = canvas.getContext('2d');
            let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            let pixel = new Pixel(imageData);

            // TODO avoid relying on assumptions about width and height of image data
            for (pixel.x = 0; pixel.x < pixel.width; pixel.x++) {
                for (pixel.y = 0; pixel.y < pixel.height; pixel.y++) {
                    pixel.r = pixel.x;
                    pixel.g = pixel.y;
                    pixel.b = 0;
                    pixel.a = 255;
                }
            }

            context.putImageData(imageData, 0, 0);
        }
    }
});

module.exports = component;
