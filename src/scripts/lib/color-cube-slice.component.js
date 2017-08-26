const Pixel = require('./pixel');

const template = `
<canvas class="color-cube-slice" ref="canvas"></canvas>
`;

const COLOR_RANGE = 256;

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
            canvas.width = COLOR_RANGE;
            canvas.height = COLOR_RANGE;
        },

        fill: function () {
            let canvas = this.$refs.canvas;
            let context = canvas.getContext('2d');
            let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            let pixel = new Pixel(imageData);
            let min = 0;
            let max = COLOR_RANGE;

            for (pixel.x = 0; pixel.x < pixel.width; pixel.x++) {
                for (pixel.y = 0; pixel.y < pixel.height; pixel.y++) {
                    let channels = ['r', 'g', 'b'];
                    for (let ch of channels) {
                        let byte;
                        if (this[ch] === 'x') {
                            byte = pixel.x;
                        }
                        else if (this[ch] === 'y') {
                            byte = pixel.y;
                        }
                        else {
                            byte = parseInt(this[ch]);
                        }
                        pixel[ch] = Math.max(min, Math.min(max, byte));
                    }
                    pixel.a = 255;
                }
            }

            context.putImageData(imageData, 0, 0);
        }
    }
});

module.exports = component;
