<template>
  <div>
    <!-- <div class="container">
    <div class="row"> -->
    <!-- <div class="col-8"> -->
    <h1>Owner Profile</h1>
    <div class="registration-form">
      <form>
        <div class="form-icon">
          <span
            ><img src="../assets/user.png" style="width: 100px; height: 100px"
          /></span>
        </div>
        <div class="form-group">
          <h6 class="mb-0">
            Dog owner First Name: {{ dogowner.dog_owner_firstname }}
          </h6>
        </div>
        <div class="form-group">
          <h6 class="mb-0">
            Dog owner Last Name: {{ dogowner.dog_owner_lastname }}
          </h6>
        </div>
        <div class="form-group">
          <h6 class="mb-0">Username: {{ dogowner.user_name }}</h6>
        </div>
        <div class="form-group">
          <h6 class="mb-0">Phone: {{ dogowner.phone }}</h6>
        </div>
        <div class="form-group">
          <h6 class="mb-0">Summary: {{ dogowner.describe }}</h6>
        </div>
        <div>
          <b-row>
            <b-col class="padding">
              <b-button id="popover-3">Update owner </b-button>
              <b-popover
                target="popover-3"
                title="Update"
                triggers="hover"
                content="Embedding content using properties is easy"
              >
                <form @submit.prevent="updateowner">
                  <div>
                    <label for="dog_owner_firstname"></label>
                    <input
                      type="text"
                      placeholder="First Name"
                      id="dog_owner_firstname"
                      v-model="formData.dog_owner_firstname"
                    />
                  </div>
                  <div>
                    <label for="dog_owner_lastname"></label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      id="dog_owner_lastname"
                      v-model="formData.dog_owner_lastname"
                    />
                  </div>

                  <div>
                    <label for="user_name"></label>
                    <input
                      type="text"
                      placeholder="UserName"
                      id="user_name"
                      v-model="formData.user_name"
                    />
                  </div>

                  <div>
                    <label for="phone"></label>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      id="phone"
                      v-model="formData.phone"
                    />
                  </div>

                  <div>
                    <label for="describe"></label>
                    <input
                      type="text"
                      placeholder="Describe yourself!!"
                      id="describe"
                      v-model="formData.describe"
                    />
                  </div>
                  <b-button type="submit" class="button">update</b-button>
                </form>
              </b-popover>
            </b-col>
          </b-row>
        </div>
      </form>
    </div>

    <div>
      <h1>Pets</h1>
      <div>
        <div>
          <!-- Our triggering (target) element -->
          <b-button id="popover-reactive-1" variant="primary" ref="button">
            Add your pet
          </b-button>
        </div>

        <!-- Output from the popover interaction -->
        <b-card title="Pet" v-if="input1Return && input2Return && input3Return">
          <p class="card-text" style="max-width: 20rem">
            Pet Name: <strong>{{ input1Return }}</strong
            ><br />
            Breed: <strong>{{ input2Return }}</strong
            ><br />
            Age: <strong>{{ input3Return }}</strong>
          </p>
        </b-card>

        <!-- Our popover title and content render container -->
        <!-- We use placement 'auto' so popover fits in the best spot on viewport -->
        <!-- We specify the same container as the trigger button, so that popover is close to button -->
        <b-popover
          target="popover-reactive-1"
          triggers="click"
          :show.sync="popoverShow"
          placement="auto"
          container="my-container"
          ref="popover"
          @show="onShow"
          @shown="onShown"
          @hidden="onHidden"
        >
          <template #title>
            <b-button @click="onClose" class="close" aria-label="Close">
              <span class="d-inline-block" aria-hidden="true">&times;</span>
            </b-button>
            Pet Information
          </template>

          <div>
            <b-form-group
              label="Pet Name"
              label-for="popover-input-1"
              label-cols="3"
              :state="input1state"
              class="mb-1"
              description="Enter pet name"
              invalid-feedback="This field is required"
            >
              <b-form-input
                ref="input1"
                id="popover-input-1"
                v-model="input1"
                :state="input1state"
                size="sm"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Breed"
              label-for="popover-input-2"
              label-cols="3"
              :state="input2state"
              class="mb-1"
              description="Enter pet breed"
              invalid-feedback="This field is required"
            >
              <b-form-input
                ref="input2"
                id="popover-input-2"
                v-model="input2"
                :state="input2state"
                size="sm"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Age"
              label-for="popover-input-3"
              label-cols="3"
              :state="input3state"
              class="mb-1"
              description="Select pet age"
              invalid-feedback="This field is required"
            >
              <b-form-select
                id="popover-input-3"
                v-model="input3"
                :state="input3state"
                :options="options"
                size="sm"
              ></b-form-select>
            </b-form-group>

            <b-alert show variant="info">Refresh page to view pet</b-alert>

            <b-button @click="onClose" size="sm" variant="danger"
              >Cancel</b-button
            >
            <b-button v-on:click="onOk" size="sm" variant="primary"
              >Ok</b-button
            >
          </div>
        </b-popover>
      </div>
      <div v-for="pet in pets" :key="pet._id">
        <br /><pet-item v-bind:pet="pet" /><br />
      </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { Api } from '@/Api'
import petItem from '../components/petItem.vue'

export default {
  name: 'getowner',
  components: {
    'pet-item': petItem
  },

  props: {
    dog_owner_firstname: String,
    dog_owner_lastname: String,
    user_name: String,
    phone: Number,
    describe: String
  },
  data() {
    return {
      dogowner: 'dogowner',
      pets: [],
      errors: [],
      message: '',
      text: '',
      formData: {
        dog_owner_firstname: '',
        dog_owner_lastname: '',
        user_name: '',
        phone: '',
        describe: ''
      },
      input1: '',
      input1state: null,
      input2: '',
      input2state: null,
      input3: '',
      input3state: null,
      options: [
        { text: '- Choose 1 -', value: '' },
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'
      ],
      input1Return: '',
      input2Return: '',
      input3Return: '',
      popoverShow: false
    }
  },
  watch: {
    input1(val) {
      if (val) {
        this.input1state = true
      }
    },
    input2(val) {
      if (val) {
        this.input2state = true
      }
    },
    input3(val) {
      if (val) {
        this.input3state = true
      }
    }
  },
  mounted() {
    this.getowner()
    this.getpets()
  },
  methods: {
    getowner() {
      const id = this.$route.params.id
      Api.get(`http://localhost:3000/api/dogowners/${id}`)
        .then((response) => {
          console.log(response.data)
          this.dogowner = response.data.dogowner
        })
        .catch((error) => {
          this.message = error
        })
    },
    updateowner() {
      const updateowner = {
        dog_owner_firstname: this.formData.dog_owner_firstname,
        dog_owner_lastname: this.formData.dog_owner_lastname,
        user_name: this.formData.user_name,
        phone: this.formData.phone,
        describe: this.formData.describe
      }
      const id = this.$route.params.id

      Api.put(`http://localhost:3000/api/dogowners/${id}`, updateowner).then(
        (response) => {
          this.dogowner = response.data
        },
        (error) => {
          console.log(error.response)
        }
      )
    },
    getpets() {
      const id = this.$route.params.id
      Api.get(`/dogowners/${id}/pets`)
        .then((response) => {
          this.pets = response.data.pets
          console.log(this.pets)
        })
        .catch((error) => {
          this.message = error
        })
    },
    postpet() {
      const id = this.$route.params.id
      Api.post(`/dogowners/${id}/pets`, {
        pet_name: this.input1,
        pet_breed: this.input2,
        pet_age: this.input3
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => console.log(error))
    },
    onClose() {
      this.popoverShow = false
    },
    onOk() {
      if (!this.input1) {
        this.input1state = false
      }
      if (!this.input2) {
        this.input2state = false
      }
      if (!this.input3) {
        this.input3state = false
      }
      if (this.input1 && this.input2 && this.input3) {
        this.onClose()
        // Return our popover form results
        this.input1Return = this.input1
        this.input2Return = this.input2
        this.input3Return = this.input3
        this.postpet(this.input1, this.input2, this.input3)
      }
    },
    onShow() {
      // This is called just before the popover is shown
      // Reset our popover form variables
      this.input1 = ''
      this.input2 = ''
      this.input3 = ''
      this.input1state = null
      this.input2state = null
      this.input3state = null
      this.input1Return = ''
      this.input2Return = ''
      this.input3Return = ''
    },
    onShown() {
      // Called just after the popover has been shown
      // Transfer focus to the first input
      this.focusRef(this.$refs.input1)
    },
    onHidden() {
      // Called just after the popover has finished hiding
      // Bring focus back to the button
      this.focusRef(this.$refs.button)
    },
    focusRef(ref) {
      // Some references may be a component, functional component, or plain element
      // This handles that check before focusing, assuming a `focus()` method exists
      // We do this in a double `$nextTick()` to ensure components have
      // updated & popover positioned first
      this.$nextTick(() => {
        this.$nextTick(() => {
          ;(ref.$el || ref).focus()
        })
      })
    },
    checkForm: function (e) {
      if (this.dog_owner_firstname && this.dog_owner_lastname && this.user_name && this.describe && this.phone) return true
      this.errors = []
      if (!this.dog_owner_firstname) this.erros.push('required')
      if (!this.dog_owner_lastname) this.erros.push('required')
      if (!this.user_name) this.erros.push('required')
      if (!this.describe) this.erros.push('required')
      if (!this.phone) this.erros.push('required')
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
body {
  background-color: #dee9ff;
}

.registration-form {
  padding: 50px 0;
}

.registration-form form {
  background-color: #fff;
  max-width: 600px;
  margin: auto;
  padding: 0px 70px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .form-icon {
  text-align: center;
  background-color: rgb(196, 148, 86);
  border-radius: 50%;
  font-size: 40px;
  color: white;
  width: 100px;
  height: 100px;
  margin: auto;
  margin-bottom: 50px;
  line-height: 100px;
}

.registration-form .item {
  border-radius: 20px;
  margin-bottom: 25px;
  padding: 10px 20px;
}
#popover-2 {
  background-color: peru;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 15px 50px 15px 50px;
  text-align: center;
  margin-bottom: 10px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#popover-3 {
  background-color: peru;
  border: none;
  border-radius: 5px;
  color: white;
  margin-bottom: 10px;
  padding: 15px 50px 15px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
h1 {
  font-size: 28px bold;
  color: peru;
  font-style: oblique;
  font-family: 'Courier New', Courier, monospace;
}
</style>
