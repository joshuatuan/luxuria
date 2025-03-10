import {
  FileSignature,
  MessageCircle,
  VideoIcon,
  CircleCheckBig,
} from "lucide-react";

export default function HansenTablet() {
  const features = [
    {
      icon: <FileSignature className="h-8 w-8" />,
      title: "Digital Document Signing",
      description:
        "Review all documents and sign in the comfort of your home or anywhere.",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Dedicated Communication",
      description:
        "You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our Bomb bomb video messaging system.",
    },
    {
      icon: <VideoIcon className="h-8 w-8" />,
      title: "Virtual Meetings",
      description:
        "Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.",
    },
    {
      icon: <CircleCheckBig className="h-8 w-8" />,
      title: "Real-Time Updates",
      description:
        "Receive daily updates about your property, including showing feedback, market activity, and next steps in the selling process.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stay Connected With Our Tablet
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our custom communications tablet keeps you informed and connected
            throughout the entire selling process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center mb-16">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-7">
                  <div className="text-gray-600 ">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2 relative">
            <div className=" bg-white rounded-3xl shadow-lg p-8 md:p-12 overflow-hidden">
              <div className="">
                <h3 className="text-2xl font-bold mb-4">
                  The Hansen Partners Communications Tablet
                </h3>
                <p className="text-gray-600 mb-8 text-sm md:text-base">
                  We have created this as a wonderful tool so that we can
                  communicate with you daily, provide you with updates on what
                  is happening with your home. We are available at the with a
                  click of your tablet.
                </p>

                <img
                  src="tablet.jpeg"
                  alt="Hansen Partners Communications Tablet"
                  className="object-contain mx-auto brightness-105 object-center drop-shadow-xl w-full max-w-md rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
