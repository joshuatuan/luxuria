import { Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-10 pt-15 py-10 border-t border-black">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-20">
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg">Julie Hansen Partnership</h3>
            <p className="mt-2 leading-relaxed text-gray-700">
              An elite group of the East Bay’s most talented and visionary real
              estate professionals believed buyers and sellers deserved more
              from their real estate company. More service. More resources. More
              integrity. More global reach. In a word, more of everything people
              should expect when they buy or sell their homes.
            </p>
          </div>
          <div className="flex gap-8 ">
            <div>
              <h4 className="font-semibold text-gray-900">Address</h4>
              <p className="text-sm mt-2 text-gray-600">
                4733 Chabot Drive #100
                <br />
                Pleasanton, CA 94588
              </p>
              <p className="text-sm mt-1 text-gray-600">
                Julie Hansen-Orvis | CA DRE# 00934447
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Contact info</h4>
              <p className="mt-2 text-sm">
                <a href="tel:+19255536707" className="underline text-gray-600">
                  (925) 553-6707
                </a>
              </p>
              <p className="text-sm mt-1">
                <a
                  href="mailto:luxuryhomesinwc@icloud.com"
                  className="underline text-gray-600"
                >
                  luxuryhomesinwc@icloud.com
                </a>
              </p>
              <div className="flex space-x-4 mt-3">
                <a
                  href="YOUR_FACEBOOK_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 flex items-center justify-center bg-gray-900 rounded-full text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/julie-hansen-orvis-10b99359/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 flex items-center justify-center bg-gray-900 rounded-full text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Newsletter</h3>
          <p className="text-gray-700">
            Subscribe to our Newsletter for latest news and updates. Stay tuned!
          </p>
          <div className="flex items-center">
            <input
              type="emall"
              className="bg-gray-200 p-3 w-[240px] rounded-l-md"
              placeholder="Enter your email"
            />
            <button className="font-medium capitalize p-3 text-white rounded-r-md bg-gray-900">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <img src="eqhouse-logo.png" alt="" className="h-13" />
            <img src="realtor-logo.png" alt="" className="h-13" />
            <img src="sereno-logo.png" alt="" className="h-5" />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-black pt-5 flex flex-col md:flex-row justify-between items-center">
        <a
          href="https://github.com/joshuatuan"
          target="_blank"
          className="text-sm border-b font-medium border-transparent hover:border-black"
        >
          built by joshua miguel
        </a>
        <p className="text-sm">Copyright 2025 | Privacy Policy</p>
      </div>
    </footer>
  );
}
