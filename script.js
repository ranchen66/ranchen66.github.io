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


const courseSortButtons = [...document.querySelectorAll(".course-sort")];
const courseView = { category: "All", key: "semester", direction: 1 };
const courseCollator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });
const gradeOrder = ["F", "D-", "D", "D+", "C-", "C", "C+", "B-", "B", "B+", "A-", "A", "A+"];
const gradeLabels = { "A": "A — 4.00 grade points", "A+": "A+ — 4.00 grade points", "A+H": "A+ with honors credit", "IP": "In progress", "DFR": "Grade temporarily deferred" };

function semesterValue(term) {
    const year = Number(term.match(/\d{4}/)?.[0] || 0);
    const season = { Winter: 0, Spring: 1, Summer: 2, Fall: 3 }[term.split(" ")[0]] ?? 4;
    return year * 5 + season;
}

function compareCourses(a, b) {
    const { key, direction } = courseView;
    let comparison;
    if (key === "semester") comparison = semesterValue(a.semester) - semesterValue(b.semester);
    else if (key === "grade") {
        const gradeA = gradeOrder.indexOf(a.grade.replace(/H$/, ""));
        const gradeB = gradeOrder.indexOf(b.grade.replace(/H$/, ""));
        // Pending statuses stay below completed grades in either direction.
        if ((gradeA < 0) !== (gradeB < 0)) return gradeA < 0 ? 1 : -1;
        comparison = gradeA < 0 ? courseCollator.compare(a.grade, b.grade) : gradeA - gradeB;
    } else comparison = courseCollator.compare(a[key], b[key]);
    return comparison * direction;
}

function renderCourses(category = courseView.category) {
    courseView.category = category;
    const rows = courses.filter(course => category === "All" || course.category === category).sort(compareCourses);
    courseTableBody.innerHTML = "";
    rows.forEach(course => {
        const row = document.createElement("tr");
        ["code", "title", "semester", "category", "grade"].forEach(key => {
            const cell = document.createElement("td");
            if (key === "code") cell.className = "course-code";
            if (key === "grade") {
                const badge = document.createElement("span");
                badge.className = "grade-badge" + (course.grade.endsWith("H") ? " honors" : course.grade === "IP" ? " pending" : course.grade === "DFR" ? " deferred" : "");
                badge.textContent = course.grade;
                badge.title = gradeLabels[course.grade] || course.grade;
                badge.setAttribute("aria-label", gradeLabels[course.grade] || course.grade);
                cell.appendChild(badge);
            } else cell.textContent = course[key];
            row.appendChild(cell);
        });
        courseTableBody.appendChild(row);
    });
    courseCount.textContent = courses.length;
    courseSortButtons.forEach(button => {
        const active = button.dataset.sort === courseView.key;
        const order = courseView.direction === 1 ? "ascending" : "descending";
        button.closest("th").setAttribute("aria-sort", active ? order : "none");
        button.querySelector("span").textContent = active ? (courseView.direction === 1 ? "↑" : "↓") : "↕";
    });
    const label = courseSortButtons.find(button => button.dataset.sort === courseView.key).childNodes[0].textContent;
    document.getElementById("courseSortStatus").textContent = `${rows.length} of ${courses.length} courses · ${label}, ${courseView.direction === 1 ? "ascending" : "descending"}`;
}

courseSortButtons.forEach(button => button.addEventListener("click", () => {
    const key = button.dataset.sort;
    courseView.direction = courseView.key === key ? -courseView.direction : key === "grade" ? -1 : 1;
    courseView.key = key;
    renderCourses();
}));
courseFilters.forEach(button => button.addEventListener("click", () => {
    courseFilters.forEach(filter => {
        const active = filter === button;
        filter.classList.toggle("active", active);
        filter.setAttribute("aria-pressed", String(active));
    });
    renderCourses(button.dataset.category);
}));
courseFilters.forEach(button => button.setAttribute("aria-pressed", String(button.classList.contains("active"))));
renderCourses();

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
