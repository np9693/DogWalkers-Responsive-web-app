<template>
  <div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
      <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
        <h3>Get paid, and playing with dogs at the same time.<br />Why not!</h3>
        <p class="blue-text">
          Register now, and we'll help you connect with dog owners.
        </p>
        <div class="card">
          <form class="form-card" onsubmit="event.preventDefault()">
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >First name<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter your first name"
                  onblur="validate(1)"
                />
              </div>
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Last name<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Enter your last name"
                  onblur="validate(2)"
                />
              </div>
            </div>
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Username<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder=""
                  onblur="validate(3)"
                />
              </div>
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Phone number<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="mob"
                  name="mob"
                  placeholder=""
                  onblur="validate(4)"
                />
              </div>
            </div>
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Charge per-hour<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="job"
                  name="job"
                  placeholder=""
                  onblur="validate(5)"
                />
              </div>
            </div>
            <div class="row justify-content-between text-left">
              <div class="form-group col-12 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Describe about your self<span class="text-danger">
                    *</span
                  ></label
                >
                <input
                  type="text"
                  id="ans"
                  name="ans"
                  placeholder=""
                  onblur="validate(6)"
                />
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="form-group col-sm-6">
                <button type="submit" class="btn-block btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
export default {
  name: 'home',
  components: {},
  data() {
    return {
      message: 'none'
    }
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then((response) => {
          this.message = response.data.message
        })
        .catch((error) => {
          this.message = error
        })
    }
  }
}
</script>

<style>
</style>
