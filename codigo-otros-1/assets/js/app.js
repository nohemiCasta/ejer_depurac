const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
let n = document.getElementById('name');
let b = document.getElementById('blog');
let l = document.getElementById('location');

const displayUser = async(username) => {
  try{
  const response = await fetch(`${usersEndpoint}/${username}`)
  const data = await response.json();
  console.log(data);
  console.log(data.name);
  console.log(data.blog);
  console.log(data.location);
  n.textContent = `Name: ${data.name}`;
  b.textContent = `Blog: ${data.blog}`;
  l.textContent = `Location: ${data.location}`;

  }catch(err){
    console.log(err);
  }//catch
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);