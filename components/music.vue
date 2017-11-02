<template>
  <div>
  	我是音乐<br>
  	<router-link :to="{name:'music_huaer'}">花儿乐队</router-link>
  	<router-link :to="{name:'music_pushu'}">朴树 </router-link>
  	<router-view></router-view>
  </div> 
</template>
<script>
export default{
	data(){
		return {}
	}
}
</script>
<style>
</style>