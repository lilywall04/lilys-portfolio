import './style.css'
import createHeader from './header.ts'
import about from './abt.ts'
import cards from './cards.ts';
import footer from './footer.ts';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = ''; 
app.appendChild(createHeader());
app.appendChild(about());
app.appendChild(cards());
app.appendChild(footer());

