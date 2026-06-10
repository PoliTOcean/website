'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import teamData from '../data/teamOrganogram.json';

const variants = {
    default: 'bg-white/5 border border-white/10 rounded-lg p-3',
    pm:      'bg-white/5 border border-white/10 rounded-lg p-3',
    cto:     'bg-white/5 border border-white/10 rounded-lg p-3',
    leader:  'bg-white/10 border border-cyan-400/30 rounded-xl p-4',
};

function getInitials(name) {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase();
}

function Avatar({ name, photo, size = 'sm' }) {
    const [imgError, setImgError] = useState(false);
    const sizeClass = size === 'lg' ? 'w-20 h-20 text-base' : 'w-10 h-10 text-xs';
    const sizePx = size === 'lg' ? 80 : 40;

    if (photo && !imgError) {
        return (
            <div className={`relative flex-shrink-0 ${sizeClass} rounded-full overflow-hidden`}>
                <Image
                    src={`/AboutUsAssets/organogramPhotos/${photo.replace('foto/', '')}`}
                    alt={name}
                    fill
                    sizes={`${sizePx}px`}
                    className="rounded-full object-cover object-[center_20%] border border-white/20"
                    onError={() => setImgError(true)}
                />
            </div>
        );
    }

    return (
        <div className={`flex-shrink-0 ${sizeClass} rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-white`}>
            {getInitials(name)}
        </div>
    );
}

function PersonCard({ role, name, linkedin, photo, variant = 'default' }) {
    const [hovered, setHovered] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHovered(false);
        }, 50);
    };

    return (
        <div
            className={`${variants[variant]} relative`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-center gap-2">
                <Avatar name={name} photo={photo} />
                <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-widest text-sea-light/60 font-semibold">{role}</div>
                    <div className="text-xs font-bold text-sea-light truncate">{name}</div>
                </div>
            </div>

            {hovered && (
                <div
                    className="absolute bottom-full left-0 mb-2 z-50 w-52 bg-[#0a1a24] border border-white/20 rounded-lg p-3 shadow-xl"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Avatar name={name} photo={photo} size="lg" />
                        <div>
                            <div className="text-xs uppercase tracking-widest text-sea-light/50 mb-0.5">{role}</div>
                            <div className="text-sm font-bold text-sea-light leading-tight">{name}</div>
                        </div>
                    </div>
                    {linkedin ? (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition mt-1"
                        >
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                        </a>
                    ) : (
                        <span className="text-xs text-sea-light/30 mt-1 block">No LinkedIn</span>
                    )}
                </div>
            )}
        </div>
    );
}

