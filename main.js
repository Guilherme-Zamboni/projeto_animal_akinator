/* ELEMENTOS DA TELA */
const CONTAINER_BUBBLE_AKINATOR = document.getElementById("ctn-bubble-akinator")
const CONTAINER_BUBBLE_CONTINUE = document.getElementById("ctn-bubble-continue")
const CONTAINER_BUBBLE_USER = document.getElementById("ctn-bubble-user")
const CONTAINER_BUBBLE_EXIT = document.getElementById("ctn-bubble-exit")
const CONTAINER_INITIAL = document.getElementById("ctn-initial")
const CONTAINER_GAME = document.getElementById("ctn-game")
const MUSIC_AUDIO = document.getElementById("aud-music")
const MUSIC_BUTTON_ON = document.getElementById("btn-music-on")
const MUSIC_BUTTON_OFF = document.getElementById("btn-music-off")

/* CONSTANTES */
const DISPLAY_NONE_CLASS = "d-none"
const DISPLAY_FLEX_CLASS = "d-flex"
const AKINATOR_IMAGE_01 = "./images/akinator-01.webp"
const AKINATOR_IMAGE_02 = "./images/akinator-02.webp"
const AKINATOR_IMAGE_03 = "./images/akinator-03.webp"
const AKINATOR_IMAGE_04 = "./images/akinator-04.webp"
const AKINATOR_IMAGE_05 = "./images/akinator-05.webp"

const QUESTION_IS_MAMMAL = "Esse animal é um mamífero?" 

const QUESTION_IS_QUADRUPEDS = "Esse animal é quadrúpede?"
const QUESTION_IS_CARNIVORE = "Esse animal é carnívoro?"
const QUESTION_IS_HERBIVORE = "Esse animal é herbívoro?"
const QUESTION_IS_LION = "Esse animal é um leão?"
const QUESTION_IS_HORSE = "Esse animal é um cavalo?"

const QUESTION_IS_BIPED = "Esse animal é bípede?"
const QUESTION_IS_OMNIVOROUS = "Esse animal é onívoro?"
const QUESTION_IS_FRUITFUL = "Esse animal é frutívoro?"
const QUESTION_IS_MAN = "Esse animal é um homem?"
const QUESTION_IS_MONKEY = "Esse animal é um macaco?"

const QUESTION_IS_FLYING = "Esse animal é voador?"
const QUESTION_IS_BAT = "Esse animal é um morcego?"

const QUESTION_IS_AQUATIC = "Esse animal é aquático?"
const QUESTION_IS_WHALE = "Esse animal é uma baleia?"


const QUESTION_IS_BIRD = "Esse animal é uma ave?"  
const QUESTION_IS_NON_FLYING = "Esse animal é não-voador?"
const QUESTION_IS_TROPICAL = "Esse animal é tropical?"
const QUESTION_IS_POLAR = "Esse animal é polar?"
const QUESTION_IS_OSTRICH = "Esse animal é um avestruz?"
const QUESTION_IS_PEGUIM = "Esse animal é um penguim?"

const QUESTION_IS_SWIMMER = "Esse animal é nadador?"
const QUESTION_IS_DUCK = "Esse animal é um pato?"

const QUESTION_IS_OFPREY = "Esse animal é de rapina?"
const QUESTION_IS_EAGLE = "Esse animal é uma águia?"


const QUESTION_IS_REPTILE = "Esse animal é um réptil?" 
const QUESTION_IS_WITHHULL = "Esse animal tem casco?"
const QUESTION_IS_TURTLE = "Esse animal é uma tartaruga?"

//const QUESTION_IS_CARNIVORE = "Esse animal é carnívoro?"
const QUESTION_IS_CROCODILE = "Esse animal é um crocodilo?"

const QUESTION_IS_WITHOUTPAWS = "Esse animal não tem patas?"
const QUESTION_IS_SNAKE = "Esse animal é uma cobra?"


const EXPLAIN_MESSAGE = "Escolha um animal e responda as perguntas!"
const SUCCESS_MESSAGE = "E o animal é: "
const ERROR_MESSAGE = "Não foi possível identificar o animal!"

/* ENTIDADE */
class Animal {
    constructor(name, type, locomotion, habitat, food) {
        this.name = name
        this.type = type
        this.locomotion = locomotion
        this.habitat = habitat
        this.food = food
    }

