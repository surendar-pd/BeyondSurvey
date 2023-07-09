import React, { useMemo, useEffect } from 'react';
import {
	flexRender,
	getCoreRowModel,
	useReactTable,
	getPaginationRowModel,
	SortingState,
	getSortedRowModel,
	ColumnFiltersState,
	getFilteredRowModel,
} from '@tanstack/react-table';
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
import { Agency, columns } from './columns';

const StatusMain = () => {
	const data = useMemo(() => {
		const ans = [true, false, false, true, false];
		const loc = ['Mumbai', 'Delhi', 'Chennai', 'Bangalore'];
		const users = [
			'https://github.com/shadcn.png',
			'https://github.com/kunalkeshan.png',
			'https://github.com/ik04.png',
			'https://github.com/VivekSGopalakrishnan.png',
			'https://github.com/Kanishk-K-U.png',
		];
		const status = ['no due', 'overdue', 'on track'];
		const activities = [
			'1 day ago',
			'1 second ago',
			'2 hrs ago',
			'16 hrs ago',
			'3 days ago',
		];
		const [start, end] = [new Date(2023, 7, 8), new Date()];
		return new Array(100).fill(true).map((_, index) => {
			return {
				name: `Agency ${index + 1}`,
				location: loc[Math.floor(loc.length * Math.random())],
				activity:
					activities[Math.floor(activities.length * Math.random())],
				assignees: users
					.sort(() => 0.5 - Math.random())
					.slice(0, users.length * Math.random()),
				progress: Math.round(Math.random() * 100),
				status: status[Math.floor(status.length * Math.random())],
				due: new Date(
					start.getTime() +
						Math.random() * (end.getTime() - start.getTime())
				),
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
