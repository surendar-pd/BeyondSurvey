import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Copy, Users2 } from 'lucide-react';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/components/ui/use-toast';

const FormFloater = () => {
	const [date, setDate] = React.useState<Date>();
	const { toast } = useToast();
	return (
		<section className='col-span-2 bg-white px-4 py-2 text-sm'>
			<div className='bg-white h-fit px-4 py-2 rounded-lg flex flex-col gap-4'>
				<div className=''>
					<h3 className='font-medium'>Who&apos;s working on it.</h3>
					<Avatar className='mt-2 w-8 h-8'>
						<AvatarImage src='https://github.com/shadcn.png' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
				<div className='mt-2'>
					<h3 className='flex items-center gap-2 font-medium'>
						<Users2 strokeWidth={1.5} />
						<span>Assigned members.</span>
					</h3>
					<div className='flex items-center mt-2'>
						<Avatar className='hover:-translate-y-1 w-8 h-8 hover:mr-4 transition-all hover:z-50 duration-300 cursor-pointer'>
							<AvatarImage src='https://github.com/shadcn.png' />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className='-ml-4 hover:-translate-y-1 w-8 h-8 hover:mr-4 transition-all hover:z-50 duration-300 cursor-pointer'>
							<AvatarImage src='https://github.com/kunalkeshan.png' />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className='-ml-4 hover:-translate-y-1 w-8 h-8 hover:mr-4 transition-all hover:z-50 duration-300 cursor-pointer'>
							<AvatarImage src='https://github.com/react.png' />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</div>
				</div>
				<div className='mt-2'>
					<h3 className='font-medium'>Due date</h3>
					<Popover>
						<PopoverTrigger asChild className='mt-2'>
							<Button
								variant={'outline'}
								className={cn(
									'w-fit justify-start text-left font-normal',
									!date && 'text-muted-foreground'
								)}
							>
								<CalendarIcon className='mr-2 h-4 w-4' />
								{date ? (
									format(date, 'PPP')
								) : (
									<span>Pick a date</span>
								)}
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-auto p-0'>
							<Calendar
								mode='single'
								selected={date}
								onSelect={setDate}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				</div>
				<div className='mt-2 text-sm'>
					<h3 className='font-medium'>Share Link</h3>
					<div className='mt-2 flex rounded-lg border overflow-hidden'>
						<p className='border-r bg-slate-50 p-2 text-ellipsis whitespace-nowrap overflow-hidden w-[20ch]'>
							http://easeforms.com
						</p>
						<button
							className='flex items-center p-2 text-xs'
							onClick={() =>
								toast({
									description: 'Link Copied to Clipboard!',
								})
							}
						>
							<Copy
								size={16}
								strokeWidth={1.5}
								className='mr-2'
							/>
							<span>Copy</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FormFloater;
