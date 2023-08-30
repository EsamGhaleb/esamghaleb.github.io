---
layout: page
title: Research & Projects
permalink: /projects/
nav: true
nav_order: 5
display_categories: [Multimodal Communication, Multimodal Emotion Recognition, Interpretable & Explainable AI, Multimodal Human Behavior Analysis, Facial Recognition] 
horizontal: false
---
**Research scope and interests**:

**Multimodal face-to-face dialogue modeling.** I am currently a postdoctoral researcher in the Dialogue Modelling Group at the Institute for Logic, Language & Computation (ILLC), University of Amsterdam. My primary research focuses on face-to-face dialogue modeling. Specifically, I am interested in dialogue coordination to model and understand the emergence and maintenance of cross-modal convergence in dialogue when interlocutors speak about novel objects. In this work, I collaborate with lead linguists and cognitive scientists specializing in dialogue and gestures from UvA, Radboud University, and TU Dresden.

**Multimodal emotion recognition.** My previous research experiences have focused on modeling and recognizing human behaviors and communication through multiple cues, including speech, gestures, facial expressions, and body postures. During my Ph.D. at Maastricht University, I researched multimodal emotion recognition using visual and auditory cues. In my doctoral research, I developed novel computational methodologies to capture bimodal cues' complementary information for emotion recognition. I also worked on the Horizon 2020 project, MaTHiSiS, developing multimodal fusion methods for emotion recognition in an e-learning platform.

**Explainable AI for emotion and behavior recognition.** In my postdoctoral research at UM, my work extended beyond conventional explainable AI on audio-video as expressive modalities, redirecting the field’s attention toward gestural expressions for emotion recognition. In addition,  I worked on multimodal human behavioral analysis for people with neurodegenerative diseases in the Horizon 2020 EU project, ProCare4Life. This project aimed to detect abnormalities in their symptoms and activities. I collaborated with socio-health professionals to develop a decision support system based on state-of-the-art computational models, demonstrating the benefits of complementing machine intelligence with human expertise using hybrid AI.

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
