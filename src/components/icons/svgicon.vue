<template>
  <div>
        {{ label }}
        <div class="svg-icon"  v-html="svg"></div>
  </div>
</template>

<script setup>

import {defineProps} from 'vue'

const props=defineProps({
    svg:{
        type:String,
        required:true
    },
    label:{
        type:String,
        required:false
    }
})

</script>

<style scoped>
    .svg-icon{
        display: flex;
        /* background: red; */
    }
</style>