<script>
import { defineComponent } from 'vue';
import elementStore from '../store/store';

export default defineComponent({
    data(){
        return{
            clothings: elementStore().$state.arrayStore,
            toggle: elementStore().$state.toggle,   
            showFull: elementStore().$state.showFull,
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
                    <router-link to="/clothing"><p class="text-lg font-bold hover:bg-[#B86EE7] p-2 hover:rounded-xl hover:text-white" :class="toggle ? 'bg-[#B86EE7] text-white rounded-xl' : 'bg-white'" @click="() =>toggle = true">Men's Clothing</p></router-link>
                    <router-link to="/clothing/women"><p class="text-lg font-bold hover:bg-[#B86EE7] p-2 hover:rounded-xl hover:text-white" :class="!toggle ? 'bg-[#B86EE7] text-white rounded-xl' : 'bg-white'"  @click="() =>toggle = false">Women's Clothing</p></router-link>
                </div>
            </div>
            <router-view></router-view>
        </div>
      </div>
    </div>
       
</template>