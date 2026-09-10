/* HOME PROFILE — set photo to a local image path, e.g. "assets/ran-chen.jpg". */
const profile = {
    photo: "",
    photoAlt: "Portrait of Ran Chen",
    description: "I am an engineering student at the University of Illinois Urbana-Champaign interested in fluid mechanics, scientific computing, and experimental research. I enjoy bringing mathematics, physics, and computation together to understand complex physical systems."
};

/* ============================================================
   WEBSITE CONTENT

   EDIT THIS FILE whenever you want to:
   - add a project
   - add a course
   - add an award
   - add a skill

   You normally do NOT need to modify index.html.
============================================================ */


/* ============================================================
   PROJECTS
============================================================ */

const projects = [

    {
        title: "Viscoelastic Flow & Elastoinertial Turbulence",

        category: "COMPUTATIONAL FLUID DYNAMICS",

        description:
            "Numerical investigation of viscoelastic channel flow and the development of three-dimensional disturbances.",

        tags: [
            "CFD",
            "DNS",
            "Dedalus",
            "FENE-P",
            "Python",
            "HPC"
        ],

        overview:
            "This project investigates complex viscoelastic flow behavior using direct numerical simulation. The work focuses on understanding instability mechanisms, coherent structures, and the transition from two-dimensional to three-dimensional flow states.",

        contribution:
            "Implemented and analyzed simulation workflows, examined nondimensional parameter definitions, reproduced reference flow conditions, processed numerical results, and investigated three-dimensional perturbation growth."
    },


    {
        title: "Fiber Dynamics in Microfluidic Multiphase Flow",

        category: "EXPERIMENTAL FLUID MECHANICS",

        description:
            "Experimental study of flexible fiber motion inside liquid-liquid microfluidic flow.",

        tags: [
            "Microfluidics",
            "Multiphase Flow",
            "Python",
            "Image Analysis",
            "Experiments"
        ],

        overview:
            "This project examines the motion of slender fibers transported through a microfluidic channel containing multiphase flow structures. Experimental observations are compared against expected velocity profiles and fluid-mechanical models.",

        contribution:
            "Designed experimental analysis workflows, processed high-speed imaging data, tracked fiber motion, calculated velocity and acceleration, and compared measured trajectories with theoretical channel-flow predictions."
    },


    {
        title: "Reduced-Order Modeling of Fluid Flow",

        category: "SCIENTIFIC MACHINE LEARNING",

        description:
            "Data-driven reduced-order modeling of high-dimensional fluid systems using neural networks.",

        tags: [
            "Machine Learning",
            "PyTorch",
            "CNN",
            "ROM",
            "Python"
        ],

        overview:
            "This project explores reduced representations of high-dimensional flow-field data using neural-network-based dimensionality reduction and dynamical modeling.",

        contribution:
            "Worked with large simulation datasets, neural-network architectures, latent representations, symmetry handling, and post-processing pipelines for fluid-dynamics applications."
    },


    {
        title: "Engineering Design & CAD",

        category: "ENGINEERING DESIGN",

        description:
            "Mechanical design projects involving parametric CAD, manufacturability, tolerancing, and engineering communication.",

        tags: [
            "CAD",
            "GD&T",
            "Mechanical Design",
            "Manufacturing"
        ],

        overview:
            "A collection of mechanical engineering design work covering CAD modeling, engineering drawings, tolerancing, fit selection, and design-for-manufacturing considerations.",

        contribution:
            "Created parametric models and engineering drawings while applying dimensional constraints, tolerances, fit requirements, and manufacturing considerations."
    }

];



/* ============================================================
   COURSES

   Change these to your real courses.

   Category MUST be one of:
   Engineering
   Math
   Computing
   Science
============================================================ */

