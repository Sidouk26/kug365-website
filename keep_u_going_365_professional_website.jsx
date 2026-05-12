import React from "react";

const logoUrl = "data:image/jpeg;base64,/9j/4QC8RXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAADIBAgAUAAAAZgAAABMCAwABAAAAAQAAAGmHBAABAAAAegAAAAAAAACgAAAAAQAAAKAAAAABAAAAUGl4ZWxtYXRvciBQcm8gMi4zAAMAAJAHAAQAAAAwMjMwAqAEAAEAAABYAgAAA6AEAAEAAABYAgAAAAAAAAAAGAEDAAYAAAABAAAAAQEBAwABAAAAWAIAAAIBAwADAAAAJgEAAAMBAwABAAAASgAAABoBBQABAAAALAEAAAAAAAAYAAAAAQAAABgAAAABAAAA/9sAQwACAQEBAQECAQEBAgICAQICAgMFAwMDAwMGBAQDBQcGBwcHBgcHCAkLCQgICggHBwoNCgoLDAwMDAcJDQ4NDA0MDAwM/9sAQwECAgICAgMFAwMFDAgHCAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgCWALYAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhMiUWFxFDKBkaEHI0KxwRVC0fAVYnLh8RUzQ1NicoKSJENygpKissL/xAAcAQADAQEBAQEBAAAAAAAAAAAAAgMBBQQGBwj/xABTEQACAgECBAQDBwMIBgMAAAABAgARAwQSITEFQVEGEyJhcQcygZEUI0JSsdHwFCQzYoKSwhUzQ1P/xAAcAQEBAQEBAQEBAQEAAAAAAAAAAQIDBAUGBwj/xABBEQEBAAIBAgQDBQYEBwAAAAAAAAABAhEDIRIxBEEFEyJRYXGBkaGx0fAUMkJSYvEVI4Kio8L/2gAMAwEAAhEDEQA/APf6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKK47xJ8LvCfiXTNIs7rQdJ0+K+0zre3tLqIRuRpFj+7nK4B45Hc1eopaY5YZXiKVTcYc/aW19bXx0OnkMnoV9Wn5Vr46h6w+tZPi7wV4s8UeC/FvibVdP1u80i2thdW0m7mRZCQq7fJIIH5cYz6V6XR0UuqSjqVvF80t/ZG8t3to11vRr7jytX2V9Pv8AsCiiiqOIKKKKACiiigAooooAKKKKACiiigAoorzf4W+IvDnjrxnpur6Zq1xaJpV1PqEl7cXRu8ySswBIu3Y8Z5xXPaL4k8D+I9Q0CzvLq/udO0y3t7i1sp7qZYo2VwQ6rjI5JzXIdXJfSxWXp7X21u9Lf4Xb+Z6mV5uG+Pq7p3y0v8Acb6KKKzPCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAorwv4f8AijxB4m0bUNS1C8s7+O41yzt7S4t7iS9xGkWR7+Y4JwOg61pUVvEVXJ4qjU5e0dtdr/AJm26Xqtb6nLmM5xU6tK9f8AzD0KiiiqOIKKKKACiiigAooooAKKKKACiiigAooooAKK8b8L+HfEPhXxF4r8SaTqGm6fHcW9vcW0lrJd3Ek7SGVwQ5x6V1FFA7OfTV4WNSbvbTd2n/ia7X0tfrsz6bG8Vq9b19/wCw9OoooqjiCiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==";

const company = {
  name: "Keep U Going 365 Ltd",
  shortName: "KUG 365",
  tagline: "Commercial Catering Equipment Repair",
  phone: "07732 875 163",
  phoneHref: "tel:07732875163",
  email: "keepugoing365@hotmail.com",
  emailHref: "mailto:keepugoing365@hotmail.com",
  location: "Based near Sudbury / Greenford, London",
  gasSafe: "940849",
  companyNo: "14352245"
};

function Icon({ name, className = "h-6 w-6" }) {
  const icons = {
    phone: "☎",
    mail: "✉",
    location: "⌖",
    shield: "✓",
    wrench: "🔧",
    flame: "🔥",
    clock: "◷",
    star: "★",
    building: "▣",
    clipboard: "☑",
    chef: "♨",
    arrow: "→",
    message: "💬",
    oven: "▤",
    dishwasher: "▥",
    fryer: "▧",
    grill: "▨",
    van: "▰",
    check: "✓"
  };

  return (
    <span className={`${className} inline-flex items-center justify-center leading-none`} aria-hidden="true">
      {icons[name] || "•"}
    </span>
  );
}

