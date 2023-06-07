<script>
import { defineComponent } from 'vue';
import elementStore from '../store/store';

export default defineComponent({
    data(){
        return{
            clothings: elementStore().$state.arrayStore,
            toggle: elementStore().$state.toggle,   
            showFull: elementStore().$state.showFull,
            singleCloth: elementStore().$state.singleCloth,
            hide: elementStore().$state.hide
        }
    },
    methods:{
        onClick(data){
            this.singleCloth = data
            console.log(this.singleCloth)
        }
    }
})
</script>
<template>
    <div class="bg-[#f5f5f5] w-full h-fit py-6" v-if="hide">
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
        <div  v-if="toggle">
            <!-- background -->
        <!-- <RouterLink to="/onclick">   -->
          <div class="grid lg:grid-cols-4 gap-8 sm:grid-cols-2">
            <div class="h-[500px] w-full rounded-xl bg-white flex flex-col items-center justify-between" v-for="cloth in clothings" v-show=" cloth.category === 'mens clothing'" @click="onClick(cloth), hide = false">
                <p class="text-[#B86EE7] text-[19px] text-center font-semibold">Category: men's clothing</p>
                <img :src=cloth.image width="150" alt="">
                <div class="bg-[#B86EE7] h-[30%] w-full rounded-b-xl p-4 flex flex-col justify-between">
                   <p class="w-full font-semibold">{{ cloth.title }}</p>
                   <p class="w-fit bg-white px-4 py-2 rounded-lg font-bold">${{ cloth.price }}</p>
                </div>
            </div>
          </div>
        <!-- </RouterLink>  -->
        </div>
        <!-- for women -->
        <div class="grid lg:grid-cols-4 gap-8 sm:grid-cols-2" v-else>
            <!-- background -->
            <div class="h-[500px] w-full rounded-xl bg-white flex flex-col items-center justify-between" v-for="cloth in clothings" v-show=" cloth.category === 'womens clothing'" @click="onClick(cloth), hide = false">
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

    <div class="px-4 py-10 md:p-10" v-else>
        <div class="space-y-4">
            <p class="text-gray-700">Back</p>
            <div class="flex md:flex-row md:justify-around items-center w-full h-fit bg-white rounded-lg py-6 flex-col gap-6 shadow-xl">
                <p class="text-3xl font-semibold">{{ singleCloth.title }}</p>
            </div>
        </div>
      <div class="flex flex-col w-full mx-auto md:gap-20 items-center bg-white shadow-xl rounded-lg md:p-20 mt-10  lg:flex-row">
        <img :src=singleCloth.image class="md:w-[300px]" alt="">
        <div class="w-full space-y-4">
            <p class="border-b-2 border-b-[#B86EE7] w-full pb-4 text-3xl text-[#B86EE7]">Product Details</p>
            <p class="text-base font-semibold"><span class="font-bold">Title: </span>{{ singleCloth.title }}</p>
            <p class="text-base font-semibold"><span class="font-bold">Category: </span>{{ singleCloth.category }}</p>
            <p class="text-base font-semibold"><span class="font-bold">Description: </span>{{ singleCloth.description }}</p>
            <p class="font-bold text-[30px] text-[#B86EE7]">${{ singleCloth.price }}</p>
            <p class="w-full text-[20px] py-2 text-white rounded-lg text-center font-semibold mx-auto bg-[#B86EE7]">Add To Cart</p>
        </div>
      </div>
    </div>



</template>