export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-6">LOQ</h2>
          <p className="text-white/40 max-w-sm">
            Engineered for those who demand absolute performance. Precision
            crafted for the future of computing.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white mb-6">Product</h3>
          <ul className="space-y-4 text-white/60">
            <li className="hover:text-white cursor-pointer transition-colors">
              Specifications
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Technology
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Design
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Accessories
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-6">Support</h3>
          <ul className="space-y-4 text-white/60">
            <li className="hover:text-white cursor-pointer transition-colors">
              Drivers
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Manuals
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Warranty
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Contact Us
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/20 text-sm">
        <p>© 2024 LOQ. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
