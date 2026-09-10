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

    {
        code: "MATH 241",
        title: "Calculus III",
        semester: "Fall 2025",
        category: "Math",
        grade: "A"
    },

    {
        code: "MATH 257",
        title: "Linear Algebra with Computational Applications",
        semester: "Spring 2026",
        category: "Math",
        grade: "A"
    },

    {
        code: "CS 101",
        title: "Introduction to Computing",
        semester: "Spring 2026",
        category: "Computing",
        grade: "A"
    },

    {
        code: "PHYS 211",
        title: "University Physics: Mechanics",
        semester: "Fall 2025",
        category: "Science",
        grade: "A"
    },

    {
        code: "ME XXX",
        title: "Engineering Course",
        semester: "Fall 2026",
        category: "Engineering",
        grade: "IP"
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
