<template>
         <div class="close" >
            <svgicon :svg="icon.close" @click="emit('ToogleSideBar')"/>
        </div>
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
import { ref, reactive, defineProps ,defineEmits} from "vue";
import { Menujson } from "./../../utils/MenuJson.js";
import svgicon from "../icons/svgicon.vue";

const emit = defineEmits(['ToogleSideBar'])
const props = defineProps({
    Toogle: {
        type: Boolean,
        required: true,
    },
});

const icon=reactive({
    close:`<svg xmlns="http://www.w3.org/2000/svg"   width='30px'  height='30px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9ca3af" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
`
})

</script>

<style scoped>
.menu-item {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 0px 0px 0px;
    border-radius: 6px 0px 0px 6px;
    cursor: pointer;
}



.side-bar-container {
    margin-top: 50px;
    padding: 10px;
    display: flex;
    gap: 20px;
    flex-direction: column;
}
    .close{
        display: none;
    }


@media screen and (max-width: 600px) {
    .close{
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
    }
}
</style>