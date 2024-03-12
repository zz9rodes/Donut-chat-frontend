<template>
  <div class="app-list-post">
    <postlistTable/>
    <postlistcard />
  </div>
</template>

<script setup>
import postlistcard from "@/components/posts/postlistcard.vue";
import postlistTable from "@/components/posts/postlistTable.vue";
</script>

<style scoped>
.app-list-post{
width: 90%;
height: auto;

}
</style>