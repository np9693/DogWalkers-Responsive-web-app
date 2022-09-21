<template>
  <div>
      <walkerprofileitem />
  </div>
</template>
<script>
import walkerprofileItem from '../components/walkerprofileItem.vue'

export default {
  name: 'WalkersProfile',
  components: {
    walkerprofileitem: walkerprofileItem
  },
  data() {
    return {
      walker: 'walker',
      errors: [],
      message: '',
      text: ''
    }
  }
}
</script>
