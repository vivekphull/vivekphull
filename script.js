// Homepage: Load blog previews
if (document.getElementById('blog-list')) {
  fetch('posts.json')
    .then(res => res.json())
    .then(posts => {
      const container = document.getElementById('blog-list');
      container.innerHTML = '';
      posts.forEach(post => {
        container.innerHTML += `
          <article>
            <h2><a href="post.html?id=${post.id}" style="color: var(--brand-text); text-decoration: none;">${post.title}</a></h2>
            <p><em>${post.date}</em></p>
            <p>${post.summary}</p>
          </article>
        `;
      });
    });
}

// Post page: Load full content
if (document.getElementById('post-content')) {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');

  fetch('posts.json')
    .then(res => res.json())
    .then(posts => {
      const post = posts.find(p => p.id === postId);
      const container = document.getElementById('post-content');
      if (post) {
        container.innerHTML = `
          <h2>${post.title}</h2>
          <p><em>${post.date}</em></p>
          ${post.content}
        `;
      } else {
        container.innerHTML = '<p>Post not found.</p>';
      }
    });
}
