async function fetchUsrerData(params) {
    const apiUrl=  'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById('api-data');
    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = '';
        const userList = document.createElement('ui');
        users.forEach(user => {
            const listItem = document.createElemtnt('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load usr data. ';
    }
}
document.addEventListener('DOMContentLoaded' , fetchserData):    