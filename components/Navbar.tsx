"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Courses", href: "/courses" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#C9A24D]/50 bg-[#F7F4EC] shadow-sm">
            <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight sm:gap-3 sm:text-2xl lg:text-3xl"
                    onClick={() => setOpen(false)}
                >
                    <Image
                        src="/logo-mark.png"
                        alt=""
                        width={400}
                        height={374}
                        preload
                        className="h-11 w-auto sm:h-12 lg:h-14"
                    />
                    <span>
                        <span className="text-[#111111]">InstallYour</span>
                        <span className="text-[#C9A24D]">Career</span>
                    </span>
                </Link>

                {/* Desktop links */}
                <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`relative pb-1 font-nav text-base font-medium lg:text-[17px] tracking-wide transition-colors hover:text-[#C9A24D] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-[#C9A24D] after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive(link.href)
                                        ? "font-semibold text-[#111111] after:scale-x-100"
                                        : "text-[#111111]/80 after:scale-x-0"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile toggle */}
                <button
                    type="button"
                    className="rounded-md p-2 text-[#111111] hover:bg-[#FFFFFF] hover:text-[#C9A24D] lg:hidden"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((o) => !o)}
                >
                    {open ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <ul className="flex flex-col border-t border-[#C9A24D]/30 bg-[#FFFFFF] px-6 py-2 lg:hidden">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`block py-3 font-nav text-base font-medium tracking-wide transition-colors hover:text-[#C9A24D] ${isActive(link.href) ? "font-semibold text-[#C9A24D]" : "text-[#111111]/80"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}
