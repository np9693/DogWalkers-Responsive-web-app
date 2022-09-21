<template>
  <div>
    <h4>Register a DogWalker</h4>
    <postwalkeritem/>
  </div>
</template>

<script>
import Postwalkeritem from '@/components/postwalkerItem.vue'

export default {
  components: {
    Postwalkeritem
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
