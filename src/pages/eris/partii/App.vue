<template>
  <div id="app">
    <div class="markdown-body">
      <h1>Eris &amp; Yuuko: Part II: Embeds</h1>

      <p>If you want to skip the next part, click <a href="#cmd">here</a>.</p>
      <h1 id="code-from-previous-post">
        Code from Previous Post
      </h1>
      <p>
        As promised, I will be putting the code here for those who just want to grab and go:
        Your project directory:
      </p>
      <pre><code class="lang-bash">│   <span class="hljs-selector-class">.env</span>
│   index<span class="hljs-selector-class">.js</span>
│   package-lock<span class="hljs-selector-class">.json</span>
│   package<span class="hljs-selector-class">.json</span>
│
├───commands
│       owo<span class="hljs-selector-class">.js</span>
│
├───events
│       ready<span class="hljs-selector-class">.js</span>
│
└───node_modules
    │   ...
</code></pre>
      <p><code>./.env</code></p>
      <pre><code><span class="hljs-attr">TOKEN</span>=&lt;your-token-here&gt;
<span class="hljs-attr">PREFIX</span>=&lt;your-bot-prefix&gt;
</code></pre><p><code>./index.js</code></p>
      <pre><code class="lang-js"><span class="hljs-keyword">const</span> { Client } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'yuuko'</span>);
<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">'path'</span>);
<span class="hljs-keyword">const</span> dotenv = <span class="hljs-built_in">require</span>(<span class="hljs-string">'dotenv'</span>);
<span class="hljs-keyword">var</span> env = dotenv.config();
env = process.env;

<span class="hljs-keyword">const</span> bot = <span class="hljs-keyword">new</span> Client({
    <span class="hljs-attr">token</span>: env.TOKEN,
    <span class="hljs-attr">prefix</span>: env.PREFIX,
    <span class="hljs-attr">ignoreBots</span>: <span class="hljs-literal">true</span>,
});

bot.extendContext({
    <span class="hljs-attr">variableOne</span>: <span class="hljs-string">'Variable number 1!'</span>,
});
bot.editStatus(<span class="hljs-string">'dnd'</span>); <span class="hljs-comment">// edits bot status</span>

bot.on(<span class="hljs-string">'error'</span>, (err) =&gt; {
    <span class="hljs-built_in">console</span>.error(err);
});

bot.globalCommandRequirements = {
    <span class="hljs-attr">guildOnly</span>: <span class="hljs-literal">true</span>,
};

bot
    .addDir(path.join(__dirname, <span class="hljs-string">'commands'</span>))
    .addDir(path.join(__dirname, <span class="hljs-string">'events'</span>))
    .connect();
</code></pre>
      <p>
        <code>./package.json</code> + <code>./package-lock.json</code>
        I will not be showing this, but you should have <code>yuuko</code>, <code>eris</code>, and <code>dotenv</code> installed.
        <code>./commands/owo.js</code>
      </p>
      <pre><code class="lang-js">const { Command } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'yuuko'</span>);
<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> Command(<span class="hljs-string">'owo'</span>, <span class="hljs-function"><span class="hljs-params">(message, args, context)</span> =&gt;</span> {
  message.channel.createMessage(<span class="hljs-string">'OwO'</span>);
});
</code></pre>
      <p><code>./events/ready.js</code></p>
      <pre><code class="lang-js">const { EventListener } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'yuuko'</span>);
<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> EventListener(<span class="hljs-string">'ready'</span>, <span class="hljs-function"><span class="hljs-params">({client})</span> =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(`<span class="javascript">Logged <span class="hljs-keyword">in</span> <span class="hljs-keyword">as</span> ${client.user.usename}</span>`);
});
</code></pre>
      <p>That should be all the code for now.</p>
      <h1 id="the-meme-command-a-name-cmd-a-">
        The <code>Meme</code> Command <a name="cmd" />
      </h1>
      <p>
        Now, for the <code>Meme</code> command! For this, we will need to get the memes from reddit. For that, we will be using <code>got</code> to get the JSON from <code>https://www.reddit.com/r/memes/random/.json</code>.
        Install <code>got</code> first:
      </p>
      <pre><code class="lang-bash">npm <span class="hljs-selector-tag">i</span> got --save
</code></pre>
      <p>
        Create a file in <code>./commands</code> and name it <code>meme.js</code>.
        Put the following code inside (I will be explaining it later):
      </p>
      <pre><code class="lang-js"><span class="hljs-keyword">const</span> { Command } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'yuuko'</span>);
