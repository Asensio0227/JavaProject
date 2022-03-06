const url = 'https://api.github.com/users/Asensio0227/following?per_page=100'

const fetchfollowers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default fetchfollowers;