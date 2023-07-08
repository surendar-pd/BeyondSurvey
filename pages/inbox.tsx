import React from 'react';
import Head from 'next/head';
import InboxMain from '@/components/inbox/Main';

const InboxPage = () => {
	return (
		<>
			<Head>
				<title>Easeforms | Inbox</title>
			</Head>
			<div className='w-full h-[calc(100vh-5rem)] grid grid-cols-12'>
				<div className='col-span-2' />
				<InboxMain />
				<div className='col-span-2' />
			</div>
		</>
	);
};

export default InboxPage;
