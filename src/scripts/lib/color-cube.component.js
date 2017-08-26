const template = `
<div class="color-cube">
    
    <div class="color-cube__container">
    
        <div class="color-cube__box">
            
            <div class="panel panel--top">
                <fw-color-cube-slice :r="'y'" :g="'x'" :b="0"></fw-color-cube-slice>
            </div>
            <div class="panel panel--bottom">
                <fw-color-cube-slice :r="'y'" :g="'x'" :b="255"></fw-color-cube-slice>
            </div>
            <div class="panel panel--right">
                <fw-color-cube-slice :r="'x'" :g="0" :b="'y'"></fw-color-cube-slice>
            </div>
            <div class="panel panel--left">
                <fw-color-cube-slice :r="'x'" :g="255" :b="'y'"></fw-color-cube-slice>
            </div>
            <div class="panel panel--front">
                <fw-color-cube-slice :r="0" :g="'x'" :b="'y'"></fw-color-cube-slice>
            </div>
            <div class="panel panel--back">
                <fw-color-cube-slice :r="255" :g="'x'" :b="'y'"></fw-color-cube-slice>
            </div>
            
        </div>
    
    </div>
    
</div>
`;

const component = Vue.component('fw-color-cube', {
    template: template
});

module.exports = component;
