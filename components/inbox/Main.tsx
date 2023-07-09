import React from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import TabHeader from './TabHeader';
import { LayoutList } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const INBOX = [
	{
		title: 'Kolkata Location Approval',
		description: 'The request was raised by (Name) on (Date) for (location) ...',
		status: 'overdue',
		date: '7th July',
	},
	{
		title: 'Issue at Mumbai Location',
		description: 'The request was raised by (Name) on (Date) for (location) ...',
		status: 'overdue',
		date: '7th July',
	},
	{
		title: 'Approval Pending for Delhi',
		description: 'The request was raised by (Name) on (Date) for (location) ...',
		status: 'overdue',
		date: '7th July',
	},
	{
		title: 'Approval for Delhi',
		description: 'The request was raised by (Name) on (Date) for (location) ...',
		status: 'no-overdue',
		date: '13th July',
	},
	{
		title: 'Approval for Mumbai',
		description: 'The request was raised by (Name) on (Date) for (location) ...',
		status: 'no-overdue',
		date: '13th July',
	},
	{
		title: 'Approval for Kolkata',
		description: 'The request was raised by (Name) on (Date) for (location) ...',
		status: 'no-overdue',
		date: '13th July',
	},
	{
		title: 'Approval for Delhi',
		description: 'The request was raised by (Name) on (Date) for (location) ...',
		status: 'upcoming',
		date: '13th July',
	},
	{
		title: 'Approval for Mumbai',
		description: 'The request was raised by (Name) on (Date) for (location) ...',
		status: 'upcoming',
		date: '13th July',
	},
	{
		title: 'Approval for Kolkata',
		description: 'The request was raised by (Name) on (Date) for (location) ...',
		status: 'upcoming',
		date: '13th July',
	},
];

const InboxMain = () => {
	return (
		<div className='col-span-8 w-full'>
			<Tabs defaultValue='inbox' className='w-full mt-4'>
				<TabHeader />
				<TabsContent value='inbox' className=''>
					<h3 className='font-medium text-lg mt-4'>Overdue</h3>
					<ul className='flex flex-col gap-4 mt-4'>
						{INBOX.filter((val) => val.status === 'overdue').map(
							(item) => (
								<li
									key={item.title}
									className='flex items-center w-full gap-4 rounded px-4 py-2 hover:bg-slate-300/30 transition-all duration-300 cursor-pointer'
								>
									<LayoutList strokeWidth={1.5} />
									<div className='mr-auto'>
										<p>{item.title}</p>
										<p className='text-slate-500 text-sm'>
											{item.description}
										</p>
									</div>
									<div className='flex items-center gap-2'>
										<span className='text-red-500 text-sm'>
											{item.date}
										</span>
										<Avatar className=''>
											<AvatarImage src='https://github.com/shadcn.png' />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</div>
								</li>
							)
						)}
					</ul>
					<h3 className='font-medium text-lg mt-4'>No Due Date</h3>
					<ul className='flex flex-col gap-4 mt-4'>
						{INBOX.filter((val) => val.status === 'no-overdue').map(
							(item) => (
								<li
									key={item.title}
									className='flex items-center w-full gap-4 rounded px-4 py-2 hover:bg-slate-300/30 transition-all duration-300 cursor-pointer'
								>
									<LayoutList strokeWidth={1.5} />
									<div className='mr-auto'>
										<p>{item.title}</p>
										<p className='text-slate-500 text-sm'>
											{item.description}
										</p>
									</div>
									<div className='flex items-center gap-2'>
										{/* <span className=''>{item.date}</span> */}
										<Avatar className=''>
											<AvatarImage src='https://github.com/shadcn.png' />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</div>
								</li>
							)
						)}
					</ul>
				</TabsContent>
				<TabsContent value='upcoming'>
					<h3 className='font-medium text-lg'>Upcoming</h3>
					<ul className='flex flex-col gap-4 mt-4'>
						{INBOX.filter((val) => val.status === 'upcoming').map(
							(item) => (
								<li
									key={item.title}
									className='flex items-center w-full gap-4 rounded px-4 py-2 hover:bg-white transition-all duration-300 cursor-pointer'
								>
									<LayoutList strokeWidth={1.5} />
									<div className='mr-auto'>
										<p>{item.title}</p>
										<p className='text-slate-500 text-sm'>
											{item.description}
										</p>
									</div>
									<div className='flex items-center gap-2'>
										<span className='text-sm'>
											{item.date}
										</span>
										<Avatar className=''>
											<AvatarImage src='https://github.com/shadcn.png' />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</div>
								</li>
							)
						)}
					</ul>
				</TabsContent>
				<TabsContent value='comments'>
					<h3 className='font-medium text-lg'>My Comments</h3>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default InboxMain;
