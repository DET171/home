<template>
  <div class="markdown-body">
    <h1>Search NPM</h1>
    <div class="ui icon input fluid">
      <input v-on:keyup.enter="getPkg()" v-model="search" type="text" placeholder="Search...">
      <i @click="getPkg()" class="inverted circular search link icon"></i>
    </div>
    <div class="results ui container" v-if="show">
      <p>NPM Search results for: {{ search }}</p>
      <table class="ui celled striped table">
        <thead full>
  <tr>
    <th>No.</th>
    <th>Package Name</th>
    <th>Author</th>
    <th>Description</th>
    <th>Version</th>
  </tr>
</thead>
<tbody full>
  <tr  v-for="(pkg, index) in pkgs" :key="index" full>
    <td>{{ index + 1 }}</td>
    <td> <a :href="pkg.package.links.npm" target="_blank">{{ pkg.package.name }}</a> </td>
    <td> <a target="_blank" :href="'https://www.npmjs.com/~' + pkg.package.publisher.username">{{ pkg.package.publisher.username }}</a> </td>
    <td>{{ pkg.package.description }}</td>
    <td><code>{{ pkg.package.version }}</code></td>
  </tr>
</tbody>
    <tfoot full>
  <tr>
		<th colspan="100%">
      {{ total }} packages found <br>
      Last fetched at {{ time }}
    </th>
	</tr>
</tfoot>
</table>

    </div>
  </div>

</template>
<script>
import axios from 'axios';

export default {
  name: 'App',
  data: function () {
    return {
      pkgs: [],
      search: 'cross spawn',
      show: false
    }
  },
  methods: {
    getPkg: function() {
      this.show = false;
      axios.get(`https://registry.npmjs.com/-/v1/search?text=${this.search}`)
      .then(response => {
        var pkgs = response.data;
        this.pkgs = pkgs.objects;
        this.total = pkgs.total;
        this.time = pkgs.time;
        this.show = true;
      })
    }
  },
  mounted() {
    axios.get(`https://registry.npmjs.com/-/v1/search?text=cross+spawn`)
    .then(response => {
      var pkgs = response.data;
      this.pkgs = pkgs.objects;
      this.total = pkgs.total;
      this.time = pkgs.time;
      this.show = true;
    })
  }
}
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css';
input[v-model=search] {
  margin-bottom: 20px;
  width: 100%;
}
.results {
  margin: 20px;
}
</style>
