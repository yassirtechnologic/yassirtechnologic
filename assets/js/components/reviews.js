/**
 * Until a moderated backend is connected, never submit or persist review data.
 * The disabled button alone does not prevent implicit keyboard submission.
 */
export function initReviews() {
  document
    .getElementById("testimonialForm")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();
    });
}
