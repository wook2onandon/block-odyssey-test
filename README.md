# 사용한 기술스택

react, css module, javascript, redux-toolkit

## 새로고침시 데이터 유지방법

검색카테고리와, 검색어, 페이지당 행 수, 페이지번호를 redux-toolkit을 사용하여 전역으로 관리해주었습니다.
그리고 검색카테고리와, 검색어, 페이지당 행 수, 페이지번호가 변할 때 마다 query pharam으로 url에 저장하고 새로고침시에 web Api인 URLSearchParams을 사용해 url에 저장된 query를 가져와서 value값을 유지해주고 useEffect로 다시 redux-toolkit의 store에 저장해주는 방식으로 해결했습니다.
