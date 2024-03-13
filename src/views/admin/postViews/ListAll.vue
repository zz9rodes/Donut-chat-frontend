<template>
  <div class="tools-toogle">
   <tollsbarfilterVue/>
  </div>
  <div class="app-list-post">
    <postlistTable/>
    <postlistcard />
  </div>
</template>

<script setup>
import postlistcard from "@/components/posts/postlistcard.vue";
import postlistTable from "@/components/posts/postlistTable.vue";
import tollsbarfilterVue from "@/components/posts/tollsbarfilter.vue";
</script>

<style scoped>
.app-list-post,.tools-toogle{
width: 90%;
height: auto;
}


</style>