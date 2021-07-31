<template>
  <div class="markdown-body">
    <h1>Search NPM</h1>
    <form class="search-container">
      <input v-model="search" type="text" id="search-bar" placeholder="What can I help you with today?">
      <a href="#" @click="getPkg()"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"></a>
    </form>
    <div class="results">
      <p>NPM Search results for: {{ search }}</p>
      <table full>
        <thead full>
  <tr>
    <th>Package Name</th>
    <th>Description</th>
    <th>Version</th>
  </tr>
</thead>
<tbody full>
  <tr  v-for="(pkg, index) in pkgs" :key="index" full>
    <td> <a :href="pkg.package.links.npm" target="_blank">{{ pkg.package.name }}</a> </td>
    <td>{{ pkg.package.description }}</td>
    <td>{{ pkg.package.version }}</td>
  </tr>
</tbody>
    <tfoot full>
  <tr>
		<th colspan="100%">{{ total }} packages found</th>
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
      search: 'cross spawn'
    }
  },
  methods: {
    getPkg: function() {
      axios.get(`https://registry.npmjs.com/-/v1/search?text=${this.search}`)
      .then(response => {
        var pkgs = response.data;
        this.pkgs = pkgs.objects;
        this.total = pkgs.total;
      })
    }
  },
  created() {
    axios.get(`https://registry.npmjs.com/-/v1/search?text=cross+spawn`)
    .then(response => {
      var pkgs = response.data;
      this.pkgs = pkgs.objects;
      this.total = pkgs.total;
    })
  }
}
</script>

<style scoped>
@import '../../../def.css';
.search-container {
  width: 95%;
  display: block;
  margin: 10px auto;
  border: 1px solid #D0CFCE;
}

input#search-bar {
  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  outline: none;
  left: -30px;
}
input#search-bar:focus {
  border: 1px solid #008ABF;
  transition: 0.35s ease;
  color: #008ABF;
}
input#search-bar:focus::-webkit-input-placeholder {
  transition: opacity 0.45s ease;
  opacity: 0;
}
input#search-bar:focus::-moz-placeholder {
  transition: opacity 0.45s ease;
  opacity: 0;
}
input#search-bar:focus:-ms-placeholder {
  transition: opacity 0.45s ease;
  opacity: 0;
}

.search-icon {
  position: relative;
  float: right;
  width: 75px;
  height: 75px;
  top: -62px;
  right: -76px;
}
table {
  overflow: auto;
}
</style>
