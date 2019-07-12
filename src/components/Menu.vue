<template>
    <ul>
        <li v-for="item in items">
            <template v-if="item.type==='menu'">
                <div class="title" v-on:click="changeMenu(item)">{{item.title}}</div>
                <Menu :sliderdata="item.children"></Menu>
            </template>
            <router-link :to="{name:item.name}" v-if="item.type==='link'" v-show="item.showMenu===true">{{item.title}}</router-link>

        </li>
    </ul>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: 'Menu',
        data () {
            return {
                items:this.sliderdata
            };
        },
        props: ["sliderdata"],
        methods: {
            changeMenu:function(item){
                var children = item.children;
                if(children){
                    children.forEach(function (item) {
                        if(item.type==="link"){
                            Vue.set(item,"showMenu" ,!item.showMenu)
                        }
                    });
                }

            }
        }
    }
</script>
<style scoped>
    ul li {
        list-style: none;
        padding: 0px;
        margin: 0px;
        text-align:left;
    }
    .title{
        background: azure;
        border-bottom: aquamarine solid 5px;
    }
    ul {
       margin-left: 10px;
    }
    li {
        background: aqua;
        border-bottom: aquamarine solid 1px;
    }

</style>
