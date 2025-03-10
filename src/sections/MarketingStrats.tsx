import { MapPin, Building, Globe } from "lucide-react";

export default function MarketingStrats() {
  const strategies = [
    {
      title: "Local Exposure",
      description:
        "Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area  neighborhoods, we make sure your home receives targeted local exposure.  When you list your home with Hansen Partners it will automatically  appear on Nextdoor in your neighborhood.",
      icon: <MapPin className="h-10 w-10 " />,
    },
    {
      title: "National Exposure",
      description:
        "We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We  will receive every inquiry about your property directly.",
      icon: <Building className="h-10 w-10 " />,
    },
    {
      title: "International Exposure",
      description:
        "To expose your luxury listing to millions of potential home buyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, China.apr.com, Caimeiju, Juwai, Country Life UK",
      icon: <Globe className="h-10 w-10 " />,
    },
  ];

  return (
    <section className="flex flex-col items-center">
      <div className="max-w-4xl space-y-14">
        {/* Title Section */}
        <h2 className="text-3xl text-center md:text-5xl font-bold mb-10">
          We market your home to the world
        </h2>
        <div>
          <h2 className="text-2xl font-semibold text-center">
            Our online market strategy
          </h2>
          <p className="text-center text-gray-600 mt-4">
            ​The Bay Area remains one of the world's most sought-after regions
            to live in, and when looking to sell, it is vital that your home be
            marketed online to audiences locally, nationally, and
            internationally.
          </p>
        </div>

        {/* Marketing Strategies */}
        <div className="mt-8 space-y-14 text-center">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-3"
            >
              {/* Icon */}
              <div className="text-gray-800 ">{strategy.icon}</div>
              <h3 className="text-gray-800  font-semibold text-lg">
                {strategy.title}
              </h3>

              {/* Text Content */}
              <div>
                <p className="text-gray-600 mt-2 max-w-3xl">
                  {strategy.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 items-center justify-center">
          <img src="realtor-logo.svg" alt="" className="h-6" />
          <img src="trulia-logo.svg" alt="" className="h-20" />
          <img src="zillow-logo.svg" alt="" className="h-6" />
        </div>
      </div>
    </section>
  );
}
