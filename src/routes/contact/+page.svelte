<script lang="ts">
	import bg from '../../img/test-2.jpg';
	import { json } from '@sveltejs/kit';
	// import footer from '../../components/Footer.svelte';
	
	export let data;
</script>

<main class="flex flex-col min-h-screen lg:mb-[-30px]">
	<section class="w-full min-h-screen flex justify-center items-center">
		<img
			class="fixed lg:absolut top-0 w-full h-full object-cover blur-[2px] -z-10"
			src={bg}
			alt=""
		/>
		<div class="flex flex-col items-center xl:flex-row justify-center w-full">
			<div
				class="bg-gray-100 p-4 rounded-md shadow-md border-2 transform scale-95 mt-24 xl:mt-0 w-[99%] max-w-[600px] lg:w-full"
			>
				<div>
					<h2 class="text-2xl mb-5 font-bold">Wilt u iets weten of contact met mij opnemen?</h2>
					<p>Telefoon</p>
					<h2 class="text-3xl font-bold">
						{#each data.props.dataH as item (item)}
							<a href="tel:0612345678" class="text-green-600 hover:none text-xl lg:text-3xl">
								{item.Number}
							</a>
						{/each}
					</h2>
					<br />
					<p>E-mail</p>
					{#each data.props.dataH as item (item)}
						<a
							href="mailto:hendrikhogendijkhoveniers@gmail.com"
							class="text-green-600 hover:none text-lg lg:text-3xl font-bold"
						>
							{item.Email}
						</a>
					{/each}
					<br /><br />
					<p>Openingstijden</p>
					<p>Maandag - Vrijdag: 07.00 - 17.00 uur</p>
					<p>Zaterdag: 10.00 - 15.00 uur</p>
					<p>Zondag: Gesloten</p>
					<br />
					<div class="flex">
						{#each data.props.dataH as item (item)}
							<a href={item.Facebook} target="_blank">
								<img
									src="src/img/facebook.png"
									alt="Facebook"
									width="32"
									height="32"
									class="mr-2"
								/>
							</a>
							<a href={item.Instagram} target="_blank">
								<img src="src/img/instagram.png" alt="Instagram" width="32" height="32" />
							</a>
						{/each}
					</div>
					<br />
					<iframe
						class="rounded-md w-full"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.6308189690626!2d5.257383667642187!3d52.10465016237384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c642900a575ea7%3A0x124b99d0ed852c06!2sHuis%20ter%20Heideweg%2042%2C%203705%20LZ%20Zeist!5e0!3m2!1sen!2snl!4v1718264077439!5m2!1sen!2snl"
						width="600"
						height="350"
						style="border:0;"
						loading="lazy"
						title="maps"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
			<form
				class="bg-gray-100 p-6 rounded-md shadow-md border-2 w-[99%] max-w-[600px] transform scale-95"
			>
				<h2 class="text-2xl mb-5 font-bold">Of neem contact op via het contactformulier</h2>
				<div class="relative mb-4 h-10">
					<input
						class="peer outline-none w-full h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
						type="text"
						placeholder=" "
						required
					/>
					<label
						for="name"
						class="flex h-full w-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-placeholder-shown:leading-[3.75] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] text-gray-400
								before:content[' '] before:block before:w-2.5 before:h-1.5 before:mt-[6px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all before:!border-gray-200
								after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all after:!border-gray-200"
						>Naam</label
					>
				</div>
				<div class="relative mb-4 h-10">
					<input
						class="peer outline-none w-full h-full border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
						type="email"
						placeholder=" "
						required
					/>
					<label
						for="email"
						class="flex h-full w-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-placeholder-shown:leading-[3.75] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] text-gray-400
								before:content[' '] before:block before:w-2.5 before:h-1.5 before:mt-[6px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all before:!border-gray-200
								after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all after:!border-gray-200"
						>E-mailadres</label
					>
				</div>
				<div class="relative mb-4 h-10">
					<input
						id="tel"
						class="peer outline-none w-full h-full border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
						type="tel"
						placeholder=" "
						required
					/>
					<label
						for="tel"
						class="flex h-full w-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-placeholder-shown:leading-[3.75] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] text-gray-400
								before:content[' '] before:block before:w-2.5 before:h-1.5 before:mt-[6px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all before:!border-gray-200
								after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all after:!border-gray-200"
						>Telefoonnummer</label
					>
				</div>
				<div class="relative mb-4 h-10">
					<input
						id="address"
						class="peer outline-none w-full h-full border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
						type="text"
						placeholder=" "
						required
					/>
					<label
						for="address"
						class="flex h-full w-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-placeholder-shown:leading-[3.75] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] text-gray-400
								before:content[' '] before:block before:w-2.5 before:h-1.5 before:mt-[6px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all before:!border-gray-200
								after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all after:!border-gray-200"
						>Adres</label
					>
				</div>
				<div class="relative mb-4">
					<textarea
						id="message"
						class="peer outline-none w-full border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline outline-0 h-48 resize-none"
						placeholder=" "
						required
					></textarea>
					<label
						for="message"
						class="flex h-full w-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-placeholder-shown:leading-[3.75] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] text-gray-400
								before:content[' '] before:block before:w-2.5 before:h-1.5 before:mt-[6px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all before:!border-gray-200
								after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all after:!border-gray-200"
						>Vragen / Opmerkingen</label
					>
				</div>
				<div class="mb-6">
					<p>Ik wil:</p>
					<div>
						<label>
							<input type="radio" name="option" value="kennismaken" />
							Kennismaken
						</label>
					</div>
					<div>
						<label>
							<input type="radio" name="option" value="offerte" />
							Offerte aanvragen
						</label>
					</div>
					<div>
						<label>
							<input type="radio" name="option" value="overig" />
							Overig
						</label>
					</div>
				</div>
				<div class="flex items-center justify-between">
					<button
						class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit">Verstuur</button
					>
				</div>
			</form>
		</div>
	</section>
</main>
