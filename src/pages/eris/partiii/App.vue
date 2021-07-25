<template>
  <div id="app">
    <div class="markdown-body">
      <h1>Eris &amp; Yuuko: Part III: The Member Object</h1>

      <p>In this post, I will be teaching you how to write a <code>whois</code> command.</p>
<h1 id="the-whois-command">The <code>whois</code> command</h1>
<p>So, here&#39;s the code:</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> { Command } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'yuuko'</span>);
<span class="hljs-keyword">const</span> moment = <span class="hljs-built_in">require</span>(<span class="hljs-string">'moment'</span>);
<span class="hljs-keyword">const</span> { today } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../../utils.js'</span>);
<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> Command([<span class="hljs-string">'whois'</span>, <span class="hljs-string">'member'</span>], <span class="hljs-keyword">async</span> (message, args, context) =&gt; { <span class="hljs-comment">// eslint-disable-line no-unused-vars</span>
    <span class="hljs-keyword">if</span> (!args[<span class="hljs-number">0</span>]) {
        <span class="hljs-keyword">return</span> message.channel.createMessage(<span class="hljs-string">`<span class="hljs-subst">${message.author.mention}</span>, apologies! Please specify a particular member!`</span>);
    }
    <span class="hljs-keyword">const</span> user = message.mentions[<span class="hljs-number">0</span>];
    <span class="hljs-keyword">const</span> guild = message.channel.guild;
    <span class="hljs-keyword">const</span> member = <span class="hljs-keyword">await</span> guild.members.get(user.id);
    message.channel.createMessage({
        <span class="hljs-attr">embed</span>: {
            <span class="hljs-attr">title</span>: <span class="hljs-string">`User information for <span class="hljs-subst">${user.username}</span>#<span class="hljs-subst">${user.discriminator}</span>`</span>,
            <span class="hljs-attr">thumbnail</span>: {
                <span class="hljs-attr">url</span>: user.avatarURL,
            },
            <span class="hljs-attr">color</span>: <span class="hljs-number">0x008000</span>,
            <span class="hljs-attr">fields</span>: [
                {
                    <span class="hljs-attr">name</span>: <span class="hljs-string">'Account created at:'</span>,
                    <span class="hljs-attr">value</span>: <span class="hljs-string">`<span class="hljs-subst">${moment.utc(user.createdAt).format(<span class="hljs-string">'MMMM, Do YYYY, h:mm:ss a'</span>)}</span>`</span>,
                    <span class="hljs-attr">inline</span>: <span class="hljs-literal">false</span>,
                },
                {
                    <span class="hljs-attr">name</span>: <span class="hljs-string">'User ID:'</span>,
                    <span class="hljs-attr">value</span>: <span class="hljs-string">`\`<span class="hljs-subst">${user.id}</span>\``</span>,
                    <span class="hljs-attr">inline</span>: <span class="hljs-literal">false</span>,
                },
                {
                    <span class="hljs-attr">name</span>: <span class="hljs-string">'Roles:'</span>,
                    <span class="hljs-attr">value</span>: <span class="hljs-string">'&lt;@&amp;'</span> + member.roles.map(<span class="hljs-function">(<span class="hljs-params">r</span>) =&gt;</span> <span class="hljs-string">`<span class="hljs-subst">${r}</span>`</span>).join(<span class="hljs-string">'&gt;, &lt;@&amp;'</span>) + <span class="hljs-string">'&gt;'</span>,
                    <span class="hljs-attr">inline</span>: <span class="hljs-literal">false</span>,
                },
                {
                    <span class="hljs-attr">name</span>: <span class="hljs-string">'Joined server at:'</span>,
                    <span class="hljs-attr">value</span>: <span class="hljs-string">`<span class="hljs-subst">${moment.utc(member.joinedAt).format(<span class="hljs-string">'MMMM, Do YYYY, h:mm:ss a'</span>)}</span>`</span>,
                    <span class="hljs-attr">inline</span>: <span class="hljs-literal">false</span>,
                },
            ],
            <span class="hljs-attr">footer</span>: {
                <span class="hljs-attr">text</span>: today,
            },
        },
    });
});
</code></pre>
<p>Create a file in <code>./commands</code>, and name it <code>whois.js</code>. Proceed to dump the above code into <code>whois.js</code>.  You <em>MIGHT</em> have to run <em><code>npm i moment --save</code></em> to install the <code>moment</code> module.</p>
<p>Now, let me explain the code.
As usual, we require the packages, create the command, and export it:</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> { Command } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'yuuko'</span>);
<span class="hljs-keyword">const</span> moment = <span class="hljs-built_in">require</span>(<span class="hljs-string">'moment'</span>);
<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> Command(<span class="hljs-string">'whois'</span>, <span class="hljs-keyword">async</span> (message, args, context) =&gt; {
  <span class="hljs-comment">// code here</span>
});
</code></pre>
<p>We will then check for arguments. If there are none, we stop the code (or it will return <code>undefined</code>):</p>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (!args[<span class="hljs-number">0</span>]) {
    <span class="hljs-keyword">return</span> message.channel.createMessage(`${message.author.mention}, apologies! Please specify <span class="hljs-literal">a</span> particular member!`)<span class="hljs-comment">;</span>
}
</code></pre>
<p>We use <code>message.author.mention</code> to mention the message author.</p>
<p>We get the first user that is mentioned in the message, get the guild the message was sent in, and get the <code>member</code> object from the <code>guild</code> object:</p>
<pre><code class="lang-js"><span class="hljs-attribute">const user</span> = message.mentions[0];
<span class="hljs-attribute">const guild</span> = message.channel.guild;
<span class="hljs-attribute">const member</span> = await guild.members.get(user.id);
</code></pre>
<p>After that, we proceed to send the embed message with the <code>member</code> and <code>user</code> information:</p>
<pre><code class="lang-js">message.channel.createMessage({
        embed: {
            title: `User information for ${user.username}#${user.discriminator}`,
            thumbnail: {
                url: user.avatarURL,
            },
            color: <span class="hljs-number">0x008000</span>,
            fields: [
                {
                    name: <span class="hljs-string">'Account created at:'</span>,
                    value: `${moment.utc(user.createdAt).format(<span class="hljs-string">'MMMM, Do YYYY, h:mm:ss a'</span>)}`,
                    <span class="hljs-keyword">inline</span>: false,
                },
                {
                    name: <span class="hljs-string">'User ID:'</span>,
                    value: `\`${user.id}\``,
                    <span class="hljs-keyword">inline</span>: false,
                },
                {
                    name: <span class="hljs-string">'Roles:'</span>,
                    value: <span class="hljs-string">'&lt;@&amp;'</span> + member.roles.map((r) =&gt; `${r}`).join(<span class="hljs-string">'&gt;, &lt;@&amp;'</span>) + <span class="hljs-string">'&gt;'</span>,
                    <span class="hljs-keyword">inline</span>: false,
                },
                {
                    name: <span class="hljs-string">'Joined server at:'</span>,
                    value: `${moment.utc(member.joinedAt).format(<span class="hljs-string">'MMMM, Do YYYY, h:mm:ss a'</span>)}`,
                    <span class="hljs-keyword">inline</span>: false,
                },
            ],
        },
    });
</code></pre>
<p>However, what if you wanted this command the have two triggers (e.g. <code>whois</code> and <code>member</code>) instead of just one trigger(<code>whois</code>)?
That&#39;s quite easy. You just have to replace <code>module.exports = new Command(&#39;whois&#39;, async (message, args, context) =&gt;</code> with <code>module.exports = new Command([&#39;whois&#39;, &#39;member&#39;], async (message, args, context) =&gt;</code></p>
<p>This are just some <code>user</code> and <code>member</code> properties, more of them can found at the following pages:</p>
<ul>
<li><a href="https://abal.moe/Eris/docs/Member">Member</a></li>
<li><a href="https://abal.moe/Eris/docs/User">User</a></li>
</ul>
<h1 id="conclusion">Conclusion</h1>
<p>In this article, we learnt how to send more advanced embed with fields, create command aliases, and fetch members from the guild objects. In my next post, I will be making a <code>guild</code> command that shows information about the guild the message was sent in.
Have a nice day!</p>

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
