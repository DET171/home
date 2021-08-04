<template>
  <div id="app">
    <div class="markdown-body">
      <h1>Eris &amp; Yuuko: Part IV: The Guild Object + FUN Commands</h1>
      <p>In this post, I will be teaching you how to write a <code>guild</code> command. </p>
      <h1 id="the-guild-command">
        The <code>guild</code> command
      </h1>
      <p>Here&#39;s the code As usual, here&#39;s the code (put it in <code>./commands/guild.js</code>):</p>
      <pre><code class="lang-js"><span class="hljs-keyword">const</span> { Command } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'yuuko'</span>);
<span class="hljs-keyword">const</span> moment = <span class="hljs-built_in">require</span>(<span class="hljs-string">'moment'</span>);
<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> Command([<span class="hljs-string">'guild'</span>, <span class="hljs-string">'server'</span>], (message) =&gt; {
    <span class="hljs-keyword">const</span> guild = message.channel.guild;
    <span class="hljs-keyword">const</span> owner = guild.members.get(guild.ownerID);
    message.channel.createMessage({
        <span class="hljs-attr">embed</span>: {
            <span class="hljs-attr">title</span>: <span class="hljs-string">'Guild Information'</span>,
            <span class="hljs-attr">description</span>: <span class="hljs-string">`Guild information for <span class="hljs-subst">${guild.name}</span> (id: \`<span class="hljs-subst">${guild.id}</span>\`)`</span>,
            <span class="hljs-attr">color</span>: <span class="hljs-number">11272041</span>,
            <span class="hljs-attr">thumbnail</span>: {
                <span class="hljs-attr">url</span>: guild.iconURL,
            },
            <span class="hljs-attr">fields</span>: [
                {
                    <span class="hljs-attr">name</span>: <span class="hljs-string">'Owner:'</span>,
                    <span class="hljs-attr">value</span>: <span class="hljs-string">`<span class="hljs-subst">${owner.username}</span>#<span class="hljs-subst">${owner.discriminator}</span> (id: \`<span class="hljs-subst">${guild.ownerID}</span>\`)`</span>,
                    <span class="hljs-attr">inline</span>: <span class="hljs-literal">false</span>,
                },
                {
                    <span class="hljs-attr">name</span>: <span class="hljs-string">'Created at:'</span>,
                    <span class="hljs-attr">value</span>: <span class="hljs-string">`<span class="hljs-subst">${moment.utc(guild.createdAt).format(<span class="hljs-string">'MMMM, Do YYYY, h:mm:ss a'</span>)}</span>`</span>,
                    <span class="hljs-attr">inline</span>: <span class="hljs-literal">false</span>,
                },
                {
                    <span class="hljs-attr">name</span>: <span class="hljs-string">'Member count:'</span>,
                    <span class="hljs-attr">value</span>: <span class="hljs-string">`<span class="hljs-subst">${guild.memberCount}</span> members`</span>,
                    <span class="hljs-attr">inline</span>: <span class="hljs-literal">false</span>,
                },
            ],
        },
    });
});
</code></pre>
      <p>Again, this is quite simple. This is mostly properties of the guild object. More can be found <a href="https://abal.moe/Eris/docs/Guild">here</a>. I will not be covering this in detail, as I will also be covering a <code>roll</code> command, which is more complex.</p>
      <h1 id="the-roll-command">
        The <code>roll</code> command
      </h1>
      <p>As usual, here&#39;s the code (put it in <code>./commands/roll.js</code>):</p>
      <pre><code class="lang-js"><span class="hljs-keyword">const</span> { Command } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'yuuko'</span>);
<span class="hljs-built_in">require</span>(<span class="hljs-string">'dotenv'</span>).config();
<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">new</span> Command([<span class="hljs-string">'roll'</span>, <span class="hljs-string">'rolladie'</span>, <span class="hljs-string">'rolladice'</span>], (message, args) =&gt; {
    <span class="hljs-keyword">const</span> arg = args.join(<span class="hljs-string">' '</span>);
    <span class="hljs-keyword">if</span>(!args.length) {
        message.channel.createMessage({
            <span class="hljs-attr">embed</span>: {
                <span class="hljs-attr">title</span>: <span class="hljs-string">`<span class="hljs-subst">${message.author.username}</span> rolled a die!`</span>,
                <span class="hljs-attr">description</span>: <span class="hljs-string">`<span class="hljs-subst">${message.author.mention}</span> rolled a die and got **<span class="hljs-subst">${<span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">6</span>) + <span class="hljs-number">1</span>}</span>**!`</span>,
                <span class="hljs-attr">color</span>: <span class="hljs-number">12252021</span>,
                <span class="hljs-attr">fields</span>: [
                ],
            },
        });
    }
    <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">try</span> {
            <span class="hljs-keyword">const</span> num = arg.trim().split(<span class="hljs-string">'d'</span>);
            <span class="hljs-keyword">const</span> times = <span class="hljs-built_in">parseInt</span>(num[<span class="hljs-number">0</span>]);
            <span class="hljs-keyword">const</span> max = <span class="hljs-built_in">parseInt</span>(num[<span class="hljs-number">1</span>]) || <span class="hljs-number">6</span>;
            <span class="hljs-keyword">const</span> nums = [];
            <span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; times; i++) {
                <span class="hljs-keyword">let</span> result = <span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * max); <span class="hljs-comment">// eslint-disable-line prefer-const</span>
                result = result + <span class="hljs-number">1</span>;
                nums.push(result);
            }
            message.channel.createMessage({
                <span class="hljs-attr">embed</span>: {
                    <span class="hljs-attr">title</span>: <span class="hljs-string">`<span class="hljs-subst">${message.author.username}</span> rolled a <span class="hljs-subst">${times}</span> dice!`</span>,
                    <span class="hljs-attr">description</span>: <span class="hljs-string">`<span class="hljs-subst">${message.author.mention}</span> rolled a <span class="hljs-subst">${times}</span> dice and got [ **<span class="hljs-subst">${nums.join(<span class="hljs-string">' '</span>)}</span>** ]!`</span>,
                    <span class="hljs-attr">color</span>: <span class="hljs-number">12252021</span>,
                },
            });
        }
        <span class="hljs-keyword">catch</span>(err) {
            <span class="hljs-built_in">console</span>.warn(err);
            message.channel.createMessage(<span class="hljs-string">`<span class="hljs-subst">${message.author.mention}</span>, the correct usage would be \`<span class="hljs-subst">${process.env.PREFIX}</span> roll &lt;number of dice to roll&gt;d&lt;highest number on the die&gt;\``</span>);
        }
    }
});
</code></pre>
      <p>
        Now, let me explain.
        A user is supposed to type the command in the followoing format, assuming the prefix is <code>!</code>:
      </p>
      <pre><code class="lang-bash"><span class="hljs-addition">!roll</span>
