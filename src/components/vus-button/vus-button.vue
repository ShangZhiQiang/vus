<template>
    <div @click="onClick" :class="classes">
        <vus-icon v-if="icon" :size="16" :icon-class="icon" class-name="vus-btn-icon"></vus-icon>
        <span ref="slot"><slot></slot></span>
    </div>
</template>

<script>

    import StringUtils from '../../utils/StringUtils';

    const prefixCls = 'vus-btn';

    export default {
        name: 'vus-button',
        props:{
            type:{
                type: String,
                default: 'default'
            },
            disabled:{
                type: Boolean,
                default: false
            },shape:{
                type: String,
                default: 'default'
            },icon:{
                type: String,
                default:''
            },long:{
                type: Boolean,
                default: false
            },hover:{
                type: Boolean,
                default: false
            }
        },computed:{
            classes(){
                let type = StringUtils.isExist(this.type, ['default','info', 'success', 'warning', 'error'])?this.type:'default';

                let shape = StringUtils.isExist(this.shape, ['default','rounded'])?this.shape:'default';

                let butClass = [`${prefixCls}`,`${prefixCls}-${type}`,`${prefixCls}-shape-${shape}`];

                if(this.long){
                    butClass.push(`${prefixCls}-long`);
                }

                if(this.disabled){
                    butClass.push(`${prefixCls}-disabled`);
                }else{
                    butClass.push(`${prefixCls}-enable`);
                    butClass.push(`${prefixCls}-${type}-enable`);

                    if(this.hover){
                        butClass.push(`${prefixCls}-special`);
                    }
                }
                return butClass;
            }
        },
        methods:{
            onClick(event){
                if(!this.disabled){
                    this.$emit('click', event);
                }
            }
        }
    };
</script>

<style scoped>

    /* 按钮特效 */
    .vus-btn-special:hover{
        transform: scale(1.1);
    }

    /* 长形状按钮 */
    .vus-btn-long{
        width: 100%;
    }

    /* 图标样式 */
    .vus-btn-icon{
        display: inline-block;
        vertical-align: middle !important;
        text-align: center;
    }

    /* 默认形状 */
    .vus-btn-shape-default{
        border-radius: 0;
    }

    /* 圆角形状 */
    .vus-btn-shape-rounded{
        border-radius: 17px;
        overflow: hidden;
    }

    /* 启用样式 */
    .vus-btn-enable{
        cursor: pointer;
    }

    /* 禁用样式 */
    .vus-btn-disabled{
        cursor: not-allowed;
        opacity: 0.65;
    }

    /* 基础样式 */
    .vus-btn{
        /* 兼容 start */
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
        /* 兼容 end */
        min-width: 40px;
        display: inline-block;
        /*height: 15px;*/
        /*line-height: 15px;*/
        background-color: transparent;
        color: inherit;
        padding: 6px 12px;
        border: 1px solid transparent;
        vertical-align: middle;
        transition: all .25s;
        text-align: center;
    }

    /* 默认按钮样式 start */
    .vus-btn-default{
        background-color: #fafafa;
        border-color: #d1d9de;
        color: #758697;
    }

    .vus-btn-default-enable:hover{
        color: #333;
        background-color: #e6e6e6;
        border-color: #adadad;
    }
    /* 默认按钮样式 end */

    /* info 样式 start */
    .vus-btn-info{
        color: #fff;
        background-color: #2db7f5;
        border-color: #2db7f5;
    }

    .vus-btn-info-enable:hover{
        color: #fff;
        background-color: #57c5f7;
        border-color: #57c5f7;
    }
    /* info 样式 end */

    /* success 样式 start */
    .vus-btn-success{
        color: #fff;
        background-color: #19be6b;
        border-color: #19be6b;
    }

    .vus-btn-success-enable:hover{
        color: #fff;
        background-color: #47cb89;
        border-color: #47cb89;
    }
    /* success 样式 end */

    /* warning 样式 start */
    .vus-btn-warning{
        color: #fff;
        background-color: #f90;
        border-color: #f90;
    }

    .vus-btn-warning-enable:hover{
        color: #fff;
        background-color: #ffad33;
        border-color: #ffad33;
    }
    /* warning 样式 end */

    /* error 样式 start */
    .vus-btn-error{
        color: #fff;
        background-color: #ed4014;
        border-color: #ed4014;
    }

    .vus-btn-error-enable:hover{
        color: #fff;
        background-color: #f16643;
        border-color: #f16643;
    }
    /* error 样式 end */
</style>
