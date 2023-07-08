import React, { useMemo, useEffect } from 'react';
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	getPaginationRowModel,
	SortingState,
	getSortedRowModel,
	ColumnFiltersState,
	getFilteredRowModel,
} from '@tanstack/react-table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Check, X, ArrowUpDown, MoreHorizontal } from 'lucide-react';

interface Agency {
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
			return <div>{format(date, 'PPP')}</div>;
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

const StatusMain = () => {
	const data = useMemo(() => {
		const ans = [true, false, false, true, false];
		const loc = ['Mumbai', 'Delhi', 'Chennai', 'Bangalore'];
		const users = [
			'https://github.com/shadcn.png',
			'https://github.com/kunalkeshan.png',
		];
		const status = ['no due', 'overdue', 'on track'];
		return new Array(100).fill(true).map((ele, index) => {
			return {
				name: `Agency ${index + 1}`,
				location: loc[Math.floor(loc.length * Math.random())],
				activity: '1 day ago',
				assignees: users,
				progress: Math.round(Math.random() * 100),
				status: status[Math.floor(status.length * Math.random())],
				due: new Date(),
				overdueTasks: Math.round(Math.random() * 10),
				q1: ans[Math.floor(ans.length * Math.random())],
				q2: ans[Math.floor(ans.length * Math.random())],
				q3: ans[Math.floor(ans.length * Math.random())],
				q4: ans[Math.floor(ans.length * Math.random())],
				q5: ans[Math.floor(ans.length * Math.random())],
			};
		});
	}, []) as Agency[];
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] =
		React.useState<ColumnFiltersState>([]);
	const [filterValue, setFilterValue] = React.useState('name');
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			columnFilters,
			sorting,
		},
	});

	useEffect(() => {
		table.setPageSize(10);
	}, [table]);

	return (
		<section className='col-span-9 overflow-y-scroll'>
			<div className='flex items-center py-4 px-4'>
				<Select
					onValueChange={(value) => setFilterValue(value)}
					defaultValue='name'
				>
					<SelectTrigger className='w-[180px] mr-4'>
						<SelectValue placeholder='Filter by' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='name'>Agency</SelectItem>
						<SelectItem value='location'>Location</SelectItem>
						<SelectItem value='status'>Status</SelectItem>
					</SelectContent>
				</Select>
				<Input
					placeholder='Search...'
					value={
						(table
							.getColumn(filterValue)
							?.getFilterValue() as string) ?? ''
					}
					onChange={(event) =>
						table
							.getColumn(filterValue)
							?.setFilterValue(event.target.value)
					}
					className='max-w-sm'
				/>
				<div className='flex items-center justify-end space-x-2 ml-auto'>
					<Button
						variant='outline'
						size='sm'
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Previous
					</Button>
					<Button
						variant='outline'
						size='sm'
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Next
					</Button>
				</div>
			</div>
			<Table>
				<TableHeader className=''>
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
										className='text-xs text-center'
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
