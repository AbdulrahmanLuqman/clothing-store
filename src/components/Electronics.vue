<script>
import { defineComponent } from 'vue';
import elementStore from '../store/store';

export default defineComponent({
    data(){
        return{
            clothings: elementStore().$state.arrayStore,
        }
    }
})
</script>
<template>
    <div class="bg-[#f5f5f5] w-full h-fit py-6">
      <div class="px-4 py-10 md:p-10">
        <div class="space-y-4">
            <p class="text-gray-700">Back</p>
            <div class="flex md:flex-row md:justify-around items-center w-full h-fit bg-white rounded-lg py-6 flex-col gap-6">
                <p class="text-3xl font-black">Electronics</p>
            </div>
        </div>
      </div>
      <!-- for accessories -->
      <div class="px-4 md:px-20">
        <div class="grid lg:grid-cols-4 gap-8 sm:grid-cols-2">
            <!-- background -->
            <div class="h-[500px] w-full rounded-xl bg-white flex flex-col items-center justify-between" v-for="cloth in clothings" v-show="cloth.category === 'electronics'">
                <p class="text-[#B86EE7] text-[19px] text-center font-semibold">Category: jewelery</p>
                <img :src=cloth.image width="150" alt="">
                <div class="bg-[#B86EE7] h-[30%] w-full rounded-b-xl p-4 flex flex-col justify-between">
                   <p class="w-full font-semibold">{{ cloth.title }}</p>
                   <p class="w-fit bg-white px-4 py-2 rounded-lg font-bold">${{ cloth.price }}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>