<template>
  <div>
    <header-vue></header-vue>
  	<router-link :to="{name:'movie'}">电影</router-link>
  	<router-link :to="{name:'music'}">音乐</router-link>
    <transition><router-view></router-view></transition>
  	<footer-vue></footer-vue>
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