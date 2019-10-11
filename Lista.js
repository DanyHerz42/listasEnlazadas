export default class Lista {
  constructor() {
    this._inicio = null;
  }
  get inicio() {
    return this._inicio;
  }
  agregarALaLista(newObjeto) {
    if (!this._inicio) {
      this._inicio = newObjeto;
      console.log(this._inicio);
    } else {
      let temp = this._inicio;
      while (temp.siguiente) {
        temp = temp.siguiente;
      }
      temp.siguiente = newObjeto;
      console.log(this._inicio);
    }
  }
  imprimirLista(div) {
    div.innerHTML = " ";
    div.textContent = JSON.stringify(this._inicio);
  }
  borrarUnElemento(codigo) {
    if (this._inicio.codigo === codigo) {
      this._inicio = this._inicio.siguiente;
    } else {
      let temp = this._inicio;
      let anterior = null;
      while (temp) {
        if (temp.codigo === codigo) {
          anterior.siguiente = temp.siguiente;
        }
        anterior = temp;
        temp = temp.siguiente;
      }
    }
  }
  actuzalizarUnElemento(newElemento, codigo) {
    if (this._inicio.codigo === codigo) {
      this._inicio.codigo = newElemento.codigo;
      this._inicio.nombre = newElemento.nombre;
      this._inicio.precio = newElemento.precio;
      this._inicio.cantidad = newElemento.cantidad;
      this._inicio.descripcion = newElemento.descripcion;
    } else {
      let temp = this._inicio;
      while (temp) {
        if (temp.codigo === codigo) {
          temp.codigo = newElemento.codigo;
          temp.nombre = newElemento.nombre;
          temp.precio = newElemento.precio;
          temp.cantidad = newElemento.cantidad;
          temp.descripcion = newElemento.descripcion;
        }
        temp = temp.siguiente;
      }
    }
  }
  buscarUnElemento(codigo, div) {
    div.innerHTML = " ";
    let temp = this._inicio;
    while (temp) {
      if (temp.codigo === codigo) {
        div.textContent = `Codigo: ${temp.codigo}, Nombre: ${temp.nombre}, Precio: ${temp.precio}, Cantidad: ${temp.cantidad}, Descripcion: ${temp.descripcion}`;
      }
      temp = temp.siguiente;
    }
  }
}