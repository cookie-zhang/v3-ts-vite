<!--
 * @Author: zhangjianfei
 * @Email: 
 * @Date: 2021-08-13 10:02:57
 * @LastEditors: zhangjianfei
 * @LastEditTime: 2021-08-13 12:18:58
 * @Description: 
-->
<template>
    <p>home</p>
    <button @click="handleToList">列表</button><br/><br/>
    <button @click="handleToVuexPage">Vuex</button>
</template>
<script>
import {useRouter} from 'vue-router'
export default {
  name: 'Home',
  setup(){
      const router = new useRouter()
      const handleToList = ()=>{
        router.push('/list')
      }
      const handleToVuexPage = ()=>{
        router.push('/vuex')
      }
      return {handleToList,handleToVuexPage}
  }
}

</script>