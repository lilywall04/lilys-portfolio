export default function footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
<footer id="footer">
  <div class="footer-content">
    <h3>Lily Wallace</h3>
    <p>Building beautiful, functional, and creative web experiences.</p>

    <div class="footer-links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="https://github.com/">GitHub</a>
    </div>

    <p class="footer-copy">© 2025 Lily Wallace • All Rights Reserved</p>
  </div>
</footer>    `;
    return footer;
}