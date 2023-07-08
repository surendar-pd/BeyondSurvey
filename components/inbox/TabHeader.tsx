import React from 'react';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

const TabHeader = () => {
	return (
		<TabsList className='w-full grid grid-cols-12 gap-2 p-2 h-fit'>
			<TabsTrigger value='inbox' className='col-span-2'>
				Inbox (6)
			</TabsTrigger>
			<TabsTrigger value='upcoming' className='col-span-2'>
				Upcoming (3)
			</TabsTrigger>
			<TabsTrigger value='comments' className='col-span-2'>
				My Comments
			</TabsTrigger>
			<Input type='text' placeholder='Search' className='col-span-2' />
			<Select>
				<SelectTrigger className='col-span-2'>
					<SelectValue placeholder='Due' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value='all'>All</SelectItem>
						<SelectItem value='overdue'>Overdue</SelectItem>
						<SelectItem value='no-due-date'>No Due Date</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger className='col-span-2'>
					<SelectValue placeholder='Assigned' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value='assigned'>Assigned to me</SelectItem>
						<SelectItem value='team'>Team</SelectItem>
						<SelectItem value='others'>Others</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</TabsList>
	);
};

export default TabHeader;
