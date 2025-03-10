export default function ProvenTrackRecord() {
  return (
    <section className="space-y-12 max-w-7xl mx-auto px-6">
      <div className="flex flex-col gap-12">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="years-of-success.jpeg"
            alt="Real Estate Experience"
            className="brightness-150 w-full md:w-[50%] h-auto rounded-lg shadow-sm"
          />
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold">
              <strong>33+ Years</strong> of Unmatched Real Estate Expertise
            </h2>
            <p className="text-base md:text-lg  leading-relaxed text-gray-600">
              We provide every one of our clients with a level of service they
              won’t find anywhere else. We give them what they need, often
              before they know they need it. In real estate, almost everything
              can be negotiated. When you choose Hansen Partners, experience is
              100% non-negotiable. And it’s an experience like no other.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold">
              We Want To Create An Unforgettable Experience For You...
            </h2>
            <p className="text-base md:text-lg  leading-relaxed text-gray-600">
              We combine data gained from your home’s Comparative Market
              Analysis with local market research to create a marketing plan
              designed to help you meet your selling goals.
            </p>
            <p className="text-base md:text-lg  leading-relaxed text-gray-600">
              Your home’s carefully designed plan will include a range of
              online, print, and other marketing tools targeted to the
              best-qualified pool of buyers. Successfully marketing a home in
              today’s real estate environment requires a firm with experience
              and flexibility. Hansen Partners provides both.
            </p>
          </div>
          <img
            src="custom-marketing-strat.jpeg"
            alt="Marketing Strategy"
            className="brightness-135 w-full md:w-[50%] h-auto rounded-lg shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
