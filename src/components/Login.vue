<template>
  <h2>Login</h2>
  <div class="login">
    <input type="text" name="email" v-model="email" placeholder="Enter email">
    <input type="text" name="password" v-model="password" placeholder="Enter password">
    <button @click="login()">Login</button>
  </div>
  <div>
    <router-link to="/registration">Sign Up</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
        email: '',
        password: ''
    }
},
methods: {
    async login(){
        let result = await axios(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)


        if (result.status == 200 && result.data.length > 0){
            localStorage.setItem("user-info", JSON.stringify(result.data[0]))
            this.$router.push({name: "Home"})
        }
    }
},
mounted(){
     let user = localStorage.getItem("user-info")
  if (user){
    this.$router.push({name: 'Home'})
  }
}
}
</script>

<style>
.login {
        display: inline-flex;
    flex-direction: column;
}

</style>