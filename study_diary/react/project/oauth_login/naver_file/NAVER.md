## Naver

#### API 요청

- API 요청 성공시 : http://콜백URL/redirect?code={code값}&state={state값}
- API 요청 실패시 : http://콜백URL/redirect?state={state값}&error={에러코드값}&error_description={에러메시지}



#### 네이버 로그인 회원의 프로필 정보 상세

- 이용자 식별자 (네이버 ID가 아닌 고유 식별자) : 
  - 64자 이내로 구성된 BASE64 형식의 문자열
  - (2021년 5월 1일 이후 생성된 애플리케이션부터 적용. 기존 INT64 규격의 숫자)
- 이름
  - 10자 이내로 구성된 문자열
- 닉네임 (네이버 별명)
  - 20자 이내로 구성된 문자열
- 프로필 이미지 (네이버 내정보 프로필 이미지 URL)
  - 255자 이내로 구성된 URL 형태의 문자열
- 이메일 주소 (네이버 내정보 이메일)
  - 이메일 규격의 문자열
- 생일
  - 월-일 (MM-DD) 형태의 문자열
- 연령대
  - 연령 구간에 따라 0-9 / 10-19 / 20-29 / 30-39 / 40-49 / 50-59 / 60- 으로 표현된 문자열
- 성별
  - M/F (남성/여성) 으로 표된 문자
- 출생연도
  - 연(YYYY) 형태의 문자열
- 휴대전화번호
  - 대쉬(-)를 포함한 휴대전화번호 문자열



> 예시 ) 
>
> - 이용자 식별자 : abcdefgABCDEFG1234567
> - 이름 : 네이버
> - 닉네임 : 네이버닉네임
> - 프로필 이미지 : https://phinf.pstatic.net/.../image.jpg
> - 이메일 주소 : naveridlogin@naver.com
> - 생일 : 08-15
> - 연령대 : 20-29
> - 성별 : F
> - 출생연도 : 1900
> - 휴대전화번호 : 010-0000-0000
> - ***네이버에서 제공하는 프로필 정보 중 "이용자 식별자"를 제외한 프로필정보는 사용자의 선택에 따라서 제공이 되지 않을수 있습니다.***



#### 네이버 로그인 연동을 위한 테이블 구성

<img src="./img/naver_table.png">



#### TEST

- callback url : http://localhost:3000/api/auth/callback/naver



#### 참고

