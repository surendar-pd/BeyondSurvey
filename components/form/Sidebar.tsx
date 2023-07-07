import React from 'react'

const SECTIONS = [{
    title: 'Introduction',
    sub: ['Agency Name', 'Location', 'Date & Time of Audit']
},
{
    title: 'Regulatory Compliance',
    sub: ['Monitoring & Auditing', 'Consumer Protection']
},
{
    title: 'Documentation & Record Keeping',
    sub: ['Complaint Handling', 'Data Security & Privacy']
}, 
{
    title: 'Internal Controls & Risk Management',
    sub: ['Reporting & Transparency']
},
{
    title: 'Project Summary',
    sub: ['Review & Approval', 'Management Approval']
},
{
    title: 'Internal Controls & Risk Management',
    sub: ['Reporting & Transparency']
},
{
    title: 'Project Summary',
    sub: ['Review & Approval', 'Management Approval']
},
{
    title: 'Internal Controls & Risk Management',
    sub: ['Reporting & Transparency']
},
{
    title: 'Project Summary',
    sub: ['Review & Approval', 'Management Approval']
},
]

const FormSidebar = () => {
    return (
        <section className='col-span-3 bg-white px-8 py-4 overflow-y-scroll h-screen'>
            {SECTIONS.map((section) => (
                <div key={section.title} className="mb-2">
                    <h1 title={section.title} className='flex items-center text-base'><span>{section.title}</span></h1>
                    <ul className='flex flex-col space-y-1 mt-1'>
                        {section.sub.map((subSection) => (
                            <li key={subSection} className='transition-all pl-6 text-sm text-slate-500 p-4 hover:text-black rounded cursor-pointer hover:border-l-slate-300 border-l-4 border-l-transparent hover:bg-slate-200 hover:bg-opacity-40'>{subSection}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export default FormSidebar