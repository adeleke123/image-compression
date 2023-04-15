// Load navigation bar
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

// Load intro section
fetch('intro.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('intro').innerHTML = data;
  });

// Load features section
fetch('features.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('features').innerHTML = data;
  });

// Load about section
fetch('about.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('about').innerHTML = data;
  });
