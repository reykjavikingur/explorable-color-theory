const Pixel = require('./pixel');

const template = `
<canvas class="color-cube-slice" ref="canvas"></canvas>
`;

const DEFAULT_CANVAS_WIDTH = 256;
const DEFAULT_CANVAS_HEIGHT = 256;

const component = Vue.component('fw-color-cube-slice', {

    props: ['r', 'g', 'b'],

    template: template,

    mounted: function () {
        this.init();
        this.fill();
    },

    watch: {
        r: function () {
            this.fill();
        },
        g: function () {
            this.fill();
        },
        b: function () {
            this.fill();
        }
    },

    methods: {
        init: function () {
            let canvas = this.$refs.canvas;
            canvas.width = DEFAULT_CANVAS_WIDTH;
            canvas.height = DEFAULT_CANVAS_HEIGHT;
        },

        fill: function () {
            let canvas = this.$refs.canvas;
            let context = canvas.getContext('2d');
            let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            let pixel = new Pixel(imageData);

            for (pixel.x = 0; pixel.x < pixel.width; pixel.x++) {
                for (pixel.y = 0; pixel.y < pixel.height; pixel.y++) {
                    let channels = ['r', 'g', 'b'];
                    for (let ch of channels) {
                        if (this[ch] === 'x') {
                            pixel[ch] = pixel.x;
                        }
                        else if (this[ch] === 'y') {
                            pixel[ch] = pixel.y;
                        }
                        else {
                            pixel[ch] = parseInt(this[ch]);
                        }
                    }
                    pixel.a = 255;
                }
            }

            context.putImageData(imageData, 0, 0);
        }
    }
});

module.exports = component;
