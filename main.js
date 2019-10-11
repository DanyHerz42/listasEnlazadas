import Lista from "./Lista.js";
import Articulo from "./Articulo.js"
class Main {
  constructor() {
    let lista = new Lista();
    let div = document.querySelector("#insertados");
    let agregar = document.querySelector("#btnAdd").addEventListener("click", () => {
      let objProducto = {
        codigo: document.querySelector("#codigo").value,
        nombre: document.querySelector("#nombre").value,
        precio: document.querySelector("#precio").value,
        cantidad: document.querySelector("#cantidad").value,
        descripcion: document.querySelector("#descripcion").value,
        siguiente: null
      }
      let newObj = new Articulo(objProducto);
      lista.agregarALaLista(newObj);
      lista.imprimirLista(div);
    });
    let borrar = document.querySelector("#btnBorrar").addEventListener("click", () => {
      let codigo = document.querySelector("#borrar").value;
      lista.borrarUnElemento(codigo);
      lista.imprimirLista(div);
    });
    let actualizar = document.querySelector("#btnAct").addEventListener("click", () => {
      let antCodigo = document.querySelector("#antCodigo").value;
      let objProducto = {
        codigo: document.querySelector("#newCodigo").value,
        nombre: document.querySelector("#newNombre").value,
        precio: document.querySelector("#newPrecio").value,
        cantidad: document.querySelector("#newCantidad").value,
        descripcion: document.querySelector("#newDescripcion").value,
        siguiente: null
      }
      let newObj = new Articulo(objProducto);
      lista.actuzalizarUnElemento(newObj,antCodigo);
      lista.imprimirLista(div);
    });
    let buscar = document.querySelector("#btnBuscar").addEventListener("click", () => {
      let div = document.querySelector("#busqueda");;
      let busqueda = document.querySelector("#buscar").value;
      lista.buscarUnElemento(busqueda,div)
    });
  }
}
let m = new Main();