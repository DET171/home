<template>
  <div class="markdown-body">
    <h1>Search GitHub Repositories</h1>
    <div class="ui icon input fluid">
      <input
        v-model="search"
        type="text"
        placeholder="Search..."
        @keyup.enter="getPkg()"
      >
      <i
        class="inverted circular search link icon"
        @click="getPkg()"
      />
    </div>
    <div
      v-if="show"
      class="results ui container"
    >
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
          <tr
            v-for="(pkg, index) in pkgs"
            :key="index"
            full
          >
            <td>{{ index + 1 }}</td>
            <td @click="repo(license(pkg), pkg)">
              {{ pkg.name }} ({{ pkg.full_name }})
            </td>
            <td>{{ pkg.forks }}</td>
            <td>{{ pkg.open_issues }}</td>
            <td>
              <a
                target="_blank"
                :href="'https://github.com/' + pkg.owner.login"
              >{{ pkg.owner.login }}</a>
            </td>
            <td>{{ pkg.description }}</td>
            <td>{{ pkg.language }}</td>
            <td>{{ license(pkg) }}</td>
          </tr>
        </tbody>
        <tfoot full>
          <tr>
            <th colspan="100%" />
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <Modal
    v-show="modalShow"
    @close="closeModal()"
  >
    <template
      #header
    >
      <h1 class="ui header">
        {{ name }}
      </h1>
      <br>
      <a
        :href="url"
        target="_blank"
        style="display: block;"
      >View on GitHub</a>
    </template>
    <template #body>
      <div class="ui stackable four column grid">
        <div class="column">
          <p>License: {{ li }}</p>
          <p>
            Language: {{ lang }}
          </p>
        </div>
        <div class="column">
          <p>Created at: {{ created }}</p>
        </div>
        <div class="column">
          <p>Owner: <a :href="ownerurl"> {{ owner }}</a></p>
        </div>
        <div class="column" />
      </div>
    </template>
    <template #footer>
      {{
        new Date().getHours() + ':' + new Date().getMinutes()
      }}
    </template>
  </Modal>
</template>
<script>
import axios from 'axios';
import Modal from '../../components/Modal.vue';

export default {
	name: 'App',
	components: {
		Modal,
	},
	data: function() {
		return {
			pkgs: [],
			modalShow: false,
			search: 'got',
			show: false,
			li: 'None',
		};
	},
	mounted() {
		axios.get(`https://api.github.com/search/repositories?q=${this.search}`)
			.then(response => {
				var pkgs = response.data;
				console.log(pkgs);
				this.pkgs = pkgs.items;
				this.show = true;
			});
		axios.get('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json')
			.then(json => {
				this.colors = json.data;
			});
	},
	methods: {
		getPkg: function() {
			this.show = false;
			axios.get(`https://api.github.com/search/repositories?q=${this.search}`)
				.then(response => {
					var pkgs = response.data;
					this.pkgs = pkgs.items;
					this.show = true;
				});
		},
		license: function(repo) {
			if (repo.license) {
				return repo.license.name;
			}
			else {
				return 'None';
			}
		},
		repo: function(license, repo) {
			this.modalShow = true;
			this.li = license;
			this.url = repo.html_url;
			this.name = `${repo.name} (${repo.full_name})`;
			this.lang = repo.language;
			const date = new Date(repo.created_at).toString();
			this.created = date;
			this.ownerurl = repo.owner.html_url;
			this.owner = repo.owner.login;
		},
		closeModal: function() {
			this.modalShow = false;
		},
	},
};
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
[@click] {
  cursor: pointer !important;
}
</style>
