"use client";
import { Link } from "next-transition-router";
import PoliTOceanLogo from "./PoliTOceanLogo";

const navLinks = [
    { href: "/prototypes", label: "Our Prototypes" },
    { href: "/about-us", label: "About Us" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/contact", label: "Contact" },
    { href: "https://docs.google.com/forms/d/e/1FAIpQLSewUgpjOImd3k94r7mXvRcghCtQFcxoVYJwEX6NDvs_tkcraQ/viewform?usp=header", label: "Apply", isApply: true, external: true },
];

export default function Header() {
    return (
        <header className="site-header-wave static top-0 w-full z-[999] p-2">
            <nav className="max-w-[90%] mx-auto h-full flex items-center justify-between px-6">
            <Link href="/" aria-label="PoliTOcean home">
                <PoliTOceanLogo />
            </Link>

            <ul className="hidden md:flex list-none gap-2 ml-auto">
                {navLinks.map(({ href, label, isApply, external }) => (
                <li key={href}>
                    {external ? (
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-block px-5 py-2.5 text-base font-light text-sea-light transition-colors
                            ${isApply ? "border-2 border-sea-light rounded-btn hover:bg-sea-light hover:text-ocean-dark" : "hover:text-ocean-dark/80"}`}
                        >
                            {label}
                        </a>
                    ) : (
                        <Link
                        href={href}
                        className={`inline-block px-5 py-2.5 text-base font-light text-sea-light transition-colors
                            ${isApply ? "border-2 border-sea-light rounded-btn hover:bg-sea-light hover:text-ocean-dark" : "hover:text-ocean-dark/80"}`}
                        >
                        {label}
                        </Link>
                    )}
                </li>
                ))}
            </ul>
            </nav>
        </header>
    );
}