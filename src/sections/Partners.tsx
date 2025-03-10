export default function Partners() {
  return (
    <section className="space-y-12 max-w-7xl mx-auto px-6">
      <div className="relative h-[300px] md:h-[500px] bg-[url('/our-partners.jpeg')] brightness-105 bg-cover bg-center rounded-lg mb-10" />

      <div className="space-y-10 max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-medium text-center">
          Leading Real Estate Companies of The World® & Luxury Portfolio
          International
        </h3>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            <img
              src="lux-port-logo.jpg"
              alt="Luxury Portfolio Logo"
              className="h-14 md:h-16 w-auto"
            />
            <img
              src="leading-logo.jpg"
              alt="Leading RE Logo"
              className="h-18 md:h-22 w-auto"
            />
          </div>
          <p className="text-gray-600 text-center">
            JRockcliff is a founding member of Luxury Portfolio International®,
            the luxury division of Leading Real Estate Companies of the World®.
            With more than 500 member firms around the world, our luxury
            listings reach potential buyers and investors in over 50 countries.
          </p>
        </div>

        {/* Second Logo Section */}
        <div className="flex flex-col items-center gap-4">
          <img
            src="lux-real-logo.jpg"
            alt="Luxury Real Estate Logo"
            className="h-12 md:h-14 w-auto"
          />
          <p className="text-gray-600 text-center">
            Who’s Who in Luxury Real Estate is a global collection of luxury
            real estate brokers.
          </p>
        </div>
      </div>

      <div className="relative h-[300px] md:h-[530px] bg-[url('/global.jpeg')] brightness-105 bg-cover bg-center rounded-lg mb-10" />

      <div className="space-y-10 max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-medium text-center">
          Through our international affiliations, we have a strong presence in
          over 50 countries.
        </h3>
        <p className="text-gray-700 text-center">
          Our luxury listings are sent to prominent international real estate
          sites, reaching over 70 million potential buyers and investors
          worldwide through our relationships with:
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <img
            src="lux-port-logo.jpg"
            alt="Luxury Portfolio Logo"
            className="h-14 md:h-16 w-auto"
          />
          <img
            src="leading-logo.jpg"
            alt="Leading RE Logo"
            className="h-18 md:h-22 w-auto"
          />
          <img
            src="lux-real-logo.jpg"
            alt="Luxury Real Estate Logo"
            className="h-12 md:h-14 w-auto"
          />
        </div>

        <h3 className="text-2xl md:text-3xl font-medium text-center">
          We also have several well-positioned affiliate offices in China,
          providing our clients with access to buyers in Hong Kong, Shanghai,
          and Beijing.
        </h3>
      </div>
    </section>
  );
}
