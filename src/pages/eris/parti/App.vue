<template>
  <div id="app">
    <h1>Eris &amp; Yuuko: Part I: The Basics</h1>
    <div class="markdown-body">
      <h1 id="introduction">Introduction</h1>
<p>Hello there, this sentence will mark the beginning of my first ever article released to the public. In this article, I will be writing how to build a Discord bot with <a href="https://abal.moe/Eris/">Eris</a> and <a href="https://eritbh.me/yuuko/">Yuuko</a>.</p>
<p>In this tutorial, I will be using the following format for the code:</p>
<pre><code class="lang-js">+ <span class="hljs-comment">// This line should be added to your code</span>
- <span class="hljs-comment">// This line should be removed from your code</span>
</code></pre>
<h1 id="prerequisites">Prerequisites</h1>
<ul>
<li>A basic knowledge of JavaScript</li>
<li>Node.js (v12) and NPM (v7) installed on your machine</li>
<li>A basic knowledge of the <a href="https://discord.com/developers/docs/intro">Discord API</a></li>
</ul>
<h1 id="background-info">Background Info</h1>
<p>So, what is Eris exactly?</p>
<blockquote>
<p>A lightweight NodeJS Discord Library.</p>
</blockquote>
<p>What is Yuuko, then?</p>
<blockquote>
<p>A Discord command framework for Javascript and Typescript.</p>
</blockquote>
<p>I assume that if you&#39;ve ever wanted to make a Discord Bot, you would have at least googled it up. The first and most common answer you&#39;d see is probably &quot;How to build a Discord Bot with Discord.js&quot;. What exactly is the difference between Eris and Discord.js?</p>
<h1 id="features">Features</h1>
<p>D.js covers 100% of the Discord API while Eris does not. However, covering 100% of the Discord API has its disadvantages.
D.js has a larger memory footprint, and when the bot is in many servers, it starts having performance issues. That is why many large bots, like <a href="https://dankmemer.lol/">Dank Memer</a> (The 4th largest Discord Bot), are made using Eris.</p>
<p>However, there are some packages on NPM that can help with the functions that Eris lacks, for example, <a href="https://www.npmjs.com/package/eris-additions">Eris Additions</a>. There are even command handlers for Eris on NPM, like <a href="https://www.npmjs.com/package/yuuko">Yuuko</a> and <a href="https://www.npmjs.com/package/eris-boiler">Eris Boiler</a>. For developers moving from D.js to Eris, there is <a href="https://www.npmjs.com/package/chariot.js">Chariot.js</a>.</p>
<h1 id="getting-started">Getting started</h1>
<p>Now, without further delay, let us dive into the magical world of Discord Bots.</p>
<h1 id="creating-a-discord-bot-account">Creating a Discord Bot account</h1>
<p>Now, the first thing you need to do is to create a Discord Bot account.</p>
<ol>
<li>Head over to the <a href="https://discord.com/developers/applications">Discord Applications page</a>.</li>
<li>Click the <code>New Application</code> button on the top right corner.</li>
<li>Now name your application (You can change it afterwards). Enter the name and hit <code>Create</code>.</li>
<li>Now that you have created the application, now you need to create the bot account. Head over to <code>Bot</code> and click on <code>Add Bot</code>, and then click <code>Click on Yes, do it!</code>.</li>
<li>Under the <code>TOKEN</code> section, click <code>Copy</code>.</li>
<li>Awesome! Now you have your Bot Token!</li>
</ol>
<p>Last but not least, do remember to invite your bot into your server in order to &quot;talk&quot; to it.</p>
<h1 id="set-up-your-project">Set up your project</h1>
<ol>
<li><p>Create your project folder and <code>package.json</code>.</p>
<pre><code class="lang-bash"><span class="hljs-built_in">mkdir</span> <span class="hljs-symbol">&lt;your-project-name&gt;</span>
<span class="hljs-keyword">cd</span> <span class="hljs-symbol">&lt;your-project-name&gt;</span>
npm init
</code></pre>
<p>Ensure that the <code>main</code> in your <code>package.json</code> is set to <code>index.js</code>.</p>
</li>
<li><p>Install the relevant dependencies now.</p>
<pre><code class="lang-bash">npm <span class="hljs-selector-tag">i</span> eris yuuko dotenv
</code></pre>
<p>Should you be using a version of NPM below 4.5 <em>(you shouldn&#39;t)</em>, run the following instead:</p>
<pre><code class="lang-bash">npm <span class="hljs-selector-tag">i</span> eris yuuko dotenv --save
</code></pre>
<p>Install <code>nodemon</code> as well.</p>
<pre><code class="lang-bash">npm <span class="hljs-selector-tag">i</span> -g nodemon
</code></pre>
</li>
<li>Create a <code>.env</code> and <code>index.js</code> file, and a <code>commands</code> and <code>events</code> folder.</li>
</ol>
<h3 id="optional-steps">Optional Steps</h3>
<ul>
<li>Install <code>bufferutil</code>, <code>zlib-sync</code> or <code>abalabahaha/erlpack</code></li>
<li>Install a linter and create the config file<pre><code class="lang-bash">npm i eslint -D
<span class="hljs-comment"># -D is short for --save-dev</span>
npx eslint <span class="hljs-comment">--init</span>
<span class="hljs-comment"># Just answer the prompts</span>
</code></pre>
That&#39;s about the end of setting up your project!
Your project tree should look something like this now:<pre><code>|   .env
│   index.js
│   <span class="hljs-keyword">package</span>-lock.json
│   <span class="hljs-keyword">package</span>.json
│
├───commands
├───events
└───node_modules
  │   ...
</code></pre></li>
</ul>
<h1 id="now-let-s-start-coding-">Now, let&#39;s start coding!</h1>
<p>Note: The final code will be included at the end :)</p>
<p>First, open the project in you favourite text editor, and fill in the <code>.env</code> file with the following:</p>
<pre><code><span class="hljs-attr">TOKEN</span>=&lt;your-token-here&gt;
<span class="hljs-attr">PREFIX</span>=&lt;your-bot-prefix&gt;
</code></pre><p>Of course, replace <code>&lt;your-token-here&gt;</code> with the Bot token you obtained earlier, and <code>&lt;your-bot-prefix&gt;</code> with your bot prefix.
If you do not understand <code>dotenv</code> and <code>.env</code> files,
Now that we are no longer concerned with the bot configurations, let us write our basic bot code!
Head over to your <code>index.js</code> file, and insert the following at the top to require the packages.</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> { Client } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'yuuko'</span>); <span class="hljs-comment">// Imports the Client constructor</span>
<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">'path'</span>); <span class="hljs-comment">// For joining paths</span>
<span class="hljs-built_in">require</span>(<span class="hljs-string">'dotenv'</span>).config(); <span class="hljs-comment">// Imports the variables in the `.env` file</span>
</code></pre>
<p>As you can see, we have imported the <code>Client</code> constructor from <code>Yuuko</code> but not the <code>Command</code> constructor. Why? We will be putting the commands in <code>js</code> files in the <code>command</code> folder, so our <code>index.js</code> file will not be crowded with commands. Neat!</p>
<p>We can create a client with the following:</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> bot = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Client</span>({
    token: <span class="hljs-built_in">process</span>.env.TOKEN,
    prefix: <span class="hljs-built_in">process</span>.env.PREFIX,
    ignoreBots: true,
});
</code></pre>
<p>The <code>ignoreBots: true</code> in the code tells our bot to ignore all messages sent by other bots.
If you want to allow commands to be used in only servers, you can set it using the following:</p>
<pre><code class="lang-js"><span class="hljs-keyword">bot.globalCommandRequirements </span>= {
<span class="hljs-symbol">    guildOnly:</span> true,
}<span class="hljs-comment">;</span>
</code></pre>
<p>However, if you want to allow commands to be used in only DMs, you can set it using the following:</p>
<pre><code class="lang-js"><span class="hljs-keyword">bot.globalCommandRequirements </span>= {
<span class="hljs-symbol">    dmOnly:</span> true,
}<span class="hljs-comment">;</span>
</code></pre>
<p>To pass context/variables to the commands in other files, you can set in <code>index.js</code> by doing</p>
<pre><code class="lang-js"><span class="hljs-selector-tag">bot</span><span class="hljs-selector-class">.extendContext</span>({
  <span class="hljs-attribute">variableOne</span>: <span class="hljs-string">'Variable number 1!'</span>,
});
</code></pre>
<p>The variables set here will be passed to commands and event listeners under <code>context.&lt;variable-name&gt;.</code></p>
<p>Now get you bot to scan the directories and import any event listeners and commands, and lastly, connect to Discord:</p>
<pre><code class="lang-js"><span class="hljs-selector-tag">bot</span>
    <span class="hljs-selector-class">.addDir</span>(path.join(__dirname, <span class="hljs-string">'commands'</span>))
    <span class="hljs-selector-class">.addDir</span>(path.join(__dirname, <span class="hljs-string">'events'</span>))
    <span class="hljs-selector-class">.connect</span>();
