<template>
  <div>
    <Header />
    <h2>Add Restaurant</h2>

    <div class="form">
        <input name="name" placeholder="Enter Restaurant name" v-model="restaurant.name">
        <input name="contact" placeholder="Enter Restaurant contact" v-model="restaurant.contact">
        <input name="address" placeholder="Enter Restaurant address" v-model="restaurant.address">

        <button @click="addRestaurant()">Add new restaurant</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name: 'AddRestaurant',
    components: {
        Header
    },
    data(){
        return{
            restaurant: {

                name:'',
                contact: '',
                address: ''
            }
        }
    },
    methods: {
        async addRestaurant(){
            const result = await axios.post('http://localhost:3000/restaurants', {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address
            })

            if(result.status == 201){
                this.$router.push({name: "Home"})
            }

        }
    }

}
</script>

<style>
.form {
        display: inline-flex;
    flex-direction: column;
}

</style>