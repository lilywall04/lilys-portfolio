
export default function header() {
  const header = document.createElement('header');
  header.innerHTML = `
    <h1>Lily's Portfolio</h1>
    <nav>
      <a href="#me">Meeeee</a>
      <a href="#favs">Favs</a>
      <a href="#music">Music</a>
      <a href="#cats">Cats</a>

    </nav>
  `;
  return header;
}