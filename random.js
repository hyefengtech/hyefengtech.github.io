var randomPosts = [
{% for post in site.posts %}
  "{{ post.url | relative_url }}"{% unless forloop.last %},{% endunless %}
{% endfor %}
];
