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



// Add this to your main.js file
document.addEventListener("DOMContentLoaded", () => {
  // Array of background images
  const backgroundImages = ["./assets/pexels-edward-jenner-4252516.jpg", 
                            "./assets/pexels-estudiodelarts-3987507.jpg",
                            "./assets/pexels-didsss-19856117.jpg",
                            "./assets/pexels-omergulen-20036266.jpg"]; 
  
  let currentIndex = 0;
  
  // This function will run our for loop
  function startBackgroundCycle() {
    // A normal for loop that runs once
    for (let i = 0; i < 1; i++) {
      // Change the background to the current image
      document.body.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
      
      // Move to the next image
      currentIndex++;
      
      // If we reached the end of our images, start over
      if (currentIndex >= backgroundImages.length) {
        currentIndex = 0;
      }
    }
    
    // Call this function again after 5 seconds
    setTimeout(startBackgroundCycle, 5000);
  }
  
  // Set initial background styles
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.transition = 'background-image 1s ease';
  
  // Start the background cycle
  startBackgroundCycle();
  
  // Your existing Rive button code continues below...
  console.log("Rive library loaded:", typeof rive !== 'undefined');
  // ...rest of your code
});