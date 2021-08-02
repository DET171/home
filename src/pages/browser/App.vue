<template>
  <div class="markdown-body">
    <h1>Browser check</h1>
    <div class="center">
      <p>Browser version: {{ appVersion() }}</p>
      <p>Browser vendor: {{ vendor() }}</p>
      <p>Computer platform: {{ platform() }}</p>
      <p>Browser languages: {{ langs() }}</p>

    </div>
      <table full>
        <tr full>
          <th half>Features</th>
          <th half>Supported?</th>
        </tr>
        <tr>
          <td>Full ES6 syntax support</td>
          <td full centre class="material-icons">{{ es6() }}</td>
        </tr>
        <tr>
          <td> <code>text-decoration-style: blink</code> </td>
          <td full centre class="material-icons">{{ cssblink() }}</td>
        </tr>
        <tr>
          <td> <code>vh</code> (CSS) </td>
          <td full centre class="material-icons">{{ cssvh() }}</td>
        </tr>
        <tr>
          <td> <code>animation</code> (CSS) </td>
          <td full centre class="material-icons">{{ cssan() }}</td>
        </tr>
        <tr>
          <td> <code>columns</code> (CSS) </td>
          <td full centre class="material-icons">{{ csscols() }}</td>
        </tr>
        <tr>
          <td> <code>gap</code> (CSS) </td>
          <td full centre class="material-icons">{{ cssgap() }}</td>
        </tr>
      </table>
  </div>

</template>
<script>
import detect from 'feature-detect-es6';

export default {
  name: 'App',
  methods: {
    es6: function () {
      if (detect.all('class', 'spread', 'let', 'arrowFunction', 'const', 'newArrayFeatures', 'newObjectFeatures', 'collections', 'generators', 'promises', 'templateStrings', 'symbols', 'destructuring', 'defaultParamValues', 'asyncFunctions')){
        var es6syntax = 'check_circle_outline'; // eslint-disable-line
      } else {
        var es6syntax = 'highlight_off'; // eslint-disable-line
      }
      return es6syntax;
    },
    // es6 check end
    appVersion: function () {
      return navigator.userAgentData.brands[2].brand + ' ' + navigator.userAgentData.brands[2].version;
    },
    vendor: function () {
      return navigator.vendor;
    },
    langs: function () {
      return navigator.languages.join(', ');
    },
    platform: function () {
      if (navigator.platform == "Win32") {
        return "Windows"
      }
      else {
        return navigator.platform;
      }
    },
    // check blink
    cssblink: function () {
      if (CSS.supports("text-decoration-style", "blink")) {
        return "check_circle_outline";
      }
      else {
        return "highlight_off";
      }
    },
    // check vh
    cssvh: function () {
      if (CSS.supports("font-size", "10vh")) {
        return "check_circle_outline";
      }
      else {
        return "highlight_off";
      }
    },
    cssan: function () {
      if (CSS.supports("animation", "mymove 5s infinite")) {
        return "check_circle_outline";
      }
      else {
        return "highlight_off";
      }
    },
    csscols: function () {
      if (CSS.supports("columns", "100px 3")) {
        return "check_circle_outline";
      }
      else {
        return "highlight_off";
      }
    },
    cssgap: function () {
      if (CSS.supports("gap", "50px")) {
        return "check_circle_outline";
      }
      else {
        return "highlight_off";
      }
    }
  }

}
</script>

<style scoped>
@import '../../../def.css';
table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  text-align: center;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