</code></pre>
      <pre><code class="lang-bash">!roll <span class="hljs-number">10</span>d6
# or !roll <span class="hljs-number">10</span> d <span class="hljs-number">6</span>
</code></pre>
      <p>btw there are few aliases for this command:</p>
      <pre><code class="lang-js">[<span class="hljs-symbol">'roll</span>', <span class="hljs-symbol">'rolladie</span>', <span class="hljs-symbol">'rolladice</span>']
</code></pre>
      <p>We check for arguments, and if there are none, we roll a random number from 1 to 6 and send it in an embed:</p>
      <pre><code class="lang-js"><span class="hljs-selector-tag">if</span>(!args.length) {
        <span class="hljs-selector-tag">message</span><span class="hljs-selector-class">.channel</span><span class="hljs-selector-class">.createMessage</span>({
            <span class="hljs-attribute">embed</span>: {
                <span class="hljs-attribute">title</span>: <span class="hljs-built_in">`${message.author.username} rolled a die!`</span>,
                <span class="hljs-attribute">description</span>: <span class="hljs-built_in">`${message.author.mention} rolled a die and got **${Math.floor(Math.random() * 6) + 1}**!`</span>,
                <span class="hljs-attribute">color</span>: <span class="hljs-number">12252021</span>,
                <span class="hljs-attribute">fields</span>: [
                ],
            },
        });
    }
</code></pre>
      <p>And if there are arguments, we join the arguments:</p>
      <pre><code class="lang-js"><span class="hljs-keyword">const</span> arg = args.<span class="hljs-keyword">join</span>(<span class="hljs-string">' '</span>);
</code></pre>
      <p>
        and split it by <code>d</code>.
        We first initialize an empty array<code>[]</code>, use the <code>for</code> loop to roll a random number between the number the user specified (if not, the default is <code>6</code>) and push the result to the array the number of times the user specified.<br>After that has been completed, we join the array with spaces and send it in an embed:
      </p>
      <pre><code class="lang-js"><span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">try</span> {
            <span class="hljs-keyword">const</span> num = arg.trim().split(<span class="hljs-string">'d'</span>);
            <span class="hljs-keyword">const</span> times = <span class="hljs-built_in">parseInt</span>(num[<span class="hljs-number">0</span>]);
            <span class="hljs-keyword">const</span> max = <span class="hljs-built_in">parseInt</span>(num[<span class="hljs-number">1</span>]) || <span class="hljs-number">6</span>;
            <span class="hljs-keyword">const</span> nums = [];
            <span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; times; i++) {
                <span class="hljs-keyword">let</span> result = <span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * max); <span class="hljs-comment">// eslint-disable-line prefer-const</span>
                result = result + <span class="hljs-number">1</span>;
                nums.push(result);
            }
            message.channel.createMessage({
                <span class="hljs-attr">embed</span>: {
                    <span class="hljs-attr">title</span>: <span class="hljs-string">`<span class="hljs-subst">${message.author.username}</span> rolled a <span class="hljs-subst">${times}</span> dice!`</span>,
                    <span class="hljs-attr">description</span>: <span class="hljs-string">`<span class="hljs-subst">${message.author.mention}</span> rolled a <span class="hljs-subst">${times}</span> dice and got [ **<span class="hljs-subst">${nums.join(<span class="hljs-string">' '</span>)}</span>** ]!`</span>,
                    <span class="hljs-attr">color</span>: <span class="hljs-number">12252021</span>,
                },
            });
        }
        <span class="hljs-keyword">catch</span>(err) {
            <span class="hljs-built_in">console</span>.warn(err);
            message.channel.createMessage(<span class="hljs-string">`<span class="hljs-subst">${message.author.mention}</span>, the correct usage would be \`<span class="hljs-subst">${process.env.PREFIX}</span> roll &lt;number of dice to roll&gt;d&lt;highest number on the die&gt;\``</span>);
        }
    }
</code></pre>
      <p>
        EZPZ.
        PS tell me in the comments if you have any trouble.
      </p>
      <h1 id="conclusion">
        Conclusion
      </h1>
      <p>
        Woohoo! We made a <code>fun</code> command today, and also accessed the <code>guild</code> object. That&#39;s about the end of it for today.
        Take care and goodbye!
      </p>
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
