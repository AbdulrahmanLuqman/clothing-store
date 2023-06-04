<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            
        }
    }
})
</script>
<template>
    <div class="header">
        <div class="first-bg">

        </div>
        <div class="sec-bg">

        </div>
        <div class="third-bg">

        </div>
    </div>
</template>

<style scoped>

    .header{
        
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