- [네이버 로그인-개발가이드](https://developers.naver.com/docs/login/devguide/devguide.md#%EB%84%A4%EC%9D%B4%EB%B2%84%20%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B0%9C%EB%B0%9C%EA%B0%80%EC%9D%B4%EB%93%9C)





- NaverLoginBtn.tsx

  ```javascript
  import React, { useEffect } from 'react'
  import Router from 'next/router'
  
  declare global {
    interface Window {
      naver: any
    }
  }
  
  let naverLogin: any
  export default function NaverLogin() {
    useEffect(() => {
      const initNaverLogin = () => {
        const naverLogin = new window.naver.LoginWithNaverId({
          clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
          callbackUrl: process.env.NEXT_PUBLIC_NAVER_CALLBACK_URL,
          isPopup: false,
          loginButton: { color: 'green', type: 3, height: 20 },
          callbackHandle: true,
        })
  
        naverLogin.init()
      }
      const getData = () => {
        console.log('===>', window.location.href.includes('access_token'))
        if (window.location.href.includes('access_token')) {
          console.log('We get access_token!')
        } else {
          console.log('We can not get access_token!')
        }
      }
  
      const getToken = () => {
        console.log('🚨🚨🚨🚨 getToken called!')
        const hash = Router.asPath.split('#')[1]
        console.log('🚨🚨🚨🚨 hash :', hash)
        if (hash) {
          console.log('hash ===> ', hash)
  
          const token = hash.split('=')[1].split('&')[0]
          console.log('token ===> ', token)
  
          naverLogin.getLoginStatus((status: any) => {
            if (status) {
              console.log('status ===> ', status)
              console.log('naverLogin.user ===> ', naverLogin.user)
  
              Router.push({
                pathname: '/api/auth/callback/naver',
                query: {
                  token: token,
                },
              })
            }
          })
        } else {
          console.log('hash is undefined')
        }
      }
      initNaverLogin()
      getData()
    }, [])
  
    return <div id="naverIdLogin" className="text-center w-[200px] mx-auto m-2" />
  }
  
  ```

- src/pages/api/auth/callback/naver.tsx

  ```javascript
  import axios from 'axios'
  import type { NextApiRequest, NextApiResponse } from 'next'
  import { useSession } from 'next-auth/react'
  
  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { data, status } = useSession()
    console.log(data, status)
    /**
     * code : 네이버 로그인 인증에 성공하면 반환받는 인증 코드, 접근 토큰(access token) 발급에 사용
     * state : 사이트 간 요청 위조 공격을 방지하기 위해 애플리케이션에서 생성한 상태 토큰으로 URL 인코딩을 적용한 값
     */
  
    // console.log('🔫 req.query.code ->', req.query.code)
    // console.log('🔫 req.query.state ->', req.query.state)
  
    // let access_token: any
    // axios
    //   .get('https://nid.naver.com/oauth2.0/token', {
    //     params: {
    //       grant_type: 'authorization_code',
    //       client_id: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    //       client_secret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
    //       code: req.query.code,
    //       state: req.query.state,
    //     },
    //   })
    //   .then((res) => {
    //     access_token = res.data.access_token
    //     console.log('🔫 res.data.access_token ->', res.data.access_token)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  
    // // res.status(200).redirect('/')
  
    // res.status(200).json({
    //   code: req.query.code,
    //   state: req.query.state,
    //   access_token: access_token,
    // })
  
    // console.log('🔫 req ->', req)
  
    return res.status(200).redirect('/')
  }
  
  ```

  



```
curl  -XGET "https://openapi.naver.com/v1/nid/me" \
      -H "Authorization: Bearer AAAAOZU52esvkKAtm3s4YTasvMed70AohrnpoRTh7DLv9NdsQeSoFepFRdGHFMQMKAJ-RwFIdiQxWwJzT_MNFky1kbM
```



---



# Next-Auth Naver

```javascript
🔫 async signIn!
user : {
  id: 'Wab0OMx2OE6DH_zLrMDaMVZhQLSBjA6B3voYwOJLkZM',
  name: '김찬',
  email: 'bibis0520@naver.com',
  image: undefined
}
account : {
  provider: 'naver',
  type: 'oauth',
  providerAccountId: 'Wab0OMx2OE6DH_zLrMDaMVZhQLSBjA6B3voYwOJLkZM',
  access_token: 'AAAAOZ3LWO3xzkNOfXNUE2W9AXbgxk2J69pTNBt8c7gsUM7tFONvc8fzLD5ZzjkzCAeZW5ai5BJuWrJ2u2Wvar8gGSA',
  refresh_token: 'Yg4csbFhoyiiYrkxq6DcisV06IgKPDBZ8ot4n7lipEBJQkfaBN45uLgafBlip5nii96isFRmTYqVm2hnooxLjbii3DYIqz2NrTs1Mz1eHBqAIipH0Dip056YfFeDCpCDQKiiEDK6OF',
  token_type: 'bearer',
  expires_at: 1653027548
}
profile : {
  resultcode: '00',
  message: 'success',
  response: {
    id: 'Wab0OMx2OE6DH_zLrMDaMVZhQLSBjA6B3voYwOJLkZM',
    email: 'bibis0520@naver.com',
    mobile: '010-2376-0765',
    mobile_e164: '+821023760765',
    name: '김찬'
  }
}
email : undefined
credentials : undefined

🔫 async redirect!
url : http://localhost:3000
baseUrl : http://localhost:3000

🔫 async session!
session : {
  user: { name: '김찬', email: 'bibis0520@naver.com', image: undefined },
  expires: '2022-06-19T05:19:10.825Z'
}
user : undefined
token : {
  name: '김찬',
  email: 'bibis0520@naver.com',
  sub: 'Wab0OMx2OE6DH_zLrMDaMVZhQLSBjA6B3voYwOJLkZM',
  iat: 1653023949,
  exp: 1655615949,
  jti: 'f6c236a3-334f-4b7e-9e02-d18fe8fd7a44'
}

🔫 async jwt!
token : {
  name: '김찬',
  email: 'bibis0520@naver.com',
  picture: undefined,
  sub: 'Wab0OMx2OE6DH_zLrMDaMVZhQLSBjA6B3voYwOJLkZM'
}
user : {
  id: 'Wab0OMx2OE6DH_zLrMDaMVZhQLSBjA6B3voYwOJLkZM',
  name: '김찬',
  email: 'bibis0520@naver.com',
  image: undefined
}
account : {
  provider: 'naver',
  type: 'oauth',
  providerAccountId: 'Wab0OMx2OE6DH_zLrMDaMVZhQLSBjA6B3voYwOJLkZM',
  access_token: 'AAAAOZ3LWO3xzkNOfXNUE2W9AXbgxk2J69pTNBt8c7gsUM7tFONvc8fzLD5ZzjkzCAeZW5ai5BJuWrJ2u2Wvar8gGSA',
  refresh_token: 'Yg4csbFhoyiiYrkxq6DcisV06IgKPDBZ8ot4n7lipEBJQkfaBN45uLgafBlip5nii96isFRmTYqVm2hnooxLjbii3DYIqz2NrTs1Mz1eHBqAIipH0Dip056YfFeDCpCDQKiiEDK6OF',
  token_type: 'bearer',
  expires_at: 1653027548
}
profile : {
  resultcode: '00',
  message: 'success',
  response: {
    id: 'Wab0OMx2OE6DH_zLrMDaMVZhQLSBjA6B3voYwOJLkZM',
    email: 'bibis0520@naver.com',
    mobile: '010-2376-0765',
    mobile_e164: '+821023760765',
    name: '김찬'
  }
}
isNewUser : undefined
```



# Next-Auth Google

```javascript
🔫 async signIn!
user : {
  id: '110491656816200541479',
  name: '보리형님 BoriBro',
  email: 'kimchan0765@gmail.com',
  image: 'https://lh3.googleusercontent.com/a-/AOh14Gi1rFfa4W6PdIU6nueMIR_-kdmEXxtgviT2ge1I3JE=s96-c'
}
account : {
  provider: 'google',
  type: 'oauth',
  providerAccountId: '110491656816200541479',
  access_token: 'ya29.a0ARrdaM-holfkmjOtIWSO4cicuW2YNTesOIxT4svvRIULTfLv_l02maKCjO-k44u6KQZqUCLxa9kUCYBQwmUUKq8DHX3Jcq-iLDwSGk1J3SQyJn6vCYptQtD22gwycccd9yd3D2qzKvh322YPT5X3qFw88jri',
  expires_at: 1653027626,
  scope: 'https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email',
  token_type: 'Bearer',
  id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ4NmYxNjQ4MjAwNWEyY2RhZjI2ZDkyMTQwMThkMDI5Y2E0NmZiNTYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NzQ3MTc1NDY5MjctamYzYWJxcTM4a3E5Y2RxdWRrZ20wcmpsa3RmdDl1NW8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NzQ3MTc1NDY5MjctamYzYWJxcTM4a3E5Y2RxdWRrZ20wcmpsa3RmdDl1NW8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTA0OTE2NTY4MTYyMDA1NDE0NzkiLCJlbWFpbCI6ImtpbWNoYW4wNzY1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiWlpyVUlfS0o1VlFlOUVNLTd3ZnVqdyIsIm5hbWUiOiLrs7TrpqztmJXri5ggQm9yaUJybyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaTFyRmZhNFc2UGRJVTZudWVNSVJfLWtkbUVYeHRndmlUMmdlMUkzSkU9czk2LWMiLCJnaXZlbl9uYW1lIjoi67O066as7ZiV64uYIEJvcmlCcm8iLCJsb2NhbGUiOiJrbyIsImlhdCI6MTY1MzAyNDAyNywiZXhwIjoxNjUzMDI3NjI3fQ.G_kzOO5W6ahCOFeuPuMXMqGfrraYUxTSNjjRGd8bNpF10o6njtUlG0ijZ19AwwJSQX8LdaZUmhotjfnUjkzSJRoG35xASQYOQ0u6y3AE-uQDAh2uug_EmdWfSfq5cNksHNB606nEr1tXmbWf2WYxUXgyzlC3k4JG5vOrqszV14APe-SKCJF_I6xt8f9NcpN45bNpGepkrkc3VcbodCbmeXndCRYroY21tYEHJd5m2EZmjCpMo_3JDGvcaOPrIJ_AZYUI5ZRge-RtVD5McTi-JG0hsoVATwSClWdgympeVSW-qcbkwcnN9KKHW_u1nwYb0Bi64wrJLogYoDOmigK0mg'
}
profile : {
  iss: 'https://accounts.google.com',
  azp: '874717546927-jf3abqq38kq9cdqudkgm0rjlktft9u5o.apps.googleusercontent.com',
  aud: '874717546927-jf3abqq38kq9cdqudkgm0rjlktft9u5o.apps.googleusercontent.com',
  sub: '110491656816200541479',
  email: 'kimchan0765@gmail.com',
  email_verified: true,
  at_hash: 'ZZrUI_KJ5VQe9EM-7wfujw',
  name: '보리형님 BoriBro',
  picture: 'https://lh3.googleusercontent.com/a-/AOh14Gi1rFfa4W6PdIU6nueMIR_-kdmEXxtgviT2ge1I3JE=s96-c',
  given_name: '보리형님 BoriBro',
  locale: 'ko',
  iat: 1653024027,
  exp: 1653027627
}
email : undefined
credentials : undefined

🔫 async redirect!
url : http://localhost:3000
baseUrl : http://localhost:3000

🔫 async session!
session : {
  user: {
    name: '보리형님 BoriBro',
    email: 'kimchan0765@gmail.com',
    image: 'https://lh3.googleusercontent.com/a-/AOh14Gi1rFfa4W6PdIU6nueMIR_-kdmEXxtgviT2ge1I3JE=s96-c'
  },
  expires: '2022-06-19T05:20:29.447Z'
}
user : undefined
token : {
  name: '보리형님 BoriBro',
  email: 'kimchan0765@gmail.com',
  picture: 'https://lh3.googleusercontent.com/a-/AOh14Gi1rFfa4W6PdIU6nueMIR_-kdmEXxtgviT2ge1I3JE=s96-c',
  sub: '110491656816200541479',
  iat: 1653024027,
  exp: 1655616027,
  jti: '673f92d0-463e-41ad-b4bc-1851ce7e424b'
}

🔫 async jwt!
token : {
  name: '보리형님 BoriBro',
  email: 'kimchan0765@gmail.com',
  picture: 'https://lh3.googleusercontent.com/a-/AOh14Gi1rFfa4W6PdIU6nueMIR_-kdmEXxtgviT2ge1I3JE=s96-c',
  sub: '110491656816200541479'
}
user : {
  id: '110491656816200541479',
  name: '보리형님 BoriBro',
  email: 'kimchan0765@gmail.com',
  image: 'https://lh3.googleusercontent.com/a-/AOh14Gi1rFfa4W6PdIU6nueMIR_-kdmEXxtgviT2ge1I3JE=s96-c'
}
account : {
  provider: 'google',
  type: 'oauth',
  providerAccountId: '110491656816200541479',
  access_token: 'ya29.a0ARrdaM-holfkmjOtIWSO4cicuW2YNTesOIxT4svvRIULTfLv_l02maKCjO-k44u6KQZqUCLxa9kUCYBQwmUUKq8DHX3Jcq-iLDwSGk1J3SQyJn6vCYptQtD22gwycccd9yd3D2qzKvh322YPT5X3qFw88jri',
  expires_at: 1653027626,
  scope: 'https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email',
  token_type: 'Bearer',
  id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ4NmYxNjQ4MjAwNWEyY2RhZjI2ZDkyMTQwMThkMDI5Y2E0NmZiNTYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NzQ3MTc1NDY5MjctamYzYWJxcTM4a3E5Y2RxdWRrZ20wcmpsa3RmdDl1NW8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NzQ3MTc1NDY5MjctamYzYWJxcTM4a3E5Y2RxdWRrZ20wcmpsa3RmdDl1NW8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTA0OTE2NTY4MTYyMDA1NDE0NzkiLCJlbWFpbCI6ImtpbWNoYW4wNzY1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiWlpyVUlfS0o1VlFlOUVNLTd3ZnVqdyIsIm5hbWUiOiLrs7TrpqztmJXri5ggQm9yaUJybyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaTFyRmZhNFc2UGRJVTZudWVNSVJfLWtkbUVYeHRndmlUMmdlMUkzSkU9czk2LWMiLCJnaXZlbl9uYW1lIjoi67O066as7ZiV64uYIEJvcmlCcm8iLCJsb2NhbGUiOiJrbyIsImlhdCI6MTY1MzAyNDAyNywiZXhwIjoxNjUzMDI3NjI3fQ.G_kzOO5W6ahCOFeuPuMXMqGfrraYUxTSNjjRGd8bNpF10o6njtUlG0ijZ19AwwJSQX8LdaZUmhotjfnUjkzSJRoG35xASQYOQ0u6y3AE-uQDAh2uug_EmdWfSfq5cNksHNB606nEr1tXmbWf2WYxUXgyzlC3k4JG5vOrqszV14APe-SKCJF_I6xt8f9NcpN45bNpGepkrkc3VcbodCbmeXndCRYroY21tYEHJd5m2EZmjCpMo_3JDGvcaOPrIJ_AZYUI5ZRge-RtVD5McTi-JG0hsoVATwSClWdgympeVSW-qcbkwcnN9KKHW_u1nwYb0Bi64wrJLogYoDOmigK0mg'
}
profile : {
  iss: 'https://accounts.google.com',
  azp: '874717546927-jf3abqq38kq9cdqudkgm0rjlktft9u5o.apps.googleusercontent.com',
  aud: '874717546927-jf3abqq38kq9cdqudkgm0rjlktft9u5o.apps.googleusercontent.com',
  sub: '110491656816200541479',
  email: 'kimchan0765@gmail.com',
  email_verified: true,
  at_hash: 'ZZrUI_KJ5VQe9EM-7wfujw',
  name: '보리형님 BoriBro',
  picture: 'https://lh3.googleusercontent.com/a-/AOh14Gi1rFfa4W6PdIU6nueMIR_-kdmEXxtgviT2ge1I3JE=s96-c',
  given_name: '보리형님 BoriBro',
  locale: 'ko',
  iat: 1653024027,
  exp: 1653027627
}
isNewUser : undefined
```



# Next-Auth Kakao

```javascript
🔫 async signIn!
user : {
  id: '2249925158',
  name: 'ChanKim',
  email: 'rlacks0765@naver.com',
  image: undefined
}
account : {
  provider: 'kakao',
  type: 'oauth',
  providerAccountId: '2249925158',
  access_token: 'VmxdmeQX0OO4W14-USbI8vnko7ZXklWrKc5E_V1uCj1zGAAAAYDf6lEE',
  token_type: 'bearer',
  refresh_token: 'hFG2kLrKJbas7diC1jJmioWWHAbsF7JzvnitsnLXCj1zGAAAAYDf6lED',
  expires_at: 1653045715,
  scope: 'account_email profile_nickname',
  refresh_token_expires_in: 5183999
}
profile : {
  id: 2249925158,
  connected_at: '2022-05-20T04:59:19Z',
  properties: { nickname: 'ChanKim' },
  kakao_account: {
    profile_nickname_needs_agreement: false,
    profile: { nickname: 'ChanKim' },
    has_email: true,
    email_needs_agreement: false,
    is_email_valid: true,
    is_email_verified: true,
    email: 'rlacks0765@naver.com'
  }
}
email : undefined
credentials : undefined

🔫 async redirect!
url : http://localhost:3000
baseUrl : http://localhost:3000

🔫 async session!
session : {
  user: { name: 'ChanKim', email: 'rlacks0765@naver.com', image: undefined },
  expires: '2022-06-19T05:21:58.455Z'
}
user : undefined
token : {
  name: 'ChanKim',
  email: 'rlacks0765@naver.com',
  sub: '2249925158',
  iat: 1653024116,
  exp: 1655616116,
  jti: 'c089a25a-e14c-4154-8481-578c1c682cfd'
}

🔫 async jwt!
token : {
  name: 'ChanKim',
  email: 'rlacks0765@naver.com',
  sub: '2249925158',
  iat: 1653024116,
  exp: 1655616116,
  jti: 'c089a25a-e14c-4154-8481-578c1c682cfd'
}
user : {
  id: '2249925158',
  name: 'ChanKim',
  email: 'rlacks0765@naver.com',
  image: undefined
}
account : {
  provider: 'kakao',
  type: 'oauth',
  providerAccountId: '2249925158',
  access_token: 'VmxdmeQX0OO4W14-USbI8vnko7ZXklWrKc5E_V1uCj1zGAAAAYDf6lEE',
  token_type: 'bearer',
  refresh_token: 'hFG2kLrKJbas7diC1jJmioWWHAbsF7JzvnitsnLXCj1zGAAAAYDf6lED',
  expires_at: 1653045715,
  scope: 'account_email profile_nickname',
  refresh_token_expires_in: 5183999
}
profile : {
  id: 2249925158,
  connected_at: '2022-05-20T04:59:19Z',
  properties: { nickname: 'ChanKim' },
  kakao_account: {
    profile_nickname_needs_agreement: false,
    profile: { nickname: 'ChanKim' },
    has_email: true,
    email_needs_agreement: false,
    is_email_valid: true,
    is_email_verified: true,
    email: 'rlacks0765@naver.com'
  }
}
isNewUser : undefined
```

---









# 2022/05/24

# Kakao SDK사용해서 로그인 기능 만들기

- blue berry 셋팅 변경 

  - 회원가입 쿼리 ( cmd : create-sns )  

    ```mysql
    // ASIS
    insert into Customer set name=:name, mobile=:mobile, email=:email, passwd=sha2(:passwd, 512)
    
    // TOBE
    insert into Customer set name=:name, email=:email, provider=:provider, provideraccid=:provideraccid
    ```

    

  - 로그인 쿼리 ( cmd : login-sns )

    ```mysql
    select id, name, mobile, email, level as auth, level as role, fmctoken, provider
    from Customer
    where email=:email
      and provider=:provider
      and provideraccid=:provideraccid
      
      
      
    -- sub query = with_logindt
    update Customer set logindt = current_timestamp(), fcmtoken=ifnull(:fcmtoken, fcmtoken)
    where id = :main.id
    ```

    

  

  







































