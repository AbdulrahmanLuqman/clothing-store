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
   <div class="cont flex w-[300%] z-[-99]">
        <div class="first-bg relative">
            <div class="h-full flex flex-col gap-6 justify-center lg:pl-[100px] lg:w-[50%] pl-10 z-50 absolute">
                <p class="lg:text-2xl text-[#B86EE7] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, atque.</p>
                <p class="text-base text-white font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque ullam optio voluptatum qui incidunt debitis assumenda, officia iste hic ex animi, autem, fugiat est veritatis quidem rem earum modi!</p>
                <p class="w-fit h-fit bg-[#B86EE7] py-2 px-6 rounded-lg font-bold"><RouterLink to="/clothing">view clothing</RouterLink></p>   
            </div>

            <div class="absolute top-0 bg-black h-full w-full opacity-50 z-10"></div>
        </div>
        <div class="sec-bg relative">
            <div class="h-full flex flex-col gap-6 justify-center lg:pl-[100px] lg:w-[50%] pl-10 z-50 absolute">
                <p class="lg:text-2xl text-[#B86EE7] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, atque.</p>
                <p class="text-base text-white font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque ullam optio voluptatum qui incidunt debitis assumenda, officia iste hic ex animi, autem, fugiat est veritatis quidem rem earum modi!</p>
                <p class="w-fit h-fit bg-[#B86EE7] py-2 px-6 rounded-lg font-bold"><RouterLink to="/accessories">view accessories</RouterLink></p>   
            </div>
            <div class="absolute top-0 bg-black h-full w-full opacity-50 z-10"></div>

        </div>
        <div class="third-bg relative">
            <div class="h-full flex flex-col gap-6 justify-center lg:pl-[100px] lg:w-[50%] pl-10 z-50 absolute">
                <p class="lg:text-2xl text-[#B86EE7] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, atque.</p>
                <p class="text-base text-white font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque ullam optio voluptatum qui incidunt debitis assumenda, officia iste hic ex animi, autem, fugiat est veritatis quidem rem earum modi!</p>
                <p class="w-fit h-fit bg-[#B86EE7] py-2 px-6 rounded-lg font-bold"><RouterLink to="/electronics">view electronics</RouterLink></p>   
            </div>
            <div class="absolute top-0 bg-black h-full w-full opacity-50 z-10"></div>

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
    .cont{
        animation: slide 15s infinite 2s alternate ease;
        position: relative;
        overflow: hidden;
    }
    @keyframes slide {
        0%{
            left: 0;
        }
        50%{
            left: -100%;
        }
        100%{
            left: -200%;
        }
    }
</style>