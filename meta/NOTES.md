# Notes

## Motivation

Until this point, my chops as a developer have been specifically beefed up in the enterprise Java arena and Angular space. Though I'm proud to have pushed for front-end experience, I never truly had to master JavaScript as a language. Obviously then, my solution is to spin up an entirely TypeScript-based repository to build and host my own full-stack personal blog.


## On Node

Node.js is not foreign to me, but its implementation nuances are. Reading on its paradigms, history, and evolution has taught me quite a lot for an evening of much-needed deep diving.

Thus far, I think it's fair to say:

```
Node : Express/Fastify/etc.

as

Java EE : Spring/DropWizard/etc.
```

Though I'm not positive diving into Node head-first with the abstraction of Express will be the best way to become more of an expert in JavaScript, I can't help but feel choosing Express will be helpful in ensuring I don't miss out on the opportunity to practice core JavaScript paradigms that I may if choosing a more modern abstraction.

Koa, for example, sounds amazing on paper. As an abstraction on top of an abstraction (a child of the lessons learned by the Express team), it in theory offers an even more impressive and robust developer experience without sacrificing performance or its extensible edge. I don't think it's a secret that as abstractions grow without bound to achieve these development gains, low-level implementation knowledge becomes more sparse in industry by the month. Koa itself has a single, highly marketed claim to fame that helps reinforce this idea: "__ditch callbacks by leveraging new async functions!__" Though this abstraction is indeed bad-ass, it presents a problem for JavaScript rookies who will need to understand call chains that inevitably boil down to a series of callback functions without any practice in writing or reading them.

With this project, I am choosing to recognize this notion and honor the fact that I desire to struggle through a bit more JavaScript language hurdles (via TypeScript) in hopes of emerging a stronger developer.

### On TypeScript

As an Angular developer, I grew to love TypeScript for various and fundamentally different reasons.
1. It's pretty. Syntactically, structurally, __sectionally__.
2. The obvious: it's strongly-typed. Transferring my Java background to the front-end was seamless when doing so with TypeScript as the language of implementation. It's just enterprisey enough to trick my OO-Oriented brain into thinking I knew its conventions out of the gate. __Spoiler__: I didn't, but learning TypeScript happened around the time I also learned that confidence and a healthy naiveté are key when I approach anything new.

### On Environments

For various reasons, listed immediately below, I am opting to use AWS. Though it truly does feel like a self-inflicted pigeon-hole, I also know in my gut that regardless of the PaaS I choose, the fundamental knowledge needed to be savvy within it is somewhat of a constant.

1. AWS is cheap (relatively; I know its cost delta to GCP is negligible for my purposes)
2. AWS is "easy" in that the web UI has seen enough iterations and received enough complaints to be in a somewhat mature state
3. AWS is prevalent - in my career, at my current job, within the industry, at a global scale
