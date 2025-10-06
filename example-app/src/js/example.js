import { StatusBar } from 'capacitor-status-bar';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    StatusBar.echo({ value: inputValue })
}
