<script>
import { defineComponent } from 'vue';
import VueCarousel from 'vue-carousel';

export default defineComponent({
    data(){
        return{
            components: { VueCarousel }
        }
    }
})
</script>
<template>
   <div class="carousel-container">
      <vue-carousel>
        <slide class="first-bg">

        </slide>
        <slide class="sec-bg">
        
        </slide>
        <slide class="third-bg">
        
        </slide>
      </vue-carousel>
    </div>
</template>

<style scoped>

    .carousel-container{
        width: 300%;
        display: flex;
    }
    .first-bg{
        background-image: url(../assets/cloth.jpg);
        height: 100vh;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: right;
    }
    .sec-bg{
        background-image: url(../assets/ring.jpg);
        height: 100vh;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: right;
    }
    .third-bg{
        background-image: url(../assets/elect.jpg);
        height: 100vh;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: right;
    }
</style>