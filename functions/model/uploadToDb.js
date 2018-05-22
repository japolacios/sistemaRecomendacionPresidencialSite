const firebase = require('firebase');
//Call the firebase Key
const configKey = require('./../key');
// Initialize Firebase Key
firebase.initializeApp(configKey.getKey());

//Reference to db
var pollRef = firebase.database().ref('/poll');

exports.uploadPollQuestions = function () {
    //Para cada elemento del Array se hace un puch a la base de datos
    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        //Creo la nueva referencia de elemento para enviar a la base de datos
        var newPollRef = pollRef.push();
        newPollRef.set({
            pregunta: data[index].pregunta,
            vargas: data[index].vargas,
            calle: data[index].calle,
            fajardo: data[index].fajardo,
            petro: data[index].petro,
            duque: data[index].duque
        });

    }
}
var data = [{
        "pregunta": "¿Crees que la droga deba ser despenalizada en el país como fórmula para la lucha contra el narcotráfico?",
        "fajardo": 3,
        "duque": 0,
        "petro": 4,
        "vargas": 2,
        "calle": 1
    },
    {
        "pregunta": "¿Consideras que el servicio militar debe continuar siendo obligatorio?",
        "fajardo": 0,
        "duque": 4,
        "petro": 2,
        "vargas": 3,
        "calle": 1
    },
    {
        "pregunta": "¿Estás de acuerdo con la prohibición de espectáculos donde se fomente la crueldad animal?",
        "fajardo": 3,
        "duque": 1,
        "petro": 4,
        "vargas": 0,
        "calle": 2
    },
    {
        "pregunta": "¿Apoyarías la aprobación del matrimonio de personas del mismo sexo?",
        "fajardo": 3,
        "duque": 0,
        "petro": 4,
        "vargas": 2,
        "calle": 1
    },
    {
        "pregunta": "¿Está de acuerdo con que las parejas del mismo sexo puedan adoptar?",
        "fajardo": 4,
        "duque": 0,
        "petro": 3,
        "vargas": 1,
        "calle": 2
    },
    {
        "pregunta": "¿Apoyas la implementación de iniciativas a favor de una participación política más activa de la mujer?",
        "fajardo": 4,
        "duque": 0,
        "petro": 1,
        "vargas": 2,
        "calle": 3
    },
    {
        "pregunta": "¿Consideras que el aborto debe ser legalizado y hace parte de la decisión de cada mujer?",
        "fajardo": 4,
        "duque": 0,
        "petro": 3,
        "vargas": 1,
        "calle": 2
    },
    {
        "pregunta": "¿Cree que las tierras latifundias deben ser redistribuidas entre los campesinos para generar más oportunidades laborales?",
        "fajardo": 2,
        "duque": 0,
        "petro": 4,
        "vargas": 1,
        "calle": 3
    },
    {
        "pregunta": "¿Apoya la idea de buscar un método para redistribuir la riqueza colombiana equitativamente entre la población?",
        "fajardo": 3,
        "duque": 0,
        "petro": 4,
        "vargas": 1,
        "calle": 2
    },
    {
        "pregunta": "¿Considera que los ingresos medios de los colombianos deben ser más competitivos?",
        "fajardo": 4,
        "duque": 1,
        "petro": 2,
        "vargas": 0,
        "calle": 3
    },
    {
        "pregunta": "¿Apoyas la continuidad del proceso de paz con el ELN?",
        "fajardo": 2,
        "duque": 0,
        "petro": 3,
        "vargas": 1,
        "calle": 4
    },
    {
        "pregunta": "¿Estás de acuerdo con la implementación de los acuerdos de paz con las FARC tal y como se firmaron?",
        "fajardo": 4,
        "duque": 0,
        "petro": 3,
        "vargas": 1,
        "calle": 2
    },
    {
        "pregunta": "¿Apoyas la participación política de reinsertados para mantener\nlos acuerdos de paz vigentes?",
        "fajardo": 3,
        "duque": 1,
        "petro": 2,
        "vargas": 0,
        "calle": 4
    },
    {
        "pregunta": "¿Consideras importante mantener el apoyo a las victimas del conflicto armado con las FARC?",
        "fajardo": 2,
        "duque": 1,
        "petro": 4,
        "vargas": 0,
        "calle": 3
    },
    {
        "pregunta": "¿Estás de acuerdo con la eliminación del modelo actual de las EPS?",
        "fajardo": 3,
        "duque": 0,
        "petro": 2,
        "vargas": 1,
        "calle": 4
    },
    {
        "pregunta": "¿Consideras que el estado debe garantizar un servicio de salud de calidad para todos los ciudadanos?",
        "fajardo": 4,
        "duque": 0,
        "petro": 3,
        "vargas": 1,
        "calle": 2
    },
    {
        "pregunta": "¿Consideras que la educación pública superior debe ser gratuita y universal para todos los colombianos?",
        "fajardo": 2,
        "duque": 0,
        "petro": 4,
        "vargas": 1,
        "calle": 3
    },
    {
        "pregunta": "¿Consideras que el Icetex no debería cobrar intereses a los estudiantes?",
        "fajardo": 2,
        "duque": 1,
        "petro": 4,
        "vargas": 0,
        "calle": 3
    },
    {
        "pregunta": "¿Apoyas el reconocimiento explícito de los derechos de la población LGBTI en manuales de convivencia de instituciones educativas?",
        "fajardo": 3,
        "duque": 0,
        "petro": 4,
        "vargas": 1,
        "calle": 2
    },
    {
        "pregunta": "¿Consideras que el plan ser pilo paga debe ser removido?",
        "fajardo": 4,
        "duque": 0,
        "petro": 3,
        "vargas": 2,
        "calle": 1
    },
    {
        "pregunta": "¿Consideras el estado colombiano debe invertir más en bibliotecas, parques temáticos y demás instalaciones que se encargan de fomentar el conocimiento cultural y educativo del país?",
        "fajardo": 3,
        "duque": 1,
        "petro": 4,
        "vargas": 0,
        "calle": 2
    },
    {
        "pregunta": "¿Considera usted que el estado debe remover el pago de prestaciones sociales a la madres comunitarias cuando se afecte el techo fiscal?",
        "fajardo": 0,
        "duque": 4,
        "petro": 1,
        "vargas": 3,
        "calle": 2
    },
    {
        "pregunta": "¿Crees que las condiciones de los TLC deben ser renegociados?",
        "fajardo": 3,
        "duque": 4,
        "petro": 1,
        "vargas": 0,
        "calle": 2
    },
    {
        "pregunta": "¿Considera usted que el estado debe brindar apoyo financiero a los jóvenes emprendedores?",
        "fajardo": 4,
        "duque": 2,
        "petro": 2,
        "vargas": 0,
        "calle": 3
    },
    {
        "pregunta": "¿Apoya las políticas de austeridad para fomentar el crecimiento de la economía colombiana?",
        "fajardo": 1,
        "duque": 4,
        "petro": 0,
        "vargas": 3,
        "calle": 2
    },
    {
        "pregunta": "¿Consideras que las habilidades de las personas determinan sus necesidades básicas?",
        "fajardo": 0,
        "duque": 4,
        "petro": 1,
        "vargas": 3,
        "calle": 2
    },
    {
        "pregunta": "¿Consideras que los impuestos cobrados a los ricos deben ser redistribuidos entre los pobres para cubrir sus necesidades?",
        "fajardo": 2,
        "duque": 0,
        "petro": 4,
        "vargas": 1,
        "calle": 3
    },
    {
        "pregunta": "¿Apoya la noción de migrar la economía extractiva a una economía agrícola?",
        "fajardo": 2,
        "duque": 0,
        "petro": 4,
        "vargas": 1,
        "calle": 3
    },
    {
        "pregunta": "¿Crees que la edad para recibir una pensión debe ser aumentada?",
        "fajardo": 0,
        "duque": 4,
        "petro": 1,
        "vargas": 3,
        "calle": 2
    },
    {
        "pregunta": "¿Apoya el uso de energía renovables en Colombia para disminuir la dependencia a los hidrocarburos?",
        "fajardo": 3,
        "duque": 0,
        "petro": 4,
        "vargas": 1,
        "calle": 2
    },
    {
        "pregunta": "¿Crees que reducir los impuestos a las grandes industrias aumentaría las ofertas laborales de la misma para el pueblo colombiano?",
        "fajardo": 1,
        "duque": 4,
        "petro": 0,
        "vargas": 3,
        "calle": 2
    },
    {
        "pregunta": "¿Apoya la inversión a campesinos para aumentar la producción agrícola?",
        "fajardo": 2,
        "duque": 0,
        "petro": 4,
        "vargas": 1,
        "calle": 3
    },
    {
        "pregunta": "¿Consideras que se debe aumentar la inversión en defensa (policia, ejército y armamento)?",
        "fajardo": 2,
        "duque": 4,
        "petro": 1,
        "vargas": 3,
        "calle": 0
    },
    {
        "pregunta": "¿Crees que el fracking debe ser permitido como alternativa para extraer petroleo?",
        "fajardo": 1,
        "duque": 4,
        "petro": 0,
        "vargas": 3,
        "calle": 2
    },
    {
        "pregunta": "¿Apoyas el uso del Glifosato para la erradicación de cultivos ilícitos?",
        "fajardo": 1,
        "duque": 4,
        "petro": 0,
        "vargas": 3,
        "calle": 2
    },
    {
        "pregunta": "¿Crees que el acceso al agua debe reconocerse como un derecho fundamental en la constitución?",
        "fajardo": 1,
        "duque": 2,
        "petro": 4,
        "vargas": 0,
        "calle": 3
    },
    {
        "pregunta": "¿Crees que se debe reforzar la protección de reservas y santuarios naturales para conservar la flora y fauna de Colombia?",
        "fajardo": 3,
        "duque": 1,
        "petro": 4,
        "vargas": 0,
        "calle": 2
    },
    {
        "pregunta": "¿Apoya la regulación estricta de la actividad minera ilegal en el territorio colombiano?",
        "fajardo": 4,
        "duque": 0,
        "petro": 1,
        "vargas": 2,
        "calle": 3
    },
    {
        "pregunta": "¿Crees que las bases militares extranjeras deberían permanecer en Colombia?",
        "fajardo": 1,
        "duque": 4,
        "petro": 0,
        "vargas": 3,
        "calle": 2
    },
    {
        "pregunta": "¿Piensas que Colombia debería seguir apoyando la migración de refugiados venezolanos?",
        "fajardo": 2,
        "duque": 3,
        "petro": 0,
        "vargas": 4,
        "calle": 1
    },
    {
        "pregunta": "¿Piensas que las personas \"indocumentadas\" puedan tener acceso a la tarjeta profesional colombiana?",
        "fajardo": 1,
        "duque": 4,
        "petro": 0,
        "vargas": 3,
        "calle": 2
    },
    {
        "pregunta": "¿Piensa que las autodefensas en su momento fueron un bien necesario para el país?",
        "fajardo": 1,
        "duque": 4,
        "petro": 0,
        "vargas": 3,
        "calle": 2
    },
    {
        "pregunta": "¿Considera que el proceso de desmovilización de las autodefensas ha sido efectivo?",
        "fajardo": 1,
        "duque": 4,
        "petro": 0,
        "vargas": 3,
        "calle": 2
    },
    {
        "pregunta": "¿Apoyas el porte legal de armas?",
        "fajardo": 0,
        "duque": 4,
        "petro": 1,
        "vargas": 3,
        "calle": 2
    },
    {
        "pregunta": "¿Apoyas una asamblea nacional constituyente para cambiar la contitución?",
        "fajardo": 0,
        "duque": 4,
        "petro": 1,
        "vargas": 2,
        "calle": 3
    },
    {
        "pregunta": "¿Se deben implementar soluciones tecnológicas que garanticen la transparencia de funcionarios públicos para erradicar la corrupción. como se plantea en la ley anticorrupción?",
        "fajardo": 4,
        "duque": 1,
        "petro": 3,
        "vargas": 0,
        "calle": 2
    },
    {
        "pregunta": "¿Crees que los opcupantes de cargos políticos deben hacer público su declaración de bienes?",
        "fajardo": 2,
        "duque": 0,
        "petro": 4,
        "vargas": 1,
        "calle": 3
    },
    {
        "pregunta": "¿Crees que las donaciones a campañas de los candidatos deberían estar reguladas por la ley?",
        "fajardo": 3,
        "duque": 1,
        "petro": 4,
        "vargas": 0,
        "calle": 2
    },
    {
        "pregunta": "¿Apoyas que las empresas que brindan servicios públicos basicos sean de propiedad del estado?",
        "fajardo": 3,
        "duque": 0,
        "petro": 4,
        "vargas": 2,
        "calle": 1
    },
    {
        "pregunta": "¿Apoya la implementación de facturación electrónica en Colombia?",
        "fajardo": 1,
        "duque": 4,
        "petro": 0,
        "vargas": 3,
        "calle": 2
    },
    {
        "pregunta": "¿Considera relevante hacer uso de nuevas teconologías para aumentar la cobertura en educación?",
        "fajardo": 3,
        "duque": 4,
        "petro": 0,
        "vargas": 2,
        "calle": 1
    }
];