const courses = [

    // =========================================================
    // SUMMER 2022 — JOHNS HOPKINS UNIVERSITY
    // =========================================================

    {
        code: "ENG 1--",
        title: "Engineering Elective",
        semester: "Summer 2022",
        category: "Engineering",
        grade: "A",
        credits: 3
    },


    // =========================================================
    // FALL 2024
    // =========================================================

    {
        code: "CHEM 102",
        title: "General Chemistry I",
        semester: "Fall 2024",
        category: "Science",
        grade: "A+",
        credits: 3
    },

    {
        code: "CHEM 103",
        title: "General Chemistry Lab I",
        semester: "Fall 2024",
        category: "Science",
        grade: "A+",
        credits: 1
    },

    {
        code: "ENG 100",
        title: "Engineering Orientation",
        semester: "Fall 2024",
        category: "Engineering",
        grade: "A",
        credits: 1
    },

    {
        code: "ENG 101",
        title: "Engineering at Illinois",
        semester: "Fall 2024",
        category: "Engineering",
        grade: "A",
        credits: 1
    },

    {
        code: "FR 156",
        title: "Exploring Paris",
        semester: "Fall 2024",
        category: "Humanities",
        grade: "A+",
        credits: 3
    },

    {
        code: "MATH 231",
        title: "Calculus II",
        semester: "Fall 2024",
        category: "Math",
        grade: "A",
        credits: 3
    },

    {
        code: "MATH 299",
        title: "Topics in Mathematics",
        semester: "Fall 2024",
        category: "Math",
        grade: "A",
        credits: 1
    },

    {
        code: "ME 170",
        title: "Computer-Aided Design",
        semester: "Fall 2024",
        category: "Engineering",
        grade: "A+",
        credits: 3
    },


    // =========================================================
    // SPRING 2025
    // =========================================================

    {
        code: "CS 101",
        title: "Intro Computing: Engineering & Science",
        semester: "Spring 2025",
        category: "Computing",
        grade: "A+H",
        credits: 3
    },

    {
        code: "MATH 241",
        title: "Calculus III",
        semester: "Spring 2025",
        category: "Math",
        grade: "A+",
        credits: 4
    },

    {
        code: "ME 297",
        title: "Intro Independent Study",
        semester: "Spring 2025",
        category: "Engineering",
        grade: "A+",
        credits: 3
    },

    {
        code: "MUS 133",
        title: "Introduction to World Music",
        semester: "Spring 2025",
        category: "Humanities",
        grade: "A",
        credits: 3
    },

    {
        code: "PHYS 211",
        title: "University Physics: Mechanics",
        semester: "Spring 2025",
        category: "Science",
        grade: "A+",
        credits: 4
    },

    {
        code: "RHET 105",
        title: "Writing and Research",
        semester: "Spring 2025",
        category: "Humanities",
        grade: "A",
        credits: 4
    },


    // =========================================================
    // FALL 2025
    // =========================================================

    {
        code: "MATH 257",
        title: "Linear Algebra with Computational Applications",
        semester: "Fall 2025",
        category: "Math",
        grade: "A+",
        credits: 3
    },

    {
        code: "MSE 280",
        title: "Engineering Materials",
        semester: "Fall 2025",
        category: "Engineering",
        grade: "A+",
        credits: 3
    },

    {
        code: "PHYS 212",
        title: "University Physics: Electricity & Magnetism",
        semester: "Fall 2025",
        category: "Science",
        grade: "A+",
        credits: 4
    },

    {
        code: "SHS 222",
        title: "Language & Culture of Deaf Communities",
        semester: "Fall 2025",
        category: "Humanities",
        grade: "A+H",
        credits: 3
    },

    {
        code: "TAM 211",
        title: "Statics",
        semester: "Fall 2025",
        category: "Engineering",
        grade: "A",
        credits: 3
    },

    {
        code: "TAM 497",
        title: "Independent Study",
        semester: "Fall 2025",
        category: "Engineering",
        grade: "A",
        credits: 3
    },


    // =========================================================
    // SPRING 2026
    // =========================================================

    {
        code: "AE 202",
        title: "Aerospace Flight Mechanics",
        semester: "Spring 2026",
        category: "Engineering",
        grade: "A+",
        credits: 3
    },

    {
        code: "AE 311",
        title: "Incompressible Flow",
        semester: "Spring 2026",
        category: "Engineering",
        grade: "A+",
        credits: 3
    },

    {
        code: "LAS 291",
        title: "Global Perspectives — Pre-Departure",
        semester: "Spring 2026",
        category: "Humanities",
        grade: "A+",
        credits: 1
    },

    {
        code: "MATH 285",
        title: "Intro Differential Equations",
        semester: "Spring 2026",
        category: "Math",
        grade: "A+",
        credits: 3
    },

    {
        code: "ME 297",
        title: "Intro Independent Study",
        semester: "Spring 2026",
        category: "Engineering",
        grade: "A+",
        credits: 3
    },

    {
        code: "TAM 212",
        title: "Introductory Dynamics",
        semester: "Spring 2026",
        category: "Engineering",
        grade: "A+",
        credits: 3
    },


    // =========================================================
    // SUMMER 2026
    // =========================================================

    {
        code: "ENG 299",
        title: "Engineering Study Abroad",
        semester: "Summer 2026",
        category: "Engineering",
        grade: "DFR",
        credits: 6
    },


    // =========================================================
    // FALL 2026 — CURRENTLY IN PROGRESS
    // =========================================================

    {
        code: "AE 312",
        title: "Compressible Flow",
        semester: "Fall 2026",
        category: "Engineering",
        grade: "IP",
        credits: 3
    },

    {
        code: "AE 321",
        title: "Mechanics of Aerospace Structures",
        semester: "Fall 2026",
        category: "Engineering",
        grade: "IP",
        credits: 3
    },

    {
        code: "AE 352",
        title: "Aerospace Dynamical Systems",
        semester: "Fall 2026",
        category: "Engineering",
        grade: "IP",
        credits: 3
    },

    {
        code: "LAS 292",
        title: "Global Perspectives — Abroad",
        semester: "Fall 2026",
        category: "Humanities",
        grade: "IP",
        credits: 2
    },

    {
        code: "ME 200",
        title: "Thermodynamics",
        semester: "Fall 2026",
        category: "Engineering",
        grade: "IP",
        credits: 3
    }

];


