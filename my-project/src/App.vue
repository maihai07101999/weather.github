<template>
  <div id="app">
   <Header />
   <!-- <Result /> -->

    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header'
// import Result from './components/user/Result'
// import FormVue from './components/FormVue'

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return{
      msg: {
        user: 'hello các bạn'
      }
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
</style>
