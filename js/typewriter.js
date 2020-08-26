var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Marketing')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Business Strategy')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web Development')
    .pauseFor(2500)
    .deleteAll()
    .start();
