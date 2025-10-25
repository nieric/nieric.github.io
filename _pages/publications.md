---
layout: page
permalink: /publications/
title: Publications
description: Publications by categories in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h1>Preprints</h1>

{% bibliography -f preprints %}

<h1>Papers</h1>

{% bibliography -f papers %}

<h1>Theses</h1>

{% bibliography -f theses %}

</div>
