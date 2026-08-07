export const defaultLang = "es" as const;

export const languages = {
  es: "Español",
  en: "English",
} as const;

export const ui = {
  es: {
    "meta.title": "Ketian Tools",
    "meta.description":
      "Ketian Tools — transcripción, conversión a WebP y extracción de frames. Una app de escritorio para producción de video.",
    "nav.langToggle": "Cambiar idioma",
    "nav.themeToggle": "Alternar modo oscuro",
    "hero.tag": "HERRAMIENTA DE ESCRITORIO",
    "hero.subtitle":
      "Transcribe, convierte y extrae — todo en un ejecutable local, sin depender de ningún servidor.",
    "hero.download": "Descargar",
    "hero.downloadFor": "Descargar para {os}",
    "hero.detecting": "Detectando tu sistema operativo…",
    "hero.noBuild": "No encontramos tu build — ver todos los releases",
    "hero.noReleases": "Aún no hay releases publicados — ver GitHub",
    "features.heading": "Qué hace",
    "features.transcribe.title": "Transcripción de audio",
    "features.transcribe.desc":
      "Pipeline por lotes con Whisper. Sube tus clips, ve a hacer otra cosa, regresa con el texto listo.",
    "features.convert.title": "Imagen a WebP",
    "features.convert.desc":
      "Conversión en batch con drag-and-drop. Miniaturas y assets listos para YouTube sin abrir Photoshop.",
    "features.extract.title": "Extracción de frames",
    "features.extract.desc":
      "Timeline scrubber para sacar el frame exacto del video que necesitas, cuadro por cuadro.",
    "cta.heading": "Código abierto en GitHub",
    "cta.paragraph": "Revisa el repo, abre un issue, o clona y compila tú mismo.",
    "cta.link": "Ver en GitHub",
    "footer.text": "Hecho por Enrique — Ketian Tools © {year}",
  },
  en: {
    "meta.title": "Ketian Tools",
    "meta.description":
      "Ketian Tools — audio transcription, WebP conversion, and frame extraction. A desktop app for video production.",
    "nav.langToggle": "Switch language",
    "nav.themeToggle": "Toggle dark mode",
    "hero.tag": "DESKTOP TOOL",
    "hero.subtitle":
      "Transcribe, convert, and extract — all in one local executable, no server required.",
    "hero.download": "Download",
    "hero.downloadFor": "Download for {os}",
    "hero.detecting": "Detecting your operating system…",
    "hero.noBuild": "Couldn't find your build — see all releases",
    "hero.noReleases": "No releases published yet — see GitHub",
    "features.heading": "What it does",
    "features.transcribe.title": "Audio transcription",
    "features.transcribe.desc":
      "Batch pipeline powered by Whisper. Upload your clips, go do something else, come back to finished text.",
    "features.convert.title": "Image to WebP",
    "features.convert.desc":
      "Batch conversion with drag-and-drop. Thumbnails and assets ready for YouTube without opening Photoshop.",
    "features.extract.title": "Frame extraction",
    "features.extract.desc":
      "Timeline scrubber to pull the exact video frame you need, frame by frame.",
    "cta.heading": "Open source on GitHub",
    "cta.paragraph": "Check out the repo, open an issue, or clone and build it yourself.",
    "cta.link": "View on GitHub",
    "footer.text": "Made by Enrique — Ketian Tools © {year}",
  },
} as const;
