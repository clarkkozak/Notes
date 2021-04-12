<script>
	import { createEventDispatcher} from 'svelte'
	
	const dispatch = createEventDispatcher()
	
	function sayHello() {
		dispatch('myevent', {
			text: 'Hello from Inner.svelte',
		})
	}
</script>

<button on:click={sayHello}>
	Click to say hello
</button>