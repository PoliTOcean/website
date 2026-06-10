"use client";
import { Link } from "next-transition-router";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PoliTOceanLogo from "./PoliTOceanLogo";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/prototypes", label: "Our Prototypes" },
    { href: "/about-us", label: "About Us" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/contact", label: "Contact" },
    { href: "https://docs.google.com/forms/d/e/1FAIpQLSewUgpjOImd3k94r7mXvRcghCtQFcxoVYJwEX6NDvs_tkcraQ/viewform?usp=header", label: "Apply", isApply: true, external: true },
];

function isLinkActive(href, pathname) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
}

function NavItem({ href, label, isApply, external, onClick, block, active }) {
    const base = `text-base transition-colors ${block ? "block w-full px-5 py-3" : "inline-block px-5 py-2.5"}`;

    let variant;
    if (isApply) {
        variant = "font-light text-sea-light hover:text-ocean-dark/80";
    } else if (active) {
        variant = block
            ? "font-normal text-sea-light bg-sea-light/15 rounded-btn"
            : "font-normal text-sea-light border-b-2 border-sea-light rounded-none";
    } else {
        variant = "font-light text-sea-light hover:text-ocean-dark/80";
    }

    const className = `${base} ${variant}`;
    const ariaCurrent = active ? "page" : undefined;

    if (external) {
        return (
            <a href={href} target="_blank" rel="noreferrer" onClick={onClick} className={className}>
                {label}
            </a>
        );
    }
    return (
        <Link href={href} onClick={onClick} aria-current={ariaCurrent} className={className}>
            {label}
        </Link>
    );
}

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="site-header-wave sticky top-0 w-full z-[999] p-2">
            <nav className="max-w-[90%] mx-auto h-full flex items-center justify-between px-6">
            <Link href="/" aria-label="PoliTOcean home" onClick={() => setOpen(false)}>
                <PoliTOceanLogo />
            </Link>

            <ul className="hidden md:flex list-none items-center gap-2 ml-auto">
                {navLinks.map(({ href, label, isApply, external }) => (
                <li key={href}>
                    <NavItem
                        href={href}
                        label={label}
                        isApply={isApply}
                        external={external}
                        active={!external && isLinkActive(href, pathname)}
                    />
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
                            <NavItem
                                href={href}
                                label={label}
                                isApply={isApply}
                                external={external}
                                block
                                active={!external && isLinkActive(href, pathname)}
                                onClick={() => setOpen(false)}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}
