# Mobile Charts & Data Presentation Standard v1.0

Approved 13 October 2026 for current corrections and future articles.

Design for the available article width at 320, 375 and 430 CSS pixels and verify desktop as well. Category labels must render at least 14px (prefer 15–16px), key values at least 16px bold, axes/legends 13–14px and source notes 12px. Show values on or near bars. Preserve approved data, chart type, colours, notes and article wording. Responsive label placement may change. Avoid clipping, page overflow and unused canvas space.

Keep approved full-size artwork accessible. Use a mobile-specific presentation when reducing a desktop raster would make labels too small; retain the desktop artwork unchanged. Dense charts need a full-size view or accessible data table. Use readable contrast and the approved purple palette. Do not silently substitute different series, approximations or chart designs.

The current build enhancement in `src/integrations/mobile-charts.mjs` targets only the four explicitly approved Simbisa/Quickmart charts. Other and future artwork is not automatically redesigned. The adjacent Quickmart risk/payout notes remain in the article, in addition to the original full-size view.

Actual mobile browser verification is required before claiming mobile verification passed. Source/build checks cannot establish touch, sticky scrolling or rendered layout behaviour.

## Desktop typography (approved 13 October evening)

Use category labels 16–18px medium, key values 18–20px bold, axes 14–15px medium, axis titles/legends 15–16px medium, and sources 13–14px. Keep text as native responsive labels when scaling a bitmap would fall below those sizes. Preserve data, chart type, colours and scales. The four current approved chart presentations share the responsive build enhancement; original artwork remains available through each full-size link. Future charts require their own approved data/rendering definition and rendered desktop/mobile verification.

## Latest mobile and full-view revision (13 October, 9 pm batch)

Mobile targets supersede v1.0: complete titles 20–22px bold; categories 16–18px; values 18–20px bold; axes 15–16px; sources 13–14px. Reflow rather than shrink. Every title, subtitle, legend, point/bar, axis and note must fit the viewport width by default at 320/375/430px, with optional browser zoom. Full-size links now use HTML chart viewers with the same rendering and complete context; they do not open the Android/browser raw-image viewer. Original artwork remains stored unchanged. Keep the approved purple solid 3% and dark dashed 5% definitions and the exact contribution calculation. Real mobile testing is still required to establish rendered fit and interaction behaviour.
