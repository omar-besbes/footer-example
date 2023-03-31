'use client';

import Link from 'next/link';
import languages from '@/constants/languages';
import { useState } from 'react';
import Image from 'next/image';
import facebook from '@/public/assets/social-icons/facebook.svg';
import twitter from '@/public/assets/social-icons/twitter.svg';
import linkedin from '@/public/assets/social-icons/linkedin.svg';

export default function Footer() {
	const [currentLanguage, setCurrentLanguage] = useState(languages[1]);
	return (
		<footer className="bg-bg-dark rounded-big p-24 pb-14 space-y-6 mx-5">
			<div className="grid md:grid-cols-7 lg:grid-cols-10 gap-x-28 gap-y-14">
				<section className="space-y-6 col-span-3 max-w-xs">
					<div className="font-black font-merriweather text-2xl">
						About the store
					</div>
					<div className="font-medium font-poppins text-lg">
						<ul className="space-y-5">
							<li>
								<Link href="/" className="cursor-pointer">
									Home
								</Link>
							</li>
							<li>
								<Link href="/" className="cursor-pointer">
									Become a customer
								</Link>
							</li>
							<li>
								<Link href="/" className="cursor-pointer">
									About us
								</Link>
							</li>
							<li>
								<Link href="/" className="cursor-pointer">
									FAQ
								</Link>
							</li>
							<li>
								<Link href="/" className="cursor-pointer">
									Return policy
								</Link>
							</li>
							<li>
								<Link href="/" className="cursor-pointer">
									Contact us
								</Link>
							</li>
						</ul>
					</div>
				</section>
				<section className="space-y-6 col-span-4 max-w-xs">
					<div className="font-black font-merriweather text-2xl">
						Language
					</div>
					<div className="font-medium font-poppins text-lg flex flex-wrap">
						{languages.map((language, i) => (
							<button
								key={i}
								onClick={() => setCurrentLanguage(language)}
								className={`p-2.5 rounded-little ${
									language == currentLanguage && 'bg-bg-glow'
								}`}
							>
								{language}
							</button>
						))}
					</div>
				</section>
				<section className="space-y-6 col-span-3 max-w-xs">
					<div className="font-black font-merriweather text-2xl">
						Get in touch
					</div>
					<div className="flex gap-6 items-center">
						<Link href="/" className="p-2 cursor-pointer">
							<Image src={facebook} alt="facebook" />
						</Link>
						<Link href="/" className="p-2 cursor-pointer">
							<Image src={twitter} alt="twitter" />
						</Link>
						<Link href="/" className="p-2 cursor-pointer">
							<Image src={linkedin} alt="linkedin" />
						</Link>
					</div>
				</section>
			</div>
			<div className="font-medium font-poppins text-lg opacity-50 flex flex-col md:flex-row justify-center lg:items-center gap-5">
				<Link href="/" className="cursor-pointer">
					Terms of purchase
				</Link>
				<Link href="/" className="cursor-pointer">
					Security and privacy
				</Link>
				<Link href="/" className="cursor-pointer">
					Newsletter
				</Link>
			</div>
		</footer>
	);
}
