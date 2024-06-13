<main class="flex flex-col min-h-screen">
	<section class="w-full h-screen bg-black flex justify-center items-center">
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
						<a href="https://www.facebook.com/" target="_blank">
							<img src="src/img/facebook.png" alt="Facebook" width="32" height="32" class="mr-2" />
						</a>
						<a href="https://www.x.com/" target="_blank">
							<img src="src/img/x.png" alt="X" width="32" height="32" class="mr-2" />
						</a>
						<a href="https://www.instagram.com/" target="_blank">
							<img src="src/img/instagram.png" alt="Instagram" width="32" height="32" />
						</a>
					</div>
					<br />
					<iframe
						class="rounded-lg"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.6308189690626!2d5.257383667642187!3d52.10465016237384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c642900a575ea7%3A0x124b99d0ed852c06!2sHuis%20ter%20Heideweg%2042%2C%203705%20LZ%20Zeist!5e0!3m2!1sen!2snl!4v1718264077439!5m2!1sen!2snl"
						width="600"
						height="350"
						style="border:0;"
						loading="lazy"
						title="Maps"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</form>
			<form class="mt-36 bg-white p-6 rounded shadow-md">
				<h2 class="text-2xl mb-5 font-bold">Of neem contact op via het contactformulier</h2>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="name"></label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						placeholder="Naam"
						required
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="email"></label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="email"
						placeholder="E-mail"
						required
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="tel"></label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="tel"
						placeholder="Telefoonnummer"
						required
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="tel"></label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						placeholder="Adres"
						required
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="message"></label>
					<textarea
						class="shadow appearance-none border rounded w-full h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Vraag / Opmerking"
						required
					></textarea>
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
