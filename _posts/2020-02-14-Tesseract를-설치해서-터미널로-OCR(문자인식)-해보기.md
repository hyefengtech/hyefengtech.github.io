---
layout: post
title: Tesseract를 설치해서 터미널로 OCR(문자인식)해보기
categories: [Development Environment, Projects]
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

음, 이렇게 우선 글을 쓰지만 터미널에서 tesseract를 사용하려면 " tesseract 파일명 stdout -l 언어 " 이런 구조의 코드를 쳐야하는데 아직 stdout 이 왜 필요한 것인지 잘 모르겠다. <br> 어디서 본 것에 따르면 아웃풋할 파일이라는데 음.... 그게 대체 무슨 소리인지 뜻을 알 수가 없고 일단 저렇게 치면 놀랍게도 터미널에서 OCR 이 돌아간다. ~~이렇게 야매개발자라 할말이 없다. 이유를 알게 되면 정리해야지...~~

<br>
<p>덧붙이자면 하나 실수했던 것이 있는데 cd로 꼭 인식하고 싶은 파일이 있는 위치로 이동해서 tesseract 코드를 쳐야한다. <br> 나는 다짜고짜 시험하려고 인식하고 싶은 파일이 없는 위치에서 돌렸다가 에러났다. 그 이유를 알고나서 저렇게 데스크톱으로 위치를 옮긴다음 코드를 돌렸다.</p>


### 테스트 결과

~~~
(base) baghyeliui-MacBookPro:Desktop spica$ tesseract hangul.png stdout -l kor
Warning: Invalid resolution 0 dpi. Using 70 instead.
Estimating resolution as 157
소년

여기저기서 단품잎 같은 슬픈 가을이 뚝뚝 떨어진다. 단품잎
떨어져 나온 자리마다 봄을 마련해 놓고 나못가지 위에 하늘이
펼쳐 있다. 가만히 하늘을 들여다보려면 눈썸에 파란 물감이
든다. 두 손으로 따뜻한 볼을 쓸어 보면 손바닥에도 파란 물감
이 묻어난다. 다시 손바닥을 들여다본다. 손금에는 맑은 강물
이 흐르고, 맑은 강물이 흐르고, 강물 속에는 사랑처럼 슬픈 얼
굴ㅡ아름다운 순이의 얼굴이 어린다. 소년은 황홀히 눈을
감마 본다. 그래도 맑은 강물은 흘러 사랑처럼 슬픈 얼굴--
아름다운 순이의 얼굴은 어린다.
~~~

-l kor 을 쳤을 때는 제목은 '소년'이라고 잘 나온대신 단풍잎을 '단품잎', 눈썹을 '눈썸'으로 오독했다. 아마 글씨체의 문제인 것 같다.

~~~
(base) baghyeliui-MacBookPro:Desktop spica$ tesseract hangul.png stdout -l script/Hangul
Warning: Invalid resolution 0 dpi. Using 70 instead.
Estimating resolution as 157
초년

여기저기서 단풍잎 같은 슬픈 가 을 이 뚝뚝 떨어진다. 단풍잎
떨어져 나온 자 리 마다 봄 을 마련해 놓고 나 릇 가지 위에 하 늘 이
(펼쳐 있다. 가만히 하 늘 을 들 여 다 보려면 눈 썸 에 파란 물 감 이
든다. 두 손 으로 따뜻한 볼 을 쓸어 보면 손 바 닥 에도 파란 물감
이 묻 어 난다. 다시 손 바 닥 을 들 여 다 본다. 손 금 에는 맑은 강물
이 흐르고, 맑은 강 물 이 흐르고, 강물 속에는 사 랑 처 럼 슬픈 얼
굴 -- 아름다운 순 이 의 얼 굴 이 어 린 다. 소 년 은 황 홀 히 눈 을
감아 본다. 그래도 맑은 강 물 은 흘러 사 람 처럼 슬픈 얼 굴 -
아름다운 순 이 의 얼 굴 은 어 린 다.
~~~

-l script/Hangul 도 있어서 이렇게 쳐보았더니 제목이 '초년'으로 나온다. 대신 단풍잎은 제대로 읽었다. 여전히 눈썹은 오타가 있다. 
<br>위의 것과 달리 띄어쓰기가 굉장히 심각하다.

한글 인식을 해보니 좀 인식률이 떨어지기는 하지만 그다지 나쁘지 않은 것으로 보인다. 

~~~
(base) baghyeliui-MacBookPro:Desktop spica$ tesseract english.png stdout
Warning: Invalid resolution 0 dpi. Using 70 instead.
Estimating resolution as 130
A Dream Within A Dream

by Edgar Allan Poe

Take this kiss upon the brow!
And, in parting from you now,
‘Thus much let me avow--
‘You are not wrong, who deem
That my days have been a dream;
‘Yet if hope has flown away
Ina night, or in a day,

Ina vision, or in none,

Is it therefore the less gone?
Alll that we see or seem

Is but a dream within a dream.
~~~

대망의 영어인식! 
<br> 역시 영어인식률은 진짜 좋다. 99.99%의 정확성. 

<br>
결론은 한글, 한자 인식 OCR 스캔기술을 개발해서 월드플레이의 경험을 만들때에 활용할 수 있도록 노력해야지.
