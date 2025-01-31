function updateUTC() {
    const utcTime = new Date().toISOString();
    const utcElement = document.getElementById("utc-time");
    utcElement.textContent = `Current UTC Time: ${utcTime}`;
  }
  
  setInterval(updateUTC, 1000);
  