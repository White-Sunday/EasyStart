<template>
  <div>
    <img src="@/assets/logo.png">
    <router-link to="newcontact"><h1>{{ msg }}</h1></router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      msg: "登录/注册"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
