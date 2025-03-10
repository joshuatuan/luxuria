import { buyingProcessSteps } from "@/data/buyingProcess";
import { sellingProcessSteps } from "@/data/sellingProcess";

export default function Processes() {
  return (
    <section className="space-y-12 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Navigating Your Real Estate Journey
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Whether you're buying or selling, understanding the process is key.
          Explore our step-by-step guides to make informed decisions with
          confidence.
        </p>
      </div>

      {/* Selling Process */}
      <div className="relative h-auto md:h-[500px] bg-[url('meeting.jpeg')] bg-cover bg-center rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/15 rounded-lg"></div>
        <div className="relative z-10 flex flex-col justify-between h-full text-white p-8 md:p-10">
          <h3 className="text-3xl md:text-4xl font-medium text-center md:text-left font-serif underline">
            The Selling Process
          </h3>
          <div className="flex justify-center text-center gap-4 md:gap-6 flex-wrap">
            {sellingProcessSteps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center max-w-[180px]"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
                  <span className="text-gray-950 text-xl font-bold">
                    {step.number}
                  </span>
                </div>
                <span className="font-medium text-lg">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buying Process */}
      <div className="relative h-auto md:h-[500px] bg-[url('woman-at-work.jpeg')] bg-cover bg-center rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/15 rounded-lg"></div>
        <div className="relative z-10 flex flex-col justify-between h-full text-white p-8 md:p-10">
          <h3 className="text-3xl md:text-4xl font-medium text-center md:text-left font-serif underline">
            The Buying Process
          </h3>
          <div className="flex justify-center text-center gap-4 md:gap-6 flex-wrap">
            {buyingProcessSteps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center max-w-[180px]"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
                  <span className="text-gray-950 text-xl font-bold">
                    {step.number}
                  </span>
                </div>
                <span className="font-medium text-lg">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
