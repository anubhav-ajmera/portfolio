import Text from '../Text';
import Button from '../Button';
import Link from 'next/link';
import { EXPERIENCES, ExperienceProps, INTERNSHIPS } from './constants';
import { CalendarIcon, LocationIcon } from '@/Icons';

const Experience = () => {
	return (
		<section id='experience' className='flex flex-col items-start gap-6'>
			<Text
				variant='shadow'
				gFrom='dark:from-red-400'
				gTo='dark:to-blue-400'
				shadowColor='orange'
				className='font-bold text-3xl text-heading-dark'
			>
				Experience
			</Text>

			<div className='flex flex-col gap-2 items-start'>
				{EXPERIENCES.map((experience: ExperienceProps, index) => (
					<div key={index} className={index === 0 ? '' : 'pt-4'}>
						<div className='flex gap-2 items-center text-base laptop:text-lg font-extrabold'>
							<Text>{experience.role} @</Text>
							<Button hoverable={false} type={Link} href={experience.website} target='_blank'>
								<Text className='text-blue-400 underline underline-offset-2 decoration-2 font-medium text-base'>
									{experience.company}
								</Text>
							</Button>
						</div>
						<div className='flex gap-2 mt-1'>
							<div className='flex gap-1 items-center py-1 px-2 bg-gray-200 w-fit rounded-md dark:bg-background-nav-dark'>
								<CalendarIcon className='text-gray-600 dark:text-gray-400' width={12} height={12} />
								<Text className='text-sm font-semibold text-gray-600 dark:text-gray-400'>{experience.timeline}</Text>
							</div>
							<div className='flex gap-1 items-center py-1 px-2 bg-gray-200 w-fit rounded-md dark:bg-background-nav-dark'>
								<LocationIcon className='text-gray-600 dark:text-gray-400' width={12} height={12} />
								<Text className='text-sm font-semibold text-gray-600 dark:text-gray-400'>{experience.location}</Text>
							</div>
						</div>
						<ol className='list-disc pl-5'>
							{experience.description?.map((desc, index) => (
								<li key={index}>
									<p
										className={`max-w-none text-left laptop:text-justify font-medium ${index === 0 ? 'pt-4' : 'pt-1'}`}
									>
										{desc}
									</p>
								</li>
							))}
						</ol>
					</div>
				))}
			</div>

			<Text
				variant='shadow'
				gFrom='dark:from-red-400'
				gTo='dark:to-blue-400'
				shadowColor='orange'
				className='font-bold text-3xl text-heading-dark'
			>
				Internships
			</Text>

			<div className='flex flex-col gap-2 items-start'>
				{INTERNSHIPS.map((internship: ExperienceProps, index) => (
					<div key={index} className={index === 0 ? '' : 'pt-4'}>
						<div className='flex gap-2 items-center text-base laptop:text-lg font-extrabold'>
							<Text>{internship.role} @</Text>
							<Button hoverable={false} type={Link} href={internship.website} target='_blank'>
								<Text className='text-blue-400 underline underline-offset-2 decoration-2 font-medium text-base'>
									{internship.company}
								</Text>
							</Button>
						</div>
						<div className='flex gap-2 mt-1'>
							<div className='flex gap-1 items-center py-1 px-2 bg-gray-200 w-fit rounded-md dark:bg-background-nav-dark'>
								<CalendarIcon className='text-gray-600 dark:text-gray-400' width={12} height={12} />
								<Text className='text-sm font-semibold text-gray-600 dark:text-gray-400'>{internship.timeline}</Text>
							</div>
							<div className='flex gap-1 items-center py-1 px-2 bg-gray-200 w-fit rounded-md dark:bg-background-nav-dark'>
								<LocationIcon className='text-gray-600 dark:text-gray-400' width={12} height={12} />
								<Text className='text-sm font-semibold text-gray-600 dark:text-gray-400'>{internship.location}</Text>
							</div>
						</div>
						<ol className='list-disc pl-5'>
							{internship.description?.map((desc, index) => (
								<li key={index}>
									<p
										className={`max-w-none text-left laptop:text-justify font-medium ${index === 0 ? 'pt-4' : 'pt-1'}`}
									>
										{desc}
									</p>
								</li>
							))}
						</ol>
					</div>
				))}
			</div>
		</section>
	)
}

export default Experience;
