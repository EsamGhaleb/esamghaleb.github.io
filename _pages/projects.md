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

I am currently a postdoctoral researcher in the Dialogue Modelling Group at the Institute for Logic, Language & Computation (ILLC), University of Amsterdam. My primary research focuses on using NLP, computer vision, and machine learning to model face-to-face dialogue. Specifically, I am interested in understanding the emergence and maintenance of cross-modal convergence in dialogue when interlocutors speak about novel objects. To accomplish this, I am collaborating with cognitive scientists and computational linguists who provide valuable domain knowledge.

My previous research experiences have focused on understanding human behaviors and communication through multiple cues, including speech, gestures, facial expressions, and body postures. During my Ph.D. at Maastricht University, I researched multimodal emotion recognition using visual and auditory cues. In my doctoral research, I developed novel computational methodologies to capture bimodal cues' complementary information for emotion recognition. I also worked on the Horizon 2020 project, MaTHiSiS, developing multimodal fusion methods for emotion recognition in an e-learning platform.

In addition, during my postdoctoral research at Maastricht University, I focused on multimodal human behavioral analysis for people with neurodegenerative diseases. The project, funded as part of the Horizon 2020 ProCare4Life, aimed to detect abnormalities in their symptoms and activities. I collaborated with socio-health professionals to develop a decision support system based on state-of-the-art computational models, demonstrating the benefits of complementing machine intelligence with human expertise using hybrid AI.

Finally, I have gained supervision experience by being the daily supervisor of Masters's and Ph.D. students for their theses. I have regularly supervised students' research projects on diverse topics such as emotion recognition, explainable AI, and self-supervised learning for human activity recognition.

Below, I give more details on the following research interests & experiences:

* **Multimodal face-to-face dialogue modeling**
* **Multimodal emotion recognition**
* **Multimodal human behavioral analysis**
* **Explainable AI for emotion and behavior recognition**

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
