---
layout: page
title: Search
permalink: /search/
---

<style>
.search-page { max-width: 720px; }
.search-page__label { display: block; color: #79758b; font-size: .88rem; margin-bottom: .5rem; }
.search-page__input { display: block; width: 100%; box-sizing: border-box; padding: .75rem .2rem; border: 0; border-bottom: 2px solid #c5b8ed; border-radius: 0; background: transparent; color: #302e3c; font: inherit; outline-offset: 4px; }
.search-page__input:focus { border-bottom-color: #7965bd; }
.search-page__status { margin: 1.25rem 0; color: #79758b; font-size: .9rem; }
.search-page__results { list-style: none; margin: 0; padding: 0; }
.search-page__item { padding: 1.1rem 0; border-top: 1px solid #e8e3f0; }
.search-page__item a { color: #302e3c; font-weight: 600; text-decoration: none; }
.search-page__item a:hover { color: #7965bd; text-decoration: underline; }
.search-page__meta { display: block; color: #79758b; font-size: .8rem; margin-top: .3rem; }
.search-page__excerpt { margin: .45rem 0 0; color: #625e70; font-size: .9rem; line-height: 1.65; }
</style>

<div class="search-page">
  <label class="search-page__label" for="site-search-input">블로그에서 검색하기</label>
  <input id="site-search-input" class="search-page__input" type="search" placeholder="제목, 내용, 카테고리 검색…" autocomplete="off" aria-controls="site-search-results" />
  <p id="site-search-status" class="search-page__status" role="status" aria-live="polite">검색어를 입력해 주세요.</p>
  <ul id="site-search-results" class="search-page__results"></ul>
</div>

<script id="site-search-data" type="application/json">
[
{% for post in site.posts %}
  {
    "title": {{ post.title | jsonify }},
    "url": {{ post.url | relative_url | jsonify }},
    "date": {{ post.date | date: '%Y.%m.%d' | jsonify }},
    "categories": {{ post.categories | join: ', ' | jsonify }},
    "excerpt": {{ post.excerpt | strip_html | normalize_whitespace | truncate: 160 | jsonify }},
    "body": {{ post.content | markdownify | strip_html | normalize_whitespace | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
]
</script>
<script>
(function () {
  'use strict';
  var input = document.getElementById('site-search-input');
  var results = document.getElementById('site-search-results');
  var status = document.getElementById('site-search-status');
  var posts;
  try {
    posts = JSON.parse(document.getElementById('site-search-data').textContent);
  } catch (error) {
    status.textContent = '검색 데이터를 읽지 못했습니다.';
    return;
  }
  function normalize(value) {
    return String(value || '').toLocaleLowerCase().normalize('NFC');
  }
  function addTextElement(parent, tag, className, value) {
    var el = document.createElement(tag);
    el.className = className;
    el.textContent = value;
    parent.appendChild(el);
    return el;
  }
  function render() {
    var query = normalize(input.value.trim());
    results.replaceChildren();
    if (!query) {
      status.textContent = '검색어를 입력해 주세요.';
      return;
    }
    var terms = query.split(/\s+/).filter(Boolean);
    var matches = posts.filter(function (post) {
      var haystack = normalize([post.title, post.categories, post.body].join(' '));
      return terms.every(function (term) { return haystack.includes(term); });
    });
    status.textContent = matches.length ? matches.length + '개의 글을 찾았습니다.' : '검색 결과가 없습니다.';
    matches.forEach(function (post) {
      var li = document.createElement('li');
      li.className = 'search-page__item';
      var link = document.createElement('a');
      link.href = post.url;
      link.textContent = post.title;
      li.appendChild(link);
      addTextElement(li, 'span', 'search-page__meta', post.date + (post.categories ? ' · ' + post.categories : ''));
      if (post.excerpt) addTextElement(li, 'p', 'search-page__excerpt', post.excerpt);
      results.appendChild(li);
    });
  }
  input.addEventListener('input', render);
  var initialQuery = new URLSearchParams(window.location.search).get('q');
  if (initialQuery) input.value = initialQuery;
  render();
}());
</script>
