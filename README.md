# poompoom

<br/>

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
