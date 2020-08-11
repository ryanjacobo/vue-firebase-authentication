<template>
  <div>
    Logged in
    <div v-if="loggedIn">Yes</div>
    <div v-else>No</div>
    <div>
      <button class="but" @click="signOut">Sign-out</button>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log("signed-in");
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
          console.log("signed-out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>