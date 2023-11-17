import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

window.handleSignOut = () => {
  signOut(auth);
};

if (auth.currentUser) {
  document.querySelector("#avatar-action-container").innerHTML += /*html*/ `
    <div tabindex="0" class="avatar-action">
      <img src="${`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
        JSON.parse(localStorage.getItem("currentUser")).username
      )}`}" />
      <div class="popup">
        <button>
          <i class="bx bx-user"></i>
          <span> Profile</span>
        </button>
        <button onclick="handleSignOut()">
          <i class='bx bx-log-out' ></i>
          <span> Logout</span>
        </button>
      </div>
    </div>
  `;
} else {
  document.querySelector("#avatar-action-container").innerHTML += /*html*/ `
    <a class="navbar-btn" href="#/register">
      <i class="bx bx-user"></i>
    </a>
  `;
}
