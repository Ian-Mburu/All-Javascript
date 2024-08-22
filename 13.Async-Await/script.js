const userContainer = document.getElementById('user-container');

        async function fetchUser(userId) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const user = await response.json();
            return user;
        }

        async function fetchPosts(userId) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            const posts = await response.json();
            return posts;
        }

        async function displayUserAndPost(userId) {
            try {
                const user = await fetchUser(userId);
                const posts = await fetchPosts(userId);

                const userDiv = document.createElement('div');
                userDiv.innerHTML = 
                `<h2>${user.name}</h2>
                <p>${user.email}</p>
                <p>${user.phone}</p>
                <h3>Posts:</h3>
                <ul>
                    ${posts.map(post => `<li>${post.title}</li>`).join('')}
                </ul>`;

                userContainer.appendChild(userDiv);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        displayUserAndPost(1);