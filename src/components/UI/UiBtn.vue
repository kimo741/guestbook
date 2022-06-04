<template>
  <div>
    <button
        :type="type"
        :class="['ve-btn', `ve-btn-${color}`, `ve-${size}`]"
        @click="$emit('click')"
        :disabled="disabled"
    >
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "VEButton",

  props: {
    type: {
      type: String,
      require: false,
      default: "button",
      validator: function (value) {
        return ["button", "submit"].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
      require: false,
      default: "default",
      validator: function (value) {
        return (
            ["success", "info", "error", "animate-dark", "animate-light"].indexOf(
                value
            ) !== -1
        );
      },
    },
    size: {
      type: String,
      require: false,
      default: "med",
      validator: function (value) {
        return ["small", "med", "big"].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      require: false,
      default: false,
    },
    loading: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.ve-small {
  padding:13px;
  font-size: 12px;
}
.ve-med {
  padding:15px;
  font-size: 15px;
}
.ve-big {
  padding:18px;
  font-size: 17px;
}
.ve-btn {
  box-sizing: border-box;
  // width: 70px;
  // height: 30px;
  border: none;
  cursor: pointer;
  text-align: center;
  background-color: #eee;
  border-radius: 4px;

  .disabledd & {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.5;
  }
  &-success {
    background-color: #42b983 !important;
    color: #fff;
  }
  &-info {
    background-color: #29b636 !important;
    color: #fff;
  }
  &-error {
    background-color: #f44336 !important;
    color: #fff;
  }
  &-animate-light {
    color: #fff;
    animation: black 15s ease infinite;
    background: linear-gradient(-45deg, #000000af, #c7c7c770, #4a4a4a70);
  }
  &-animate-dark {
    color: #12121282;
    animation: white 15s ease infinite;
    background: linear-gradient(-45deg, #fff, #c7c7c770, #55545470);
  }
}

@keyframes black {
  0% {
    background-position: 0% 50%;
    box-shadow: 0 -3px 5px 2px #000000af;
  }
  50% {
    background-position: 100% 50%;
    box-shadow: 0 -3px 5px 2px #12121282;
  }
  100% {
    background-position: 0% 50%;
    box-shadow: 0 -2px 5px 2px #4a4a4a70;
  }
}
@keyframes white {
  0% {
    background-position: 0% 50%;
    box-shadow: 0 -3px 5px 2px #fff;
  }
  50% {
    background-position: 100% 50%;
    box-shadow: 0 -3px 5px 2px #c7c7c770;
  }
  100% {
    background-position: 0% 50%;
    box-shadow: 0 -2px 5px 2px #55545470;
  }
}
</style>
