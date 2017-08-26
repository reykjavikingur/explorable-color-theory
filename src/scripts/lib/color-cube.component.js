const template = `
<div class="color-cube">
    
    rgb(
    <div class="color-cube__input">
        <input type="number" v-model="r" min="0" max="255" step="1" />
    </div>
    ,
    <div class="color-cube__input">
        <input type="number" v-model="g" min="0" max="255" step="1" />
    </div>
    ,
    <div class="color-cube__input">
        <input type="number" v-model="b" min="0" max="255" step="1" />
    </div>
    )
    
    <div class="color-cube__container">
    
        <div class="color-cube__box">
            
            <div class="panel panel--rg">
                <fw-color-cube-slice :r="'y'" :g="'x'" :b="b"></fw-color-cube-slice>
            </div>
            <div class="panel panel--rb">
                <fw-color-cube-slice :r="'x'" :g="g" :b="'y'"></fw-color-cube-slice>
            </div>
            <div class="panel panel--gb">
                <fw-color-cube-slice :r="r" :g="'x'" :b="'y'"></fw-color-cube-slice>
            </div>
            
        </div>
    
    </div>
    
</div>
`;

const component = Vue.component('fw-color-cube', {
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
