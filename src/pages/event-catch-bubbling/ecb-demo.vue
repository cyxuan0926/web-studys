<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <!--<div  class="my" ref="cy">-->
          <!--<ul >-->
            <!--<li ref="li">-->
              <!--li-->
              <!--<span ref="span">-->
              <!--span-->
            <!--</span>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
    </div>
</template>

<script>
// js事件是冒泡的，所有this是可以变化的，但是event.target是不会变化，永远指向触发事件的DOM元素本身，event.currentTarget指向绑定事件的元素(和this一样)
// e.preventDefault支持DOM标准的浏览器 否则就是window.event.returnValue=false
// reture false:1.event.preventDefault();2.event.stopPropagation();3.停止回调函数并且立即返回
// 事件捕捉/冒泡:事件流是描述页面中接受事件的顺序 IE(冒泡) 网井是(事件捕获)
export default {
  data () {
    return {
      msg: 'nothing'
    }
  },
  methods: {
    go () {
      console.log('click')
    },
    handle (e) {
      e.stopPropagation()
      let tart = e.target
      let crTart = e.currentTarget
      console.log(111, tart.nodeName.toLocaleLowerCase())
      console.log(222, crTart.nodeName.toLocaleLowerCase())
    }
  },
  mounted () {
    // let name = this.$refs.cy
    // let li = this.$refs.li
    // let span = this.$refs.span
    // name.addEventListener('click', function (e) {
    //   console.log(1)
    //   console.log(111, e.target.nodeName.toLocaleLowerCase())
    //   console.log(222, e.currentTarget.nodeName.toLocaleLowerCase())
    // })
    // li.addEventListener('click', function (e) {
    //   console.log(2)
    //   console.log(111, e.target.nodeName.toLocaleLowerCase())
    //   console.log(222, e.currentTarget.nodeName.toLocaleLowerCase())
    // }, true)
    // span.addEventListener('click', function (e) {
    //   console.log(3)
    //   console.log(111, e.target.nodeName.toLocaleLowerCase())
    //   console.log(222, e.currentTarget.nodeName.toLocaleLowerCase())
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my {
  width: 150px;
  height: 150px;
  border: 1px solid red;
  background: aqua;
}
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  background: red;
}
span {
  background: yellow;
}
</style>
