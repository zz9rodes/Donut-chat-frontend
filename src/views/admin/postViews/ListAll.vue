<template>
  <div class="tools-toogle">
   <tollsbarfilterVue @ToogleCard="ToogleToCard" @ToogleTable="ToogleToTable" />
  </div>
  <div class="app-list-post">
    <postlistTable v-if="toogle"/>
    <postlistcard  v-else/>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import postlistcard from "@/components/posts/postlistcard.vue";
import postlistTable from "@/components/posts/postlistTable.vue";
import tollsbarfilterVue from "@/components/posts/tollsbarfilter.vue";

// datas , variables ,state

const  toogle=ref(false)

const ToogleToTable=()=>{
  toogle.value=true
}

const ToogleToCard=()=>{
  toogle.value=false
}
</script>

<style scoped>
.app-list-post,.tools-toogle{
width: 90%;
height: auto;
}


</style>