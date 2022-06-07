<template>
  <div class="container my-lg pt-lg " >
    <div class="header-title pt-lg">
      <h2>Your Messages</h2>
<!--      {{messagesCard}}-->
    </div>
<!--  button to add message  -->
    <v-e-button
        color="success"
        size="big"
        @click="showModal"
    > Add Messages
    </v-e-button>
<!--  model form to input message to add  -->
    <ui-modale
    @closeModal="closeModal"
    >
      <template #formes v-if="addmessage">
        <div class="flex justify-between py-lg">
          <div>
        <textarea
            v-model="message"
            class="inbut-size"
            placeholder="type your message"
            rows="3"
            type="text"
        />
          </div>
          <div>
            <v-e-button
                color="info"
                size="med"
                @click="addMessage"
            > Add
            </v-e-button>
          </div>
        </div>
      </template>
    </ui-modale>
<!--    display all messages  -->
<!--    it has edite , delete and replay action -->
    <message-card
        class="my-lg bg"
        v-for="(crad , i ) in messagesCard"
        :key="i"
        :card="crad"
    />
<!--    modale for edit or replay message-->

  </div>
</template>
<script>
import UiModale from "@/components/UI/UiModale.vue";
import VEButton from "@/components/UI/UiBtn";
import MessageCard from "@/components/MessageCard";

export default {
  components: {MessageCard, VEButton, UiModale},
  data() {
    return {
      addmessage:false,
      message: "",
    };
  },
  computed: {
    messagesCard() {
      return this.$store.getters["messages/messages"]
    }
  },
  methods: {
    showModal() {
      this.addmessage = true ;
      this.$store.commit(
          "messages/TOGLE_MODALE",
      );
    },
    closeModal() {
      this.addmessage = false;
      this.$store.commit(
          "messages/TOGLE_MODALE",
          // this.ShowModal != this.ShowModal
      );
    },
    addMessage() {
      this.$store.dispatch("messages/addMessages", Object.assign({}, {value: this.message}))
      this.$store.commit(
          "messages/TOGLE_MODALE",
      );
          this.addmessage = false;
    },
    getData() {
      this.$store.dispatch("messages/getMessages")
    }
  },
  created() {
    this.getData()
  }
}
</script>
<style>
.bg{
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 2px 5px #eee;
  background: linear-gradient( to right , #0080003d , white);
}
</style>