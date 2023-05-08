const jobTitles = ["Front-End", "ReactJs"];
let counter = 1;

function cycleJobTitle() {
  document.getElementById("job-title").textContent = jobTitles[counter];
  counter = (counter + 1) % jobTitles.length;
}

setInterval(cycleJobTitle, 2500);


function smoothScroll(event, targetId) {
    event.preventDefault();

    const target = document.getElementById(targetId);

    setTimeout(() => {
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
}

function expTimeUpdate(){
    const currentDate = new Date();
    const beginningDate = new Date('2022-11-01');
    
    
      // Calculate the time difference between the two dates
      const diffTime = Math.abs(beginningDate - currentDate);
      const diffSeconds = Math.floor(diffTime / 1000);
      const diffMinutes = Math.floor(diffSeconds / 60);
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);
      const diffMonths = Math.floor(diffDays / 30.44);
      const diffYears = Math.floor(diffMonths / 12);

      // Calculate the remaining time in each unit
      const remainingMonths = diffMonths % 12;
      const remainingDays = diffDays % 30.44;
      const remainingHours = diffHours % 24;
      const remainingMinutes = diffMinutes % 60;
      const remainingSeconds = diffSeconds % 60;

      // Display the result
      document.getElementById('exp-years').textContent = diffYears;
      document.getElementById('exp-months').textContent = remainingMonths;
      document.getElementById('exp-days').textContent =Math.round(remainingDays);
      document.getElementById('exp-hours').textContent = remainingHours;
      document.getElementById('exp-minutes').textContent = remainingMinutes;
      document.getElementById('exp-seconds').textContent = remainingSeconds;
    }

    // Update the time difference every second
setInterval(expTimeUpdate,1000);

var scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", function() {
  
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
