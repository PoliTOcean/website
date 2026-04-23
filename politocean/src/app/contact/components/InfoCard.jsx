export default function InfoCard({ icon: Icon, label, value, href, isEmail, subtext, footer }) {
    const content = isEmail ? (
        <a href={href} className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
            {value}
        </a>
    ) : (
        <>
            <p className="text-white font-semibold">{value}</p>
            {subtext && <p className="text-sea-light/50 text-sm">{subtext}</p>}
            {footer && <p className="text-sea-light/40 text-xs mt-0.5">{footer}</p>}
        </>
        
    );

    return (
        <div className="flex items-start gap-4">
            <div className="mt-1 w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 shrink-0">
                <Icon />
            </div>
            <div>
                {label && <p className="text-xs uppercase tracking-widest text-sea-light/40 font-semibold">{label}</p>}
                {content}
            </div>
        </div>
    );
}