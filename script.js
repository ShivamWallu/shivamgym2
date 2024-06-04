// https://chatgpt.com/c/f7e6f14a-8105-43f7-958b-4feb010ef4a1
  


// Initialize Swiper with pagination
let swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination2",
    type: "progressbar",
  },
});

var swipernew = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    clickable: true,
  },
});



  // ===============================================================================================


 // Remove this line:
// document.getElementById("openBtn").addEventListener("click", function() {
//   document.getElementById("popupForm").style.display = "block";
// });

document.getElementById("closeBtn").addEventListener("click", function() {
  closePopup();
});

window.onclick = function(event) {
  var modal = document.getElementById("popupForm");
  if (event.target == modal) {
    closePopup();
  }
}

function checkAndPlayVideo(containerId, videoId) {
    const gymDataCookie = getCookie("GymData");
    console.log("GymData cookie:", gymDataCookie);

    if (gymDataCookie) {
        console.log("Cookie found, playing video...");
        closePopup();  // Ensure popup is closed if already open
        playVideo(containerId, videoId);
    } else {
        console.log("Cookie not found, opening popup...");
        openPopup();
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
    return null;
}




function openPopup() {
  var popupForm = document.getElementById("popupForm");
  popupForm.style.display = "flex";
  // Removing the line that disables background scrolling
}

function closePopup() {
  var popupForm = document.getElementById("popupForm");
  popupForm.style.display = "none";
  // Removing the line that enables background scrolling
}

// Attach the closePopup function to the close button
document.addEventListener('DOMContentLoaded', (event) => {
  var closeButton = document.querySelector(".close");
  closeButton.addEventListener("click", closePopup);
});




function playVideo(containerId, videoId) {
    var container = document.getElementById(containerId);
    var video = container.querySelector("video");
    if (!video) return;

    console.log("Playing video in container:", containerId);

    pauseAllVideos();

    container.style.zIndex = 9999;
    video.play();

    var upperVideo = document.getElementById(videoId);
    if (upperVideo) {
        upperVideo.play();
    }

    var swiperInstances = document.querySelectorAll(".swiper");
    swiperInstances.forEach(function (swiperInstance) {
        var slideIndex = Array.from(swiperInstance.querySelectorAll(".swiper-slide")).findIndex(function (slide) {
            return slide.contains(container);
        });

        if (slideIndex !== -1) {
            var swiper = swiperInstance.swiper;
            swiper.slideTo(slideIndex);
        }
    });
}

function autoPlayUpperVideos() {
    var upperVideos = document.querySelectorAll(".swipernew video");
    pauseAllVideos();
    upperVideos.forEach(function (video) {
        video.play();
    });
}

function pauseAllVideos() {
    var allVideos = document.querySelectorAll(".swiper video");
    allVideos.forEach(function (video) {
        if (!video.paused) {
            video.pause();
        }
    });
}




  // ========================================================================================================

 
  // function playVideo(containerId, videoId) {
  //   var container = document.getElementById(containerId);
  //   var video = container.querySelector("video");
  //   if (!video) return; // Return if video element is not found

  //   // Pause all videos
  //   pauseAllVideos();

  //   // Set z-index to bring the container to the front
  //   container.style.zIndex = 9999;

  //   // Play the video
  //   video.play();

  //   // Play the corresponding video in the upper div of both sets
  //   var upperVideo = document.getElementById(videoId);
  //   if (upperVideo) {
  //     upperVideo.play();
  //   }

  //   // Find the index of the swiper slide containing the played video
  //   var swiperInstances = document.querySelectorAll(".swiper");
  //   swiperInstances.forEach(function (swiperInstance) {
  //     var slideIndex = Array.from(
  //       swiperInstance.querySelectorAll(".swiper-slide")
  //     ).findIndex(function (slide) {
  //       return slide.contains(container);
  //     });

  //     // If the slide index is found, change the active slide
  //     if (slideIndex !== -1) {
  //       var swiper = swiperInstance.swiper;
  //       swiper.slideTo(slideIndex);
  //     }
  //   });
  // }

  // function autoPlayUpperVideos() {
  //   // Select all videos from both sets
  //   var upperVideos = document.querySelectorAll(".swipernew video");
  //   // Pause all videos first
  //   pauseAllVideos();
  //   // Play all upper videos
  //   upperVideos.forEach(function (video) {
  //     video.play();
  //   });
  // }

  // function pauseAllVideos() {
  //   // Pause all videos from both sets
  //   var allVideos = document.querySelectorAll(".swiper video");
  //   allVideos.forEach(function (video) {
  //     if (!video.paused) {
  //       video.pause();
  //     }
  //   });
  // }

  // ------------------------------------------------------------------------------------------------

  function startHoverWithId(buttonId) {
    const button = document.getElementById(buttonId);
    let isHovered = false;

    function toggleHover() {
      if (!isHovered) {
        button.classList.add("auto-hover");
        setTimeout(() => {
          button.classList.remove("auto-hover");
        }, 1000); // Duration of hover animation in milliseconds
      }
      isHovered = !isHovered;
    }

    setInterval(toggleHover, 3000); // Repeat every 3 seconds
  }

  // Start the loop for button with ID "hoverButton" initially
  startHoverWithId("hoverButton");
  // Start the loop for button with ID "hoverButtondaytwo" initially
  startHoverWithId("hoverButtondaytwo");
  // Start the loop for button with ID "hoverButtondaytwo" initially
  startHoverWithId("hoverButtondaythree");
  // Start the loop for button with ID "hoverButtondaytwo" initially
  startHoverWithId("hoverButtondayfour");
  // Start the loop for button with ID "hoverButtondaytwo" initially
  startHoverWithId("hoverButtondayfive");
  // Start the loop for button with ID "hoverButtondaytwo" initially
  startHoverWithId("hoverButtondaysix");

  // ---------------------------------------------------------------------------------------------------------

  
  // ---------------------------------------------------------------------------------------------------------
  function startHoverWithId(buttonId) {
    var button = document.getElementById(buttonId);
    button.classList.add("auto-hover");
    setTimeout(function () {
      button.classList.remove("auto-hover");
    }, 700); // 5 seconds of hover
    setTimeout(() => startHoverWithId(buttonId), 3000); // 5 seconds break after hover
  }

  // Start the loop for button with ID "hoverButton2" initially
  startHoverWithId("hoverButton2");
  // Start the loop for button with ID "hoverButton3" initially
  startHoverWithId("hoverButton3");
  // Start the loop for button with ID "hoverButton3" initially
  startHoverWithId("hoverButton4");
  // Start the loop for button with ID "hoverButton3" initially
  startHoverWithId("hoverButton5");
  // Start the loop for button with ID "hoverButton3" initially
  startHoverWithId("hoverButton6");
  // Start the loop for button with ID "hoverButton3" initially
  startHoverWithId("hoverButton7");
  // ========================================================================================


  // ICONS -- FACEBOOK. INSTAGRAM

document.addEventListener("DOMContentLoaded", function() {
const icons = document.querySelectorAll(".wrapper .icon");
let currentIndex = 0;

function hoverIcon(index) {
  icons[index].classList.add("hovered");
  setTimeout(() => {
    icons[index].classList.remove("hovered");
    currentIndex = (currentIndex + 1) % icons.length;
    hoverIcon(currentIndex);
  }, 3000); // Changed from 5000 to 3000 for 3-second delay
}

hoverIcon(currentIndex);
});

// ===================================================================================================================
// Simulate hover effect every 3 seconds
// Function to toggle auto-hover class every 3 seconds
function toggleAutoHover() {
  var tooltipContainer = document.getElementById('autoTooltip');
  tooltipContainer.classList.toggle('auto-hover');
}

// Call toggleAutoHover function every 3 seconds
setInterval(toggleAutoHover, 1500);

function redirectToJoinPage() {
  window.location.href = "register.html";
}
// ================================================================================
window.onload = function () {
  var button = document.querySelector(".name button");
  setInterval(function () {
    button.classList.add("effect");
    setTimeout(function () {
      button.classList.remove("effect");
    }, 500); // remove the class after 500ms
  }, 2500); // add the class every 5000ms
};


// ==============================================================================


// function handleSignup() {
//   // Prevent form submission if it's inside a <form> element

//   // Get user input
//   const nameInput = document.getElementById("name");
//   const emailInput = document.getElementById("email");
//   const passwordInput = document.getElementById("password");

//   const name = nameInput.value;
//   const email = emailInput.value;
//   const password = passwordInput.value;

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   // Validate user input
//   if (validateInput(name, email, password, emailPattern)) {
//       const GymData = {
//           name,
//           email,
//           password,
//       };

//       try {
//           console.log("Storing GymData in cookies...");
//           storeGymData(GymData);

//           console.log("Sending data to Google Sheets...");
//           sendDataToGoogleSheets(GymData);

//           console.log("Closing the register popup...");
//           document.getElementById("popupForm").style.display = "none";
//       } catch (error) {
//           console.error("An error occurred:", error);
//           alert("An error occurred while storing your data. Please try again later.");
//       }
//   }
// }

// function validateInput(name, email, password, emailPattern) {
//   if (name === "" || email === "" || password === "") {
//       alert("Please fill in all the required fields.");
//       return false;
//   }

//   if (!email.match(emailPattern)) {
//       alert("Please enter a valid email address.");
//       return false;
//   }

//   return true;
// }

// function storeGymData(GymData) {
//   const expirationDate = new Date();
//   expirationDate.setFullYear(expirationDate.getFullYear() + 10);
//   const GymDataJson = JSON.stringify(GymData);
//   const cookieString = `GymData=${encodeURIComponent(GymDataJson)}; expires=${expirationDate.toUTCString()}; path=/`;
//   document.cookie = cookieString;
//   console.log("GymData stored in cookies:", cookieString);
// }

// function deleteGymDataCookie() {
//   document.cookie = "GymData=; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/;";
//   alert("Account data deleted.");

//   // Redirect to register.html
//   window.location.href = "register.html";
// }

// function sendDataToGoogleSheets(GymData) {
//   const webhookUrl = 'https://hook.us1.make.com/yjtnjnk5v9zytx7us03n4jeko9yqlt66';
//   const payload = {
//       name: GymData.name,
//       email: GymData.email,
//       password: GymData.password
//   };

//   axios.post(webhookUrl, payload)
//       .then(response => {
//           console.log('Data successfully sent to Google Sheets', response);
//       })
//       .catch(error => {
//           console.error('Error sending data to Google Sheets', error);
//       });
// }

// // Attach the event listener to the "Forgot Password" link
// const forgotPasswordLink = document.getElementById("forgotPasswordLink");
// forgotPasswordLink.addEventListener("click", deleteGymDataCookie);  



document.addEventListener('DOMContentLoaded', function() {
  // Attach the event listener to the "Forgot Password" link
  const forgotPasswordLink = document.getElementById("forgotPasswordLink");
  forgotPasswordLink.addEventListener("click", deleteGymDataCookie);
});

function handleSignup() {
  // Get user input
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate user input
  if (validateInput(name, email, password, emailPattern)) {
      const GymData = {
          name,
          email,
          password,
      };

      try {
          console.log("Storing GymData in cookies...");
          storeGymData(GymData);

          console.log("Sending data to Google Sheets...");
          sendDataToGoogleSheets(GymData);

          console.log("Closing the register popup...");
          document.getElementById("popupForm").style.display = "none";

          // Show success toaster
          showCustomSuccess('Registration successful!');
      } catch (error) {
          console.error("An error occurred:", error);
          alert("An error occurred while storing your data. Please try again later.");
      }
  }
}

function validateInput(name, email, password, emailPattern) {
  if (name === "" || email === "" || password === "") {
      showCustomWarning("Please fill in all the required fields.");
      return false;
  }

  if (!email.match(emailPattern)) {
      showCustomWarning("Please enter a valid email address.");
      return false;
  }

  return true;
}

function storeGymData(GymData) {
  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 10);
  const GymDataJson = JSON.stringify(GymData);
  const cookieString = `GymData=${encodeURIComponent(GymDataJson)}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieString;
  console.log("GymData stored in cookies:", cookieString);
}

function deleteGymDataCookie() {
  document.cookie = "GymData=; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/;";
  alert("Account data deleted.");
  // Redirect to register.html
  window.location.href = "register.html";
}

function sendDataToGoogleSheets(GymData) {
  const webhookUrl = 'https://hook.us1.make.com/yjtnjnk5v9zytx7us03n4jeko9yqlt66';
  const payload = {
      name: GymData.name,
      email: GymData.email,
      password: GymData.password
  };

  axios.post(webhookUrl, payload)
      .then(response => {
          console.log('Data successfully sent to Google Sheets', response);
      })
      .catch(error => {
          console.error('Error sending data to Google Sheets', error);
      });
}

function showCustomSuccess(message) {
  showCustomToaster(message, 'success', 'fa-check-circle');
}

function showCustomWarning(message) {
  showCustomToaster(message, 'warning', 'fa-exclamation-circle');
}

function showCustomToaster(message, type, icon) {
  const toasterContainer = document.getElementById('toaster-container');
  
  // Create toaster element
  const toaster = document.createElement('div');
  toaster.classList.add('toaster', type);
  toaster.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
  
  // Append toaster to container
  toasterContainer.appendChild(toaster);

  // Show the toaster
  setTimeout(() => {
      toaster.classList.add('show');
  }, 10); // Timeout to trigger CSS transition

  // Hide the toaster after 3 seconds
  setTimeout(() => {
      toaster.classList.remove('show');
      // Remove the toaster from DOM after transition
      toaster.addEventListener('transitionend', () => {
          toasterContainer.removeChild(toaster);
      });
    }, 3000);
  }

// ------------------------------------------------------------------------------------------------'''


// DIET PLAN





// COLSE POPUP BUTTON


// document.getElementById("openBtn").addEventListener("click", function() {
//   document.getElementById("popupForm").style.display = "block";
// });

// document.getElementById("closeBtn").addEventListener("click", function() {
//   document.getElementById("popupForm").style.display = "none";
// });

// window.onclick = function(event) {
//   var modal = document.getElementById("popupForm");
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// ============================================================================================




// DIET PLAN BUTTON STARS



document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.unlockpro button');
  const stars = document.querySelectorAll('.unlockpro svg');
  
  setInterval(() => {
      button.classList.add('auto-hover');
      stars.forEach(star => star.classList.add('auto-hover'));

      setTimeout(() => {
          button.classList.remove('auto-hover');
          stars.forEach(star => star.classList.remove('auto-hover'));
      }, 1000); // duration of hover effect in milliseconds
  }, 5000); // interval in milliseconds
});