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
  <div class="overflow-hidden">
    <Navbar />

    <RouterView></RouterView>
  </div>

</template>

<style scoped></style>
