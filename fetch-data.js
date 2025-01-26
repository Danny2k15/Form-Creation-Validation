// Step 1: Define the asynchronous function 'fetchUserData'
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Step 4: Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';
        
        // Step 6: Create a <ul> to list the users
        const userList = document.createElement('ul');
        
        // Loop through the users and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Use the user's name
            userList.appendChild(listItem); // Append <li> to <ul>
        });
        
        // Step 7: Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 8: Error Handling
        dataContainer.innerHTML = ''; // Clear the existing content
        dataContainer.textContent = 'Failed to load user data.'; // Show error message
    }
}

// Step 9: Invoke fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
