import teamData from './teamOrganogram.json';

const names = new Set();
const divisions = new Set();
const add = (person) => {
    if (person?.name) names.add(person.name.trim().toLowerCase());
};

add(teamData.leader);
teamData.branches.forEach((branch) => {
    add(branch.pm);
    [branch.cto].flat().forEach(add);
    branch.divisions.forEach((division) => {
        if (division.name) divisions.add(division.name.trim().toLowerCase());
        add(division.hod);
        add(division.tod);
        division.members?.forEach(add);
    });
});

export const totalMembers = names.size;
export const totalDivisions = divisions.size;
