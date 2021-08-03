<template>
  <div class="markdown-body">
    <h1>Search GitHub Repositories</h1>
    <div class="ui icon input fluid">
      <input v-on:keyup.enter="getPkg()" v-model="search" type="text" placeholder="Search...">
      <i @click="getPkg()" class="inverted circular search link icon"></i>
    </div>
    <div class="results ui container" v-if="show">
      <p>GitHub repository Search results for: {{ search }}</p>
      <table class="ui celled striped table">
        <thead full>
  <tr>
    <th>No.</th>
    <th>Repository Name</th>
    <th>Forks</th>
    <th>Issues</th>
    <th>Author</th>
    <th>Description</th>
    <th>Language</th>
    <th>License</th>
  </tr>
</thead>
<tbody full>
  <tr  v-for="(pkg, index) in pkgs" :key="index" full>
    <td>{{ index + 1 }}</td>
    <td> <a :href="pkg.html_url" target="_blank">{{ pkg.name }} ({{ pkg.full_name }})</a> </td>
    <td>{{ pkg.forks }}</td>
    <td>{{ pkg.open_issues }}</td>
    <td> <a target="_blank" :href="'https://github.com/' + pkg.owner.login">{{ pkg.owner.login }}</a> </td>
    <td>{{ pkg.description }}</td>
    <td>{{ pkg.language }}</td>
    <td>{{ license(pkg) }}</td>
  </tr>
</tbody>
    <tfoot full>
  <tr>
		<th colspan="100%">

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
      search: 'got',
      show: false
    }
  },
  methods: {
    getPkg: function() {
      this.show = false;
      axios.get(`https://api.github.com/search/repositories?q=${this.search}`)
      .then(response => {
        var pkgs = response.data;
        this.pkgs = pkgs.items;
        this.show = true;
      })
    },
    license: (repo) => {
      if (repo.license) {
        return repo.license.name;
      }
      else {
        return "None";
      }
    }
  },
  mounted() {
    axios.get(`https://api.github.com/search/repositories?q=${this.search}`)
    .then(response => {
      var pkgs = response.data;
      console.log(pkgs)
      this.pkgs = pkgs.items;
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
