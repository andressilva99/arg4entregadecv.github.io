document.getElementById('datos').onclick = function() {
    console.log("Boton oprimido datos");
    document.getElementById('bconocimiento').style.display = 'none';
    document.getElementById('beducacion').style.display = 'none';
    document.getElementById('bcontacto').style.display = 'none';
    document.getElementById('bexperiencia').style.display = 'none';
    document.getElementById('bdatos').style.display = 'block';

}
document.getElementById('contacto').onclick = function() {
    console.log("Boton oprimido contacto");
    document.getElementById('bconocimiento').style.display = 'none';
    document.getElementById('beducacion').style.display = 'none';
    document.getElementById('bdatos').style.display = 'none';
    document.getElementById('bexperiencia').style.display = 'none';
    document.getElementById('bcontacto').style.display = 'block';
}
document.getElementById('experiencia').onclick = function() {
    console.log("Boton oprimido experiencia");
    document.getElementById('bconocimiento').style.display = 'none';
    document.getElementById('beducacion').style.display = 'none';
    document.getElementById('bdatos').style.display = 'none';
    document.getElementById('bcontacto').style.display = 'none';
    document.getElementById('bexperiencia').style.display = 'block';
}
document.getElementById('educacion').onclick = function() {
    console.log("Boton oprimido educacion");
    document.getElementById('bconocimiento').style.display = 'none';
    document.getElementById('bdatos').style.display = 'none';
    document.getElementById('bcontacto').style.display = 'none';
    document.getElementById('bexperiencia').style.display = 'none';
    document.getElementById('beducacion').style.display = 'block';


}
document.getElementById('conocimiento').onclick = function() {
    console.log("Boton oprimido conocimiento");
    document.getElementById('bdatos').style.display = 'none';
    document.getElementById('bcontacto').style.display = 'none';
    document.getElementById('bexperiencia').style.display = 'none';
    document.getElementById('beducacion').style.display = 'none';
    document.getElementById('bconocimiento').style.display = 'block';

}