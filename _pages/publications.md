---
layout: page
permalink: /publications/
title: Publications
years: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2015, 2014]
nav: true
nav_order: 1
---
 An updated list of publications can be found in [my Google Scholar profile](https://scholar.google.com/citations?user=TqP9GTsAAAAJ&hl=en).

<!-- _pages/publications.md -->

<div class="publications">

{%- for y in page.years %}

<h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
