### A junior developers view into the world of software development

Being a novice in this field of software development hasn't stopped me from noticing bad patterns and standards that inject more code into your codebase with unlying unknown complexity - essentially a world of abstraction. I am not anti-abstraction; I very much prefer writing Go over Assembly, or using a car over a horse. But the difference with these abstractions is that they are a) necessary and b) have firm standards and therefore a stable direction in which they will progress. Most abstractions are born out of a perceived necessity of the time which naturally changes based on the times and it's respective perception. I am not anti-progress nor change; I expect every so often a new shift in the approach to software engineering will occur, and we are better for it. But when you create an abstraction to fix a problem created by abstraction which also leads to another problem requiring an abstraction - we must take a step back and re-evaluate a few things.


There are many examples I can provide that fit the criteria above, such as:
 
1. Abstracting database access with ORMs can make simple queries easy but complex queries verbose and hard to debug. An abstraction meant to simplify can overcomplicate in the name of 'type safety'.
2. Creating many layers of inheritance in OOP can obscure where behavior is actually coming from. An abstraction meant to encapsulate can confuse.
3. Inventing new frameworks to fix limitations of old frameworks, which then gain limitations of their own over time. The cycle never ends (I am contributing to this).
4. GraphQL... API churn

**But specifically, I am referring to the efforts we've gone to, in the name of reactivity, to duplicate state on both the server and the client**

As a young developer who started working with React more recently, I have heard stories of the comedic struggle from my more experienced colleagues as they have had to migrate between React patterns over the years. The grumblings about having to convert all their class components to functional components with hooks. I heard tales of the old battles - class vs function, confusion over lifecycle methods, the growing pains of adopting hooks. Hooks feel quite natural to me now as they are all i've ever know, but I can sympathize with how challenging it must have been to refactor your mind as well as a complex codebase.

I came face-to-face with this with React Server Components. Of course, the promise was improved performance and developer experience once adopted, but that did not make the task any less exhausting. Moving everything from the pages router to the new app router in Next.js has really been a fundamental shift in my mental model of the web. But Caleb you say, this is the last of the fundamental changes! We are finally here! Sure... One day, as my collegues complained to me about class components, I will complain to my own about RSCs.

Maybe I am naive, but why should the same state live on the client and the server? Surely there is no need for this. The server can and will update the client once a mutation happens, so you should use this as your place to render your HTML. If you want some reactivity, sure, sprinkle some JS in there. If the state only lives on the client, JavaScript is your friend. In my naive opinion, RSCs are marginally better HTML templates and Server-Actions are magic AJAX requests - all inccuring crazy levels of abstraction. I am not anti-JS, I am anti-unnecessary-complexity.

## What is the Temporary Standard?

Well, i'm not sure. It's my best guess attempt at creating a set of rules and tools based on my current mental model of the web (which is temporary) by creating a web development approach that minimizes complexity and maximizes performance. Yes, I am also the problem. Some basic principles apply:

### Whichever machine stores the state, will render the HTML

This doesn't literally mean to render your HTML from stored procedures in your DB, but rather which ever control logic fetches, mutates and stores your data should also return full usable HTML. I can understand some caveats with this approach, but I say to you, [insert something cool here].

### JavaScript is good

Reactivity is essential for a rich user experience, and thus JavaScript is an absolute necessity. While you can minimize JavaScript simply by only rendering things on the server by performing a full-page refresh or by using AJAX, this is bad for the user. You shouldn't be performing a round-trip for a singular element to update state that also exists on the client. But, your JavaScript should never create a state in your HTML that isn't re-creatable by the server. Easier said than done. Also, JavaScript is absoloutely needed for accessibility. Ship the JS you need.

### Performance

Don't use a JavaScript backend

## How do we achieve this?

Based on the some of the ideas outligned above we need a backend language that has good templating, a front-end framework that can have state be initialized on the server and a tools to aid this interaction. So basically Go, Lit-Elements, HTMX and some code I cobbled up together.

## Temporary Framework (back-end)

For the love of God, please do not use this framework. If you've gotten over this small insignificant detail, let's move on. This framework, while being an extension of my first framework [GoX](https://gox-framework.org) 💀💀💀, aims to create a tightly coupled experience when working with [HTMX](https://htmx.org/), [Go](https://go.dev/) and [Templ](https://templ.guide/). It employs file-based routing, naming conventions similar to [Next.js](https://nextjs.org/), a dynamic server router and some extensions to the Templ library. 

I'm not really bothered to reveal much now, but feel free to watch an explanation of my first framework and a euphoric moment when I first discovered templ.

[![Introducing GoX](https://img.youtube.com/vi/_gDwxfE5KKU/hqdefault.jpg)](https://www.youtube.com/watch?v=_gDwxfE5KKU)

[![Working on a Templ Framework](https://img.youtube.com/vi/TtAHz7azOqs/hqdefault.jpg)](https://www.youtube.com/watch?v=TtAHz7azOqs)

## Temporary UI (front-end)

A UI library built on top of Google's [Material 3](https://m3.material.io/) design standard using [Lit-Elements](https://lit.dev/). Besides styling them to fit my aesthetic, I will be extending them to build small and large components that fit the server/client state ideas mentioned above.

### Consider the following example

Below is a snippet of the `navigation-rail` web component from `temporary ui` used for this website.

```html
<t-navigation-rail hx-boost="true">
	<t-list-item interactive type="link" href="/">
		Home
		<md-icon slot="start">crop_square</md-icon>
	</t-list-item>
	<t-list-item interactive type="link" href="/projects">
		Projects
		<md-icon slot="start">code_blocks</md-icon>
	</t-list-item>
	<t-list-item interactive type="link" href="/experience">
		Experience
		<md-icon slot="start">developer_guide</md-icon>
	</t-list-item>
</t-navigation-rail>
```

At first glance after seeing the `hx-boost` attribute you might assume I am doing a soft full-page refresh. That wouldn't be smart. The browser history natively lives on both the client and on the server (per-request), so it makes no sense to send extra HTML to the client and disrupt client-side smoothness (the user will notice). Instead, the `temporary framework` will hijack the `hx-boost` attribute, and based on the users file-based-routing, will only update the part of the page needed for navigation. This means the `navigation-rail` web component updates itself based on the browser `pop` state event. Additionally, if needed you could initialize this component on the server as such:

```html
<t-navigation-rail hx-boost="true" url="/projects">
  ...
</t-navigation-rail>
```

## Conclusion

I have a loosely defined standard that I think is pretty future proof and minimally complex. But who am I, many smarter people than me have tried and failed. I have no idea what i'm doing. Stay tuned!
