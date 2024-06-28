<script>
	import { text } from '@sveltejs/kit';
import facebook from '../img/facebook.png';
	import instagram from '../img/instagram.png';

	export let FrontName;
	console.log(JSON.stringify(FrontName, null, 2));
</script>

<footer class="text-gray-400 text-center font-sans font">
	<div
		class="flex flex-col sm:flex-row justify-center items-center pb-14 px-4 sm:px-0"
		style="background-color: rgb(51,50,50);"
	>
		<div class="w-full sm:w-1/4 mt-5 sm:mr-12 pt-4">
			<p class="font-bold text-gray-300"><a href="/">{FrontName.post.data[1].name} </a></p>
			<div style="height: 1px;" class="bg-black mt-1 w-5 mx-auto mb-0.5"></div>
			<p>
				{FrontName.post.data[1].text}
				<br /><br />
				{FrontName.post.data[2].text}
			</p>
		</div>
		
			
		 <div class="w-full sm:w-auto sm:mr-24 mt-5 sm:mt-0">
			 <p class="font-bold text-gray-300">Adres</p>
			 <div style="height: 1px;" class="bg-black mt-1 w-5 mx-auto mb-0.5"></div>
			 <p class="text-sm"> {FrontName.post.dataH[0].Street} {FrontName.post.dataH[0].HNumber}</p>
			 <p class="text-sm">{FrontName.post.dataH[0].PostalCode} {FrontName.post.dataH[0].City}</p>
			</div>
			<div class="w-full sm:w-auto mt-5 sm:mt-12">
				<p class="font-bold text-gray-300">Contact</p>
				<div style="height: 1px;" class="bg-black mt-1 w-5 mx-auto mb-1"></div>
				<p class="text-sm">
					Telefoon: <a href="tel:{FrontName.post.dataH[0].Number}" class="text-green-700 hover:underline">{FrontName.post.dataH[0].Number}</a>
				</p>
				<p class="text-sm">
					E-mail:
					<a href="mailto:{FrontName.post.dataH[0].Email}" class="text-green-700 hover:underline">
						{FrontName.post.dataH[0].Email}
					</a>
				</p>
				<div class="flex justify-center mt-3">
					<a href="https://www.facebook.com/profile.php?id=61561673542984" target="_blank">
						<img src={facebook} alt="Facebook" width="24" height="24" class="ml-1 mr-2" />
					</a>
					<a href="https://www.instagram.com/hendrikhogendijk" target="_blank">
						<img src={instagram} alt="Instagram" width="24" height="24" />
					</a>
				</div>
			</div>
		</div>
		<div
		class="flex flex-col items-center justify-center w-full h-16 pb-20"
		style="background-color: rgb(51,50,50);"
		>
		<hr class="w-3/4 border-gray-700 pb-10" />
		<p class="text-sm">&copy; 2024 Alle rechten voorbehouden aan Hendrik Hogendijk Hoveniers</p>
	</div>
</footer>
