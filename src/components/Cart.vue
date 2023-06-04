<script>
import { defineComponent } from 'vue';
import elementStore from '../store/store';

export default defineComponent({
    data(){
        return{
            clothings: elementStore().$state.arrayStore
        }
    }
})
</script>
<template>
    <div class="bg-[#f5f5f5] w-full h-screen py-6">
        <div class="px-4 py-10 md:p-10">
        <div class="space-y-4">
            <p class="text-gray-700">Back</p>
            <div class="flex md:flex-row md:justify-around items-center w-full h-fit bg-white rounded-lg py-6 flex-col gap-6">
                <p class="text-3xl font-black">Cart</p>
            </div>
        </div>
      </div>
      <p class="text-center text-4xl md:text-6xl font-semibold text-[#8D53A5]">Cart is currently empty</p>
    </div>
    
</template>