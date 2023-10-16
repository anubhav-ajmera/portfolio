export type ExperienceProps = {
	role: string
	company: string
	website?: string
	location: string
	description?: string[]
	stack: string[]
	timeline?: string
}

export const EXPERIENCES: ExperienceProps[] = [
	{
		role: 'Software Development Engineer I',
		company: 'SaaS Labs',
		website: 'https://www.saaslabs.co/',
		location: 'Noida (Remote)',
		timeline: 'Jul 2022 - Present',
		description: [
			'Enhanced PHP APIs with NestJS, resulting in a 30% reduction in code redundancy with improved code quality and structure.',
			'Streamlined Stripe API integration, achieving $2k monthly savings through risk checks at trial start & automated refund process.',
			'Pioneered Amplitude integration, reducing churn by 20%, and incorporated BigQuery for data-driven decision-making.',
			'Implemented data-push crons, optimizing storage, and accelerating actionable insights, reducing data team efforts by 40%.',
		],
		stack: ['React', 'Styled Components', 'Semantic UI'],
	},
	{
		role: 'App Developer',
		company: 'Coding Club BITS Pilani',
		website: 'https://www.facebook.com/codingclubpilani/',
		location: 'Pilani',
		timeline: 'Jun 2019 - Mar 2020',
		description: [
			"BOSM'19 Roulette: A Virtual Betting App - An android-based mobile app for college students to bet on sports matches in BOSM'19.",
			'Ideated the concept of virtual currency along with its implementation and redemption as tokens.',
			'Collaborated with a team of 5 developers and designers to build the app and achieved 1500+ downloads on Google Play Store.',
		],
		stack: ['React', 'Styled Components', 'Semantic UI'],
	},
	{
		role: 'App Development Team Lead',
		company: 'Coding Club BITS Pilani',
		website: 'https://www.facebook.com/codingclubpilani/',
		location: 'Pilani',
		timeline: 'Mar 2020 - May 2021',
		description: [
			"Apogee'20: Official AR App for the Annual College Tech Fest - An AR-based android app that allows users to participate in competitions organized at different locations in a gamified way.",
			'Ideated the concept of virtual coins that can be redeemed at events and contributed to UX Design. ',
			"Built 'Pokemon-GO' type location-based AR coin collection as an added incentive.",
			"Implemented email authentication and used time-scheduling algorithms to prepare schedules based on user interests. The app wasn't published due to COVID'19.",
		],
		stack: ['React', 'Styled Components', 'Semantic UI'],
	},
]

