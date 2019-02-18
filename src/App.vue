<template>
  <div id="app">
    <router-view></router-view>
    <img src="./assets/logo.png">
    <HelloWorld>
      <template slot="testSlot" slot-scope="slotScope">
        我是作用域插槽测试{{slotScope.testSlotValue}}
      </template>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      // testSlotValue:"父亲"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .active{
    color: red;
  }
</style>
