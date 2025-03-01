document.addEventListener("DOMContentLoaded", () => {
  // Configuration for all buttons
  const buttonConfigs = [
    {
      id: "github-button",
      src: "github-button.riv",
      url: "https://github.com/mavverixx"
    },
    {
      id: "linkedin-button",
      src: "linkedin-button.riv",
      url: "https://www.linkedin.com/in/rikkihenry/"
    },
    {
      id: "twitter-button",
      src: "twitter-button.riv",
      url: "https://twitter.com/"
    },
    {
      id: "instagram-button",
      src: "instagram-button.riv",
      url: "https://www.instagram.com/"
    },
    {
      id: "frontend-button",
      src: "frontend-button.riv",
      url: "https://www.frontendmentor.io/"
    }
  ];
// Initialize all Rive buttons using for...of instead of forEach
for (const config of buttonConfigs) {
  const element = document.getElementById(config.id);
  // Skip if element doesn't exist
  if (!element) continue;

  const riveInstance = new rive.Rive({
    src: config.src,
    canvas: element,
    autoplay: true,
    stateMachines: "State Machine 1",
    layout: new rive.Layout({
      fit: rive.Fit.Contain,
      alignment: rive.Alignment.Center
    }),
    onLoad: () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
    }
  });

  // Add click event listener
  element.addEventListener("click", () => {
    window.open(config.url, "_blank");
  });
}
});