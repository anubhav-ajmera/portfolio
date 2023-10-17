'use client'
import Text from '../Text'
import Image from 'next/image'
import SocialButtons from '../SocialButtons'

const AboutSection = () => {
	return (
		<section id='about-section' className='flex flex-col items-start gap-6'>
			<Text
				variant='shadow'
				gFrom='dark:from-red-300'
				gTo='dark:to-purple-500'
				shadowColor='purple'
				className='font-bold text-3xl text-heading-dark'
				as={'h1'}
			>
				About
			</Text>
			<div className='w-full rounded-lg p-4 flex flex-col gap-2 laptop:gap-5 laptop:p-5 laptop:flex-row items-center bg-slate-200 dark:bg-slate-700 text-center'>
				<div className='w-[100px] h-[100px] transition-colors rounded-full bg-sky-50 overflow-hidden'>
					<Image
						alt='Anubhav-image'
						src='/assets/anubhavajmera.jpg'
						width={100}
						height={105}
						className='min-w-[100px] h-[105px]'
					/>
				</div>
				<div className='px-2 flex flex-col gap-2'>
					<Text className='font-bold text-2xl px-2'>Anubhav Ajmera</Text>
					<Text className='font-medium text-lg text-gray-600 dark:text-gray-300'>Software Engineer</Text>
				</div>
				<Text className='font-medium text-lg text-gray-600 dark:text-gray-300'>India</Text>
				<SocialButtons
					className='px-4'
					socials={[
						{
							key: 'linkedin',
							icon: 'linkedin',
							className: 'group-hocus:fill-blue-600 dark:fill-slate-400',
							action: 'https://www.linkedin.com/in/anubhavajmera/',
						},
						{
							key: 'instagram',
							icon: 'instagram',
							className: 'group-hocus:fill-black dark:group-hocus:fill-slate-200 dark:fill-slate-400',
							action: 'https://instagram.com/anubhavajmera',
						},
						{
							key: 'twitter',
							icon: 'twitter',
							className: 'group-hocus:fill-sky-500 dark:fill-slate-400',
							action: 'https://twitter.com/anubhavajmera',
						},
						{
							key: 'github',
							icon: 'github',
							className: 'group-hocus:fill-black dark:group-hocus:fill-slate-200 dark:fill-slate-400',
							action: 'https://github.com/anubhavajmera',
						},
					]}
				/>
			</div>

			<div className='max-w-none text-left laptop:text-justify text-base font-medium'>
				<p>
					👋 {"I'm"} Anubhav Ajmera, and {"I'm"} currently working as a software engineer at SaaS Labs. While my
					academic background may be in Mechanical Engineering, my true passion lies in creating user-centric and
					visually stunning digital experiences.
				</p>
				<br />
				<p>
					Throughout my journey, {"I've"} had the incredible opportunity to collaborate with clients across a wide range
					of industries, including technology startups, e-commerce, and education. Together, {"we've"} not only crafted
					exceptional digital experiences but also established strong client relationships, increased revenue, and
					delivered unforgettable user experiences.
				</p>
				<br />
				<p>
					But {"it's"} not just business for me; {"I'm"} equally enthusiastic about helping individuals shine in the
					digital world. I offer a wide array of services, from website design and development to SEO and digital
					marketing.
				</p>
				<br />
				<p>
					In addition to my work at SaaS Labs, {"I'm"} also a freelance professional, always on the lookout for exciting
					projects to sink my teeth into. If {"you're"} interested in collaborating, brainstorming, and creating
					remarkable user experiences, {"don't"} hesitate to drop me an email! 🛠️
				</p>
				<br />
				<p>
					As a self-taught developer and designer, I bring a unique blend of technical prowess and creative flair to the
					table. My mission is to empower your business with cutting-edge digital strategies and solutions. {"Here's"} a
					glimpse of what I can bring to the table:
				</p>
				<br />
				<ul>
					<li>
						🧑‍💻 <strong>Cutting-Edge Development -</strong> Crafting clean and efficient code to build robust digital
						products that align perfectly with your business goals.
					</li>
					<li>
						🎨 <strong>Engaging Web Design -</strong> Designing visually stunning websites that captivate your audience
						and leave a lasting impression.
					</li>
					<li>
						⚙️ <strong>SEO Mastery -</strong> Maximizing your online visibility and reach through effective SEO
						techniques.
					</li>
					<li>
						💼 <strong>Entrepreneurial Insights -</strong> Exploring opportunities to take your business to new heights
						by leveraging the full potential of digital platforms.
					</li>
					<li>
						💰 <strong>Financial Optimization -</strong> Navigating the world of personal finance to ensure efficient
						budget allocation for your digital endeavors.
					</li>
				</ul>
				<br />
				<p>Feel free to reach out, and {"let's"} make your digital dreams a reality! 🚀</p>
			</div>
		</section>
	)
}

export default AboutSection
