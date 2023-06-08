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
  <div class="overflow-hidden">
    <RouterView></RouterView>
  </div>

</template>

<style scoped></style>
