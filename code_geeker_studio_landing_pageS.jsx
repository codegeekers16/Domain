export default function CodeGeekerStudio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">Code Geeker Studio</h1>
          <p className="text-sm text-gray-400">Professional Web Solutions</p>
        </div>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:scale-105 transition"
        >
          Contact Us
        </a>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
            Modern Web Design Agency
          </p>

          <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Websites That
            <span className="block text-gray-300">Build Trust & Get Clients</span>
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
            We design modern, responsive and high-converting websites for businesses worldwide.
            From handyman services to ecommerce brands, we help businesses look professional online.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://codegeeker.online"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
              View Portfolio
            </a>

            <a
              href="mailto:hello@codegeeker.online"
              className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
            >
              hello@codegeeker.online
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-lg">
          <div className="space-y-6">
            <div className="bg-black rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Business Websites</h3>
              <p className="text-gray-400">
                Modern websites for local businesses, contractors, startups and service companies.
              </p>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Ecommerce Stores</h3>
              <p className="text-gray-400">
                Clean online stores optimized for conversions and mobile users.
              </p>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Custom Web Solutions</h3>
              <p className="text-gray-400">
                Tailored solutions including dashboards, booking systems and AI-powered tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-8 py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We help businesses create a strong online presence with modern and reliable digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Business Websites',
              'Ecommerce Development',
              'Landing Pages',
              'Website Redesign',
              'SEO Optimization',
              'Responsive Design',
              'Booking Systems',
              'Maintenance & Support',
            ].map((service) => (
              <div
                key={service}
                className="bg-gray-100 rounded-2xl p-6 hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Ready To Grow Your Business Online?
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Let’s build a professional website that helps your business stand out and generate more enquiries.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@codegeeker.online"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Start Your Project
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-8 py-8 text-center text-gray-500 text-sm">
        © 2026 Code Geeker Studio. All rights reserved.
      </footer>
    </div>
  )
}
