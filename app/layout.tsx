import './globals.css';
import { Merriweather, Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import Footer from '@/app/footer';

const merriweather = Merriweather({
	weight: ['300', '400', '700', '900'],
	subsets: ['latin'],
	variable: '--font-merriweather',
});

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-poppins',
});

export const metadata = {
	title: 'Footer Example',
	description: 'Pixel-Perfect footer example',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			className={`${merriweather.variable} ${poppins.variable}`}
		>
			<body className="bg-bg-light text-text">
				{children} <Footer />
			</body>
		</html>
	);
}
