import { Box, CircularProgress } from '@mui/material';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Page from './components/Page';
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/notFound'));

/* =========================
   Animations: Page/Route
   ========================= */
const CurtainReveal = lazy(() => import("./pages/apps/animations/curtainReveal"));
const BookFlip = lazy(() => import('./pages/apps/animations/bookFlip'));
const SlideOverStack = lazy(() => import('./pages/apps/animations/slideOverStack'));
const ParallaxPush = lazy(() => import('./pages/apps/animations/parallaxPush'));
const CrossfadeMicroScale = lazy(() => import('./pages/apps/animations/crossfadeMicroScale'));
const DoorSwing = lazy(() => import('./pages/apps/animations/doorSwing'));
const LiquidCorners = lazy(() => import('./pages/apps/animations/liquidCorners'));
const HeroTeleport = lazy(() => import('./pages/apps/animations/heroTeleport'));
const SplitTransition = lazy(() => import('./pages/apps/animations/splitTransition'));
const BlurDownToSharp = lazy(() => import('./pages/apps/animations/blurDownToSharp'));


/* =========================
   Component Entrances/Layout
   ========================= */
const StaggeredCardRise = lazy(() => import('./pages/apps/componentEntrance/staggeredCardRise'));
const DropInWithBounce = lazy(() => import('./pages/apps/componentEntrance/dropInWithBounce'));
const GrowFromMeasure = lazy(() => import('./pages/apps/componentEntrance/growFromMeasure'));
const PopAndSettle = lazy(() => import('./pages/apps/componentEntrance/popAndSettle'));
const ElasticAccordion = lazy(() => import('./pages/apps/componentEntrance/elasticAccordion'));
const FlipReflow = lazy(() => import('./pages/apps/componentEntrance/flipReflow'));
const GridExplodeToDetail = lazy(() => import('./pages/apps/componentEntrance/gridExplodeToDetail'));
const MasonryShuffle = lazy(() => import('./pages/apps/componentEntrance/masonryShuffle'));


/* =========================
   Gestures / Micro-Interactions
   ========================= */
const DragToDismiss = lazy(() => import('./pages/apps/gestures/dragToDismiss'));
const DragSnapCarousel = lazy(() => import('./pages/apps/gestures/dragSnapCarousel'));
const PullToRefresh = lazy(() => import('./pages/apps/gestures/pullToRefresh'));
const SwipeToArchive = lazy(() => import('./pages/apps/gestures/swipeToArchive'));
const LongPressProgressRing = lazy(() => import('./pages/apps/gestures/longPressProgressRing'));
const HoverPeekTilt = lazy(() => import('./pages/apps/gestures/hoverPeekTilt'));
const MagneticButton = lazy(() => import('./pages/apps/gestures/magneticButton'));
const RailSelector = lazy(() => import('./pages/apps/gestures/railSelector'));


/* =========================
   Lists / Filters / Data Changes
   ========================= */
const FilterMeltAway = lazy(() => import('./pages/apps/listsFiltersDataChanges/filterMeltAway'));
const DiffInOut = lazy(() => import('./pages/apps/listsFiltersDataChanges/diffInOut'));
const DragReorderSort = lazy(() => import('./pages/apps/listsFiltersDataChanges/dragReorderSort'));
const NumberTicker = lazy(() => import('./pages/apps/listsFiltersDataChanges/numberTicker'));
const NewRowHighlight = lazy(() => import('./pages/apps/listsFiltersDataChanges/newRowHighlight'));
const KpiChipCountTick = lazy(() => import('./pages/apps/listsFiltersDataChanges/kpiChipCountTick'));

/* =========================
   Feedback & System Status
   ========================= */
const SuccessMorph = lazy(() => import('./pages/apps/feedbackAndSystemStatuss/successMorph'));
const ErrorShake = lazy(() => import('./pages/apps/feedbackAndSystemStatuss/errorShake'));
const PressRipple = lazy(() => import('./pages/apps/feedbackAndSystemStatuss/pressRipple'));
const SavePulse = lazy(() => import('./pages/apps/feedbackAndSystemStatuss/savePulse'));
const CopyConfirmationFlash = lazy(() => import('./pages/apps/feedbackAndSystemStatuss/copyConfirmationFlash'));
const OfflineBannerSlideDown = lazy(() => import('./pages/apps/feedbackAndSystemStatuss/offlineBannerSlideDown'));


