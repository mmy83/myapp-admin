<template>
  <div id="app">
    <div id="nav">
      <div id="logo">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div id="left">
      <Menu :sliderdata="sldeData"></Menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Menu from '@/components/Menu.vue'
  export default {
    components:{
      Menu
    },
    data(){
      return {
        sldeData:[
          {
            type:"menu",
            title:"first menu",
            children:[
              {
                type:"link",
                name:"home.welcome",
                title:"Welcome"
              },
              {
                type:"link",
                name:"home.about",
                title:"About"
              },
              {
                type:"menu",
                title:"second menu",
                children:[
                  {
                    type:"link",
                    name:"home.welcome",
                    title:"Welcome"
                  },
                  {
                    type:"link",
                    name:"home.about",
                    title:"About"
                  },
                  {
                    type:"menu",
                    title:"third menu",
                    children:[
                      {
                        type:"link",
                        name:"home.welcome",
                        title:"Welcome"
                      },
                      {
                        type:"link",
                        name:"home.about",
                        title:"About"
                      },
                    ]
                  }
                ]
              }
            ]
          },
          {
            type:"menu",
            title:"first menu",
            children:[
              {
                type:"link",
                name:"home.welcome",
                title:"Welcome"
              },
              {
                type:"link",
                name:"home.about",
                title:"About"
              },
              {
                type:"menu",
                title:"second menu",
                children:[
                  {
                    type:"link",
                    name:"home.welcome",
                    title:"Welcome"
                  },
                  {
                    type:"link",
                    name:"home.about",
                    title:"About"
                  },
                  {
                    type:"menu",
                    title:"third menu",
                    children:[
                      {
                        type:"link",
                        name:"home.welcome",
                        title:"Welcome"
                      },
                      {
                        type:"link",
                        name:"home.about",
                        title:"About"
                      },
                    ]
                  }
                ]
              }
            ]
          },
        ]
      }
    }
  }
</script>

<style>
  html ,body ,div,ul ,li {
    margin: 0px;
    padding: 0px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  #nav {
    background: aqua;
    height: 100px;
  }
  #logo {
    width: 60px;
    height: 60px;
    float: left;
    padding: 20px 70px;
  }
  #logo img {
    width: 60px;
    height: 60px;
  }
  #left {
    width:200px;
    float: left;
    background: aquamarine;
    padding-right: 10px;
  }

</style>
