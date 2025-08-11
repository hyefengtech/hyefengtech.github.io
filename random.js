---
---
/* 빌드 시 Liquid로 포스트 URL 배열 생성 */
var randomPosts = [
{% for post in site.posts %}
  "{{ post.url | relative_url }}"{% unless forloop.last %},{% endunless %}
{% endfor %}
];

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('random-post-btn');
  if (!btn) return;

  // 방어: 포스트가 0개면 버튼 비활성화
  if (!Array.isArray(randomPosts) || randomPosts.length === 0) {
    btn.disabled = true;
    btn.title = '게시물이 없습니다';
    return;
  }

  btn.addEventListener('click', function () {
    var url = randomPosts[Math.floor(Math.random() * randomPosts.length)];
    if (url) window.location.href = url;
  });
});
