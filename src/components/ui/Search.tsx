import { ArrowRight, Search } from "lucide-react";

export default function SearchAddress() {
  return (
    <section className="flex justify-between items-center bg-stone-800 text-white px-6 md:px-12 py-4">
      {/* Search Input */}
      <div className="flex items-center gap-3 text-sm md:text-lg text-white/80">
        <Search size={20} />
        <input type="text" placeholder="Search by address" />
      </div>

      {/* Appointment Button */}
      <button className="text-sm md:text-base flex items-center gap-2 text-white font-semibold">
        Book an Appointment
        <ArrowRight size={18} className="hidden md:block" />
      </button>
    </section>
  );
}
