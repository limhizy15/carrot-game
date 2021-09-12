# 당근 뽑기 게임

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

## 구현할 기능

- 게임 시작, 중단
  - 시작을 누르면 게임이 시작되며 타이머 시간이 줄어든다.
  - 중단을 누르면 타이머가 정지되고 게임 재개 버튼이 뜬다.
- 게임
  - 당근, 벌레가 랜덤한 위치에 등장한다.
  - 당근을 누르면 남은 당근 수가 줄어든다.
  - 모든 당근을 누르면 게임 클리어가 되며 리플레이 버튼이 뜬다.
  - 벌레를 누르면 게임이 졌다는 화면이 뜨고 리플레이 버튼이 뜬다.

## 구현 계획

- 전체적인 틀을 잡고 HTML 마크업
- CSS를 이용한 요소들 배치
- 시작 버튼 누르면 요소들 랜덤 배치
- 당근 눌렀을 때 필요한 기능들
- 벌레 눌렀을 때 필요한 기능들
- 게임 시작, 중단, 성공, 실패

## 구현 중

### HTML markup

- [x] 게임 영역
- [x] 팝업 영역

### CSS Styling

- [x] 버튼, 타이머 등 요소들 스타일링 및 배치
- [x] 팝업을 어떻게 게임 영역 위에 위치시킬 것인지?
- `transform: translateY(-150%)`으로 해결했다.
- 그리고 평소에는 `display: none;`이 되도록
- [x] text를 가운데 정렬하기 위해 `margin: auto;`를 사용하는 경우 위 아래 마진은 어떻게 주는 게 좋을지?
- 그냥 `text-align:center;`으로 해결했다. (정렬할 때 생각 많이 필요! 🚀)

### JavaScript로 기능 추가

- [x] 당근, 벌레 랜덤 배치
- 위치를 난수 생성해서 top, left를 지정해주자 (`position: absolute`)
- [x] 게임시작
  - [x] 게임이 초기화 => 요소들 배치
  - `visibility: hidden`으로 처음에 숨길 수 있다.
  - [x] 타이머 시작
  - `setInterval(callback, 1000)`함수 활용
  - [x] 당근 누르면 남은 개수 변동
- [x] 게임중지
  - [x] 타이머 멈춤 & replay 버튼 표시
- [x] 게임재시작
  - [x] 타이머 재시작
- [x] 게임종료
  - [x] 모든 당근 찾기 완료
  - [x] 벌레 잡았을 때

#### BUG 🐛

- 재시작할 때 게임이 종료되었는지 중단되었는지 확인을 하지 않음

## 배운점, 어려웠던 점

## 스켈레톤 코드 출처
- 드림코딩 아카데미 browser 101 수업 ❤