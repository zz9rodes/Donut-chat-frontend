<template>
  <div>
    <div class="profil-dropbox" @click.stop="console.log('rodes')">
        <div class="user-data">
            <div class="user-image">
                <img :src="user.img" alt="">
            </div>
            <div class="user-name">
                <div>
                    {{ user.name }}
                </div>
            </div>
        </div>
        <div   v-for="icon in Icon" :key="icon.label">
                <svgicon :svg="icon.icon"/>{{ icon.label }}
          </div>   
    </div>
            
                 
  </div>
</template>

<script setup>
import { ref,reactive } from "vue";
import svgicon from '../icons/svgicon.vue'

const user=reactive({
    img:"https://randomuser.me/api/portraits/men/75.jpg",
    name:"John Doe",
    email:"johndoe@gmail.com"
})

const Icon=[
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg"  width='20px'  height='20px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        `,
        label:"profile details"
    },
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg"   width='20px'  height='20px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
        </svg>
        `,
        label:'setting'
    },
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none"   width='20px'  height='20px' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
        `,
        label:'community'
    },
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg"  width='20px'  height='20px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
        `,
        label:'shorcut'
    },
    {
        icon:`
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>
            </svg>
        `,
        label :"Logut"
    }

]
   
        
       
        
    


</script>

<style scoped>
    
    img{
    height: 25px;
    width: 25px;
    border-radius: 50%;
    cursor: pointer;
}


.profil-dropbox{
    background-color: white;
    box-shadow: 1px 1px 5px transparent , -1px -1px 5px rgba(194, 192, 192, 0.575);
    padding: 19px;
    position: absolute;
    top: 50px;
    right: 20px;
    width: 150px;
    height: auto;
    border-radius: 3px;
}
.profil-dropbox >div{
    align-items: center;
    display: flex;
    gap: 10px;
    padding-top: 10px;

}

.profil-dropbox >div:hover{
    background-color:rgba(203, 206, 209, 0.171) ;
}

.user-name{
    color: rgb(203, 206, 209);
    font-weight: bold;
}
</style>