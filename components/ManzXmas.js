class ManzXmasHeader extends HTMLElement {
constructor(){
    super();
    this.attachShadow({mode: "open"}); // creando el shadowDOM
    }

// se ejecuta cuando el componente se carga en el HTML
connectedCallback() {
    this.name = this.getAttribute("name")
    this.render();
}

render() {
    this.shadowRoot.innerHTML = `
    <style>
    :host{
        --fancy-gradient: linear-gradient(to bottom, #884ced, #ec1cce)
    }
    header{
        background: var(--fancy-gradient);
        position: relative;
        border-bottom: 4px solid #fff;
        box-shadow: 0 4px 2px #fff, 0 -6px 2px #fff inset;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        overflow: hidden;
        position: relative;
        border-bottom: 4px solid #fff;
        box-shadow: 0 4px 2px #fff, 0 -6px 2px #fff inset;
    }
    
    h1{
        font-family: "Bebas Neue", sans-serif;
        font-size: 132px;
        color: #fff;
        text-shadow: 0 0 8px #0008;
        letter-spacing: -1px;
        filter: drop-shadow(0 0 5px #000);
        transform: translate(-16px, 0);
        transform: translate(0, 130px);
        transition: transform 0.5s;
        overflow: hidden;
    }
    
    img{
        filter: drop-shadow(10px 10px 5px #0008);
        width: 350px;
        height: 350px;
        transform: translate(16px, 8px) rotate(-5deg);
        transition: transform 0.5s;
        will-change: transform;
        z-index: 1;
    }
    img:hover{
        transform: translate(16px, 260px) rotate(-5deg);
    }

    </style>
    <header>
        <img src="./manz-logo-xmas.png" alt="logo-xmas">
        <h1>${this.name}</h1>
    </header>`;
 }

};

//definir un tag y asociarla a la clase que le da funcionalidad.

customElements.define("manz-xmas-header", ManzXmasHeader)
