export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "David Mwangi",
    role: "CTO",
    company: "M-taka",
    quote:
      "Jeff doesn't just write code — he architects solutions. When we needed an offline-first system for our field agents in areas with no connectivity, he designed and delivered a solution that just works. His understanding of real-world constraints in the Kenyan market is exceptional.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Sarah Wanjiku",
    role: "Project Manager",
    company: "Safaricom PLC",
    quote:
      "Working with Jeff on Cellbase was a great experience. He took complex requirements from multiple departments and translated them into an intuitive interface. The frontend he built is now used daily by over 50 field engineers. He delivers on time and communicates clearly.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
  {
    name: "James Ochieng",
    role: "Senior Developer",
    company: "M-taka",
    quote:
      "Jeff picks up any technology remarkably fast. One week he's building Django APIs, the next he's configuring Nginx and hardening our VPS. He's the kind of developer who sees the full picture — from database design to deployment — and makes decisions that save us time and money.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];
