<template>
  <div  class="admin-app">
    <div class="side-bar">
        Lorem ipsum dolor 
    </div>
    <div class="main-section">
        <div class="header-bar">
            <h1>Header</h1>
        </div>
        <div class="main-frame">
            <h1>Frame</h1>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .admin-app{
        display: flex;
        height: 100vh;
        width: 100%;
        background-color: red;
    }

    .main-section{
        flex: 4;
        background-color: green;
        display: flex;
        flex-direction: column;
    }
    .header-bar{
        background-color: blue;
    }

    .main-frame{
        flex: 4;
        background-color: yellow;
    }
</style>