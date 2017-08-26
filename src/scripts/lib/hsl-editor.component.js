const template = `
<div class="hsl-editor editor">
    <div class="editor__input">
        hsl(
        <input type="number" v-model="h" min="0" max="360" step="1" />deg
        ,
        <input type="number" v-model="s" min="0" max="100" step="1" />%
        ,
        <input type="number" v-model="l" min="0" max="100" step="1" />%
        )
    </div>
    <div class="editor__output swatch-container">
        <div class="swatch" v-bind:style="{
            backgroundColor: 'hsl(' + h + ', ' + s + '%, ' + l + '%)'
        }">
        </div>
    </div>
</div>
`;

const component = Vue.component('fw-hsl-editor', {
    template: template,

    data: function () {
        return {
            h: 0,
            s: 0,
            l: 0
        };
    }
});

module.exports = component;
