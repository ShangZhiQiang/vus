
<template>
    <svg v-else :style="{width:size+'px',height:size+'px'}" :class="svgClass" aria-hidden="true" v-on="$listeners">
        <use :href="iconName" />
    </svg>
</template>

<script>

    const prefixCls = 'vus-icon';

    export default {
        name: 'vus-icon',
        props: {
            iconClass: {
                type: String,
                required: true
            },
            className: {
                type: String,
                default: ''
            },size:{
                type: Number,
                default: 14
            }
        },
        computed: {
            iconName() {
                return `#icon-${this.iconClass}`;
            },
            svgClass() {
                let iconClass = [`${prefixCls}`];
                if (this.className) {
                    iconClass.push(this.className);
                }
                return iconClass;
            }
        }
    };
</script>

<style scoped>

    .vus-icon {
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
