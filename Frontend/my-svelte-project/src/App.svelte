<script>
	export let name;
	import Nested from "./Nested.svelte";
	import Info from "./Info.svelte";
	import Thing from "./Thing.svelte";

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

	const pkg = {
		name: "svelte",
		version: 3,
		speed: "blazing",
		website: "https://svelte.dev",
	};

	$: if (count >= 15) {
		// We're not limited to declaring reactive values — we can also run arbitrary statements reactively.
		alert(`count is dangerously high`);
		count = 14;
	}

	$: doubled = count * 2;

	$: sum = numbers.reduce((t, n) => t + n, 0);

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

</script>

<main>
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
	<hr>
	<h3>
		<a href="https://svelte.dev/tutorial/keyed-each-blocks">Keyed Each Block</a>
	</h3>
	<button on:click={handleThingClick}> Remove first thing </button>

	{#each things as thing (thing.id)}
		<Thing current={thing.color} />
	{/each}
	<hr>

	<button on:click={handlePromiseClick}>
		generate random number
	</button>
	
	{#await promise}
		<p>...awaiting</p>
	{:then number}
		<p>The number is {number}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
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
