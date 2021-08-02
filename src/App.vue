<template>
  <div class="center">

    <h1>DET171's GitHub Homepage</h1>
    <h2>Guides</h2>
    <a href="yuuko.html">Eris &amp; Yuuko Bot Tutorial</a><br>
    <h2>Misc</h2>

    <a class='block' href="https://det171.github.io/cube/cfop/index.html">CFOP Algorithms</a><br>
    <a class='block' href="check.html">Browser Information</a><br>
    <a class='block' href="random.html">Random Number Generator</a><br>
    <h2>REST API Projects</h2>
    <a class='block' href="npmsearch.html">Search NPM</a><br>
    <a class='block' href="quote.html">Quotes</a><br>

  </div>

</template>
<script>

export default {
  name: 'App',
}
</script>

<style scoped>
@import '../def.css';

.center {
  text-align: center;
}
a {
  color: #0366d6;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
a {
  background-color: initial;
}

a:active,
a:hover {
  outline-width: 0;
}

</style>
