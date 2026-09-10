/* ============================================================
   THEME SYSTEM
============================================================ */

const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");


function getPreferredTheme() {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme) {
        return savedTheme;
    }


    const prefersLight =
        window.matchMedia(
            "(prefers-color-scheme: light)"
        ).matches;


    return prefersLight
        ? "light"
        : "dark";
}


function setTheme(theme) {

    html.setAttribute(
        "data-theme",
        theme
    );


    themeIcon.textContent =
        theme === "dark"
            ? "☀"
            : "☾";


    localStorage.setItem(
        "theme",
        theme
    );
}


setTheme(
    getPreferredTheme()
);


themeToggle.addEventListener(
    "click",
    () => {

        const currentTheme =
            html.getAttribute(
                "data-theme"
            );


        const newTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";


        setTheme(
            newTheme
        );
    }
);



/* ============================================================
   HEADER EFFECT
============================================================ */

const siteHeader =
    document.querySelector(
        ".site-header"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 30) {

            siteHeader.classList.add(
                "scrolled"
            );

        } else {

            siteHeader.classList.remove(
                "scrolled"
            );

        }

    }
);



/* ============================================================
   MOBILE NAVIGATION
============================================================ */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );


const navLinks =
    document.getElementById(
        "navLinks"
    );


mobileMenuButton.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "open"
        );

    }
);


document
    .querySelectorAll(
        ".nav-links a"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "open"
                );

            }
        );

    });



/* ============================================================
   PROJECTS
============================================================ */

const projectsGrid =
    document.getElementById(
        "projectsGrid"
    );


function renderProjects() {

    projectsGrid.innerHTML = "";


    projects.forEach(
        (project, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "project-card reveal";


            const number =
                String(index + 1)
                    .padStart(2, "0");


            const tagsHTML =
                project.tags
                    .map(
                        tag =>
                            `<span class="project-tag">${tag}</span>`
                    )
                    .join("");


            card.innerHTML = `

                <div class="project-index">
                    PROJECT ${number}
                    &nbsp;/&nbsp;
                    ${project.category}
                </div>

                <h3>
                    ${project.title}
                </h3>

                <p class="project-card-description">
                    ${project.description}
                </p>

                <div class="project-tags">
                    ${tagsHTML}
                </div>

                <div class="project-link">
                    Explore project →
                </div>

            `;


            card.addEventListener(
                "click",
                () =>
                    openProjectModal(
                        project
                    )
            );


            projectsGrid.appendChild(
                card
            );

        }
    );

}


renderProjects();



/* ============================================================
   PROJECT MODAL
============================================================ */

const modal =
    document.getElementById(
        "projectModal"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalCategory =
    document.getElementById(
        "modalCategory"
    );


const modalDescription =
    document.getElementById(
        "modalDescription"
    );


const modalOverview =
    document.getElementById(
        "modalOverview"
    );


const modalContribution =
    document.getElementById(
        "modalContribution"
    );


const modalTags =
    document.getElementById(
        "modalTags"
    );


function openProjectModal(project) {

    modalCategory.textContent =
        project.category;


    modalTitle.textContent =
        project.title;


    modalDescription.textContent =
        project.description;


    modalOverview.textContent =
        project.overview;


    modalContribution.textContent =
        project.contribution;


    modalTags.innerHTML =
        project.tags
            .map(
                tag =>
                    `<span class="project-tag">${tag}</span>`
            )
            .join("");


    modal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";
}


function closeProjectModal() {

    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeProjectModal
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeProjectModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProjectModal();

        }

    }
);



/* ============================================================
   COURSES
============================================================ */

const courseTableBody =
    document.getElementById(
        "courseTableBody"
    );


const courseCount =
    document.getElementById(
        "courseCount"
    );


const courseFilters =
    document.querySelectorAll(
        ".course-filter"
    );


