export default function about() {
  const aboutSection = document.createElement('section');
  aboutSection.id = 'about';
  aboutSection.innerHTML = `
    <h2>About Me</h2>
    <p>Hello! I'm Lily, a passionate web developer with a love for creating beautiful and functional websites. Welcome to my portfolio!</p>
  `;
  return aboutSection;
}