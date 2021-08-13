<template>
  <div>
    <router-view></router-view>
    <!-- <p @click="handleAdd">{{age}}</p>
    <p>{{obj.name}}</p>
    <p>{{obj.sex}}</p>
    <p>{{obj.num}}</p> -->
  </div>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  name: 'App',
  setup(){
    const obj = reactive({
      name: 'cookie',
      sex: '男',
      num: 1
    })
    const age = ref(0)
    const handleAdd = ()=>{
      age.value++
      obj.num++
    }
    return {age, handleAdd,obj}
  }
}

</script>
