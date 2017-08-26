const Color = require('color');

const template = `
<div class="hsl-editor editor">
    <div class="editor__input">
        hsl(
        <input type="number" v-model="h" min="0" max="360" step="1" />deg,
        <input type="number" v-model="s" min="0" max="100" step="1" />%,
        <input type="number" v-model="l" min="0" max="100" step="1" />%)
    </div>
    <div class="editor__output swatch-container">
        <div class="swatch" v-bind:style="{
            backgroundColor: 'hsl(' + h + ', ' + s + '%, ' + l + '%)'
        }">
        </div>
    </div>
    <div class="editor__output">{{rgbString}}</div>
</div>
`;

const component = Vue.component('fw-hsl-editor', {
    template: template,

    data: function () {
        return {
            h: 0,
            s: 0,
            l: 0,
            rgbString: 'rgb(?, ?, ?)'
        };
    },

    mounted: function () {
        this.convert();
    },

    watch: {
        h: function (h) {
            this.convert();
        },
        s: function (s) {
            this.convert();
        },
        l: function (l) {
            this.convert();
        }
    },

    methods: {

        convert: function () {
            let h = parseInt(this.h);
            let s = parseInt(this.s);
            let l = parseInt(this.l);
            let color = Color.hsl(h, s, l).rgb();
            let [r, g, b] = color.color.map(c => Math.round(c));
            this.rgbString = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        }
    }
});

module.exports = component;
