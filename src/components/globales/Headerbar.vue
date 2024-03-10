<template>
  <div class="header-bar-container">
        <div class="title">
            <div class="menu-hamburger" @click.stop="emit('ToogleSideBar')">
                <svgicon :svg="icon.hamburder"/>
            </div>
            <div class="name-app">
                <h1 style="margin: 0;padding: 0;">Donut-chat</h1>
            </div>
        </div>
        <div class="widgets-container">
            <div class="search-container"  >
                <div class="search-btn">
                    <svgicon :svg="icon.search"/>
                </div>
            </div>
           
            <div class="tools" >
                <svgicon :svg="icon.notif"/>
                <svgicon :svg="icon.sms"/>
            </div>
            <div class="profil-container" >
                <div class="profil-img" @click.stop="ToogleDropBox">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="">
                </div>
                <Teleport to="#modal">
                    <Transition name="modal">
                        <div class="bg-modal"  v-if="ShowDropbox" @click.stop="ToogleDropBox">
                            <DropdownProfile/>      
                        </div>          
                    </Transition>
                </Teleport>
            </div>
        </div>
  </div>
</template>

<script setup>
import { ref,reactive,defineEmits} from 'vue';
import svgicon from '../icons/svgicon.vue';
import DropdownProfile from './DropdownProfile.vue';
const emit = defineEmits(['ToogleSideBar'])



const ShowDropbox=ref(false)

const icon=reactive({
    search: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        `,
    notif:`<svg xmlns="http://www.w3.org/2000/svg"  width='20px'  height='20px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>
        `,
    sms:`<svg xmlns="http://www.w3.org/2000/svg"  width='20px'  height='20px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
        `,
    hamburder:`<svg xmlns="http://www.w3.org/2000/svg"  width='30px'  height='30px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        `
})

// methods .. action .. function
const ToogleDropBox=()=>{
    ShowDropbox.value=!ShowDropbox.value
    console.log("EXECUTION");
    console.log(ShowDropbox.value);
}

// window.addEventListener('click',(event)=>{
//     event.preventDefault()
//     event.stopPropagation()
//     ShowDropbox.value=false

// })


</script>

<style scoped>
.header-bar-container{
    display: flex;
    margin: 5px;
}



.title{
    flex: 3;
    display: flex;
    align-items: center;
    gap: 20px;
}

.widgets-container{
    display: flex;
    justify-content: flex-end;
    gap: 30px;
}

.search-container{
    display: flex;
    align-items: center; 
    flex: 2;
    justify-content: center;
}

.search-btn{
     /* border: 1px solid  rgb(230, 227, 222); */
     width: 100px;
     display: flex;
     align-items: center;
     border-radius:8px;
     cursor: pointer;
}

.tools{
    display: flex;
    align-items: center;
     gap: 30px; 
     cursor: pointer;
}


.profil-container{
    display: flex;
    flex-direction: column;
}


.menu-hamburger{
    display: none;
}





@media screen and (max-width: 600px) {
    .menu-hamburger{
        display: initial;
        cursor: pointer;
    }
    .name-app{
        display: none;
    }
}




img{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    cursor: pointer;
}

.bg-modal{
   background-color:  rgba(0, 0, 0, 0) ; 
}



</style>