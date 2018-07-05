/**
 * Created by yi.weng on 2017/10/11.
 */
import {
  ROUTER_BACK,
  CLICK_BOOKLIST,
  SWICH_CATALOGUE,
  UPDATE_CURRENT_TIME,
  INIT_POEM,
  SWICH_POEM,
  COLLECT_BOOK,
  SAVE_USERINFO,
  CHANGE_ARTICLE,
  IS_KEEPEYE,
  INIT_TOPICS,
  CHOOSE_ANWSER,
  INIT_DISCUSSION,
  KEEP_CHALLENG_RESULT,
  CLICK_EDITOR,
  LOOK_MORE_COMMENTS,
  SWITHER_TOPIC,
  SUBMIT_COMMENT,
  THUMB_CREATE,
  THUMB_COMMMENTS,
  CHOOSE_IMGE,
  CHOOSE_CREATE_OBJ,
  SUBMIT_CREATE,
  CHOOSE_CREATE,
  UPDATA_TIMER
} from './mutation-types.js'
export default {
  // 路游回退步数
  [ROUTER_BACK] (state, obj) {
    state.routerBackSteep = obj.steep
  },
  // 点击加载进入的图书
  [CLICK_BOOKLIST] (state, obj) {
    state.currentBook = state.bookList[obj.index]
  },
  // 点击目录
  [SWICH_CATALOGUE] (state, obj) {
    // console.log(obj)
    for (var i = 0; i < state.catalogueListes.length; i++) {
      state.catalogueListes[i].active = false
    }
    if (obj.type === 'showCatalogue') {
    } else {
      state.catalogueListes[obj.index].active = true
    }
  },
  // 更新播放时间
  [UPDATE_CURRENT_TIME] (state, obj) {
    state.currentPoemObj.currentTime = obj.currentTime
    if (state.currentPoemObj.currentTime < state.currentPoemObj.title.endTime && state.currentPoemObj.currentTime > state.currentPoemObj.title.startTime) {
      state.currentPoemObj.title.active = true
    } else {
      state.currentPoemObj.title.active = false
    }
    if (state.currentPoemObj.currentTime < state.currentPoemObj.author.endTime && state.currentPoemObj.currentTime > state.currentPoemObj.author.startTime) {
      state.currentPoemObj.author.active = true
    } else {
      state.currentPoemObj.author.active = false
    }
    for (var i = 0; i < state.currentPoemObj.content.length; i++) {
      if (state.currentPoemObj.currentTime < state.currentPoemObj.content[i].sentence.endTime && state.currentPoemObj.currentTime > state.currentPoemObj.content[i].sentence.startTime) {
        state.currentPoemObj.content[i].sentence.active = true
      } else {
        state.currentPoemObj.content[i].sentence.active = false
      }
    }
  },
  [INIT_POEM] (state, obj) {
    state.currentPoemObj = state.poemObj.poemList[obj.index]
  },
  [SWICH_POEM] (state, obj) {
    state.currentPoemObj = state.poemObj.poemList[obj.index]
  },
  [COLLECT_BOOK] (state) {
    state.currentBook.collectText = '已收藏'
    state.currentBook.isCollect = true
  },
  updateDuration (state, obj) {
    // console.log(obj.duration)
    state.currentPoemObj.duration = obj.duration
  },
  // 改变用户信息
  [SAVE_USERINFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  // 改变当前文章
  [CHANGE_ARTICLE] (state, index) {
    state.currentBook.readArticleStye = index
    state.currentArticle = state.currentBook.articleList[index]
  },
  //  切换护眼模式
  [IS_KEEPEYE] (state) {
    state.isKeepEye = !state.isKeepEye
  },
//   保持答题结果界面的状态
  [KEEP_CHALLENG_RESULT] (state, obj) {
    state.currentBook.topicTimer = obj.timer
    state.isShowResult = true
  },
  //   初始化闯关题
  [INIT_TOPICS] (state, obj) {
    state.currenTopic = state.currentBook.topicList[obj.index]
  },
//  选择答案
  [CHOOSE_ANWSER] (state, obj) {
    //  选择后选项变色
    for (var i = 0; i < state.currenTopic.options.length; i++) {
      state.currenTopic.options[i].result = false
    }
    state.currenTopic.options[obj.index].result = true
    //  答错后进入错题列表
    // /*还没有计算好===================================================*/
    if (state.currenTopic.options[obj.index].result === true && state.currenTopic.options[obj.index].standardAnswer === true) {
      if (state.currentBook.wrongTopicList.length > 0) {
        if (state.currentBook.topicList[obj.topicID - 1] === state.currentBook.wrongTopicList[state.currentBook.wrongTopicList.length - 1]) {
          state.currentBook.wrongTopicList.splice(state.currentBook.wrongTopicList.length, 1)
          // console.log(state.currentBook.wrongTopicList)
        }
      }
    } else {
      if (state.currentBook.topicList[obj.topicID - 1] === state.currentBook.wrongTopicList[state.currentBook.wrongTopicList.length - 1]) {
        return
      } else {
        // console.log(state.currentBook.wrongTopicList)
        state.currentBook.wrongTopicList.push(state.currentBook.topicList[obj.topicID - 1])
      }
    }
    //  答题后跳转到下一题
    if (obj.topicID < state.currentBook.topicList.length) {
      setTimeout(function () {
        state.currenTopic = state.currentBook.topicList[obj.topicID]
        state.currentBook.topicStype = obj.topicID
      }, 1000)
    }
  },
//   初始探议题
  [INIT_DISCUSSION] (state, obj) {
    state.currentDiscussion = state.currentBook.discussionMeun[obj.index]
  },  //  切换议题
  [SWITHER_TOPIC] (state, obj) {
    // console.log(obj)
    state.currentBook.discussionStype = obj.index
    if (obj.myDiscussionObj !== undefined) {
      // 在前面添加
      state.currentBook.discussionMeun[2].userDiscussionList.unshift(obj.myDiscussionObj)
      state.currentBook.showUserDiscussion = true
      state.currentDiscussion = state.currentBook.discussionMeun[2]
    } else {
      if (obj.index === 2) {
        state.currentBook.showUserDiscussion = true
      } else {
        state.currentBook.showUserDiscussion = false
      }
      state.currentDiscussion = state.currentBook.discussionMeun[obj.index]
    }
    for (var i = 0; i < state.swichList.length; i++) {
      state.swichList[i].swich = false
    }
    state.swichList[obj.index].swich = true
  },
  // 提交评论
  [SUBMIT_COMMENT] (state, obj) {
    // console.log(obj)
    if (obj.tpye === 'creativity') {
      // console.log(obj.tpye)
      state.currentCreate.discussionList.unshift(obj)
    } else if (obj.tpye === 'system') {
      // console.log(obj.tpye)
      state.currentDiscussion.discussionList.unshift(obj.obj)
    } else if (obj.tpye === 'user') {
      // console.log(obj)
      state.currentDiscussion.userDiscussionList[obj.index].discussionList.unshift(obj.obj)
    } else {
      console.log(obj)
    }
  },
//  查看更多评论
  [LOOK_MORE_COMMENTS] (state, obj) {
    state.currentDiscussion.userDiscussionList[obj.index].isFixationHight = !state.currentDiscussion.userDiscussionList[obj.index].isFixationHight
    state.currentDiscussion.userDiscussionList[obj.index].isSelf = !state.currentDiscussion.userDiscussionList[obj.index].isSelf
    // state.currentDiscussion.userDiscussionList[obj.index].isFixationHight = false
    // state.currentDiscussion.userDiscussionList[obj.index].isSelf = false
  },
//  编辑
  [CLICK_EDITOR] (state, obj) {
    console.log(obj)
    if (obj.type === 'editor') {
      state.currentDiscussion.userDiscussionList[obj.index].isInputContent = true
    } else if (obj.type === 'editored') {
      state.currentDiscussion.userDiscussionList[obj.index].isInputContent = false
    }
  },
//  点赞评论
  [THUMB_COMMMENTS] (state, obj) {
    if (obj.tpye === 'creativity') {
      // console.log(obj.tpye)
      state.currentCreate.discussionList[obj.index].likeImg = require('../images/icon/thumbs_yes.png')
      state.currentCreate.discussionList[obj.index].isLiked = true
      state.currentCreate.discussionList[obj.index].likeNumber++
    } else if (obj.tpye === 'system') {
      state.currentDiscussion.discussionList[obj.index].likeImg = require('../images/icon/thumbs_yes.png')
      state.currentDiscussion.discussionList[obj.index].likeNumber++
      state.currentDiscussion.discussionList[obj.index].isLiked = true
      // console.log(obj.tpye)
    } else if (obj.tpye === 'user') {
      state.currentDiscussion.userDiscussionList[obj.outIndex].discussionList[obj.index].likeImg = require('../images/icon/thumbs_yes.png')
      state.currentDiscussion.userDiscussionList[obj.outIndex].discussionList[obj.index].likeNumber++
      state.currentDiscussion.userDiscussionList[obj.outIndex].discussionList[obj.index].isLiked = true
      // console.log(obj)
    } else {
      state.currentDiscussion.discussionList[obj.index].likeImg = require('../images/icon/thumbs_yes.png')
      state.currentDiscussion.discussionList[obj.index].likeNumber++
      state.currentDiscussion.discussionList[obj.index].isLiked = true
    }
  },
//  点赞乐创编
  [THUMB_CREATE] (state, obj) {
    state.currentCreate.likeImg = require('../images/icon/thumbs_yes.png')
    state.currentCreate.likeNumber++
    state.currentCreate.isLiked = true
  },
//  选择图片，保存图片地址
  [CHOOSE_IMGE] (state, obj) {
    state.currentBook.createObj.chooseImg = obj.chooseImageUrl
  },
// 点击不同的乐创编列表，选择相应的乐创编
  [CHOOSE_CREATE_OBJ] (state, obj) {
    state.currentCreateObj = state.currentBook.createList[obj.index]
  },
//  创建乐创编
  [SUBMIT_CREATE] (state, obj) {
    state.currentBook.createObj.createList.unshift(obj.createObj)
  },
  //  创建乐创编
  [CHOOSE_CREATE] (state, obj) {
    state.currentCreate = state.currentBook.createObj.createList[obj.index]
    // console.log(state.currentCreate)
  },
//  更新勇挑战时间
  [UPDATA_TIMER] (state, obj) {
    state.currentBook.challengTimer++
  }
}
