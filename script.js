document.addEventListener('DOMContentLoaded', function() {
    // Simulate search functionality
    function performSearch() {
      const searchTerm = document.getElementById('searchInput').value.toLowerCase();
      
      // If on the menu page, perform a basic search
      if (window.location.pathname.includes('menu.html')) {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
          const itemName = item.querySelector('h3').innerText.toLowerCase();
          if (itemName.includes(searchTerm)) {
            item.style.display = 'block';  // Show matching items
          } else {
            item.style.display = 'none';   // Hide non-matching items
          }
        });
      } else {
        alert("Search functionality is only available on the Menu page.");
      }
    }
  
    // Assuming there's a button or form that triggers the search function
    document.getElementById('searchButton').addEventListener('click', performSearch);
  });
  