import React from 'react';

const SECTIONS = [
	{
		title: 'Forms | Submissions',
		sub: ['Agency Name', 'Location', 'Date & Time of Audit'],
	},
	{
		title: 'Forms | Workflow Revisions',
		sub: ['Monitoring & Auditing', 'Consumer Protection'],
	},
	{
		title: 'Review Monitoring',
		sub: ['Complaint Handling', 'Data Security & Privacy'],
	},
];

const StatusSidebar = () => {
	return (
		<section className='col-span-3 bg-white px-4 py-4 overflow-y-scroll'>
			<div className=''>
				{SECTIONS.map((section, idx) => (
					<div key={section.title} className='mb-2'>
						<h1 className='text-sm hover:text-black rounded cursor-pointer p-4 border-l-4 border-l-transparent hover:bg-slate-100 hover:border-l-slate-300'>
							<span>{section.title}</span>
						</h1>
						{/* <ul className='flex flex-col space-y-1 mt-1'>
							{section.sub.map((subSection) => (
								<li
									key={subSection}
									className='transition-all duration-300 pl-6 text-sm  text-slate-500 p-4 hover:text-slate-800 rounded cursor-pointer hover:border-l-slate-300 border-l-4 border-l-transparent hover:bg-slate-200 hover:bg-opacity-40'
								>
									{subSection}
								</li>
							))}
						</ul> */}
					</div>
				))}
			</div>
		</section>
	);
};

export default StatusSidebar;
