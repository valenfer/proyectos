
const APIKEY = "9BShQca9kJaLbuY1Cx2DPqTUeRnOPdVU7ySnidGN";
const RUTA = `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`;



// Datos de efemérides
const ephemeridesData = [
    { date: '15 de Diciembre', event: 'Lluvia de Meteoros Gemínidas' },
    { date: '21 de Diciembre', event: 'Solsticio de Invierno' },
    { date: '25 de Diciembre', event: 'Conjunción de Júpiter y Saturno' }
];

// Información de planetas
const planetData = {
    mercurio: {
        imgplanet: "./imagenes/mercurio.jpg",
        name: 'Mercurio',
        description: 'Este pequeño planeta gira lentamente en comparación con la Tierra, por lo que un día dura mucho tiempo. Se necesitan 59 días terrestres para tener un día (o una rotación completa) en Mercurio. Sin embargo, ¡un año en Mercurio pasa rápido! Debido a que es el planeta más cercano al Sol, no se tarda mucho en dar una vuelta completa. Mercurio completa una revolución alrededor del Sol en solo 88 días terrestres. Si vivieras allí, ¡sería tu cumpleaños cada tres meses!        Un día en Mercurio no es como un día en la Tierra. Para nosotros, el Sol sale y se pone todos los días. Debido a que Mercurio tiene una rotación lenta y un año corto, allí el Sol tarda mucho tiempo en salir y ponerse. ¡Mercurio solo tiene un amanecer cada 180 días terrestres! ',
        diameter: '4.879,4 km',
        distance: '0,27 UA'
    },
    marte: {
        imgplanet: "./imagenes/marte.png",
        name: 'Marte',
        description: 'Marte es un mundo frío y desértico. La temperatura media en Marte es de -65 grados Celsius (-85 grados Fahrenheit), muy por debajo del punto de congelación. Marte tiene la mitad del tamaño de la Tierra. A veces es llamado el planeta rojo. Es rojo debido al hierro oxidado de su suelo. Al igual que la Tierra, Marte tiene estaciones del año, casquetes polares, volcanes, cañones y tiempo meteorológico. Tiene una atmósfera muy delgada compuesta principalmente de dióxido de carbono, nitrógeno y argón. Las personas no podrían respirar el aire en Marte.',
        diameter: '6.794,4 km',
        distance: '0,52 UA'
    },

    tierra: {
        imgplanet: "./imagenes/marte.png",
        name: 'Tierra',
        description: 'Nuestro hogar, el planeta Tierra, es un planeta terrestre y rocoso. Tiene una superficie sólida y activa, con montañas, valles, cañones, llanuras y mucho más. La Tierra es especial porque es un planeta océano, ya que el agua cubre el 70% de su superficie.',
        diameter: '12,742 km',
        distance: '0 UA (Unidad Astronómica)'
    },
    
    jupiter: {
        imgplanet: "./imagenes/marte.png",
        name: 'Júpiter',
        description: 'Júpiter es el planeta más grande de nuestro sistema solar. Es parecido a una estrella, pero nunca tuvo la masa suficiente para comenzar a arder. Está cubierto de bandas de nubes arremolinadas. Tiene grandes tormentas como la Gran Mancha Roja, que existe desde hace cientos de años. Júpiter es un gigante gaseoso y no tiene una superficie sólida. Todavía no está claro si en el fondo Júpiter tiene un núcleo central de material sólido o si podría ser una sopa espesa, supercaliente y densa. Júpiter también tiene anillos, pero son demasiado tenues para verlos con claridad.',
        diameter: '139.820 km',
        distance: '3.92 UA'
    },
    saturno: {
        imgplanet: "./imagenes/marte.png",
        name: 'Saturno',
        description: 'Saturno no es el único planeta que tiene anillos, pero definitivamente tiene los más bellos. Los anillos que vemos están compuestos por grupos de pequeños aros que rodean a Saturno. Están hechos de pedazos de hielo y roca. Como Júpiter, Saturno es una pelota de hidrógeno y helio, en gran parte.',
        diameter: '116.460 km',
        distance: '1.5 UA'
    },
    urano: {
        imgplanet: "./imagenes/marte.png",
        name: 'Urano',
        description: 'Urano está compuesto de agua, metano y amoniaco sobre un pequeño centro rocoso. Su atmósfera está hecha de hidrógeno y helio, como Júpiter y Saturno, pero además contiene metano. El metano es lo que le da a Urano el color azul.',
        diameter: '6,779 km',
        distance: '1.5 UA'
    },
    neptuno: {
        imgplanet: "./imagenes/marte.png",
        name: 'Neptuno',
        description: 'Neptuno es oscuro, frío y muy ventoso. Es el último de los planetas de nuestro sistema solar. Está más de 30 veces más lejos del Sol que la Tierra. Neptuno es muy parecido a Urano. Está compuesto de una espesa mezcla de agua, amoniaco y metano sobre un centro sólido del tamaño de la Tierra. Su atmósfera se compone de hidrógeno, helio y metano. El metano le da a Neptuno el mismo color azul de Urano. Neptuno tiene seis anillos que no se ven fácilmente.',
        diameter: '6,779 km',
        distance: '1.5 UA'
    },
    pluton: {
        imgplanet: "./imagenes/marte.png",
        name: 'Pluton',
        description: 'Plutón está catalogado como un planeta enano. En 2006, Plutón fue categorizado con otros tres objetos en el sistema solar que son aproximadamente del mismo tamaño que Plutón: Ceres, Makemake y Eris. Estos objetos, junto con Plutón, son mucho más pequeños que los "otros" planetas. ',
        diameter: '6,779 km',
        distance: '1.5 UA'
    }
};

