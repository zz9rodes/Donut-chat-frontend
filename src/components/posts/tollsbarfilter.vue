<script setup>
import svgiconVue from "../icons/svgicon.vue";
import { reactive, ref, defineEmits } from "vue";
const emit = defineEmits();

// datas ,variables, state

const icon = reactive({
  search: `<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#e5e7eb" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
    `,
  table: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table"><path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>
`,
  card: `<svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e5e7eb" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg>
        `,
  add:`<svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e5e7eb" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
`
});
</script>

<template>
  <div class="container">
    <div class="btn">
      <div class="btn-bg">
            <button @click="emit('ToogleCard')" class="border-color">
              <svgiconVue :svg="icon.card"/>
            </button>
        
            <button @click="emit('ToogleTable')"  class="border-color">
              <svgiconVue :svg="icon.table"/>
            </button>
            <button   class="border-color">
              <svgiconVue :svg="icon.add"/>
            </button>
      </div>
    </div>
    <div class="search-bar">
      <div class="search-bg  border-color">
        <svgiconVue :svg="icon.search"/>
        <input type="text" placeholder="search post" />
      </div>
    </div>
  </div>
</template>



<style scoped>
    .container{
      margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        padding: 0px 10px;
        border-radius: 0.45rem;
    }

    .border-color{
      border-bottom: 1px solid  rgb(255 255 255 / var( --tw-ring-shadow));
            align-items: center;
            --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
            --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
            box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

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
    .btn-bg{
        display: flex;
        align-items: center;
        height: 35px;
        width: 200px;
        border-radius: 0.55em;
        padding: 2px;
        gap: 5px;
    }
    button{
      height: 100%;
      flex: 1;
      background-color: white;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 0.55em;
    }
    button:hover{
      background-color: #f1f5f9;
    }
    button:nth-child(1){
      border-right: 1px solid rgb(216, 212, 212);
    }

    .search-bg{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0px 5px;
        min-width: auto;
        border-radius: 0.55em;
        background-color: white;
    }
    input{
        background-color: transparent;
        height: 35px;
        width:100% ;
        border: none;
        outline: none;
    }
</style>