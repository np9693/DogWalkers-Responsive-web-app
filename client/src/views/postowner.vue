<template>
  <div>
    <h4>Register a DogOwner</h4>
    <postowneritem/>
  </div>
</template>

<script>
import Postowneritem from '@/components/postownerItem.vue'

export default {
  components: {
    Postowneritem
  }
}
</script>

<style scoped>
.colors{
color: peru;
}
h4{
  font-size: 28px bold;
  color: peru;
  font-style: oblique;
  font-family: 'Courier New', Courier, monospace;
}
</style>
