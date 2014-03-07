---
layout: default
title: "What is the situation"
menuOrder: 1
menuIcon: "thumbs down"
menuColor: teal
---
<main class="ui one column page grid">
  <section class="column">
    {{partial "press.html.md"}}
  </section>

  <hr class="ui divider" />

  <section class="column">
    {{partial "referendum.html.md"}}
  </section>

  <hr class="ui divider" />

  <section class="column">
    {{partial "position.html.md"}}
  </section>

  <hr class="ui divider" />

  <section class="column">
    The BSC Cabinet proposal is as follows:
    {{partial "proposal.html.md"}}
  </section>
</main>
