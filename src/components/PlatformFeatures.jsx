import React from 'react';

const featuresData = [
  {
    id: 1,
    tag: 'HACKERRANK COMMUNITY',
    title: 'Prepare and apply for your dream job',
    description: 'Over 26 million developers have joined the HackerRank community to certify their skills, practice interviewing, and discover relevant jobs. An AI Mock Interviewer can help you prepare, while our QuickApply agent puts your job search on autopilot.',
    videoSrc: '/videos/vid1.mp4',
    reverse: false,
    bgColor: 'bg-[#F9F6FF]'
  },
  {
    id: 2,
    tag: 'HACKERRANK ENGAGE',
    title: 'Showcase your tech brand',
    description: "Attract developers with hackathons that feature real-world challenges, and preview what it's like to work at your company. Our AI Assistant helps you set up a hackathon in minutes. Host it yourself or advertise and run a campaign through our developer community.",
    videoSrc: '/videos/vid2.mp4',
    reverse: true,
    bgColor: 'bg-[#F6F5FB]'
  },
  {
    id: 3,
    tag: 'HACKERRANK SCREEN',
    title: 'Take-home assessments that ensure fairness and integrity',
    description: 'Identify strong developers by administering a take-home assessment in a secure environment. Choose from a library of thousands of challenges across many roles designed by experts and validated by Industrial Psychologists for fairness.',
    videoSrc: '/videos/vid3.mp4',
    reverse: false,
    bgColor: 'bg-[#FEFCF6]'
  },
  {
    id: 4,
    tag: 'HACKERRANK INTERVIEW',
    title: 'Pair-programming interviews on demand',
    description: 'Get an accurate sense for what it would be like to work together by pair programming with candidates on real-world scenarios. Review code, fix bugs, build a feature, and see the result, all within an interview setting using pre-set repos or one of your own.',
    videoSrc: '/videos/vid4.mp4',
    reverse: true,
    bgColor: 'bg-[#FEFAF5]'
  },
  {
    id: 5,
    tag: 'HACKERRANK SKILLUP',
    title: 'Find skills inside your company',
    description: 'Empower developers to showcase their skills, earn certifications, and gain recognition - while helping you strengthen your organization. Our AI Tutor helps developers learn as they go, while our advanced insights help you understand the skillsets of your organization.',
    videoSrc: '/videos/vid5.mp4',
    reverse: false,
    bgColor: 'bg-[#ECFCFA]'
  },
]

const PlatformFeatures = () => {
    return (
        <section className="mt-20 font-sans">
            <div className="text-center mb-16 px-4">
                <h2 className="text-4xl tracking-tight text-gray-900">
                    The Developer Skills Platform
                </h2>
            </div>

            <div className="flex flex-col">
                {featuresData.map((feature) => (
                    <div key={feature.id} className={`${feature.bgColor} py-10 md:py-20 px-2`}>
                        <div className={`max-w-5xl mx-auto flex flex-col gap-12 md:gap-20 items-center justify-center ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            <div className="w-full md:w-1/2 flex flex-col items-start">
                                <div className="bg-black text-white font-mono text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-8">
                                    {feature.tag}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    {feature.description}
                                </p>
                                <a href="#learn-more" className="text-black font-medium flex items-center group">
                                    Learn more 
                                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                                </a>
                            </div>

                            <div className="w-full md:w-1/2">
                                <div className="rounded overflow-hidden shadow-2xl">
                                    <video src={feature.videoSrc} autoPlay loop muted playsInline className="w-full h-full"></video>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PlatformFeatures;