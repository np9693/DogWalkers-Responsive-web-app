
<template>
  <div class="padding">
    <b-card-group deck>
      <b-card bg-variant="light" header="Dog Owner" class="text-center">
        <b-card-text>
          <div>The owner is {{ owner.dog_owner_firstname }} {{ owner.dog_owner_lastname }}</div>
          <h3 class="describe">About The Owner:</h3>
          <p>{{ owner.describe }}</p>
          <b-button v-bind:to="'/dogowners/' + owner._id">See owner</b-button
          ><br>
          <br />
          <b-button
            variant="danger"
            class="button"
            v-on:click="$emit('del-owner', owner._id)"
            >Delete owner</b-button
          ><br />
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'dogowner-item',
  props: ['owner'],
  data() {
    return {
      message: '',
      text: ''
    }
  }
}
</script>
<style scoped>
@media screen and (min-width: 600px) {
  .more-info {
    color: red;
  }
}
body {
  margin: 0;
  padding: 0;
  background-color: #f1f1e9;
  font-family: sans-serif;
}
.team-container {
  width: 100%;
  height: auto;
  background-color: #f1f1e9;
}
.text {
  font-size: 25px;
  margin-top: 40px;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 768px) {
  .row {
    width: 100%;
  }
}

img {
  width: 80px;
  height: 80px;
  border-radius: 50px;
}
.btn {
  background-color: peru;
  color: #f1f1e9;
  cursor: pointer;
  height: 38px;
}
.profile-image {
  text-align: center;
}
.desc {
  text-align: center;
}
.desc h2 {
  color: #3b3974;
  font-size: 20px;
}
.desc p {
  font-size: 13px;
  line-height: 1.3em;
  margin-top: -10px;
  color: #000000;
}

.btn {
  background-color: peru;
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
  padding: 25px 70px 25px 70px;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  height: auto;
}

@media screen and (min-width: 600px) {
  .more-info {
    color: red;
  }
}
</style>
