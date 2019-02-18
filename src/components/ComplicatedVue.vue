<template>
    <button v-on:click="sayHello"></button>
</template>
<!--<div id="ComplicatedVue">-->
  <!--如果不使用推荐的template标签 可以用类似angular的方式,根标签写入id,-->
  <!--然后再js中el的值为jquery形式的id选择器-->
<!--</div>-->
<script>
  export default {
    //组件名
    name: "ComplicatedVue",
    //组件视图名
    // el:'#ComplicatedVue',
    //组件数据
    data:function (){
      return {
        msg:'hello'
      }
    },
    //组件交互方法
    methods:{
      sayHello:function () {
        alert('hello');
      }
    },
    //参数列表   传值方式 <todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>
    props:['name'],
    //过滤器
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    //计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter,
   // 现在在运行 vm.fullName = 'John Doe' 时， setter 会被调用， vm.firstName 和 vm.lastName 也会被对应更新。
    computed: {
      fullName: {
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    },
    watch:{
      //和计算属性很像,但是一次只能监听一个值,所以在值的变化引起另一个值的变化的时候下推荐用计算属性代替监听属性,
      //如果是当值变化发起异步请求的时候我们选用watch属性 
      thinking2:function () {
        alert("我落后啦");
      }
    },
    //重定义v-model的value字段 以及 脏检查事件类型
    model: {
      prop: 'checked',
      event: 'change'
    },
    //提供方法给子组件使用
    provide: function () {
      return {
        getMsg: this.msg
      }
    },
    //页面初始化执行的代码,其他生命周期钩子函数 beforeCreate created beforeMount mounted beforeUpdate updated
    //beforeDestroy destroyed
    created() {
      console.log("页面初始化");
    },
    //自定义指令  指令的使用 <input v-focus>
    directives: {
      focus: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    }
  }
</script>

<style scoped>

</style>
