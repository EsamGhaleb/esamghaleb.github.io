---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 5
display_categories: [University of Amsterdam, Maastricht University, Istanbul Technical University]
horizontal: false
---
Currently, I am a postdoctoral researcher in the Dialogue Modelling Group at the Institute for Logic, Language & Computation (ILLC), University of Amsterdam. I am working on modeling face-to-face dialogue using NLP, computer vision, and machine learning. My research benefits from the domain knowledge of cognitive scientists and computational linguists to understand the emergence and maintenance of cross-modal convergence in dialogue when people talk about novel objects. This line of research complements my previous experiences and knowledge as I work on understanding human behaviors and communications through several modalities, such as speech, gestures, facial expressions, and body postures.

In my earlier academic work, I collaborated with several scientists from different disciplines. I focused on understanding human behaviors, emotions, and activities using several cues employed through novel multimodal machine learning frameworks. For instance, during my Ph.D. studies, I worked for the Horizon 2020-funded project MaTHiSiS, an educational platform providing a personalized learning experience based on multimodal emotion recognition from diverse cues. My research at MaTHiSiS benefited from collaborating with pedagogical experts to develop dynamic multimodal fusion based on different learners' use cases. My postdoctoral research at Maastricht University focused on human behavioral analysis using Bayesian networks for people with neurodegenerative diseases to detect abnormalities in their symptoms and activities. This project, funded as part of the Horizon 2020 ProCare4Life, exploits the domain expertise of socio-health professionals to develop a decision support system, demonstrating the benefits of complementing machine intelligence with human expertise. I gained extensive experience collaborating in (international) networks as part of my work for Horizon projects. I teamed up with scientists across the EU to investigate multimodal fusion for understanding human behaviors and emotions. 

<!-- pages/projects.md -->

<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}

<!-- Display projects without categories -->

  {%- assign sorted_projects = site.projects | sort: "importance" -%}

<!-- Generate cards for each project -->

  {% if page.horizontal -%}

<div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>