// Función para manejar la navegación entre secciones
function initSectionNavigation() {
    const navButtons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('main section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.dataset.section;

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Mostrar la sección seleccionada
            document.getElementById(sectionId).style.display = 'block';
        });
    });
}

// Función para obtener la imagen del día de la NASA
function getNasaDailyImage() {
    fetch(`${RUTA}`)
        .then(response => response.json())
        .then(data => {
            const nasaImage = document.getElementById('nasaImage');
            const imageTitle = document.getElementById('imageTitle');
            const imageExplanation = document.getElementById('imageExplanation');

            nasaImage.src = data.url;
            nasaImage.alt = data.title;
            imageTitle.textContent = data.title;
            imageExplanation.textContent = data.explanation;
        })
        .catch(error => {
            console.error('Error al obtener imagen de NASA:', error);
            const imageTitle = document.getElementById('imageTitle');
            const imageExplanation = document.getElementById('imageExplanation');
            
            imageTitle.textContent = 'Error al cargar imagen';
            imageExplanation.textContent = 'No se pudo conectar con la API de NASA. Inténtalo de nuevo más tarde.';
        });
}
let lat, lon;
// Función para configurar las efemérides
function setEphemerides() {
    if (navigator.geolocation) {
        // Obtener la ubicación del usuario
        navigator.geolocation.getCurrentPosition(function(position) {
            // Capturar la latitud y longitud
            lat = position.coords.latitude;
            lon = position.coords.longitude;

            // Imprimir los valores en el elemento con id="location"
            document.getElementById("location").innerHTML = "Longitud: " + lon + " Latitud: " + lat;
        }, function(error) {
            // En caso de error, mostrar un mensaje
            document.getElementById("location").innerHTML = "No se pudo obtener la ubicación.";
        });
    } else {
        // Si la geolocalización no está disponible
        document.getElementById("location").innerHTML = "Geolocalización no disponible en este navegador.";
    }
    const ephemeridesList = document.getElementById('ephemeridesList');
    let amanecer, atardecer;
    async function getTimes(){
        const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lon}&lng=${lat}`);
        const result = await response.json();
        console.log(result);
        document.getElementById("atardecer").innerHTML+= result.results.sunset;
        document.getElementById("amanecer").innerHTML+= result.results.sunrise;

    }
    getTimes();
    ephemeridesData.forEach(item => {
        li = document.createElement('li');
        li.innerHTML = `<strong>${item.date}:</strong> ${item.event}`;
        ephemeridesList.appendChild(li);
    });
    
    


}

// Función para manejar la selección de planetas
function initPlanetSelection() {
    const planetButtons = document.querySelectorAll('.planet-selector button');
    const planetInfo = document.getElementById('planetInfo');

    planetButtons.forEach(button => {
        button.addEventListener('click', () => {
            const planet = button.dataset.planet;
            const info = planetData[planet];

            planetInfo.innerHTML = `
                <div id="planetas">
                    <h3>${info.name}</h3>
                    <p>${info.description}</p>
                    <p>Diámetro: ${info.diameter}</p>
                    <p>Distancia del Sol: ${info.distance}</p>
                </div>`; 
        });
    });
}

// Función de inicialización
function init() {
    initSectionNavigation();
    initPlanetSelection();
    getNasaDailyImage();
    setEphemerides();
}

// Ejecutar inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);