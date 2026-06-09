import React from 'react';
import useScript from '../../hooks/useScript';

const hypedTailwindConfig = `
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'brand-pink': '#FF69B4',
          'brand-cyan': '#00BCD4',
          'brand-deep-purple': '#1A1A2E',
          'brand-dark-purple': '#0F0F1A',
          'brand-light-grey': '#E0E0E0',
        },
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
          serif: ['Playfair Display', 'serif'],
        },
        boxShadow: {
          'glow-pink': '0 0 12px rgba(255, 105, 180, 0.7)',
          'glow-cyan': '0 0 12px rgba(0, 188, 212, 0.7)',
        }
      }
    }
  }
`;

export function HypedHome() {
  useScript('https://cdn.tailwindcss.com', 'tailwind-cdn');
  useScript(null, 'tailwind-config-hyped', hypedTailwindConfig);

  return (
    <div className="text-white font-sans min-h-screen" style={{ 
      background: 'linear-gradient(135deg, #1a0b2e 0%, #000000 100%)',
      paddingBottom: '80px' 
    }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: "url('/assets/pics/hyped/products.png')",
          filter: 'brightness(0.5)'
        }}></div>
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(to bottom, rgba(26,11,46,0.3), rgba(26,11,46,1))' 
        }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wider text-white" style={{
            textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
          }}>
            Elevated Energy.<br />
            <span className="text-brand-cyan">Exquisite Taste.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-light-grey opacity-90">
            Discover HYPED: Where artisan energy meets culinary excellence.
          </p>
          <p className="text-2xl uppercase tracking-widest text-brand-pink font-serif" style={{
            textShadow: '0 0 10px rgba(255, 0, 255, 0.5)'
          }}>
            "Start your day the HYPED way."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a href="#cafe" className="bg-brand-pink border-2 border-brand-pink hover:bg-transparent hover:text-brand-pink transition-all duration-300 font-bold uppercase tracking-wider py-3 px-8 rounded-full shadow-glow-pink text-white text-center text-decoration-none">
              Experience Our Cafe
            </a>
            <a href="#flavours" className="border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-brand-deep-purple transition-all duration-300 font-bold uppercase tracking-wider py-3 px-8 rounded-full shadow-glow-cyan text-center text-decoration-none">
              Explore Flavours
            </a>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-brand-cyan tracking-wider uppercase mb-4">Our Vision</h2>
          <p className="text-lg text-brand-light-grey leading-relaxed">
            HYPED is a pioneering brand dedicated to elevating your everyday. From gourmet energy infusions to sophisticated dining, we craft experiences that invigorate body and soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold uppercase mb-4 text-white">The Daytime Sanctuary</h3>
            <p className="text-brand-light-grey/80 leading-relaxed text-sm">
              By day, our cafe offers a serene yet stimulating environment. Indulge in artisan energy drinks, premium coffees, and delectable meals designed to fuel your ambition.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-brand-pink/30 backdrop-blur-md hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_15px_rgba(255,0,255,0.08)]">
            <h3 className="text-2xl font-bold uppercase mb-4 text-white">The Artisan Collection</h3>
            <p className="text-brand-light-grey/80 leading-relaxed text-sm">
              Explore our curated range of unique energy drinks and gourmet smoothies. Quality and innovation in every creation.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold uppercase mb-4 text-white">Community Driven</h3>
            <p className="text-brand-light-grey/80 leading-relaxed text-sm">
              We support the dreamers and the doers. From esports tournaments to creative showcases, HYPED is there to fuel your passion.
            </p>
          </div>
        </div>
      </section>

      {/* Cafe Section */}
      <section id="cafe" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ 
          backgroundImage: "url('/assets/pics/hyped/cafe.png')",
          filter: 'brightness(0.2)'
        }}></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-brand-pink tracking-wider uppercase mb-4">The HYPED Daytime Cafe</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              A refined yet energetic atmosphere perfect for energising breakfasts, leisurely lunches, and everything in between.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Meals */}
            <div className="bg-black/75 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold text-brand-cyan mb-6 uppercase">Gourmet Energy Mealz</h3>
              <p className="text-brand-light-grey/80 mb-6 text-sm">Dishes subtly infused with natural energisers to tackle your day with vigour.</p>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">Sunrise Scramble</span>
                  <span className="text-brand-pink text-xs">Spinach & avocado</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">Berry Burst Oats</span>
                  <span className="text-brand-pink text-xs">Overnight oats</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">Artisan Toasties</span>
                  <span className="text-brand-pink text-xs">Gourmet fillings</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">Power Bowls</span>
                  <span className="text-brand-pink text-xs">Quinoa & lean protein</span>
                </li>
              </ul>
            </div>

            {/* Beverages */}
            <div className="bg-black/75 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold text-brand-cyan mb-6 uppercase">Refined Beverages</h3>
              <p className="text-brand-light-grey/80 mb-6 text-sm">Organic smoothies and sophisticated hot drinks for every taste.</p>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">Emerald Green Revitaliser</span>
                  <span className="text-brand-pink text-xs">Spinach, kale, apple</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">Tropical Sunset</span>
                  <span className="text-brand-pink text-xs">Mango & passionfruit</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">HYPED Velvet Hot Chocolate</span>
                  <span className="text-brand-pink text-xs">Rich and luxurious</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">Artisan Teas & Coffees</span>
                  <span className="text-brand-pink text-xs">Classic indulgence</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12 max-w-5xl mx-auto">
            <img src="/assets/pics/hyped/products2.png" alt="Gourmet Food" className="img-fluid rounded-3xl shadow-lg border border-white/10 w-full object-cover" style={{ maxHeight: '400px' }} />
          </div>
        </div>
      </section>

      {/* Signature Flavours Section */}
      <section id="flavours" className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-brand-cyan tracking-wider uppercase mb-4">Signature Flavours</h2>
            <p className="text-lg text-brand-light-grey">Experience our range of electrifying tastes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Flavour 1 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">☕</div>
              <h3 className="text-xl font-bold uppercase text-white mb-2">Espresso Elixir</h3>
              <p className="text-brand-light-grey/70 text-xs">Rich coffee-infused energy blend.</p>
            </div>
            {/* Flavour 2 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🍓</div>
              <h3 className="text-xl font-bold uppercase text-white mb-2">Rhubarb Royale</h3>
              <p className="text-brand-light-grey/70 text-xs">Tart-sweet delight with raspberry.</p>
            </div>
            {/* Flavour 3 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🍋</div>
              <h3 className="text-xl font-bold uppercase text-white mb-2">Zesty</h3>
              <p className="text-brand-light-grey/70 text-xs">Vibrant, zesty citrus blend.</p>
            </div>
            {/* Flavour 4 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🍫</div>
              <h3 className="text-xl font-bold uppercase text-white mb-2">Velvet Cacao</h3>
              <p className="text-brand-light-grey/70 text-xs">Luxurious chocolate energy.</p>
            </div>
            {/* Flavour 5 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🍈</div>
              <h3 className="text-xl font-bold uppercase text-white mb-2">Summer Blossom</h3>
              <p className="text-brand-light-grey/70 text-xs">Strawberry & honeydew melon.</p>
            </div>
            {/* Flavour 6 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🧪</div>
              <h3 className="text-xl font-bold uppercase text-white mb-2">Craft Your Own</h3>
              <p className="text-brand-light-grey/70 text-xs">Our finely milled powder allows you to prepare a bespoke HYPED energy drink.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl font-black uppercase text-brand-pink mb-4">Where to Buy</h2>
          <p className="text-lg text-brand-light-grey mb-12">Available at major retailers nationwide and online.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold uppercase mb-2">Supermarkets</h3>
              <p className="text-brand-light-grey/70 text-sm">Find us in the beverage aisle at FoodHall™ and other leading stores.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold uppercase mb-2">Convenience Stores</h3>
              <p className="text-brand-light-grey/70 text-sm">Grab a can on the go at local convenience stores and gas stations.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold uppercase mb-2">Online Store</h3>
                <p className="text-brand-light-grey/70 text-sm">Order cases directly to your door with free shipping on subscriptions.</p>
              </div>
              <button className="border border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-brand-deep-purple transition-all duration-300 text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full mt-4 align-self-center">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section id="location" className="py-20 bg-black/95">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-cyan uppercase tracking-wider mb-2">Global HQ</h2>
          <h3 className="text-4xl font-bold mb-8 font-serif">Edinburgh, Scotland</h3>
          
          <div className="ratio ratio-21x9 rounded-3xl overflow-hidden border border-white/15 max-w-4xl mx-auto shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113916.14207936199!2d-3.324128038743105!3d55.94121759600908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b800a5982623%3A0x64f2147b7ce71727!2sEdinburgh!5e0!3m2!1sen!2suk!4v1701389270087!5m2!1sen!2suk" loading="lazy" title="Edinburgh HQ Map"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
