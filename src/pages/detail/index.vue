<template>
    <p>detail</p>
    <button @click="handleToList">列表</button>
</template>
<script>
import {useRouter} from 'vue-router'
export default {
  name: 'Detail',
  setup(){
      const router = new useRouter()
      const handleToList = ()=>{
        router.push('/list')
      }
      return {handleToList}
  }
}

</script>