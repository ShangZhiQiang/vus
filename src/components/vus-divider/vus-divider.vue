<template>
    <div :class="classes">
        <span :class="slotClasses">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    const prefixCls = 'vus-divider';

    export default {
        name: `${prefixCls}`,
        props:{
            dashed:{
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,`${prefixCls}-with-text-center`
                ];
            },slotClasses() {
                return [
                    `${prefixCls}-inner-text`,
                ];
            }
        }
    };
</script>

<style>
    .vus-divider{
        display: block;
        height: 1px;
        width: 100%;
        min-width: 100%;
        margin: 24px 0;
        clear: both;
        background: #e8eaec;
    }

    .vus-divider:before{
        content: "";
        display: table-cell;
        position: relative;
        top: 50%;
        width: 50%;
        border-top: 1px solid #e8eaec;
        transform: translateY(50%);
    }

    .vus-divider:after{
        content: "";
        display: table-cell;
        position: relative;
        top: 50%;
        width: 50%;
        border-top: 1px solid #e8eaec;
        transform: translateY(50%);
    }


    .ivu-divider-dashed{
        background: 0 0;
        border-top: 1px dashed #e8eaec;
    }

    .vus-divider-with-text-center{
        display: table;
        white-space: nowrap;
        text-align: center;
        background: 0 0;
        font-weight: 500;
        color: #17233d;
        font-size: 16px;
        margin: 16px 0;
    }
</style>

