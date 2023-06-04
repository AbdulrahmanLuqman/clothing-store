<script>

import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'

export default defineComponent({
  components: { Navbar },
  data() {
    return {

      }
  }

})

</script>

<template>
  <Navbar />

  <RouterView></RouterView>

</template>

<style scoped></style>
