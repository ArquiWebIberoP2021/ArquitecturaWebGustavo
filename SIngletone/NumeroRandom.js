class NumeroRandom {

    constructor() {

        if (NumeroRandom.instance instanceof NumeroRandom) { //En el caso de ya existir una instancia NumeroRandom regresa la misma intancia NumeroRandom.
            return NumeroRandom.instance;
        }

        this.NumeroRandomObject = {
            'numero': Math.floor(Math.random() * 4000) //imprime un número random entre el 0 y el 4000 como una version ejemplo.
        };

        Object.freeze(this.NumeroRandomObject);//Para que no se modifique el contenido del objeto.
        Object.freeze(this);//Para que no se modifique el contenido del constructor.

        NumeroRandom.instance = this; //Instancimos nuestra clase.
    }


    get(num) {
        return this.NumeroRandomObject[num]; //Obtenemos nuestro objeto.
    }
}

