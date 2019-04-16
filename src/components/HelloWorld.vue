<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      info:'',
      BlushingBlue: '',

    }
  },
  mounted() {
    axios
      // .get('https://invision-eventsv7.invisionapp.com/dsm-export/in-vision-events-v-7/shuffle-well/style-data.json?exportFormat=list&key=rJMB3lPMME')
      // .then(response => {
      //   this.info = response
      //   console.log(response)
      // })
    //console.log(this.info);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
