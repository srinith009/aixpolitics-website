        {/* Pricing Section */}
        <section id="pricing">
          <div className="mb-12 border-b-8 border-black pb-4 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <h2 className="brutal-heading text-6xl md:text-8xl">PRICING_TIERS</h2>
          </div>

          {/* Setup Fee Banner */}
          <div className="mb-12 bg-brutal-yellow border-4 border-black p-8 md:p-12 text-center shadow-[12px_12px_0px_0px_#000]">
            <h3 className="brutal-heading text-6xl md:text-8xl mb-6">ATTENTION</h3>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
              ALL PLANS REQUIRE A ONE-TIME <br className="hidden lg:block"/>
              <span className="bg-black text-white px-4 py-2 inline-block my-4">₹2 LAKHS SETUP FEE</span> <br className="hidden lg:block"/>
              FOR AVATAR GENERATION
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Basic */}
            <div className="brutal-container p-8 bg-white flex flex-col">
              <div className="border-b-4 border-black pb-6 mb-6">
                <h3 className="brutal-heading text-5xl mb-2">BASIC</h3>
                <p className="text-xl font-bold text-gray-600">ENTRY LEVEL</p>
              </div>
              <div className="mb-8 h-24 flex items-center">
                <span className="brutal-heading text-5xl xl:text-6xl">₹49,999<span className="text-2xl xl:text-3xl text-gray-500 ml-2">/MO</span></span>
              </div>
              <ul className="space-y-6 mb-12 flex-1 text-lg font-bold">
                {['STANDARD AVATAR', '1,000 MINS PERSONALISED VIDEOS', 'EMAIL SUPPORT', '3 SPECIAL HEAVY AI VIDEOS'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckSquare size={28} className="text-brutal-blue shrink-0" strokeWidth={3} /> {feat}
                  </li>
                ))}
              </ul>
              <button className="brutal-btn w-full py-4 text-xl mt-auto">SELECT BASIC</button>
            </div>

            {/* Pro */}
            <div className="brutal-container p-8 bg-brutal-blue text-white shadow-[12px_12px_0px_0px_#000] lg:-translate-y-4 flex flex-col">
              <div className="border-b-4 border-white pb-6 mb-6 relative">
                <div className="absolute top-0 right-0 bg-brutal-yellow text-black px-3 py-1 font-bold text-sm uppercase border-2 border-black">
                  MOST POPULAR
                </div>
                <h3 className="brutal-heading text-5xl mb-2 text-brutal-yellow">PRO</h3>
                <p className="text-xl font-bold">REGIONAL REPS</p>
              </div>
              <div className="mb-8 h-24 flex items-center">
                <span className="brutal-heading text-5xl xl:text-6xl">₹1,49,999<span className="text-2xl xl:text-3xl text-gray-300 ml-2">/MO</span></span>
              </div>
              <ul className="space-y-6 mb-12 flex-1 text-lg font-bold">
                {['PREMIUM AVATAR', '3,000 MINS PERSONALISED VIDEOS', 'WHATSAPP SHAREABLE', '10 SPECIAL HEAVY AI VIDEOS', 'ANALYTICS'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckSquare size={28} className="text-brutal-yellow shrink-0" strokeWidth={3} /> {feat}
                  </li>
                ))}
              </ul>
              <button className="brutal-btn w-full py-4 text-xl mt-auto bg-white hover:bg-brutal-yellow text-black border-white hover:border-black shadow-[6px_6px_0px_0px_#FFF] hover:shadow-[2px_2px_0px_0px_#000]">
                SELECT PRO
              </button>
            </div>

            {/* Custom */}
            <div className="brutal-container p-8 bg-white flex flex-col">
              <div className="border-b-4 border-black pb-6 mb-6">
                <h3 className="brutal-heading text-5xl mb-2">PARTY</h3>
                <p className="text-xl font-bold text-gray-600">ENTERPRISE</p>
              </div>
              <div className="mb-8 h-24 flex items-center">
                <span className="brutal-heading text-5xl xl:text-6xl">TALK 2 US</span>
              </div>
              <ul className="space-y-6 mb-12 flex-1 text-lg font-bold">
                {['UNLIMITED VIDEOS', 'MULTIPLE AVATARS', 'ON-SITE SETUP'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckSquare size={28} className="text-brutal-red shrink-0" strokeWidth={3} /> {feat}
                  </li>
                ))}
              </ul>
              <button className="brutal-btn w-full py-4 text-xl mt-auto bg-brutal-red text-white hover:bg-black">CONTACT SALES</button>
            </div>
          </div>
        </section>
