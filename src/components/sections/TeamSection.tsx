import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/* -------------------------------
   Team Data
---------------------------------*/
const members = [
    {
        name: 'SACHIN KADLI',
        role: 'Founder',
        avatar: 'public/IMG_9975 (1).JPG',
        link: '#',
    },
    {
        name: 'PRADHUDEV SAJJAN',
        role: 'Co-Founder',
        avatar: 'public/IMG_8249.JPG',
        link: '#',
    },
    {
        name: 'SHIVANI DURG',
        role: 'Product artist',
        avatar: 'public/IMG_0205.PNG',
        link: '#',
    },
    {
        name: 'SIDDUPRASAD',
        role: 'Editor',
        avatar: 'public/IMG_0208.JPG',
        link: '#',
    },
    {
        name: 'VADIRAJ HABBU',
        role: 'Editor',
        avatar: 'public/IMG_0206 (1).PNG',
        link: '#',
    },
    {
        name: 'MANJUNATH NAGANAHALLI',
        role: 'Camera man',
        avatar: 'public/IMG_0207.JPG',
        link: '#',
    },
];

/* -------------------------------
   Component
---------------------------------*/
const TeamSection = () => {
    return (
        <section className="py-16 md:py-32 bg-background">
            <div className="container mx-auto px-6 border-t border-border/40 pt-16">
                
                {/* Section Tag */}
                <div className="mb-12">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase bg-muted/50 px-3 py-1 rounded-full">
                        Our Squad
                    </span>
                </div>

                {/* Heading */}
                <div className="flex flex-col md:flex-row gap-8 md:justify-between md:items-end mb-16 md:mb-24">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Meet our dream team</h2>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <p className="text-muted-foreground text-lg">
                            We are a group of passionate individuals who care deeply about the results we deliver.
                            Every member contributes their unique touch to the masterpiece.
                        </p>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {members.map((member, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="overflow-hidden rounded-md bg-muted relative">
                                <img 
                                    className="h-96 w-full object-cover object-top transition-all duration-700 group-hover:scale-105 grayscale-0 md:grayscale md:group-hover:grayscale-0" 
                                    src={member.avatar} 
                                    alt={member.name} 
                                    loading="lazy"
                                />
                                {/* Hover Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="pt-4">
                                <div className="flex justify-between items-center border-b border-border/50 pb-3 mb-3">
                                    <h3 className="text-lg font-semibold transition-all duration-500 group-hover:text-primary">
                                        {member.name}
                                    </h3>
                                    <span className="text-xs font-mono text-muted-foreground">
                                        _0{index + 1}
                                    </span>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-muted-foreground">
                                        {member.role}
                                    </span>
                                    
                                    <a 
                                        href={member.link} 
                                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-primary"
                                    >
                                        Profile
                                        <ArrowUpRight className="h-3 w-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;