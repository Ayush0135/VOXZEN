import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-dark-900 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">V</span>
                            </div>
                            <span className="text-2xl font-bold gradient-text">Voxzen AI</span>
                        </div>
                        <p className="text-cream-300 mb-4 max-w-md">
                            Premium AI dubbing for YouTube creators. Reach global audiences with studio-quality voice dubbing that beats YouTube Auto-Dub.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a href="#" className="text-cream-400 hover:text-primary-400 transition-colors">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="#" className="text-cream-400 hover:text-primary-400 transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                                <span className="sr-only">YouTube</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-cream-100 font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#features" className="text-cream-300 hover:text-primary-400 transition-colors">Features</a></li>
                            <li><a href="#pricing" className="text-cream-300 hover:text-primary-400 transition-colors">Pricing</a></li>
                            <li><a href="#demo" className="text-cream-300 hover:text-primary-400 transition-colors">Demo</a></li>
                            <li><a href="#faq" className="text-cream-300 hover:text-primary-400 transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-cream-100 font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-cream-300 hover:text-primary-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-cream-300 hover:text-primary-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#contact" className="text-cream-300 hover:text-primary-400 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-dark-700">
                    <p className="text-center text-cream-300">
                        © {currentYear} Voxzen AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
