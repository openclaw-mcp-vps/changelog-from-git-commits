export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn git commits into<br />
          <span className="text-[#58a6ff]">customer-ready changelogs</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your GitHub or GitLab repo. AI reads your commits, categorizes changes, and publishes polished changelogs — automatically on every release.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to connect your repo.</p>
      </section>

      {/* How it works */}
      <section className="mb-24">
        <h2 className="text-xl font-semibold text-white text-center mb-10">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Connect your repo", desc: "OAuth with GitHub or GitLab in one click. No tokens to manage manually." },
            { step: "2", title: "AI analyzes commits", desc: "Every commit message is categorized: features, fixes, performance, and more." },
            { step: "3", title: "Publish changelogs", desc: "Get a hosted changelog page and webhook notifications on every release." }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="w-8 h-8 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold flex items-center justify-center text-sm mb-4">{step}</div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-xl font-semibold text-white text-center mb-10">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need, nothing you don&apos;t.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited repos",
              "AI-powered commit analysis",
              "Hosted public changelog page",
              "GitHub & GitLab OAuth",
              "Release webhook notifications",
              "Custom branding"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which git platforms are supported?",
              a: "GitHub and GitLab are fully supported via OAuth. Bitbucket support is on the roadmap."
            },
            {
              q: "How does the AI categorize commits?",
              a: "We use conventional commit conventions as a baseline, then apply AI to handle messy or non-standard messages and rewrite them in customer-friendly language."
            },
            {
              q: "Can I customize the changelog output?",
              a: "Yes. You can configure which categories to show, set your own labels, and apply custom branding to your hosted changelog page."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="text-white font-semibold mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} GitLog. All rights reserved.
      </footer>
    </main>
  );
}
