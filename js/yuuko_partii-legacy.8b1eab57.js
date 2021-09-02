(function(s){function n(n){for(var a,o,p=n[0],c=n[1],r=n[2],i=0,h=[];i<p.length;i++)o=p[i],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&h.push(t[o][0]),t[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(s[a]=c[a]);d&&d(n);while(h.length)h.shift()();return l.push.apply(l,r||[]),e()}function e(){for(var s,n=0;n<l.length;n++){for(var e=l[n],a=!0,p=1;p<e.length;p++){var c=e[p];0!==t[c]&&(a=!1)}a&&(l.splice(n--,1),s=o(o.s=e[0]))}return s}var a={},t={yuuko_partii:0},l=[];function o(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return s[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=s,o.c=a,o.d=function(s,n,e){o.o(s,n)||Object.defineProperty(s,n,{enumerable:!0,get:e})},o.r=function(s){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},o.t=function(s,n){if(1&n&&(s=o(s)),8&n)return s;if(4&n&&"object"===typeof s&&s&&s.__esModule)return s;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:s}),2&n&&"string"!=typeof s)for(var a in s)o.d(e,a,function(n){return s[n]}.bind(null,a));return e},o.n=function(s){var n=s&&s.__esModule?function(){return s["default"]}:function(){return s};return o.d(n,"a",n),n},o.o=function(s,n){return Object.prototype.hasOwnProperty.call(s,n)},o.p="";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],c=p.push.bind(p);p.push=n,p=p.slice();for(var r=0;r<p.length;r++)n(p[r]);var d=c;l.push([4,"chunk-vendors"]),e()})({4:function(s,n,e){s.exports=e("5cf9")},"5cf9":function(s,n,e){"use strict";e.r(n);var a=e("7a23");const t={id:"app"},l=Object(a["f"])('<div class="markdown-body"><h1>Eris &amp; Yuuko: Part II: Embeds</h1><p>If you want to skip the next part, click <a href="#cmd">here</a>.</p><h1 id="code-from-previous-post"> Code from Previous Post </h1><p> As promised, I will be putting the code here for those who just want to grab and go: Your project directory: </p><pre><code class="lang-bash">│   <span class="hljs-selector-class">.env</span>\n│   index<span class="hljs-selector-class">.js</span>\n│   package-lock<span class="hljs-selector-class">.json</span>\n│   package<span class="hljs-selector-class">.json</span>\n│\n├───commands\n│       owo<span class="hljs-selector-class">.js</span>\n│\n├───events\n│       ready<span class="hljs-selector-class">.js</span>\n│\n└───node_modules\n    │   ...\n</code></pre><p><code>./.env</code></p><pre><code><span class="hljs-attr">TOKEN</span>=&lt;your-token-here&gt;\n<span class="hljs-attr">PREFIX</span>=&lt;your-bot-prefix&gt;\n</code></pre><p><code>./index.js</code></p><pre><code class="lang-js"><span class="hljs-keyword">const</span> { Client } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;yuuko&#39;</span>);\n<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;path&#39;</span>);\n<span class="hljs-keyword">const</span> dotenv = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;dotenv&#39;</span>);\n<span class="hljs-keyword">var</span> env = dotenv.config();\nenv = process.env;\n\n<span class="hljs-keyword">const</span> bot = <span class="hljs-keyword">new</span> Client({\n    <span class="hljs-attr">token</span>: env.TOKEN,\n    <span class="hljs-attr">prefix</span>: env.PREFIX,\n    <span class="hljs-attr">ignoreBots</span>: <span class="hljs-literal">true</span>,\n});\n\nbot.extendContext({\n    <span class="hljs-attr">variableOne</span>: <span class="hljs-string">&#39;Variable number 1!&#39;</span>,\n});\nbot.editStatus(<span class="hljs-string">&#39;dnd&#39;</span>); <span class="hljs-comment">// edits bot status</span>\n\nbot.on(<span class="hljs-string">&#39;error&#39;</span>, (err) =&gt; {\n    <span class="hljs-built_in">console</span>.error(err);\n});\n\nbot.globalCommandRequirements = {\n    <span class="hljs-attr">guildOnly</span>: <span class="hljs-literal">true</span>,\n};\n\nbot\n    .addDir(path.join(__dirname, <span class="hljs-string">&#39;commands&#39;</span>))\n    .addDir(path.join(__dirname, <span class="hljs-string">&#39;events&#39;</span>))\n    .connect();\n</code></pre><p><code>./package.json</code> + <code>./package-lock.json</code> I will not be showing this, but you should have <code>yuuko</code>, <code>eris</code>, and <code>dotenv</code> installed. <code>./commands/owo.js</code></p><pre><code class="lang-js">const { Command } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;yuuko&#39;</span>);\n<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> Command(<span class="hljs-string">&#39;owo&#39;</span>, <span class="hljs-function"><span class="hljs-params">(message, args, context)</span> =&gt;</span> {\n  message.channel.createMessage(<span class="hljs-string">&#39;OwO&#39;</span>);\n});\n</code></pre><p><code>./events/ready.js</code></p><pre><code class="lang-js">const { EventListener } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;yuuko&#39;</span>);\n<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> EventListener(<span class="hljs-string">&#39;ready&#39;</span>, <span class="hljs-function"><span class="hljs-params">({client})</span> =&gt;</span> {\n  <span class="hljs-built_in">console</span>.log(`<span class="javascript">Logged <span class="hljs-keyword">in</span> <span class="hljs-keyword">as</span> ${client.user.usename}</span>`);\n});\n</code></pre><p>That should be all the code for now.</p><h1 id="the-meme-command-a-name-cmd-a-"> The <code>Meme</code> Command <a name="cmd"></a></h1><p> Now, for the <code>Meme</code> command! For this, we will need to get the memes from reddit. For that, we will be using <code>got</code> to get the JSON from <code>https://www.reddit.com/r/memes/random/.json</code>. Install <code>got</code> first: </p><pre><code class="lang-bash">npm <span class="hljs-selector-tag">i</span> got --save\n</code></pre><p> Create a file in <code>./commands</code> and name it <code>meme.js</code>. Put the following code inside (I will be explaining it later): </p><pre><code class="lang-js"><span class="hljs-keyword">const</span> { Command } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;yuuko&#39;</span>);\n<span class="hljs-keyword">const</span> got = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;got&#39;</span>);\n<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> Command(<span class="hljs-string">&#39;meme&#39;</span>, (message) =&gt; {\n    got(<span class="hljs-string">&#39;https://www.reddit.com/r/memes/random/.json&#39;</span>)\n        .then(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {\n            <span class="hljs-keyword">const</span> [list] = <span class="hljs-built_in">JSON</span>.parse(response.body);\n            <span class="hljs-keyword">const</span> [post] = list.data.children;\n\n            <span class="hljs-keyword">const</span> permalink = post.data.permalink;\n            <span class="hljs-keyword">const</span> memeUrl = <span class="hljs-string">`https://reddit.com<span class="hljs-subst">${permalink}</span>`</span>;\n            <span class="hljs-keyword">const</span> memeImage = post.data.url;\n            <span class="hljs-keyword">const</span> memeTitle = post.data.title;\n            <span class="hljs-keyword">const</span> memeUpvotes = post.data.ups;\n            <span class="hljs-keyword">const</span> memeNumComments = post.data.num_comments;\n            message.channel.createMessage({\n                <span class="hljs-attr">embed</span>: {\n                    <span class="hljs-attr">title</span>: memeTitle,\n                    <span class="hljs-attr">url</span>: memeUrl,\n                    <span class="hljs-attr">image</span>: {\n                        <span class="hljs-attr">url</span>: memeImage,\n                    },\n                    <span class="hljs-attr">color</span>: <span class="hljs-number">15267908</span>,\n                    <span class="hljs-attr">footer</span>: {\n                        <span class="hljs-attr">text</span>: <span class="hljs-string">`👍 <span class="hljs-subst">${memeUpvotes}</span> 💬 <span class="hljs-subst">${memeNumComments}</span>`</span>,\n                    },\n                },\n            });\n        })\n        .catch(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {\n            <span class="hljs-built_in">console</span>.error(err);\n        });\n});\n</code></pre><p>Now start the project by navigating to the root folder of the project and running</p><pre><code class="lang-bash"><span class="hljs-keyword">node</span> <span class="hljs-title">index</span>.js\n</code></pre><p>or if you have <code>nodemon</code> installed</p><pre><code class="lang-bash">nodemon <span class="hljs-keyword">index</span>.js\n</code></pre><p>Let me break the code up into smaller pieces to explain it.</p><pre><code class="lang-js">const { Command } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;yuuko&#39;</span>);\nconst got = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;got&#39;</span>);\n<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> Command(<span class="hljs-string">&#39;meme&#39;</span>, <span class="hljs-function"><span class="hljs-params">(message)</span> =&gt;</span> {\n  <span class="hljs-regexp">//</span> code here\n})\n</code></pre><p>So, we first import the modules as usual, and create a command as we did before. Easy.</p><pre><code class="lang-js">got(<span class="hljs-string">&#39;https://www.reddit.com/r/memes/random/.json&#39;</span>).<span class="hljs-keyword">then</span>(<span class="hljs-function"><span class="hljs-params">(response)</span> =&gt;</span> {\n  <span class="hljs-regexp">//</span> code here\n}).<span class="hljs-keyword">catch</span>(err =&gt; {\n            <span class="hljs-built_in">console</span>.error(err);\n});\n</code></pre><p>Now, we use <code>got</code> to get the JSON from reddit (the subreddit <code>r/memes</code> actually), and save the response as the <code>response</code> variable. Note that we are using Promises here, thus the <code>.then().catch()</code> in the code. You can, however, use the <code>async/await</code> in ES6.</p><p>Good?</p><pre><code class="lang-js"><span class="hljs-keyword">const</span> [<span class="hljs-keyword">list</span>] = JSON.<span class="hljs-keyword">parse</span>(response.body);\n<span class="hljs-keyword">const</span> [<span class="hljs-keyword">post</span>] = <span class="hljs-keyword">list</span>.data.children;\n</code></pre><p>Now, we parse the response body by using <code>JSON.parse</code> (Note: You will get an error if you just use <code>JSON.parse(response)</code>), and get the information about the reddit post which we saved inside the <code>post</code> variable. Understand? Excellent.</p><pre><code class="lang-js"><span class="hljs-attribute">const permalink</span> = post.data.permalink;\n<span class="hljs-attribute">const memeUrl</span> = `https://reddit.com${permalink}`;\n<span class="hljs-attribute">const memeImage</span> = post.data.url;\n<span class="hljs-attribute">const memeTitle</span> = post.data.title;\n<span class="hljs-attribute">const memeUpvotes</span> = post.data.ups;\n<span class="hljs-attribute">const memeNumComments</span> = post.data.num_comments;\n</code></pre><p>Now we save the post url as <code>memeUrl</code>, the meme image url as <code>memeImage</code>, the meme title as <code>memeTitle</code>, the number of meme upvotes as <code>memeUpvotes</code>, and the number of comments as <code>memeNumComments</code>.</p><pre><code class="lang-js"><span class="hljs-selector-tag">message</span><span class="hljs-selector-class">.channel</span><span class="hljs-selector-class">.createMessage</span>({\n                <span class="hljs-attribute">embed</span>: {\n                    <span class="hljs-attribute">title</span>: memeTitle,\n                    <span class="hljs-attribute">url</span>: memeUrl,\n                    <span class="hljs-attribute">image</span>: {\n                        <span class="hljs-attribute">url</span>: memeImage,\n                    },\n                    <span class="hljs-attribute">color</span>: <span class="hljs-number">15267908</span>,\n                    <span class="hljs-attribute">footer</span>: {\n                        <span class="hljs-attribute">text</span>: <span class="hljs-built_in">`👍 ${memeUpvotes} 💬 ${memeNumComments}`</span>,\n                    },\n                },\n});\n</code></pre><p>We then send the embed object. That&#39;s the end of it. Easy, right?</p><h1 id="conclusion"> Conclusion </h1><p>In this post, we used a REST API, and learnt how to send an embed in Eris. For my next post, I will be writing a <code>whois</code> command. See you until next time!</p></div>',1);function o(s,n,e,o,p,c){return Object(a["i"])(),Object(a["d"])("div",t,[l])}var p={name:"About"};e("fb8b");p.render=o;var c=p;Object(a["c"])(c).mount("#app")},"71cc":function(s,n,e){},fb8b:function(s,n,e){"use strict";e("71cc")}});
//# sourceMappingURL=yuuko_partii-legacy.8b1eab57.js.map