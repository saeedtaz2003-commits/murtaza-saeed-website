# Mobile Charts & Data Presentation Standard v1.0

Approved 13 October 2026 for current corrections and future articles.

Design for the available article width at 320, 375 and 430 CSS pixels and verify desktop as well. Category labels must render at least 14px (prefer 15–16px), key values at least 16px bold, axes/legends 13–14px and source notes 12px. Show values on or near bars. Preserve approved data, chart type, colours, notes and article wording. Responsive label placement may change. Avoid clipping, page overflow and unused canvas space.

Keep approved full-size artwork accessible. Use a mobile-specific presentation when reducing a desktop raster would make labels too small; retain the desktop artwork unchanged. Dense charts need a full-size view or accessible data table. Use readable contrast and the approved purple palette. Do not silently substitute different series, approximations or chart designs.

The current build enhancement in `src/integrations/mobile-charts.mjs` targets only the four explicitly approved Simbisa/Quickmart charts. Other and future artwork is not automatically redesigned. The adjacent Quickmart risk/payout notes remain in the article, in addition to the original full-size view.

Actual mobile browser verification is required before claiming mobile verification passed. Source/build checks cannot establish touch, sticky scrolling or rendered layout behaviour.
