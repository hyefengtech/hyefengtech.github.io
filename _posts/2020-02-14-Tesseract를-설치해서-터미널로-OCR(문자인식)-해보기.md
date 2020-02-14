---
layout: post
title: Tesseract를 설치해서 터미널로 OCR(문자인식)해보기
categories: [Development Environmet, Projects]
tags: 
- Projects
---

월드플레이의 게임을 구현해나가면서 게임에 활용할 기술을 개발 중에 있다. 이때 필요한 기술 중 하나가 바로 OCR(문자인식)이다. 
<br>OCR 을 구현하기 위해 다양한 방법이 있겠지만 일단 Tesseract 라이브러리를 활용하면 파이썬에서도 문자인식을 할 수 있는 프로그램을 구현할 수 있다고 해서 설치하고 시험해보았다.

혜풍엔터프라이즈 개발환경은 기본적으로 맥이기 때문에 설치방법은 맥 OS 기준이다.

1. 터미널을 켠다
2. brew install tesseract
3. brew install tesseract-lang
4. pip3 install pytesseract (파이썬에서 OCR 쓸 수 있는 라이브러리라고 해서 일단 설치했다. 터미널에서는 이걸 안 썼다.)

이렇게 하면 터미널에서 tesseract를 작동하게 만들 수 있다고 한다. 여기까지 해봤으니 한번 시험해보았다.

~~~
(base) baghyeliui-MacBookPro:~ spica$ cd Desktop
(base) baghyeliui-MacBookPro:Desktop spica$ tesseract EB87iJRUYAE1_jE.png stdout -l kor
~~~

음, 이렇게 우선 글을 쓰지만 터미널에서 tesseract를 사용하려면 " tesseract 파일명 stdout -l 언어 " 이런 구조의 코드를 쳐야하는데 아직 stdout 이 왜 필요한 것인지 잘 모르겠다. <br> 어디서 본 것에 따르면 아웃풋할 파일이라는데 음.... 그게 대체 무슨 소리인지 뜻을 알 수가 없고 일단 저렇게 치면 터미널에서 OCR 이 돌아간다. ~~이렇게 야매개발자라 할말이 없다. 이유를 

덧붙이자면 
