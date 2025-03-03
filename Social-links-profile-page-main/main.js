document.addEventListener("DOMContentLoaded", () => {
  console.log("Rive library loaded:", typeof rive !== 'undefined');
  // GitHub button
  const githubButton = new rive.Rive({
    src: "rive/github_button.riv", // Make sure file path is correct
    canvas: document.getElementById("github-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      githubButton.resizeDrawingSurfaceToCanvas();
    },
  });
  
  // LinkedIn button
  const linkedinButton = new rive.Rive({
    src: "rive/linkedin_button.riv", // Make sure file path is correct
    canvas: document.getElementById("linkedin-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      linkedinButton.resizeDrawingSurfaceToCanvas();
    },
  });
  
  // Twitter button
  const twitterButton = new rive.Rive({
    src: "rive/twitter_button.riv", // Make sure file path is correct
    canvas: document.getElementById("twitter-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      twitterButton.resizeDrawingSurfaceToCanvas();
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
    src: "rive/frontend_button.riv", // Make sure file path is correct
    canvas: document.getElementById("frontend-button"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      frontendButton.resizeDrawingSurfaceToCanvas();
    },
  });
});
  // Configuration for all buttons
//   const buttonConfigs = [
//     {
//       id: "github-button",
//       src: "github-button.riv",
//       url: "https://github.com/mavverixx"
//     },
//     {
//       id: "linkedin-button",
//       src: "linkedin-button.riv",
//       url: "https://www.linkedin.com/in/rikkihenry/"
//     },
//     {
//       id: "twitter-button",
//       src: "twitter-button.riv",
//       url: "https://twitter.com/"
//     },
//     {
//       id: "instagram-button",
//       src: "instagram-button.riv",
//       url: "https://www.instagram.com/"
//     },
//     {
//       id: "frontend-button",
//       src: "frontend-button.riv",
//       url: "https://www.frontendmentor.io/"
//     }
//   ];
// // Initialize all Rive buttons using for...of instead of forEach
// for (const config of buttonConfigs) {
//   const element = document.getElementById(config.id);
//   // Skip if element doesn't exist
//   if (!element) continue;

//   const riveInstance = new rive.Rive({
//     src: config.src,
//     canvas: element,
//     autoplay: true,
//     stateMachines: "State Machine 1",
//     layout: new rive.Layout({
//       fit: rive.Fit.Contain,
//       alignment: rive.Alignment.Center
//     }),
//     onLoad: () => {
//       riveInstance.resizeDrawingSurfaceToCanvas();
//     }
//   });

//   // Add click event listener
//   element.addEventListener("click", () => {
//     window.open(config.url, "_blank");
//   });
// }
