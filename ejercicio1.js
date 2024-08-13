class Persona {
  constructor(nombre, apellido, edad, sexo, domicilio, tipodePersona) {
      this.tipodePersona = tipodePersona;
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.sexo = sexo;  
      this.domicilio = domicilio;
  }
  
  mostrarDatos() {
      return `tipo de persona:${this.tipodePersona}  Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}, Domicilio: ${this.domicilio}`;
  }
}

class Matrimonio {
  constructor(fecha, lugar, autoridadMunicipal) {
      this.fecha = fecha;
      this.lugar = lugar;
      this.autoridadMunicipal = autoridadMunicipal;
      this.contrayente = [];
      this.testigos = [];
  }
  
  agregarContrayente(persona) {
      this.contrayente.push(persona);
  }

  agregarTestigo(testigo) {
      this.testigos.push(testigo);
  }

  mostrarDatos() {
      for (let i = 0; i < this.contrayente.length; i++){
          console.log(this.contrayente[i].mostrarDatos());
      }
      for (let i = 0; i < this.testigos.length; i++){
          console.log(this.testigos[i].mostrarDatos());
      }
      
      return `Fecha: ${this.fecha}, Lugar: ${this.lugar}, Contrayente: ${this.contrayente.map(p => p.nombre).join(", ")}, Testigos: ${this.testigos.map(t => t.nombre).join(", ")}, Municipal: ${this.autoridadMunicipal.nombre}`;
  }
}

let persona1 = new Persona("Juan", "Pérez", 30, "masculino", "Calle A" ,"juez");
let persona2 = new Persona("María", "Gómez", 28, "femenino", "Calle B" ,"testigo1");
let autoridadMunicipal = new Persona("Luisa", "Gómez", 28, "femenino", "Calle C" ,"notaria");
let testigo2 = new Persona("Cata", "Anaya", 30, "masculino", "Calle 30" , "testigo");

let matrimonio = new Matrimonio("2024-08-06", "Iglesia", autoridadMunicipal);
matrimonio.agregarContrayente(persona1);
matrimonio.agregarContrayente(persona2);
matrimonio.agregarTestigo(testigo);

console.log(matrimonio.mostrarDatos());
console.log(testigo.mostrarDatos());
console.log(autoridadMunicipal.mostrarDatos());





 

    
  