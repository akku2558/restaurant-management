<template>
  <div>
    <Header />
    <h2>Hello {{ name }}, Welcome to the home page</h2>
    <div class="table">
      <table border="1px">
        <tr>
          <td>Sr. No</td>
          <td>Name</td>
          <td>Contact</td>
          <td>Address</td>
          <td>Actions</td>
        </tr>
        <tr v-for="item in restaurantList" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.contact}}</td>
          <td>{{item.address}}</td>
          <td><router-link :to="'/update-restaurant/' + item.id">Update</router-link>
          <button @click="deleteRestaurant(item.id)">Delete</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from "./Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      restaurantList: [],
      id: this.$route.params.id,
      dataObj: {
        "id": 1,
        "name": "Akanksha",
      }
    };
  },
  methods: {
    async getRestaurantList(){
      let result = await axios.get('http://localhost:3000/restaurants')

      this.restaurantList = result.data
    },
    async deleteRestaurant(id){
      let result = await axios.delete('http://localhost:3000/restaurants/' + id)

      if (result.status == 200){
      this.getRestaurantList()
      }
    }
  },
  mounted() {
    let user = localStorage.getItem("user-info");
  this.name =  JSON.parse(user).name
    if (!user) {
      this.$router.push({ name: "Registration" });
    }

    this.getRestaurantList()
  },
};
</script>

<style>
.table td{
  width: 1rem;
  height: 1rem;
  padding: 1rem;
}
</style>