<template>
  <div>
  <div :class="{ 'nav-opend': navVisability }" >
    <header class="admin-header" >
        <button class="nav-button-toggle" @click="togleNav">
        <span class="icon">
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
        </span>
      </button>
      <nav>
        <ul class="ui-route">
          <li class="li-route" :class="{ active: $route.name == 'Message' }">
            <router-link to="/dashboard">Message</router-link>
            <!-- <a href="#">HOME</a> -->
          </li>
        </ul>
      </nav>
    </header>
    <div>

    </div>
  </div>

  </div>
</template>
<script>
import messages from "@/store/messages";

export default {
  data() {
    return {};
  },
  computed: {
    navVisability() {
      return this.$store.state.messages.navVisability;
    },
  },
  methods: {
    togleNav() {
      this.$store.commit("messages/NAV_TOGLE");
    },
  },
};
</script>

<style lang="scss">
$adminheaderwidth: 150px;
body {
  padding-left: 40px;
  transition: all 1s ease-in-out;
}
.nav-opend {
  padding-left: $adminheaderwidth;
#admin-content-body {
  }
}
.admin-header {
  transition: all 0.5s ease-in-out;
  width: $adminheaderwidth;
  position: fixed;
  top: 0;
  bottom: 0;
  left: -$adminheaderwidth;
  background-color: #333;
  color: #fff;
  .nav-button-toggle {
    position: absolute;
    transform: translateX($adminheaderwidth);
    background-color: #333;
    border: none;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .nav-opend & {
      //transition: all 0.5s ease-in-out;
      transform: translateX(0);
      opacity: 80%;
      right: 0;
    }
    &:focus {
      outline: none;
    }
    &:hover {
      opacity: 90%;
    }
    .icon {
      width: 100% !important;
      height: 3px;
      position: relative;
      display: block;

      .line {
        width: 100%;
        height: 1px;
        position: absolute;
        display: block;
        background-color: #fff;
        transition: all 0.6s ease-in-out;
        transform-origin: center;

        &-1 {
          transform: translateY(-8px);
          .nav-opend & {
            transform: translateY(0) rotate(45deg);
          }
        }
        &-2 {
          opacity: 1;
          .nav-opend & {
            opacity: 0;
            // display: none;
            transform: translateY(0) rotate(45deg);
          }
        }
        &-3 {
          transform: translateY(8px);
          .nav-opend & {
            transform: translateY(0) rotate(-45deg);
          }
        }
      }
    }
  }
  .nav-opend & {
    left: 0;
  }
  nav {
  }
}
.ui-route {
  padding: 0;
  margin: 0;
  list-style: none;
  margin-top: 50%;

  .li-route {
    font-size: 16px;
    &:hover {
      background-color: #000;
    }
    a {
      display: block;
      color: inherit;
      padding: 15px 20px;
      text-align: center;
      text-decoration: none;
      color: #fff;
    }
  }
  .active {
    background-color: #000;
  }
}
// .active {
//   background-color: red;
// }
</style>
