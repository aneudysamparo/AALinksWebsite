const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function revealPage() {
    window.requestAnimationFrame(() => {
        document.body.dataset.ready = "true";
    });
}

function bindPointerHighlights() {
    if (prefersReducedMotion.matches) {
        return;
    }

    const panels = document.querySelectorAll(".tilt-panel");

    panels.forEach((panel) => {
        panel.addEventListener("pointermove", (event) => {
            const bounds = panel.getBoundingClientRect();
            const x = ((event.clientX - bounds.left) / bounds.width) * 100;
            const y = ((event.clientY - bounds.top) / bounds.height) * 100;

            panel.style.setProperty("--pointer-x", `${x}%`);
            panel.style.setProperty("--pointer-y", `${y}%`);
        });

        panel.addEventListener("pointerleave", () => {
            panel.style.removeProperty("--pointer-x");
            panel.style.removeProperty("--pointer-y");
        });
    });
}

function registerServiceWorker() {
    if (!("serviceWorker" in navigator) || !window.isSecureContext) {
        return;
    }

    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js").catch((error) => {
            console.warn("Service worker registration failed.", error);
        });
    });
}

function init() {
    revealPage();
    bindPointerHighlights();
    registerServiceWorker();
}

init();