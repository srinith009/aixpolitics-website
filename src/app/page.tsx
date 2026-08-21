"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, Bot, Users, BarChart3, CheckSquare, Mail, MapPin, Phone } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<'en' | 'te' | 'hi'>('en');

  useEffect(() => {
    // Check if there is a saved translation preference in cookies
    const match = document.cookie.match(/googtrans=\/en\/(en|te|hi)/);
    if (match) {
      setLang(match[1] as 'en' | 'te' | 'hi');
    }
  }, []);

  const changeLanguage = (newLang: 'en' | 'te' | 'hi') => {
    setLang(newLang);
    // Set Google Translate cookie
    document.cookie = `googtrans=/en/${newLang}; path=/;`;
    if (window.location.hostname !== 'localhost') {
      document.cookie = `googtrans=/en/${newLang}; domain=.${window.location.hostname}; path=/;`;
    }
    // Reload the page to apply the Google translation instantly
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white pb-20 transition-colors">
      
      {/* Hidden Google Translate Target */}
      <div id="google_translate_element" className="hidden"></div>
      
      <Script 
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
        strategy="afterInteractive" 
      />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          window.googleTranslateElementInit = function() {
            new window.google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,te,hi',
              autoDisplay: false
            }, 'google_translate_element');
          };
        `}
      </Script>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b-8 border-black transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo-transparent.png" alt="AIxPOLITICS Logo" width={220} height={60} className="object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-xl font-bold uppercase tracking-tight">
            <a href="#services" className="hover:bg-brutal-yellow hover:text-black px-2 py-1 transition-colors">Services</a>
            <a href="#audience" className="hover:bg-brutal-yellow hover:text-black px-2 py-1 transition-colors">Audience</a>
            <a href="#testimonials" className="hover:bg-brutal-yellow hover:text-black px-2 py-1 transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:bg-brutal-yellow hover:text-black px-2 py-1 transition-colors">Pricing</a>
            <a href="#urgency" className="hover:bg-brutal-yellow hover:text-black px-2 py-1 transition-colors">Reason to Take</a>
          </div>
          
          <div className="flex items-center gap-4">
            <select 
              value={lang} 
              onChange={(e) => changeLanguage(e.target.value as 'en' | 'te' | 'hi')}
              className="py-2 px-3 text-lg font-bold bg-transparent border-4 border-black cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="te">తెలుగు</option>
              <option value="hi">हिंदी</option>
            </select>

            <a href="#contact" className="hidden md:block brutal-btn px-6 py-3 text-xl">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </nav>

      {/* Marquee Header */}
      <div className="marquee-container mt-24 w-full bg-brutal-blue text-white border-b-8 border-black overflow-hidden py-5 flex whitespace-nowrap cursor-default">
        <div className="animate-marquee font-bold text-2xl md:text-3xl uppercase flex gap-12 items-center shrink-0">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center shrink-0">
              <span className="text-brutal-yellow">🚀 BE EVERYWHERE AT ONCE</span>
              <span className="text-white">///</span>
              <span className="text-brutal-red bg-white px-3 py-1 border-4 border-black shadow-[4px_4px_0px_0px_#000] rotate-[-2deg]">⚡ 10X YOUR OUTREACH</span>
              <span className="text-white">///</span>
              <span className="text-white">🔥 PERSONALIZE AT SCALE</span>
              <span className="text-white">///</span>
              <span className="text-black bg-brutal-yellow px-3 py-1 border-4 border-black shadow-[4px_4px_0px_0px_#000] rotate-[2deg]">🤖 THE FUTURE IS HERE</span>
              <span className="text-white">///</span>
            </div>
          ))}
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12 space-y-32">
        
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-10">
            <h1 className="brutal-heading text-5xl md:text-6xl lg:text-7xl leading-none flex flex-col items-start gap-4">
              <span>GET YOUR</span>
              <span className="bg-brutal-yellow text-black px-4 py-2 whitespace-nowrap">DIGITAL AVATAR</span>
              <span>NOW!!! 🚀🔥</span>
            </h1>
            <p className="text-2xl font-bold max-w-xl border-l-8 border-black pl-6">
              DIGITAL AI AVATARS THAT CAMPAIGN FOR YOU 24/7. CONNECT WITH CONSTITUENTS PERSONALLY, AT SCALE.
            </p>
            <div className="inline-block">
              <a href="#contact" className="brutal-btn px-10 py-5 text-2xl flex items-center gap-4">
                BOOK DEMO <ArrowRight size={28} strokeWidth={4} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-2xl relative">
            <div className="brutal-container p-2 aspect-video bg-brutal-blue relative">
              <video 
                src="/logo-animation.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover border-4 border-black"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services">
          <div className="mb-12 border-b-8 border-black pb-4">
            <h2 className="brutal-heading text-6xl md:text-8xl">CORE_SERVICES</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { icon: <Bot size={48} strokeWidth={2.5}/>, title: "24/7 CLONE", desc: "Your avatar never sleeps. Send messages anytime." },
              { icon: <Users size={48} strokeWidth={2.5}/>, title: "MASS PERSONALIZATION", desc: "Call voters by their first name in 10,000 unique videos." },
              { icon: <Phone size={48} strokeWidth={2.5}/>, title: "WHATSAPP NATIVE", desc: "Direct to inbox. No apps to download. High open rates." }
            ].map((feature, i) => (
              <div key={i} className="brutal-container brutal-container-hover p-8 bg-brutal-bg flex flex-col">
                <div className="w-20 h-20 bg-brutal-blue border-4 border-black text-white flex items-center justify-center mb-8">
                  {feature.icon}
                </div>
                <h3 className="brutal-heading text-4xl mb-4">{feature.title}</h3>
                <p className="text-xl font-bold">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Audience Section */}
        <section id="audience" className="brutal-container bg-brutal-yellow p-8 md:p-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="brutal-heading text-6xl md:text-8xl mb-8 leading-none">BUILT FOR<br/>LEADERS</h2>
              <p className="text-2xl font-bold mb-8 bg-white border-4 border-black p-6">
                ENGINEERED EXCLUSIVELY FOR GRASSROOTS LEADERS WHO NEED IMPACT.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6 w-full">
              {['CORPORATORS', 'MLAS', 'PARTY REPS', 'COUNCIL MEMBERS'].map((role, i) => (
                <div key={i} className="bg-black text-white p-6 text-center brutal-heading text-2xl md:text-3xl hover:bg-brutal-red hover:text-black transition-colors cursor-default border-4 border-black">
                  {role}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <div className="mb-12 border-b-8 border-black pb-4">
            <h2 className="brutal-heading text-5xl md:text-7xl">TESTIMONIALS /<br className="md:hidden" /> EXPECTED OUTPUTS</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Video Placeholder 1 */}
            <div className="brutal-container p-6 bg-white flex flex-col brutal-container-hover">
              <div className="aspect-video bg-black border-4 border-black mb-6 relative flex items-center justify-center overflow-hidden">
                <video src="/testimonial-1-v3.mp4" controls className="w-full h-full object-cover" preload="metadata" />
              </div>
              <h3 className="brutal-heading text-3xl mb-2 uppercase">AI-GENERATED CAMPAIGN MESSAGE</h3>
              <p className="font-bold text-lg uppercase text-gray-500">EXACT VOICE & FACE CLONING</p>
            </div>

            {/* Video Placeholder 2 */}
            <div className="brutal-container p-6 bg-brutal-blue text-white shadow-[12px_12px_0px_0px_#000] flex flex-col">
              <div className="aspect-video bg-black border-4 border-white mb-6 relative flex items-center justify-center overflow-hidden">
                <video src="/testimonial-2-v3.mp4" controls className="w-full h-full object-cover" preload="metadata" />
              </div>
              <h3 className="brutal-heading text-3xl mb-2 text-brutal-yellow uppercase">PERSONALIZED VOTER OUTREACH</h3>
              <p className="font-bold text-lg uppercase text-gray-300">SEAMLESS REGIONAL DELIVERY</p>
            </div>

          </div>

          {/* Highlighted Points */}
          <div className="mt-16 bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#000]">
            <h3 className="brutal-heading text-4xl md:text-5xl mb-10 border-b-4 border-black pb-4">THE AIxPOLITICS ADVANTAGE</h3>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              
              <div className="space-y-2">
                <h4 className="text-2xl font-bold uppercase flex items-start gap-3">
                  <span className="text-brutal-red text-3xl leading-none">►</span> 
                  Personalised outreach that leaves a lasting impression
                </h4>
                <p className="text-xl pl-9">Your message reaches people in a way they won’t forget.</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold uppercase flex items-start gap-3">
                  <span className="text-brutal-blue text-3xl leading-none">►</span> 
                  Exact face & voice cloning
                </h4>
                <p className="text-xl pl-9">We create highly realistic videos using advanced AI face and voice cloning technology.</p>
                <p className="text-lg pl-9 text-gray-500 font-bold italic">(The sample videos shown above are for illustration purposes only.)</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold uppercase flex items-start gap-3">
                  <span className="text-black text-3xl leading-none">►</span> 
                  Videos up to 1 minute
                </h4>
                <p className="text-xl pl-9">Short, impactful clips tailored to your needs.</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold uppercase flex items-start gap-3">
                  <span className="text-brutal-yellow text-3xl leading-none drop-shadow-[1px_1px_0px_#000]">►</span> 
                  Clean, professional delivery
                </h4>
                <p className="text-xl pl-9">Sample videos may carry watermarks. Your final videos will be delivered completely watermark-free.</p>
              </div>

              <div className="space-y-2 md:col-span-2">
                <h4 className="text-2xl font-bold uppercase flex items-start gap-3">
                  <span className="text-brutal-red text-3xl leading-none">►</span> 
                  Be present without being present
                </h4>
                <p className="text-xl pl-9">No need to shoot new footage. Stay visible, save time, and scale your outreach effortlessly.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <div className="mb-12 border-b-8 border-black pb-4 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <h2 className="brutal-heading text-6xl md:text-8xl">PRICING_TIERS</h2>
          </div>
          
          <div className="brutal-container p-12 md:p-24 bg-brutal-yellow text-center shadow-[12px_12px_0px_0px_#000]">
            <h3 className="brutal-heading text-6xl md:text-9xl mb-8 uppercase">Contact Us!!</h3>
            <p className="text-2xl md:text-4xl font-bold mb-12">
              Get in touch with our team for custom pricing tailored to your constituency's specific needs.
            </p>
            <a href="#contact" className="brutal-btn inline-block px-12 py-6 text-3xl">
              TALK TO SALES
            </a>
          </div>
        </section>

        {/* Urgency / FOMO Section */}
        <section id="urgency" className="bg-brutal-red text-white p-8 md:p-16 lg:p-24 border-b-8 border-black flex flex-col items-center justify-center text-center">
          <h2 className="brutal-heading text-6xl md:text-8xl lg:text-9xl mb-8 uppercase text-black drop-shadow-[4px_4px_0_#FFF] flex flex-col items-center gap-2">
            <span>SURVIVAL OF THE</span>
            <span className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-2">
              <span className="relative inline-block text-gray-800">
                FITTEST
                <span className="absolute left-0 top-1/2 w-full h-3 md:h-5 bg-black -translate-y-1/2 rotate-[-5deg]"></span>
              </span>
              <span className="text-brutal-yellow">FASTEST</span>
            </span>
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="bg-black text-white p-6 md:p-8 inline-block border-4 border-white shadow-[8px_8px_0px_0px_#000]">
              <p className="text-3xl md:text-5xl font-bold uppercase leading-tight text-brutal-yellow">
                YOUR OPPONENT IS LOOKING AT THIS EXACT SAME TECHNOLOGY.
              </p>
            </div>
            
            <p className="text-2xl md:text-3xl font-bold border-l-8 border-black pl-8 text-left bg-white/10 p-6">
              In politics, the first to adopt breakthrough technology controls the narrative. The second simply reacts. While you hesitate, someone else is securing the ultimate unfair advantage.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
               <div className="bg-white text-black p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:-translate-y-2 transition-transform">
                  <h4 className="brutal-heading text-3xl mb-4">FIRST-MOVER MONOPOLY</h4>
                  <p className="text-xl font-bold">Voters remember the candidate who reached them first, in their own language, calling them by name. That level of shock and awe cannot be replicated twice.</p>
               </div>
               <div className="bg-black text-white p-8 border-4 border-white shadow-[8px_8px_0px_0px_#FFF] hover:-translate-y-2 transition-transform">
                  <h4 className="brutal-heading text-3xl mb-4 text-brutal-red">LIMITED BANDWIDTH</h4>
                  <p className="text-xl font-bold">Training high-fidelity AI avatars requires massive computing power. We have a strict cap on the number of candidates we onboard before the next election cycle.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="brutal-container p-0 overflow-hidden">
          <div className="bg-black text-white p-12 lg:p-20 flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="brutal-heading text-6xl md:text-8xl mb-8">INITIATE<br/>CONTACT</h2>
              <p className="text-2xl font-bold border-l-8 border-brutal-yellow pl-6">
                READY TO DOMINATE YOUR NEXT ELECTION? TRANSMIT A SIGNAL.
              </p>
            </div>
            <div className="space-y-8 font-bold text-xl md:w-1/2 flex flex-col items-start">
              <a href="mailto:reddysrinith9@gmail.com" className="group flex items-center gap-6 cursor-pointer w-full">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center border-4 border-brutal-blue shrink-0 group-hover:bg-brutal-blue group-hover:text-white transition-colors">
                  <Mail size={32} strokeWidth={2.5}/>
                </div>
                <div className="flex flex-col">
                  <span className="break-all group-hover:text-brutal-yellow transition-colors">REDDYSRINITH9@GMAIL.COM</span>
                  <span className="text-sm text-gray-400 group-hover:text-white mt-1">CLICK TO EMAIL &rarr;</span>
                </div>
              </a>
              <a href="tel:+917989072726" className="group flex items-center gap-6 cursor-pointer w-full">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center border-4 border-brutal-yellow shrink-0 group-hover:bg-brutal-yellow group-hover:text-black transition-colors">
                  <Phone size={32} strokeWidth={2.5}/>
                </div>
                <div className="flex flex-col">
                  <span className="group-hover:text-brutal-yellow transition-colors">+91 7989072726</span>
                  <span className="text-sm text-gray-400 group-hover:text-white mt-1">CLICK TO CALL &rarr;</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-32 border-t-8 border-black bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 font-bold uppercase text-xl">
          <Image src="/logo-transparent.png" alt="AIxPOLITICS Logo" width={220} height={60} className="object-contain" />
          <p>© {new Date().getFullYear()} AIXPOLITICS // ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:bg-brutal-yellow px-2 py-1 transition-colors">PRIVACY</a>
            <a href="#" className="hover:bg-brutal-yellow px-2 py-1 transition-colors">TERMS</a>
          </div>
        </div>
      </footer>
      
      {/* CSS animation for marquee inline */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
