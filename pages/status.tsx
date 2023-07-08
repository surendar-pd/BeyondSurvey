import React from 'react';
import Head from 'next/head';
import StatusSidebar from '@/components/status/Sidebar';
import StatusMain from '@/components/status/Main';

const StatusPage = () => {
	return (
		<>
			<Head>
				<title>Easeforms | Live Status</title>
			</Head>
			<div className='w-full h-[calc(100vh-5rem)] grid grid-cols-12'>
				<StatusSidebar />
				<StatusMain />
			</div>
		</>
	);
};

export default StatusPage;