    reset() {
        this.name = null
        this.type = null
        this.locomotion = null
        this.habitat = null
        this.food = null
    }
}

/* VARIÁVEIS GLOBAIS */
var animal = new Animal(null, null, null, null, null)
var exclusions = []

/* CONTROLES DE MÚSICA */
function setMusicOff() {
    MUSIC_BUTTON_ON.classList.add(DISPLAY_NONE_CLASS)
    MUSIC_BUTTON_OFF.classList.remove(DISPLAY_NONE_CLASS)
    MUSIC_AUDIO.pause()
}

function setMusicOn() {
    MUSIC_BUTTON_OFF.classList.add(DISPLAY_NONE_CLASS)
    MUSIC_BUTTON_ON.classList.remove(DISPLAY_NONE_CLASS)
    MUSIC_AUDIO.play()
}

/* CONTROLES DO JOGO */
function playGame() {
    if (CONTAINER_INITIAL.classList.contains(DISPLAY_FLEX_CLASS) && CONTAINER_GAME.classList.contains(DISPLAY_NONE_CLASS)) {
        CONTAINER_INITIAL.classList.replace(DISPLAY_FLEX_CLASS, DISPLAY_NONE_CLASS)
        CONTAINER_GAME.classList.replace(DISPLAY_NONE_CLASS, DISPLAY_FLEX_CLASS)
    }
    showContinue()
    reset()
}

function closeGame() {
    if (CONTAINER_GAME.classList.contains(DISPLAY_FLEX_CLASS) && CONTAINER_INITIAL.classList.contains(DISPLAY_NONE_CLASS)) {
        CONTAINER_GAME.classList.replace(DISPLAY_FLEX_CLASS, DISPLAY_NONE_CLASS)
        CONTAINER_INITIAL.classList.replace(DISPLAY_NONE_CLASS, DISPLAY_FLEX_CLASS)
    }
    reset()
}

/* EXIBIÇÕES */
function showContinue() {
    CONTAINER_BUBBLE_AKINATOR.innerHTML = EXPLAIN_MESSAGE

    if (CONTAINER_BUBBLE_CONTINUE.classList.contains(DISPLAY_NONE_CLASS) && !CONTAINER_BUBBLE_EXIT.classList.contains(DISPLAY_NONE_CLASS)) {
        CONTAINER_BUBBLE_CONTINUE.classList.remove(DISPLAY_NONE_CLASS)
        CONTAINER_BUBBLE_EXIT.classList.add(DISPLAY_NONE_CLASS)
    }
}

function showChoice() {
    CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_MAMMAL

    if (CONTAINER_BUBBLE_USER.classList.contains(DISPLAY_NONE_CLASS) && !CONTAINER_BUBBLE_EXIT.classList.contains(DISPLAY_NONE_CLASS)) {
        CONTAINER_BUBBLE_USER.classList.replace(DISPLAY_NONE_CLASS, DISPLAY_FLEX_CLASS)
        CONTAINER_BUBBLE_EXIT.classList.add(DISPLAY_NONE_CLASS)
    }

    if (CONTAINER_BUBBLE_USER.classList.contains(DISPLAY_NONE_CLASS) && !CONTAINER_BUBBLE_CONTINUE.classList.contains(DISPLAY_NONE_CLASS)) {
        CONTAINER_BUBBLE_USER.classList.replace(DISPLAY_NONE_CLASS, DISPLAY_FLEX_CLASS)
        CONTAINER_BUBBLE_CONTINUE.classList.add(DISPLAY_NONE_CLASS)
    }
}

function showExit() {
    if (CONTAINER_BUBBLE_USER.classList.contains(DISPLAY_FLEX_CLASS) && CONTAINER_BUBBLE_EXIT.classList.contains(DISPLAY_NONE_CLASS)) {
        CONTAINER_BUBBLE_USER.classList.replace(DISPLAY_FLEX_CLASS, DISPLAY_NONE_CLASS)
        CONTAINER_BUBBLE_EXIT.classList.remove(DISPLAY_NONE_CLASS)
    }
}

function showError() {
    CONTAINER_BUBBLE_AKINATOR.innerHTML = ERROR_MESSAGE
    showExit()
}

