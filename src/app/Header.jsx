"use client";
import { Link } from "next-transition-router";
import { useState } from "react";
import PoliTOceanLogo from "./PoliTOceanLogo";

const navLinks = [
    { href: "/prototypes", label: "Our Prototypes" },
    { href: "/about-us", label: "About Us" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/contact", label: "Contact" },
    { href: "https://docs.google.com/forms/d/e/1FAIpQLSewUgpjOImd3k94r7mXvRcghCtQFcxoVYJwEX6NDvs_tkcraQ/viewform?usp=header", label: "Apply", isApply: true, external: true },
];

function NavItem({ href, label, isApply, external, onClick, block }) {
    const base = `text-base font-light text-sea-light transition-colors ${block ? "block w-full px-5 py-3" : "inline-block px-5 py-2.5"}`;
    const variant = isApply
        ? "border-2 border-sea-light rounded-btn hover:bg-sea-light hover:text-ocean-dark"
        : "hover:text-ocean-dark/80";

    if (external) {
        return (
            <a href={href} target="_blank" rel="noreferrer" onClick={onClick} className={`${base} ${variant}`}>
                {label}
            </a>
        );
    }
    return (
        <Link href={href} onClick={onClick} className={`${base} ${variant}`}>
            {label}
        </Link>
    );
}

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="site-header-wave static top-0 w-full z-[999] p-2">
            <nav className="max-w-[90%] mx-auto h-full flex items-center justify-between px-6">
            <Link href="/" aria-label="PoliTOcean home" onClick={() => setOpen(false)}>
                <PoliTOceanLogo />
            </Link>

            <ul className="hidden md:flex list-none gap-2 ml-auto">
                {navLinks.map(({ href, label, isApply, external }) => (
                <li key={href}>
                    <NavItem href={href} label={label} isApply={isApply} external={external} />
                </li>
                ))}
            </ul>

            <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="md:hidden ml-auto flex flex-col items-center justify-center gap-1.5 w-10 h-10 text-sea-light"
            >
                <span className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-6 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
            </nav>

            {open && (
                <ul className="md:hidden list-none flex flex-col gap-1 mt-2 px-6 pb-4 max-w-[90%] mx-auto">
                    {navLinks.map(({ href, label, isApply, external }) => (
                        <li key={href}>
                            <NavItem href={href} label={label} isApply={isApply} external={external} block onClick={() => setOpen(false)} />
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}