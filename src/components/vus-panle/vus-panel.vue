<template>
    <div class="vus-panel">
        <div class="vus-panel-heading">
            <h3 class="vus-panel-title">
                <slot name="title"></slot>
            </h3>
        </div>
        <div class="vus-panel-body">
            <p><slot name="content"></slot></p>
        </div>
    </div>
</template>
<script>
    export default{
        name:'vus-panel'
    };
</script>
<style>
    .vus-panel {
        border-radius: 0;
        border: 1px solid #e7ecf3;
        border-bottom: 1px solid rgba(0, 0, 0, 0.17);
        margin-bottom: 15px;
    }

    .vus-panel-heading{
        background-color: #42a5f5;
        border-color: #42a5f5;
        color: #fff;
    }

    .vus-panel-title{
        font-weight: 600;
        padding: 0 20px 0 20px;
        font-size: 1.2em;
        line-height: 50px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .vus-panel-body{
        padding: 15px 20px 25px;
    }
</style>
