
<template>
  <div class="register">
    <form @submit.prevent="postwalker" @reset="onReset" class="padding">
       <b-form-group id="input-group-1" label-for="walker_firstname">
        <b-form-input
          type="text"
          id="walker_firstname"
          placeholder="FirstName"
          v-model="formData.walker_firstname"
        ></b-form-input>
        </b-form-group>

     <b-form-group id="input-group-2" label-for="walker_lastname">
        <b-form-input
          type="text"
          placeholder="LastName"
          id="walker_lastname"
          v-model="formData.walker_lastname"
        ></b-form-input>
      </b-form-group>

<b-form-group id="input-group-3" label-for="user_name">
        <b-form-input
          type="text"
          placeholder="UserName"
          id="user_name"
          v-model="formData.user_name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label-for="charge">
        <b-form-input
          type="text"
          placeholder="charge per hour"
          id="charge"
          v-model="formData.charge"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label-for="phone">
        <b-form-input
          type="number"
          placeholder="Phone Number"
          id="phone"
          v-model="formData.phone"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label-for="description">
        <b-form-input
          type="text"
          placeholder="Describe yourself!!"
          id="description"
          v-model="formData.description"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" class="button">Register</b-button>
    </form>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'postwalker',
  data() {
    return {
      formData: {
        walker_firstname: '',
        walker_lastname: '',
        user_name: '',
        charge: '',
        phone: '',
        description: ''
      }
    }
  },
  methods: {
    postwalker() {
      Api
        .post('http://localhost:3000/api/walkers', this.formData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }
  }
}
</script>
<style scoped>
.register input{
  height: 40px;
  display: block;
  border: 3px solid peru;
  border-radius: 5px;
  border-style: inset;
}
.button {
  background-color: peru;
  border: none;
  /* margin: 20px; */
  border-radius: 5px;
  color: white;
  padding: 15px 50px 15px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.padding {
  padding: 10px 100px 10px 100px;
}
</style>
