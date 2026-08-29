import { dict } from '@/lib/i18n'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us — US Policy Brief',
  description: 'Independent news you can trust. Learn about our mission, editorial standards, and our commitment to truth.',
}

export default async function AboutPage() {
  const stats = [
    { number: '15+', label: 'Years of Independent Reporting' },
    { number: '200K', label: 'Daily Readers' },
    { number: '12', label: 'Countries Covered' },
    { number: '0', label: 'Political Affiliations' },
  ]

  const values = [
    {
      icon: '⚖️',
      title: 'Uncompromising Accuracy',
      body: 'Every story undergoes a rigorous three-stage verification process before publication. We would rather be last and right than first and wrong.',
    },
    {
      icon: '🔒',
      title: 'Editorial Independence',
      body: 'We accept zero funding from political parties, governments, or PACs. Our revenue comes exclusively from our readership and advertising.',
    },
    {
      icon: '🌍',
      title: 'Global Context',
      body: 'No event occurs in isolation. We connect local developments to geopolitical forces, giving readers the full picture.',
    },
    {
      icon: '🔍',
      title: 'Radical Transparency',
      body: 'We publish source documents, explain our methodology, and promptly correct errors with public notices.',
    },
    {
      icon: '🗝️',
      title: 'Source Protection',
      body: 'We have a sacred obligation to those who trust us with sensitive information. Our secure infrastructure protects our sources absolutely.',
    },
    {
      icon: '📊',
      title: 'Data-Driven Analysis',
      body: 'We believe in showing our work. Our data journalism team makes complex policy and electoral data accessible and understandable.',
    },
  ]

  const leadership = [
    { role: 'Editor-in-Chief', name: 'Dr. Sarah Al-Mansoor', bio: 'Former senior foreign correspondent with 18 years covering conflict and policy across the Middle East and Washington.' },
    { role: 'Managing Editor', name: 'Marcus Vance', bio: 'Award-winning investigative reporter specializing in campaign finance, political influence, and corporate lobbying.' },
    { role: 'Head of Data & Analysis', name: 'Elena Rostova', bio: 'Data journalist with a background in macroeconomic modeling, leading our polling aggregation and forecasting desk.' },
    { role: 'Senior Political Analyst', name: 'David Chen', bio: 'Author and veteran Capitol Hill correspondent with deep sources across congressional leadership and federal agencies.' },
  ]

  const timeline = [
    { year: '2010', event: 'Founded by a collective of independent journalists committed to impartial political coverage.' },
    { year: '2013', event: 'Launched the Regional Reporting Bureau, expanding coverage across Southeast Asia.' },
    { year: '2016', event: 'Won the South-East Asia Press Freedom Award for investigative reporting on electoral irregularities.' },
    { year: '2019', event: 'Introduced bilingual coverage, expanding the reach to a new generation of readers.' },
    { year: '2022', event: 'Reached 100,000 daily active readers. Launched our dedicated Data & Analysis desk.' },
    { year: '2025', event: 'Launched our digital platform, bringing uspolicybrief.com to readers worldwide.' },
  ]

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--accent-red)]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--accent-red)]/5 blur-[120px] pointer-events-none" />

      {/* ── HERO SECTION ─────────────────────────────── */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--accent-red)]/20 bg-[var(--accent-red)]/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-red)] animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-red)]">
                ESTABLISHED 2010 · INDEPENDENT JOURNALISM
              </span>
            </div>

            <h1 className="font-display font-extrabold tracking-tight leading-[0.9] mb-8 text-[clamp(44px,8vw,90px)]">
              Truth in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-red)] to-indigo-400">Reporting</span>,
              <br />Power to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-[var(--accent-red)]">People</span>.
            </h1>
            
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-[var(--text-secondary)] mb-10 font-normal opacity-90">
              US Policy Brief delivers independent, data-driven political coverage. We hold power to account so that citizens can hold power to the light.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="px-8 py-3.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider bg-[var(--accent-red)] text-white hover:bg-[var(--accent-red)]/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[var(--accent-red)]/20"
              >
                {dict.getInTouch}
              </a>
              <a 
                href="#standards" 
                className="px-8 py-3.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider border border-[var(--border)] hover:border-[var(--accent-red)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {dict.editorialStandards}
              </a>
            </div>

          </div>

          {/* Interactive Hero Graphical Element */}
          <div className="lg:col-span-5 relative h-[380px] lg:h-[450px] w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]/40 backdrop-blur-md overflow-hidden flex flex-col justify-between p-8 group">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(var(--accent-red)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            {/* Gradient accent card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)]/10 blur-3xl rounded-full" />

            <div className="flex items-center justify-between border-b border-[var(--border)] pb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[var(--accent-red)] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">US POLICY BRIEF CORE</span>
              </div>
              <span className="font-mono text-xs text-[var(--text-muted)]">v1.2</span>
            </div>

            <div className="my-auto py-6">
              <span className="font-display font-bold text-5xl text-[var(--text-primary)] leading-tight mb-4 block">
                US POLICY <span className="text-[var(--accent-red)]">BRIEF</span>
              </span>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
                Independent reporting delivered with integrity and energy. Refusing to optimize for outrage, we optimize for truth.
              </p>
            </div>

            <div className="border-t border-[var(--border)] pt-6 flex items-center justify-between text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
              <span>Truth · Transparency</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ────────────────────────────── */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-surface)]/20 backdrop-blur-sm relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
            {stats.map((stat, i) => (
              <div key={i} className="py-10 px-6 text-center group hover:bg-[var(--bg-hover)]/30 transition-all duration-300">
                <p className="font-display font-extrabold text-5xl md:text-6xl text-[var(--accent-red)] mb-2 group-hover:scale-110 transition-transform duration-300 leading-none">
                  {stat.number}
                </p>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] max-w-[180px] mx-auto">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION SECTION ──────────────────────────── */}
      <section className="py-24 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-6 rounded-full bg-[var(--accent-red)]" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-red)]">
                {dict.ourMission}
              </h2>
            </div>
            <h3 className="font-display font-extrabold text-4xl md:text-5xl leading-tight text-[var(--text-primary)]">
              Strengthening Democracy Through Truth.
            </h3>
          </div>
          <div className="lg:col-span-7">
            <blockquote className="font-serif italic text-2xl md:text-3xl leading-snug text-[var(--text-primary)] mb-8 pl-6 border-l-2 border-[var(--accent-red)]">
              "We believe that accurate, data-driven, and unspun information is a fundamental right of every citizen in a free society."
            </blockquote>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base text-[var(--text-secondary)] leading-relaxed">
              <p>
                US Policy Brief was founded on a simple conviction: that in a healthy society, citizens need access to accurate, unspun information.
              </p>
              <p>
                In an era of algorithm-driven feeds and partisan amplification, we stand apart by refusing to optimize for outrage. We optimize for truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES / STANDARDS SECTION ───────────────── */}
      <section id="standards" className="py-24 border-t border-[var(--border)] bg-[var(--bg-surface)]/40 relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--accent-red)]/20 bg-[var(--accent-red)]/5 mb-4">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--accent-red)]">
                OUR COMMITMENT
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)]">
              {dict.editorialStandards}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] hover:border-[var(--accent-red)]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform duration-300 origin-left">
                    {v.icon}
                  </span>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-red)] transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── TIMELINE SECTION ─────────────────────────── */}
      <section className="py-24 border-t border-[var(--border)] relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--accent-red)]/20 bg-[var(--accent-red)]/5 mb-4">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--accent-red)]">
                OUR JOURNEY
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)]">
              A Decade of Impact.
            </h2>
          </div>

          <div className="relative">
            {/* Vertical Center Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--accent-red)] via-[var(--border)] to-[var(--accent-red)] translate-x-[-50%]" />

          <div className="space-y-16">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={i} className="relative flex flex-col sm:flex-row items-start sm:items-center">
                  
                  {/* Left block (Desktop) */}
                  <div className={`w-full sm:w-1/2 pr-0 sm:pr-12 text-left sm:text-right hidden sm:block ${isEven ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <span className="font-display font-extrabold text-3xl text-[var(--accent-red)] mb-2 block">
                      {item.year}
                    </span>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.event}
                    </p>
                  </div>

                  {/* Dot (Center) */}
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full border-2 border-[var(--accent-red)] bg-[var(--bg-primary)] translate-x-[-50%] z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)] animate-ping" />
                  </div>

                  {/* Right block (Desktop) / Main block (Mobile) */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-12 text-left ${!isEven ? 'sm:opacity-100' : 'sm:opacity-0 sm:pointer-events-none'}`}>
                    <span className="font-display font-extrabold text-3xl text-[var(--accent-red)] mb-2 block sm:hidden">
                      {item.year}
                    </span>
                    <span className="font-display font-extrabold text-3xl text-[var(--accent-red)] mb-2 hidden sm:block">
                      {item.year}
                    </span>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.event}
                    </p>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>

      {/* ── CLOSING BANNER ───────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 text-center border-t border-[var(--border)] relative overflow-hidden bg-[var(--bg-surface)]/20">
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[var(--accent-red)]/10 blur-[100px] rounded-full translate-x-[-50%] translate-y-[-50%]" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-6xl text-[var(--accent-red)] opacity-50 font-display block mb-6 select-none">"</span>
          
          <blockquote className="font-serif italic text-3xl md:text-4xl text-[var(--text-primary)] leading-tight mb-8">
            Democracy dies in darkness. We carry the light.
          </blockquote>
          
          <div className="w-12 h-[2px] mx-auto bg-[var(--accent-red)] mb-6" />
          
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-red)]">
            The Editorial Board, US Policy Brief
          </p>
        </div>
      </section>

    </div>
  )
}


