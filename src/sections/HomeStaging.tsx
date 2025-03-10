import { stagingItems } from "@/data/stagingItems";

export default function HomeStaging() {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Art of Home Staging
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Our professional staging transforms your property into an
            irresistible home that buyers can envision themselves living in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {stagingItems.map((item, index) => (
            <div key={index} className="group">
              <div className="relative w-full mb-6 overflow-hidden rounded-md shadow-md">
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`object-cover object-center group-hover:scale-105 rounded-md transition-transform duration-500 ${
                    index === 0 ? "brightness-140" : "brightness-110"
                  }`}
                />
              </div>

              <div className="space-y-5">
                <h3 className="font-semibold text-xl">{item.title}</h3>

                {item.content && (
                  <p className="text-gray-600 text-sm leading-loose">
                    {item.content}
                  </p>
                )}

                {item.listItems && (
                  <ul className="space-y-3 text-gray-600">
                    {item.listItems.map((listItem, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span>&mdash;</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
