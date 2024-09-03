# poompoom

연인간에 주고 받은 선물을 공유하여 선물 선택의 고민을 덜고, 다양한 후기와 경험을 나눌 수 있는 `선물 공유 플랫폼`입니다.
받은 선물이나 준 선물을 플랫폼에 공유하여 실시간 후기와 평가를 확인할 수 있습니다.

### ✅ 사용 기술 및 개발 환경

JavaScript, React, styled-components, ESLint/Prettier(Airbnb Style), Yarn

### ✅ Application UI

- 홈화면

![image](https://github.com/user-attachments/assets/029d1bc2-ca48-4e37-9c5c-094fdec62103)
![image](https://github.com/user-attachments/assets/4b7a1e54-46bf-490d-aa71-f7464cdb7cff)
![image](https://github.com/user-attachments/assets/aa06d538-9b0b-4707-8413-601cabb85aae)

### ✅ Architecture
![image](https://github.com/user-attachments/assets/813ed4eb-4b4f-4340-9db1-91edf7e38fea)

### ✅ 주요 기능

1. 회원가입
2. 로그인
3. 검색(프로필, 리뷰글)
4. 정렬(가격대, 품목)
5. 리뷰글 작성/조회/수정/삭제
6. 팔로우
7. 프로필 조회/수정

### ✅ Technical Issue

자세한 내용은 👉 https://github.com/TwoSSome/poompoom-web/wiki
- 웹 브라우저 상에서 HTTPS/HTTP 통신 불가 (Mixed Content 차단)
- Grid로 구성된 리뷰글이 디스플레이 크기에 따라 뭉개지는 현상 발생
- 50KB 이상 이미지 번들링 속도가 느려지는 현상 발생

### 📌 Branch Naming Convention (Github-Flow)

```
main ── feature
```

- main : 배포 중인 서비스 브랜치
  - 실제 서비스가 이루어지는 브랜치입니다.
  - 프로젝트의 default 브랜치입니다.
  - 해당 브랜치를 기준으로 feature 브랜치가 분기됩니다.
- feature : 기능 단위 구현
  - 개별 개발자가 맡은 작업을 개발하는 브랜치입니다.
  - feature/(feature-name)처럼 머릿말-꼬릿말(개발하는 기능)으로 명명합니다.
  - kebab-case 네이밍 규칙을 준수합니다.
  - Issue close 후 브랜치를 삭제합니다.

<br/>

### 📌 Commit Convention

| emoji                       | message  | description                                           |
| --------------------------- | -------- | ----------------------------------------------------- |
| :sparkles:                  | feat     | 새로운 기능 추가, 기존 기능을 요구 사항에 맞추어 수정 |
| :bug:                       | fix      | 기능에 대한 버그 수정                                 |
| :closed_book:               | docs     | 문서(주석) 수정                                       |
| :green_heart:               | build    | 빌드 관련 수정                                        |
| :recycle:                   | refactor | 기능 변화가 아닌 코드 리팩터링                        |
| :pushpin:                   | chore    | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore    |
| :construction_worker:       | ci       | CI 관련 설정 수정                                     |
| :art:                       | style    | 코드 스타일, 포맷팅에 대한 수정                       |
| :white_check_mark:          | test     | 테스트 코드 추가/수정                                 |
| :bookmark:                  | release  | 버전 릴리즈                                           |
| :ambulance:                 | hotfix   | 긴급 수정                                             |
| :twisted_rightwards_arrows: | branch   | 브랜치 추가/병합                                      |
