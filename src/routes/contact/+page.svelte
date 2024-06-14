<script>
	let name = '';
	let isFocusedName = false;
	let email = '';
	let isFocusedEmail = false;
	let tel = '';
	let isFocusedTel = false;
	let address = '';
	let isFocusedAddress = false;
	let message = '';
	let isFocusedMessage = false;
</script>

<main class="flex flex-col min-h-screen">
	<section class="w-full min-h-screen bg-black flex justify-center items-center pt-4 pb-12">
		<div class="flex justify-center space-x-4">
			<form class="mt-36 bg-white p-6 rounded shadow-md">
				<div class="mb-4">
					<h2 class="text-2xl mb-5 font-bold">Wilt u iets weten of contact met mij opnemen?</h2>
					<p>Telefoon</p>
					<h2 class="text-3xl font-bold">
						<a href="tel:0612345678" class="text-green-500 hover:none text-3xl"> 06 12345678 </a>
					</h2>
					<br />
					<p>E-mail</p>
					<a
						href="mailto:hendrikhogendijkhoveniers@gmail.com"
						class="text-green-500 hover:none text-3xl font-bold"
					>
						hendrikhogendijkhoveniers@gmail.com
					</a>
					<br /><br />
					<p>Openingstijden</p>
					<p>Maandag - Vrijdag: 07.00 - 17.00 uur</p>
					<p>Zaterdag: 10.00 - 15.00 uur</p>
					<p>Zondag: Gesloten</p>
					<br />
					<div class="flex">
						<a href="https://www.facebook.com/hendrikhogendijk" target="_blank">
							<img src="src/img/facebook.png" alt="Facebook" width="32" height="32" class="mr-2" />
						</a>
						<a href="https://www.instagram.com/hendrikhogendijk" target="_blank">
							<img src="src/img/instagram.png" alt="Instagram" width="32" height="32" />
						</a>
					</div>
					<br />
					<iframe
						class="rounded-md"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.6308189690626!2d5.257383667642187!3d52.10465016237384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c642900a575ea7%3A0x124b99d0ed852c06!2sHuis%20ter%20Heideweg%2042%2C%203705%20LZ%20Zeist!5e0!3m2!1sen!2snl!4v1718264077439!5m2!1sen!2snl"
						width="600"
						height="350"
						style="border:0;"
						loading="lazy"
						title="maps"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</form>
			<form class="mt-36 bg-white p-6 rounded shadow-md">
				<h2 class="text-2xl mb-5 font-bold">Of neem contact op via het contactformulier</h2>
				<div class="relative mb-4">
					<input
						bind:value={name}
						on:focus={() => (isFocusedName = true)}
						on:blur={() => (isFocusedName = false)}
						id="name"
						class="shadow appearance-none border rounded-md w-full h-14 pt-4 pb-1 px-3 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						required
					/>
					<label
						for="name"
						class="absolute left-4 top-0 mt-4 transition-all duration-300 ease-in-out pointer-events-none text-gray-400"
						class:text-sm={name || isFocusedName}
						class:text-base={!name && !isFocusedName}
						style={name || isFocusedName ? 'top: -13px; left: 12px;' : 'top: 0;'}>Naam</label
					>
				</div>
				<div class="relative mb-4">
					<input
						bind:value={email}
						on:focus={() => (isFocusedEmail = true)}
						on:blur={() => (isFocusedEmail = false)}
						id="email"
						class="shadow appearance-none border rounded-md w-full h-14 pt-4 pb-1 px-3 leading-tight focus:outline-none focus:shadow-outline"
						type="email"
						required
					/>
					<label
						for="email"
						class="absolute left-4 top-0 mt-4 transition-all duration-300 ease-in-out pointer-events-none text-gray-400"
						class:text-sm={email || isFocusedEmail}
						class:text-base={!email && !isFocusedEmail}
						style={email || isFocusedEmail ? 'top: -13px; left: 12px;' : 'top: 0;'}
						>E-mailadres</label
					>
				</div>
				<div class="relative mb-4">
					<input
						bind:value={tel}
						on:focus={() => (isFocusedTel = true)}
						on:blur={() => (isFocusedTel = false)}
						id="tel"
						class="shadow appearance-none border rounded-md w-full h-14 pt-4 pb-1 px-3 leading-tight focus:outline-none focus:shadow-outline"
						type="tel"
						required
					/>
					<label
						for="tel"
						class="absolute left-4 top-0 mt-4 transition-all duration-300 ease-in-out pointer-events-none text-gray-400"
						class:text-sm={tel || isFocusedTel}
						class:text-base={!tel && !isFocusedTel}
						style={tel || isFocusedTel ? 'top: -13px; left: 12px;' : 'top: 0;'}
						>Telefoonnummer</label
					>
				</div>
				<div class="relative mb-4">
					<input
						bind:value={address}
						on:focus={() => (isFocusedAddress = true)}
						on:blur={() => (isFocusedAddress = false)}
						id="address"
						class="shadow appearance-none border rounded-md w-full h-14 pt-4 pb-1 px-3 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						required
					/>
					<label
						for="address"
						class="absolute left-4 top-0 mt-4 transition-all duration-300 ease-in-out pointer-events-none text-gray-400"
						class:text-sm={address || isFocusedAddress}
						class:text-base={!address && !isFocusedAddress}
						style={address || isFocusedAddress ? 'top: -13px; left: 12px;' : 'top: 0;'}>Adres</label
					>
				</div>
				<div class="relative mb-4">
					<textarea
						bind:value={message}
						on:focus={() => (isFocusedMessage = true)}
						on:blur={() => (isFocusedMessage = false)}
						id="message"
						class="shadow appearance-none border rounded-md w-full h-48 pt-6 pb-1 px-3 leading-tight focus:outline-none focus:shadow-outline"
						style="resize: none;"
						required
					></textarea>
					<label
						for="message"
						class="absolute left-4 top-0 mt-4 transition-all duration-300 ease-in-out pointer-events-none text-gray-400"
						class:text-sm={message || isFocusedMessage}
						class:text-base={!message && !isFocusedMessage}
						style={message || isFocusedMessage ? 'top: -13px; left: 12px;' : 'top: 0;'}
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
						class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit">Verstuur</button
					>
				</div>
			</form>
		</div>
	</section>
</main>
