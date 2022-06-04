<template>
  <div class="container my-lg">
    <div class="header-title">
      <h1>Your Messages</h1>
    </div>
    <v-e-button
        size="big"
        color="success"
        @click="showModal"
    > Add Messages </v-e-button>
    <ui-modale>
      <template #formes>
        <div class="flex justify-between py-lg">
          <div>
        <textarea
            rows="3"
            type="text"
            v-model="message"
            placeholder="type your message"
            class="inbut-size"
        />
          </div>
          <div>
            <v-e-button
                size="med"
                color="info"
                @click="addMessage"
            > Add </v-e-button>
          </div>
        </div>
      </template>
    </ui-modale>
    {{messagesCard}}
<message-card
v-for="(crad , i ) in messagesCard"
:key="i"
:card="crad"

/>
  </div>
</template>
<script>
import UiModale from "@/components/UI/UiModale.vue";
import VEButton from "@/components/UI/UiBtn";
import MessageCard from "@/components/MessageCard";
export default {
  components: {MessageCard, VEButton, UiModale},
  data(){
    return{
    message: '',
    };
  },
  computed:{
    messagesCard(){
      this.$store.getters["messages/messages"]
    }
  },
  methods:{
    showModal() {
      this.$store.commit(
          "messages/TOGLE_MODALE",
      );
    },
    addMessage(){

      this.$store.commit(
          "messages/TOGLE_MODALE",
      );
    },
    getData(){
      this.$store.dispatch("messages/getMessages")
    }
  },
  created() {
    this.getData()
  }
}
</script>