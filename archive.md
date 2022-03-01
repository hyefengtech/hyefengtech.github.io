---
layout: page
title: Archive
permalink: /archive/
avatar: https://github.com/hyefengtech/hyefengtech.github.io/blob/beb3d4659d6388d95a1835deb16cf5d9ab9b8895/images/IMG_4222.jpg
---

{% if site.posts.size == 0 %}
  <h2>No post found</h2>
{% endif %}

<ul class="archive">
  {% for post in site.posts %}
    {% unless post.next %}
      <h2>{{ post.date | date: '%Y' }}</h2>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <h2>{{ post.date | date: '%Y' }}</h2>
      {% endif %}
    {% endunless %}

    <li>
      {% if post.link %}
      <a href="{{ post.link }}">
      {% else %}
      <a href="{{ site.baseurl }}{{ post.url }}">
      {% endif %}
        {{ post.title }}
      </a>
      <time>{{ post.date | date: "%Y-%m-%d" }}</time>
    </li>
  {% endfor %}
</ul>
