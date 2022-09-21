
<template>
  <div>
    <h1>Here are the list of dogowners in our system</h1>
    <p>To delete all the owners from the system</p>
    <b-button variant="danger" v-on:click="deleteAllOwners()">Delete all owners</b-button>
    <div v-for="owner in dogowners" :key="owner._id">
      <dogowner-item v-bind:owner="owner" v-on:del-owner="deleteOwner"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import dogownerItem from '../components/dogownerItem.vue'

export default {
  name: 'Dogowners',
  components: {
    'dogowner-item': dogownerItem
  },
  mounted() {
    this.getDogowners()
  },
  methods: {
    getDogowners() {
      Api.get('/dogowners')
        .then((response) => {
          console.log(response.data)
          this.dogowners = response.data
        })
        .catch((error) => {
          this.message = error
        })
    },
    deleteOwner(id) {
      console.log(`Delete owner with id ${id}`)
      Api.delete(`/dogowners/${id}`).then((response) => {
        const index = this.dogowners.findIndex((dogowner) => dogowner._id === id)
        this.dogowners.splice(index, 1)
      })
        .catch((error) => {
          this.message = error
        })
    },
    deleteAllOwners() {
      Api.delete('/dogowners')
        .then((response) => {
          this.dogowners = response.data.dogowners
        })
        .catch((error) => {
          this.message = error
        })
    }
  },
  data() {
    return {
      dogowners: []
    }
  }
}
</script>
<style scoped>
h1{
  font-size: 28px bold;
  color: peru;
  font-style: oblique;
  font-family: 'Courier New', Courier, monospace;
}
button{
  color: white;
  padding: 10px 10px 10px 10px;
}
p{
font-style: oblique;
padding: 10px 10px 0px 10px;
  font-family: 'Courier New', Courier, monospace;
}
</style>
