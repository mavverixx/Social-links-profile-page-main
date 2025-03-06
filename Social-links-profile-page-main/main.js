document.addEventListener("DOMContentLoaded", () => {
console.log("Rive library loaded:", typeof rive !== 'undefined');


// GitHub button
try {
  const githubButton = new rive.Rive({
    src: "rive/github-button.riv",
    canvas: document.getElementById("github-button"),
    stateMachines: "State Machine 1",
    layout: new rive.Layout({
      // fit: rive.Fit.Contain,
      alignment: rive.Alignment.TopCenter
      // fit: rive.Fit.Cover
     }),
    autoplay: true,
  });
} catch (error) {
  console.error("Error loading GitHub button:", error);
}

// LinkedIn button
try {
  const linkedinButton = new rive.Rive({
    src: "rive/linkedin-button.riv",
    canvas: document.getElementById("linkedin-button"),
    isTouchScrollEnabled: true, // Add this to match GitHub button
    stateMachines: "State Machine 1",
    layout: new rive.Layout({
      // fit: rive.Fit.FitWidth,
      // minX: 50,
      // minY: 50,
      // maxX: 240,
      // maxY: 44,
      alignment: rive.Alignment.Center,
      // fit: rive.Fit.Cover, // or try Fit.Fill if you want an exact match (even if it stretches)
    }),
    autoplay: true,
  });
} catch (error) {
  console.error("Error loading LinkedIn button:", error);
}
  // X button
  const XButton = new rive.Rive({
    src: "rive/x-button.riv", // Make sure file path is correct
    canvas: document.getElementById("x-button"),
    stateMachines: "State Machine 1",
    layout: new rive.Layout({
      // fit: rive.Fit.Contain,
      alignment: rive.Alignment.TopCenter
      // fit: rive.Fit.Cover
     }),
     autoplay: true,
  });
  
  // Instagram button
  const instagramButton = new rive.Rive({
    src: "rive/instagram_button.riv", // Make sure file path is correct
    canvas: document.getElementById("instagram-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    layout: new rive.Layout({
      // fit: rive.Fit.Contain,
      alignment: rive.Alignment.TopCenter
      // fit: rive.Fit.Cover
     }),

  });
  
  // Frontend button
  const frontendButton = new rive.Rive({
    src: "rive/frontend-button.riv", // Make sure file path is correct
    canvas: document.getElementById("frontend-button"),
    stateMachines: "State Machine 1",
    layout: new rive.Layout({
      // fit: rive.Fit.Contain,
      alignment: rive.Alignment.TopCenter
      // fit: rive.Fit.Cover
     }),
     autoplay: true,
  });
});
