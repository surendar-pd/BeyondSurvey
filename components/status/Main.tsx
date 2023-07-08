import React from 'react';
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

interface Agency {
	name: string;
	location: string;
	assignees: string[];
	activity: string;
	progress: number;
	status: 'ontrack' | 'overdue' | 'nodue';
	due: Date;
	overdueTasks: number;
	q1: boolean;
	q2: boolean;
	q3: boolean;
	q4: boolean;
	q5: boolean;
}

const columns: ColumnDef<Agency>[] = [
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
			return <Progress value={row.getValue('progress')} />;
		},
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'date',
		header: 'Due',
	},
	{
		accessorKey: 'overdueTasks',
		header: 'Overdue Tasks',
	},
	{
		accessorKey: 'q1',
		header: 'Question 1',
	},
	{
		accessorKey: 'q2',
		header: 'Question 2',
	},
	{
		accessorKey: 'q3',
		header: 'Question 3',
	},
	{
		accessorKey: 'q4',
		header: 'Question 4',
	},
	{
		accessorKey: 'q5',
		header: 'Question 5',
	},
];

const data: Agency[] = [
	{
		name: 'Agency 1',
		location: 'Mumbai',
		assignees: [
			'https://github.com/shadcn.png',
			'https://github.com/kunalkeshan.png',
		],
		activity: 'few seconds ago',
		progress: 69,
		status: 'ontrack',
		due: new Date(),
		overdueTasks: 5,
		q1: true,
		q2: false,
		q3: false,
		q4: true,
		q5: false,
	},
	{
		name: 'Agency 2',
		location: 'Mumbai',
		assignees: ['https://github.com/shadcn.png'],
		activity: 'few seconds ago',
		progress: 69,
		status: 'ontrack',
		due: new Date(),
		overdueTasks: 5,
		q1: true,
		q2: false,
		q3: false,
		q4: true,
		q5: false,
	},
	{
		name: 'Agency 3',
		location: 'Mumbai',
		assignees: ['https://github.com/shadcn.png'],
		activity: 'few seconds ago',
		progress: 69,
		status: 'ontrack',
		due: new Date(),
		overdueTasks: 5,
		q1: true,
		q2: false,
		q3: false,
		q4: true,
		q5: false,
	},
	{
		name: 'Agency 4',
		location: 'Mumbai',
		assignees: ['https://github.com/shadcn.png'],
		activity: 'few seconds ago',
		progress: 69,
		status: 'ontrack',
		due: new Date(),
		overdueTasks: 5,
		q1: true,
		q2: false,
		q3: false,
		q4: true,
		q5: false,
	},
];

const StatusMain = () => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});
	return (
		<section className='col-span-9'>
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead
										key={header.id}
										className='text-center'
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef
														.header,
													header.getContext()
											  )}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && 'selected'}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell
										key={cell.id}
										className='text-xs'
									>
										{flexRender(
											cell.column.columnDef.cell,
											cell.getContext()
										)}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell
								colSpan={columns.length}
								className='h-24 text-center'
							>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</section>
	);
};

export default StatusMain;
