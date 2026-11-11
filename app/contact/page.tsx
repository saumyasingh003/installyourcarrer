import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Building2, Clock, Mail, MapPin, Phone, Share2 } from "lucide-react";
import ContactForm from "./ContactForm";
import LocationSection from "./LocationSection";
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "./icons";
import { CONTACT } from "./contact-info";

export const metadata: Metadata = {
  title: "Contact Us | InstallYourCareer",
  description: "Have a question? Our career counsellors are here to help.",
};

function InfoCard({
  number,
  icon: Icon,
  title,
  children,
}: {
  number: string;
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-3xl border border-[#C9A24D]/25 border-t-[3px] border-t-[#C9A24D] bg-[#FFFFFF] p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">
      <span className="absolute top-5 right-6 text-xs font-semibold tracking-[0.25em] text-[#C9A24D]">
        {number}
      </span>
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-[#F7F4EC] text-[#C9A24D]">
          <Icon className="size-5" />
        </span>
        <h2 className="text-xl font-bold text-[#111111]">{title}</h2>
      </div>
      <div className="mt-5 space-y-4 pl-1">{children}</div>
    </div>
  );
}

function Row({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 text-[15px] text-[#111111]/70">
      <span className="mt-1 shrink-0 text-[#C9A24D]">{icon}</span>
      <div>{children}</div>
    </div>
  );
}

const linkCls = "transition-colors hover:text-[#C9A24D]";

export default function ContactPage() {
  return (
    <main className="w-full bg-[#F7F4EC]">
      <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 lg:px-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#111111]">
          Contact <span className="text-[#C9A24D]">Us</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[#111111]/70">
          Have a question? Our career counsellors are here to help.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_3fr]">
          {/* Info cards */}
          <div className="space-y-6">
            <InfoCard number="01" icon={Building2} title="Office">
              <Row icon={<MapPin className="size-4" />}>{CONTACT.address}</Row>
              <Row icon={<Clock className="size-4" />}>{CONTACT.hours}</Row>
            </InfoCard>

            <InfoCard number="02" icon={Phone} title="Reach us">
              <Row icon={<Mail className="size-4" />}>
                <a href={`mailto:${CONTACT.email}`} className={linkCls}>
                  {CONTACT.email}
                </a>
              </Row>
              <Row icon={<Phone className="size-4" />}>
                <a href={`tel:${CONTACT.phone}`} className={linkCls}>
                  +91 {CONTACT.phoneDisplay}
                </a>
              </Row>
              <Row icon={<WhatsAppIcon className="size-4" />}>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  Chat on WhatsApp
                </a>
              </Row>
            </InfoCard>

            <InfoCard number="03" icon={Share2} title="Social">
              <div className="flex gap-3">
                {[
                  { href: CONTACT.facebook, label: "Facebook", Icon: FacebookIcon },
                  { href: CONTACT.instagram, label: "Instagram", Icon: InstagramIcon },
                  { href: CONTACT.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-12 items-center justify-center rounded-full border border-[#C9A24D]/40 text-[#C9A24D] transition hover:bg-[#C9A24D] hover:text-[#FFFFFF]"
                  >
                    <Icon className="size-6" />
                  </a>
                ))}
              </div>
            </InfoCard>
          </div>

          {/* Enquiry form */}
          <ContactForm />
        </div>

        {/* Location */}
        <LocationSection />
      </div>
    </main>
  );
}
