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
   <div class="flex w-[300%]">
        <div class="first-bg">

        </div>
        <div class="sec-bg">
        
        </div>
        <div class="third-bg">
        
        </div>
    </div>
</template>

<style scoped>
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