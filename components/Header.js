import Image from 'next/image';
import {useState} from 'react';
import {useRouter} from 'next/router';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import {
	MagnifyingGlassIcon,
	GlobeAltIcon,
	UserCircleIcon,
	UsersIcon,
	Bars3Icon,
} from '@heroicons/react/24/solid';


export default function Header({placeholder}){
	const [searchInput,setSearchInput] = useState('');
	const [startDate,setStartDate] = useState(new Date());
	const [endDate,setEndDate] = useState(new Date());
	const [noOfGuests,setNoOfGuests] = useState(1);
	const router = useRouter();

	const handleSelect = (ranges) =>{
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	}
	
	const selectionRange = {
		startDate:startDate,
		endDate:endDate,
		key:'selection',
	}

	const resetInput = () =>{
		setSearchInput('')
	}

	const search = () =>{
		router.push({
			pathname:'/search',
			query:{
				location: searchInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				noOfGuests,
			},
		})
	}

	return (
		<header className="sticky top-0 z-50 grid  grid-cols-3 
		bg-white shadow-md md:px-10 md:p-5 p-2 ">
			<div className="relative flex items-center justify-center h-10 
			cursor-pointer my-auto" >
				<Image 
				onClick={()=>router.push('/')}
				src='https://links.papareact.com/qd3'
				layout="fill"
				objectFit="contain"
				objectPosition="left"
				/>
			</div>
			<div className="flex items-center 
			md:border-2 rounded-full py-2 md:shadow-sm" >
				<input type="text"
				value={searchInput}
				onChange={(e)=>setSearchInput(e.target.value)}
				className="pl-5 flex-grow outline-none bg-transparent
				text-sm text-gray-600 placeholder-gray-400"
				placeholder={placeholder || "Start Your Search"}
				/>
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
			{searchInput && (
				<div className="flex flex-col col-span-3 mx-auto mt-2">
					<DateRangePicker 
					ranges={[selectionRange]}
					minDate={new Date()}
					rangeColors={['#FD5B61']}
					onChange={handleSelect}
					/>
					<div className="flex items-center border-b mb-4" >
						<h2 className="text-2xl pl-2 flex-grow font-semibold">Number of Guests</h2>
						<UsersIcon className="h-5" />
						<input 
						value={noOfGuests}
						onChange={e=>setNoOfGuests(e.target.value)}
						type="number" 
						min={1}
						className="w-12 pl-2 text-lg outline-none text-red-400"/>
					</div>
					<div className="flex " >
						<button className="flex-grow text-gray-500 cursor-pointer hover:scale-105 
						transition duration-400 ease-out" 
						onClick={resetInput}
						>Cancel</button>
						<button className="flex-grow text-red-400 cursor-pointer hover:scale-105 
						transition duration-400 ease-out" onClick={()=>search()} >Search</button>
					</div>
				</div>
			)}
		</header>

		)
}