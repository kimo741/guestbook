<template>
  <div>
    <drawer-left />
    <router-view></router-view>
  </div>
</template>
<script>

 import DrawerLeft from "@/components/drawer/DrawerLeft";
 export default {
   components: {DrawerLeft}
 }
</script>
<style>

</style>