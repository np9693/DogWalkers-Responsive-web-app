
<template>
  <div class="register">
    <b-form @submit.prevent="postowner" class="padding"  >
      <b-form-group id="input-group-1" label-for="dog_owner_firstname">
        <b-form-input
          type="text"
          placeholder="First Name"
          id="dog_owner_firstname"
          v-model="formData.dog_owner_firstname"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="dog_owner_lastname">
        <b-form-input
          type="text"
          placeholder="Last Name"
          id="dog_owner_lastname"
          v-model="formData.dog_owner_lastname"
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

      <b-form-group id="input-group-5" label-for="phone">
        <b-form-input
          type="number"
          placeholder="Phone Number"
          id="phone"
          v-model="formData.phone"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label-for="describe">
        <b-form-input
          type="text"
          placeholder="Describe yourself!!"
          id="describe"
          v-model="formData.describe"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" class="button" >Register</b-button>
    </b-form>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'postowner',
  data() {
    return {
      formData: {
        dog_owner_firstname: '',
        dog_owner_lastname: '',
        user_name: '',
        pets: '',
        phone: '',
        describe: ''
      }
    }
  },

  methods: {
    async postowner() {
      await Api.post('http://localhost:3000/api/dogowners', this.formData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }
  }
}
</script>
<style scoped>
.register input {
  height: 40px;
  display: block;
  border: 3px solid peru;
  border-radius: 5px;
  border-style: inset;
}
.padding {
  padding: 10px 100px 10px 100px;
}
.button {
  background-color: peru;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 15px 50px 15px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
