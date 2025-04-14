// Mostrar pestaña activa
function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Generar QR Code y vCard
function generarSalida() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;
    const empresa = document.getElementById('empresa').value;

    // Generar vCard
    const vCard = `BEGIN:VCARD
    \nVERSION:3.0
    \nFN:${nombre}
    \nTEL:${telefono}
    \nDiR:${direccion}
    \nEMAIL:${email}
    \nOrg:${empresa}
    \nEND:VCARD`.trim();
    document.getElementById('vCardTexto').value = vCard;


    const outputDiv = document.getElementById('vCardTexto');

    //mostrar tarjeta card
    outputDiv.innerHTML = `    
<br>BEGIN:VCARD
<br>VERSION:3.0
<br>FN:${nombre}
<br>TEL:${telefono}
<br>EMAIL:${email}
<br>ADR:;;${direccion}
<br>ORG:${empresa}
<br>TITLE:Desarrollador
<br>END:VCARD 
    `;

    // crear el código QR

    // Obtener los valores del formulario 

    if (!nombre || !telefono || !direccion || !email || !empresa) {
        alert('Por favor, complete todos los campos del formulario.');
        return;
    }


    // Crear el contenido para el código QR
    const qrContenido = `
      \nNombre:${nombre}
      \nTelefono:${telefono}
      \nDireccion:${direccion}
      \nEmail:${email}
      \nEmpresa:${empresa}`;


    // Limpiar cualquier QR generado previamente
    const qrCodeContainer = document.getElementById('qrCanvas');
    qrCodeContainer.innerHTML = '';

    // Generar el código QR
    QRCode.toCanvas(qrCodeContainer, qrContenido, function (error) {
        if (error) {
            console.error('Error generando el QR:', error);
            alert('Hubo un problema al generar el código QR.');
        }
    });

}
