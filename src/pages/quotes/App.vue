<template>
  <div
    pad
    class="ui raised very padded text container segment"
  >
    <h1
      center
      class="middle aligned"
    >
      Your free quote of the day
    </h1>
    <button
      class="ui basic button"
      @click="get()"
    >
      Get new quote
    </button>
    <div class="pad padded text container segment very">
      <p large>
        <i>{{ quote }}</i>
      </p>
      <p style="float: right;">
        <i>-- {{ a }}</i>
      </p>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
	name: 'App',
	data: function() {
		return {
			quote: 'Loading...',
			a: 'Loading...',
		};
	},
	mounted() {
		axios.get('https://type.fit/api/quotes').then((json) => {
			var response = json.data;
			var num = Math.floor(Math.random() * response.length);
			this.quote = response[num].text;
			this.a = response[num].author;
		});
	},
	methods: {
		get: function() {
			axios.get('https://type.fit/api/quotes').then((json) => {
				var response = json.data;
				var num = Math.floor(Math.random() * response.length);
				this.quote = response[num].text;
				this.a = response[num].author;
			});
		},
	},
};
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css';
[pad] {
  margin-top: 40px !important;
}
.pad {
  margin: 20px !important;
  padding: 20px !important;
}

</style>
