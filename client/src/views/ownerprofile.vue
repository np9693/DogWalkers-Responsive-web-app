<template>
  <div>
    <ownerprofileitem />
  </div>
</template>
<script>
import ownerprofileItem from '../components/ownerprofileItem.vue'

export default {
  name: 'OwnersProfile',
  components: {
    ownerprofileitem: ownerprofileItem
  },

  data() {
    return {
      owners: 'owner',
      errors: [],
      message: '',
      text: ''
    }
  }
}
</script>

<style scoped>
</style>
