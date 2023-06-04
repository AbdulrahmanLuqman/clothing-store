<script>
import { defineComponent } from 'vue';
import elementStore from '../store/store';

export default defineComponent({
    data(){
        return{
            clothings: elementStore().$state.arrayStore,
            toggle: elementStore().$state.toggle,        
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
                <p class="text-3xl font-black">Clothing</p>
                <div class="flex flex-col md:flex-row gap-10">
                    <p class="text-lg font-bold hover:bg-[#B86EE7] p-2 hover:rounded-xl hover:text-white" :class="toggle ? 'bg-[#B86EE7] text-white rounded-xl' : 'bg-white'"  @click="() =>toggle = true">Men's Clothing</p>
                    <p class="text-lg font-bold hover:bg-[#B86EE7] p-2 hover:rounded-xl hover:text-white" :class="!toggle ? 'bg-[#B86EE7] text-white rounded-xl' : 'bg-white'"  @click="() =>toggle = false">Women's Clothing</p>
                </div>
            </div>
        </div>
      </div>
       
      <!-- for both -->
      <div class="px-4 md:px-20">
        <!-- for men -->
        <div class="grid lg:grid-cols-4 gap-8 sm:grid-cols-2" v-if="toggle">
            <!-- background -->
            <div class="h-[500px] w-full rounded-xl bg-white flex flex-col items-center justify-between" v-for="cloth in clothings" v-show=" cloth.category === 'mens clothing' ">
                <p class="text-[#B86EE7] text-[19px] text-center font-semibold">Category: men's clothing</p>
                <img :src=cloth.image width="150" alt="">
                <div class="bg-[#B86EE7] h-[30%] w-full rounded-b-xl p-4 flex flex-col justify-between">
                   <p class="w-full font-semibold">{{ cloth.title }}</p>
                   <p class="w-fit bg-white px-4 py-2 rounded-lg font-bold">${{ cloth.price }}</p>
                </div>
            </div>
        </div>
        <!-- for women -->
        <div class="grid lg:grid-cols-4 gap-8 sm:grid-cols-2" v-else>
            <!-- background -->
            <div class="h-[500px] w-full rounded-xl bg-white flex flex-col items-center justify-between" v-for="cloth in clothings" v-show=" cloth.category === 'womens clothing' ">
                <p class="text-[#B86EE7] text-[19px] text-center font-semibold">Category: women's clothing</p>
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