export const INTERNSHIPS: ExperienceProps[] = [
	{
		role: 'Product Analyst',
		company: 'InstaSell',
		website: 'https://instasell.io/',
		location: 'Mumbai (Remote)',
		timeline: 'Dec 2021 - Jan 2022',
		description: [
			'Revamped the app with Amplitude integration, identifying 5 core customer drop-off points, boosting adoption by 30%.',
			'Orchestrated the competitive research and enhancement of user experience, resulting in a notable 80% increase in MRR.',
			'Elevated user retention by 15% through interviews with highly engaged users, segmenting and uncovering critical pain points.',
			'Integrated Amplitude and Google Play Console with the codebase and analyzed metrics on the Retool-based dashboard.',
		],
		stack: ['React', 'Styled Components', 'Semantic UI'],
	},
	{
		role: 'Software Engineer',
		company: 'Everwell Health Solutions',
		website: 'https://www.everwell.org/',
		location: 'Bengaluru (Remote)',
		timeline: 'Jul 2021 - Dec 2021',
		description: [
			'Collaborated on an oxygen auditing platform, recording daily production & distribution, addressing 40% of anticipated barriers.',
			'Restructured the existing codebase and coded reusable components that improved the code reusability by 30%.',
			'Authored complete project documentation, facilitating universal understanding and boosting work efficiency by 20%.',
			'Integrated OpenLayer maps to visualize distribution routes, enhancing efficiency by 40% through optimized route analysis.',
		],
		stack: ['React', 'Styled Components', 'Semantic UI'],
	},
	{
		role: 'Flutter Developer',
		company: 'Docs2Meds',
		website: 'https://www.docs2meds.com/',
		location: 'Bhilwara (Remote)',
		timeline: 'Mar 2021 - May 2021',
		description: [
			'Built an app for doctors with enhanced appointment bookings and data storage system, reducing efforts by 40%.',
			'Improved the design of the app and website by taking feedback from 10 doctors and achieved 500+ downloads in 2 months.',
			"Engineered Laravel APIs' seamless fusion with frontend, incorporating charts for analytics and visualization via SyncFusion.",
			'Boosted app performance by 10% through codebase optimization, fostering stakeholder alignment throughout development.',
		],
		stack: ['React', 'Styled Components', 'Semantic UI'],
	},
	{
		role: 'Application Development Manager',
		company: 'Cograd',
		website: 'https://cograd.in/',
		location: 'Bhilwara (Remote)',
		timeline: 'Apr 2020 - Apr 2021',
		description: [
			'Directed a team of 4 developers to create a counseling app for JEE and NEET aspirants, fostering college student connections.',
			'Formulated a robust product strategy and roadmap, using agile methodology, cutting product development time by 20%.',
			'Spearheaded frontend development with Flutter and React, while authoring NodeAPIs and integrating Agora API for calling.',
		],
		stack: ['React', 'Styled Components', 'Semantic UI'],
	},
	{
		role: 'Product Development Manager',
		company: 'Presto',
		website: 'http://presto.club/',
		location: 'Bhilwara (Remote)',
		timeline: 'Jun 2020 - Mar 2021',
		description: [
			'Simplified wireframes and user journeys by 50%, eliminating unnecessary steps.',
			'Established a profitable business model with the founders and improved profitability by 20% within 2 months of launch.',
			'Led recruitment of 2 developers, conducted vital user research, authored PRD, achieving 100+ downloads in 1 month.',
			'Orchestrated daily stand-up meetings to drive iterative product improvements. Led UI/UX design, integrated critical functions, and optimized user engagement.',
			'Spearheaded the conceptualization of a community-based lending app, fostering trust and financial inclusivity within communities.',
		],
		stack: ['React', 'Styled Components', 'Semantic UI'],
	},
	{
		role: 'Flutter Developer',
		company: 'QC4 Application',
		website: 'https://qc4application.com/',
		location: 'Bhubaneswar (Remote)',
		timeline: 'Aug 2020 - Oct 2020',
		description: [
			'Spearheaded hyperlocal food app, connecting 100+ stores, driving 50k+ revenue in one month, boosting sales and orders.',
			'Transformed the UI/UX, crafted 4 user personas, mapped the product journey, designed the app flow and product roadmap.',
			'Integrated Razorpay payment gateway that increased transactions by 40% and provided users with multiple payment options.',
			'Executed in-house alpha release & Play Store beta launch, engaging 100 users, with 30 demonstrating regular weekly activity.',
		],
		stack: ['React', 'Styled Components', 'Semantic UI'],
	},
	{
		role: 'Web Developer',
		company: 'Ecom Express Private Limited',
		website: 'https://ecomexpress.in/',
		location: 'New Delhi (Remote)',
		timeline: 'May 2020 - Jun 2020',
		description: [
			'Simulation Engine UI - A Django-based web app to optimize truck shipments, finding the most efficient routes.',
			'Developed the end-to-end frontend design of the simulation platform, emphasizing Dynamic Rerouting and Network Reliability.',
			'Incorporated JS libraries (Leaflet Routing Machine and Folium) to enable live route tracking of trucks for oxygen distribution.',
			'Established shortest route connections between locations using Neo4j and Networkx.',
		],
		stack: ['React', 'Styled Components', 'Semantic UI'],
	},
	{
		role: 'Management Intern',
		company: 'The Dexterity Global Group',
		website: 'https://www.dexterityglobal.org/',
		location: 'Bhilwara (Remote)',
		timeline: 'May 2020 - Jun 2020',
		description: [
			'Crafted a financial aid model to assess and grant aid to underprivileged students. Devised an outreach plan and reported to senior management.',
		],
		stack: ['React', 'Styled Components', 'Semantic UI'],
	},
	{
		role: 'Android Developer',
		company: 'DaanCorona',
		website: 'https://www.youtube.com/watch?v=_LRc_lMrmY8',
		location: 'Pilani',
		timeline: 'Mar 2020 - Apr 2020',
		description: [
			"A digital platform for college campus-based non-essential medium and small businesses to collect donations from customers, offering redeemable vouchers post-COVID'19.",
			'Spearheaded the end-to-end customer journey, launching in May 2020 with 1000+ downloads and raising Rs. 1 Lakh in funds within 2 months.',
			'Contributed to Hack The Crisis: India Online Hackathon with a team of 3 developers and 2 designers.',
			'Implemented Firebase Auth and Google SignIn for user authentication via email or phone OTP.',
		],
		stack: ['React', 'Styled Components', 'Semantic UI'],
	},
]
