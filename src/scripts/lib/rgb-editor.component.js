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
</div>
`;

const component = Vue.component('fw-rgb-editor', {
    template: template,

    data: function () {
        return {
            r: 0,
            g: 0,
            b: 0
        };
    }
});

module.exports = component;