function DivisionCard({ division, branchColor }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const colorMap = {
        mate: 'border-l-amber-500',
        rd: 'border-l-cyan-400',
        cm: 'border-l-purple-400'
    };

    const divisionCount =
        (division.hod ? 1 : 0) +
        (division.tod ? 1 : 0) +
        (division.members?.length || 0);

    return (
        <div className={`border-l-4 ${colorMap[branchColor]} bg-white/5 border border-white/10 rounded-lg`}>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-white/10 transition group rounded-lg"
            >
                <div className="text-left">
                    <h4 className="font-bold text-sea-light">{division.name}</h4>
                    <div className="text-xs text-sea-light/60">{divisionCount} members</div>
                </div>
                <div className={`text-sea-light/60 group-hover:text-sea-light transition transform ${isExpanded ? 'rotate-180' : ''}`}>
                    ▼
                </div>
            </button>
            {isExpanded && (
                <div className="px-4 py-3 bg-black/20 border-t border-white/10 space-y-3">
                    {division.hod && (
                        <div>
                            <div className="text-xs uppercase tracking-widest text-sea-light/70 mb-1 font-semibold">Head of Division</div>
                            <PersonCard role="HoD" name={division.hod.name} linkedin={division.hod.linkedin} photo={division.hod.photo} variant="pm" />
                        </div>
                    )}

                    {division.tod && (
                        <div>
                            <div className="text-xs uppercase tracking-widest text-sea-light/70 mb-1 font-semibold">Technical Officer</div>
                            <PersonCard role="ToD" name={division.tod.name} linkedin={division.tod.linkedin} photo={division.tod.photo} variant="cto" />
                        </div>
                    )}

                    {division.members && division.members.length > 0 && (
                        <div>
                            <div className="text-xs uppercase tracking-widest text-sea-light/70 mb-2 font-semibold">Team Members</div>
                            <div className={`grid gap-2 ${division.membersColumns ? `grid-cols-${division.membersColumns}` : 'grid-cols-1'}`}>
                                {division.members.map((member, idx) => (
                                    <PersonCard key={idx} role="Member" name={member.name} linkedin={member.linkedin} photo={member.photo} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function BranchSection({ branch }) {
    const colorMap = {
        mate: 'from-amber-500/10 to-orange-500/10',
        rd: 'from-cyan-400/10 to-blue-500/10',
        cm: 'from-purple-400/10 to-pink-500/10'
    };

    return (
        <div className={`bg-gradient-to-br ${colorMap[branch.color]} border border-white/10 rounded-xl p-6`}>
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-sea-light mb-4">{branch.label}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {branch.pm && (
                        <PersonCard role={branch.pm.role} name={branch.pm.name} linkedin={branch.pm.linkedin} photo={branch.pm.photo} variant="pm" />
                    )}
                    {branch.cto && (
                        Array.isArray(branch.cto) ? (
                            <div className="space-y-2">
                                {branch.cto.map((cto, idx) => (
                                    <PersonCard key={idx} role={cto.role} name={cto.name} linkedin={cto.linkedin} photo={cto.photo} variant="cto" />
                                ))}
                            </div>
                        ) : (
                            <PersonCard role={branch.cto.role} name={branch.cto.name} linkedin={branch.cto.linkedin} photo={branch.cto.photo} variant="cto" />
                        )
                    )}
                </div>
            </div>

            <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-sea-light/70 font-semibold">{branch.divisions.length} Divisions</h4>
                <div className="space-y-2">
                    {branch.divisions.map((division) => (
                        <DivisionCard key={division.name} division={division} branchColor={branch.color} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Organogram() {
    const uniqueNames = new Set();
    const addPerson = (person) => {
        if (person?.name) uniqueNames.add(person.name.trim().toLowerCase());
    };

    addPerson(teamData.leader);
    teamData.branches.forEach((branch) => {
        addPerson(branch.pm);
        if (Array.isArray(branch.cto)) branch.cto.forEach(addPerson);
        else addPerson(branch.cto);
        branch.divisions.forEach((division) => {
            addPerson(division.hod);
            addPerson(division.tod);
            division.members?.forEach(addPerson);
        });
    });

    const totalMembers = uniqueNames.size;

    const divisionNames = new Set();
    teamData.branches.forEach((branch) =>
        branch.divisions.forEach((division) => {
            if (division.name) divisionNames.add(division.name.trim().toLowerCase());
        })
    );
    const totalDivisions = divisionNames.size;

    const orderedBranches = [
        teamData.branches.find(b => b.id === 'mate'),
        teamData.branches.find(b => b.id === 'cm'),
        teamData.branches.find(b => b.id === 'rd'),
    ].filter(Boolean);

    return (
        <div className="w-full space-y-8">
            <div className="flex justify-center">
                <div className="w-full max-w-xs">
                    <div className="flex justify-center mb-4">
                        <PersonCard
                            role={teamData.leader.role}
                            name={teamData.leader.name}
                            linkedin={teamData.leader.linkedin}
                            photo={teamData.leader.photo}
                            variant="leader"
                        />
                    </div>
                    <div className="h-12 flex justify-center">
                        <div className="w-0.5 bg-gradient-to-b from-cyan-400 to-transparent" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {orderedBranches.map((branch) => (
                    <BranchSection key={branch.id} branch={branch} />
                ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <div className="text-sm text-sea-light/70">
                    <span className="font-bold text-sea-light">{totalMembers} people</span> · <span className="font-bold text-sea-light">{totalDivisions}</span> divisions
                </div>
            </div>
        </div>
    );
}