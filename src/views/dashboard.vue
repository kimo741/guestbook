<template>
  <div class="relative">
    <nav class="nav" >
        <div class="mx-md" >
           <h1>Guset Note</h1>
        </div>
    </nav>
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
.nav{
  position: fixed;
  top: 0;
  left: 0;
  height: 5%;
  width: 100%;
  box-shadow: 1px 1px 5px #ccc;
  text-align: right;
  color: black;
}
.relative{
  position: relative;
}
</style>