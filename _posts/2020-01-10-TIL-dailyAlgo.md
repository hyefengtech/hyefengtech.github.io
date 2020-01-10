---
layout: post
title: "&#91;TIL&#93; 2020-01-10 DailyAlgo"
categories: [TIL, Algorithm]
tags: 
- TIL
- Algorithm
---

# level 1. 서울에서 김서방 찾기
> 출처 - 프로그래머스

## 문제 설명

String형 배열 seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요. 
<br>seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

### 제한 사항

seoul은 길이 1 이상, 1000 이하인 배열입니다.
<br>seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
<br>Kim은 반드시 seoul 안에 포함되어 있습니다.

> 입출력 예
> seoul	       return
>[Jane, Kim]	"김서방은 1에 있다"


## 나의 코드

~~~

def solution(seoul):
    kimIdx = seoul.index('Kim')
    return "김서방은 {}에 있다".format(kimIdx)

# 실행을 위한 테스트코드입니다.
print(solution(["Rein","Hazjak","Kim"]))

~~~


## TIL

1. 리스트 관련 함수 중에 '위치 반환(index)'이 있다.
<br>index(x) 함수는 리스트에 x라는 값이 있으면 x의 위치값을 리턴한다.
~~~
a = [1,2,3]
a.index(3) // 3은 리스트 a의 세 번째(a[2])요소 이므로 2를 리턴
~~~

2. 파이썬에서 문자열 함수 중 format()이 있다.
~~~

>>> value = 4 * 20
>>> 'The value is {value}.'.format(value=value)
'The value is 80.'

Even in its simplest form there is a bit of boilerplate, and the value that's inserted into the placeholder is sometimes far removed from where the placeholder is situated:

>>> 'The value is {}.'.format(value)
'The value is 80.'
With an f-string, this becomes:

>>> f'The value is {value}.'
'The value is 80.'

~~~

## 답을 찾아야할 의문점

함수의 입력인수로 들어갈 수 있는 값의 종류는 무엇무엇이 있을까? 배열도 입력값으로 들어갈 수 있나?


## 최종 정리

seoul.index('Kim') 라는 것은 이렇게 쓰인 이상 데이터타입이 그저 어떤 하나의 값에 해당하는 거겠지. 
<br>그리고 이걸 변수 kimIdx에 대입한 것이고.
<br>그리고 나서 format 함수의 입력인수에 변수 kimIdx를 대입한 것이다.
<br>마지막으로 이를 프린트 한다.
