import Image from 'next/image';


export default function MediumCard({img,title}) {
	// body...

	return(
	<div className="cursor-pointer hover:scale-105 transform transition 
	duration-300 ease-out ">
		<div className="relative h-80 w-80 ">
			<Image 
			layout="fill"
			className="rounded-xl"
			src={img}
			/>
		</div>
		<h3 className="text-2xl mt-3">{title}</h3>
	</div>
		)
}