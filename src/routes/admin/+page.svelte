<script>
	import { json } from '@sveltejs/kit';
    export let data;
</script>
 <main class="flex justify-center items-center h-screen">
    <div class="flex">
        <div class=""></div>
        <div></div>
    </div>
    <div class="flex row">
        {#each data.props.data as item (item._id)}
        <div class="">{JSON.stringify(item)}</div>
     {/each}
        <div></div>
    </div>
    <div></div>
</main> 

