<script>
	export let name;

	let count = 0;
	let numbers = [1, 2, 3, 4]

	$: if (count >= 10) { // We're not limited to declaring reactive values — we can also run arbitrary statements reactively.
		alert(`count is dangerously high`);
		count = 9;
	} 

	$: doubled = count * 2;
	
	$: sum = numbers.reduce((t,n) => t + n, 0)

	function handleClick() {
		count += 1;
	}
	
	function addNumber() {
		numbers = [...numbers, numbers.length + 1]
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

	<p>{numbers.join(' + ')} = {sum}</p>

	<button on:click={addNumber}>
		Add a number
	</button>
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