<span class="hljs-keyword">const</span> got = <span class="hljs-built_in">require</span>(<span class="hljs-string">'got'</span>);
<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> Command(<span class="hljs-string">'meme'</span>, (message) =&gt; {
    got(<span class="hljs-string">'https://www.reddit.com/r/memes/random/.json'</span>)
        .then(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
            <span class="hljs-keyword">const</span> [list] = <span class="hljs-built_in">JSON</span>.parse(response.body);
            <span class="hljs-keyword">const</span> [post] = list.data.children;

            <span class="hljs-keyword">const</span> permalink = post.data.permalink;
            <span class="hljs-keyword">const</span> memeUrl = <span class="hljs-string">`https://reddit.com<span class="hljs-subst">${permalink}</span>`</span>;
            <span class="hljs-keyword">const</span> memeImage = post.data.url;
            <span class="hljs-keyword">const</span> memeTitle = post.data.title;
            <span class="hljs-keyword">const</span> memeUpvotes = post.data.ups;
            <span class="hljs-keyword">const</span> memeNumComments = post.data.num_comments;
            message.channel.createMessage({
                <span class="hljs-attr">embed</span>: {
                    <span class="hljs-attr">title</span>: memeTitle,
                    <span class="hljs-attr">url</span>: memeUrl,
                    <span class="hljs-attr">image</span>: {
                        <span class="hljs-attr">url</span>: memeImage,
                    },
                    <span class="hljs-attr">color</span>: <span class="hljs-number">15267908</span>,
                    <span class="hljs-attr">footer</span>: {
                        <span class="hljs-attr">text</span>: <span class="hljs-string">`👍 <span class="hljs-subst">${memeUpvotes}</span> 💬 <span class="hljs-subst">${memeNumComments}</span>`</span>,
                    },
                },
            });
        })
        .catch(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
            <span class="hljs-built_in">console</span>.error(err);
        });
});
</code></pre>
      <p>Now start the project by navigating to the root folder of the project and running</p>
      <pre><code class="lang-bash"><span class="hljs-keyword">node</span> <span class="hljs-title">index</span>.js
</code></pre>
      <p>or if you have <code>nodemon</code> installed</p>
      <pre><code class="lang-bash">nodemon <span class="hljs-keyword">index</span>.js
</code></pre>
      <p>Let me break the code up into smaller pieces to explain it.</p>
      <pre><code class="lang-js">const { Command } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'yuuko'</span>);
const got = <span class="hljs-built_in">require</span>(<span class="hljs-string">'got'</span>);
<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> Command(<span class="hljs-string">'meme'</span>, <span class="hljs-function"><span class="hljs-params">(message)</span> =&gt;</span> {
  <span class="hljs-regexp">//</span> code here
})
</code></pre>
      <p>So, we first import the modules as usual, and create a command as we did before. Easy.</p>
      <pre><code class="lang-js">got(<span class="hljs-string">'https://www.reddit.com/r/memes/random/.json'</span>).<span class="hljs-keyword">then</span>(<span class="hljs-function"><span class="hljs-params">(response)</span> =&gt;</span> {
  <span class="hljs-regexp">//</span> code here
}).<span class="hljs-keyword">catch</span>(err =&gt; {
            <span class="hljs-built_in">console</span>.error(err);
});
</code></pre>
      <p>Now, we use <code>got</code> to get the JSON from reddit (the subreddit <code>r/memes</code> actually), and save the response as the <code>response</code> variable. Note that we are using Promises here, thus the <code>.then().catch()</code> in the code. You can, however, use the <code>async/await</code> in ES6.</p>
      <p>Good?</p>
      <pre><code class="lang-js"><span class="hljs-keyword">const</span> [<span class="hljs-keyword">list</span>] = JSON.<span class="hljs-keyword">parse</span>(response.body);
<span class="hljs-keyword">const</span> [<span class="hljs-keyword">post</span>] = <span class="hljs-keyword">list</span>.data.children;
</code></pre>
      <p>Now, we parse the response body by using <code>JSON.parse</code> (Note: You will get an error if you just use <code>JSON.parse(response)</code>), and get the information about the reddit post which we saved inside the <code>post</code> variable. Understand? Excellent.</p>
      <pre><code class="lang-js"><span class="hljs-attribute">const permalink</span> = post.data.permalink;
<span class="hljs-attribute">const memeUrl</span> = `https://reddit.com${permalink}`;
<span class="hljs-attribute">const memeImage</span> = post.data.url;
<span class="hljs-attribute">const memeTitle</span> = post.data.title;
<span class="hljs-attribute">const memeUpvotes</span> = post.data.ups;
<span class="hljs-attribute">const memeNumComments</span> = post.data.num_comments;
</code></pre>
      <p>Now we save the post url as <code>memeUrl</code>, the meme image url as <code>memeImage</code>, the meme title as <code>memeTitle</code>, the number of meme upvotes as <code>memeUpvotes</code>, and the number of comments as <code>memeNumComments</code>.</p>
      <pre><code class="lang-js"><span class="hljs-selector-tag">message</span><span class="hljs-selector-class">.channel</span><span class="hljs-selector-class">.createMessage</span>({
                <span class="hljs-attribute">embed</span>: {
                    <span class="hljs-attribute">title</span>: memeTitle,
                    <span class="hljs-attribute">url</span>: memeUrl,
                    <span class="hljs-attribute">image</span>: {
                        <span class="hljs-attribute">url</span>: memeImage,
                    },
                    <span class="hljs-attribute">color</span>: <span class="hljs-number">15267908</span>,
                    <span class="hljs-attribute">footer</span>: {
                        <span class="hljs-attribute">text</span>: <span class="hljs-built_in">`👍 ${memeUpvotes} 💬 ${memeNumComments}`</span>,
                    },
                },
});
</code></pre>
      <p>We then send the embed object. That&#39;s the end of it. Easy, right?</p>
      <h1 id="conclusion">
        Conclusion
      </h1>
      <p>In this post, we used a REST API, and learnt how to send an embed in Eris. For my next post, I will be writing a <code>whois</code> command. See you until next time!</p>
    </div>
  </div>
</template>

<script>

export default {
	name: 'About',
};
</script>

<style>
@import '../../../../def.css';
</style>
