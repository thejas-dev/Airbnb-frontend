import Image from 'next/image';
import {
	MagnifyingGlassIcon,
	GlobeAltIcon,
	UserCircleIcon,
	UsersIcon,
	Bars3Icon
} from '@heroicons/react/24/solid';


export default function Header(){
	return (
		<header className="sticky top-0 z-50 grid  grid-cols-3 
		bg-white shadow-md md:px-10 md:p-5 p-2 ">
			<div className="relative flex items-center justify-center h-10 
			cursor-pointer my-auto" >
				<Image 
				src='https://links.papareact.com/qd3'
				layout="fill"
				objectFit="contain"
				objectPosition="left"
				/>
			</div>
			<div className="flex items-center 
			md:border-2 rounded-full py-2 md:shadow-sm" >
				<input type="text"
				className="pl-5 flex-grow outline-none bg-transparent
				text-sm text-gray-600 placeholder-gray-400"
				placeholder="Start Your Search"/>
				<MagnifyingGlassIcon className="h-8 hidden md:inline-flex text-white font-bold rounded-full 
				p-2 cursor-pointer bg-red-400 md:mx-2" />
			</div>
			<div className="flex space-x-4 items-center text-gray-500 justify-end" >
				<p className="hidden md:inline-flex cursor-pointer">Become a Host</p>
				<GlobeAltIcon className="h-6 cursor-pointer" /> 
				<div className="flex items-center space-x-2 border-2 p-2 
				rounded-full">
					<Bars3Icon className="h-6"/>
					<UserCircleIcon className="h-6"/>
				</div>
			</div>
		</header>

		)
}