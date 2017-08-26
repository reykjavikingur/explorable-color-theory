const Color = require('color');

const template = `
<div class="rgb-editor editor">
    <div class="editor__input">
        rgb(
        <input type="number" v-model="r" min="0" max="255" step="1" />
        ,
        <input type="number" v-model="g" min="0" max="255" step="1" />
        ,
        <input type="number" v-model="b" min="0" max="255" step="1" />
        )
    </div>
    <div class="editor__output swatch-container">
        <div class="swatch" v-bind:style="{
            backgroundColor: 'rgb(' + r + ', ' + g + ', ' + b + ')'
        }">
        &nbsp;
        </div>
    </div>
    <div class="editor__output">{{hslString}}</div>
</div>
`;

const component = Vue.component('fw-rgb-editor', {
    template: template,

    data: function () {
        return {
            r: 0,
            g: 0,
            b: 0,
            hslString: 'hsl(?, ?, ?)'
        };
    },

    mounted: function(){
        this.convert();
    },

    watch: {
        r: function (r) {
            this.convert();
        },
        g: function (g) {
            this.convert();
        },
        b: function (b) {
            this.convert();
        }
    },

    methods: {
        convert: function () {
            let r = parseInt(this.r);
            let g = parseInt(this.g);
            let b = parseInt(this.b);
            let color = Color.rgb(r, g, b).hsl();
            let [h, s, l] = color.color.map(c => Math.round(c));
            this.hslString = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
        }
    }
});

module.exports = component;
