import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


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
}
]

const FormSidebar = () => {
    return (
        <section className='col-span-3 bg-white px-4 py-4 overflow-y-scroll'>
            <div className=''>
                {SECTIONS.map((section, idx) => (
                    // <div key={section.title} className="mb-2">
                    //     <h1 className='flex items-center text-base font-medium'><span>{section.title}</span></h1>
                    //     <ul className='flex flex-col space-y-1 mt-1'>
                    //         {section.sub.map((subSection) => (
                    //             <li key={subSection} className='transition-all duration-300 pl-6 text-sm  text-slate-500 p-4 hover:text-slate-800 rounded cursor-pointer hover:border-l-slate-300 border-l-4 border-l-transparent hover:bg-slate-200 hover:bg-opacity-40'>{subSection}</li>
                    //         ))}
                    //     </ul>
                    // </div>
                    <Accordion className='' key={section.title} type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-sm hover:text-black rounded cursor-pointer p-4 border-l-4 border-l-transparent hover:bg-slate-100">{section.title}</AccordionTrigger>
                            <AccordionContent>
                                {section.sub.map((subSection) => (
                                    <p key={subSection} className='transition-all duration-300 pl-8 text-sm text-slate-500 py-4 hover:text-black rounded cursor-pointer hover:border-l-slate-300 border-l-4 border-l-transparent hover:bg-slate-100'>{subSection}</p>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </section>
    )
}

export default FormSidebar