<template>
  <div class="pop_up_win" v-if="showMask">
    <div class="pop_up_main">
      <div class="tips">
        <div class="tips_text" style="display: flex; height: auto; border-bottom: 3px solid black; padding-bottom: 10px; justify-content: space-between;">
            <slot name="tips_text"></slot>
            <a href="#" class="exit" @click="exit" style="padding-top: 5px;"
        ><IconPark type="close" theme="outline" size="24" fill="#333"
      /></a>
        </div>
        <div class="yes_no_main">
          <button class="yes_no" @click="logout">Yes</button>
          <button class="yes_no" @click="exit" >No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IconPark } from "@icon-park/vue-next/es/all";
export default {
  name: 'pop_up_win',
  components: {
    IconPark,
  },
  data() {
    return {
      showMask: false,
    };
  },
  methods: {
    show_hide() {
      this.showMask = !this.showMask;
    },
    exit() {
      this.showMask = false;
    },
    logout(){
      this.$router.push('/login')
    }
  },
};
</script>

<style scoped>
.pop_up_win {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.433);
  z-index: 99999;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
}
.pop_up_main {
  width: 35%;
  height: 40%;
  background: #5c5c6b;
  border-radius: 20px;
  padding: 15px;
}
.exit {
  display: flex;
  width: 30px;
  height: 30px;
}
.tips { 

  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #5c5c6b;
  font-size: x-large;
}
.yes_no_main {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;

}
.yes_no {
  height: auto;
  width: auto;
  border-radius: 20px;
  margin: 20px;
  background: #8f8fa1;
  border: none;
}
.yes_no:hover {
  background: rgb(132, 112, 112);
}
</style>