function Button({ children, href, variant = "primary", className = "" }) {
  const styles =
    variant === "outline"
      ? "border border-white/25 bg-white/5 text-white hover:bg-white/10"
      : variant === "dark"
        ? "bg-slate-950 text-white hover:bg-slate-800"
        : "bg-orange-500 text-white hover:bg-orange-400";

  return (
    <a href={href || "#contact"} className={`inline-flex items-center justify-center rounded-xl px-5 py-3 font-black uppercase tracking-wide transition ${styles} ${className}`}>
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="font-black uppercase tracking-[0.28em] text-orange-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl border shadow-sm ${className}`}>{children}</div>;
}

const serviceCards = [
  { icon: "oven", title: "Rational Oven Servicing & Repairs", text: "SCC, SCC WE, CM, CMP, iCombi Classic and iCombi Pro support, including faults, descaling, cleaning systems, steam issues and service work." },
  { icon: "dishwasher", title: "Dishwashers & Glasswashers", text: "Fast diagnostics and repair for commercial dishwashers, glasswashers, hood machines, rinse faults, filling faults, leaks and wash performance problems." },
  { icon: "fryer", title: "Fryer Repairs", text: "Gas and electric fryer repairs, ignition faults, thermostat issues, burners, safety devices and poor temperature control." },
  { icon: "grill", title: "Grills, Ranges & Cooking Equipment", text: "Repairs for grills, griddles, chargrills, ranges, ovens, salamanders and other commercial cooking appliances." },
  { icon: "flame", title: "Commercial Gas Work", text: "Gas Safe registered commercial catering engineer support for inspection, service, safety checks, repairs and compliance advice." },
  { icon: "wrench", title: "Breakdown Callouts", text: "Practical fault finding, honest advice and urgent support to help get your kitchen back up and running as quickly as possible." }
];

const equipment = ["Rational ovens", "Dishwashers", "Glasswashers", "Fryers", "Grills", "Chargrills", "Ranges", "Salamanders", "Gas appliances", "Warewashing equipment", "Commercial ovens", "Kitchen extraction related checks"];
const reasons = ["Over 12 years of hands-on industry experience", "Gas Safe registered company", "Experienced across ovens, dishwashers, fryers, grills, ranges and warewashing", "Honest engineer-led advice, not sales talk", "Clear communication before, during and after every job", "Reliable support across London and surrounding areas"];
const process = ["Send the appliance details, fault symptoms and postcode", "We advise the best next step and arrange attendance", "We diagnose the fault and explain the repair options clearly", "Where possible, we repair, service or make the equipment safe on site"];
const faqs = [
  ["Do you only work on Rational ovens?", "No. Rational ovens are one of our specialist areas, but we also work on dishwashers, glasswashers, fryers, grills, ranges, salamanders, warewashing and other commercial catering equipment."],
  ["Do you cover emergency breakdowns?", "Yes, depending on availability and location. For urgent jobs, call or WhatsApp with the appliance details, photos and site postcode."],
  ["Are you Gas Safe registered?", `Yes. Gas Safe registration number: ${company.gasSafe}.`],
  ["What should I send before booking?", "Please send the make, model, serial number, fault code, photos of the data plate and a short description of the problem."]
];

const smokeTests = [
  { name: "company name is present", pass: Boolean(company.name) },
  { name: "logo is embedded", pass: logoUrl.startsWith("data:image/jpeg;base64,") },
  { name: "six service cards are configured", pass: serviceCards.length === 6 },
  { name: "Rational and general equipment are both present", pass: serviceCards.some((item) => item.title.includes("Rational")) && serviceCards.some((item) => item.title.includes("Dishwashers")) },
  { name: "contact phone is present", pass: Boolean(company.phone && company.phoneHref) },
  { name: "Gas Safe registration is present", pass: company.gasSafe === "940849" }
];

if (typeof console !== "undefined") {
  smokeTests.forEach((test) => {
    if (!test.pass) console.warn(`Website content check failed: ${test.name}`);
  });
}

export default function KeepUGoing365Website() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#home" className="flex items-center gap-3">
            <img src={logoUrl} alt="KUG 365 Technical Care logo" className="h-16 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-black uppercase text-white lg:flex">
            <a href="#home" className="border-b-2 border-orange-500 py-2 text-orange-500">Home</a>
            <a href="#services" className="py-2 hover:text-orange-400">Services</a>
            <a href="#equipment" className="py-2 hover:text-orange-400">Equipment</a>
            <a href="#why" className="py-2 hover:text-orange-400">Why Us</a>
            <a href="#about" className="py-2 hover:text-orange-400">About</a>
            <a href="#gas" className="py-2 hover:text-orange-400">Gas Safety</a>
            <a href="#contact" className="py-2 hover:text-orange-400">Contact</a>
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <div className="text-right">
              <a href={company.phoneHref} className="text-lg font-black text-white hover:text-orange-400">{company.phone}</a>
              <p className="text-xs font-bold uppercase text-orange-500">Commercial breakdowns</p>
            </div>
            <Button href="#contact" className="px-5 py-3">Get a Quote</Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(249,115,22,0.22),transparent_28%),linear-gradient(90deg,rgba(0,0,0,0.95),rgba(0,0,0,0.78),rgba(0,0,0,0.55))]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(120deg,#111_25%,transparent_25%),linear-gradient(240deg,#111_25%,transparent_25%)] [background-size:60px_60px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-lg font-black uppercase tracking-widest text-orange-500">Commercial Catering Equipment Repairs</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl">
              Keeping your kitchen running, every day.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">
              Expert repair, servicing, maintenance and installation support for commercial catering equipment across London and surrounding areas.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={company.phoneHref} className="px-7 py-4 text-base"><Icon name="phone" className="mr-2 h-5 w-5" /> Call {company.phone}</Button>
              <Button href={company.phoneHref} variant="outline" className="px-7 py-4 text-base"><Icon name="message" className="mr-2 h-5 w-5" /> WhatsApp Us</Button>
            </div>
            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 border-r border-white/20 pr-4"><Icon name="shield" className="text-orange-500" /><span className="font-bold">Gas Safe Registered<br /><span className="text-orange-500">No. {company.gasSafe}</span></span></div>
              <div className="flex items-center gap-3 border-r border-white/20 pr-4"><Icon name="check" className="text-orange-500" /><span className="font-bold">Fully insured<br />Peace of mind</span></div>
              <div className="flex items-center gap-3"><Icon name="clock" className="text-orange-500" /><span className="font-bold">Fast response<br />Breakdown support</span></div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl rounded-[2rem] border border-orange-500/30 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <img src={logoUrl} alt="KUG 365 Technical Care logo large" className="mx-auto mb-6 h-32 w-auto object-contain" />
              <div className="rounded-3xl bg-black/70 p-7">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">We work on</p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-bold text-slate-100">
                  {equipment.slice(0, 10).map((item) => <div key={item} className="flex items-center gap-2"><span className="text-orange-500">✓</span>{item}</div>)}
                </div>
              </div>
              <div className="absolute -right-4 -top-4 rounded-full border-4 border-orange-500 bg-orange-500 p-6 text-center font-black text-white shadow-xl">
                GAS SAFE<br /><span className="text-2xl">{company.gasSafe}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle center eyebrow="Our Services" title="Complete support for your commercial kitchen" text="From urgent breakdowns to planned servicing, we help restaurants, hotels, care homes, cafés and commercial kitchens keep trading safely." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <Card key={service.title} className="border-slate-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-orange-500 text-3xl text-orange-500"><Icon name={service.icon} className="h-8 w-8" /></div>
                <h3 className="text-xl font-black uppercase leading-tight">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="bg-slate-100 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Equipment" title="Catering equipment we repair and service" text="Your website should not make you look like a Rational-only engineer. This section clearly shows the wider range of equipment you cover." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((item) => (
              <div key={item} className="rounded-2xl bg-white p-5 font-black shadow-sm"><span className="mr-3 text-orange-500">✓</span>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-black py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-black uppercase tracking-[0.28em] text-orange-500">Why Choose {company.shortName}?</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">Fast, honest and practical engineering support.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">We understand how important your equipment is to your business. When a kitchen appliance fails, it affects service, staff, customers and income.</p>
            <div className="mt-8 rounded-2xl border border-orange-500/40 bg-orange-500/10 p-6">
              <h3 className="text-2xl font-black">Emergency breakdown?</h3>
              <p className="mt-3 leading-7 text-slate-300">Call or WhatsApp with the appliance details, photos and site postcode. We will advise the best next step.</p>
              <Button href={company.phoneHref} className="mt-5 w-full">Call {company.phone}</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-2xl border border-white/10 bg-white/5 p-5"><Icon name="shield" className="mb-3 h-6 w-6 text-orange-500" /><p className="font-bold leading-7">{reason}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle eyebrow="About Us" title="Commercial catering equipment engineers with real hands-on experience" text="Keep U Going 365 Ltd was built to support food businesses with practical, reliable and honest technical care. We focus on getting equipment working safely and helping customers understand the most sensible repair option." />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-100 p-5"><strong className="block text-3xl text-orange-500">12+</strong><span className="font-bold">Years experience</span></div>
              <div className="rounded-2xl bg-slate-100 p-5"><strong className="block text-3xl text-orange-500">365</strong><span className="font-bold">Reliability focus</span></div>
              <div className="rounded-2xl bg-slate-100 p-5"><strong className="block text-3xl text-orange-500">{company.gasSafe}</strong><span className="font-bold">Gas Safe Reg.</span></div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-black p-8 text-white shadow-2xl">
            <img src={logoUrl} alt="KUG 365 logo" className="mb-8 h-28 w-auto object-contain" />
            <h3 className="text-3xl font-black uppercase">What to send before a job</h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              {["Appliance make, model and serial number", "Photos of the data plate and fault code", "Clear description of the problem", "Site postcode and contact number", "Any history of recent parts or previous repairs"].map((item) => <li key={item} className="flex gap-3"><span className="text-orange-500">✓</span>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="gas" className="bg-slate-100 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rounded-[2rem] bg-gradient-to-r from-orange-500 to-amber-400 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-center">
              <div>
                <p className="font-black uppercase tracking-[0.28em]">Gas Safety</p>
                <h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">Gas Safe registered commercial catering support</h2>
                <p className="mt-5 text-lg leading-8 text-slate-900/80">We support commercial kitchens with gas appliance checks, servicing, repairs and safety advice. If equipment is unsafe or beyond economical repair, we explain it clearly.</p>
              </div>
              <div className="rounded-full border-4 border-white bg-black p-8 text-center text-white shadow-2xl">
                <p className="text-xl font-black uppercase">Gas Safe Registered</p>
                <p className="mt-2 text-sm uppercase tracking-widest">Reg No.</p>
                <p className="text-5xl font-black text-orange-500">{company.gasSafe}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle center eyebrow="How It Works" title="Simple, clear and professional from the first call" />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl font-black text-white">{index + 1}</div>
                <p className="font-bold leading-7">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle center eyebrow="FAQ" title="Questions customers often ask" />
          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {faqs.map(([q, a]) => (
              <details key={q} className="rounded-2xl bg-white p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-black">{q}</summary>
                <p className="mt-4 leading-7 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Contact" title="Need a catering equipment engineer?" text="Call, email or send a WhatsApp message with your appliance details and fault symptoms. We will respond with clear advice and the next available option." />
            <div className="mt-8 space-y-4">
              <a href={company.phoneHref} className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 font-black hover:bg-slate-50"><Icon name="phone" className="h-6 w-6 text-orange-500" /> {company.phone}</a>
              <a href={company.emailHref} className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 font-black hover:bg-slate-50"><Icon name="mail" className="h-6 w-6 text-orange-500" /> {company.email}</a>
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 font-black"><Icon name="location" className="h-6 w-6 text-orange-500" /> {company.location}</div>
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 font-black"><Icon name="clock" className="h-6 w-6 text-orange-500" /> Mon–Thu 8:00–19:00 • Fri 8:00–12:00 & 14:00–19:00 • Sat 8:30–14:00</div>
            </div>
          </div>
          <Card className="border-slate-200 bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-black uppercase">Send us the job details</h3>
            <form className="mt-6 grid gap-4" onSubmit={(event) => event.preventDefault()}>
              <input className="rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-orange-500" placeholder="Your name" />
              <input className="rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-orange-500" placeholder="Phone / email" />
              <input className="rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-orange-500" placeholder="Site postcode" />
              <textarea className="min-h-36 rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-orange-500" placeholder="Appliance make, model, serial number and fault description" />
              <a href={company.emailHref} className="rounded-xl bg-black px-5 py-4 text-center font-black uppercase text-white hover:bg-slate-800">Send Enquiry</a>
              <a href={company.phoneHref} className="rounded-xl border border-slate-300 px-5 py-4 text-center font-black uppercase text-slate-950 hover:bg-slate-50">Call or WhatsApp Us</a>
            </form>
            <p className="mt-5 text-sm leading-6 text-slate-500">The visual form is ready. When published, it should be connected to email, WhatsApp or a contact form provider.</p>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-10 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img src={logoUrl} alt="KUG 365 Technical Care footer logo" className="h-20 w-auto object-contain" />
            <div><p className="text-lg font-black text-white">{company.name}</p><p className="text-sm">Commercial catering equipment repair, service, maintenance and installation support.</p></div>
          </div>
          <div className="text-sm lg:text-right"><p>Gas Safe Reg: {company.gasSafe} • Company No: {company.companyNo}</p><p>© 2026 {company.name}. All rights reserved.</p></div>
        </div>
      </footer>

      <a href={company.phoneHref} className="fixed bottom-5 right-5 z-50 rounded-full bg-orange-500 px-5 py-4 font-black uppercase text-white shadow-2xl hover:bg-orange-400">Call Now</a>
    </div>
  );
}
