<template>
    <p>list</p>
    <li v-for="item in listData" :key="item.id" @click="handleDetail">
        {{item.name}}
    </li>
    <button @click="goBack">返回首页</button>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  name: 'List',
  setup(){
      const router = new useRouter()
      const listData = [
        {
          id:1,
          name:'张三'
        },{
          id:2,
          name:'李四'
        },{
          id:3,
          name:'王武'
        },{
          id:4,
          name:'赵六'
        },{
          id:5,
          name:'二麻子'
        },
      ]
      const handleDetail = ()=>{
          router.push('/detail')
      }
      const goBack = ()=>{
      router.go(-1)
      }
      return {goBack,listData,handleDetail}
  }
}

</script>