/*

TO ADD A COURSE:

Copy this:

{
    code: "ME 300",
    title: "Thermodynamics",
    semester: "Fall 2026",
    category: "Engineering",
    grade: "A"
},

and paste it into the courses array above.

*/



/* ============================================================
   AWARDS & SCHOLARSHIPS
============================================================ */

const awards = [

    {
        year: "2026",

        title: "Award / Scholarship Name",

        organization: "University or Organization",

        description:
            "Replace this with a short description of the award, scholarship, competition, or academic recognition."
    },


    {
        year: "2026",

        title: "Research Recognition",

        organization: "University of Illinois Urbana-Champaign",

        description:
            "Replace this entry with one of your research awards, presentations, scholarships, fellowships, or other academic achievements."
    },


    {
        year: "2025",

        title: "Academic Recognition",

        organization: "University / Organization",

        description:
            "Add additional awards here by copying this object in data.js."
    }

];



/* ============================================================
   SKILLS
============================================================ */

const skillGroups = [

    {
        title: "Programming",

        skills: [
            "Python",
            "MATLAB",
            "Bash",
            "Git",
            "HTML",
            "CSS"
        ]
    },


    {
        title: "Scientific Computing",

        skills: [
            "NumPy",
            "SciPy",
            "xarray",
            "Dedalus",
            "Numerical Methods"
        ]
    },


    {
        title: "Fluid Mechanics",

        skills: [
            "CFD",
            "DNS",
            "Multiphase Flow",
            "Viscoelastic Flow",
            "Microfluidics"
        ]
    },


    {
        title: "High Performance Computing",

        skills: [
            "Linux",
            "SLURM",
            "MPI",
            "Remote SSH",
            "Cluster Computing"
        ]
    },


    {
        title: "Machine Learning",

        skills: [
            "PyTorch",
            "CNNs",
            "Autoencoders",
            "Reduced-Order Modeling"
        ]
    },


    {
        title: "Engineering",

        skills: [
            "CAD",
            "Mechanical Design",
            "GD&T",
            "Experimental Methods",
            "Technical Communication"
        ]
    }

];
