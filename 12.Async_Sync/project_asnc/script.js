const posts = [
    {
        title: 'Beverly Hills',
        author: 'Olivia Baker'
    },
    {
        title: 'South Crenshaw',
        author: 'Spencer James'
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('post-list').innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback(); // Call getPosts after the new post is added
    }, 2000);
}

// Call createPost and pass getPosts as the callback
createPost({ title: 'Beach House', author: 'JJ Parker' }, getPosts);
