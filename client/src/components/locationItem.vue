<template >
  <div id="locationcard" >
    <b-card-group deck >
      <b-card >
        <!-- <b-card-text> </b-card-text> -->
        <div>
          <h5>House Number: {{ location.houseno }}</h5>
          <h5>Street Name: {{ location.streetname }}</h5>
          <h5>City: {{ location.city }}</h5>
          <h5>Postal code: {{ location.postalcode }}</h5>
          <!-- <b-button id="close" variant="danger">x</b-button> -->
        </div>

      </b-card>
      <!-- <b-button id="close" variant="danger">x</b-button> -->
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'location-item',
  props: ['location'],
  data() {
    return {}
  }
}
</script>

<style scoped>

@media screen and (max-width: 600px) {
  .detail {
    display: none;
  }
}
.border {
  border-color: peru;
  border-width: 110px;
}
.padding {
  padding: 25px 100px 25px 100px;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  height: auto;
}
.btn {
  background-color: red;
  color: #f1f1e9;
  /* width: 130px; */
  /* padding: 1px 20px; */
  cursor: pointer;
  height: 38px;
  /* font-size: 12px;
    font-weight: 550; */
  box-shadow: 3px 3px 3px 3px #f1f1e9;
  border-radius: 30px;
  border: none;
}
.describe {
  font-size: 18px;
  margin-top: 40px;
  color: peru;
  font-style: oblique;
  font-family: 'Courier New', Courier, monospace;
}
@media screen and (min-width: 600px) {
  .more-info {
    color: red;
  }
}

#locationcard {
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
