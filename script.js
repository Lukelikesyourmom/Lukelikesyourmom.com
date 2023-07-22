// JavaScript code to detect the user's device
window.addEventListener('DOMContentLoaded', function() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    const deviceInfoElement = document.getElementById('device-info');
  
    if (isMobile) {
      deviceInfoElement.textContent = 'You are using a mobile device.';
    } else {
      deviceInfoElement.textContent = 'You are using a computer.';
    }
  });

  window.addEventListener('DOMContentLoaded', function() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    if (isMobile) {
      // Remove the 'desktop-only' div from the DOM
      const desktopOnlyElement = document.querySelector('.desktop-only');
      if (desktopOnlyElement) {
        desktopOnlyElement.parentNode.removeChild(desktopOnlyElement);
      }
    }
  });