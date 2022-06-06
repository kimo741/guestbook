<template>
  <div class="child flex justify-between items-center ">

    <confirm-del
        v-if="conffDel"
        @closeconfirm="closeConfirm"
        @dell="confirmDell"
    >
      are you want to delete this message ?
    </confirm-del>
          <div class="flex">
        <!--   replay button  -->
                <div>
                    <v-e-button  class="mx-sm"  size="small" @click="edeteMessage(card.id)"
                    >Replay
                    </v-e-button>
                </div>
            <!--   delete button  -->
            <div>
                    <v-e-button class="mx-sm" color="error" size="small" @click="deleteMessage(card.id)"
                    >Delete
                    </v-e-button>
                </div>
            <!--   edite button  -->
            <div>
                    <v-e-button class="mx-sm" color="info" size="small" @click="deleteMessage(card.id)"
                    >Edit
                    </v-e-button>
                </div>
          </div>
            <!-- display the pelayes -->
            <div class="card-contact flex ">
                   <P class="card-contact-h1 mx-md"> <span class="card-contact__title"> message: </span>{{ card.value }}</P>
              <div  v-if="card.replay">
                  <P>
                  <span class="card-contact__title">replays:</span>
                    <span
                        v-for="(r, i) in card.replay"
                          class="mt-lg replay "
                    > {{ i +1 }} : {{ r }}  </span>
                  </P>
              </div>
            </div>
  </div>

</template>
<script>
import VEButton from "./UI/UiBtn.vue";
import ConfirmDel from "./UI/ConfirmDel.vue";
export default {
  props: ["card"],
  data(){
    return{
      conffDel:false,
      deletedID:"",
    };
  },
  components: {ConfirmDel, VEButton },
  computed: {
  //   edeteMessage(id) {
  //     return this.$store.state.messages.editeMessage;
  //   },
  //   deleteMessage() {
  //     return this.$store.state.messages.deleteMessage;
  //   },
  },
  methods: {
    closeConfirm(){
      this.conffDel = false;
    },
    confirmDell(){
      console.log(this.deletedID)
      this.$store.dispatch("messages/deleteMessage" ,this.deletedID )
      this.conffDel = false;
    },
    showEdetModal() {
      this.$store.commit(
          "product/Editmodall",
          (this.Edetmodall = !this.Edetmodall)
      );
    },
    deleteMessage(id){
      this.deletedID = id
      this.conffDel = true;
    }
  },
};
</script>
<style lang="scss">
.but-dll {
  align-content: flex-end;
}
.card-contact{
  text-align: left;
&__title{
  font-weight: bolder;
  font-size: 1.5rem;
}

}
.replay{
  //padding-left: 5px;
  position: relative;
  display: block;
  &:after{
    content: "";
    position: absolute;
    background-color: gold;
    border-radius: 50%;
    right: -5px;
    top:-5px;
    width: 5px;
    height: 5px;

  }
}
</style>
