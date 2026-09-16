import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Styled } from "./styled";
import { MdClear } from "react-icons/md";

const STORAGE_KEY = "navSearch";

const NavListCore = () => {
    const navRef = useRef(null);
    const wrapperRef = useRef(null);
    const searchInputRef = useRef(null);
    const { pathname } = useLocation();

    const [search, setSearch] = useState(() => {
        try { return sessionStorage.getItem(STORAGE_KEY) ?? ""; } catch { return ""; }
    });
    const [matchCount, setMatchCount] = useState(0);

    // Keep active link centered
    useEffect(() => {
        const el = navRef.current?.querySelector("a.active");
        if (!el) return;
        const id = requestAnimationFrame(() => {
            try { el.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" }); }
            catch { el.scrollIntoView(); }
        });
        return () => cancelAnimationFrame(id);
    }, [pathname]);

    // Shortcuts: Ctrl/Cmd+K focus, Esc clear, Enter open first result
    useEffect(() => {
        function onKey(e) {
            const isMetaK = (e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K");
            if (isMetaK) {
                e.preventDefault();
                searchInputRef.current?.focus();
                searchInputRef.current?.select();
                return;
            }
            if (e.key === "Escape" && document.activeElement === searchInputRef.current) {
                setSearch("");
                return;
            }
            if (e.key === "Enter" && document.activeElement === searchInputRef.current) {
                const first = wrapperRef.current?.querySelector('a:not([data-hidden="true"])');
                if (first) first.click();
            }
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Filter links + hide empty section headers
    useEffect(() => {
        try { sessionStorage.setItem(STORAGE_KEY, search); } catch { }

        const root = wrapperRef.current;
        if (!root) return;

        const q = search.trim().toLowerCase();
        const tokens = q.length ? q.split(/\s+/).filter(Boolean) : [];

        const links = Array.from(root.querySelectorAll("a[href]"));
        let visibleCount = 0;

        links.forEach((a) => {
            const label = (a.textContent || "").toLowerCase();
            const title = (a.getAttribute("title") || "").toLowerCase();
            const hay = `${label} ${title}`;
            const isMatch = tokens.length === 0 || tokens.every((t) => hay.includes(t));
            a.setAttribute("data-hidden", isMatch ? "false" : "true");
            if (isMatch) visibleCount += 1;
        });

        const headers = Array.from(root.querySelectorAll("h3.title"));
        headers.forEach((h) => {
            let hasVisible = false;
            let node = h.nextElementSibling;
            while (node && node.tagName !== "H3") {
                if (node.tagName === "A" && node.getAttribute("data-hidden") === "false") { hasVisible = true; break; }
                if (node.tagName === "LI") {
                    const a = node.querySelector("a");
                    if (a && a.getAttribute("data-hidden") === "false") { hasVisible = true; break; }
                }
                node = node.nextElementSibling;
            }
            h.setAttribute("data-hidden", hasVisible ? "false" : "true");
        });

        setMatchCount(visibleCount);
    }, [search]);

    const handleSearchChange = (e) => setSearch(e.target.value);
    const clearSearch = () => setSearch("");

    useEffect(() => { searchInputRef.current?.focus(); }, []);

    return (
        <Styled.Nav ref={navRef} aria-label="Animations navigation">
            <div className="searchWraper">
                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search demos (Ctrl + K)"
                    value={search}
                    onChange={handleSearchChange}
                    aria-label="Search demos"
                    aria-controls="navlinksWrapper"
                />
                {search.trim().length > 0 && (
                    <div className="clearIconWrapper" onClick={clearSearch} role="button" aria-label="Clear search" title="Clear">
                        <MdClear size={20} />
                    </div>
                )}
            </div>

            <div className="navlinksWrapper" id="navlinksWrapper" ref={wrapperRef} reversed>
                {/* Core */}
                <h3 className="title">Core</h3>
                <><NavLink to="/home" title="Home">Home</NavLink></>

                {/* Page / Route */}
                <h3 className="title" title="Page / Route Transitions">Page / Route Transitions</h3>
                <><NavLink to="/curtain-reveal" title="Curtain reveal - clipPath slides open">Curtain Reveal</NavLink></>
                <><NavLink to="/book-flip" title="Book-flip - perspective rotateY enter/exit">Book-flip</NavLink></>
                <><NavLink to="/slide-over-stack" title="Slide-over stack - new page pushes old with scale">Slide-over Stack</NavLink></>
                <><NavLink to="/parallax-push" title="Parallax push - fg slides, bg drifts slower">Parallax Push</NavLink></>
                <><NavLink to="/crossfade-micro-scale" title="Crossfade + micro-scale 0.98→1 settle">Crossfade + Micro-scale</NavLink></>
                <><NavLink to="/door-swing" title="Door swing - rotateY from left/right hinge">Door Swing</NavLink></>
                <><NavLink to="/liquid-corners" title="Liquid corners - border-radius morph">Liquid Corners</NavLink></>
                <><NavLink to="/hero-teleport" title="Hero teleport - shared layoutId between routes">Hero Teleport</NavLink></>
                <><NavLink to="/split-transition" title="Split transition - halves exit/enter opposite">Split Transition</NavLink></>
                <><NavLink to="/blur-down-to-sharp" title="Blur-down to sharp - filter blur animates out">Blur-down to Sharp</NavLink></>

                {/* Component Entrances / Layout */}
                <h3 className="title" title="Component Entrances & Layout">Component Entrances & Layout</h3>
                <><NavLink to="/staggered-card-rise" title="Cards rise y:20→0 with staggerChildren">Staggered Card Rise</NavLink></>
                <><NavLink to="/drop-in-with-bounce" title="Drop-in with spring overshoot">Drop-in with Bounce</NavLink></>
                <><NavLink to="/grow-from-measure" title="Auto height expand using layout">Grow-from-measure</NavLink></>
                <><NavLink to="/pop-and-settle" title="Pop-and-settle scale 0.9→1.04→1">Pop-and-settle</NavLink></>
                <><NavLink to="/elastic-accordion" title="Accordion height + caret rotate">Elastic Accordion</NavLink></>
                <><NavLink to="/flip-reflow" title="FLIP reflow list swap with layout">FLIP Reflow</NavLink></>
                <><NavLink to="/grid-explode-to-detail" title="Grid items fade; one scales to detail">Grid “Explode” to Detail</NavLink></>
                <><NavLink to="/masonry-shuffle" title="Masonry reorder with springy layout">Masonry Shuffle</NavLink></>

                {/* Gestures / Micro-Interactions */}
                <h3 className="title" title="Gestures & Micro-interactions">Gestures & Micro-interactions</h3>
                <><NavLink to="/drag-to-dismiss" title="Bottom sheet drag threshold + spring exit">Drag-to-dismiss</NavLink></>
                <><NavLink to="/drag-snap-carousel" title="Carousel with constraints + momentum snap">Drag-snap Carousel</NavLink></>
                <><NavLink to="/pull-to-refresh" title="Pull-to-refresh elastic stretch">Pull-to-refresh</NavLink></>
                <><NavLink to="/swipe-to-archive" title="Swipe row to archive with reveal bg">Swipe-to-archive</NavLink></>
                <><NavLink to="/long-press-progress-ring" title="Hold to animate SVG progress ring">Long-press Progress Ring</NavLink></>
                <><NavLink to="/hover-peek-tilt" title="3D tilt tied to pointer">Hover Peek Tilt</NavLink></>
                <><NavLink to="/magnetic-button" title="Button springs toward cursor">Magnetic Button</NavLink></>
                <><NavLink to="/rail-selector" title="Toggle thumb glides on a rail">Rail Selector</NavLink></>

                {/* Lists / Filters / Data Changes */}
                <h3 className="title" title="Lists, Filters & Data Changes">Lists, Filters & Data Changes</h3>
                <><NavLink to="/filter-melt-away" title="Filter: items melt (opacity + blur) on exit">Filtered Melt-away</NavLink></>
                <><NavLink to="/diff-in-out" title="AnimatePresence keyed by id for diffs">Diff-in / Diff-out</NavLink></>
                <><NavLink to="/drag-reorder-sort" title="Drag handle to reorder; list reflows">Drag Reorder / Sort</NavLink></>
                <><NavLink to="/number-ticker" title="MotionValue tween, digit split ticker">Number Ticker</NavLink></>
                <><NavLink to="/new-row-highlight" title="New row highlight pulse then settle">New Row Highlight</NavLink></>
                <><NavLink to="/kpi-chip-count-tick" title="KPI chip tick with scale + y nudge">KPI Count Tick</NavLink></>

                {/* Feedback & System Status */}
                <h3 className="title" title="Feedback & System Status">Feedback & System Status</h3>
                <><NavLink to="/success-morph" title="SVG path morph: spinner → checkmark">Success Morph</NavLink></>
                <><NavLink to="/error-shake" title="Error shake x oscillation">Error Shake</NavLink></>
                <><NavLink to="/press-ripple" title="Press ripple from center">Press Ripple</NavLink></>
                <><NavLink to="/save-pulse" title="Save pulse icon 1→1.2→1">Save Pulse</NavLink></>
                <><NavLink to="/copy-confirmation-flash" title="Copy confirmation flash + tooltip">Copy Confirmation Flash</NavLink></>
                <><NavLink to="/offline-banner-slide-down" title="Offline banner slides down then pins">Offline Banner Slide-down</NavLink></>

                {/* Modals / Drawers / Overlays */}
                <h3 className="title" title="Modals, Drawers & Overlays">Modals, Drawers & Overlays</h3>
                <><NavLink to="/frosted-glass-modal" title="Backdrop blur + dialog scale">Frosted Glass Modal</NavLink></>
                <><NavLink to="/bottom-sheet-rubber-band" title="Bottom sheet rubber-band overscroll">Bottom Sheet Rubber-band</NavLink></>
                <><NavLink to="/context-menu-morph" title="Trigger → menu via shared layoutId">Context Menu Morph</NavLink></>
                <><NavLink to="/spotlight-overlay" title="Animated circular clipPath spotlight">Spotlight Overlay</NavLink></>
                <><NavLink to="/multi-step-modal" title="Multi-step modal with AnimatePresence">Multi-step Modal</NavLink></>

                {/* Navigation & Tabs */}
                <h3 className="title" title="Navigation & Tabs">Navigation & Tabs</h3>
                <><NavLink to="/underline-glide" title="Active tab underline via shared layoutId">Underline Glide</NavLink></>
                <><NavLink to="/breadcrumb-crumb-entrance" title="Breadcrumbs enter crumb-by-crumb">Breadcrumb Crumb Entrance</NavLink></>
                <><NavLink to="/section-header-sticky-shrink" title="Sticky header shrinks on scroll">Section Header Sticky-shrink</NavLink></>
                <><NavLink to="/side-nav-collapse" title="Side-nav collapse; icons compress, labels fade">Side-nav Collapse</NavLink></>
                <><NavLink to="/command-palette-zoom-in" title="Command palette zoom-in + staggered results">Command Palette Zoom-in</NavLink></>

                {/* Forms & Inputs */}
                <h3 className="title" title="Forms & Inputs">Forms & Inputs</h3>
                <><NavLink to="/field-focus-glow" title="Field focus glow box-shadow intensity">Field Focus Glow</NavLink></>
                <><NavLink to="/invalid-field-micro-shake" title="Invalid field subtle x wiggle">Invalid Field Micro-shake</NavLink></>
                <><NavLink to="/autocomplete-spring-expand" title="Autocomplete dropdown spring expand">Autocomplete Spring-expand</NavLink></>
                <><NavLink to="/submit-morph" title="Submit morph: button → loader → check">Submit Morph</NavLink></>
                <><NavLink to="/password-reveal-eye-bounce" title="Password eye icon bounce on tap">Password Eye Bounce</NavLink></>
                <><NavLink to="/stepper-progress-bar" title="Stepper progress bar fills smoothly">Stepper Progress Bar</NavLink></>

                {/* Charts & Media */}
                <h3 className="title" title="Charts & Media">Charts & Media</h3>
                <><NavLink to="/bar-chart-grow" title="Bars grow from baseline (stagger)">Bar Chart Grow</NavLink></>
                <><NavLink to="/line-chart-draw-on" title="Line chart draw-on stroke-dashoffset">Line Chart Draw-on</NavLink></>
                <><NavLink to="/pie-slice-pop-out" title="Pie slice pop-out on hover">Pie Slice Pop-out</NavLink></>
                <><NavLink to="/skeletons-to-data" title="Skeleton shimmer → crossfade to data">Skeletons → Data</NavLink></>
                <><NavLink to="/map-pin-drop" title="Map pin drop with bounce + shadow squash">Map Pin Drop</NavLink></>
                <><NavLink to="/image-lightbox-zoom" title="Thumbnail → full via layoutId">Image Lightbox Zoom</NavLink></>

                {/* Scroll-driven & Storytelling */}
                <h3 className="title" title="Scroll-driven & Storytelling">Scroll-driven & Storytelling</h3>
                <><NavLink to="/reveal-on-scroll" title="Reveal-on-scroll whileInView (once) + stagger">Reveal-on-scroll</NavLink></>
                <><NavLink to="/reading-progress-bar" title="Reading progress bar via useScroll/useTransform">Reading Progress Bar</NavLink></>
                <><NavLink to="/parallax-hero-layers" title="Hero layers with parallax">Parallax Hero Layers</NavLink></>
                <><NavLink to="/scrollytelling-steps" title="Sticky scrollytelling; sections crossfade">Scrollytelling Steps</NavLink></>
                <><NavLink to="/back-to-top-fab" title="Back-to-top FAB appears by scrollY">Back-to-top FAB</NavLink></>

                {/* Enterprise / Table */}
                <h3 className="title" title="Enterprise / Table">Enterprise / Table</h3>
                <><NavLink to="/row-expand-preview" title="Row expand preview height + fade">Row Expand Preview</NavLink></>
                <><NavLink to="/inline-edit-morph" title="Cell → input inline edit morph">Inline Edit Morph</NavLink></>
                <><NavLink to="/bulk-select-toolbar" title="Bulk-select toolbar appears when selection > 0">Bulk-select Toolbar</NavLink></>
                <><NavLink to="/column-resize-ghost-line" title="Column resize ghost line during drag">Column Resize Ghost Line</NavLink></>
                <><NavLink to="/row-insert-toast" title="Row insert toast slides in at position">Row Insert Toast</NavLink></>
                <><NavLink to="/paged-table-transition" title="Paged table transition; new rows rise">Paged Table Transition</NavLink></>

                {/* Advanced / Fancy */}
                <h3 className="title" title="Advanced / Fancy">Advanced / Fancy</h3>
                <><NavLink to="/shared-avatar-morph" title="Shared avatar morph: circle → banner">Shared Avatar Morph</NavLink></>
                <><NavLink to="/fab-to-compose-morph" title="FAB → compose screen morph">FAB → Compose Morph</NavLink></>
                <><NavLink to="/glass-card-condensation" title="Glass card condensation (blur/brightness)">Glass Card Condensation</NavLink></>
                <><NavLink to="/time-slice-streaks" title="Time-slice streaks via clipPath wedges">Time-slice Streaks</NavLink></>
                <><NavLink to="/three-d-card-flip" title="3D card flip on hover (rotateY + perspective)">3D Card Flip</NavLink></>
                <><NavLink to="/three-d-ring-carousel" title="3D ring carousel (rotateY items around center)">3D Ring Carousel</NavLink></>
                <><NavLink to="/drawer-fold" title="Drawer fold - rotateX from top edge">Drawer Fold</NavLink></>
            </div>

            {/* Hide nodes flagged by filter */}
            <style>{`[data-hidden="true"] { display: none !important; }`}</style>
        </Styled.Nav>
    );
};

export default NavListCore;
