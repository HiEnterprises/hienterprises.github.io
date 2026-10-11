import React from 'react';
import { Link } from 'react-router-dom';
import useScript from '../../hooks/useScript';
import GlassNavbar from '../../components/GlassNavbar';

const nuggetdevTailwindConfig = `
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'primary': 'rgb(33 196 240)',
          'on-primary': 'rgb(0 53 69)',
          'primary-container': 'rgb(0 78 99)',
          'on-primary-container': 'rgb(183 234 255)',
          'secondary': 'rgb(182 201 209)',
          'on-secondary': 'rgb(39 52 58)',
          'background': 'rgb(24 28 30)',
          'on-background': 'rgb(225 227 229)',
          'surface': 'rgb(24 28 30)',
          'on-surface': 'rgb(225 227 229)',
          'surface-variant': 'rgb(64 72 76)',
          'on-surface-variant': 'rgb(192 200 204)',
          'outline': 'rgb(112 121 125)',
        },
        fontFamily: {
          sans: ['Outfit', 'sans-serif'],
        },
      }
    }
  }
`;

export function NuggetdevHome() {
  useScript('https://cdn.tailwindcss.com', 'tailwind-cdn');
  useScript(null, 'tailwind-config-nuggetdev', nuggetdevTailwindConfig);

  const links = [
    { to: '/nuggetdev', label: 'Home', icon: 'home', end: true },
    { to: '/hiosmobile', label: 'HiOSMobile', icon: 'smartphone' },
    { to: '/hiosmobile/himaterial', label: 'HiMaterial', icon: 'design_services' },
    { to: 'https://sites.google.com/view/nuggetos', label: 'novaOS', icon: 'terminal', isExternal: true },
    { to: '/', label: 'HiEnterprises™', icon: 'arrow_back', isCta: true },
  ];

  return (
    <div className="bg-background text-on-background font-sans min-h-screen pb-16">
      <GlassNavbar
        brandLogo="/assets/pics/nuggetdev/nuggetdev.png"
        brandName="nuggetdev"
        brandTagline="Digital experiences"
        showBrandName
        brandLink="/nuggetdev"
        links={links}
        menuTitle="nuggetdev"
        menuSubtitle="Software, systems and digital experiments."
        variant="brand"
        theme="nuggetdev"
      />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] flex items-center justify-center text-center text-white p-4 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{ 
            backgroundImage: "url('/assets/pics/nuggetdev/backdrop.jpg')"
          }}></div>
          <div className="relative z-20 space-y-2 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-wide">nuggetdev</h1>
            <p className="text-xl md:text-2xl text-on-primary-container">by The Highland Cafe™</p>
          </div>
        </section>

        {/* Intro */}
        <section className="container mx-auto px-4 lg:px-6 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">The brains behind multiple great tech experiences.</h2>
            <p className="mt-6 text-xl text-on-surface-variant leading-relaxed">
              We are a brand, by The Highland Cafe™️ Enterprises, that prides itself in providing brilliant experiences across many devices.
            </p>
          </div>
        </section>

        {/* Active Projects */}
        <section className="py-12 container mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white">Our Projects</h2>
            <p className="mt-2 text-on-surface-variant text-lg">Active Projects</p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Harmony */}
            <div className="bg-surface-variant/20 border border-outline/10 rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-lg">
              <div className="bg-white/95 p-6 h-48 flex items-center justify-center">
                <img className="max-h-full max-w-full object-contain" src="/assets/pics/brands/hiosmobile.png" alt="Harmony Logo" />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Harmony</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">The main app by the Highland Cafe™, engineered by us at nuggetdev.</p>
                </div>
                <Link to="/harmony" className="mt-6 inline-block w-full bg-primary text-on-primary font-bold py-2.5 rounded-full hover:opacity-95 transition-opacity text-decoration-none">
                  Visit Harmony
                </Link>
              </div>
            </div>

            {/* novaOS */}
            <div className="bg-surface-variant/20 border border-outline/10 rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-lg">
              <div className="bg-white/95 p-6 h-48 flex items-center justify-center">
                <img className="max-h-full max-w-full object-contain" src="/assets/pics/nuggetdev/nuggetos.png" alt="novaOS Logo" />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">novaOS</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">The upcoming Linux distro by nuggetdev. The simple, fun Linux distro.</p>
                </div>
                <a href="https://sites.google.com/view/nuggetos" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block w-full bg-primary text-on-primary font-bold py-2.5 rounded-full hover:opacity-95 transition-opacity text-decoration-none">
                  Visit novaOS
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Discontinued Projects */}
        <section className="py-12 container mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">Discontinued Projects</h2>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {/* Proj 1 */}
            <div className="bg-surface-variant/20 border border-outline/10 rounded-2xl overflow-hidden flex flex-col text-center shadow-md">
              <div className="bg-white/95 p-4 h-32 flex items-center justify-center">
                <img className="max-h-full object-contain" src="https://thehighlandcafe.github.io/hioswebcore/assets/pics/logos/logo_new.png" alt="HiOSMobile Logo" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-white">HiOSMobile</h4>
                <p className="text-xs text-on-surface-variant mt-1">Discontinued May 2025</p>
              </div>
            </div>

            {/* Proj 2 */}
            <div className="bg-surface-variant/20 border border-outline/10 rounded-2xl overflow-hidden flex flex-col text-center shadow-md">
              <div className="bg-white/95 p-4 h-32 flex items-center justify-center">
                <img className="max-h-full object-contain" src="/assets/pics/hiosmobile-site/home/lite.png" alt="HiOSMobileWeb Logo" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-white">HiOSMobileWeb</h4>
                <p className="text-xs text-on-surface-variant mt-1">Discontinued May 2025</p>
              </div>
            </div>

            {/* Proj 3 */}
            <div className="bg-surface-variant/20 border border-outline/10 rounded-2xl overflow-hidden flex flex-col text-center shadow-md">
              <div className="bg-white/95 p-4 h-32 flex items-center justify-center">
                <img className="max-h-full object-contain" src="https://thehighlandcafe.github.io/hioswebcore/assets/pics/logos/hioslogo-new.png" alt="HiOSDesktop Logo" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-white">HiOSDesktop</h4>
                <p className="text-xs text-on-surface-variant mt-1">Discontinued June 2024</p>
              </div>
            </div>

            {/* Proj 4 */}
            <div className="bg-surface-variant/20 border border-outline/10 rounded-2xl overflow-hidden flex flex-col text-center shadow-md">
              <div className="bg-white/95 p-4 h-32 flex items-center justify-center">
                <img className="max-h-full object-contain" src="https://thehighlandcafe.github.io/hioswebcore/assets/pics/logos/logo_hiosunified2.png" alt="HiOSUnified2 Logo" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-white">HiOSUnified2</h4>
                <p className="text-xs text-on-surface-variant mt-1">Discontinued February 2024</p>
              </div>
            </div>

            {/* Proj 5 */}
            <div className="bg-surface-variant/20 border border-outline/10 rounded-2xl overflow-hidden flex flex-col text-center shadow-md">
              <div className="bg-white/95 p-4 h-32 flex items-center justify-center">
                <img className="max-h-full object-contain" src="https://thehighlandcafe.github.io/hioswebcore/assets/pics/logos/wenew.png" alt="HiOSUnified Logo" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-white">HiOSUnified</h4>
                <p className="text-xs text-on-surface-variant mt-1">Discontinued February 2023</p>
              </div>
            </div>

            {/* Proj 6 */}
            <div className="bg-surface-variant/20 border border-outline/10 rounded-2xl overflow-hidden flex flex-col text-center shadow-md">
              <div className="bg-white/95 p-4 h-32 flex items-center justify-center">
                <img className="max-h-full object-contain" src="https://thehighlandcafe.github.io/hioswebcore/assets/pics/logos/we_dark.png" alt="WorstEastern App Logo" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-white">WorstEastern App</h4>
                <p className="text-xs text-on-surface-variant mt-1">Discontinued May 2022</p>
              </div>
            </div>

            {/* Proj 7 */}
            <div className="bg-surface-variant/20 border border-outline/10 rounded-2xl overflow-hidden flex flex-col text-center shadow-md">
              <div className="bg-white/95 p-4 h-32 flex items-center justify-center">
                <img className="max-h-full object-contain" src="https://thehighlandcafe.github.io/hioswebcore/assets/pics/logo.png" alt="HiOS Logo" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-white">HiOS</h4>
                <p className="text-xs text-on-surface-variant mt-1">Discontinued March 2022</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-transparent py-8 mt-12 text-center text-outline border-t border-outline/10">
        <p>© Copyright &copy; The Highland Cafe™ Ltd. 2024. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
