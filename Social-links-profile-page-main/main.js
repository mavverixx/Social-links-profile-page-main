// main.js
document.addEventListener("DOMContentLoaded", function() {
  // Initialize Rive button
  const r = new rive.Rive({
    src: "github-button.riv",
    canvas: document.getElementById("github-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    layout: new rive.Layout({
      fit: rive.Fit.Contain,
      alignment: rive.Alignment.Center
    }),
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
  });

  // GitHub button click handler
  document.getElementById("github-button").addEventListener("click", function() {
    window.open("https://github.com/", "_blank");
  });

  // Initialize GitHub button
const githubRive = new rive.Rive({
  src: "linkedin-button.riv",
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
document.getElementById("github-button").addEventListener("click", function() {
  window.open("https://github.com/", "_blank");
});

// Initialize LinkedIn button (assuming you have a canvas with id "linkedin-button")
const linkedinRive = new rive.Rive({
  src: "Linkedin-button.riv",
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
document.getElementById("linkedin-button").addEventListener("click", function() {
  window.open("https://linkedin.com/", "_blank");
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