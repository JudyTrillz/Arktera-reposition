export const siteConfig = {
  name: "Arktera Systems",
  tagline: "Revenue Systems for Service Businesses",
  email: "hello@arkterasystems.com",
  phone: "+2348061482847",
  phoneDisplay: "+234 806 148 2847",
  location: "Ikeja, Lagos",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/arktera-systems", icon: "linkedin" },
  { label: "X", href: "https://x.com/arkterasystems", icon: "x" },
  { label: "Facebook", href: "https://facebook.com/arkterasystems", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com/arkterasystems", icon: "instagram" },
  { label: "TikTok", href: "https://tiktok.com/@arkterasystems", icon: "tiktok" },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Revenue Systems", href: "/revenue-systems" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const assessmentHref = "/business-growth-assessment";

// "Schedule" CTAs book a live call directly, as distinct from the
// self-serve on-site assessment form above.
export const scheduleAssessmentHref =
  "https://calendly.com/hello-arkterasystems/strategy-session";

export const footerColumns = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Revenue Systems", href: "/revenue-systems" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
      { label: "Get a Free Assessment", href: assessmentHref },
    ],
  },
  {
    heading: "How We Help",
    links: [
      { label: "Assess", href: "/#assess" },
      { label: "Diagnose", href: "/#diagnose" },
      { label: "Design", href: "/#design" },
      { label: "Build", href: "/#build" },
      { label: "Measure", href: "/#measure" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];
