import Head from 'next/head';
import FormSidebar from '@/components/form/Sidebar';
import FormMain from '@/components/form/Main';
import FormFloater from '@/components/form/Floater';

export default function Home() {
	return (
		<>
			<Head>
				<title>Easeforms | Form</title>
			</Head>
			<div className='w-full h-[calc(100vh-5rem)] grid grid-cols-12'>
				<FormSidebar />
				<FormMain />
				<FormFloater />
			</div>
		</>
	);
}
