*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  background:#05070d;
  color:white;
  font-family:'DM Sans',sans-serif;
  overflow-x:hidden;
}

/* ── NAVBAR ── */
.navbar{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:80px;
  padding:0 7%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:rgba(5,7,13,0.82);
  backdrop-filter:blur(15px);
  z-index:1000;
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.logo{
  font-family:'Syne',sans-serif;
  font-size:1.3rem;
  font-weight:800;
  letter-spacing:0.25em;
}

.nav-links{
  display:flex;
  gap:35px;
  list-style:none;
}

.nav-links a{
  text-decoration:none;
  color:rgba(255,255,255,0.7);
  transition:0.3s;
}

.nav-links a:hover{
  color:#12d6c5;
}

/* ── HERO ──
   Fondo cambiado a foto real del Sol (NASA SDO, EUV light)
   fondo oscuro (espacio negro) con el Sol visible a la derecha.
   URL de descarga: https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg
*/
.hero{
  min-height:100vh;
  position:relative;
  display:flex;
  align-items:center;
  padding:0 8%;
  background:
    url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/1280px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg")
    center/cover no-repeat;
}

.hero-overlay{
  position:absolute;
  inset:0;
  background:linear-gradient(
    to right,
    rgba(5,7,13,0.95),
    rgba(5,7,13,0.35)
  );
}

.hero-content{
  position:relative;
  z-index:2;
  max-width:760px;
}

.hero-subtitle{
  color:#12d6c5;
  letter-spacing:0.3em;
  font-size:0.78rem;
  font-weight:500;
}

.hero-title{
  font-family:'Syne',sans-serif;
  font-size:clamp(2.8rem,6.5vw,6.5rem);
  line-height:1.0;
  margin:22px 0;
  letter-spacing:-0.01em;
  white-space:normal;
  word-break:keep-all;
}

.hero-content p{
  max-width:520px;
  line-height:1.8;
  color:rgba(255,255,255,0.72);
  font-size:1rem;
}

/* ── SECTION TITLES ── */
.section-title{
  margin-bottom:60px;
}

.section-title span{
  color:#12d6c5;
  letter-spacing:0.25em;
  font-size:0.78rem;
  font-weight:500;
}

.section-title h2{
  font-size:3rem;
  margin-top:15px;
  font-family:'Syne',sans-serif;
}

.section-title p{
  margin-top:15px;
  color:rgba(255,255,255,0.68);
}

/* ── PROJECT ── */
.project-section{
  padding:100px 8%;
}

.project-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:25px;
}

.project-card{
  background:#0d121b;
  border:1px solid rgba(255,255,255,0.08);
  border-radius:20px;
  padding:35px;
}

.project-card h3{
  margin-bottom:15px;
  color:#12d6c5;
}

/* ══════════════════════════════════════
   SECCIÓN REALIDAD AUMENTADA
══════════════════════════════════════ */
.ar-section{
  padding:90px 8%;
  background:linear-gradient(180deg,#05070d 0%,#080c18 50%,#05070d 100%);
}

.ar-benefits-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:25px;
}

.ar-benefit-card{
  background:#0d121b;
  border:1px solid rgba(18,214,197,0.12);
  border-radius:20px;
  padding:35px;
  transition:border-color 0.3s,transform 0.3s;
}

.ar-benefit-card:hover{
  border-color:rgba(18,214,197,0.45);
  transform:translateY(-5px);
}

.ar-benefit-icon{
  width:52px;
  height:52px;
  background:rgba(18,214,197,0.08);
  border-radius:14px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:22px;
  border:1px solid rgba(18,214,197,0.15);
}

.ar-benefit-card h3{
  font-size:1.1rem;
  font-family:'Syne',sans-serif;
  margin-bottom:12px;
  color:#fff;
}

.ar-benefit-card p{
  color:rgba(255,255,255,0.65);
  line-height:1.8;
  font-size:0.93rem;
}

/* ── SOLAR ── */
.solar-section{
  position:relative;
  height:100vh;
  background:#000;
  overflow:hidden;
}

#solarCanvas{
  width:100%;
  height:100%;
  display:block;
}

.solar-title{
  position:absolute;
  top:120px;
  left:50%;
  transform:translateX(-50%);
  z-index:5;
  text-align:center;
}

.solar-title span{
  color:#12d6c5;
  letter-spacing:0.25em;
  font-size:0.78rem;
}

.solar-title h2{
  margin-top:15px;
  font-size:3rem;
  font-family:'Syne',sans-serif;
}

/* ── CARDS ── */
.space-section{
  padding:90px 8%;
}

.card-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(270px,1fr));
  gap:30px;
}

.space-card{
  background:#0d121b;
  border-radius:20px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,0.08);
  transition:transform 0.4s,border-color 0.4s;
  cursor:pointer;
}

.space-card:hover{
  transform:translateY(-10px);
  border-color:#12d6c5;
}

