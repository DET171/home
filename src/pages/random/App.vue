<template>
  <div class="ui container raised text segment margin">
    <h1 class="ui header center aligned">Random Number Generator</h1>
    <button type="button" name="gen" @click="rand()" class="fluid ui button">Generate Number</button>
    <div class="ui grid">
      <div class="eight wide column">
        <div style="margin-top: 20px;" class="ui input fluid">
          <input type="number" name="Minimum Value" v-model="min" placeholder="Minimum Value" />
        </div>
      </div>
      <div class="eight wide column">
        <div style="margin-top: 20px;" class="ui input fluid">
          <input type="number" name="Maximum Value" v-model="max" placeholder="Maximum Value" />
        </div>
      </div>
    </div>
    <div style="margin-top: 20px;" class="ui container text">
      <p class="center aligned">{{ num }}</p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  data: function () {
    return {
      min: 1,
      max: 6,
      num: "Loading..."
    }
  },
  methods: {
    rand: function () {
      this.num = Math.floor(Math.random() * (parseInt(this.max) - parseInt(this.min) + 1)) + parseInt(this.min);
    }
  },
  mounted() {
    this.num = Math.floor(Math.random() * (parseInt(this.max) - parseInt(this.min) + 1)) + parseInt(this.min);
  }
}
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css';
.margin {
  margin-top: 30px !important;
  padding: 40px !important;
}
</style>
