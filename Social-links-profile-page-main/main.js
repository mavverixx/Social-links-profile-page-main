// main.js
document.addEventListener("DOMContentLoaded", () => {
  // Initialize GitHub button
  const githubRive = new rive.Rive({
    src: "github-button.riv",
    canvas: document.getElementById("github-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    layout: new rive.Layout({
      fit: rive.Fit.Contain,
      alignment: rive.Alignment.Center
    }),
    onLoad: () => {
      githubRive.resizeDrawingSurfaceToCanvas();
    },
  });

  // Add click event to GitHub button
  document.getElementById("github-button").addEventListener("click", () => {
    window.open("https://github.com/", "_blank");
  });

  // Initialize LinkedIn button
  const linkedinRive = new rive.Rive({
    src: "linkedin-button.riv", // Ensure filename case is consistent with actual file
    canvas: document.getElementById("linkedin-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    layout: new rive.Layout({
      fit: rive.Fit.Contain,
      alignment: rive.Alignment.Center
    }),
    onLoad: () => {
      linkedinRive.resizeDrawingSurfaceToCanvas();
    },
  });

  // Add click event to LinkedIn button
  document.getElementById("linkedin-button").addEventListener("click", () => {
    window.open("https://linkedin.com/", "_blank");
  });

  // Uncomment and implement these if needed
  /*
  document.getElementById("X-button").addEventListener("click", () => {
    window.open("https://x.com/", "_blank");
  });
  
  document.getElementById("instagram-button").addEventListener("click", () => {
    window.open("https://instagram.com/", "_blank");
  });
  
  document.getElementById("frontend-button").addEventListener("click", () => {
    // Add appropriate action
  });
  */
});