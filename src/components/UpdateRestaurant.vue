<template>
  <div>
    <Header/>
    <h2>Update restaurant</h2>
    <div class="form">
        <input name="name" placeholder="Enter Restaurant name" v-model="restaurant.name">
        <input name="contact" placeholder="Enter Restaurant contact" v-model="restaurant.contact">
        <input name="address" placeholder="Enter Restaurant address" v-model="restaurant.address">

        <button @click="updateRestaurant()">Update restaurant</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name: 'UpdateRestaurant',
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
        async getRestaurantDetails(){
            const result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id)

            this.restaurant = result.data
        },
        async updateRestaurant(){
 const result = await axios.put('http://localhost:3000/restaurants/' + this.$route.params.id, {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address
            })

            if(result.status == 200){
                this.$router.push({name: "Home"})
            }
        }
    },
    mounted(){
        this.getRestaurantDetails()
    }

}
</script>

<style>
.form {
        display: inline-flex;
    flex-direction: column;
}

</style>