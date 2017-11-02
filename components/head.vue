<template>
  <div class="box">
  	 我是头部组件{{textone}}
  </div>
</template>
<script>
export default{
	data(){
		return {}
	},
	props:["textone"]
}
</script>
<style scoped>
 .box{
 	height:50px;
 	background:yellowgreen;
 }
</style>