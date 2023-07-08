import Image from 'next/image';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

const FormMain = () => {
	const [date, setDate] = React.useState<Date>();

	return (
		<section className='col-span-7 bg-white overflow-y-scroll border-r border-l flex flex-col gap-12 g-red-200 px-16 py-4'>
			<div>
				<h1 className='font-medium text-lg mb-2'>Introduction</h1>
				<div className='w-full bg-blue-100 rounded mb-4 flex justify-start items-center'>
					<div className='w-1/2 p-8'>
						<Image
							src='/assests/intro.svg'
							alt='intro'
							width='10'
							height='10'
							className='w-80'
						/>
					</div>
					<div className='text-center w-1/2'>
						<h1 className='text-xl font-semibold'>
							Collection Agency Audit
						</h1>
					</div>
				</div>
				<div>
					<p className='mb-2'>
						The objective of the audit is to carry out a systematic
						review and assessment of collection agencies including:
					</p>
					<div className='flex flex-col gap-2 text-slate-500 ml-8'>
						<p>
							&bull; To evaluate the agency&apos;s adherence to
							highest standard.
						</p>
						<p>&bull; To identify the areas of improvement.</p>
						<p>
							&bull; Provide recommendations for enforcing
							efficiency, effectiveness and quality.
						</p>
					</div>
				</div>
			</div>
			<div>
				<h1 className='font-medium text-lg mb-2'>Audit Approach</h1>
				<p className='mb-2'>
					Our approach enforce meticulous planning and strategic
					execution. Step wise details:
				</p>
				<div className='flex flex-col gap-2 text-slate-500 ml-8 mb-8'>
					<p>&bull; For each team member at every location.</p>
					<p>&bull; Live updates on this platform.</p>
					<p>&bull; Timele report.</p>
					<p>&bull; Proper documentation.</p>
				</div>
				<p className='mb-2'>Here is our video tutorial</p>
				<div>
					<iframe
						className='rounded-xl'
						width='100%'
						height='350'
						src='https://www.youtube.com/embed/dtQM-J9BEGk'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					></iframe>
				</div>
			</div>
			<div className='flex flex-col gap-4 w-full'>
				<h1 className='font-medium text-lg mb-2'>
					Record Client Information
				</h1>
				<div className='grid w-full max-w-md items-center gap-1.5'>
					<Label className='' htmlFor='email'>
						Question 1
					</Label>
					<Input type='text' id='email' placeholder='Answer' />
				</div>
				<div className='grid w-full max-w-md items-center gap-1.5'>
					<Label className='' htmlFor='email'>
						Question 2
					</Label>
					<Input type='text' id='email' placeholder='Answer' />
				</div>
				<div className='grid w-full max-w-md items-center gap-1.5'>
					<Label className='' htmlFor='email'>
						Question 3
					</Label>
					<Input type='text' id='email' placeholder='Answer' />
				</div>
				<div className='grid w-full max-w-md items-center gap-1.5'>
					<Label className='' htmlFor='email'>
						Question 4
					</Label>
					<Input type='text' id='email' placeholder='Answer' />
				</div>
				<div className='grid w-full max-w-md items-center gap-1.5'>
					<Label className='' htmlFor='email'>
						Question 5
					</Label>
					<Input type='text' id='email' placeholder='Answer' />
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<p className='mb-2 text-sm font-medium'>Capture Location</p>
				<Button>
					<Upload className='mr-2 h-4 w-4' /> Upload Photo
				</Button>
			</div>
			<div className='flex flex-col gap-4 w-full'>
				<div className='grid w-full max-w-md items-center gap-1.5'>
					<Label className='' htmlFor='email'>
						Name of the Client
					</Label>
					<Input type='text' id='email' placeholder='Answer' />
				</div>
				<div className='grid w-full max-w-md items-center gap-1.5'>
					<Label className='' htmlFor='email'>
						Email Address
					</Label>
					<Input type='text' id='email' placeholder='Answer' />
				</div>
				<div className='grid w-full gap-1.5'>
					<Label className='' htmlFor='message'>
						Additional Notes
					</Label>
					<Textarea
						placeholder='Type your message here.'
						id='message'
					/>
				</div>
				<div className=''>
					<p className='mb-2 text-sm font-medium'>
						Project start date
					</p>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={'outline'}
								className={cn(
									'w-[280px] justify-start text-left font-normal',
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
			</div>
			<div>
				<h1 className='font-medium text-lg mb-2'>Category</h1>
				<p className='mb-4 text-slate-500 text-sm'>
					Now you have an option to categorise your agencies into
					various buckets for a more customized questionnaire which is
					more reluctant to each case.
				</p>
				<div>
					<Select>
						<SelectTrigger className='w-[180px]'>
							<SelectValue placeholder='Select Category' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='small'>Small Agency</SelectItem>
							<SelectItem value='medium'>
								Medium Agency
							</SelectItem>
							<SelectItem value='large'>Large Agency</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div>
				<Button>Complete Task</Button>
			</div>
			<div className=''>
				<iframe
					className='w-full h-96'
					src='https://docs.google.com/spreadsheets/d/1xmbC7xfrKvGsibUUxCwU2CE2WNt1KLeWMvX0ernKacQ/edit?usp=sharing'
				></iframe>
				{/* <iframe className="w-full h-80" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSI5XOREN6W8FSElSPT7xv3en4mesDsifJmq56yx2y8GXzvUPuoZ1qGfJJ8ZntlujHqp68vxq4hWLEM/pubhtml?widget=true&amp;headers=false"></iframe> */}
			</div>
		</section>
	);
};

export default FormMain;
