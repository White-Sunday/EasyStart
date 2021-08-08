<template>
  <div>
    <img src="@/assets/logo.png">
    <router-link to="newcontact"><h1>{{ msg }}</h1></router-link>
    <br>
    <h3>get:{{count}}</h3>
    <br>
    <el-row :gutter="6" type="flex" justify="center">
      <el-col :span="3">
        <el-button type="success" round @click="add(10)">+</el-button>
      </el-col>
      <el-col :span="3">
        <el-button type="success" round @click="sub(10)">-</el-button>
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="6" type="flex" justify="center">
      <el-col :span="3">
        <el-button type="success" round @click="add2(10)">异步增加</el-button>
      </el-col>
      <el-col :span="3">
        <el-button type="success" round @click="sub2(10)">异步减少</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      msg: "登录/注册",
    }
  },
  methods:{
    add(n){
      this.$store.commit('mutationsAddCount',n);
    },
    sub(n){
      this.$store.commit('mutationsReduceCount',n);
    },
    add2(n){
      this.$store.dispatch('actionsAddCount',n)
    },
    sub2(n){
      this.$store.dispatch('actionsReduceCount',n)
    }
  },
  computed:{
    count(){
      return this.$store.getters.getterCount(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
