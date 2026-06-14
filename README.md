# TIER · HeartSync

연애 시장 자기객관화 — 12문항 기반 6계급(GOD / ALPHA / BETA+ / BETA / GAMMA / OMEGA) 진단.

## 구조

단일 정적 페이지 SPA. 빌드 없음, 그대로 호스팅.

- `index.html` — 진입점 (랜딩으로 자동 리다이렉트)
- `TIER Landing.dc.html` — 메인 SPA (랜딩 / 측정 / 검문소 / 티저 / 가입 / 결과 4뷰 통합)

## 백엔드

- Supabase `profiles` 테이블에 `service_origin: 'tier'`로 INSERT
- TIER 전용 컬럼: `tier_grade`, `tier_total_score`, `tier_self_looks`, `tier_self_care`, `tier_photo_uploaded`, `tier_answers_raw (jsonb)`
- HeartSync 공통 컬럼 매핑: `my_income`, `my_edu`, `my_sido`, `my_job`, `my_religion`, `my_body`, `my_values`

## 배포

Vercel / Netlify / 정적 호스팅 어디든. 별도 빌드 단계 없음.

## 출시 전 TODO

- [ ] 이용약관 / 개인정보처리방침 정식본 (현재 `LEGAL` 객체에 임시본)
- [ ] 사업자 정보 / 고객센터 이메일
- [ ] GA4 측정 ID 삽입
- [ ] OG / 카카오 공유 메타 태그
- [ ] 모바일 실기기 QA (iOS Safari / Android Chrome / 카카오 인앱)
