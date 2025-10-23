import './style.css'
import createHeader from './header.ts'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = ''; 
app.appendChild(createHeader());

