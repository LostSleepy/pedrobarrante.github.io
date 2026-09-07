/**
 * Pedro Barrante Vázquez — CV scripts
 * Render de secciones desde js/data.js + utilidades (marquee, reveal,
 * reloj, ClickSpark). Sin dependencias externas.
 */
(function () {
  'use strict';

  const CV = window.CV || {};

  /* ── Iconos (SVG inline) ─────────────────────────────────────────────── */
  const ICONS = {
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>',

    /* Skills */
    windows:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M0 0h11.377v11.372H0zM12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z"/></svg>',
    pc:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M9 20h6M12 16v4"/></svg>',
    network:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M11 7.4 6.2 16.8M13 7.4 17.8 16.8"/></svg>',
    java:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/></svg>',
    csharp:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z"/></svg>',
    sql:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>',
    html:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>',
    css:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0H0zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"/></svg>',
    javascript:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>',
    xml:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 6-4 6 4 6M16 6l4 6-4 6"/><path d="m13 5-3 14"/></svg>',
    unity:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.9288 4.2939l3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0z"/></svg>',
    vscode:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>',
    git:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"/></svg>',
    office:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.53 4.306v15.363q0 .807-.472 1.433-.472.627-1.253.85l-6.888 1.974q-.136.037-.29.055-.156.019-.293.019-.396 0-.72-.105-.321-.106-.656-.292l-4.505-2.544q-.248-.137-.391-.366-.143-.23-.143-.515 0-.434.304-.738.304-.305.739-.305h5.831V4.964l-4.38 1.563q-.533.187-.856.658-.322.472-.322 1.03v8.078q0 .496-.248.912-.25.416-.683.651l-2.072 1.13q-.286.148-.571.148-.497 0-.844-.347-.348-.347-.348-.844V6.563q0-.62.33-1.19.328-.571.874-.881L11.07.285q.248-.136.534-.21.285-.075.57-.075.211 0 .38.031.166.031.364.093l6.888 1.899q.384.11.7.329.317.217.547.52.23.305.353.67.125.367.125.764zm-1.588 15.363V4.306q0-.273-.16-.478-.163-.204-.423-.28l-3.388-.93q-.397-.111-.794-.23-.397-.117-.794-.216v19.68l4.976-1.427q.26-.074.422-.28.161-.204.161-.477z"/></svg>',
    ai:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"/></svg>',
  };

  /* Colores de marca por icono de skill */
  const SKILL_COLORS = {
    windows: '#0078d6',
    pc: '#8c8c8c',
    network: '#22c55e',
    java: '#f89820',
    csharp: '#9b4dca',
    sql: '#3b82f6',
    html: '#e34f26',
    css: '#1572b6',
    javascript: '#f7df1e',
    xml: '#a855f7',
    unity: '#b3b3b3',
    vscode: '#007acc',
    git: '#f05032',
    office: '#d83b01',
    ai: '#22c55e',
  };

  const icon = (name) => ICONS[name] || '';
  const coloredIcon = (name) =>
    ICONS[name] ? ICONS[name].replace('<svg ', '<svg style="color:' + (SKILL_COLORS[name] || '#b3b3b3') + '" ') : '';

  /* ── Sonido de clic ────────────────────────────────────────────────────
   * Reproduce assets/sounds/click.mp3 en CADA clic del usuario, en
   * cualquier parte de la página (no solo en enlaces y botones).
   * Implementación propia:
   *  - una única instancia de Audio (sin solapamiento entre clics);
   *  - currentTime = 0 antes de reproducir (clics rápidos reinician el
   *    sonido en vez de encadenarlo);
   *  - play().catch() respeta el autoplay de los navegadores: solo suena
   *    como consecuencia de un clic real del usuario, nunca al cargar;
   *  - no suena al pasar el ratón (solo el evento click);
   *  - respeta prefers-reduced-motion, como el resto de animaciones.
   * Ajusta el volumen desde CLICK_SOUND.volume (0 – 1).
   */
  const CLICK_SOUND = {
    src: 'assets/sounds/click.mp3',
    volume: 0.3,
  };

  /* ── Helpers ─────────────────────────────────────────────────────────── */
  function qs(selector) {
    return document.querySelector(selector);
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function external(link) {
    if (/^https?:/.test(link)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  }

  /* ── Redes sociales (hero) ───────────────────────────────────────────── */
  function renderSocials(container) {
    if (!container || !CV.socials) return;
    CV.socials.forEach((social) => {
      const link = el('a', 'social-btn', icon(social.icon));
      link.href = social.url;
      link.setAttribute('aria-label', social.label);
      external(link);
      container.appendChild(link);
    });
  }

  /* ── Contacto (botones) ──────────────────────────────────────────────── */
  function contactLinks() {
    return [
      { icon: 'mail', label: CV.labels.email, value: CV.profile.email, url: 'mailto:' + CV.profile.email },
      { icon: 'whatsapp', label: CV.labels.whatsapp, value: CV.profile.phone, url: 'https://wa.me/' + CV.profile.phone.replace(/\D/g, '') },
      { icon: 'github', label: CV.labels.github, value: '@LostSleepy', url: CV.profile.github },
      { icon: 'linkedin', label: CV.labels.linkedin, value: 'Pedro Barrante Vázquez', url: CV.profile.linkedin },
    ];
  }

  function renderContact(container) {
    if (!container) return;
    contactLinks().forEach((row) => {
      const link = el('a', 'contact-link', icon(row.icon) + '<span>' + row.label + '</span>');
      link.href = row.url;
      external(link);
      container.appendChild(link);
    });
  }

  /* ── Experiencia (timeline) ──────────────────────────────────────────── */
  function renderExperience(container) {
    if (!container || !CV.experience) return;
    CV.experience.forEach((item) => {
      const itemEl = el('li', 'timeline-item');
      const bullets = item.bullets.map((b) => '<li>' + b + '</li>').join('');
      const initial = (item.company || '?').charAt(0);
      itemEl.innerHTML =
        '<span class="timeline-dot ' + (item.status || 'past') + '" aria-hidden="true"></span>' +
        '<article class="exp-card">' +
        '<header class="exp-header">' +
        '<div class="exp-header__left">' +
        '<span class="exp-logo" aria-hidden="true">' + initial + '</span>' +
        '<div class="exp-company-info">' +
        '<span class="exp-company-name">' + item.company + '</span>' +
        '<span class="exp-role">' + item.role + '</span>' +
        '<span class="exp-role-text">' + item.type + '</span>' +
        '</div>' +
        '</div>' +
        '<div class="exp-header__right">' +
        '<span class="exp-status-badge"><span class="badge-dot" aria-hidden="true"></span>' + (item.badge || item.type) + '</span>' +
        '<span class="exp-meta"><span>' + item.dates + '</span><span>' + item.location + '</span></span>' +
        '</div>' +
        '</header>' +
        '<ul class="exp-bullets">' + bullets + '</ul>' +
        '</article>';
      container.appendChild(itemEl);
    });
  }

  /* ── Formación ───────────────────────────────────────────────────────── */
  function renderEducation(container) {
    if (!container || !CV.education) return;
    CV.education.forEach((item) => {
      const row = el('div', 'edu-row');
      row.innerHTML =
        '<div class="edu-row__main">' +
        '<div class="edu-row__title"><span class="pill">' + item.tag + '</span>' + item.title + '</div>' +
        '<div class="edu-row__school">' + item.school + '</div>' +
        '</div>' +
        '<span class="edu-row__dates">' + item.dates + '</span>';
      container.appendChild(row);
    });
  }

  /* ── Proyectos ───────────────────────────────────────────────────────── */
  function renderProjects(container) {
    if (!container || !CV.projects) return;
    const dirLabel = (CV.labels && CV.labels.projectsDir) || '~/proyectos/';
    const techLabel = (CV.labels && CV.labels.techLabel) || 'Tecnologías';
    CV.projects.forEach((project) => {
      const card = el('article', 'project-card');

      const badge = project.badge
        ? '<span class="project-pill project-pill--amber">' + project.badge + '</span>'
        : '';

      let links = '';
      if (project.repo) {
        links +=
          '<a href="' + project.repo + '" aria-label="GitHub: ' + project.name + '" target="_blank" rel="noopener noreferrer" title="' + CV.labels.code + '">' +
          icon('github') + '</a>';
      }
      if (project.live) {
        links +=
          '<a href="' + project.live + '" aria-label="Demo: ' + project.name + '" target="_blank" rel="noopener noreferrer" title="' + CV.labels.demo + '">' +
          icon('external') + '</a>';
      }

      card.innerHTML =
        '<div class="banner" aria-hidden="true"><span class="banner__path">' + dirLabel + project.banner + '</span></div>' +
        '<div class="project-details">' +
        '<div class="project-header-row">' +
        '<h3 class="project-name">' + project.name + badge + '</h3>' +
        '<div class="project-link-icons">' + links + '</div>' +
        '</div>' +
        '<p class="project-desc">' + project.desc + '</p>' +
        '<span class="project-tech-label">' + techLabel + '</span>' +
        '<div class="project-tech">' +
        project.tech.map((t) => '<span class="tech-tag">' + t + '</span>').join('') +
        '</div>' +
        '</div>';
      container.appendChild(card);
    });
  }

  /* ── Proyectos: enlace al Lab ───────────────────────────────────────── */
  function renderLabLink(container) {
    if (!container) return;
    const label = (CV.labels && CV.labels.labView) || 'View lab';
    const link = el('a', 'btn', label + ' <span class="arrow" aria-hidden="true">→</span>');
    link.href = 'lab.html';
    container.appendChild(link);
  }

  /* ── Skills: marquee + chips ─────────────────────────────────────────── */
  function skillPills(groupNames) {
    let pills = '';
    groupNames.forEach((group) => {
      (CV.skills[group] || []).forEach((skill) => {
        const iconKey = (CV.skillIcons && CV.skillIcons[skill]) || '';
        pills +=
          '<span class="skill-pill">' +
          (iconKey ? coloredIcon(iconKey) : '') +
          '<span>' + skill + '</span></span>';
      });
    });
    return pills;
  }

  function renderSkillsMarquee(container) {
    if (!container || !CV.marquee) return;
    CV.marquee.forEach((rowCfg) => {
      const row = el('div', 'marquee-row');
      const copy = skillPills(rowCfg.group);
      const track = el(
        'div',
        'marquee' + (rowCfg.reverse ? ' marquee--reverse' : ''),
        copy + '<span class="marquee__copy" aria-hidden="true">' + copy + '</span>'
      );
      const marqueeContainer = el('div', 'marquee-container', '');
      row.innerHTML = '<p class="marquee-label">' + rowCfg.label + '</p>';
      marqueeContainer.appendChild(track);
      row.appendChild(marqueeContainer);
      container.appendChild(row);
    });
  }

  function renderResumeSkills(container) {
    if (!container || !CV.skills || !CV.skillsGroups) return;
    CV.skillsGroups.forEach((group, index) => {
      const block = el('div', 'skills-block');
      block.innerHTML =
        '<h3 class="skills-block__title"><span class="mono">' +
        String(index + 1).padStart(2, '0') +
        '</span> ' + group.title + '</h3>';
      const chips = el('div', 'skills-chips', '');
      CV.skills[group.id].forEach((skill) => {
        chips.appendChild(el('span', 'tech-tag', skill));
      });
      block.appendChild(chips);
      container.appendChild(block);
    });
  }

  /* ── About: intro + contexto ────────────────────────────────────────── */
  function renderText(container) {
    if (!container) return;
    const key = container.getAttribute('data-render');
    if (key === 'about-intro' && CV.about && CV.about.intro) {
      container.textContent = CV.about.intro;
    } else if (key === 'context' && CV.about && CV.about.context) {
      container.textContent = CV.about.context;
    } else if (key === 'lab-intro' && CV.lab && CV.lab.intro) {
      container.textContent = CV.lab.intro;
    }
  }

  /* ── About: trayectoria ─────────────────────────────────────────────── */
  function renderJourney(container) {
    if (!container || !CV.about || !CV.about.journey) return;
    CV.about.journey.forEach((step) => {
      const row = el('div', 'journey-step');
      row.innerHTML =
        '<span class="journey-step__period mono">' + step.period + '</span>' +
        '<div class="journey-step__body">' +
        '<h3 class="journey-step__title">' + step.title + '</h3>' +
        '<p class="journey-step__desc">' + step.desc + '</p>' +
        '</div>';
      container.appendChild(row);
    });
  }

  /* ── About: objetivos ────────────────────────────────────────────────── */
  function renderGoals(container) {
    if (!container || !CV.about || !CV.about.goals) return;
    const list = el('ul', 'goals-list');
    CV.about.goals.forEach((goal) => {
      const li = el('li', '', goal);
      list.appendChild(li);
    });
    container.appendChild(list);
  }

  /* ── About: áreas de desarrollo ──────────────────────────────────────── */
  function renderAreas(container) {
    if (!container || !CV.about || !CV.about.areas) return;
    CV.about.areas.forEach((area) => {
      const block = el('div', 'skills-block');
      block.innerHTML =
        '<h3 class="skills-block__title">' + area.title + '</h3>';
      const chips = el('div', 'skills-chips', '');
      area.skills.forEach((skill) => {
        chips.appendChild(el('span', 'tech-tag', skill));
      });
      block.appendChild(chips);
      container.appendChild(block);
    });
  }

  /* ── Lab: experimentos / proyectos en desarrollo ────────────────────── */
  function renderLab(container) {
    if (!container || !CV.lab || !CV.lab.items) return;
    const doneLabel = (CV.labels && CV.labels.labDone) || 'Done';
    const wipLabel = (CV.labels && CV.labels.labWip) || 'In development';
    CV.lab.items.forEach((item) => {
      const card = el('article', 'lab-card');

      const status =
        '<span class="lab-status lab-status--' + (item.status === 'done' ? 'done' : 'wip') + '">' +
        '<span class="badge-dot" aria-hidden="true"></span>' +
        (item.status === 'done' ? doneLabel : wipLabel) +
        '</span>';
      const category = item.category ? '<span class="lab-category mono">' + item.category + '</span>' : '';

      let links = '';
      if (item.repo) {
        links +=
          '<a href="' + item.repo + '" aria-label="GitHub: ' + item.name + '" target="_blank" rel="noopener noreferrer" title="' + CV.labels.code + '">' +
          icon('github') + '</a>';
      }
      if (item.live) {
        links +=
          '<a href="' + item.live + '" aria-label="Demo: ' + item.name + '" target="_blank" rel="noopener noreferrer" title="' + CV.labels.demo + '">' +
          icon('external') + '</a>';
      }

      card.innerHTML =
        '<div class="lab-card__head">' +
        '<div class="lab-card__titles">' +
        '<h3 class="lab-card__name">' + item.name + '</h3>' +
        category +
        '</div>' +
        '<div class="lab-card__meta">' + status + '</div>' +
        '</div>' +
        '<p class="lab-card__desc">' + item.desc + '</p>' +
        '<div class="lab-card__tech">' +
        item.tech.map((t) => '<span class="tech-tag">' + t + '</span>').join('') +
        '</div>' +
        '<div class="lab-card__links">' + links + '</div>';
      container.appendChild(card);
    });
  }

  /* ── Idiomas ─────────────────────────────────────────────────────────── */
  function renderLanguages(container) {
    if (!container || !CV.languages) return;
    CV.languages.forEach((lang) => {
      const row = el('div', 'edu-row');
      row.innerHTML =
        '<div class="edu-row__main"><div class="edu-row__title">' + lang.name + '</div></div>' +
        '<span class="edu-row__dates">' + lang.level + '</span>';
      container.appendChild(row);
    });
  }

  /* ── Footer: año + reloj ─────────────────────────────────────────────── */
  function initFooter() {
    const yearEl = qs('[data-year]');
    if (yearEl) {
      const template = (CV.labels && CV.labels.copyYear) || '© {year} Pedro Barrante Vázquez';
      yearEl.textContent = template.replace('{year}', String(new Date().getFullYear()));
    }

    const clockEl = qs('[data-clock]');
    if (!clockEl || !CV.footer) return;
    const timeZone = CV.footer.timezone || 'UTC';
    const city = CV.footer.city || '';
    const update = () => {
      const now = new Date();
      const time = new Intl.DateTimeFormat('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone,
      }).format(now);
      clockEl.textContent = city + ' ' + time;
    };
    update();
    setInterval(update, 1000);
  }

  /* ── Reveal on scroll ────────────────────────────────────────────────── */
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.05 }
    );
    items.forEach((node) => observer.observe(node));
  }

  /* ── Sonido de clic ──────────────────────────────────────────────────── */
  function initClickSound() {
    if (typeof Audio === 'undefined') return;
    // Sin instancia ni descarga para usuarios con reduced-motion.
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Instancia única, creada al cargar. No se reproduce aquí: el navegador
    // bloquea el autoplay, así que solo suena dentro del manejador de click.
    const audio = new Audio(CLICK_SOUND.src);
    audio.volume = CLICK_SOUND.volume;
    audio.preload = 'auto';

    document.addEventListener('click', () => {
      audio.currentTime = 0; // reinicia para clics rápidos
      audio.play().catch(() => {});
    });
  }

  /* ── ClickSpark ───────────────────────────────────────────────────────
   * Ripple refinado: glow de marca (acento azul), núcleo blanco breve y
   * dos anillos concéntricos escalonados (blanco + acento). Coste acotado
   * mediante MAX_PULSES y reanuda el rAF solo con pulsos vivos. Respeta
   * prefers-reduced-motion y solo se dispara con el botón principal.
   */
  function initClickSpark() {
    const canvas = document.createElement('canvas');
    canvas.className = 'click-spark';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ACCENT = '59, 130, 246';
    const WHITE = '#ffffff';

    let pulses = [];
    let frame = null;
    const DURATION = 480;
    const MAX_PULSES = 24;

    function resize() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    function spawn(x, y) {
      if (pulses.length >= MAX_PULSES) pulses.shift();
      pulses.push({ x, y, start: performance.now() });
      if (!frame) tick();
    }

    function drawGlow(x, y, radius, alpha) {
      if (alpha <= 0 || radius <= 0) return;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      grad.addColorStop(0, `rgba(${ACCENT}, ${alpha})`);
      grad.addColorStop(0.45, `rgba(${ACCENT}, ${alpha * 0.35})`);
      grad.addColorStop(1, `rgba(${ACCENT}, 0)`);
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawCore(x, y, radius, alpha) {
      if (alpha <= 0 || radius <= 0) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = WHITE;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawRing(x, y, radius, width, alpha, color, blur) {
      if (alpha <= 0 || radius <= 0) return;
      ctx.save();
      if (blur > 0) {
        ctx.shadowColor = color;
        ctx.shadowBlur = blur;
      }
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    function tick() {
      const now = performance.now();
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      pulses = pulses.filter((p) => now - p.start < DURATION);

      for (const p of pulses) {
        const t = (now - p.start) / DURATION;
        const e = easeOutExpo(t);

        // 1. Glow de marca: halo sutil, se expande rápido y se desvanece.
        const gT = Math.min(t / 0.35, 1);
        drawGlow(p.x, p.y, 6 + 38 * easeOutExpo(gT), (1 - gT) * 0.28);

        // 2. Núcleo blanco: destello breve y nítido.
        if (t < 0.18) {
          const cT = t / 0.18;
          drawCore(p.x, p.y, 1 + 2.5 * (1 - cT), (1 - cT) * 0.9);
        }

        // 3. Dos ondas concéntricas (sutil → marca).
        for (const r of [
          { delay: 0.00, max: 22, width: 1.2, peak: 0.7,  blur: 4, color: WHITE },
          { delay: 0.10, max: 30, width: 1.0, peak: 0.45, blur: 6, color: `rgb(${ACCENT})` },
        ]) {
          const local = (t - r.delay) / (1 - r.delay);
          if (local <= 0 || local >= 1) continue;
          const alpha = Math.pow(1 - local, 1.5) * r.peak;
          const radius = 3 + r.max * e;
          drawRing(p.x, p.y, radius, r.width, alpha, r.color, r.blur);
        }
      }

      frame = pulses.length ? requestAnimationFrame(tick) : null;
    }

    document.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      if (!prefersReduced) spawn(e.clientX, e.clientY);
    });
  }

  /* ── Init ────────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    renderSocials(qs('[data-render="socials"]'));
    renderContact(qs('[data-render="contact"]'));
    renderExperience(qs('[data-render="experience"]'));
    renderEducation(qs('[data-render="education"]'));
    renderProjects(qs('[data-render="projects"]'));
    renderLabLink(qs('[data-render="lab-link"]'));
    renderSkillsMarquee(qs('[data-render="skills-marquee"]'));
    renderLanguages(qs('[data-render="languages"]'));
    renderText(qs('[data-render="about-intro"]'));
    renderText(qs('[data-render="context"]'));
    renderText(qs('[data-render="lab-intro"]'));
    renderJourney(qs('[data-render="journey"]'));
    renderGoals(qs('[data-render="goals"]'));
    renderAreas(qs('[data-render="areas"]'));
    renderLab(qs('[data-render="lab"]'));

    initFooter();
    initReveal();
    initClickSound();
    initClickSpark();
  });
})();
