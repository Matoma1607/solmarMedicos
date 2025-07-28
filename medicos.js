const medicos = [
  {
    nombre: "Dr. Juan Pérez",
    especialidad: "Oftalmólogo",
    direccion: "Av. Mitre 123, Tucumán",
    maps: "https://www.google.com/maps?q=Av.+Mitre+123,+Tucumán",
    whatsapp: "3815755909",
  },
  {
    nombre: "Dra. Laura Gómez",
    especialidad: "Oftalmóloga",
    direccion: "Calle San Martín 456, Tucumán",
    maps: "https://www.google.com/maps?q=Calle+San+Martín+456,+Tucumán",
    whatsapp: "3815755909",
  },
  {
    nombre: "Dr. Marcelo Ruiz",
    especialidad: "Oftalmólogo",
    direccion: "25 de Mayo 789, Tucumán",
    maps: "https://www.google.com/maps?q=25+de+Mayo+789,+Tucumán",
    whatsapp: "3815755909",
  },
];

const lista = document.getElementById("lista-medicos");
const buscador = document.getElementById("buscador");

function mostrarMedicos(filtrados) {
  lista.innerHTML = "";
  filtrados.forEach((medico) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card p-3 h-100">
        <h5>${medico.nombre}</h5>
        <p><strong>Especialidad:</strong> ${medico.especialidad}</p>
        <p><strong>Dirección:</strong> ${medico.direccion}</p>
      <a href="${medico.maps}" target="_blank" class="btn btn-mapa mb-2">Ver en Google Maps</a><br>
      <a href="https://wa.me/549${medico.whatsapp}" target="_blank" class="btn btn-whatsapp">
  <img src="https://icongr.am/fontawesome/whatsapp.svg?size=18&color=ffffff" alt="WhatsApp" style="margin-right: 6px;" />
  WhatsApp
</a>


      </div>
    `;
    lista.appendChild(card);
  });
}

// Mostrar todos al iniciar
mostrarMedicos(medicos);

// Buscar en tiempo real
buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const filtrados = medicos.filter((m) =>
    m.nombre.toLowerCase().includes(texto)
  );
  mostrarMedicos(filtrados);
});
