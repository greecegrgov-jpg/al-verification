document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       HEADER
    ========================= */

    const header = document.getElementById("header");

    header.innerHTML = `
        <div class="container header-container">

            <a href="index.html" class="logo">
                <span class="logo-main">${website.logo.text}</span>
                <span class="logo-sub">${website.logo.subtitle}</span>
            </a>

            <nav class="navigation">

                ${website.navigation.map(item => `
                    <a href="${item.link}">
                        ${item.text}
                    </a>
                `).join("")}

            </nav>

            <button class="mobile-menu" id="mobileMenu">
                ☰
            </button>

        </div>
    `;


    /* =========================
       HERO
    ========================= */

    const hero = document.getElementById("hero");

    hero.innerHTML = `
        <div class="hero-background">

            <div class="container hero-container">

                <div class="hero-content">

                    <span class="hero-badge">
                        ${website.hero.badge}
                    </span>

                    <h1>
                        ${website.hero.title}
                    </h1>

                    <p>
                        ${website.hero.description}
                    </p>

                    <div class="hero-buttons">

                        <a
                            href="${website.hero.primaryLink}"
                            class="btn btn-primary"
                        >
                            ${website.hero.primaryButton}
                        </a>

                        <a
                            href="${website.hero.secondaryLink}"
                            class="btn btn-secondary"
                        >
                            ${website.hero.secondaryButton}
                        </a>

                    </div>

                </div>

                <div class="hero-card">

                    <div class="card-icon">
                        ✓
                    </div>

                    <h3>
                        Online Visa Services
                    </h3>

                    <p>
                        Explore the demonstration application process.
                    </p>

                    <div class="card-line"></div>

                    <div class="card-row">
                        <span>Application</span>
                        <strong>Online</strong>
                    </div>

                    <div class="card-row">
                        <span>Documents</span>
                        <strong>Required</strong>
                    </div>

                    <div class="card-row">
                        <span>Status</span>
                        <strong>Review</strong>
                    </div>

                </div>

            </div>

        </div>
    `;


    /* =========================
       STEPS
    ========================= */

    const steps = document.getElementById("steps");

    steps.innerHTML = `
        <div class="container section-container">

            <div class="section-heading">

                <span class="section-label">
                    APPLICATION PROCESS
                </span>

                <h2>
                    How It Works
                </h2>

                <p>
                    Follow these basic steps to understand the demonstration workflow.
                </p>

            </div>

            <div class="steps-grid">

                ${website.steps.map(step => `
                    
                    <div class="step-card">

                        <div class="step-number">
                            ${step.number}
                        </div>

                        <h3>
                            ${step.title}
                        </h3>

                        <p>
                            ${step.description}
                        </p>

                    </div>

                `).join("")}

            </div>

        </div>
    `;


    /* =========================
       WHY EVISA
    ========================= */

    const whyEvisa = document.getElementById("why-evisa");

    whyEvisa.innerHTML = `
        <div class="why-section">

            <div class="container section-container">

                <div class="section-heading">

                    <span class="section-label">
                        FEATURES
                    </span>

                    <h2>
                        Why Use an Online Process?
                    </h2>

                    <p>
                        A well-designed online portal can make information easier to access
                        and applications easier to understand.
                    </p>

                </div>

                <div class="features-grid">

                    ${website.whyEvisa.map(feature => `
                        
                        <div class="feature-card">

                            <div class="feature-icon">
                                ${feature.icon}
                            </div>

                            <h3>
                                ${feature.title}
                            </h3>

                            <p>
                                ${feature.description}
                            </p>

                        </div>

                    `).join("")}

                </div>

            </div>

        </div>
    `;


    /* =========================
       INFORMATION
    ========================= */

    const information = document.getElementById("information");

    information.innerHTML = `
        <div class="container">

            <div class="information-box">

                <div>
                    <span class="section-label">
                        IMPORTANT INFORMATION
                    </span>

                    <h2>
                        ${website.information.title}
                    </h2>

                    <p>
                        ${website.information.description}
                    </p>
                </div>

                <a
                    href="${website.information.buttonLink}"
                    class="btn btn-primary"
                >
                    ${website.information.buttonText}
                </a>

            </div>

        </div>
    `;


    /* =========================
       FOOTER
    ========================= */

    const footer = document.getElementById("footer");

    footer.innerHTML = `
        <div class="footer-main">

            <div class="container footer-container">

                <div class="footer-brand">

                    <div class="footer-logo">
                        ${website.logo.text}
                    </div>

                    <p>
                        ${website.footer.description}
                    </p>

                </div>

                <div class="footer-links">

                    <h4>
                        Quick Links
                    </h4>

                    ${website.navigation.map(item => `
                        <a href="${item.link}">
                            ${item.text}
                        </a>
                    `).join("")}

                </div>

            </div>

        </div>

        <div class="footer-bottom">

            <div class="container">

                <p>
                    ${website.footer.copyright}
                </p>

            </div>

        </div>
    `;


    /* =========================
       MOBILE MENU
    ========================= */

    const mobileMenu = document.getElementById("mobileMenu");

    const navigation = document.querySelector(".navigation");

    if (mobileMenu && navigation) {

        mobileMenu.addEventListener("click", function () {

            navigation.classList.toggle("navigation-open");

        });

    }

});
