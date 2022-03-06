const container = document.querySelector('.container');

const display = (followers) => {
  const displayfollowers = followers.map((items) => {
    const { html_url, login, avatar_url } = items;
    return `<article class="card">
          <img src="${avatar_url}" alt="${login}"/>
          <h4>${login}</h4>
          <a href="${html_url}" class="btn">profile</a>
        </article>`
  })
    .join('');
  container.innerHTML = displayfollowers;
};

export default display;