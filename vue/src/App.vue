<template>
  <div id="nav">
      <!-- Vue中使用router.meta.keepAlive对页面进行缓存 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"
                   v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component"
                 v-if="!$route.meta.keepAlive" />
    </router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
