import { Flag, Camera, Mail, MapPin } from "lucide-react";

export default function MarketingPlan() {
  const marketingFeatures = [
    {
      icon: <Flag className="h-7 w-7" />,
      title: "Syndication",
      description:
        "I market your property locally, nationally, and internationally",
    },
    {
      icon: <Camera className="h-7 w-7" />,
      title: "Photography",
      description:
        "Beautiful, high-end photography is a central part of our marketing plan for your property.",
    },
    {
      icon: <Mail className="h-7 w-7" />,
      title: "Responsive",
      description: "I am always available via phone, text, or email.",
    },
    {
      icon: <MapPin className="h-7 w-7" />,
      title: "Virtual Tour",
      description:
        "Let's make your home stand out with a high quality virtual tour.",
    },
  ];
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6"></div>
          <h2 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl mb-4">
            Comprehensive Marketing Plan
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
            We leverage cutting-edge marketing techniques to showcase your
            property to the right audience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative">
            <img
              src="marketing-plan.jpeg"
              alt="Marketing Plan"
              width={1000}
              height={800}
              className="w-full shadow-lg border brightness-105 border-gray-100 rounded-2xl h-auto object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <ul className="space-y-9">
              {marketingFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="text-gray-700">{feature.icon}</div>
                      <h3 className="font-semibold text-xl">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
