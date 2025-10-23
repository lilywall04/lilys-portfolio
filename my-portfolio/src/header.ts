
export default function header() {
  const header = document.createElement('header');
  header.innerHTML = `
    <h1>Lily's Portfolio</h1>
    <nav>
      <a href="#about">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  `;
  return header;
}