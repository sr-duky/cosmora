window.addEventListener('DOMContentLoaded', () => {

  /* ═══════════════════════════════════════
     DATA — PLANETS (completos, 8)
  ═══════════════════════════════════════ */
  const planets = [
    {
      name: "Mercurio",
      category: "Planeta Rocoso Interior",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
      short: "El planeta más cercano al Sol y el más pequeño del sistema solar.",
      description: "Mercurio es el planeta más pequeño del sistema solar y el más próximo al Sol. Su superficie está cubierta de cráteres de impacto similares a los de la Luna.",
      curiosity: "Un año en Mercurio dura solo 88 días terrestres, pero un día solar equivale a 176 días terrestres.",
      history: "Conocido desde la antigüedad, fue observado por sumerios y mayas. Galileo lo estudió con telescopio en el siglo XVII.",
      stats: [
        { label: "Diámetro", value: "4,879 km" },
        { label: "Distancia", value: "57.9M km" },
        { label: "Período", value: "88 días" },
        { label: "Temperatura", value: "430°C" },
        { label: "Gravedad", value: "3.7 m/s²" },
        { label: "Lunas", value: "0" }
      ]
    },
    {
      name: "Venus",
      category: "Planeta Rocoso Interior",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
      short: "El planeta más caliente del sistema solar.",
      description: "El planeta más caliente del sistema solar gracias a su densa atmósfera de CO₂ que crea un efecto invernadero extremo. Rota en dirección inversa al resto de planetas.",
      curiosity: "Gira al revés respecto a la mayoría de planetas: en Venus el Sol sale por el oeste y se pone por el este.",
      history: "Nombrado por la diosa romana del amor. Su superficie fue mapeada por la sonda Magellan entre 1990 y 1994.",
      stats: [
        { label: "Diámetro", value: "12,104 km" },
        { label: "Distancia", value: "108.2M km" },
        { label: "Período", value: "225 días" },
        { label: "Temperatura", value: "465°C" },
        { label: "Gravedad", value: "8.87 m/s²" },
        { label: "Lunas", value: "0" }
      ]
    },
    {
      name: "Tierra",
      category: "Planeta Habitable",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
      short: "El único planeta conocido con vida en el universo.",
      description: "La Tierra es el único planeta conocido con vida. Posee una atmósfera rica en nitrógeno y oxígeno, agua líquida en superficie y un campo magnético protector.",
      curiosity: "El 70% de su superficie está cubierta por agua líquida. Es el planeta más denso del sistema solar.",
      history: "Formada hace aproximadamente 4.5 mil millones de años a partir de la nebulosa solar.",
      stats: [
        { label: "Diámetro", value: "12,742 km" },
        { label: "Distancia", value: "149.6M km" },
        { label: "Período", value: "365 días" },
        { label: "Temperatura", value: "15°C" },
        { label: "Gravedad", value: "9.81 m/s²" },
        { label: "Lunas", value: "1" }
      ]
    },
    {
      name: "Marte",
      category: "Planeta Rocoso",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
      short: "El planeta rojo, destino de futuras misiones humanas.",
      description: "Marte es objetivo de futuras misiones humanas. Posee la montaña más alta del sistema solar, el Olympus Mons, con 21 km de altura.",
      curiosity: "Tiene el volcán más grande del sistema solar: Olympus Mons, tres veces la altura del Everest.",
      history: "Observado desde la antigüedad. La primera misión exitosa fue Mariner 4 en 1965.",
      stats: [
        { label: "Diámetro", value: "6,779 km" },
        { label: "Distancia", value: "227.9M km" },
        { label: "Período", value: "687 días" },
        { label: "Temperatura", value: "-60°C" },
        { label: "Gravedad", value: "3.72 m/s²" },
        { label: "Lunas", value: "2" }
      ]
    },
    {
      name: "Júpiter",
      category: "Gigante Gaseoso",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
      short: "El planeta más grande del sistema solar.",
      description: "Júpiter es el planeta más masivo del sistema solar. Su Gran Mancha Roja es una tormenta que lleva activa más de 350 años y es más grande que la Tierra.",
      curiosity: "Su Gran Mancha Roja es una tormenta anticilónica que existe desde hace siglos y cabe tres veces la Tierra en su interior.",
      history: "Nombrado por el dios romano supremo. Galileo descubrió sus cuatro lunas principales en 1610.",
      stats: [
        { label: "Diámetro", value: "139,820 km" },
        { label: "Distancia", value: "778.5M km" },
        { label: "Período", value: "11.9 años" },
        { label: "Temperatura", value: "-110°C" },
        { label: "Gravedad", value: "24.79 m/s²" },
        { label: "Lunas", value: "95" }
      ]
    },
    {
      name: "Saturno",
      category: "Gigante Gaseoso",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
      short: "El planeta de los anillos espectaculares.",
      description: "Saturno posee el sistema de anillos más espectacular del sistema solar, compuesto principalmente por hielo y roca. Es el planeta menos denso: podría flotar en agua.",
      curiosity: "Su densidad es menor que la del agua: si existiera un océano lo suficientemente grande, Saturno flotaría en él.",
      history: "Conocido desde la antigüedad. Galileo observó sus anillos en 1610 pero no pudo identificarlos correctamente.",
      stats: [
        { label: "Diámetro", value: "116,460 km" },
        { label: "Distancia", value: "1,432M km" },
        { label: "Período", value: "29.5 años" },
        { label: "Temperatura", value: "-140°C" },
        { label: "Gravedad", value: "10.44 m/s²" },
        { label: "Lunas", value: "146" }
      ]
    },
    {
      name: "Urano",
      category: "Gigante Helado",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
      short: "El planeta inclinado que rota sobre su costado.",
      description: "Urano rota casi acostado sobre su eje, lo que le da estaciones extremas que duran 21 años terrestres cada una. Es el planeta más frío del sistema solar.",
      curiosity: "Su eje de rotación está inclinado 98°, por lo que técnicamente sus polos apuntan al Sol en lugar de su ecuador.",
      history: "Fue el primer planeta descubierto con un telescopio, por William Herschel en 1781.",
      stats: [
        { label: "Diámetro", value: "50,724 km" },
        { label: "Distancia", value: "2,867M km" },
        { label: "Período", value: "84 años" },
        { label: "Temperatura", value: "-195°C" },
        { label: "Gravedad", value: "8.69 m/s²" },
        { label: "Lunas", value: "28" }
      ]
    },
    {
      name: "Neptuno",
      category: "Gigante Helado",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
      short: "El planeta azul con los vientos más rápidos.",
      description: "Neptuno posee vientos supersónicos que alcanzan los 2,100 km/h, los más rápidos del sistema solar. Su color azul profundo se debe al metano en su atmósfera.",
      curiosity: "Fue el primer planeta descubierto mediante cálculos matemáticos antes de ser observado directamente.",
      history: "Predicho matemáticamente por Le Verrier y Adams, fue observado por primera vez en 1846 por Galle.",
      stats: [
        { label: "Diámetro", value: "49,244 km" },
        { label: "Distancia", value: "4,495M km" },
        { label: "Período", value: "165 años" },
        { label: "Temperatura", value: "-200°C" },
        { label: "Gravedad", value: "11.15 m/s²" },
        { label: "Lunas", value: "16" }
      ]
    }
  ]

  /* ═══════════════════════════════════════
     DATA — MOONS (completas, 9)
  ═══════════════════════════════════════ */
  const moons = [
    {
      name: "Luna",
      category: "Satélite Natural · Tierra",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
      short: "El único satélite natural de la Tierra y el más visitado por humanos.",
      description: "La Luna estabiliza el eje de inclinación terrestre y es responsable de las mareas. Es el quinto satélite más grande del sistema solar.",
      curiosity: "Es el único cuerpo celeste fuera de la Tierra que ha sido visitado por seres humanos: 12 astronautas caminaron en su superficie.",
      history: "La misión Apollo 11 llegó el 20 de julio de 1969. Neil Armstrong fue el primer humano en pisarla.",
      stats: [
        { label: "Diámetro", value: "3,474 km" },
        { label: "Distancia", value: "384,400 km" },
        { label: "Período", value: "27.3 días" },
        { label: "Temperatura", value: "−20°C" },
        { label: "Gravedad", value: "1.62 m/s²" },
        { label: "Planeta", value: "Tierra" }
      ]
    },
    {
      name: "Fobos",
      category: "Satélite Natural · Marte",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Phobos_colour_2008.jpg",
      short: "La luna interior de Marte, destinada a colisionar con el planeta.",
      description: "Fobos es la mayor de las dos lunas de Marte. Orbita tan cerca del planeta que se acerca unos 1.8 metros cada siglo, eventualmente chocará o se desintegrará en un anillo.",
      curiosity: "Orbita Marte tan rápido que completa una vuelta en solo 7 horas y 39 minutos, por lo que sale por el oeste y se pone por el este.",
      history: "Descubierta en 1877 por Asaph Hall junto a Deimos usando el refractor del Observatorio Naval de Washington.",
      stats: [
        { label: "Diámetro", value: "22.4 km" },
        { label: "Distancia", value: "9,376 km" },
        { label: "Período", value: "7.65 hrs" },
        { label: "Temperatura", value: "−40°C" },
        { label: "Gravedad", value: "0.0057 m/s²" },
        { label: "Planeta", value: "Marte" }
      ]
    },
    {
      name: "Ío",
      category: "Luna Galileana · Júpiter",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg",
      short: "El cuerpo geológicamente más activo del sistema solar.",
      description: "Ío es el satélite más volcánicamente activo del sistema solar. Las fuerzas de marea generadas por Júpiter y las otras lunas galileanas calientan su interior hasta niveles extremos.",
      curiosity: "Tiene más de 400 volcanes activos. Sus erupciones eyectan material hasta 500 km de altura.",
      history: "Descubierta por Galileo Galilei en enero de 1610, junto a Europa, Ganímedes y Calisto.",
      stats: [
        { label: "Diámetro", value: "3,642 km" },
        { label: "Distancia", value: "421,700 km" },
        { label: "Período", value: "1.77 días" },
        { label: "Temperatura", value: "−130°C" },
        { label: "Gravedad", value: "1.80 m/s²" },
        { label: "Planeta", value: "Júpiter" }
      ]
    },
    {
      name: "Europa",
      category: "Luna Galileana · Júpiter",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Europa-moon.jpg",
      short: "Mundo helado con un océano subsuperficial de agua líquida.",
      description: "Europa podría albergar un océano de agua líquida bajo su corteza de hielo, con el doble de agua que todos los océanos terrestres combinados.",
      curiosity: "Científicos creen que su océano subterráneo tiene condiciones que podrían sustentar vida microbiana.",
      history: "Descubierta por Galileo en 1610. La misión Europa Clipper de la NASA fue lanzada en 2024 para estudiarla.",
      stats: [
        { label: "Diámetro", value: "3,122 km" },
        { label: "Distancia", value: "671,100 km" },
        { label: "Período", value: "3.55 días" },
        { label: "Temperatura", value: "−160°C" },
        { label: "Gravedad", value: "1.31 m/s²" },
        { label: "Planeta", value: "Júpiter" }
      ]
    },
    {
      name: "Ganímedes",
      category: "Luna Galileana · Júpiter",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Ganymede_g1_true-edit1.jpg",
      short: "La luna más grande del sistema solar, mayor que Mercurio.",
      description: "Ganímedes es el satélite más grande de todo el sistema solar, superando en tamaño incluso a Mercurio. Es la única luna conocida con su propio campo magnético.",
      curiosity: "Si orbitara directamente al Sol en lugar de a Júpiter, sería clasificado como planeta.",
      history: "Descubierto por Galileo en 1610. La misión JUICE de la ESA llegará a su órbita en la década de 2030.",
      stats: [
        { label: "Diámetro", value: "5,268 km" },
        { label: "Distancia", value: "1,070,400 km" },
        { label: "Período", value: "7.15 días" },
        { label: "Temperatura", value: "−110°C" },
        { label: "Gravedad", value: "1.43 m/s²" },
        { label: "Planeta", value: "Júpiter" }
      ]
    },
    {
      name: "Titán",
      category: "Luna Mayor · Saturno",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Titan_in_true_color.jpg",
      short: "La única luna del sistema solar con atmósfera densa.",
      description: "Titán posee una atmósfera más densa que la terrestre y lagos de metano líquido en su superficie. Es considerado uno de los lugares más prometedores para buscar vida.",
      curiosity: "Tiene ríos y lluvia de metano. La sonda Huygens descendió en su atmósfera en 2005.",
      history: "Descubierta por el astrónomo holandés Christiaan Huygens en 1655.",
      stats: [
        { label: "Diámetro", value: "5,149 km" },
        { label: "Distancia", value: "1,221,870 km" },
        { label: "Período", value: "15.9 días" },
        { label: "Temperatura", value: "−179°C" },
        { label: "Gravedad", value: "1.35 m/s²" },
        { label: "Planeta", value: "Saturno" }
      ]
    },
    {
      name: "Encélado",
      category: "Satélite Natural · Saturno",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/83/PIA17202_-_Approaching_Enceladus.jpg",
      short: "La luna que expulsa géiseres de agua al espacio.",
      description: "Encélado tiene géiseres activos en su polo sur que expulsan agua al espacio, alimentando el anillo E de Saturno. Bajo su superficie hay un océano de agua líquida.",
      curiosity: "La Cassini detectó moléculas orgánicas complejas en sus géiseres, ingredientes potenciales para la vida.",
      history: "Descubierto por William Herschel en 1789. Su actividad geológica fue revelada por la misión Cassini en 2005.",
      stats: [
        { label: "Diámetro", value: "504 km" },
        { label: "Distancia", value: "238,000 km" },
        { label: "Período", value: "1.37 días" },
        { label: "Temperatura", value: "−198°C" },
        { label: "Gravedad", value: "0.113 m/s²" },
        { label: "Planeta", value: "Saturno" }
      ]
    },
    {
      name: "Tritón",
      category: "Satélite Natural · Neptuno",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Triton_moon_mosaic_Voyager_2_%28large%29.jpg",
      short: "La única luna grande con órbita retrógrada.",
      description: "Tritón es el único satélite grande del sistema solar que orbita en dirección contraria a la rotación de su planeta. Su origen extrasolar sugiere que fue capturado por Neptuno.",
      curiosity: "Orbita en sentido contrario a la rotación de Neptuno, lo que indica que fue capturado del Cinturón de Kuiper.",
      history: "Descubierto por William Lassell solo 17 días después del descubrimiento de Neptuno, en 1846.",
      stats: [
        { label: "Diámetro", value: "2,707 km" },
        { label: "Distancia", value: "354,760 km" },
        { label: "Período", value: "5.88 días" },
        { label: "Temperatura", value: "−235°C" },
        { label: "Gravedad", value: "0.78 m/s²" },
        { label: "Planeta", value: "Neptuno" }
      ]
    },
    {
      name: "Caronte",
      category: "Luna Mayor · Plutón",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Charon_in_True_Color_-_High-Res.jpg",
      short: "La luna tan grande que Plutón y Caronte orbitan uno al otro.",
      description: "Caronte es tan masivo en relación a Plutón que ambos se orbitan mutuamente alrededor de un punto en el espacio entre ellos, formando un sistema binario.",
      curiosity: "Su masa es la mitad de la de Plutón. El sistema New Horizons fotografió su misterioso polo norte rojizo en 2015.",
      history: "Descubierto en 1978 por James Christy en el Observatorio Naval de EE.UU. a partir de fotografías borrosas.",
      stats: [
        { label: "Diámetro", value: "1,212 km" },
        { label: "Distancia", value: "19,591 km" },
        { label: "Período", value: "6.39 días" },
        { label: "Temperatura", value: "−220°C" },
        { label: "Gravedad", value: "0.29 m/s²" },
        { label: "Planeta", value: "Plutón" }
      ]
    }
  ]

  /* ═══════════════════════════════════════
     DOM REFS
  ═══════════════════════════════════════ */
  const planetGrid   = document.getElementById('planetGrid')
  const moonGrid     = document.getElementById('moonGrid')
  const modalOverlay = document.getElementById('modalOverlay')
  const closeModal   = document.getElementById('closeModal')
  const modalTitle   = document.getElementById('modalTitle')
  const modalCategory= document.getElementById('modalCategory')
  const modalDesc    = document.getElementById('modalDescription')
  const modalCuriosity = document.getElementById('modalCuriosity')
  const modalHistory = document.getElementById('modalHistory')
  const modalImage   = document.getElementById('modalImage')
  const modalStats   = document.getElementById('modalStats')

  /* ═══════════════════════════════════════
     BUILD CARDS
  ═══════════════════════════════════════ */
  function createCards(data, container) {
    data.forEach(item => {
      const card = document.createElement('div')
      card.classList.add('space-card')
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>${item.short}</p>
        </div>
      `
      card.addEventListener('click', () => openModal(item))
      container.appendChild(card)
    })
  }

  createCards(planets, planetGrid)
  createCards(moons, moonGrid)

  /* ═══════════════════════════════════════
     MODAL
  ═══════════════════════════════════════ */
  function openModal(item) {
    modalTitle.textContent    = item.name
    modalCategory.textContent = item.category
    modalDesc.textContent     = item.description
    modalCuriosity.textContent= item.curiosity
    modalHistory.textContent  = item.history
    modalImage.src            = item.image
    modalImage.alt            = item.name

    // render stat cards
    modalStats.innerHTML = item.stats.map(s => `
      <div class="stat-card">
        <span class="stat-label">${s.label}</span>
        <span class="stat-value">${s.value}</span>
      </div>
    `).join('')

    modalOverlay.classList.add('active')
    document.body.style.overflow = 'hidden'
  }

  function closeModalFn() {
    modalOverlay.classList.remove('active')
    document.body.style.overflow = ''
  }

  closeModal.addEventListener('click', closeModalFn)
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModalFn()
  })
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModalFn()
  })

  /* ═══════════════════════════════════════
     THREE.JS — SISTEMA SOLAR 3D
     Usando MeshBasicMaterial con color en
     lugar de texturas para evitar errores
     CORS y asegurar visibilidad total.
  ═══════════════════════════════════════ */
  const canvas = document.getElementById('solarCanvas')
  const scene  = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(
    45,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    3000
  )
  camera.position.set(0, 30, 95)

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  /* LUCES */
  scene.add(new THREE.AmbientLight(0xffffff, 0.6))
  const sunLight = new THREE.PointLight(0xfff4e0, 4, 3000)
  scene.add(sunLight)

  /* ESTRELLAS */
  const starVerts = []
  for (let i = 0; i < 18000; i++) {
    starVerts.push(
      (Math.random() - 0.5) * 3000,
      (Math.random() - 0.5) * 3000,
      (Math.random() - 0.5) * 3000
    )
  }
  const starsGeo = new THREE.BufferGeometry()
  starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(starVerts, 3))
  scene.add(new THREE.Points(starsGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.6 })))

  /* SOL — emissive para que siempre brille */
  const sunMat = new THREE.MeshStandardMaterial({
    color: 0xffdd44,
    emissive: 0xff9900,
    emissiveIntensity: 1.2,
    roughness: 0.8
  })
  const sun = new THREE.Mesh(new THREE.SphereGeometry(6, 64, 64), sunMat)
  scene.add(sun)

  /* halo del sol */
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(7.2, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xff8800, transparent: true, opacity: 0.08 })
  )
  scene.add(glow)

  /* COLORES REALISTAS para cada planeta */
  const planetColors = [
    0x9e9e9e, // Mercurio — gris
    0xe8c97d, // Venus   — amarillo pálido
    0x4b9cd3, // Tierra  — azul
    0xc1440e, // Marte   — rojo
    0xc88b3a, // Júpiter — naranja bandas
    0xe4d191, // Saturno — dorado crema
    0x7de8e8, // Urano   — cian helado
    0x3f54ba  // Neptuno — azul profundo
  ]

  /* ANILLO SATURNO — bandas */
  function createOrbit(radius) {
    const pts = new THREE.EllipseCurve(0, 0, radius, radius).getPoints(200)
    const geo = new THREE.BufferGeometry().setFromPoints(pts)
    const mat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12 })
    const line = new THREE.LineLoop(geo, mat)
    line.rotation.x = Math.PI / 2
    scene.add(line)
  }

  const planetDefs = [
    { size: 0.7,  color: planetColors[0], dist: 13,  speed: 0.0047 },
    { size: 1.1,  color: planetColors[1], dist: 18,  speed: 0.0035 },
    { size: 1.2,  color: planetColors[2], dist: 24,  speed: 0.003  },
    { size: 0.9,  color: planetColors[3], dist: 31,  speed: 0.0024 },
    { size: 3.2,  color: planetColors[4], dist: 44,  speed: 0.0013 },
    { size: 2.6,  color: planetColors[5], dist: 57,  speed: 0.0009 },
    { size: 1.8,  color: planetColors[6], dist: 69,  speed: 0.00065},
    { size: 1.7,  color: planetColors[7], dist: 81,  speed: 0.0005 }
  ]

  const planet3Ds = planetDefs.map(def => {
    createOrbit(def.dist)
    const mat = new THREE.MeshPhongMaterial({
      color: def.color,
      shininess: 40,
      specular: 0x333333
    })
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(def.size, 48, 48), mat)
    scene.add(mesh)
    return { mesh, dist: def.dist, speed: def.speed }
  })

  /* ANILLO DE SATURNO (índice 5) */
  const ringGeo = new THREE.RingGeometry(3.6, 5.6, 64)
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xd4c47a,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.65
  })
  const saturnRing = new THREE.Mesh(ringGeo, ringMat)
  saturnRing.rotation.x = Math.PI / 2.3
  scene.add(saturnRing)

  /* ANIMAR */
  function animate() {
    requestAnimationFrame(animate)
    const t = Date.now()

    sun.rotation.y += 0.001
    glow.rotation.y -= 0.0005

    planet3Ds.forEach(p => {
      p.mesh.rotation.y += 0.006
      p.mesh.position.x = Math.cos(t * p.speed) * p.dist
      p.mesh.position.z = Math.sin(t * p.speed) * p.dist
    })

    const sat = planet3Ds[5]
    saturnRing.position.x = sat.mesh.position.x
    saturnRing.position.z = sat.mesh.position.z

    renderer.render(scene, camera)
  }
  animate()

  /* RESIZE */
  window.addEventListener('resize', () => {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  })

})
