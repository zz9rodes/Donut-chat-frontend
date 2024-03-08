<template>

  <div class="magicpattern">
    <section>
    <div class="form-bg">
      <form action="">
        <div class="title">
          <h1>Creae you New Account</h1>
        </div>
        <div class="form-control form-input">
          <svgivon :svg="icon.name" />
          <input type="text" id="name" placeholder="name" />
        </div>

        <div class="form-control form-input">
          <svgivon :svg="icon.email" />
          <input type="text" id="email" placeholder="email" />
        </div>

        <div class="form-control form-input">
          <svgivon :svg="icon.password" />
          <input type="password" id="password"  placeholder="........"/>
        </div>

        <div class="form-control" style="display:flex; justify-content: flex-end; color: blue; ">
          <p style="cursor: pointer;">forgot password</p>
        </div>
        <div class="form-control form-submit">

          <input type="submit" />
          
        </div>
      </form>
      
    </div>
  </section>
  </div>
  

</template>

<script setup>
import {reactive} from 'vue'

import svgivon from '../icons/svgicon.vue'

const icon=reactive({
  email:`<svg xmlns="http://www.w3.org/2000/svg"   width='20px'  height='20px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
      `,
  password:`<svg xmlns="http://www.w3.org/2000/svg"   width='20px'  height='20px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
      `,
  name:`<svg xmlns="http://www.w3.org/2000/svg"  width='20px'  height='20px'  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
    `
})

</script>

<style scoped>
@import url('./authentification.css');
</style>