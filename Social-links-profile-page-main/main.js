document.addEventListener("DOMContentLoaded", () => {
  // Initialize GitHub button
  const githubRive = new rive.Rive({
    src: "github-button.riv",
    canvas: document.getElementById("github-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    layout: new rive.Layout({
      fit: rive.Fit.Cover,
      alignment: rive.Alignment.Center
    }),
    onLoad: () => {
      githubRive.resizeDrawingSurfaceToCanvas();
    },
  });

  // GitHub button click handler
  document.getElementById("github-button").addEventListener("click", () => {
    window.open("https://github.com/", "_blank");
  });

// Clean initialization for LinkedIn button
// Initialize LinkedIn button with smaller animation
const linkedinRive = new rive.Rive({
  src: "linkedin-button.riv",
  canvas: document.getElementById("linkedin-button"),
  autoplay: true,
  stateMachines: "State Machine 1",
  layout: new rive.Layout({
    fit: rive.Fit.Contain,    // Changed from Cover to Contain
    alignment: rive.Alignment.Cover,
    minX: 2,
    minY: 1,
    maxX: 2,
    maxY: 1
  }),
  onLoad: () => {
    linkedinRive.resizeDrawingSurfaceToCanvas();
  },
});

// LinkedIn button click handler
document.getElementById("linkedin-button").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/rikkihenry/", "_blank");
});
  /*
  document.getElementById("X-button").addEventListener("click", function() {
    console.log("Another button clicked");
    // Do something
  });
  */
    /*
  document.getElementById("instagram-button").addEventListener("click", function() {
    console.log("Another button clicked");
    // Do something
  });
  */
   /*
  document.getElementById("frontend-button").addEventListener("click", function() {
    console.log("Another button clicked");
    // Do something
  });
  */
});