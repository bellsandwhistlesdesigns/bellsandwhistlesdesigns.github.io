// settings.js
console.log("settings.js is working");

document.addEventListener("DOMContentLoaded", () => {
	
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    window.location.href = "login.html";
    return;
}

  // Update tab title
document.title = `Bells & Whistles Designs | Welcome, ${currentUser.username}`;

// Fill in placeholders safely
const userNameEl = document.getElementById("userName");
  if (userNameEl) userNameEl.textContent = currentUser.username;

const userEmailEl = document.getElementById("userEmail");
  if (userEmailEl) userEmailEl.textContent = currentUser.email;

const joinDateEl = document.getElementById("joinDate");
const joinDate = currentUser.joinDate || "2025-01-01";
  if (joinDateEl) joinDateEl.textContent = joinDate;

const durationEl = document.getElementById("duration");
  if (durationEl) {
    const start = new Date(joinDate);
    const today = new Date();
    const diffTime = Math.abs(today - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    durationEl.textContent = `${diffDays} days`;
}

// Recalculate link (if present)
 const recalcLink = document.getElementById("recalcLink");
 const manualResult = document.getElementById("manualResult");
  if (recalcLink && manualResult) {
    recalcLink.addEventListener("click", () => {
      manualResult.textContent = `As of now, your membership is ${
        document.getElementById("duration")?.textContent || "N/A"
      } old.`;
      manualResult.classList.remove("hidden");
    });
}
  
// Membership Progress Bar
const progressFill = document.getElementById("progressFill");
	if (progressFill) {
		const joinDate = new Date(currentUser.joinDate);
		const today = new Date();
		const diffTime = today - joinDate;
		const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Progress bar capped at 365
    const progressPercent = Math.min((diffDays / 365) * 100, 100);
		progressFill.style.width = progressPercent + "%";
}

// Developer Challenge Results

const rankBadge =
    document.getElementById("rankBadge");
const challengeScore =
    document.getElementById("challengeScore");
const challengeData =
    JSON.parse(
        localStorage.getItem(
            `challengeData_${currentUser.username}`
        )
    );
if(challengeData) {

    if(rankBadge) {
      rankBadge.textContent =
      challengeData.rank;
    }
    if(challengeScore) {

        challengeScore.textContent =
        `Best Score: ${challengeData.percentage}%`;
    }
}
else {
    if(rankBadge) {
        rankBadge.textContent =
        "🧭 Explorer";
    }
    if(challengeScore) {
        challengeScore.textContent =
        "Best Score: No attempts yet";
    }
}
const challengeDate =
    document.getElementById(
        "challengeDate"
    );

    if(
    challengeDate &&
    challengeData
) {

    challengeDate.textContent =
        `Completed: ${challengeData.completed}`;

}
const challengeVersion =
    document.getElementById(
        "challengeVersion"
    );

if(
    challengeVersion &&
    challengeData
) {

    challengeVersion.textContent =
        `Version: ${challengeData.version}`;

}
const resetChallengeBtn =
    document.getElementById(
        "resetChallengeBtn"
    );

if(resetChallengeBtn) {

    resetChallengeBtn.addEventListener(
        "click",
        () => {
            const confirmed =
                confirm(
                    "Are you sure you want to reset your Developer Challenge results? This cannot be undone."
                );
            if(!confirmed) return;
            localStorage.removeItem(
                `challengeData_${currentUser.username}`
            );
            location.reload();
        }
   );
}
});

