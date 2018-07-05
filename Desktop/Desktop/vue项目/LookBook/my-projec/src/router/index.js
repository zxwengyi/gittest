import Vue from 'vue'
import Router from 'vue-router'
/* 登录注册 */
import guide from '@/components/loginAndRegis/guide'
import loginAndRegist from '@/components/loginAndRegis/loginAndRegist'
import login from '@/components/loginAndRegis/login'
import register from '@/components/loginAndRegis/register'
/* 阅读文 */
import articles from '@/components/home/articles'
import textIntroduces from '@/components/home/textIntroduces/textIntroduces'
import music from '@/components/home/music'
/* 勇挑战 */
import challenge from '@/components/home/challenge/challenge'
import challengeResults from '@/components/home/challenge/challengeResults'
import lookTop from '@/components/home/challenge/lookTop'
import lookWrongQuestion from '@/components/home/challenge/lookWrongQuestion'
import discuss from '@/components/home/discuss/discuss'
import question from '@/components/home/discuss/question'
/* 乐创编 */
import creativity from '@/components/home/creativity/creativity'
import createDetails from '@/components/home/creativity/createDetails'
import createComplete from '@/components/home/creativity/createComplete'
import uploadPictures from '@/components/home/creativity/uploadPictures'
import submit from '@/components/home/creativity/submit'

/* 阅读圈 */
import readGroupArticle from '@/components/home/readGroupArticle/readGroupArticle'
// import articleTemp2 from '@/components/home/readGroupArticle/articleTemp2'
// import articleTemp from '@/components/home/readGroupArticle/articleTemp'
import readingCircle from '@/components/readingCircle/readingCircle'
import discussInfo from '@/components/readingCircle/writtenComments/discussInfo'
import classmateInfo from '@/components/readingCircle/lassmatePanel/classmateInfo'
/* 我的 */
import myInfo from '@/components/my/myInfo'
import modify from '@/components/my/myMessage/modify'
import modifyInfo from '@/components/my/myMessage/modifyCommonsCompon'
import myCollection from '@/components/my/myCollection/myCollection'
import myNotes from '@/components/my/myNotes/myNotes'
import myQuestion from '@/components/my/myQuestions/myQuestion'
import message from '@/components/message/message'
import personalsSetting from '@/components/my/setting/personalsSetting'

/* 其他 */
import page01A from '@/components/page01/page01-A'
import page01B from '@/components/page01/page01-b'
import pageEnd from '@/components/page01/B/end'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/guide'
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide
    },
    {
      path: '/loginAndRegist',
      name: 'loginAndRegist',
      component: loginAndRegist
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/articles',
      name: 'articles',
      component: articles,
      meta: { keepAlive: true }
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/textIntroduces',
      name: 'textIntroduces',
      component: textIntroduces
    },
    {
      path: '/challenge',
      name: 'challenge',
      component: challenge
    },
    {
      path: '/challengeResults',
      name: 'challengeResults',
      component: challengeResults
    },
    {
      path: '/lookTop',
      name: 'lookTop',
      component: lookTop
    },
    {
      path: '/lookWrongQuestion',
      name: 'lookWrongQuestion',
      component: lookWrongQuestion
    },
    {
      path: '/readGroupArticle',
      name: 'readGroupArticle',
      component: readGroupArticle
    },
    {
      path: '/creativity',
      name: 'creativity',
      component: creativity
    },
    {
      path: '/createDetails',
      name: 'createDetails',
      component: createDetails
    },
    {
      path: '/createComplete/:backSteep',
      name: 'createComplete',
      component: createComplete
    },
    {
      path: '/submit',
      name: 'submit',
      component: submit
    },
    {
      path: '/uploadPictures',
      name: 'uploadPictures',
      component: uploadPictures
    },
    {
      path: '/discuss',
      name: 'discuss',
      component: discuss
    },
    {
      path: '/question',
      name: 'question',
      component: question
    },
    {
      path: '/readingCircle',
      component: readingCircle,
      children: [
        {
          path: '',
          redirect: 'page01-a'
        },
        {
          path: 'page01-a',
          name: 'page01A',
          component: page01A
        },
        {
          path: 'page01-b',
          name: 'page01B',
          component: page01B,
          children: [
            {
              path: 'end',
              name: 'pageEnd',
              component: pageEnd
            }
          ]
        }
      ]
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo
    },
    {
      path: '/modify',
      name: 'modify',
      component: modify
    },
    {
      path: '/modifyInfo',
      name: 'modifyInfo',
      component: modifyInfo
    },
    {
      path: '/discussInfo/:info',
      name: 'discussInfo',
      component: discussInfo
    },
    {
      path: '/classmateInfo',
      name: 'classmateInfo',
      component: classmateInfo
    },
    {
      path: '/myCollection',
      name: 'myCollection',
      component: myCollection
    },
    {
      path: '/myNotes',
      name: 'myNotes',
      component: myNotes
    },
    {
      path: '/myQuestion',
      name: 'myQuestion',
      component: myQuestion
    },
    {
      path: '/personalsSetting',
      name: 'personalsSetting',
      component: personalsSetting
    }
  ]
})
