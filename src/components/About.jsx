import React from 'react'

const About = () => {
    return (
        <section id="about" className="max-w-7xl mx-auto px-6 py-16 md:py-20 scroll-m-20 bg-black">
            <div className="text-center mb-12 relative">
                
                <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 relative">
                    About <span className="text-gray-100">InternZone</span>
                </h2>
                <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 relative shadow-white-glow"></div>
            </div>

            <div className="bg-gray-800 shadow-2xl rounded-lg p-8 mb-12 border-l-4 border-cyan-400 relative overflow-hidden">
                <div className="absolute -inset-1 bg-white blur opacity-5 rounded-lg"></div>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative">
                    InternZone is a <span className="text-cyan-400 font-semibold">non-profit platform</span> created to empower students by connecting them with <span className="text-cyan-400 font-semibold">real-world internships</span>, <span className="text-cyan-400 font-semibold">live projects</span>, and <span className="text-cyan-400 font-semibold">certified learning experiences</span>.
                    <br /><br />
                    We believe in <span className="text-cyan-400 font-semibold">learning by doing</span> — offering you the chance to gain practical skills, build a strong resume, and explore your career path even before graduation.
                </p>
            </div>

            <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden relative">
                <div className="absolute -inset-1 bg-white blur opacity-5 rounded-lg"></div>
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-6 relative">
                    <h4 className="text-2xl font-bold text-gray-900">Why Choose InternZone?</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 relative">
                    <div className="space-y-6">
                        {[
                            "Official Offer Letter",
                            "Internship Completion Letter", 
                            "Hands-On Project Experience"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start relative group">
                                <div className="flex-shrink-0 bg-cyan-900 p-2 rounded-full mr-4 z-10">
                                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-300 z-10">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-6">
                        {[
                            "Flexible Remote Work Option",
                            "Lifetime access of notes",
                            "Government-Recognized Certificate by MSME"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start relative group">
                                <div className="flex-shrink-0 bg-cyan-900 p-2 rounded-full mr-4 z-10">
                                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-300 z-10">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-850 relative">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-sm border-t-4 border-cyan-400 relative overflow-hidden">
                        <div className="absolute -inset-1 bg-white blur opacity-5 rounded-lg"></div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4 relative">VISION</h3>
                        <p className="text-gray-300 relative">
                            To democratize access to internships and bridge the gap between college learning and industry skills for every student in India.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-sm border-t-4 border-cyan-400 relative overflow-hidden">
                        <div className="absolute -inset-1 bg-white blur opacity-5 rounded-lg"></div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4 relative">MISSION</h3>
                        <p className="text-gray-300 relative">
                            To empower 10,000+ students annually by providing meaningful, mentored and certified internship experiences across various domains.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About