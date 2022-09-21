<template>
  <div>
    <h1>Walker Profile</h1>
    <div class="registration-form">
      <form>
        <div class="form-icon">
          <span
            ><img src="../assets/user.png" style="width: 100px; height: 100px"
          /></span>
        </div>
        <div class="form-group text-secondary">
          <h6 class="mb-0">Walker First Name: {{ walker.walker_firstname }}</h6>
        </div>
        <div class="form-group text-secondary">
          <h6 class="mb-0">Walker Last Name: {{ walker.walker_lastname }}</h6>
        </div>
        <div class="form-group text-secondary">
          <h6 class="mb-0">Username: {{ walker.user_name }}</h6>
        </div>
        <div class="form-group text-secondary">
          <h6 class="mb-0">charge per hour: {{ walker.charge }}</h6>
        </div>
        <div class="form-group text-secondary">
          <h6 class="mb-0">Phone: {{ walker.phone }}</h6>
        </div>
        <div class="form-group text-secondary">
          <h6 class="mb-0">About the walker: {{ walker.description }}</h6>
        </div>
        <div>
          <b-row>
            <b-col class="padding">
              <b-button id="popover-3">Update walker </b-button>
              <b-popover
                target="popover-3"
                title="Update"
                triggers="hover"
                content="Embedding content using properties is easy"
              >
                <form @submit.prevent="updatewalker">
                  <div>
                    <label for="walker_firstname"></label>
                    <input
                      type="text"
                      placeholder="FirstName"
                      id="walker_firstname"
                      v-model="formData2.walker_firstname"
                    />
                  </div>
                  <div>
                    <label for="walker_lastname"></label>
                    <input
                      type="text"
                      placeholder="LastName"
                      id="walker_lastname"
                      v-model="formData2.walker_lastname"
                    />
                  </div>

                  <div>
                    <label for="user_name"></label>
                    <input
                      type="text"
                      placeholder="UserName"
                      id="user_name"
                      v-model="formData2.user_name"
                    />
                  </div>

                  <div>
                    <label for="charge"></label>
                    <input
                      type="number"
                      placeholder="charge per hour"
                      id="phone"
                      v-model="formData2.phone"
                    />
                  </div>

                  <div>
                    <label for="describe"></label>
                    <input
                      type="text"
                      placeholder="Describe yourself!!"
                      id="describe"
                      v-model="formData2.describe"
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
      <h1>Locations</h1>
      <div>
        <div>
          <!-- Our triggering (target) element -->
          <b-button id="popover-reactive-1" variant="secondary" ref="button">
            Add your location
          </b-button>
        </div>

        <!-- Output from the popover interaction -->
        <b-card
          title="Location"
          v-if="input1Return && input2Return && input3Return && input4Return"
        >
          <p class="card-text" style="max-width: 20rem">
            House Number: <strong>{{ input1Return }}</strong
            ><br />
            Street Name: <strong>{{ input2Return }}</strong
            ><br />
            City: <strong>{{ input3Return }}</strong> <br />
            Postal code: <strong>{{ input4Return }}</strong>
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
            Location Information
          </template>

          <div>
            <b-form-group
              label="House Number"
              label-for="popover-input-1"
              label-cols="3"
              :state="input1state"
              class="mb-1"
              description="Enter house number"
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
              label="Street Name"
              label-for="popover-input-2"
              label-cols="3"
              :state="input2state"
              class="mb-1"
              description="Enter street Name"
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
              label="City"
              label-for="popover-input-4"
              label-cols="3"
              :state="input3state"
              class="mb-1"
              description="Enter city"
              invalid-feedback="This field is required"
            >
              <b-form-input
                ref="input2"
                id="popover-input-3"
                v-model="input3"
                :state="input3state"
                size="sm"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Postal code"
              label-for="popover-input-4"
              label-cols="3"
              :state="input4state"
              class="mb-1"
              description="Enter postal code"
              invalid-feedback="This field is required"
            >
              <b-form-input
                ref="input2"
                id="popover-input-4"
                v-model="input4"
                :state="input4state"
                size="sm"
              ></b-form-input>
            </b-form-group>

            <b-alert show variant="info">Refresh page to view location</b-alert>

            <b-button @click="onClose" size="sm" variant="danger"
              >Cancel</b-button
            >
            <b-button v-on:click="onOk" size="sm" variant="primary"
              >Ok</b-button
            >
          </div>
        </b-popover>
      </div>
      <div v-for="location in locations" :key="location._id">
        <br /><location-item
          v-bind:location="location"
        /><br />
      </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { Api } from '@/Api'
import locationItem from '../components/locationItem.vue'

export default {
  name: 'getwalker',
  components: {
    'location-item': locationItem
  },

  props: {
    walker_firstname: String,
    walker_lastname: String,
    user_name: String,
    charge: Number,
    phone: Number,
    describe: String
  },
  data() {
    return {
      walker: 'walker',
      locations: [],
      errors: [],
      message: '',
      text: '',
      formData2: {
        walker_firstname: '',
        walker_lastname: '',
        user_name: '',
        charge: '',
        phone: '',
        describe: ''
      },
      input1: '',
      input1state: null,
      input2: '',
      input2state: null,
      input3: '',
      input3state: null,
      input4: '',
      input4state: null,
      options: [],
      input1Return: '',
      input2Return: '',
      input3Return: '',
      input4Return: '',
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
    },
    input4(val) {
      if (val) {
        this.input4state = true
      }
    }
  },
  mounted() {
    this.getwalker()
    this.getlocations()
  },
  methods: {
    getwalker() {
      const id = this.$route.params.id
      Api.get(`/walkers/${id}`)
        .then((response) => {
          console.log(response.data)
          this.walker = response.data.walker
        })
        .catch((error) => {
          this.message = error
        })
    },
    updatewalker() {
      const updatewalker = {
        walker_firstname: this.formData2.walker_firstname,
        walker_lastname: this.formData2.walker_lastname,
        user_name: this.formData2.user_name,
        charge: this.formData2.charge,
        phone: this.formData2.phone,
        description: this.formData2.description
      }
      const id = this.$route.params.id

      Api.patch(`http://localhost:3000/api/walkers/${id}`, updatewalker).then(
        (response) => {
          this.walker = response.data
        },
        (error) => {
          console.log(error.response)
        }
      )
    },
    getlocations() {
      const id = this.$route.params.id
      Api.get(`/walkers/${id}/locations`)
        .then((response) => {
          this.locations = response.data.locations
          console.log(this.locations)
        })
        .catch((error) => {
          this.message = error
        })
    },
    postlocation() {
      const id = this.$route.params.id
      Api.post(`/walkers/${id}/locations`, {
        houseno: this.input1,
        streetname: this.input2,
        city: this.input3,
        postalcode: this.input4
      })
        .then((response) => console.log(response))
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
      if (!this.input4) {
        this.input4state = false
      }
      if (this.input1 && this.input2 && this.input3 && this.input4) {
        this.onClose()
        // Return our popover form results
        this.input1Return = this.input1
        this.input2Return = this.input2
        this.input3Return = this.input3
        this.input4Return = this.input4
        this.postlocation(this.input1, this.input2, this.input3, this.input4)
      }
    },
    onShow() {
      // This is called just before the popover is shown
      // Reset our popover form variables
      this.input1 = ''
      this.input2 = ''
      this.input3 = ''
      this.input4 = ''
      this.input1state = null
      this.input2state = null
      this.input3state = null
      this.input4state = null
      this.input1Return = ''
      this.input2Return = ''
      this.input3Return = ''
      this.input4Return = ''
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
