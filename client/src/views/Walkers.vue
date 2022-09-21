<template>
  <div>
    <h1>Here are the list of dogwalkers in our system</h1>
    <p>To delete all the walkers from the system</p>
    <b-button variant="danger" v-on:click="deleteAllWalkers()">Delete all walkers</b-button>
    <div v-for="walker in walkers" :key="walker._id">
      <walker-item v-bind:walker="walker" v-on:del-walker="deleteWalker" />
    </div>
  </div>
</template>

<script>
import WalkerItem from '../components/WalkerItem.vue'
import { Api } from '@/Api'

export default {
  name: 'Walkers',
  components: {
    'walker-item': WalkerItem
  },
  mounted() {
    this.getWalkers()
  },

  methods: {
    getWalkers() {
      Api.get('/walkers')
        .then((response) => {
          console.log(response.data)
          this.walkers = response.data
        })
        .catch((error) => {
          this.message = error
        })
    },
    deleteAllWalkers() {
      Api.delete('/walkers')
        .then((response) => {
          this.walkers = response.data.walkers
        })
        .catch((error) => {
          this.message = error
        })
    },
    deleteWalker(id) {
      console.log(`Delete walker with id ${id}`)
      Api.delete(`/walkers/${id}`).then((response) => {
        const index = this.walkers.findIndex((walker) => walker._id === id)
        this.walkers.splice(index, 1)
      })
        .catch((error) => {
          this.message = error
        })
    }
  },
  data() {
    return {
      walkers: []
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
