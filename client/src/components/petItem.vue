<template >
  <div id="petcard" >
    <b-card-group deck >
      <b-card >
        <!-- <b-card-text> </b-card-text> -->
        <div>
          <h5>Pet Name: {{ pet.pet_name }}</h5>
          <h5>Breed: {{ pet.pet_breed }}</h5>
          <h5>Age: {{ pet.pet_age }}</h5>
          <!-- <b-button id="close" variant="danger">x</b-button> -->
        </div>

      </b-card>
      <!-- <b-button id="close" variant="danger">x</b-button> -->
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'pet-item',
  props: ['pet'],
  data() {
    return {
      message: '',
      text: ''
    }
  }
}
</script>

<style scoped>
#petcard {
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.075); */
  position: relative;
  width: auto ;
 margin-right: 100px;
 margin-left: 100px;
 background: gainsboro;
}
#close {
  position:inherit;
  height: 30px;
  width: 30px;
  padding: 2px;
  /* margin-left: 10px; */
}

</style>
