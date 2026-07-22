import {
  ArrowRight,
  LayoutTemplate,
  Eye,
  Upload,
  Globe,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">
            Persona<span className="text-violet-600">Site</span>
          </h1>

          <div className="hidden gap-8 md:flex">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Templates</a>
            <a href="#">FAQ</a>
          </div>

          <button className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-24 lg:flex-row">
        <div className="flex-1">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            🚀 No Code • Live Preview • Publish Instantly
          </span>

          <h2 className="mt-6 text-5xl font-extrabold leading-tight">
            Build a Professional Portfolio
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Without Writing Code
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Create, customize, preview, and publish stunning portfolio websites
            using reusable templates. No coding required.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
              Start Building
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border px-6 py-3 hover:bg-slate-100">
              Live Demo
            </button>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="flex-1">
          <div className="rounded-3xl border bg-white p-6 shadow-2xl">
            <div className="mb-5 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1 rounded-xl bg-slate-100 p-4">
                <p className="mb-3 font-semibold">Menu</p>
                <div className="space-y-3 text-sm text-slate-500">
                  <p>Profile</p>
                  <p>Projects</p>
                  <p>Skills</p>
                  <p>Resume</p>
                </div>
              </div>

              <div className="col-span-3 rounded-xl bg-slate-50 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-semibold">Portfolio Preview</h3>

                  <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">
                    Publish
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="h-5 w-1/2 rounded bg-slate-300"></div>
                  <div className="h-3 rounded bg-slate-200"></div>
                  <div className="h-3 w-5/6 rounded bg-slate-200"></div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-24 rounded-xl bg-blue-100"></div>
                    <div className="h-24 rounded-xl bg-violet-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Everything You Need to Build Your Portfolio
          </h2>

          <p className="mt-4 text-slate-600">
            Powerful features packed into an intuitive no-code experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: LayoutTemplate,
              title: "Templates",
              desc: "Choose from beautiful reusable portfolio templates.",
            },
            {
              icon: Eye,
              title: "Live Preview",
              desc: "Instantly see every change before publishing.",
            },
            {
              icon: Upload,
              title: "Resume Upload",
              desc: "Upload resumes and portfolio assets easily.",
            },
            {
              icon: Globe,
              title: "One Click Publish",
              desc: "Publish your portfolio with a unique URL.",
            },
            {
              icon: ShieldCheck,
              title: "Secure Login",
              desc: "JWT authentication and account management.",
            },
            {
              icon: Sparkles,
              title: "SEO Friendly",
              desc: "Optimized pages for better discoverability.",
            },
            {
              icon: CheckCircle2,
              title: "Responsive",
              desc: "Looks perfect on every device.",
            },
            {
              icon: LayoutTemplate,
              title: "Customization",
              desc: "Edit themes, projects, skills and more.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >
              <feature.icon className="mb-4 text-blue-600" size={32} />

              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>

              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-bold">
            Build Your Portfolio in Four Steps
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              "Create Account",
              "Choose Template",
              "Customize Portfolio",
              "Publish Website",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border bg-slate-50 p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 p-16 text-center text-white">
          <h2 className="text-4xl font-bold">
            Ready to Launch Your Portfolio?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Create, customize, preview, and publish your professional portfolio
            website in minutes.
          </p>

          <button className="mt-10 rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition hover:scale-105">
            Start Building
          </button>
        </div>
      </section>

      {/* Footer */}

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <h2 className="text-2xl font-bold text-blue-600">
            Persona<span className="text-violet-600">Site</span>
          </h2>

          <div className="flex gap-6 text-slate-600">
            <a href="#">Features</a>
            <a href="#">Templates</a>
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 PersonaSite. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
