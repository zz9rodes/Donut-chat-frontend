<template>
  <div  class="admin-app">
    <div class="side-bar-section" v-if="!ShowmobileScree">
        <div  class="arrow-tooglles">
                <svgicon :svg="svg.tooglesidebarsmall" style="cursor: pointer;" @click="ToogleSideBar"  v-if="toogle" />
                <svgicon :svg="svg.tooglesidebarlarge" style="cursor: pointer;" @click="ToogleSideBar" v-else />
        </div>
        <Sidebar :Toogle="toogle" @ToogleSideBar="ToogleSideBarWithMenuHamburger"/>
    </div>
    <div class="main-section">
        <div class="header-bar">
         <Headerbar @ToogleSideBar="ToogleSideBarWithMenuHamburger"/>            
        </div>
        <div class="main-frame">
            <RouterView/>
        </div>
    </div>
  </div>
</template>

<script setup>
import {reactive,ref} from 'vue'
import { RouterView } from 'vue-router';
import Sidebar from '../../components/globales/Sidebar.vue'
import Headerbar from '@/components/globales/Headerbar.vue';
import svgicon from '../../components/icons/svgicon.vue'


const svg=reactive({
    tooglesidebarsmall:`<svg xmlns="http://www.w3.org/2000/svg"  width='20px'  height='20px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke=" rgb(203, 206, 209)" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
`,

tooglesidebarlarge:`<svg xmlns="http://www.w3.org/2000/svg"  width='20px'  height='20px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke=" rgb(203, 206, 209)" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

`
})



const toogle=ref(true)
const ShowmobileScree=ref(false)


       

// Methods 

const ToogleSideBar=()=>{
    toogle.value=!toogle.value
}

window.addEventListener('resize', function() {
    DisplaSideBar()

});

window.addEventListener('load', function() {
    DisplaSideBar()
});

const DisplaSideBar=()=>{
    if(window.innerWidth<600){
            ShowmobileScree.value=true
    }else{
        ShowmobileScree.value=false
    }
}

const ToogleSideBarWithMenuHamburger=()=>{
    ShowmobileScree.value=!ShowmobileScree.value
}





</script>

<style scoped>
    .admin-app{
        display: flex;
        height: 100vh;
        width: 100%;
        background-color: white;
    }

    .side-bar-section{
        background-color: #f8fafc;
        border-right: 1px solid rgb(223, 242, 243);
    }

    .main-section{
        flex: 4;
        /* background-color: green; */
        display: flex;
        flex-direction: column;
    }


    .main-frame{
        flex: 4;
        overflow-y: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        --tw-bg-opacity: 1;
        background-color: rgb(248 250 252 / var(--tw-bg-opacity));
    }

    .arrow-tooglles
    {
        display: flex;
        justify-content: flex-end;
        position: relative;
        left: 9px; 
        top: 90%;
    }

    @media screen and (max-width: 600px) {
    .menu-hamburger{
        display: initial;
        cursor: pointer;
    }
    /* .arrow-tooglles{
        display: none;
    } */


    .side-bar-section{
        position: absolute;
        height: 100%;
    }
}
</style>