function renderCourses(category = "All") {

    courseTableBody.innerHTML =
        "";


    const filteredCourses =
        category === "All"

            ? courses

            : courses.filter(
                course =>
                    course.category === category
            );


    filteredCourses.forEach(
        course => {

            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td class="course-code">
                    ${course.code}
                </td>

                <td>
                    ${course.title}
                </td>

                <td>
                    ${course.semester}
                </td>

                <td>
                    ${course.category}
                </td>

                <td class="grade">
                    ${course.grade}
                </td>

            `;


            courseTableBody.appendChild(
                row
            );

        }
    );


    courseCount.textContent =
        courses.length;

}


renderCourses();


courseFilters.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                courseFilters.forEach(
                    filter =>
                        filter.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                renderCourses(
                    button.dataset.category
                );

            }
        );

    }
);



/* ============================================================
   AWARDS
============================================================ */

const awardsTimeline =
    document.getElementById(
        "awardsTimeline"
    );


function renderAwards() {

    awardsTimeline.innerHTML =
        "";


    awards.forEach(
        award => {

            const awardItem =
                document.createElement(
                    "article"
                );


            awardItem.className =
                "award-item reveal";


            awardItem.innerHTML = `

                <div class="award-year">
                    ${award.year}
                </div>

                <div class="award-content">

                    <h3>
                        ${award.title}
                    </h3>

                    <p class="award-organization">
                        ${award.organization}
                    </p>

                    <p class="award-description">
                        ${award.description}
                    </p>

                </div>

            `;


            awardsTimeline.appendChild(
                awardItem
            );

        }
    );

}


renderAwards();



/* ============================================================
   SKILLS
============================================================ */

const skillsGrid =
    document.getElementById(
        "skillsGrid"
    );


function renderSkills() {

    skillsGrid.innerHTML =
        "";


    skillGroups.forEach(
        group => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "skill-card reveal";


            const skillHTML =
                group.skills
                    .map(
                        skill =>
                            `<span class="skill-chip">${skill}</span>`
                    )
                    .join("");


            card.innerHTML = `

                <h3>
                    ${group.title}
                </h3>

                <div class="skill-list">
                    ${skillHTML}
                </div>

            `;


            skillsGrid.appendChild(
                card
            );

        }
    );

}


renderSkills();



/* ============================================================
   SCROLL REVEAL
============================================================ */

function initializeRevealAnimations() {

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "visible"
                                );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold:
                    0.12
            }

        );


    revealElements.forEach(
        element =>
            observer.observe(
                element
            )
    );

}


initializeRevealAnimations();



/* TAB NAVIGATION — hashes preserve direct links and browser history. */
const panels = [...document.querySelectorAll("main > section[id]")];
const navigationLinks = [...navLinks.querySelectorAll("a")];

function closeNavigation() {
    navLinks.classList.remove("open");
    mobileMenuButton.setAttribute("aria-expanded", "false");
    mobileMenuButton.setAttribute("aria-label", "Open navigation menu");
}

function showPage(moveFocus = false) {
    const requested = location.hash.slice(1) || "home";
    const active = panels.find(panel => panel.id === requested) || panels[0];
    panels.forEach(panel => { panel.hidden = panel !== active; });
    navigationLinks.forEach(link => {
        const selected = link.hash === `#${active.id}`;
        link.classList.toggle("active", selected);
        if (selected) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
    });
    document.title = `${navigationLinks.find(link => link.hash === `#${active.id}`).textContent} | Ran Chen`;
    closeNavigation();
    closeProjectModal();
    if (moveFocus) active.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "instant" });
}

document.addEventListener("click", event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!panels.some(panel => `#${panel.id}` === link.hash)) return;
    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null, "", link.hash);
    showPage(true);
});
window.addEventListener("hashchange", () => showPage(true));
window.addEventListener("popstate", () => showPage(true));
mobileMenuButton.addEventListener("click", () => {
    const open = navLinks.classList.contains("open");
    mobileMenuButton.setAttribute("aria-expanded", String(open));
    mobileMenuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
        closeNavigation();
        mobileMenuButton.focus();
    }
});
showPage();

/* HOME PROFILE */
document.getElementById("profileDescription").textContent = profile.description;
const portrait = document.getElementById("profilePhoto");
const portraitPlaceholder = document.getElementById("photoPlaceholder");
portrait.addEventListener("load", () => {
    portrait.hidden = false;
    portraitPlaceholder.hidden = true;
});
portrait.addEventListener("error", () => {
    portrait.hidden = true;
    portraitPlaceholder.hidden = false;
});
if (profile.photo) {
    portrait.alt = profile.photoAlt;
    portrait.src = profile.photo;
}

/* ============================================================
   CURRENT YEAR
============================================================ */

document.getElementById(
    "currentYear"
).textContent =
    new Date().getFullYear();
