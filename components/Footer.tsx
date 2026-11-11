import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/app/contact/contact-info";
import CurrentYear from "@/components/CurrentYear";
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/app/contact/icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "Contact Us", href: "/contact" },
];

const popularCourses = ["Engineering", "Medical", "Management", "Pharmacy", "Nursing", "Law"];

const socials = [
  { href: CONTACT.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: CONTACT.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: CONTACT.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `https://wa.me/${CONTACT.whatsapp}`, label: "WhatsApp", Icon: WhatsAppIcon },
];

const headingCls = "font-nav text-base font-semibold text-[#FFFFFF] sm:text-lg";
const linkCls = "text-[#F7F4EC]/65 transition-colors hover:text-[#C9A24D]";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-[3px] border-[#C9A24D] bg-[#111111] text-sm">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-10 px-6 py-10 sm:gap-x-10 sm:py-14 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] lg:px-10">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="text-xl font-extrabold tracking-tight sm:text-2xl">
            <span className="text-[#FFFFFF]">InstallYour</span>
            <span className="text-[#C9A24D]">Career</span>
          </Link>
          <p className="mt-3 max-w-sm leading-relaxed text-[#F7F4EC]/65 sm:mt-4">
            Helping students find the right course and college with honest, personal career
            guidance.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-[#C9A24D]/40 text-[#C9A24D] transition hover:bg-[#C9A24D] hover:text-[#111111]"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className={headingCls}>Quick Links</h3>
          <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className={headingCls}>Popular Courses</h3>
          <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
            {popularCourses.map((c) => (
              <li key={c}>
                <Link href="/courses" className={linkCls}>
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className={headingCls}>Get in Touch</h3>
          <ul className="mt-4 grid gap-4 text-[#F7F4EC]/65 sm:mt-5 sm:grid-cols-2 lg:grid-cols-1">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#C9A24D]" />
              {CONTACT.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-[#C9A24D]" />
              <a href={`tel:${CONTACT.phone}`} className={linkCls}>
                +91 {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-[#C9A24D]" />
              <a href={`mailto:${CONTACT.email}`} className={`${linkCls} break-all`}>
                {CONTACT.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-[#C9A24D]" />
              {CONTACT.hours}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F7F4EC]/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-1.5 py-5 pr-20 pl-6 text-xs text-[#F7F4EC]/50 sm:flex-row sm:items-center sm:pr-24 lg:pl-10">
          <p>© <CurrentYear /> InstallYourCareer. All rights reserved.</p>
          <p>
            Made with care for students across <span className="text-[#C9A24D]">India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