.space-card img{
  width:100%;
  height:220px;
  object-fit:cover;
}

.card-content{
  padding:25px;
}

.card-content h3{
  font-size:1.5rem;
  margin-bottom:10px;
}

.card-content p{
  color:rgba(255,255,255,0.68);
  line-height:1.7;
  font-size:0.95rem;
}

/* ── MODAL OVERLAY ── */
.modal-overlay{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.45);
  backdrop-filter:blur(6px);
  -webkit-backdrop-filter:blur(6px);
  display:none;
  justify-content:center;
  align-items:center;
  z-index:2000;
  padding:20px;
}

.modal-overlay.active{
  display:flex;
}

/* ── MODAL ── */
.modal{
  width:min(620px,100%);
  background:#0b0f1a;
  border-radius:24px;
  overflow:hidden;
  position:relative;
  border:1px solid rgba(255,255,255,0.1);
  box-shadow:0 30px 80px rgba(0,0,0,0.7);
}

/* imagen hero arriba */
.modal-hero-image{
  position:relative;
  height:260px;
  overflow:hidden;
}

.modal-hero-image img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.modal-hero-gradient{
  position:absolute;
  inset:0;
  background:linear-gradient(
    to bottom,
    rgba(11,15,26,0) 30%,
    rgba(11,15,26,0.95) 100%
  );
}

.modal-hero-tag{
  position:absolute;
  top:18px;
  left:22px;
  color:#ffffff;
  font-size:0.7rem;
  letter-spacing:0.2em;
  font-weight:600;
  text-transform:uppercase;
}

.modal-hero-title{
  position:absolute;
  bottom:22px;
  left:22px;
  font-family:'Syne',sans-serif;
  font-size:2.2rem;
  line-height:1;
  font-weight:800;
}

/* cuerpo del modal */
.modal-body{
  padding:28px 26px 30px;
  max-height:60vh;
  overflow-y:auto;
  overflow-x:hidden;
}

.modal-body::-webkit-scrollbar{width:4px;}
.modal-body::-webkit-scrollbar-track{background:transparent;}
.modal-body::-webkit-scrollbar-thumb{background:rgba(18,214,197,0.3);border-radius:2px;}

/* grid de stats */
.modal-stats{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
  margin-bottom:24px;
}

.stat-card{
  background:#131a27;
  border-radius:12px;
  padding:14px 12px;
  text-align:center;
  border:1px solid rgba(255,255,255,0.06);
}

.stat-label{
  display:block;
  font-size:0.62rem;
  letter-spacing:0.12em;
  color:rgba(255,255,255,0.45);
  text-transform:uppercase;
  margin-bottom:6px;
}

.stat-value{
  display:block;
  font-family:'Syne',sans-serif;
  font-size:0.95rem;
  font-weight:700;
  color:#fff;
}

.modal-description{
  font-size:0.93rem;
  line-height:1.85;
  color:rgba(255,255,255,0.72);
  margin-bottom:22px;
}

.modal-sections{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:16px;
  margin-bottom:26px;
}

.modal-info-block{
  background:#131a27;
  border-radius:14px;
  padding:18px;
  border:1px solid rgba(255,255,255,0.06);
}

.modal-info-block h4{
  font-size:0.72rem;
  letter-spacing:0.18em;
  color:#12d6c5;
  text-transform:uppercase;
  margin-bottom:10px;
}

.modal-info-block p{
  font-size:0.88rem;
  line-height:1.75;
  color:rgba(255,255,255,0.68);
}

/* ──────────────────────────────────────
   BOTÓN TARJETA AR (único botón en modal)
   Reemplaza el diseño de dos botones previo.
────────────────────────────────────── */
.modal-actions{
  display:flex;
}

.ar-card-main-btn{
  flex:1;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  padding:14px 18px;
  border:1px solid rgba(18,214,197,0.5);
  border-radius:12px;
  background:rgba(18,214,197,0.06);
  color:rgba(255,255,255,0.9);
  font-weight:700;
  font-size:0.88rem;
  cursor:pointer;
  transition:border-color 0.25s,background 0.25s,color 0.25s,transform 0.2s;
  font-family:'DM Sans',sans-serif;
}

.ar-card-main-btn:hover{
  border-color:#12d6c5;
  background:rgba(18,214,197,0.14);
  color:#12d6c5;
  transform:translateY(-2px);
}

/* close */
.close-btn{
  position:absolute;
  top:16px;
  right:16px;
  width:38px;
  height:38px;
  border:none;
  border-radius:50%;
  background:rgba(0,0,0,0.6);
  color:rgba(255,255,255,0.85);
  cursor:pointer;
  font-size:0.9rem;
  z-index:10;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:background 0.2s,bottom 0.3s,top 0.3s,right 0.3s;
}

.close-btn:hover{
  background:rgba(18,214,197,0.2);
}

