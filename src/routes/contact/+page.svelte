<main class="flex flex-col min-h-screen">
	<section class="w-full h-screen bg-black flex justify-center items-center">
		<div class="flex justify-center space-x-4">
			<form class="bg-white p-6 rounded shadow-md">
				<div class="mb-4">
					<h2 class="text-2xl mb-5">Wilt u iets weten of contact met mij opnemen?</h2>
					<p>Telefoon</p>
					<h2 class="text-3xl">06 43382947</h2>
					<p>E-mail</p>
				</div>
			</form>
			<form class="bg-white p-6 rounded shadow-md">
				<h2 class="text-2xl mb-5">Of neem contact op via het contactformulier</h2>
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
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="message"></label>
					<textarea
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Bericht"
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
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit">Verstuur</button
					>
				</div>
			</form>
		</div>
	</section>
</main>
