class Compania {
    constructor(nombre) {
      this.nombre = nombre;
      this.vuelos = [];
      this.flota = [];
    }
  
    agregarVuelo(vuelo) {
      this.vuelos.push(vuelo);
    }
  
    agregarAvion(avion) {
      this.flota.push(avion);
    }
  }
  
  class Avion {
    constructor(modelo, capacidad) {
      this.modelo = modelo;
      this.capacidad = capacidad;
    }
  }
  
  class Vuelo {
    constructor(fecha, numeroestaciones, avion) {
      this.fecha = fecha;
      this.numeroestaciones = numeroestaciones;
      this.avion = avion;
      this.billetes = [];
    }
  
    agregarBillete(billete) {
      if (this.billetes.length < this.numeroestaciones) {
        this.billetes.push(billete);
      } else {
        console.log(`No hay plazas disponibles en el vuelo para ${billete.pasajero.nombre} ${billete.pasajero.apellidos}.`);
      }
    }
  }
  
  class Persona {
    constructor(nombre, apellidos, edad) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.edad = edad;
    }
  }
  
  class Billete {
    constructor(pasajero, vuelo) {
      this.pasajero = pasajero;
      this.vuelo = vuelo;
    }
  }

  let compania = new Compania("Viajes muy felices");
  
  let avion1 = new Avion("avianca 747", 300);
  let avion2 = new Avion("latam A320", 180);
  compania.agregarAvion(avion1);
  compania.agregarAvion(avion2);
  
  let vuelo1 = new Vuelo("2024-08-13", 150, avion1);
  compania.agregarVuelo(vuelo1);
  
  let pasajero1 = new Persona("Carlos", "López", 40);
  let billete1 = new Billete(pasajero1, vuelo1);
  vuelo1.agregarBillete(billete1);
  
  console.log(compania);
  