/* =========================
   Modals / Drawers / Overlays
   ========================= */
const FrostedGlassModal = lazy(() => import('./pages/apps/modalsDrawersOverlays/frostedGlassModal'));
const BottomSheetRubberBand = lazy(() => import('./pages/apps/modalsDrawersOverlays/bottomSheetRubberBand'));
const ContextMenuMorph = lazy(() => import('./pages/apps/modalsDrawersOverlays/contextMenuMorph'));
const SpotlightOverlay = lazy(() => import('./pages/apps/modalsDrawersOverlays/spotlightOverlay'));
const MultiStepModal = lazy(() => import('./pages/apps/modalsDrawersOverlays/multiStepModal'));


/* =========================
   Navigation & Tabs
   ========================= */
const UnderlineGlide = lazy(() => import('./pages/apps/navigationAndTabs/underlineGlide'));
const BreadcrumbCrumbEntrance = lazy(() => import('./pages/apps/navigationAndTabs/breadcrumbCrumbEntrance'));
const SectionHeaderStickyShrink = lazy(() => import('./pages/apps/navigationAndTabs/sectionHeaderStickyShrink'));
const SideNavCollapse = lazy(() => import('./pages/apps/navigationAndTabs/SideNavCollapse'));
const CommandPaletteZoomIn = lazy(() => import('./pages/apps/navigationAndTabs/commandPaletteZoomIn'));


/* =========================
   Forms & Inputs
   ========================= */
const FieldFocusGlow = lazy(() => import('./pages/apps/formsAndInputs/fieldFocusGlow'));
const InvalidFieldMicroShake = lazy(() => import('./pages/apps/formsAndInputs/invalidFieldMicroShake'));
const AutocompleteSpringExpand = lazy(() => import('./pages/apps/formsAndInputs/autocompleteSpringExpand'));
const SubmitMorph = lazy(() => import('./pages/apps/formsAndInputs/submitMorph'));
const PasswordRevealEyeBounce = lazy(() => import('./pages/apps/formsAndInputs/passwordRevealEyeBounce'));
const StepperProgressBar = lazy(() => import('./pages/apps/formsAndInputs/stepperProgressBar'));


/* =========================
   Charts & Media
   ========================= */
const BarChartGrow = lazy(() => import('./pages/apps/chartsAndMedia/barChartGrow'));
const LineChartDrawOn = lazy(() => import('./pages/apps/chartsAndMedia/lineChartDrawOn'));
const PieSlicePopOut = lazy(() => import('./pages/apps/chartsAndMedia/pieSlicePopOut'));
const SkeletonsToData = lazy(() => import('./pages/apps/chartsAndMedia/skeletonsToData'));
const MapPinDrop = lazy(() => import('./pages/apps/chartsAndMedia/mapPinDrop'));
const ImageLightboxZoom = lazy(() => import('./pages/apps/chartsAndMedia/imageLightboxZoom'));


/* =========================
   Scroll-Driven & Storytelling
   ========================= */
const RevealOnScroll = lazy(() => import('./pages/apps/scrollDrivenAndStorytelling/revealOnScroll'));
const ReadingProgressBar = lazy(() => import('./pages/apps/scrollDrivenAndStorytelling/readingProgressBar'));
const ParallaxHeroLayers = lazy(() => import('./pages/apps/scrollDrivenAndStorytelling/parallaxHeroLayers'));
const ScrollytellingSteps = lazy(() => import('./pages/apps/scrollDrivenAndStorytelling/scrollytellingSteps'));
const BackToTopFab = lazy(() => import('./pages/apps/scrollDrivenAndStorytelling/backToTopFab'));


/* =========================
   Enterprise / Table
   ========================= */
