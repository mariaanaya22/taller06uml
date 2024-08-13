class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }
  
  class Empleado extends Persona {
    constructor(nombre, edad, sueldoBruto) {
      super(nombre, edad);
      this.sueldoBruto = sueldoBruto;
    }
  
    mostrarDatos() {
      console.log(`Empleado: ${this.nombre}, Edad: ${this.edad}, Sueldo Bruto: ${this.sueldoBruto}`);
    }
  }
  
  class Directivo extends Empleado {
    constructor(nombre, edad, sueldoBruto, categoria) {
      super(nombre, edad, sueldoBruto);
      this.categoria = categoria;
      this.subordinados = [];
    }
  
    agregarSubordinado(empleado) {
      this.subordinados.push(empleado);
    }
  
    mostrarDatos() {
      console.log(`Directivo: ${this.nombre}, Edad: ${this.edad}, Sueldo Bruto: ${this.sueldoBruto}, Categoría: ${this.categoria}`);
      this.subordinados.forEach(sub => sub.mostrarDatos());
    }
  }
  
  class Cliente extends Persona {
    constructor(nombre, edad, telefono) {
      super(nombre, edad);
      this.telefono = telefono;
    }
  
    mostrarDatos() {
      console.log(`Cliente: ${this.nombre}, Edad: ${this.edad}, Teléfono: ${this.telefono}`);
    }
  }
  
  
  let empleado1 = new Empleado("Juan Pérez", 30, 30000);
 let directivo1 = new Directivo("Ana García", 45, 50000, "Gerente");
  directivo1.agregarSubordinado(empleado1);
  
  let cliente1 = new Cliente("Carlos López", 40, "555-1234");
  
  empleado1.mostrarDatos();
  directivo1.mostrarDatos();
  cliente1.mostrarDatos();
  