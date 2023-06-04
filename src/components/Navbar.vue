<script>

  import { defineComponent } from 'vue';
  export default defineComponent({
    data(){
        return{
            slideOut: false

        }
    }
  })

</script>

<template>

    <header class="w-full bg-gray-200 shadow-lg h-[10vh] flex items-center justify-between px-20  max-[963px]:px-4 sticky top-0">

        <RouterLink to="/">
          <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="#B86EE7" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm.5 11H6.3a1 1 0 1 0 0 2h.514l-.287.511a1 1 0 1 0 1.746.978L9.106 15H12.5a1 1 0 0 0 0-2Zm1.893-2.989a1 1 0 0 0-1.797.873l.052.105l3.08 5.5a1 1 0 0 0 1.796-.872l-.052-.106l-.286-.51h.514a1 1 0 0 0 .117-1.994L17.7 13h-1.634l-1.673-2.989Zm-2.52-4.5a1 1 0 0 0-1.797.873l.051.105l.727 1.297l-1.807 3.226a1 1 0 0 0 1.683 1.075l.063-.098l3.08-5.5a1 1 0 0 0-1.683-1.076l-.063.098L12 5.74l-.127-.227Z"/></g></svg>
              <p class="text-2xl font-semibold">Teni<span class="text-[#B86EE7]">Store</span></p>
          </div>
        </RouterLink>

        <div class="flex items-center gap-20 h-full">
            <nav class="flex items-center gap-8 h-full max-[860px]:h-fit max-[860px]:flex-col max-[860px]:bg-gray-200 max-[860px]:absolute max-[860px]:left-[-900px] transition-left duration-700 max-[860px]:top-[60px] max-[860px]:gap-0 max-[860px]:items-start max-[860px]:w-full" :class="slideOut ? 'max-[860px]:left-[0px]' : 'left-[-900px]'">
                <p class="text-[17px] font-semibold hover:bg-[#B86EE7] hover:text-white h-fit py-[19px] w-fit px-10  max-[860px]:w-full cursor-pointer" @click="slideOut = !slideOut"><RouterLink to="/clothing">clothing</RouterLink></p>
                <p class="text-[17px] font-semibold hover:bg-[#B86EE7] hover:text-white h-fit py-[19px] w-fit px-10  max-[860px]:w-full cursor-pointer" @click="slideOut = !slideOut"><RouterLink to="/accessories">accessories</RouterLink></p>
                <p class="text-[17px] font-semibold hover:bg-[#B86EE7] hover:text-white h-fit py-[19px] w-fit px-10  max-[860px]:w-full cursor-pointer" @click="slideOut = !slideOut"><RouterLink to="/electronics">electronics</RouterLink></p>
            </nav>
            <div class="cursor-pointer">
                <RouterLink to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#B86EE7" d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Z"/></svg></RouterLink>
            </div>
        </div>
        <div class="hidden max-[860px]:flex max-[860px]:gap-6" @click="slideOut = !slideOut ">
            <svg v-if="!slideOut" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/></svg>
        </div>
        
    </header>


</template>