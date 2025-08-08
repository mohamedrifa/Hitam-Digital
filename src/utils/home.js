export const TESTIMONIALS = [{
        quote: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
        name: "Michael Kaizer",
        role: "CEO of Basecamp Corp",
        avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop", // replace with your image
    },
    {
        quote: "Their strategic thinking and flawless execution consistently deliver results. Our growth has been remarkable since partnering with them.",
        name: "Alicia Gomez",
        role: "Head of Marketing, NovaLabs",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    },
    {
        quote: "Super responsive team with strong domain knowledge. They made complex problems feel simple and handled everything end-to-end.",
        name: "Rahul Nair",
        role: "Founder, Finvolve",
        avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=256&auto=format&fit=crop",
    },
    {
        quote: "Clear communication, smart ideas, and solid execution. Couldn’t ask for a better partner.",
        name: "Sofia Park",
        role: "COO, Craftly",
        avatar: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=256&auto=format&fit=crop",
    },
    {
        quote: "From concept to launch, they owned the outcomes. The uplift in engagement speaks for itself.",
        name: "Daniel West",
        role: "VP Growth, Orbit",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=256&auto=format&fit=crop",
    },
];



export const faqs = [{
        q: "Why are your IT services important for my business?",
        a: "Our full-service approach — covering digital marketing, web development, and mobile app development — ensures your business can attract customers, operate efficiently, and scale seamlessly. From creating high-conversion websites to marketing them effectively, we handle it end-to-end.",
    },
    {
        q: "How can a professional website and app improve my visibility?",
        a: "A well-designed website and mobile app increase brand credibility, improve search engine rankings, and give customers easy access to your products or services. Combined with targeted marketing, they maximize both reach and engagement.",
    },
    {
        q: "How long does it take to see results from your services?",
        a: "Development timelines vary by project complexity — a basic website may take 3–6 weeks, a mobile app 8–12 weeks. Marketing results can start within days for paid campaigns, while SEO and organic growth build momentum over 2–3 months.",
    },
    {
        q: "How do you measure the success of your IT solutions?",
        a: "We use KPIs specific to each service: for marketing, metrics like CTR, conversion rate, and ROI; for development, performance, uptime, and user feedback; for apps, install rates, retention, and feature adoption. All tracked in detailed reports.",
    },
];


// ⚠️ All data below is fictional for demo.
export const CASE_STUDIES = [{
        id: 1,
        slug: "aurora-lens-studio",
        company: "Aurora Lens Studio",
        metric: "+138%",
        label: "sessions in 12 weeks",
        image: "https://images.unsplash.com/photo-1519183071298-a2962eadc4c2?q=80&w=1200&auto=format&fit=crop",
        overview: "Boutique photography studio in Bangalore. We rebuilt their booking flow, improved local SEO, and launched performance ads to lift bookings.",
        results: [
            { value: "+138%", label: "Sessions Growth" },
            { value: "+157%", label: "Organic Clicks" },
            { value: "5.4%", label: "Booking Conversion" },
            { value: "₹685", label: "Cost Per Lead" }
        ],
        execution: [
            { title: "Foundations", desc: "GA4 + CAPI, GBP cleanup, keyword mapping." },
            { title: "Experience", desc: "Single-step booking, faster pages, trust." },
            { title: "Demand", desc: "Search & Meta ads, lead magnets, emails." },
            { title: "Scale", desc: "Bundles, UGC, CRO tests." }
        ],
    },
    {
        id: 2,
        slug: "swiftfit",
        company: "SwiftFit",
        metric: "+105%",
        label: "app installs after UA revamp",
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
        overview: "Fitness app. We rebuilt the UA stack (Meta + UAC), fixed event mapping, and iterated on creatives to reduce CPI.",
        results: [
            { value: "−37%", label: "CPI" },
            { value: "+22%", label: "D7 ROAS" },
            { value: "+105%", label: "Installs" },
            { value: "3.2×", label: "Creative Win Rate" }
        ],
        execution: [
            { title: "Attribution", desc: "SKAN + GA4 events; clear funnel." },
            { title: "Creatives", desc: "Hook testing, UGC, value props." },
            { title: "Bids/Budgets", desc: "Incrementality checks; guardrails." },
            { title: "Lifecycle", desc: "Onboarding flows; paywall A/B." }
        ],
    },
    {
        id: 3,
        slug: "clearledger",
        company: "ClearLedger",
        metric: "+265%",
        label: "MRR after pricing experiment",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
        overview: "SaaS bookkeeping tool. Ran pricing tests, simplified paywall, and added self-serve onboarding to lift trial→paid.",
        results: [
            { value: "+265%", label: "MRR" },
            { value: "+18 pts", label: "Trial→Paid" },
            { value: "−21%", label: "Time-to-Value" },
            { value: "92", label: "NPS (Early Cohort)" }
        ],
        execution: [
            { title: "Research", desc: "WTP survey; segment willingness bands." },
            { title: "Pricing", desc: "Tier names; value metric clarity." },
            { title: "Onboarding", desc: "Checklists; sample data mode." },
            { title: "Lifecycle", desc: "Product emails; nudges." }
        ],
    },
    {
        id: 4,
        slug: "haven-living",
        company: "HavenLiving",
        metric: "+557%",
        label: "IG engagement via creators",
        image: "https://images.unsplash.com/photo-1520975682031-a94005a23d5e?q=80&w=1200&auto=format&fit=crop",
        overview: "Home & lifestyle DTC. Built creator program and content calendar to drive IG saves, reach, and assisted revenue.",
        results: [
            { value: "+557%", label: "IG Engagement" },
            { value: "3.8×", label: "Reels Reach" },
            { value: "+42%", label: "Email Revenue" },
            { value: "4.6★", label: "Avg Product Rating" }
        ],
        execution: [
            { title: "UGC Engine", desc: "Briefs, hooks, batch shooting." },
            { title: "Calendar", desc: "Themes, promos, launches." },
            { title: "Tracking", desc: "UTMs + view-through rules." },
            { title: "Lifecycle", desc: "Creator content in emails." }
        ],
    },
    {
        id: 5,
        slug: "freightone",
        company: "FreightOne",
        metric: "+1.1K",
        label: "B2B leads from LinkedIn",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop",
        overview: "Logistics platform. ABM + ICP targeting on LinkedIn with lead magnets and navigator workflows.",
        results: [
            { value: "+1.1K", label: "Leads" },
            { value: "+31%", label: "MQL→SQL Rate" },
            { value: "−19%", label: "CPL" },
            { value: "12", label: "Enterprise Pilots" }
        ],
        execution: [
            { title: "ICP/ABM", desc: "Firmographic filters; lists; oppty fit." },
            { title: "Content", desc: "Case decks; calculators; webinars." },
            { title: "Routing", desc: "Scoring; SDR alerts; SLAs." },
            { title: "Retarget", desc: "Doc ads; video view pools." }
        ],
    },
];