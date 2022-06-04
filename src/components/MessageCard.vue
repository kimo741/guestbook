<template>
  <div class="child">
    <div class="image">
      <v-e-button color="success" size="med" @click="edeteMessage(card.id)"
      >Edit
      </v-e-button>
      <v-e-button color="error" size="med" @click="deleteMessage(card.id)"
      >Delete
      </v-e-button>
    </div>
    <div class="card-contact">
      <h3 class="card-contact-h1">{{ card.message }}</h3>
          <h3 v-if="card.replay.length" >{{ card.replay[0] }}</h3>
    </div>
    <div class="but-dll">
      <slot name="btndll"></slot>
    </div>
  </div>
</template>
<script>
import VEButton from "@/components/UI/UiBtn";
export default {
  props: ["card"],
  components: { VEButton },
  computed: {
    edeteMessage(id) {
      return this.$store.state.messages.editeMessage;
    },
    deleteMessage() {
      return this.$store.state.messages.deleteMessage;
    },
  },
  methods: {
    showEdetModal() {
      this.$store.commit(
          "product/Editmodall",
          (this.Edetmodall = !this.Edetmodall)
      );
    },
  },
};
</script>
<style lang="scss">
.but-dll {
  align-content: flex-end;
}
</style>
