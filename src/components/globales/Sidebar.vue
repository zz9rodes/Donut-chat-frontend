<template>
    <div class="side-bar-container">
        <div v-for="menu in Menujson" :key="menu.id" class="menu-item">
            <div class="menu-icon" v-html="menu.icon"></div>
            <Transition name="modal">
                <div class="menu-label" v-if="Toogle">
                    {{ menu.label }}
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, defineProps } from "vue";
import { Menujson } from "./../../utils/MenuJson.js";

const props = defineProps({
    Toogle: {
        type: Boolean,
        required: true,
    },
});
</script>

<style scoped>
.menu-item {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 0px 0px 0px;
    border-radius: 6px 0px 0px 6px;
    cursor: pointer;
    /* background-color: red; */
}



.side-bar-container {
    margin-top: 50px;
    padding: 10px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    /* background-color: blue; */
}
</style>