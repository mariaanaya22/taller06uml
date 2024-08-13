class Producto {
    constructor(nombre, precio, existencias) {
      this.nombre = nombre;
      this.precio = precio;
      this.existencias = existencias;
    }
  }
  
  class Pedido {
    constructor(cliente, fecha) {
      this.cliente = cliente;
      this.fecha = fecha;
      this.productos = [];
      this.pagos = [];
    }
  
    agregarProducto(producto, cantidad) {
      if (producto.existencias >= cantidad) {
        this.productos.push({ producto, cantidad });
        producto.existencias -= cantidad;
      } else {
        console.log(`El producto ${producto.nombre} no tiene suficientes existencias.`);
      }
    }
  
    calcularTotal() {
      let total = 0;
      for (let { producto, cantidad } of this.productos) {
        total += producto.precio * cantidad;
      }
      return total;
    }
  
    realizarPago(monto) {
      this.pagos.push(monto);
    }
  
    obtenerEstado() {
      let totalPagado = this.pagos.reduce((sum, pago) => sum + pago, 0);
      let totalPedido = this.calcularTotal();
  
      if (totalPagado === 0) {
        return "pendiente";
      } else if (totalPagado < totalPedido) {
        return "procesando";
      } else {
        return "pagado";
      }
    }
  
    mostrarDatos() {
      console.log(`Pedido de ${this.cliente}, Fecha: ${this.fecha}, Estado: ${this.obtenerEstado()}, Productos: ${this.productos.map(item => `${item.producto.nombre} x ${item.cantidad}`).join(', ')}, Total: ${this.calcularTotal()}`);
    }
  }
  

  let cliente1 = "Carlos López";
  let producto1 = new Producto("Producto A", 100, 10);
  let producto2 = new Producto("Producto B", 200, 5);
  
  let pedido1 = new Pedido(cliente1, "2024-08-13");
  pedido1.agregarProducto(producto1, 2);
  pedido1.agregarProducto(producto2, 3);
  
  pedido1.realizarPago(150); 
  pedido1.mostrarDatos();
  
  pedido1.realizarPago(450); 
  pedido1.mostrarDatos();
  