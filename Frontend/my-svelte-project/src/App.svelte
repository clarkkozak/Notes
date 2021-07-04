<script>
	export let name;
	import Nested from "./events/Nested.svelte";
	import Info from "./props/Info.svelte";
	import Thing from "./logic/Thing.svelte";
	import Outer from "./events/Outer.svelte";
	import CustomButton from "./events/CustomButton.svelte";
	import Menu from "./bindings/Menu.svelte";
	import Textarea from "./bindings/Textarea.svelte";
	import Html from "/bindings/Html.svelte";
	import Todo from "/bingings/Todo.svelte";
	import Video from "/bindings/Video.svelte";
	import Dimensions from "./bindings/Dimensions.svelte"
	import Logo from "./bindings/Logo.svelte";
	import Keypad from "./bindings/Keypad.svelte";

	let count = 0;
	let numbers = [1, 2, 3, 4];
	let user = { loggedIn: false };
	let cats = [
		{ id: "J---aiyznGQ", name: "Keyboard Cat" },
		{ id: "z_AbfPXTKms", name: "Maru" },
		{ id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
	];
	let things = [
		{ id: 1, color: "darkblue" },
		{ id: 2, color: "indigo" },
		{ id: 3, color: "deeppink" },
		{ id: 4, color: "salmon" },
		{ id: 5, color: "gold" },
	];
	let promise = getRandomNumber();
	let mouse = { x: 0, y: 0 };
	const pkg = {
		name: "svelte",
		version: 3,
		speed: "blazing",
		website: "https://svelte.dev",
	};
	let firstName = "world";
	let a = 1;
	let b = 2;
	let yes = false;
	let pin;

	$: if (count >= 15) {
		// We're not limited to declaring reactive values — we can also run arbitrary statements reactively.
		alert(`count is dangerously high`);
		count = 14;
	}

	$: doubled = count * 2;

	$: sum = numbers.reduce((t, n) => t + n, 0);
	
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';


	function handleClick() {
		count += 1;
	}

	function addNumber() {
		numbers = [...numbers, numbers.length + 1];
	}

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}

	function handleThingClick() {
		things = things.slice(1);
	}

	async function getRandomNumber() {
		const res = await fetch("https://svelte.dev/tutorial/random-number"); // i tried
		const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}

	function handlePromiseClick() {
		promise = getRandomNumber();
	}

	function handleMousemove(event) {
		mouse.x = event.clientX;
		mouse.y = event.clientY;
	}
	
	function handlePin() {
		alert(`submitted ${pin}`);
	}
</script>

<main on:mousemove={handleMousemove}>
	<Logo />

	<h1>Hello {name}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>
	<button on:click={handleClick}>
		Clicked {count}
		{count === 1 ? "time" : "times"}
	</button>
	<p>{count} double is {doubled}</p>

	<p>{numbers.join(" + ")} = {sum}</p>

	<button on:click={addNumber}> Add a number </button>
	<Nested answer={42} />
	<Info {...pkg} />

	{#if user.loggedIn}
		<button on:click={toggle}>Log out</button>
	{:else}
		<button on:click={toggle}>Log in</button>
	{/if}

	{#if count > 10}
		<p>{count} is greater than 10</p>
	{:else if 5 > count}
		<p>{count} is less than 5</p>
	{:else}
		<p>{count} is between 5 and 10</p>
	{/if}
	<hr />
	<div class="cats">
		<h3>Famous Cats of YouTube</h3>
		<ul>
			{#each cats as { id, name }}
				<li>
					<a target="_blank" href="https://www.youtube.com/watch?v={id}">
						{name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<hr />
	<h3>
		<a href="https://svelte.dev/tutorial/keyed-each-blocks">Keyed Each Block</a>
	</h3>
	<button on:click={handleThingClick}> Remove first thing </button>

	{#each things as thing (thing.id)}
		<Thing current={thing.color} />
	{/each}
	<hr />

	<button on:click={handlePromiseClick}> generate random number </button>

	{#await promise}
		<p>...awaiting</p>
	{:then number}
		<p>The number is {number}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}

	<hr />
	<p>Thse mouse position is {mouse.x} x {mouse.y}</p>
	<div on:mousemove={(e) => (mouse = { x: e.clientX, y: e.clientY })}>
		The mouse position is {mouse.x} x {mouse.y}
	</div>
	<button on:click|once={() => alert("clicked")}>Only One Alert</button>
	<Outer on:myevent={(event) => alert(event.detail.text)} />
	<CustomButton on:click={() => alert("Event Forward to custom components")} />
	<hr />
	<p>Hello {firstName}!</p>
	<input bind:value={firstName} />

	<label>
		<input type="number" bind:value={a} min="0" max="10" />
		<input type="range" bind:value={a} min="0" max="10" />
	</label>

	<label>
		<input type="number" bind:value={b} min="0" max="10" />
		<input type="range" bind:value={b} min="0" max="10" />
	</label>

	<p>{a} + {b} = {a + b}</p>

	<label>
		<input type="checkbox" bind:checked={yes} />
		Yes! Send me regular email spam
	</label>

	{#if yes}
		<p>Thank you. We will bombard your inbox and sell your personal details.</p>
	{:else}
		<p>
			You must opt in to continue. If you're not paying, you're the product.
		</p>
	{/if}

	<button disabled={!yes}> Subscribe </button>

	<Menu />

	<Textarea />

	<!-- <Html /> -->

	<Todo />

	<Video />

	<Dimensions />
	
	<h3 style="color: {pin ? '#333' : '#ccc'}">{view}</h3>
	
	<Keypad bind:value={pin} on:submit={handlePin} />

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.cats {
		text-align: left;
		width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
