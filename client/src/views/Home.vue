<template>
  <div>
    <div class="container-fluid m-0 p-0">
      <!--Homepage-->
      <div id="home-page" class="full-height bg-#D5CDFC p-4">
        <div class="container pt-3">
          <div class="row pb-5"></div>
          <!--left column-->
          <div class="col-lg-6 pt-4 my-auto">
            <div class="text-center mb-3 d-none d-lg-block">
              <h1 class="display-4">Welcome to our Dog Walker App!!!</h1>
              <h3>Long walks are just better with a dog by your side 💜</h3>
            </div>
            <!--right row, empty row to show the dog pic on the background-->
            <div class="col-lg-6 pt-4 my-auto"></div>
          </div>
          <!--Right column. When the screen is minimized this column will be appearing instead-->
          <div class="col-lg-6">
            <div class="text-center mb-3 d-block d-lg-none">
              <h1 class="display-4">Welcome to our Dog Walker App!!!</h1>
              <h3>Long walks are just better with a dog by your side 💜</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--About-->
    <div id="about">
      <div class="container">
        <div class="row justify-content-center">
          <div class="row justify-content-center text-center mt-5">
            <div class="col-md-4">
              <img src="../assets/dog.png" style="width: 60px; height: 60px" />
              <h4>Jobs</h4>
              <p>Find walkers for your dog or dogs to walk</p>
            </div>
            <div class="col-md-4">
              <img
                src="../assets/placeholder.png"
                style="width: 60px; height: 60px"
              />
              <h4>Location</h4>
              <p>Find nearby walkers or dogs by location</p>
            </div>
            <div class="col-md-4">
              <img
                src="../assets/payment.png"
                style="width: 60px; height: 60px"
              />
              <h4>Payment</h4>
              <p>Make a payment for the walker</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Review-->
    <div id="review" class="p-4">
      <div>
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="../assets/review1.jpg"
                alt="review 1 : Amazing people to find good company while earning money at the same time - Nicole"
              />
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="../assets/review2.jpg"
                alt="I met some some amazing dog walkers to give my dog some love while I am away-Liam"
              />
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="../assets/review3.jpg"
                alt="Best place for animal lovers - Jenna"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
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
.full-height {
  min-height: 100vh;
}

#home-page {
  background-color: #92d2f2;
  background: url('../assets/home_main.jpg') no-repeat center center;
  -webkit-background-size: cover;
  -moz-backgroud-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#about {
  min-height: 40vh;
}

#review {
  background-color: white;
}
button {
  color: #000;
}
</style>
