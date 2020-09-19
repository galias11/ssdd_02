/* ****************************************************************************
1- Prototipos
******************************************************************************* */

// Esto node nos da undefined --> ver en el browser
console.log({}.prototype);

// Sin embargo...
console.log({}.hasOwnProperty('name'));
console.log({ name: 'juan' }.hasOwnProperty('name'));

/* ****************************************************************************
2- Literales de objetos
******************************************************************************* */
/*
const persona = {
  firstName: 'juan',
  lastName: 'perez'
};

console.log(persona);
*/

/* ****************************************************************************
2- Clases pre ES6
******************************************************************************* */

/*
var firstName = 'Some name'

var Persona = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Persona.prototype.sayHello = function() {
  console.log(`Hola soy ${this.firstName} ${this.lastName}`);
};

const juan = new Persona('Juan', 'Perez');

// const pedro = Persona('Pedro', 'Perez');
// pedro.sayHello();

console.log(juan instanceof Persona);
console.log(juan instanceof Object);
console.log(juan instanceof Function);
*/

/* ****************************************************************************
3- Clases post ES6
******************************************************************************* */

/*
class Persona {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    console.log(`Hola soy ${this.firstName} ${this.lastName}`);
  }
}

const juan = new Persona('Juan', 'Perez');

// const pedro = Persona('Pedro', 'Perez');

juan.sayHello();
*/

/* ****************************************************************************
3- Herencia
******************************************************************************* */
/*
class Driver extends Persona {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  trabajar() {
    console.log('Voy a manajer');
  }
}

const conductor = new Driver('El', 'Conductor');

conductor.sayHello();
conductor.trabajar();

class Doctor extends Persona {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  trabajar() {
    console.log('Voy a curar');
  }
}

const doctor = new Doctor('El', 'Doctor');

doctor.sayHello();
doctor.trabajar();
*/
/* ****************************************************************************
4- Herencia multiple... mixins
******************************************************************************* */
/*
const AmauteurFootballPlayer = {
  kick: () => {
    console.log('Patea la pelota');
  },

  pass: () => {
    console.log('Pasa la pelota');
  }
};

Object.assign(conductor, AmauteurFootballPlayer);
Object.assign(doctor, AmauteurFootballPlayer);

conductor.kick();
doctor.pass();
*/