</code></pre>
<p>Your <code>index.js</code> file should now look something like this:</p>
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
<h2 id="the-ready-event">The <code>Ready</code> event</h2>
<p>Create a file in <code>./events</code> and name it <code>ready.js</code>.
Require the EventListener:</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> { EventListener } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'yuuko'</span>);
</code></pre>
<p>and create an event listener:</p>
<pre><code class="lang-js"><span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> EventListener(<span class="hljs-string">'ready'</span>, <span class="hljs-function"><span class="hljs-params">(context)</span> =&gt;</span> {
  <span class="hljs-regexp">//</span> context.client = bot
  <span class="hljs-built_in">console</span>.log(`<span class="javascript">Logged <span class="hljs-keyword">in</span> <span class="hljs-keyword">as</span> ${context.client.user.usename}</span>`);
});
</code></pre>
<p>Alternatively, you may also do:</p>
<pre><code class="lang-js"><span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> EventListener(<span class="hljs-string">'ready'</span>, <span class="hljs-function"><span class="hljs-params">({client})</span> =&gt;</span> {
  <span class="hljs-regexp">//</span> client = bot
  <span class="hljs-built_in">console</span>.log(`<span class="javascript">Logged <span class="hljs-keyword">in</span> <span class="hljs-keyword">as</span> ${client.user.usename}</span>`);
});
</code></pre>
<p>instead of importing the whole <code>context</code>. You may be thinking:
&#39;Hey, I didn&#39;t define the <code>client</code> variable in <code>bot.extendContext({})</code>! Why can it be used here?&#39;
Well, Yuuko automatically sets the <code>client</code> as the <code>bot</code>, so you do not need to worry about it!</p>
<p>Now, start your project:</p>
<pre><code class="lang-bash">nodemon .
</code></pre>
<p>Your final <code>ready.js</code> code:</p>
<pre><code class="lang-js">const { EventListener } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'yuuko'</span>);
<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> EventListener(<span class="hljs-string">'ready'</span>, <span class="hljs-function"><span class="hljs-params">({client})</span> =&gt;</span> {
  <span class="hljs-regexp">//</span> client = bot
  <span class="hljs-built_in">console</span>.log(`<span class="javascript">Logged <span class="hljs-keyword">in</span> <span class="hljs-keyword">as</span> ${client.user.usename}</span>`);
});
</code></pre>
<h2 id="you-first-command">You first command</h2>
<p>Now, create a file in <code>./commands</code>.
What command should we create, then?
Let&#39;s look to our dear friend Dank Memer for some inspiration:
<img src="https://i.ibb.co/r700Hs1/2021-07-19.png" alt=""></p>
<p>There! Let&#39;s make this command then. Name the file you created <code>owo.js</code>.</p>
<p>Open it, and put the following code inside:</p>
<pre><code class="lang-js">const { Command } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'yuuko'</span>);
<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> Command(<span class="hljs-string">'owo'</span>, <span class="hljs-function"><span class="hljs-params">(message, args, context)</span> =&gt;</span> {
  message.channel.createMessage(<span class="hljs-string">'OwO'</span>);
});
</code></pre>
<p>and you&#39;re done! Your bot should now respond with &#39;OwO&#39; when you type in the command. It&#39;s that easy!</p>
<h1 id="conclusion">Conclusion</h1>
<p>Eris is a great library to build Discord Bots, as it is lightweight and fast! I will be teaching you how to make a <code>meme</code> command in my following post. Stay tuned!
(PS You might have to wait quite a while as I have a lot of homework, and have upcoming National Exams to take.)</p>
<p>Oops. I nearly forgot. The tree of your project folder should now be something like</p>
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
<p>Take care and goodbye for now!
I will be putting the final code for all the files in my next post.</p>

    </div>
  </div>
</template>

<script>

export default {
  name: 'About'
}
</script>

<style>
@import '../../../../def.css';
</style>