function showSuccess() {
    CONTAINER_BUBBLE_AKINATOR.innerHTML = SUCCESS_MESSAGE + animal.type // Aqui será o animal.name
    showExit()
}

/* MANIPULAÇÃO */
function handle(isTrue) {
    if (animal.type == null) {
        if (!exclusions.includes("mammal")) {
            let type = isTrue ? "mammal" : null
            animal.type = type
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_QUADRUPEDS
            console.log(type)
            exclusions.push("mammal")
            
            if (type == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_BIRD
                exclusions.push("mammal")
                return
            }
        //     animal.type = type
        //     showSuccess() // Não será exibido aqui
        //     return
        return
        }
    }

    if (animal.type == "mammal") {
        if (!exclusions.includes("quadruped")) {
            let locomotion = isTrue ? "quadruped" : null
            animal.locomotion = locomotion
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_CARNIVORE
            console.log(animal.locomotion)
            exclusions.push("quadruped")

            if (locomotion == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_BIPED
                exclusions.push("quadruped")
                return
            }
        return
        }   
    }


    if (animal.locomotion == null && animal.type == "mammal") {
        if (!exclusions.includes("biped")) {
            let locomotion = isTrue ? "biped" : null
            animal.locomotion = locomotion
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_OMNIVOROUS
            console.log(locomotion)
            exclusions.push("biped")
                
            if (locomotion == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_FLYING
                exclusions.push("biped")
                return
            }
        return
        }
    }

    if (animal.locomotion == "biped" && animal.type == "mammal") {
        if (!exclusions.includes("omnivorous")) {
            let food = isTrue ? "omnivorous" : null
            animal.food = food
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_MAN
            console.log(food)
            exclusions.push("omnivorous")
                
            if (food == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_FRUITFUL
                exclusions.push("omnivorous")
                return
            }
        
        animal.type = "homem"
        showSuccess() // Não será exibido aqui
        return
        }
    }

    if (animal.locomotion == "biped" && animal.type == "mammal" && animal.food != "omnivorous") {
        if (!exclusions.includes("fluitful")) {
            let food = isTrue ? "fluitful" : null
            animal.food = food
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_HORSE
            console.log(food)
                
            if (food == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = showError()
                exclusions.push("fluitful")
                return
            }
        
        animal.type = "macaco"
        showSuccess() // Não será exibido aqui
        return
        }
    }

    if (animal.locomotion != "quadruped" && animal.locomotion != "biped" && animal.type == "mammal") {
        if (!exclusions.includes("flying")) {
            let locomotion = isTrue ? "flying" : null
            animal.locomotion = locomotion
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_FLYING
            console.log(locomotion)
            exclusions.push("flying")
                
            if (locomotion == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_AQUATIC
                exclusions.push("flying")
                animal.type = "baleia"
                showSuccess() // Não será exibido aqui
                return
            }
            animal.type = "morcego"
            showSuccess() // Não será exibido aqui
            return
        }
    }



    if (animal.locomotion == "quadruped" && animal.type == "mammal") {
        if (!exclusions.includes("carnivore")) {
            let food = isTrue ? "carnivore" : null
            animal.food = food
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_LION
            console.log(food)
            exclusions.push("carnivore")
                
            if (food == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_HERBIVORE
                exclusions.push("carnivore")
                return
            }
        
        animal.type = "leão"
        showSuccess() // Não será exibido aqui
        return
        }
    }

    if (animal.locomotion == "quadruped" && animal.type == "mammal" && animal.food != "carnivore") {
        if (!exclusions.includes("herbivore")) {
            let food = isTrue ? "herbivore" : null
            animal.food = food
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_HORSE
            console.log(food)
                
            if (food == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = showError()
                exclusions.push("herbivore")
                return
            }
        
        animal.type = "cavalo"
        showSuccess() // Não será exibido aqui
        return
        }
    }

    if (animal.type == null) {
        if (!exclusions.includes("bird")) {
            let type = isTrue ? "bird" : null
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_NON_FLYING
            animal.type = type
            exclusions.push("bird")
            console.log(type)

            if (type == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_REPTILE
                exclusions.push("bird")
                return
           
            }
        return
        }
    }

    if (animal.type == "bird") {
        if (!exclusions.includes("non_flying")) {
           let locomotion = isTrue ? "non_flying" : null
            animal.locomotion = locomotion
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_TROPICAL
            console.log(locomotion)
            exclusions.push("non_flying")
                    
            if (locomotion == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_OFPREY
                exclusions.push("non_flying")
                return
             }
        return
        }
    }

    if (animal.locomotion == "non_flying" && animal.type == "bird") {
        if (!exclusions.includes("tropical")) {
            let habitat = isTrue ? "tropical" : null
            animal.habitat = habitat
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_OSTRICH
            console.log(habitat)
            exclusions.push("tropical")
                
            if (habitat == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_POLAR
                exclusions.push("tropical")
                return
            }
        
        animal.type = "avestruz"
        showSuccess() // Não será exibido aqui
        return
        }
    }

    if (animal.locomotion == "non_flying" && animal.type == "bird" && animal.habitat != "tropical") {
        if (!exclusions.includes("polar")) {
            let habitat = isTrue ? "polar" : null
            animal.habitat = habitat
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_PEGUIM
            console.log(habitat)
                
            if (habitat == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = showError()
                exclusions.push("polar")
                return
            }
        
        animal.type = "penguim"
        showSuccess() // Não será exibido aqui
        return
        }
    }

    if (animal.locomotion != "non_flying" && animal.type == "bird") {
        if (!exclusions.includes("of_prey")) {
            let locomotion = isTrue ? "of_prey" : null
            animal.locomotion = locomotion
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_EAGLE
            console.log(locomotion)
            exclusions.push("of_prey")
                
            if (locomotion == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_SWIMMER
                exclusions.push("of_prey")
                return
            }
        animal.type = "águia"
        showSuccess() // Não será exibido aqui
        return
        }
    }

    if (animal.locomotion != "non_flying" && animal.type == "bird" && animal.locomotion != "of_prey") {
        if (!exclusions.includes("swimmer")) {
            let locomotion = isTrue ? "swimmer" : null
            animal.locomotion = locomotion
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_DUCK
            console.log(locomotion)
                
            if (locomotion == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = showError()
                exclusions.push("swimmer")
                return
            }
        
        animal.type = "pato"
        showSuccess() // Não será exibido aqui
        return
        }
    }

    if (animal.type != "bird" && animal.type != "mammal") {
        if (!exclusions.includes("reptile")) {
           let type = isTrue ? "reptile" : null
            animal.type = type
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_WITHHULL
            console.log(type)
            exclusions.push("reptile")
                    
            if (type == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = showError()
                exclusions.push("reptile")
                return
            }
        return
        }
    }

    if (animal.type == "reptile") {
        if (!exclusions.includes("with_hull")) {
            let locomotion = isTrue ? "with_hull" : null
            animal.locomotion = locomotion
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_TURTLE
            console.log(locomotion)
            exclusions.push("with_hull")
                
            if (locomotion == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_CARNIVORE
                exclusions.push("with_hull")
                return
            }
        animal.type = "tartaruga"
        showSuccess() // Não será exibido aqui
        return
        }
    }

    if (animal.type == "reptile" && animal.locomotion != "with_hull") {
        if (!exclusions.includes("carnivore")) {
            let food = isTrue ? "carnivore" : null
            animal.food = food
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_CROCODILE
            console.log(food)
            exclusions.push("carnivore")
                
            if (food == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_WITHOUTPAWS
                exclusions.push("carnivore")
                return
            }
        animal.type = "crocodilo"
        showSuccess() // Não será exibido aqui
        return
        }
    }

    if (animal.type == "reptile" && animal.locomotion != "with_hull" && animal.food != "carnivore") {
        if (!exclusions.includes("without_paws")) {
           let locomotion = isTrue ? "without_paws" : null
            animal.locomotion = locomotion
            CONTAINER_BUBBLE_AKINATOR.innerHTML = QUESTION_IS_SNAKE
            console.log(locomotion)
            exclusions.push("withou_paws")
                    
            if (locomotion == null) {
                CONTAINER_BUBBLE_AKINATOR.innerHTML = showError()
                exclusions.push("withou_paws")
                return
            }
        animal.type = "cobra"
        showSuccess() // Não será exibido aqui
        return
        }
    }

    
    // TODO: Terminar implementação para os demais tipos
}

/* UTILITADES */
function reset() {

    exclusions = []
    animal.reset()
}


