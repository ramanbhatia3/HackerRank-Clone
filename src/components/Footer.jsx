import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#050B14] border-t border-gray-800 text-sm font-sans pt-20 pb-8 px-6 md:px-12 text-gray-400">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-24">
                    <div>
                        <h3 className="text-white font-medium mb-6 text-base">Products</h3>
                        <ul className="space-y-4">
                            <li><a href="#screen" className="hover:text-white transition-colors">Screen</a></li>
                            <li><a href="#interview" className="hover:text-white transition-colors">Interview</a></li>
                            <li><a href="#engage" className="hover:text-white transition-colors">Engage</a></li>
                            <li><a href="#skillup" className="hover:text-white transition-colors">SkillUp</a></li>
                            <li><a href="#assessments" className="hover:text-white transition-colors">Certified assessments</a></li>
                            <li><a href="#plagiarism" className="hover:text-white transition-colors">Plagiarism detection</a></li>
                            <li><a href="#questions" className="hover:text-white transition-colors">Real-world questions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-6 text-base">Solutions</h3>
                        <ul className="space-y-4">
                            <li><a href="#strategy" className="hover:text-white transition-colors">Set up your skills strategy</a></li>
                            <li><a href="#brand" className="hover:text-white transition-colors">Showcase your tech brand</a></li>
                            <li><a href="#optimize" className="hover:text-white transition-colors">Optimize your hiring process</a></li>
                            <li><a href="#mobilize" className="hover:text-white transition-colors">Mobilize your internal talent</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-6 text-base">Resources</h3>
                        <ul className="space-y-4">
                            <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#stories" className="hover:text-white transition-colors">Customer stories</a></li>
                            <li><a href="#roles" className="hover:text-white transition-colors">Roles directory</a></li>
                            <li><a href="#partners" className="hover:text-white transition-colors">Partners</a></li>
                            <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
                            <li><a href="#whats-new" className="hover:text-white transition-colors">What's new</a></li>
                            <li><a href="#writing" className="hover:text-white transition-colors">Writing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-6 text-base">About us</h3>
                        <ul className="space-y-4">
                            <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#status" className="hover:text-white transition-colors">Status</a></li>
                            <li><a href="#trust" className="hover:text-white transition-colors">Trust</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-6 text-base">Get started</h3>
                        <ul className="space-y-4">
                            <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#trial" className="hover:text-white transition-colors">Free Trial</a></li>
                            <li><a href="#demo" className="hover:text-white transition-colors">Request a demo</a></li>
                            <li><a href="#support" className="hover:text-white transition-colors">Product support</a></li>
                            <li><a href="#developers" className="hover:text-white transition-colors">For developers</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                    <div className="flex flex-col space-y-4 mb-8 md:mb-0">
                        <img src="/hackerrank-logo.svg" alt="HackerRank" className="w-10" />
                        <span>© HackerRank 2026 All Rights Reserved.</span>
                    </div>

                    <div className="flex flex-col md:items-end space-y-3">
                        <div className="flex space-x-6 text-white">
                            <img src="/social-logos/fb.svg" alt="Facebook" className="w-5" />
                            <img src="/social-logos/linkedin.svg" alt="LinkedIn" className="w-5" />
                            <img src="/social-logos/x.svg" alt="X" className="w-5" />
                            <img src="/social-logos/instagram.svg" alt="Instagram" className="w-5" />
                        </div>

                        <div className="flex space-x-6">
                            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#ai" className="hover:text-white transition-colors">Candidate AI Notice</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer