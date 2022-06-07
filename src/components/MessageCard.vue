<template>
  <div class="child flex justify-between items-center ">
<!---->
    <v-e-modal
        v-if="edditAndRep"
        @closeModal="closeModal"
    >
      <template #formes>
        <div class="flex justify-between py-lg">
          <div>
        <textarea
            v-model="compVal"
            class="inbut-size"
            placeholder=" Edite Message"
            rows="3"
            type="text"
        />
          </div>
          <div>
            <v-e-button
                v-if="edite"
                color="info"
                size="med"
                @click="doneEdite"
            > update
            </v-e-button>
            <v-e-button
                v-else
                color="info"
                size="med"
                @click="doneAddReplay"
            > add
            </v-e-button>
          </div>
        </div>
      </template>
    </v-e-modal>

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
        <v-e-button class="mx-sm" size="small" @click="replayMessage(card)"
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
        <v-e-button class="mx-sm" color="info" size="small" @click="editeMessage(card)"
        >Edit
        </v-e-button>
      </div>
    </div>
    <!-- display the pelayes -->
    <div class="card-contact flex ">
      <P class="card-contact-h1 mx-md"><span class="card-contact__title"> Message: </span>{{ card.value }}</P>
      <div class="" v-if="card.replay">
        <P class="replay-text">
          <span class="tit">Replay:</span>
          <span class="mt-lg replay " >
              {{ card.replay[0] }} </span>
        </P>
      </div>
    </div>
  </div>

</template>
<script>
import VEButton from "./UI/UiBtn.vue";
import ConfirmDel from "./UI/ConfirmDel.vue";
import VEModal from "@/components/UI/UiModale";

export default {
  props: ["card"],
  data() {
    return {
      edite: false,
      conffDel: false,
      deletedID: "",
      modale: false,
      editeValue: "",
      addReplay: "",
      edditAndRep: false,
    };
  },
  components: {VEModal, ConfirmDel, VEButton, UiModale: VEModal},

  computed: {
    compVal: {
      get() {
        if (this.edite) {
          return this.editeValue.value
        } else {
           return this.addReplay.replay
        }
      },
      set(val) {
        if (this.edite) {
          this.editeValue.value = val
        } else{
          this.addReplay['replay'] = [val];
        }
      }
    },
  },
  methods: {
    closeModal() {
      this.edditAndRep = false;
      this.$store.commit(
          "messages/TOGLE_MODALE",
      );
    },
    closeConfirm() {
      this.conffDel = false;
    },
    confirmDell() {
      console.log(this.deletedID)
      this.$store.dispatch("messages/deleteMessage", this.deletedID)
      this.conffDel = false;
    },
    doneEdite() {
      // console.log(this.editeValue)
      this.$store.dispatch("messages/editeMessage", this.editeValue
      ).then((res) =>
              this.edditAndRep = true,
          this.$store.commit("messages/TOGLE_MODALE")
      ).catch(err => {
        this.edditAndRep = true,
            console.log(err)
      })
    },
    editeMessage(card) {
      this.edditAndRep = true;
      this.edite = true;
      this.editeValue = card;
      console.log(this.editeValue)
      this.$store.commit("messages/TOGLE_MODALE");
    },
    deleteMessage(id) {
      this.deletedID = id
      this.conffDel = true;
    },
    replayMessage(card){
      this.edditAndRep = true;
      // console.log(card)
      this.edite=false;
      this.addReplay = card;
      this.$store.commit("messages/TOGLE_MODALE");
    },
    doneAddReplay(){
      this.$store.dispatch("messages/editeMessage", this.addReplay)
          .then(()=>{
            this.$store.commit("messages/TOGLE_MODALE");
      })
    }
  },
};
</script>
<style lang="scss">
.but-dll {
  align-content: flex-end;
}

.card-contact {
  text-align: left;

  &__title {
    font-weight: bolder;
    font-size: 1.3rem;
    color: black;
  }

}

.replay {
  //padding-left: 5px;
  position: relative;
  //display: block;

  &:after {
    content: "";
    position: absolute;
    background-color: gold;
    border-radius: 50%;
    right: -5px;
    top: -5px;
    width: 5px;
    height: 5px;
  }
}
.replay-text{
  font-size: 20px;
  .tit{
font-weight: bolder;
    color: #42b983;
  }
}
</style>
