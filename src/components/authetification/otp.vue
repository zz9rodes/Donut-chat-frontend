<template>
  <div class="magicpattern">
    <section>
      <div class="form-bg">
        <form action="">
          <div class="title">
            <h1>Coce Verification</h1>
          </div>
          <div class="form-control" style="display: flex;justify-content: center;">
            <div class="content" >
              <div class="inp">
                <input maxlength="1" class="input"  placeholder="" />
                <input maxlength="1" class="input"  placeholder="" />
                <input maxlength="1" class="input"  placeholder="" />
                <input maxlength="1" class="input"  placeholder="" />
              </div>
            </div>
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
import { reactive } from "vue";

import svgivon from "../icons/svgicon.vue";
</script>

<style scoped>
/* @import url("./authentification.css"); */






.magicpattern { 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: repeat;
    background-image: url("data:image/svg+xml;utf8,%3Csvg width=%222000%22 height=%221000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22a%22 gradientTransform=%22rotate(90)%22%3E%3Cstop offset=%225%25%22 stop-color=%22%23fcfdff%22%2F%3E%3Cstop offset=%2295%25%22 stop-color=%22%23fcfdff%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath fill=%22%23396bde%22 d=%22M0 0h2000v1000H0z%22%2F%3E%3Cpath d=%22M0 500c85.53 74.343 171.06 148.686 288 106 116.94-42.686 265.293-202.4 386-206 120.707-3.6 213.77 148.914 328 215 114.23 66.086 249.629 45.745 367-4 117.371-49.745 216.715-128.893 342-160s276.51-14.173 329 2c52.49 16.173 6.245 31.587 0 47l-40 500H0Z%22 fill=%22url(%23a)%22%2F%3E%3C%2Fsvg%3E");
  }
  
  
  
  section {
    width: 30%;
    min-width: 400px;
    height: 70%;
    display: flex;
    justify-content: center;
    background-color: red;
    border-radius: 18px;
    padding: 20px;
  
  
  background: rgba(255,255,255,0.25);
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);
  border: 1px solid rgba(255,255,255,0.125);
  }
  
  .form-bg {
    background-color: rgb(253, 253, 255);
    width: 100%;
    height: 100%;
    min-width: 300px;
    border: 1px solid rgb(230, 224, 224);
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-top: 100px; */
    position: relative;
    border-radius: 4px;
    border-radius: 18px; 
  }
  
  
  
  
  form{
  width: 80%;
  max-width: 600px;
  /* height: 90%; */
  min-height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  align-items: center;
  gap: 25px;
  
  }

  form >div{
    flex: 1;
  }
  
  .form-control{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-radius: 4px;
    gap: 10px;
  }
  
  .form-input{
    border: 1px solid rgb(194, 191, 191);
    border-radius: 15px;
    font-size: 19px;
  }
  
  input[type='text'],
  input[type='password']{
    width: 100%;
      height: 40px;
      border-radius: 4px;
      border: none;
      background: transparent;
      outline: none;
  }
  
  .form-submit{
    display: flex;
    justify-content: flex-end;
    padding: 0;
  }
  input[type=submit]{
    height: 40px;
    width: 100%;
    background-color: #5585f5;
    border: 1px solid rgb(185, 181, 181);
    color: white;
    border-radius: 15px;
    cursor: pointer;
  }














/* -------------------------------------------------- */




.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
  margin-bottom: auto;
}


.inp {
  margin-left: auto;
  margin-right: auto;
  white-space: 4px;
  display: flex;
  /* background-color: red; */
}

.input + .input {
  margin-left: 0.5em
}

.input {
  color: #000000;
  height: 2em;
  width: 2em;
  float: left;
  text-align: center;
  background: #3375cc00;
  outline: none;
  border: 1px #396BDE solid;
  border-radius: 5px;
  /* transition: all 0.6s ease; */
  font-size: larger;
}





.form button {
  margin-left: auto;
  margin-right: auto;
  background-color: #00000000;
  color: #fff;
  width: 8.5em;
  height: 2.3em;
  border: #fff 0.1em solid;
  border-radius: 5px;
  transition: all 0.5s ease;
}



</style>