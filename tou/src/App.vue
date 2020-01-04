<template>
  <div>
    <form>
      <input type="text" name="name" v-model="name">
      <input type="text" name="age" v-model="age">
      <h1 @click="test">提交</h1>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        age: ''
      }
    },
    methods: {
      test() {
        let name = this.name;
        let age = this.age;
        this.$axios.post('/api/user/addUser', {
          name: name,
          age: age
        }).then(req=>{
          console.log(req)
        })				
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>