<template>
  <div  class="admin-app">
    <div class="side-bar-section">
        <div style="display: flex;justify-content: flex-end;position: relative;left: 13px; top: 80px;">
            <svgicon :svg="svg.tooglesidebar" style="cursor: pointer;" @click="ToogleSideBar"/>
        </div>
        <Sidebar :Toogle="toogle"/>
    </div>
    <div class="main-section">
        <div class="header-bar">
            <h3>Header</h3>
            
        </div>
        <div class="main-frame">
        </div>
    </div>
  </div>
</template>

<script setup>
import {reactive,ref} from 'vue'
import Sidebar from '../../components/globales/Sidebar.vue'
import svgicon from '../../components/icons/svgicon.vue'


const svg=reactive({
    tooglesidebar:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-left-right">
        <path d="m9 7-5 5 5 5"/><path d="m15 7 5 5-5 5"/>
        </svg>`})

const toogle=ref(true)


// Methods 

const ToogleSideBar=()=>{
    toogle.value=!toogle.value
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
    .header-bar{
        /* background-color: blue; */
    }

    .main-frame{
        flex: 4;
        background-color: yellow;
    }
</style>