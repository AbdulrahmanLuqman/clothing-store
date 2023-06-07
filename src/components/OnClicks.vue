<script>
import { defineComponent } from 'vue';
import elementStore from '../store/store';


export default defineComponent({
    data(){
        return{
            singleCloth: elementStore().$state.singleCloth,
        }
    },
    
})
</script>

<template>
    <div class="bg-green-400 w-full h-[20vh]">
      {{ singleCloth}}

    </div>
</template>