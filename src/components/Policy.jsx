import React from 'react'

const Policy = () => {
    return (
        <section id="policy" className="max-w-7xl mx-auto px-6 py-16 md:py-20 scroll-m-20 bg-black">
            <div className="text-center mb-12 relative">
                <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 relative">
                    Our <span className="text-gray-100">Policies</span>
                </h2>
                <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 relative shadow-white-glow"></div>
            </div>

            <div className="space-y-12">
                {/* Privacy Policy */}
                <div className="bg-gray-800 shadow-2xl rounded-lg p-8 border-l-4 border-cyan-400 relative overflow-hidden">
                    <div className="absolute -inset-1 bg-white blur opacity-5 rounded-lg"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 relative">Privacy Policy</h3>
                    <div className="space-y-4 text-gray-300 relative">
                        <p>InternZone ("we", "our", "us") respects your privacy and is committed to protecting your personal information.</p>
                        <p>We collect information such as name, contact details, and payment information solely to process orders, provide services, and improve our platform.</p>
                        <p>We do not sell, rent, or share your personal data with third parties except as required by law or to complete payment processing via our secure payment partner (PayU).</p>
                        <p>Payment details are processed securely and are never stored on our servers.</p>
                        <p>By using our services, you agree to the terms outlined in this Privacy Policy.</p>
                    </div>
                </div>

                {/* Refund & Cancellation Policy */}
                <div className="bg-gray-800 shadow-2xl rounded-lg p-8 border-l-4 border-cyan-400 relative overflow-hidden">
                    <div className="absolute -inset-1 bg-white blur opacity-5 rounded-lg"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 relative">Refund & Cancellation Policy</h3>
                    <div className="space-y-4 text-gray-300 relative">
                        <p>For digital services or memberships, once payment is completed and access is granted, refunds are not applicable.</p>
                        <p>For services purchased in error, contact us within 24 hours of payment for review.</p>
                        <p>If a refund is approved, it will be processed to the original payment method within 5–7 business days.</p>
                        <p>Cancellations requested after service initiation will not be eligible for a refund.</p>
                    </div>
                </div>

                {/* Shipping & Delivery Policy */}
                <div className="bg-gray-800 shadow-2xl rounded-lg p-8 border-l-4 border-cyan-400 relative overflow-hidden">
                    <div className="absolute -inset-1 bg-white blur opacity-5 rounded-lg"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 relative">Shipping & Delivery Policy</h3>
                    <div className="space-y-4 text-gray-300 relative">
                        <p>InternZone offers digital services; no physical shipping is involved.</p>
                        <p>Access to purchased services or content will be provided via email or online portal within 24–48 hours of successful payment confirmation.</p>
                        <p>If you do not receive service access within this time, please contact our support team immediately.</p>
                    </div>
                </div>

                {/* Terms & Conditions */}
                <div className="bg-gray-800 shadow-2xl rounded-lg p-8 border-l-4 border-cyan-400 relative overflow-hidden">
                    <div className="absolute -inset-1 bg-white blur opacity-5 rounded-lg"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 relative">Terms & Conditions</h3>
                    <div className="space-y-4 text-gray-300 relative">
                        <p>By accessing and using InternZone, you agree to comply with these terms.</p>
                        <p>You must provide accurate and complete information during registration or checkout.</p>
                        <p>InternZone will not be liable for losses resulting from misuse of our services, incorrect information provided by users, or delays caused by technical issues.</p>
                        <p>All disputes will be subject to the jurisdiction of courts in Pune, Maharashtra, India.</p>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-800 shadow-2xl rounded-lg p-8 border-l-4 border-cyan-400 relative overflow-hidden">
                    <div className="absolute -inset-1 bg-white blur opacity-5 rounded-lg"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 relative">Contact Information</h3>
                    <div className="space-y-4 text-gray-300 relative">
                        <p><span className="font-semibold text-cyan-400">Legal Name:</span> Sanskruti Rajesh Parate</p>
                        <p><span className="font-semibold text-cyan-400">Address:</span><br />
                            ward No 4<br />
                            Nearby Amba Mandir<br />
                            Mahalaxmi Nagar,<br />
                            Saoner, Nagpur,<br />
                            Maharashtra<br />
                            441107</p>
                        <p><span className="font-semibold text-cyan-400">Phone:</span> 8483095701</p>
                        <p><span className="font-semibold text-cyan-400">Email:</span> internzone01@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Policy