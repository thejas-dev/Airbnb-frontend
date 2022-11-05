

export default function Footer() {
	// body...

	return(
		<div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600" >
			<div className="space-y-4 text=xs text-gray-800" >
				<h5 className="font-bold" >ABOUT</h5>
				<p>How Airbnb Works?</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>

			<div className="space-y-4 text=xs text-gray-800" >
				<h5 className="font-bold" >COMMUNITY</h5>
				<p>Accessibility</p>
				<p>This is not a real site!</p>
				<p>Its Good</p>
				<p>Yes bro</p>
				<p>Luxis</p>
			</div>

			<div className="space-y-4 text=xs text-gray-800" >
				<h5 className="font-bold" >HOST</h5>
				<p>Domain Vercel</p>
				<p>Server Heroku</p>
				<p>Snake Ladder</p>
				<p>Full Stack Web Developer</p>
				<p>NOSQL</p>
			</div>

			<div className="space-y-4 text=xs text-gray-800" >
				<h5 className="font-bold" >SUPPORT</h5>
				<p>Help Center</p>
				<p>Trust & Safety</p>
				<p>Youtube</p>
				<p>Instagram</p>
				<p>Twitter</p>
			</div>
		</div>
		)
}