<template>
    <div class="container">
        <h1>Vus 因为不一样，所以不一样</h1>
        <br />
        <!-- 按钮 -->
       <div>
           <vus-button hover @click="btn" type="default">default</vus-button>
           <vus-button hover @click="btn" type="info">info</vus-button>
           <vus-button @click="btn" type="success">success</vus-button>
           <vus-button @click="btn" type="warning">warning</vus-button>
           <vus-button hover icon="vus-cancel" @click="btn" type="error">error</vus-button>
       </div>
       <br />
        <div>
            <vus-button @click="btn" disabled type="default">default</vus-button>
            <vus-button hover @click="btn" disabled type="info">info</vus-button>
            <vus-button @click="btn" disabled type="success">success</vus-button>
            <vus-button @click="btn" disabled type="warning">warning</vus-button>
            <vus-button @click="btn" disabled type="error">error</vus-button>
        </div>
        <br>
        <div>
            <vus-button @click="btn" shape="rounded" type="default">default</vus-button>
            <vus-button @click="btn" shape="rounded" type="info">info</vus-button>
            <vus-button @click="btn" shape="rounded" type="success">success</vus-button>
            <vus-button icon="b" @click="btn" shape="rounded" type="warning">warning</vus-button>
            <vus-button icon="vus-load" @click="btn(1)" shape="rounded" type="error">error</vus-button>
        </div>
        <br>
        <div>
            <vus-button icon="vus-cancel" @click="btn" disabled shape="rounded" type="default">default</vus-button>
            <vus-button @click="btn" disabled shape="rounded" type="default">Vus 因为不一样，所以不一样</vus-button>
            <vus-button @click="btn" disabled shape="rounded" type="info">info</vus-button>
            <vus-button @click="btn" disabled shape="rounded" type="success">success</vus-button>
            <vus-button @click="btn" disabled shape="rounded" type="warning">warning</vus-button>
            <vus-button @click="btn" disabled shape="rounded" type="error">error</vus-button>
        </div>
        <div>
            <vus-button @click="btn" hover long shape="rounded" type="default">default</vus-button>
            <br />
                <vus-icon icon-class="vus-cancel" class-name='custom-class'></vus-icon>
            <vus-button  @click="btn" long shape="rounded" type="info">info</vus-button>
                <vus-icon icon-class="vus-cancel" class-name='custom-class'></vus-icon>
            <br />
            <vus-button @click="btn" long shape="rounded" type="success">success</vus-button>
            <br />
            <vus-button icon="b" long @click="btn" shape="rounded" type="warning">warning</vus-button>
            <br />
            <vus-button icon="vus-cancel" long @click="btn(1)" shape="rounded" type="error">error</vus-button>
            <br />
        </div>
        <div>
            <vus-panel>
                <div slot="title">
                    panel 组件
                </div>
                <div slot="content">
                    123123
                </div>
            </vus-panel>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {

            };
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {
            btn(e){
                // eslint-disable-next-line no-debugger
                debugger
            }
        }
    };
</script>
<style>
    .custom-class{
        color: red;
        width: 66px;
        height: 66px;
    }
    .container{

    }
</style>
