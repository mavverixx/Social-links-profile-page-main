document.addEventListener("DOMContentLoaded", () => {
  console.log("Rive library loaded:", typeof rive !== 'undefined');


// GitHub button
try {
  const githubButton = new rive.Rive({
    src: "rive/github-button.riv",
    canvas: document.getElementById("github-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      console.log("GitHub button loaded successfully");
      githubButton.resizeDrawingSurfaceToCanvas();
      githubButton.layout({
        fit: 'contain',
        alignment: 'center'
      });
    },
  });
} catch (error) {
  console.error("Error loading GitHub button:", error);
}
  // LinkedIn button
  const linkedinButton = new rive.Rive({
    src: "rive/linkedin-button.riv", // Make sure file path is correct
    canvas: document.getElementById("linkedin-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      linkedinButton.resizeDrawingSurfaceToCanvas();
    },
  });
  
  // X button
  const XButton = new rive.Rive({
    src: "rive/x_button.riv", // Make sure file path is correct
    canvas: document.getElementById("x-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      XButton.resizeDrawingSurfaceToCanvas();
    },
  });
  
  // Instagram button
  const instagramButton = new rive.Rive({
    src: "rive/instagram_button.riv", // Make sure file path is correct
    canvas: document.getElementById("instagram-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      instagramButton.resizeDrawingSurfaceToCanvas();
    },
  });
  
  // Frontend button
  const frontendButton = new rive.Rive({
    src: "rive/frontend-button.riv", // Make sure file path is correct
    canvas: document.getElementById("frontend-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      frontendButton.resizeDrawingSurfaceToCanvas();
    },
  });
});
