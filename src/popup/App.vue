<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="mmm">Click</button>
    {{resquest}}
  </div>
</template>

<script>
export default {
  created(){
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  this.resquest = request;
  console.log(sender);
  // Once we receive a message from the popup
   chrome.runtime.sendMessage({greeting: "hello from background"}, function(response) {
        console.log(response);
      });

});
  },
  methods:{
    mmm(){
      chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        console.log(response.farewell);
      });
    }
  },
  data() {
    return {
      resquest:"",
      msg: 'Welcome! to our system'
    }
  }
}
</script>

<style lang="stylus">
</style>
