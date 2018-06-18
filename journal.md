---
title: Journal
layout: journal
permalink: /journal/
---

Hello this is the index for Journal

<ul>
  {% for issue in site.data.issues %}
    <li>
      {{ issue.name }}
      {{ issue.year }}
      {{ issue.description }}
    </li>
  {% endfor %}
</ul>
