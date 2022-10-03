

// Arreglo de productos

let productos = [
    {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
    {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
    {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
    {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
  ] //arreglo
  
  const li = document.getElementsByName("lista-de-productos")
  console.log(li)
  const $i = document.querySelector(".input");
  console.log($i);
  
  
  //cliclo para agregar productos de array a div en forma de lista
  
  for (let i = 0; i < productos.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto")
  
    let ti = document.createElement("p")
    ti.classList.add("nombre")
    ti.textContent = productos[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li[0].appendChild(d)
  }//for agregar
  
  //function displayProductos(productos)
  
  let botonDeFiltro = document.querySelector("button");
  
  botonDeFiltro.onclick = function() {
    while (li.firstChild) {
      li[i].removeChild(li[i].firstChild);
    }
  
    const texto = $i.value;
    console.log(texto);
    let productosFiltrados = filtrado(productos, texto );
  
    for (let i = 0; i < productosFiltrados.length; i++) {
      let d = document.createElement("div")
      d.classList.add("producto")
    
      let ti = document.createElement("p")
      ti.classList.add("titulo")
      ti.textContent = productosFiltrados[i].nombre
      
      let imagen = document.createElement("img");
      imagen.setAttribute('src', productosFiltrados[i].img);
    
      d.appendChild(ti)
      d.appendChild(imagen)
    
      li[0].appendChild(d)
    }
  
  }
  
  let filtrado = (productos = [], texto) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  } 
  
  