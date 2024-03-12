<script setup>
import { ref, reactive, onMounted } from "vue";
// import Svgicon from '../../icons/Svgicon.vue';
import svgicon from "../icons/svgicon.vue";
import moment from "moment";

const svg = reactive({
  svgaction: `<svg xmlns="http://www.w3.org/2000/svg" heigh="20" width="20" fill="black" viewBox="0 0 24 24" stroke-width="3" stroke="wjite" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>`,
  svgtag: `<svg xmlns="http://www.w3.org/2000/svg" heigh="20" width="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#78716c" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
            </svg>`,
  svgdelete: `<svg xmlns="http://www.w3.org/2000/svg" heigh="17" width="17" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#78716c" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            `,
  svgfilter: `<svg xmlns="http://www.w3.org/2000/svg"  heigh="17" width="17" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#78716c" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
            `,
  svgshare: `<svg xmlns="http://www.w3.org/2000/svg" heigh="20" width="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>`,
  svgcomment: `<svg xmlns="http://www.w3.org/2000/svg" heigh="20" width="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
            `,
  svglike: `<svg xmlns="http://www.w3.org/2000/svg" heigh="20" width="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            `,
  svgfilter:`<svg xmlns="http://www.w3.org/2000/svg"  heigh="20" width="20" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
            `
});

const Posts = ref([]);

onMounted(() => {
  fetchPost();
});

const fetchPost = async () => {
  try {
    const response = await fetch(
      "https://api.storerestapi.com/products/?limit=19"
    );
    const data = await response.json();
    console.log(data);
    data.data.forEach((element) => {
      element.visits = element.price;
      element.progress = Math.floor(Math.random() * 101);
      element.status = ChooseRamdomStatus();
      element.launch_date = moment(element.createAt).format("dddd DD MM YYYY");
    });

    Posts.value = data.data;
    // console.log(Posts.value);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

const ChooseRamdomStatus = () => {
  const Status = ["Waiting", "Canceled", "New", "Delivered", "Progressing..."];
  const randomIndex = Math.floor(Math.random() * Status.length);

  return Status[randomIndex];
};

const CheckSatatusColor = (status) => {
  if (status === "Canceled") {
    return "color-danger"+` progress`;
  } else if (status === "New" || status === "Delivered") {
    return "color-success"+` progress`;
  } else if (status === "Waiting" || status === "Progressing...") {
    return "color-process"+` progress`;
  }
};

const items=ref( [
          { id: 1, data1: 'Donnée 1', data2: 'Donnée 2', data3: 'Donnée 3',data4: 'Donnée 3' },
          { id: 2, data1: 'Donnée 4', data2: 'Donnée 5', data3: 'Donnée 6',data4: 'Donnée 3' },
          { id: 3, data1: 'Donnée 7', data2: 'Donnée 8', data3: 'Donnée 9',data4: 'Donnée 3' }
        ])
</script>

<template>
  <div>
        <div class="post-list">
        <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>status</th>
          <th>Leads</th>
          <th>create_at</th>
          <th>visits</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Posts" :key="item.id">
          <td >
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" style="height: 20px;width: 20px;border-radius: 50%;">
            <div class="post-title" style="">
                <span v-if="item.title.length < 20">{{ item.title }}</span>
                <span v-else>{{ item.title.slice(0, 15) }}...</span>
             </div>
          </td>
          <td>
            <div class="details-values">
              <span :class="CheckSatatusColor(item.status)">
                {{ item.status }}
              </span>
            </div>         
         </td>
          <td>
            <div class="details-values">
              {{ item.visits }}
            </div>
        </td>
          <td>
            <div class="details-values">
              {{ item.launch_date }}
            </div>
        </td>
        <td>
            <div class="progress-bar" >
                <div
                  class="progress"
                  :style="{ width: `${item.progress}%` } "
                  :class="CheckSatatusColor(item.status)"
                ></div>
              </div>
              {{ item.progress }}%
        </td>
        </tr>
      </tbody>
    </table>
       
      <!-- <div class="post" style="" v-for="item in Posts" :key="item.id">
        {{ item.status }}
      </div> -->
    </div>
  </div>
</template>

<style scoped>


/* --------------------s---------------------Search bar ---------------------------------------------- */

.bg-search > input {
  border: none;
  margin: 10px;
  outline: none;
  width: 90%;
  padding-left: 20px;
}

.btn {
  display: flex;
  justify-content: center;
}
.btn > div {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  cursor: pointer;
}

.btn {
  display: flex;
  flex: 1;
}
.btn > div > span {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(241, 241, 245);
  display: flex;
  justify-content: center;
  align-items: center;
}

.del-btn > span:hover {
  background-color: rgba(168, 161, 163, 0.911);
}



/* --------------------------------Post list----------------------------------------- */

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  background-color: rgb(255, 255, 255);
  gap: 4px;
}

.post-list {
  flex: 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  width: 100%;
  overflow-y: auto;
}
.post {
  /* background-color:white;  */
  padding: 10px;
  border-radius: 4px;
  margin: 5px;
  display: flex;
  flex-direction: column;

  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
  border-radius: 0.75rem;
  border: 0 solid #e5e7eb;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.post-header {
  display: flex;
  gap: 20px;
  width: 100%;
  margin-bottom: 10px;
}

.post-title {
  display: flex;
  font-size: clamp(13px, 1.3vw, 17px);
}
.post-details {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.post-details div {
  display: flex;
  margin: 2px;
  align-items: center;
}

.detail-properties {
  flex: 2;
}

.details-values {
  flex: 4;
}

.color-danger {
  color: #dc3545;
  font-size: 12px;
}

.color-success {
  color: #28a745 !important;
  font-size: 12px;
}
.color-process {
  color: #ffc107;
  font-size: 12px;
}
.progress {
  height: 100%;
  /* background-color: rgb(202, 40, 181); */
  border-radius: 4px;
  margin: 0;
  padding: 0;
}

.progress-bar {
  height: 6px;
  width: 100%;
  background-color: rgb(138, 175, 201);
  border-radius: 4px;
}
/* --------------------------------------------------------------------------------- */

.tools {
  /* background-color: red;  */
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
}

.btn-tools {
  flex: 2;
  display: flex;
  gap: 2px;
}

.btn-tools span {
  flex: 2;
  font-size: 10px;
  display: inline;
  cursor: pointer;
}

/* SCROLL- bar */

.post-list {
  --sb-track-color: #ffffff;
  --sb-thumb-color: #ebefed;
  --sb-size: 6px;
}

.post-list::-webkit-scrollbar {
  width: var(--sb-size);
}

.post-list::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 11px;
}

.post-list::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 11px;
}

@supports not selector(::-webkit-scrollbar) {
  .post-list {
    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
  }
}
</style>

<style>
    /* CSS pour styliser la table */
    table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
     
    }
    
    th {
      /* background-color: #f2f2f2; */
      color: #333;
    }
    
    tr:hover {
      background-color: #f5f5f5;
    }
  </style>