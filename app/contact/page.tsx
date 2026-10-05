import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";

export default function ContactPage() {
  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="rounded-2xl bg-gradient-to-br from-[#fff6ab]/60 via-white to-white p-6 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-800/80">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight">Contact Us</h1>
          <p className="mt-3 max-w-3xl text-sm font-semibold text-zinc-700">Reach us via email or venue information below for 2027 ICONIQ.</p>
        </div>

        <section className="mt-8 grid gap-4">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">Email</h2>
            <a className="mt-3 inline-block text-sm font-semibold text-[#2b327e] hover:underline" href="mailto:iconiq@apskin.org">
              iconiq@apskin.org
            </a>
          </div>
        </section>

        <section className="mt-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Venue</h2>
          <p className="mt-3 text-sm text-zinc-700">Bali Indonesia</p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
