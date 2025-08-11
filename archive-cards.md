---
layout: default
title: Archive (Cards)
permalink: /archive/cards/
---

<h1>Archive</h1>
<p><a href="{{ '/archive/' | relative_url }}">← 리스트 보기</a></p>

<input id="filter" type="search" placeholder="제목·태그 필터…" style="width:100%;padding:.6rem 1rem;margin:.75rem 0;">

<section class="cards">
  {% assign posts_sorted = site.posts | sort: "date" | reverse %}
  <ul class="cards__grid">
    {% for post in posts_sorted %}
      <li class="cards__item">
        <a class="cards__link" href="{{ post.url | relative_url }}">
          {% if post.image %}
            <img class="cards__thumb" src="{{ post.image | relative_url }}" alt="" loading="lazy">
          {% endif %}
          <strong class="cards__title">{{ post.title }}</strong>
          <span class="cards__meta">{{ post.date | date: "%Y-%m-%d" }}</span>
          <span class="cards__excerpt">
            {% if post.summary %}{{ post.summary }}
            {% elsif post.excerpt %}{{ post.excerpt | strip_html | truncate: 120 }}
            {% else %}{{ post.content | strip_html | truncate: 120 }}{% endif %}
          </span>
        </a>
      </li>
    {% endfor %}
  </ul>
</section>

<style>
.cards__grid{list-style:none;padding:0;margin:1rem 0;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem;}
.cards__item{border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;background:#fff;transition:transform .12s,box-shadow .12s,border-color .12s;}
.cards__item:hover{transform:translateY(-2px);box-shadow:0 6px 18px rgba(0,0,0,.06);border-color:#d1d5db;}
.cards__link{display:block;text-decoration:none;color:inherit}
.cards__thumb{width:100%;aspect-ratio:16/9;object-fit:cover;display:block;background:#f3f4f6}
.cards__title{display:block;margin:.75rem 1rem .25rem;font-size:1.05rem;line-height:1.3}
.cards__meta{display:block;margin:0 1rem .5rem;color:#6b7280;font-size:.85rem}
.cards__excerpt{display:block;margin:0 1rem 1rem;color:#374151;font-size:.95rem;line-height:1.5}
@media (prefers-color-scheme: dark){
  .cards__item{background:#111827;border-color:#374151}
  .cards__item:hover{border-color:#4b5563;box-shadow:0 6px 18px rgba(0,0,0,.35)}
  .cards__excerpt{color:#d1d5db}
  .cards__meta{color:#9ca3af}
}
</style>

<script>
(function(){
  var q=document.getElementById('filter');
  if(!q) return;
  q.addEventListener('input',function(){
    var val=this.value.toLowerCase();
    document.querySelectorAll('.cards__item').forEach(function(li){
      var text=li.textContent.toLowerCase();
      li.style.display = text.indexOf(val)>-1 ? '' : 'none';
    });
  });
})();
</script>