const RowExpandPreview = lazy(() => import('./pages/apps/enterpriseTable/rowExpandPreview'));
const InlineEditMorph = lazy(() => import('./pages/apps/enterpriseTable/inlineEditMorph'));
const BulkSelectToolbar = lazy(() => import('./pages/apps/enterpriseTable/bulkSelectToolbar'));
const ColumnResizeGhostLine = lazy(() => import('./pages/apps/enterpriseTable/columnResizeGhostLine'));
const RowInsertToast = lazy(() => import('./pages/apps/enterpriseTable/rowInsertToast'));
const PagedTableTransition = lazy(() => import('./pages/apps/enterpriseTable/pagedTableTransition'));


/* =========================
   Advanced / Fancy
   ========================= */
const SharedAvatarMorph = lazy(() => import('./pages/placeholder'));
const FabToComposeMorph = lazy(() => import('./pages/placeholder'));
const GlassCardCondensation = lazy(() => import('./pages/placeholder'));
const TimeSliceStreaks = lazy(() => import('./pages/placeholder'));
const ThreeDCardFlip = lazy(() => import('./pages/placeholder'));
const ThreeDRingCarousel = lazy(() => import('./pages/placeholder'));
const DrawerFold = lazy(() => import('./pages/placeholder'));

const AppRoutes = () => {
    const location = useLocation();
    const page = (node) => <Page>{node}</Page>;

    return (
        <>
            <Suspense
                fallback={
                    <Box
                        sx={{
                            width: "100vw", height: "100vh",
                            display: "flex", alignItems: "center", justifyContent: "center"
                        }}
                    >
                        <CircularProgress />
                    </Box>
                }
            >
                <AnimatePresence initial={false} mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />

                        {/* Page / Route */}
                        <Route path="/curtain-reveal" element={<CurtainReveal />} />
                        <Route path="/book-flip" element={<BookFlip />} />
                        <Route path="/slide-over-stack" element={<SlideOverStack />} />
                        <Route path="/parallax-push" element={<ParallaxPush />} />
                        <Route path="/crossfade-micro-scale" element={<CrossfadeMicroScale />} />
                        <Route path="/door-swing" element={<DoorSwing />} />
                        <Route path="/liquid-corners" element={<LiquidCorners />} />
                        <Route path="/hero-teleport" element={<HeroTeleport />} />
                        <Route path="/split-transition" element={<SplitTransition />} />
                        <Route path="/blur-down-to-sharp" element={<BlurDownToSharp />} />

                        {/* Component Entrances / Layout */}
                        <Route path="/staggered-card-rise" element={<StaggeredCardRise />} />
                        <Route path="/drop-in-with-bounce" element={<DropInWithBounce />} />
                        <Route path="/grow-from-measure" element={<GrowFromMeasure />} />
                        <Route path="/pop-and-settle" element={<PopAndSettle />} />
                        <Route path="/elastic-accordion" element={<ElasticAccordion />} />
                        <Route path="/flip-reflow" element={<FlipReflow />} />
                        <Route path="/grid-explode-to-detail" element={<GridExplodeToDetail />} />
                        <Route path="/masonry-shuffle" element={<MasonryShuffle />} />

                        {/* Gestures / Micro-Interactions */}
                        <Route path="/drag-to-dismiss" element={<DragToDismiss />} />
                        <Route path="/drag-snap-carousel" element={<DragSnapCarousel />} />
                        <Route path="/pull-to-refresh" element={<PullToRefresh />} />
                        <Route path="/swipe-to-archive" element={<SwipeToArchive />} />
                        <Route path="/long-press-progress-ring" element={<LongPressProgressRing />} />
                        <Route path="/hover-peek-tilt" element={<HoverPeekTilt />} />
                        <Route path="/magnetic-button" element={<MagneticButton />} />
                        <Route path="/rail-selector" element={<RailSelector />} />

                        {/* Lists / Filters / Data Changes */}
                        <Route path="/filter-melt-away" element={<FilterMeltAway />} />
                        <Route path="/diff-in-out" element={<DiffInOut />} />
                        <Route path="/drag-reorder-sort" element={<DragReorderSort />} />
                        <Route path="/number-ticker" element={<NumberTicker />} />
                        <Route path="/new-row-highlight" element={<NewRowHighlight />} />
                        <Route path="/kpi-chip-count-tick" element={<KpiChipCountTick />} />

                        {/* Feedback & System Status */}
                        <Route path="/success-morph" element={<SuccessMorph />} />
                        <Route path="/error-shake" element={<ErrorShake />} />
                        <Route path="/press-ripple" element={<PressRipple />} />
                        <Route path="/save-pulse" element={<SavePulse />} />
                        <Route path="/copy-confirmation-flash" element={<CopyConfirmationFlash />} />
                        <Route path="/offline-banner-slide-down" element={<OfflineBannerSlideDown />} />

                        {/* Modals / Drawers / Overlays */}
                        <Route path="/frosted-glass-modal" element={<FrostedGlassModal />} />
                        <Route path="/bottom-sheet-rubber-band" element={<BottomSheetRubberBand />} />
                        <Route path="/context-menu-morph" element={<ContextMenuMorph />} />
                        <Route path="/spotlight-overlay" element={<SpotlightOverlay />} />
                        <Route path="/multi-step-modal" element={<MultiStepModal />} />

                        {/* Navigation & Tabs */}
                        <Route path="/underline-glide" element={<UnderlineGlide />} />
                        <Route path="/breadcrumb-crumb-entrance" element={<BreadcrumbCrumbEntrance />} />
                        <Route path="/section-header-sticky-shrink" element={<SectionHeaderStickyShrink />} />
                        <Route path="/side-nav-collapse" element={<SideNavCollapse />} />
                        <Route path="/command-palette-zoom-in" element={<CommandPaletteZoomIn />} />

                        {/* Forms & Inputs */}
                        <Route path="/field-focus-glow" element={<FieldFocusGlow />} />
                        <Route path="/invalid-field-micro-shake" element={<InvalidFieldMicroShake />} />
                        <Route path="/autocomplete-spring-expand" element={<AutocompleteSpringExpand />} />
                        <Route path="/submit-morph" element={<SubmitMorph />} />
                        <Route path="/password-reveal-eye-bounce" element={<PasswordRevealEyeBounce />} />
                        <Route path="/stepper-progress-bar" element={<StepperProgressBar />} />

                        {/* Charts & Media */}
                        <Route path="/bar-chart-grow" element={<BarChartGrow />} />
                        <Route path="/line-chart-draw-on" element={<LineChartDrawOn />} />
                        <Route path="/pie-slice-pop-out" element={<PieSlicePopOut />} />
                        <Route path="/skeletons-to-data" element={<SkeletonsToData />} />
                        <Route path="/map-pin-drop" element={<MapPinDrop />} />
                        <Route path="/image-lightbox-zoom" element={<ImageLightboxZoom />} />

                        {/* Scroll-Driven & Storytelling */}
                        <Route path="/reveal-on-scroll" element={<RevealOnScroll />} />
                        <Route path="/reading-progress-bar" element={<ReadingProgressBar />} />
                        <Route path="/parallax-hero-layers" element={<ParallaxHeroLayers />} />
                        <Route path="/scrollytelling-steps" element={<ScrollytellingSteps />} />
                        <Route path="/back-to-top-fab" element={<BackToTopFab />} />

                        {/* Enterprise / Table */}
                        <Route path="/row-expand-preview" element={<RowExpandPreview />} />
                        <Route path="/inline-edit-morph" element={<InlineEditMorph />} />
                        <Route path="/bulk-select-toolbar" element={<BulkSelectToolbar />} />
                        <Route path="/column-resize-ghost-line" element={<ColumnResizeGhostLine />} />
                        <Route path="/row-insert-toast" element={<RowInsertToast />} />
                        <Route path="/paged-table-transition" element={<PagedTableTransition />} />

                        {/* Advanced / Fancy */}
                        <Route path="/shared-avatar-morph" element={<SharedAvatarMorph />} />
                        <Route path="/fab-to-compose-morph" element={<FabToComposeMorph />} />
                        <Route path="/glass-card-condensation" element={<GlassCardCondensation />} />
                        <Route path="/time-slice-streaks" element={<TimeSliceStreaks />} />
                        <Route path="/three-d-card-flip" element={<ThreeDCardFlip />} />
                        <Route path="/three-d-ring-carousel" element={<ThreeDRingCarousel />} />
                        <Route path="/drawer-fold" element={<DrawerFold />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AnimatePresence>
            </Suspense>
        </>
    );
};

export default AppRoutes;
