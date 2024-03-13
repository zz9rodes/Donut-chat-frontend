<script setup>
import svgiconVue from "../icons/svgicon.vue";
import { reactive, ref, defineEmits } from "vue";
const emit = defineEmits();

// datas ,variables, state

const icon = reactive({
  search: `<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
    `,
  table: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid-3x3"><rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/>
        </svg>`,
  card: `<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg>
        `,
});
</script>

<template>
  <div class="container">
    <div class="btn">
        <div>
            <button>Card</button>
        </div>
        <div>
            <button>Table</button>
        </div>
    </div>
    <div class="search-bar">
      <div class="search-bg">
        <svgiconVue :svg="icon.search"/>
        <input type="text" />
      </div>
    </div>
  </div>
</template>



<style scoped>
    .container{
        display: flex;
        /* background-color: red; */
        /* justify-content: space-; */
        flex-wrap: wrap;
    }
    .container>div{
        flex: 2;
        align-items: center;
    }
    .btn{
        display: flex;
        align-items: center;
        height: 35px;

    }
    .search-bar{
        display:flex;
        justify-content: flex-end;
    }

    .search-bg{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0px 5px;
        background-color: yellow;
        width: 300px;
        /* width: 70%; */
        border-radius: 6px;
    }
    input{
        background-color: transparent;
        height: 35px;
        width:100% ;
        border: none;
        /* border-radius: 0.5rem; */
        outline: none;

    }
</style>