/*
  Cuando el panel AR está activo, el botón ✕ se
  mueve abajo-derecha para no tapar la tarjeta.
*/
.modal.ar-mode .close-btn{
  top:auto;
  bottom:16px;
  right:16px;
  background:rgba(255,255,255,0.12);
  border:1px solid rgba(255,255,255,0.2);
}

.modal.ar-mode .close-btn:hover{
  background:rgba(18,214,197,0.2);
  border-color:#12d6c5;
}

/* ══════════════════════════════════════════════
   PANEL TARJETA AR
   Ocupa exactamente las mismas dimensiones que
   el modal (reemplaza visualmente la vista info).
══════════════════════════════════════════════ */
.ar-card-panel{
  display:none;
  position:relative;
  flex-direction:column;
  width:100%;
  min-height:560px;
  background:#000;
  overflow:hidden;
}

.ar-card-panel.active{
  display:flex;
}

/* Canvas de animación warp — cubre todo el panel durante la transición */
.ar-warp-canvas{
  position:absolute;
  inset:0;
  z-index:5;
  display:none;
}

/* Contenedor de la imagen de la tarjeta */
.ar-card-display{
  flex:1;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:28px 28px 10px;
  opacity:0;
  transition:opacity 0.5s ease;
}

.ar-card-display.visible{
  opacity:1;
}

.ar-card-display img{
  max-height:430px;
  max-width:100%;
  border-radius:14px;
  /*
    Sombra con resplandor cian temático del sitio
    para que la tarjeta "brille" al aparecer.
  */
  box-shadow:
    0 0 0 1px rgba(18,214,197,0.15),
    0 0 30px rgba(18,214,197,0.2),
    0 20px 60px rgba(0,0,0,0.8);
  animation:cardFloat 4s ease-in-out infinite;
}

/* Leve flotación de la tarjeta una vez visible */
@keyframes cardFloat{
  0%,100%{ transform:translateY(0); }
  50%     { transform:translateY(-8px); }
}

/* Footer del panel AR — botón volver + X cerrar */
.ar-card-footer{
  padding:14px 22px 18px;
  display:flex;
  align-items:center;
  background:rgba(0,0,0,0.5);
  border-top:1px solid rgba(255,255,255,0.06);
}

.ar-back-btn{
  background:transparent;
  border:1px solid rgba(255,255,255,0.18);
  color:rgba(255,255,255,0.75);
  padding:9px 18px;
  border-radius:10px;
  cursor:pointer;
  font-family:'DM Sans',sans-serif;
  font-size:0.83rem;
  font-weight:500;
  transition:border-color 0.2s,color 0.2s,background 0.2s;
}

.ar-back-btn:hover{
  border-color:#12d6c5;
  color:#12d6c5;
  background:rgba(18,214,197,0.06);
}

/* ── HERO BUTTON ── */
.visual-button{
  display:inline-block;
  margin-top:35px;
  padding:14px 26px;
  background:#ffffff;
  color:#05070d;
  text-decoration:none;
  border-radius:14px;
  font-weight:700;
  transition:0.3s;
}

.visual-button:hover{
  transform:translateY(-4px);
}

/* ── FOOTER ── */
.footer{
  padding:60px 8% 40px;
  border-top:1px solid rgba(255,255,255,0.08);
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:40px;
  flex-wrap:wrap;
}

.footer-logo{
  font-family:'Syne',sans-serif;
  font-size:1.2rem;
  font-weight:800;
  letter-spacing:0.22em;
  margin-bottom:10px;
}

.footer-tagline{
  font-size:0.88rem;
  color:rgba(255,255,255,0.45);
  max-width:300px;
  line-height:1.6;
}

.footer-meta{
  text-align:right;
}

.footer-credit{
  margin-bottom:12px;
}

.footer-credit-label{
  font-size:0.75rem;
  letter-spacing:0.12em;
  color:rgba(255,255,255,0.4);
  text-transform:uppercase;
  display:block;
  margin-bottom:4px;
}

.footer-credit-name{
  font-family:'Syne',sans-serif;
  font-size:1rem;
  font-weight:700;
  color:#fff;
}

.footer-divider{
  width:40px;
  height:1px;
  background:rgba(18,214,197,0.4);
  margin:14px 0 14px auto;
}

.footer-copy{
  font-size:0.82rem;
  color:rgba(255,255,255,0.38);
  margin-bottom:5px;
}

/* ── RESPONSIVE ── */
@media(max-width:900px){
  .nav-links{display:none;}
  .modal-stats{grid-template-columns:repeat(2,1fr);}
  .modal-sections{grid-template-columns:1fr;}
  .modal-body{padding:22px 18px 24px;}
  .ar-card-display{padding:20px 16px 8px;}
}

@media(max-width:600px){
  .hero-title{font-size:clamp(2.2rem,11vw,3.5rem);}
  .modal-hero-title{font-size:1.7rem;}
  .footer{flex-direction:column;align-items:flex-start;}
  .footer-meta{text-align:left;}
  .footer-divider{margin:14px 0;}
}
