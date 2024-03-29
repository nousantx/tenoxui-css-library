let tenox_lib_style = {
  // Aspect Ratio
  ".aspect-auto": "ratio-auto",
  ".aspect-square": "ratio-1/1",
  ".aspect-video": "ratio-[tx__video]",
  ".aspect-poster": "ratio-[tx__poster]",
  // Display
  ".block": "display-block",
  ".inline-block": "display-[tenox__inline-block]",
  ".inline": "display-inline",
  ".flex": "display-flex",
  ".inline-flex": "display-[tenox__inline-flex]",
  ".grid": "display-grid",
  ".inline-grid": "display-[tenox__inline-grid]",
  ".contents": "display-contents",
  ".list-item": "display-[tenox__list-item]",
  ".hidden, .none": "display-none",
  // Position
  ".static": "position-static",
  ".fixed": "position-fixed",
  ".absolute": "position-absolute",
  ".relative": "position-relative",
  ".sticky": "position-sticky",
  // Justify and Align
  ".flex-row": "fd-row",
  ".flex-row-reverse": "fd-[tenox__row-rev]",
  ".flex-col": "fd-column",
  ".flex-col-reverse": "fd-[tenox__col-rev]",
  ".flex-wrap": "flex-wrap-wrap",
  ".flex-wrap-reverse": "flex-wrap-[tenox__wrap-rev]",
  ".flex-nowrap": "flex-wrap-nowrap",
  ".flex-1": "flex-0%",
  ".flex-auto": "auto-flex-auto",
  ".flex-initial": "initial-flex-auto",
  ".flex-none": "flex-none",
  ".justify-normal": "jc-normal",
  ".justify-start": "jc-[tenox__fx-start]",
  ".justify-end": "jc-[tenox__fx-end]",
  ".justify-center": "jc-center",
  ".justify-between": "jc-[tenox__s-between]",
  ".justify-around": "jc-[tenox__s-around]",
  ".justify-evenly": "jc-[tenox__s-evenly]",
  ".justify-stretch": "jc-stretch",
  ".justify-items-start": "ji-start",
  ".justify-items-end": "ji-end",
  ".justify-items-center": "ji-center",
  ".justify-items-stretch": "ji-stretch",
  ".justify-self-auto": "js-auto",
  ".justify-self-start": "js-start",
  ".justify-self-end": "js-end",
  ".justify-self-center": "js-center",
  ".justify-self-stretch": "js-stretch",
  ".content-normal": "ac-normal",
  ".content-center": "ac-center",
  ".content-start": "ac-[tenox__fx-start]",
  ".content-end": "ac-[tenox__fx-end]",
  ".content-between": "ac-[tenox__s-between]",
  ".content-around": "ac-[tenox__s-around]",
  ".content-evenly": "ac-[tenox__s-evenly]",
  ".content-baseline": "ac-baseline",
  ".content-stretch": "ac-stretch",
  ".items-baseline": "ai-baseline",
  ".items-start": "ai-[tenox__fx-start]",
  ".items-end": "ai-[tenox__fx-end]",
  ".items-center, .ai-ctr": "ai-center",
  ".items-stretch, .ai-full": "ai-stretch",
  ".self-auto": "as-auto",
  ".self-start": "as-[tenox__fx-start]",
  ".self-end": "as-[tenox__fx-end]",
  ".self-center": "as-center",
  ".self-stretch": "as-stretch",
  ".self-baseline": "as-baseline",
  // Font and Text
  ".font-thin": "fw-100",
  ".font-extralight": "fw-200",
  ".font-light": "fw-300",
  ".font-normal": "fw-400",
  ".font-medium": "fw-500",
  ".font-semibold": "fw-600",
  ".font-bold": "fw-700",
  ".font-extrabold": "fw-800",
  ".font-black": "fw-900",
  ".text-left": "ta-left",
  ".text-center": "ta-center",
  ".text-right": "ta-right",
  ".text-justify": "ta-justify",
  ".text-start": "ta-start",
  ".text-end": "ta-end",
  ".underline": "text-deco-line-underline",
  ".overline": "text-deco-line-overline",
  ".line-through": "text-deco-line-[tenox__line-through]",
  ".no-underline": "text-deco-line-none",
  ".uppercase": "tn-uppercase",
  ".lowercase": "tn-lowercase",
  ".capitalize": "tn-capitalize",
  ".normal-case": "tn-none",
  ".truncate": "over-hidden text-over-ellipsis white-space-nowrap",
  ".text-ellipsis": "text-over-ellipsis",
  ".text-clip": "text-over-clip",
  // Border
  ".rounded-none": "br-0px",
  ".rounded-sm": "br-0.125rem",
  ".rounded": "br-0.25rem",
  ".rounded-md": "br-0.375rem",
  ".rounded-lg": "br-0.5rem",
  ".rounded-xl": "br-0.75rem",
  ".rounded-2xl": "br-1rem",
  ".rounded-3xl": "br-1.5rem",
  ".rounded-full": "br-9999px",
  ".full-round": "br-50%",
  // Background
  ".bg-fixed": "bg-attach-fixed",
  ".bg-local": "bg-attach-local",
  ".bg-scroll": "bg-attach-scroll",
  ".bg-clip-border": "bg-clip-[tenox__border-box]",
  ".bg-clip-padding": "bg-clip-[tenox__padding-box]",
  ".bg-clip-content": "bg-clip-[tenox__content-box]",
  ".bg-clip-text": "bg-clip-text",
  ".bg-origin-border": "bg-origin-[tenox__border-box]",
  ".bg-origin-padding": "bg-origin-[tenox__padding-box]",
  ".bg-origin-content": "bg-origin-[tenox__content-box]",
  ".bg-bottom": "bg-loc-bottom",
  ".bg-center": "bg-loc-center",
  ".bg-left": "bg-loc-left",
  ".bg-left-bottom": "bg-loc-[tenox__left-bottom]",
  ".bg-left-top": "bg-loc-[tenox__left-top]",
  ".bg-right": "bg-loc-right",
  ".bg-right-bottom": "bg-loc-[tenox__right-bottom]",
  ".bg-right-top": "bg-loc-[tenox__right-top]",
  ".bg-top": "bg-loc-top",
  ".bg-repeat": "bg-repeat-repeat",
  ".bg-no-repeat": "bg-repeat-[tenox__no-repeat]",
  ".bg-repeat-x": "bg-repeat-[tenox__x-repeat]",
  ".bg-repeat-y": "bg-repeat-[tenox__y-repeat]",
  ".bg-repeat-round": "bg-repeat-round",
  ".bg-repeat-space": "bg-repeat-space",
  // Isolation
  ".isolate": "isolation-isolate",
  ".isolation-auto": "isolation-auto",
  // Flex Direction
  // Flex Grow
  ".grow": "fx-grow-1",
  ".grow-0": "fx-grow-0",
  // Flex Shrink
  ".shrink": "fx-shrink-1",
  ".shrink-0": "fx-shrink-0",
  // Defined by me :)
  "[pre-flex],.fx-ctr,.flex-center,.flex-wrap, .fx-wrap,.fx-ctr, .flex-center,.fx-end,.fx-str, .flex-start,.fx-end-col, .flex-end-col,.fx-str-col, .flex-str-col,.fx-ctr-col, .flex-center-column":
    "display-flex",
  ".flex-wrap, .fx-wrap": "fx-wrap-wrap",
  ".fx-ctr, .flex-center": "flex-parent-center",
  ".fx-ctr-col, .flex-center-column": "flex-parent-center fd-column",
  ".fx-str-col, .flex-str-col": "flex-parent-[flex-start] fd-column",
  ".fx-end-col, .flex-end-col": "flex-parent-[flex-start] fd-column",
  ".fx-str, .flex-start": "flex-parent-[flex-start]",
  ".fx-end": "flex-parent-[flex-end]",
  ".w-full,.w-max,.w-mx": "w-100%",
  ".h-full,.h-max,.h-mx": "h-100%",
  ".box-full": "box-100%",
  ".ai-str, .ai-start": "ai-[flex-start]",
  ".ai-end": "ai-[flex-end]",
  ".ai-ctr": "ai-center",
  ".ai-full": "ai-stretch",
  ".jc-str, .jc-start": "jc-[flex-start]",
  ".jc-end": "jc-[flex-end]",
  ".jc-ctr": "jc-center",
  ".space-b": "jc-[sb]",
  ".space-e": "jc-[sa]",
  ".space-a": "jc-[sa]",
  ".fd-col": "fd-column",
  ".fd-clm": "fd-column",
  ".round, .circle": "br-50%",
};
