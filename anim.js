// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Eres tan especial, que hay noches en las que no quiero soñar, porque si sueño tengo miedo de despertar y darme cuenta que solo fuiste un sueño y no mi gran realidad", time: 5 },
  { text: "Puede haber millones de persona, pero cuando te conocí, ese millón se redujo a una sonrisa y a un par de ojitos que me invitaron a soñar", time: 10 },
  { text: "Ya que no puedo besarte, voy a pensarte, ya que no puedo tocarte voy a soñarte, ya que no puedo ir a verte voy a esperarte", time: 20 },
  { text: "Descubrí que tenías la mirada más dulce... que no necesitas añadirle al café de tus ojos", time: 30 },
  { text: "Me perdí en tu mirada, es que el color de tus ojos me encanta; no eran ni azules, ni verdes. Eran color café, café que quita el sueño. Café que produce desvelos", time: 40 },
  { text: "Yo con ganas de encerrarte en mi inestable mundo y tu allá afuera formando galaxias con tan solo sonreir", time: 50 },
  { text: "Te quiero... te quiero para volvernos locos de la risa, ebrios de nada y pasear sin prisa por las calles, eso sí, tomados de la mano mejor dicho... tomados del corazón", time: 60 },
  { text: "La primera vez que te vi no fue amor a primera vista. Mi amor por ti se fue formando lentamente, tu personalidad, tu voz, tu cabello, tu sentido del humor, la manera en que me miras y sonríes poco a poco se me iba aclarando todo. Eres lo que yo buscaba", time: 70 },
  { text: "Mi amor por ti es, la alegría de los buenos, la maravilla de los sabios y el asombro de los dioses", time: 80 },
  { text: "Tal vez yo no sepa donde ir, pero si pudiera una mañana abrir los ojos y ver los tuyos, sabria donde quedarme", time: 90 },
  { text: "Te dejare de amar solo cuando alguien te quiera tan solo un poco mas que yo", time: 100 },
  { text: "Si no llegas a ser el amor de mi vida, diré que me equivoqué de vida y no más de amor", time: 110 },
  { text: "Hiciste que mi año tuviera sentido, me hiciste y haces reír por largos ratos y en las noches cuando no quería nada más, tus mensajes aparecían de la nada y eres mi compañía en muchos insomnios", time: 120 },
  { text: "La luna es hermosa pero nunca podrá competir con el inigualable brillo de tus ojos", time: 130 },
  { text: "Cada historia de amor es hermosa pero la nuestra es mi favorita", time: 140 },
  { text: "Como pretendes que no me enamore de ti, si tienes el encanto de un angel y la tentacion de un demonio", time: 150 },
  { text: "Que ojos tan precioss te cargas dan ganas de verlos para toda la vida. Me encantas", time: 160 },
  { text: "Dicen que una mente ocupada no extraña a nadie, pero mirame aqui con mil cosas por hacer y siempre elijo pensarte", time: 170 },
  { text: "Anoche te besé en mis sueños, y no sabes lo dulce que se sintió aquella gran ilusión", time: 180 },
  { text: "Lonely before the sun cried", time: 190 },
  { text: "Siempre seras única mujer capaz de revivir todo lo que dentro de mi ha muerto", time: 200 },
  { text: "No soy de los que cree en la suerte, pero suerte la mía al haber coincidido contigo, un poco tarde, pero en el momento exacto", time: 210 },
  { text: "Le hable al universo lo que sentia por ti y me dijo que era la primera vez que se sentia pequeño", time: 220 },
  { text: "Te amo como se aman ciertas cosas oscuras, secretamente, entre la sombra y el alma", time: 230 },
  { text: "Tu belleza es como una rosa negra, rara y única, con una profundidad que hipnotiza y una elegancia que cautiva. Eres tan especial y singular, que cada momento a tu lado se convierte en un tesoro inigualable, digno de ser guardado en el corazón para siempre.", time: 240 },
  { text: "Tus miradas me someten, tus labios me encienden, y cada sonrisa tuya despierta en mí un deseo irrefrenable de ser tuyo.", time: 250 },
  { text: " I WANNA BE YOURS", time: 260 },
  { text: " TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO........ TE AMO.", time: 270 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);