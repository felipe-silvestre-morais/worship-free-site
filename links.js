// Add the final installer and giving URLs here when they are available.
const destinations = {
  windows: "",
  macos: "",
  donate: "",
};

for (const link of document.querySelectorAll("[data-destination]")) {
  const destination = destinations[link.dataset.destination];
  if (destination) {
    link.href = destination;
    link.removeAttribute("aria-describedby");
  }
}

const downloadStatus = document.getElementById("download-status");
downloadStatus.hidden = Boolean(destinations.windows && destinations.macos);
if (destinations.windows && !destinations.macos) downloadStatus.textContent = "The macOS installer link is coming soon.";
if (destinations.macos && !destinations.windows) downloadStatus.textContent = "The Windows installer link is coming soon.";
document.getElementById("giving-status").hidden = Boolean(destinations.donate);
