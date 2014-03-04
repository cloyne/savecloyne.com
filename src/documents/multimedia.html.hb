---
layout: default
scripts: ["/scripts/gallerybundle.js"]
styles: ["/styles/gallery.css"]
title: "Multimedia"
menuIcon: "photo"
menuColor: "green"
menuOrder: 4
---
{{partial "gallery-controls.html"}}
<main class="page">
  {{partial "images.html.eco"}}
</main>
{{partial "gallery-script.html"}}
