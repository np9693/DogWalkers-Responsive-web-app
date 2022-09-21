<template >
  <div class="padding">
    <b-card-group deck>
      <b-card bg-variant="light" header="Dog Walker" class="text-center">
        <b-card-text>
          <div>{{ walker.user_name }}</div>
          <div >is charging {{ walker.charge }}</div>
          <h3 class="describe">About The Walker:</h3>
          <p>{{ walker.description }}</p>

          <b-button v-bind:to="'/walkers/' + walker._id">see walker</b-button><br>
          <br>
          <b-button
            variant="danger"
            v-on:click="$emit('del-walker', walker._id)"
            >Delete walker</b-button
          >
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'walker-item',
  props: ['walker'],
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
  padding: 25px 70px 25px 70px;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  height: auto;
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
@media screen and (min-width: 600px) {
  .more-info {
    color: red;
  }
}
</style>
