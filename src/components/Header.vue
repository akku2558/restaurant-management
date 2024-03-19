<template>
  <div class="nav">

    <router-link to="/" >Home</router-link>
    <router-link to="/add-restaurant" >Add restaurant</router-link>
    <a href="#" @click="logout()">Logout</a>
  </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logout(){
            localStorage.clear()
            this.$router.push({name: 'Login'})
        }
    }

}
</script>

<style>
.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a {
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 1rem;
    text-decoration: none;
    margin-right: 2rem;
}
.nav a:hover{
    background-color: #ddd;
    color: #333;
}

</style>