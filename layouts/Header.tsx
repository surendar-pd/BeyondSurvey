import React from 'react';
import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/router';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

const LINKS = [
	{
		name: 'Questions',
		url: '/',
	},
	{
		name: 'Live Status',
		url: '/status',
	},
	{
		name: 'Inbox',
		url: '/inbox',
	},
];

const Header = () => {
	const router = useRouter();

	return (
		<nav className='w-full grid grid-cols-12 z-50  place-items-center border-b border-slate-300 h-[5rem] bg-slate-50'>
			<div className='col-span-3 px-8 -violet-400 flex items-center'>
				<Link className='text-2xl font-medium' href='/'>
					<Image src="/assests/logo.png" alt="logo" width="200" height="0" className=''/>
				</Link>
			</div>
			<div className='col-span-7 -red-400'>
				<Tabs defaultValue='account' className='w-[400px]'>
					<TabsList className='bg-slate-50'>
						{LINKS.map((link, idx) => (
							<TabsTrigger
								value={link.name}
								data-state={
									router.pathname === link.url
										? 'active'
										: 'inactive'
								}
								key={idx}
							>
								<Link href={link.url}>{link.name}</Link>
							</TabsTrigger>
						))}
					</TabsList>
				</Tabs>
			</div>
			<div className='col-span-2 flex justify-end px-8 -green-400'>
				<div className='flex items-center space-x-4'>
					<Button variant='default'>
						<Plus className='mr-2 h-4 w-4' />
						New
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger>
								<Image src={"https://www.ltfs.com/images/default-source/logo/ltfs-spreed-logo-final.png?sfvrsn=e0b9fb92_3"} width={"20"} height={"10"} className='w-36' alt='lnt logo'/>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='mr-8'>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Sign Out</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</nav>
	);
};

export default Header;
