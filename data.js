/* HOME PROFILE — set photo to a local image path, e.g. "assets/ran-chen.jpg". */
const profile = {
    photo: "",
    photoAlt: "Portrait of Ran Chen",
    description: "I am an Aerospace Engineering undergraduate at the University of Illinois Urbana-Champaign, graduating in May 2028. My work spans microfluidic experiments, machine learning for turbulent flows, and aircraft design. I also help students develop their CAD skills as a course assistant for ME 170."
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
    "title": "Fiber Bridging in Microfluidic Flow",
    "category": "EXPERIMENTAL FLUID MECHANICS",
    "description": "Research Assistant, Institute for Nano- and Microfluidics, Technische Universität Darmstadt, Germany. May 2026–present.",
    "tags": [
        "Microfluidics",
        "Experiments",
        "Image Analysis",
        "Physical Modeling"
    ],
    "overview": "Investigation of fiber bridging in a fiber-laden T-junction experiment, combining microfluidic fabrication, analytical modeling, and image analysis.",
    "contribution": "Designed a novel fiber-laden T-junction experiment using a PMMA microfluidic plate and solvent bonding. Established an analytical physical model for the observed bridging phenomenon and developed an image analysis workflow to cross-validate the model."
},
{
    "title": "Machine Learning for Transitional Flow",
    "category": "SCIENTIFIC MACHINE LEARNING",
    "description": "Research Assistant, Complex Fluids and Turbulence Laboratory, University of Illinois Urbana-Champaign. January 2025–present.",
    "tags": [
        "3D CNN",
        "POD",
        "Autoencoders",
        "Neural ODE",
        "Fluid Mechanics"
    ],
    "overview": "Development of machine learning methods for feature detection and the identification of exact coherent states in transitional plane Poiseuille flow.",
    "contribution": "Designed a 3D convolutional neural network with dense blocks for feature detection. Developed a methodology to identify exact coherent states using proper orthogonal decomposition and an implicit rank-minimizing autoencoder with a neural ODE."
},
{
    "title": "Design, Build, Fly",
    "category": "AIRCRAFT DESIGN",
    "description": "Team member, University of Illinois Urbana-Champaign. September 2024–September 2025.",
    "tags": [
        "Aircraft Design",
        "CAD",
        "Aerodynamics",
        "Lightweight Design"
    ],
    "overview": "Collaborative aircraft design for competition, with an emphasis on lightweight parts and aerodynamic performance.",
    "contribution": "Designed and improved aircraft parts with attention to weight and aerodynamics. Participated in CAD design meetings and provided feedback for team evaluation."
},
{
    "title": "ME 170 — Computer-Aided Design",
    "category": "TEACHING EXPERIENCE",
    "description": "Course Assistant, University of Illinois Urbana-Champaign. September 2025–present.",
    "tags": [
        "Fusion 360",
        "CAD",
        "ASME",
        "ISO",
        "PrairieLearn"
    ],
    "overview": "Supporting engineering students in computer-aided design, technical standards, and conceptual understanding.",
    "contribution": "Provided weekly teaching support in Fusion 360 and ASME/ISO standards. Developed conceptual questions and rebuilt course content on PrairieLearn."
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
        "year": "2026",
        "title": "Scholarship of Excellence",
        "organization": "Technische Universität Darmstadt",
        "description": "Awarded EUR 3,099."
    },
    {
        "year": "2026",
        "title": "Illinois for Illinois Scholarship",
        "organization": "University of Illinois Urbana-Champaign",
        "description": "Awarded USD 2,000."
    },
    {
        "year": "2025–2026",
        "title": "Tan Family Education Foundation Scholarship",
        "organization": "Tan Family Education Foundation",
        "description": "Awarded USD 10,000 in 2025 and USD 3,000 in 2026."
    },
    {
        "year": "2024–2026",
        "title": "Dean’s List",
        "organization": "University of Illinois Urbana-Champaign",
        "description": "Recognized in Fall 2024, Spring 2025, Fall 2025, and Spring 2026."
    },
    {
        "year": "2023",
        "title": "Top Gold — British Physics Olympic",
        "organization": "",
        "description": "Received the Top Gold award in 2023."
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
            "Technical Communication",
            "Fusion 360",
            "Siemens NX",
            "LaTeX"
        ]
    }

];
