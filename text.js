document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("download-button");
    const textInput = document.getElementById("text-input");
  
    downloadButton.addEventListener("click", function() {
      const textContent = textInput.value;
      const blob = new Blob([textContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
  
      const a = document.createElement("a");
      a.href = url;
      a.download = "text-file.txt";
      a.click();
  
      // Clean up the URL and release the blob object
      URL.revokeObjectURL(url);
    });
  });
  