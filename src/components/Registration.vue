<template>
  <h1>Register</h1>
<div class="registration-form">
  <input name="Name" placeholder="Name" type="text" v-model="name">
  <input name="Email ID" placeholder="Email ID" type="text" v-model="email">
  <input name="Password" placeholder="Password" type="text" v-model="password">

  <button @click="signUp()">Sign Up</button>

</div>
<div>
  <router-link to="/login">Login</router-link>
</div>
</template>

<script>
import axios from 'axios'
export default {
data() {
  return{
    name: "",
    email: "",
    password: ""
  }
},
methods: {
  async signUp(){
    let result = await axios.post("http://localhost:3000/users", {
      email: this.email,
      name: this.name,
      password: this.password
    })


    if(result.status == 201){
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
.registration-form {
    display: inline-flex;
    padding: 2rem;
    flex-direction: column;
    width: 20rem;
}


</style>