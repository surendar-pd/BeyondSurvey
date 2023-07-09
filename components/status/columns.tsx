import { Check, X, ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

export interface Agency {
	name: string;
	location: string;
	assignees: string[];
	activity: string;
	progress: number;
	status: 'on track' | 'overdue' | 'no due';
	due: Date;
	overdueTasks: number;
	q1: boolean;
	q2: boolean;
	q3: boolean;
	q4: boolean;
	q5: boolean;
}

export const columns: ColumnDef<Agency>[] = [
	{
		accessorKey: 'name',
		header: () => <div className='w-20'>Name</div>,
	},
	{
		accessorKey: 'location',
		header: 'Location',
	},
	{
		accessorKey: 'assignees',
		header: 'Assignees',
		cell: ({ row }) => {
			const srcs = row.getValue('assignees') as Agency['assignees'];

			return (
				<div className='flex items-center mt-2'>
					{srcs.map((src) => (
						<Avatar
							key={src}
							className='hover:-translate-y-1 [&:not(:first-child)]:-ml-4 w-8 h-8 hover:mr-4 transition-all hover:z-50 duration-300 cursor-pointer'
						>
							<AvatarImage src={src} />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					))}
				</div>
			);
		},
	},
	{
		accessorKey: 'activity',
		header: () => <div className='w-28'>Last Active</div>,
		cell: ({ row }) => {
			return (
				<div className='text-gray-500'>{row.getValue('activity')}</div>
			);
		},
	},
	{
		accessorKey: 'progress',
		header: () => <div className='w-32'>Progress</div>,
		cell: ({ row }) => {
			const value = row.getValue('progress') as number;
			return (
				<Progress
					className='h-2'
					indicatorClassName={`${
						value < 40
							? 'bg-red-500'
							: value >= 40 && value < 60
							? 'bg-yellow-500'
							: 'bg-green-500'
					}`}
					value={row.getValue('progress')}
				/>
			);
		},
	},
	{
		accessorKey: 'status',
		header: () => <div className='w-24'>Status</div>,
		cell: ({ row }) => {
			const value = row.getValue('status') as Agency['status'];
			return (
				<Badge
					className={`${
						value === 'on track'
							? 'bg-cyan-400/50'
							: value === 'overdue'
							? 'bg-rose-400/50'
							: 'bg-amber-400/50'
					} capitalize font-normal`}
					variant={'outline'}
				>
					{value}
				</Badge>
			);
		},
	},
	{
		accessorKey: 'due',
		header: () => <div className='w-24'>Due</div>,
		cell: ({ row }) => {
			const date = row.getValue('due') as Agency['due'];
			return <div>{format(date, 'MMM do yyyy')}</div>;
		},
	},
	{
		accessorKey: 'overdueTasks',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					className='w-40'
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Overdue Tasks
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			);
		},
		cell: ({ row }) => {
			const value = row.getValue(
				'overdueTasks'
			) as Agency['overdueTasks'];
			return (
				<Button variant={'outline'} className='font-normal'>
					{value} tasks
				</Button>
			);
		},
	},
	{
		accessorKey: 'q1',
		header: () => <div className='w-24'>Question 1</div>,
		cell: ({ row }) => {
			const value = row.getValue('q1') as boolean;
			return value ? (
				<Check
					size={16}
					color='black'
					strokeWidth={1.5}
					className='mx-auto'
				/>
			) : (
				<X
					size={16}
					color='black'
					strokeWidth={1.5}
					className='mx-auto'
				/>
			);
		},
	},
	{
		accessorKey: 'q2',
		header: () => <div className='w-24'>Question 2</div>,
		cell: ({ row }) => {
			const value = row.getValue('q2') as boolean;
			return value ? (
				<Check
					size={16}
					color='black'
					strokeWidth={1.5}
					className='mx-auto'
				/>
			) : (
				<X
					size={16}
					color='black'
					strokeWidth={1.5}
					className='mx-auto'
				/>
			);
		},
	},
	{
		accessorKey: 'q3',
		header: () => <div className='w-24'>Question 3</div>,
		cell: ({ row }) => {
			const value = row.getValue('q3') as boolean;
			return value ? (
				<Check
					size={16}
					color='black'
					strokeWidth={1.5}
					className='mx-auto'
				/>
			) : (
				<X
					size={16}
					color='black'
					strokeWidth={1.5}
					className='mx-auto'
				/>
			);
		},
	},
	{
		accessorKey: 'q4',
		header: () => <div className='w-24'>Question 4</div>,
		cell: ({ row }) => {
			const value = row.getValue('q4') as boolean;
			return value ? (
				<Check
					size={16}
					color='black'
					strokeWidth={1.5}
					className='mx-auto'
				/>
			) : (
				<X
					size={16}
					color='black'
					strokeWidth={1.5}
					className='mx-auto'
				/>
			);
		},
	},
	{
		accessorKey: 'q5',
		header: () => <div className='w-24'>Question 5</div>,
		cell: ({ row }) => {
			const value = row.getValue('q5') as boolean;
			return value ? (
				<Check
					size={16}
					color='black'
					strokeWidth={1.5}
					className='mx-auto'
				/>
			) : (
				<X
					size={16}
					color='black'
					strokeWidth={1.5}
					className='mx-auto'
				/>
			);
		},
	},
];
