import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/layouts/Header';
import { Poppins } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({
	style: ['normal'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-poppins',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main
			className={`${poppins.variable} min-w-[1200px] bg-slate-50 font-poppins`}
		>
			<Header />
			<div className='h-[calc(100vh-5rem)]'>
				<Component {...pageProps} />
				<Toaster />
			</div>
		</main>
	);
}
