/**
 * Created by yi.weng on 2017/10/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
Vue.use(Vuex)

const state = {
// 用户信息
  userInfo: {
    '24454565': {
      ID: '24454565',
      userName: '金闪闪',
      password: '666666',
      sex: '1',
      signTotalDay: 1,
      logoImgSrc: require('./../images/乐创编/JINGNAN.png'),
      signature: '我要学习优质的教学资源',
      schoolInfoId: '1',
      classInfoId: '1',
      score: 200,
      rank: 20
    },
    '24454566': {
      ID: '24454566',
      userName: '金悠悠',
      password: '666666',
      sex: 2,
      signTotalDay: 2,
      logoImgSrc: require('./../images/乐创编/JINYOUYOU.png'),
      signature: '我要学习优质的教学资源',
      schoolInfoId: '2',
      classInfoId: '1',
      score: 200,
      rank: 20
    },
    '24454567': {
      ID: '24454567',
      userName: '金闹闹',
      password: '666666',
      sex: 2,
      signTotalDay: 2,
      logoImgSrc: require('./../images/乐创编/JINSHANSHAN.png'),
      signature: '我要学习优质的教学资源',
      schoolInfoId: '2',
      classInfoId: '1',
      score: 20,
      rank: 20
    },
    '24454568': {
      ID: '24454568',
      userName: '李梅',
      password: '666666',
      sex: 3,
      signTotalDay: 30,
      logoImgSrc: require('./../assets/personImg/Avatar photos1.jpg'),
      signature: '我要学习优质的教学资源',
      schoolInfoId: '10',
      classInfoId: '2',
      score: 100,
      rank: 20
    },
    '24454569': {
      ID: '24454569',
      userName: '王大虎',
      password: '666666',
      sex: 1,
      signTotalDay: 20,
      logoImgSrc: require('./../assets/personImg/Avatar photos2.jpg'),
      signature: '我要学习优质的教学资源',
      schoolInfoId: '1',
      classInfoId: '1',
      score: 1000,
      rank: 20
    },
    '24454570': {
      ID: '24454570',
      userName: '张晓雅',
      password: '666666',
      sex: 2,
      signTotalDay: 2,
      logoImgSrc: require('./../assets/personImg/Avatar photos3.jpg'),
      signature: '我要学习优质的教学资源',
      schoolInfoId: '1',
      classInfoId: '1',
      score: 200,
      rank: 20
    },
    '24454571': {
      ID: '24454571',
      userName: '米娅',
      password: '666666',
      sex: 2,
      signTotalDay: 2,
      logoImgSrc: require('./../assets/personImg/Avatar photos4.jpg'),
      signature: '我要学习优质的教学资源',
      schoolInfoId: '1',
      classInfoId: '1',
      score: 200,
      rank: 20
    },
    '24454572': {
      ID: '24454572',
      userName: '艾琳',
      password: '666666',
      sex: 2,
      signTotalDay: 2,
      logoImgSrc: require('./../assets/personImg/Avatar photos5.jpg'),
      signature: '我要学习优质的教学资源',
      schoolInfoId: '1',
      classInfoId: '1',
      score: 200,
      rank: 20
    }
  },
  publicActiveInfo: {
    '24454565': [{
      publicActiveInfoId: '1',
      theme: '我找出像东岳泰山、南岳衡山、西岳华山、北岳恒山、中岳嵩山。这些山都具有中国的特色。',
      detail: '我找出像东岳泰山、南岳衡山、西岳华山、北岳恒山、中岳嵩山。这些山都具有中国的特色。',
      time: '今日 10:20',
      discussInfoId: '1',
      discussNum: '5',
      isThumbs: false,
      goodNums: '1000'
    }, {
      publicActiveInfoId: '2',
      theme: '我找出像一万八千年，几千万年，天每天升高一丈，地每天加厚一丈等等这些数据和数量单位。这些数字与我国的《西游记》里的孙悟空本领很大，一个跟斗十万八千里都很相似。',
      detail: '我找出像一万八千年，几千万年，天每天升高一丈，地每天加厚一丈等等这些数据和数量单位。这些数字与我国的《西游记》里的孙悟空本领很大，一个跟斗十万八千里都很相似。',
      time: '今日 10:20',
      discussInfoId: '2',
      discussNum: '4',
      isThumbs: false,
      goodNums: '990'
    }, {
      publicActiveInfoId: '3',
      theme: '盘古用的斧头开天辟地。斧头是中国民间常用的劳动工具有关。',
      detail: '盘古用的斧头开天辟地。斧头是中国民间常用的劳动工具有关。',
      time: '今日 8:20',
      discussInfoId: '3',
      discussNum: '4',
      isThumbs: false,
      goodNums: '100'
    }
    ],
    '24454566': [{
      publicActiveInfoId: '4',
      theme: '神还化成了河，我最先想到了长江和黄河两条河，因为他们被誉为我们的母亲河。',
      detail: '神还化成了河，我最先想到了长江和黄河两条河，因为他们被誉为我们的母亲河。',
      time: '昨日 10:20',
      discussInfoId: '4',
      discussNum: '5',
      isThumbs: false,
      goodNums: '10'
    }, {
      publicActiveInfoId: '5',
      theme: '我也在想为什么不同地方的原始人都认为原始世界像一个蛋？我猜想是因为大陆漂移的原因。',
      detail: '我也在想为什么不同地方的原始人都认为原始世界像一个蛋？我猜想是因为大陆漂移的原因。',
      time: '11-02 10:20',
      discussInfoId: '5',
      discussNum: '2',
      isThumbs: false,
      goodNums: '60'
    }, {
      publicActiveInfoId: '6',
      theme: '我认为鸡蛋里面黑乎乎的，当时混沌的世界也是黑色的。',
      detail: '我认为鸡蛋里面黑乎乎的，当时混沌的世界也是黑色的。',
      time: '2016-10-30',
      discussInfoId: '6',
      discussNum: '3',
      isThumbs: false,
      goodNums: '70'
    }
    ],
    '24454567': [{
      publicActiveInfoId: '7',
      theme: '我认为有两个原因。一个是世界上所有的星球都是圆的；还有一个是鸡蛋是封闭的，我估计原始人也认为宇宙是永远都走不出去的。所以，他们想到了蛋。',
      detail: '我认为有两个原因。一个是世界上所有的星球都是圆的；还有一个是鸡蛋是封闭的，我估计原始人也认为宇宙是永远都走不出去的。所以，他们想到了蛋。',
      time: '10-02 10:20',
      discussInfoId: '7',
      discussNum: '1',
      isThumbs: false,
      goodNums: '10'
    }
    ],
    '24454568': [{
      publicActiveInfoId: '8',
      theme: '人们往往觉得世界上的很多事情都是很奇妙的，以人类的力量是不能做到的。所以想到了神的魔力。',
      detail: '人们往往觉得世界上的很多事情都是很奇妙的，以人类的力量是不能做到的。所以想到了神的魔力。',
      time: '11-02 00:20',
      discussInfoId: '8',
      discussNum: '1',
      isThumbs: false,
      goodNums: '10'
    }
    ],
    '24454569': [{
      publicActiveInfoId: '9',
      theme: '我觉得盘古之前的世界有花有草，有海洋，有生物。后面宇宙大爆炸了，就变成尘埃了。',
      detail: '我觉得盘古之前的世界有花有草，有海洋，有生物。后面宇宙大爆炸了，就变成尘埃了。',
      time: '11-02 10:20',
      discussInfoId: '9',
      discussNum: '0',
      isThumbs: false,
      goodNums: '10'
    }
    ],
    '24454570': [{
      publicActiveInfoId: '10',
      theme: '不，不，不我认为盘古之前的世界是一只鸟，鸟下了个蛋就把盘古孵化出来了。',
      detail: '不，不，不我认为盘古之前的世界是一只鸟，鸟下了个蛋就把盘古孵化出来了。',
      time: '11-02 10:20',
      discussInfoId: '10',
      discussNum: '0',
      isThumbs: false,
      goodNums: '10'
    }, {
      publicActiveInfoId: '11',
      theme: '哈哈，盘古刚开始在神的肚子里，后面神把盘古生下来了。',
      detail: '哈哈，盘古刚开始在神的肚子里，后面神把盘古生下来了。',
      time: '2016-10-30',
      discussInfoId: '11',
      discussNum: '3',
      isThumbs: false,
      goodNums: '70'
    }, {
      publicActiveInfoId: '12',
      theme: '刚开始，盘古还只是小宝宝，所以想睡觉。',
      detail: '刚开始，盘古还只是小宝宝，所以想睡觉。',
      time: '2016-10-30',
      discussInfoId: '12',
      discussNum: '3',
      isThumbs: false,
      goodNums: '70'
    }
    ]
  },
  discussInfo: {
    '1': [
      {
        userInfoID: '24454566',
        theme: '板凳',
        time: '今日 10:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454567',
        theme: '沙发',
        time: '今日 11:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454565',
        theme: '地板',
        time: '今日 11:22',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454567',
        theme: '抱歉，来晚了',
        time: '今日 12:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454566',
        theme: '抱歉，来晚了',
        time: '今日 13:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      }
    ],
    '2': [
      {
        userInfoID: '24454566',
        theme: '板凳',
        time: '今日 11:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454567',
        theme: '沙发',
        time: '今日 12:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454565',
        theme: '地板',
        time: '今日 12:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454567',
        theme: '抱歉来晚了',
        time: '今日 12:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      }
    ],
    '3': [
      {
        userInfoID: '24454566',
        theme: '支持楼主观点',
        time: '今日 13:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454567',
        theme: '板凳？',
        time: '今日 14:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454565',
        theme: '沙发',
        time: '今日 15:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454567',
        theme: '地板',
        time: '今日 15:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      }
    ],
    '4': [
      {
        userInfoID: '24454566',
        theme: '板凳',
        time: '今日 11:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454567',
        theme: '沙发',
        time: '今日 12:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454565',
        theme: '地板',
        time: '今日 14:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454567',
        theme: '支持楼主观点',
        time: '今日 18:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454566',
        theme: '哈哈哈，不错',
        time: '今日 20:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      }
    ],
    '5': [
      {
        userInfoID: '24454566',
        theme: '沙发',
        time: '今日 19:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454567',
        theme: '板凳',
        time: '今日 19:21',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      }
    ],
    '6': [
      {
        userInfoID: '24454566',
        theme: '沙发',
        time: '今日 19:22',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454567',
        theme: '板凳',
        time: '今日 19:23',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454565',
        theme: '地板',
        time: '今日 19:24',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      }
    ],
    '7': [
      {
        userInfoID: '24454565',
        theme: '地板',
        time: '今日 19:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      }
    ],
    '8': [
      {
        userInfoID: '24454565',
        theme: '地板',
        time: '今日 22:20',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      }
    ],
    '9': [
    ],
    '10': [
    ],
    '11': [
      {
        userInfoID: '24454566',
        theme: '沙发',
        time: '今日 19:22',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454567',
        theme: '板凳',
        time: '今日 19:23',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454565',
        theme: '地板',
        time: '今日 19:24',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      }
    ],
    '12': [
      {
        userInfoID: '24454566',
        theme: '沙发',
        time: '今日 19:22',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454567',
        theme: '板凳',
        time: '今日 19:23',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      },
      {
        userInfoID: '24454570',
        theme: '地板',
        time: '今日 19:24',
        discussNum: '0',
        isThumbs: false,
        goodNums: '10'
      }
    ]
  },
  schoolInfo: {
    '1': '深圳南山小学四年A班',
    '2': '深圳南山第二小学',
    '3': '深圳南山第三小学',
    '4': '深圳南山第四小学',
    '5': '深圳南山第五小学',
    '6': '深圳南山第六小学',
    '7': '深圳南山第七小学',
    '8': '深圳南山第八小学',
    '9': '深圳南山第九小学',
    '10': '深圳南山第十小学'
  },
  classInfo: {
    '1': '一年级一班',
    '2': '一年级二班',
    '3': '一年级三班',
    '4': '二年级一班',
    '5': '二年级二班',
    '6': '二年级三班',
    '7': '三年级一班',
    '8': '三年级二班',
    '9': '三年级三班',
    '10': '四年级一班'
  },
  sexInfo: {
    '1': '男',
    '2': '女',
    '3': '保密'
  },
  // 路游回退值
  routerBackSteep: -1,
  // 点击显示的书本
  currentBook: {},
  // 读群文当前的文章
  currentArticle: {},
  // 当前闯关的信息
  currenTopic: {},
  // 当前的议题
  currentDiscussion: {},
  // 当前创乐编详情
  currentCreate: {},
  //  探议题
  swichList: [{swich: true}, {swich: false}, {swich: false}],
  // 读群文
  isKeepEye: false, // 是否为护眼模式
  isShowResult: false,  // 显示答题的结果界面
  // 当前显示的图片
  currentCreateObj: {},
//  信息列表
  messageList: [{
    origin: '群文悦读',
    content: '嗨，137****9159，新学期到啦！你现在在哪里读书呢？',
    headerImg: require('../images/乐创编/JINYOUYOU.png'),
    timer: '10:00'
  }, {
    origin: '群文悦读',
    content: '欢迎来到群文悦读，请尽快完善您的个人资料，以便我们欢迎来到群文悦读，请尽快完善您的个人资料，以便我们',
    headerImg: require('../images/乐创编/JINYOUYOU.png'),
    timer: '12:00'
  }, {
    origin: '群文悦读',
    content: '恭喜您！成为读书小达人，如果你觉得这个软件好，可以推荐小伙伴使用。',
    headerImg: require('../images/乐创编/JINYOUYOU.png'),
    timer: '13:00'
  }, {
    origin: '群文悦读',
    content: '王梓*小朋友，这个月您成功晋级到本月第一名，再接再厉哦。',
    headerImg: require('../images/乐创编/JINYOUYOU.png'),
    timer: '21:00'
  }, {
    origin: '群文悦读',
    content: '王梓*小朋友，您本班的李*同学关注了您！',
    headerImg: require('../images/乐创编/JINYOUYOU.png'),
    timer: '22:00'
  }],
//  唱响古今
  poemObj: {
    poemList: [
      {
        date: '1',
        currentTime: 0,
        duration: 0,
        backgroundUrl: require('../images/bg.png'),
        mp3Url: require('../assets/music/read01.mp3'),
        mp3Url2: require('../assets/music/read001.mp3'),
        title: {title: '绝句', active: false, startTime: 0, endTime: 0},
        author: {author: '(唐)杜甫', active: false, startTime: 0, endTime: 0},
        content: [
          {sentence: {sentence: '两个黄鹂鸣翠柳，', active: false, startTime: 44, endTime: 49.5}},
          {sentence: {sentence: '一行白鹭上青天。', active: false, startTime: 49.5, endTime: 54}},
          {sentence: {sentence: '窗含西岭千秋雪，', active: false, startTime: 54, endTime: 60}},
          {sentence: {sentence: '门泊东吴万里船。', active: false, startTime: 60, endTime: 67}}
        ]
      }, {
        date: '2',
        currentTime: 0,
        duration: 0,
        backgroundUrl: require('../images/bg.png'),
        mp3Url: require('../assets/music/read02.mp3'),
        mp3Url2: require('../assets/music/read002.mp3'),
        title: {title: '咏柳', active: false, startTime: 0, endTime: 0},
        author: {author: '(唐)贺知章', active: false, startTime: 0, endTime: 0},
        content: [
          {sentence: {sentence: '碧玉妆成一树高，', active: false, startTime: 44, endTime: 49.5}},
          {sentence: {sentence: '万条垂下绿丝绦。', active: false, startTime: 49.5, endTime: 54}},
          {sentence: {sentence: '不知细叶谁裁出，', active: false, startTime: 54, endTime: 60}},
          {sentence: {sentence: '二月春风似剪刀。', active: false, startTime: 60, endTime: 67}}
        ]
      }
    ]},
  // 当前显示的诗词
  currentPoemObj: {},
  // 轮播图
  carouselImgList: [{
    imgUrl: require('../images/home/banner_0001.png')
  }, {
    imgUrl: require('../images/home/banner_0002.png' +
      '')
  }, {
    imgUrl: require('../images/home/banner_0003.png')
  }],
  /*
   //目录
   */
  catalogueListes: [ {
    text: '第一单元',
    active: true
  }, {
    text: '第二单元',
    active: false
  }, {
    text: '第三单元',
    active: false
  }, {
    text: '第四单元',
    active: false
  }, {
    text: '第五单元',
    active: false
  }, {
    text: '第六单元',
    active: false
  }, {
    text: '第七单元',
    active: false
  }, {
    text: '第八单元',
    active: false
  }],
  // 首页图书列表
  bookList: [{
    /* ======================================第一本书============================================ */
    bookID: '1',
    bookName: '创世神话里的秘密',
    bookImg: require('../images/home/picture1.jpg'),
    bookContent: '',
    bookIntroduce: '&emsp;&emsp;天地是怎样形成的？大自然的一切是从哪里来的？为什么会有日月出没、电闪雷鸣？古人们一直在思考着这些问题。由于科学不发达，他们便以为这一切是神在支配，于是神话故事就出现了。神话最初是口头流传的，古人们用自己丰富的想象创造了一个又一个神话故事来解释世界的形成、人类的起源。',
    bookTheme: '&emsp;&emsp;神话是人类最早的故事。神话起源于人类的童年时期。在原始社会，先民对许多自然和社会现象无法理解，认为是某种无形的神秘力量所致。神话故事源远流长，每个民族都有自己的神和神话故事。',
    bookGarde: 9.4, // 评分
    evaluationNumber: 1025, // 评分
    releaseTime: '今日10:20', // 发布时间
    lookedNumber: 5268, // 参与人数
    lookedProgress: 90,
    isCollect: false,
    collectText: '+收藏',
    // 读群文状态
    readArticleStye: 0,
    // 读群文列表
    articleList: [{
      id: 1,
      titel: '盘古开天辟地',
      imag: '',
      article: '<h1>盘古开天辟地</h1>' +
      '&emsp;&emsp;传说在很久很久以前，天和地还没有分开，整个宇宙混沌一团，像个大鸡蛋。就在大鸡蛋的内部，有个叫盘古的大神，昏睡了一万八千年。' +
      '<br>&emsp;&emsp;一天，大神醒来，睁眼一看，周围黑乎乎一片，什么也看不见。他一使劲翻身坐了起来，只听“咔嚓”一声，“大鸡蛋”裂开了一条缝，一丝微光透了进来。大神见身边有一把板斧，一把凿子，他便随手拿来，左手持凿，右手握斧，对着眼前的黑暗混沌，一阵猛劈猛凿。只见巨石崩裂，“大鸡蛋”破碎了。轻而清的东西冉冉上升，变成了天；重而浊的东西慢慢下沉，变成了地。' +
      '<br>&emsp;&emsp;天和地分开后，盘古就头顶天，脚踏地，站在天地之间，随着它们的变化而变化。' +
      '<br>&emsp;&emsp;天每天升高一丈，地每天加厚一丈，盘古的身体也跟着长高。这样又经过了一万八千年，天升得极高了，地变得极厚了，盘古的身体也长得极长了。这个巍峨的巨人，就像根长柱子似的，撑在天和地之间，不让它们重新合拢。' +
      '<br>&emsp;&emsp;几千万年过去了，天不再升高，地不再加厚，而盘古也精疲力竭。他知道天地再也不会合拢，就含着微笑倒下了。' +
      '<br>&emsp;&emsp;盘古临死前，他嘴里呼出的气变成了春风和天空的云雾；声音变成了天空的雷霆；左眼变成太阳，照耀大地；右眼变成皓洁的月亮，给夜晚带来光明；千万缕头发变成无数颗星星，点缀美丽的夜空；鲜血变成江河湖海，奔腾不息；肌肉变成千里沃野，供万物生存；骨骼变成树木花草，供人们欣赏；筋脉变成道路，供人们行走；牙齿变成石头和金属，供人们使用；精髓变成明亮的珍珠，供人们收藏；汗水变成雨露，滋润禾苗。盘古倒下时，他的头化作东岳泰山，他的脚化作了西岳华山，他的左臂化作了南岳衡山，他的右臂化作了北岳恒山，他的腹部化作了中岳嵩山。传说盘古的精灵魂魄也在他死后变成了人类，所以都说人类是世上的万物之灵。就这样，盘古以他的神力和身躯，开辟了天地，化生出世间万物。'
    }, {
      id: 2,
      titel: '淤能棋吕岛',
      imag: '',
      article: '<h1>淤能棋吕岛</h1>' +
      '&emsp;&emsp;伊奘诺尊和伊奘冉尊诞生后就一直生活在高高的天上，但是天上太清静了，他们常常感到无聊。' +
      '<br>&emsp;&emsp;一天，伊奘诺尊和伊奘冉尊闲逛到天浮桥上。这座浮桥横卧在天海之间，上面是渺渺的天国，下面是茫茫的大海。' +
      '<br>&emsp;&emsp;走着走着，二神突发奇想，商量说：“我们何不在这波涛汹涌的大海上创造一片属于我们自己的乐土呢?”' +
      '<br>&emsp;&emsp;说干就干，伊奘诺尊和伊奘冉尊一起握住一支镶着美玉的长矛，齐心协力向大海扎去，扎到底后又猛力往上一提。说时迟那时快，只见一股巨大的水柱冲天而起，而后又奇迹般地朝下倒灌，海水中的沉积物慢慢地凝聚、堆积。顷刻间，无边无际的大海中矗立起一座岛屿，这就是淤能棋吕岛。' +
      '<br>&emsp;&emsp;伊奘诺尊和伊奘冉尊从天浮桥跳到淤能棋吕岛上，兴奋地打量着眼前的一切。为了纪念这神圣无比的创造，他们在岛上竖起了一根圆柱形巨石，取名为“天之御柱”。'
    }, {
      id: 3,
      titel: '冰雪巨人--伊密尔',
      imag: '',
      article: '<h1>冰雪巨人--伊密尔</h1>' +
      '&emsp;&emsp;最早的时候，没有天，也没有地，没有海，也没有空气。整个世界只存在冷和热两个地方。冷是冰雪，热是火焰，中间隔着一条又宽又深的大裂缝。如果冷热相遇，就会发出“嚓嚓”的巨响，使那些冰山受热熔化。升起的水汽凝结成为寒霜，越积越多，填满了广阔无边的天空。久而久之，一个巨大无比的人从冰雪与火焰的撞击中诞生了，它就是伊密尔。几乎和伊密尔同时出生的，还有一头叫作乌特赫姆拉的大母牛，它喷出许多牛奶供伊密尔食用。母牛不吃草，却吃冰块，冰山慢慢被它吃掉不少，渐渐露出一个巨人，他就是被冰层掩盖的神的祖先蒲利。这时伊密尔正在睡觉，蒲利的孙子奥丁就把冰雪巨人伊密尔杀死了。“众神之王”奥丁就将巨人伊密尔的身体制造成世界：头做天，肉做地，骨做山，牙齿做岩石，血汗变成海洋，头发变成村木百草，脑浆变成浮云；他又命令名叫东、南、西、北的四个小矮人立在大地的四角，各人用肩膀扛住天；又取来火团布满在天空上，成为耀眼的星星。其中最大的火团就是太阳和月亮。这样，天地万物就造出来了。'
    }, {
      id: 4,
      titel: '梵天创世',
      imag: '',
      article: '<h1>梵天创世</h1>' +
      '&emsp;&emsp;很久以前，世界上还没有太阳，没有月亮，也没有星星，只是一片汪洋大海。' +
      '<br>&emsp;&emsp;有一天，一粒种子落到水里，渐渐地变成一粒金色的圆蛋。它年复一年、日复一日地在水上漂浮着。' +
      '<br>&emsp;&emsp;突然有一天，这金蛋裂开了，万物的始神大梵天从中一跃而出。他长着四条长长的胳膊，四只巨大的手，四张黄黑色的脸，分别朝着东南西二比四个方向。' +
      '<br>&emsp;&emsp;大梵天一举手，把金蛋的上半部分往上推了一万八千里，天堂产生了；又一跺脚，把金蛋的下半部分往下压了二万五千里，变成了辽阔宽厚的土地；中间则形成了蔚蓝的天空。' +
      '<br>&emsp;&emsp;做完这些事后，大梵天很满足地躺在自己创造出来的大地上睡着了。也不知睡了多少年，大梵天醒了。他伸了伸腰，决定四处走走。他走走停停，停停走走，发现这世界除了他，就只有水。大梵天心想：“这世界也太冷清、太凄凉了，难道我就天天与水为伴吗？不，我要创造，我要让这片土地到处都有‘我’的存在。”' +
      '<br>&emsp;&emsp;想到这里，大梵天便开始施展神的威力。他用自己的身体化成了生活在这片土地上的人民。他的头化成了神官，胳膊化成了皇帝和贵族，躯干化成了平民，心化成了人的愤怒、欢乐、忏悔……'
    }, {
      id: 5,
      titel: '阿胡拉•马兹达创世',
      imag: '',
      article: '<h1>阿胡拉•马兹达创世</h1>' +
      '&emsp;&emsp;在最初的时候，整个世界由光明和黑暗组成。而光明由善神阿胡拉•马兹达掌管，黑暗由恶神安哥拉掌管。' +
      '<br>&emsp;&emsp;善神阿胡拉•玛兹达用金刚石创造了一个光辉夺目的宇宙。那是一个椭圆形的物体，像一个大鸟蛋。卵黄就是大地，卵壳就是天空，中间却是一片虚空。' +
      '<br>&emsp;&emsp;一直以来，善神阿胡拉•玛兹达和恶神安哥拉掌管相安无事，互相没有争斗。这样的时间持续了三千年。也在这段时间，善神阿胡拉•玛兹达创造了原牛和原人。' +
      '<br>&emsp;&emsp;但在第二个三千年开始时，恶神安哥拉向光明世界发起了进攻。善神阿胡拉•玛兹达能预知未来，他知道这场光明与黑暗的战争将持续一万两千年，而结果是黑暗世界最终会消失。' +
      '<br>&emsp;&emsp;随着岁月的流逝，这场战争结束的时间终于到了。恶神安哥拉感觉到自己的神力在慢慢消失，他惊慌失措。在自己的身体就快要瘫痪之前，安哥拉创造出各种毒蛇和害虫，向善神阿胡拉•玛兹达发起了最后的挑战。这些毒物咬死了善神阿胡拉•玛兹达创造的原牛。' +
      '<br>&emsp;&emsp;牛死之后，眼睛变成了日月，毛皮变成了群星，尾巴化成了谷物，骨头化成了山，血液化成了大海，眼泪变成了河……一个完整的宇宙得以构成。'
    }],
    // 闯关状态
    topicStype: 0,
    // 创关时间
    topicTimer: 0,
    // 错题列表
    wrongTopicList: [],
    // 勇挑战时间
    challengTimer: 0,
    // 闯关列表
    topicList: [{
      id: 1,
      titel: '盘古临死前右眼变成了_________。',
      number: '第一关',
      origin: '',
      isAnswered: false,
      analyze: '金箍棒是很重的',
      rightAnwser: '月亮',
      options: [
        {option: 'A', optionDetails: '星星', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '太阳', standardAnswer: false, result: false},
        {option: 'C', optionDetails: '月亮', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '天空', standardAnswer: false, result: false}]
    }, {
      id: 2,
      titel: '盘古用什么东西开天辟地的？',
      number: '第二关',
      origin: '来自西游记2',
      isAnswered: false,
      analyze: '金箍棒是很重的',
      rightAnwser: '板斧，凿子',
      options: [
        {option: 'A', optionDetails: '板斧，凿子', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '锯子', standardAnswer: false, result: false},
        {option: 'C', optionDetails: '大刀', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '宝剑', standardAnswer: false, result: false}]
    }, {
      id: 3,
      titel: '伊奘诺尊和伊奘冉尊在天浮桥上用 ________ 创造了淤能棋吕岛。',
      number: '第三关',
      origin: '来自西游记3',
      isAnswered: false,
      analyze: '金箍棒是很重的',
      rightAnwser: '长矛',
      options: [
        {option: 'A', optionDetails: '沉积物', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '水柱', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 巨石', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '长矛', standardAnswer: true, result: false}]
    }, {
      id: 4,
      titel: '伊奘诺尊和伊奘冉尊在岛上竖起圆柱形巨石的名字是什么？',
      number: '第四关',
      origin: '来自西游记3',
      isAnswered: false,
      analyze: '金箍棒是很重的',
      rightAnwser: '天之御柱',
      options: [
        {option: 'A', optionDetails: '天涯海角', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '天之御柱', standardAnswer: true, result: false},
        {option: 'C', optionDetails: ' 巨石阵', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '八音石', standardAnswer: false, result: false}]
    }, {
      id: 5,
      titel: '万物的始神梵天从________ 诞生。',
      number: '第五关',
      origin: '来自西游记3',
      isAnswered: false,
      analyze: '金箍棒是很重的',
      rightAnwser: '金蛋',
      options: [
        {option: 'A', optionDetails: '大海', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '树木', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 金蛋', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '大地', standardAnswer: false, result: false}]
    }, {
      id: 6,
      titel: '在《阿古拉•马兰创世》神话中__________ 幻化了天地万物。',
      number: '第六关',
      origin: '来自西游记3',
      isAnswered: false,
      analyze: '金箍棒是很重的',
      rightAnwser: '原牛',
      options: [
        {option: 'A', optionDetails: '安哥拉', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '马兹达', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 原牛', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '害虫', standardAnswer: false, result: false}]
    }, {
      id: 7,
      titel: '以下哪个选项的说法错误？',
      number: '第七关',
      origin: '来自西游记3',
      isAnswered: false,
      analyze: '金箍棒是很重的',
      rightAnwser: '善神和恶神互相争斗持续了6千年',
      options: [
        {option: 'A', optionDetails: '善神阿胡拉•马兹达掌管光明。', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '恶神安哥拉掌管黑暗。', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 善神和恶神互相争斗持续了6千年。', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '原牛死后变成了自然界。', standardAnswer: false, result: false}]
    }, {
      id: 8,
      titel: '以下哪篇文章没有提到身体变成万事万物？',
      number: '第八关',
      origin: '来自西游记3',
      isAnswered: false,
      analyze: '金箍棒是很重的',
      rightAnwser: '《淤能棋吕岛》',
      options: [
        {option: 'A', optionDetails: '《盘古开天辟地》', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '《淤能棋吕岛》', standardAnswer: true, result: false},
        {option: 'C', optionDetails: ' 《梵天创世》', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '《阿胡拉. 马兹达创世》', standardAnswer: false, result: false}]
    }, {
      id: 9,
      titel: '《盘古开天辟地》是哪个国家的神话？',
      number: '第九关',
      origin: '来自西游记3',
      isAnswered: false,
      analyze: '金箍棒是很重的',
      rightAnwser: '中国',
      options: [
        {option: 'A', optionDetails: '印度', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '日本', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 冰岛', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '中国', standardAnswer: true, result: false}]
    }, {
      id: 10,
      titel: '这四篇文章中哪一篇文章没有提到神是由蛋变化而成的？',
      number: '第十关',
      origin: '来自西游记3',
      isAnswered: false,
      analyze: '金箍棒是很重的',
      rightAnwser: '《冰雪巨人——伊密尔》',
      options: [
        {option: 'A', optionDetails: '《盘古开天辟地》', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '《冰雪巨人——伊密尔》', standardAnswer: true, result: false},
        {option: 'C', optionDetails: ' 《梵天创世》', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '《阿胡拉•马兹达创世》', standardAnswer: false, result: false}]
    }],
    //  排行榜
    topList: [
      {imgUrl: require('../images/乐创编/JINSHANSHAN.png'), title: '金闪闪', describe: '深圳南山实验小学五年级（2）班', score: '100', usedTime: '03：05'},
      {imgUrl: require('../images/乐创编/JINYOUYOU.png'), title: '金悠悠', describe: '深圳南山实验小学五年级（3）班', score: '90', usedTime: '04：10'},
      {imgUrl: require('../images/乐创编/JINGNAN.png'), title: '金娜娜', describe: '深圳宝安实验小学五年级（1）班', score: '80', usedTime: '02：55'},
      {imgUrl: require('../images/乐创编/JINGGANGAN.png'), title: '金敢敢', describe: '深圳坪洲小学五年级（1）班', score: '80', usedTime: '03：50'},
      {imgUrl: require('../images/乐创编/JINSHANSHAN.png'), title: '艾莉丝', describe: '深圳天骄小学五年级（4）班', score: '70', usedTime: '05：40'}],
    // 探议题状态
    discussionStype: 0,
    // 用户提议隐藏显示状态
    showUserDiscussion: false,
    //  探议题
    discussionMeun: [{
      act: '1',
      content: '&emsp;&emsp;在《盘古开天辟地》这篇神话中，你找出什么中国元素？如果说，各个国家都有自己的民族元素、民族特色，你赞同这样的观点吗？你认为其中的原因是什么？',
      discussionList: [
        {
          headerImg: require('../images/乐创编/JINSHANSHAN.png'),
          name: '金闪闪',
          time: '11-5  10:21',
          likeNumber: 120,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          isLiked: false,
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '我找出像东岳泰山、南岳衡山、西岳华山、北岳恒山、中岳嵩山。这些山都具有中国的特色。'
        }, {
          headerImg: require('../images/乐创编/JINYOUYOU.png'),
          name: '金悠悠',
          time: '11-5  10:21',
          likeNumber: 120,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          isLiked: false,
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '我找出像一万八千年，几千万年，天每天升高一丈，地每天加厚一丈等等这些数据和数量单位。这些数字与我国的《西游记》里的孙悟空本领很大，一个跟斗十万八千里都很相似。'
        }, {
          headerImg: require('../images/乐创编/JINGNAN.png'),
          name: '金娜娜',
          time: '11-5  10:21',
          likeNumber: 120,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          isLiked: false,
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '盘古用的斧头开天辟地。斧头是中国民间常用的劳动工具有关。'
        }, {
          headerImg: require('../images/乐创编/JINYOUYOU.png'),
          name: '艾米',
          time: '11-5  10:21',
          likeNumber: 120,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          isLiked: false,
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '神还化成了河，我最先想到了长江和黄河两条河，因为他们被誉为我们的母亲河。'
        }
      ]
    }, {
      act: '2',
      content: '&emsp;&emsp;《盘古开天辟地》《梵天创世》《阿胡拉•马兹达创世》这三篇文章是不同民族和国家的神话故事，这些民族或国家的古人相隔千山万水，相互之间几乎不可能有联系',
      discussionList: [
        {
          headerImg: require('../images/乐创编/fangxiozhi.png'),
          name: '方小直',
          time: '11-5  10:21',
          likeNumber: 120,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          isLiked: false,
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '我也在想为什么不同地方的原始人都认为原始世界像一个蛋？我猜想是因为大陆漂移的原因。'
        }, {
          headerImg: require('../images/乐创编/fangzhi.png'),
          name: '艾莉丝',
          time: '11-5  10:21',
          likeNumber: 120,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          isLiked: false,
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '我认为鸡蛋里面黑乎乎的，当时混沌的世界也是黑色的。'
        }, {
          headerImg: require('../images/乐创编/JINYOUYOU.png'),
          name: '罗伯特',
          time: '11-5  10:21',
          likeNumber: 120,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          isLiked: false,
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '我认为有两个原因。一个是世界上所有的星球都是圆的；还有一个是鸡蛋是封闭的，我估计原始人也认为宇宙是永远都走不出去的。所以，他们想到了蛋。'
        }, {
          headerImg: require('../images/乐创编/JINSHANSHAN.png'),
          name: '杰克',
          time: '11-5  10:21',
          likeNumber: 120,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          isLiked: false,
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '人们往往觉得世界上的很多事情都是很奇妙的，以人类的力量是不能做到的。所以想到了神的魔力。'
        }
      ]
    }, {
      userDiscussionList: [{
        source: false,
        userName: '方大直',
        timer: '10:30',
        isSelf: true, // 是否是本条
        isFixationHight: true, // 多余两条时显示两条
        content: '&emsp;&emsp;《盘古开天辟地》《梵天创世》《阿胡拉•马兹达创世》这三篇文章是不同民族和国家的神话故事，这些民族或国家的古人相隔千山万水，相互之间几乎不可能有联系，为什么在神话中会有这么多相似的认识？大家可以大胆地推测一下。',
        discussionList: [
          {
            headerImg: require('../images/乐创编/fangxiozhi.png'),
            name: '方小直',
            time: '11-5  10:21',
            likeNumber: 120,
            secDisNum: 5,
            secDisNumImg: require('../images/icon/Chat.png'),
            isLiked: false,
            likeImg: require('../images/icon/thumbs.png'),
            discuss: '我也在想为什么不同地方的原始人都认为原始世界像一个蛋？我猜想是因为大陆漂移的原因。'
          }, {
            headerImg: require('../images/乐创编/fangzhi.png'),
            name: '艾莉丝',
            time: '11-5  10:21',
            likeNumber: 120,
            secDisNum: 5,
            secDisNumImg: require('../images/icon/Chat.png'),
            isLiked: false,
            likeImg: require('../images/icon/thumbs.png'),
            discuss: '我认为鸡蛋里面黑乎乎的，当时混沌的世界也是黑色的。'
          }, {
            headerImg: require('../images/乐创编/JINSHANSHAN.png'),
            name: '罗伯特',
            time: '11-5  10:21',
            likeNumber: 120,
            secDisNum: 5,
            secDisNumImg: require('../images/icon/Chat.png'),
            isLiked: false,
            likeImg: require('../images/icon/thumbs.png'),
            discuss: '我认为有两个原因。一个是世界上所有的星球都是圆的；还有一个是鸡蛋是封闭的，我估计原始人也认为宇宙是永远都走不出去的。所以，他们想到了蛋。'
          }, {
            headerImg: require('../images/乐创编/JINYOUYOU.png'),
            name: '杰克',
            time: '11-5  10:21',
            likeNumber: 120,
            secDisNum: 5,
            secDisNumImg: require('../images/icon/Chat.png'),
            isLiked: false,
            isInputContent: false,
            likeImg: require('../images/icon/thumbs.png'),
            discuss: '人们往往觉得世界上的很多事情都是很奇妙的，以人类的力量是不能做到的。所以想到了神的魔力。'
          }
        ]
      }],
      act: '3'
    }],
  //  乐创编
    createObj: {
      recommendImg: require('../images/home/thought01.png'),
      recommendBgImg: require('../images/bg.png'),
      discuss: '创世神话里的秘密',
      chooseImg: '',
      createList: []
      //  {
      //  discuss: '创世神话里的秘密',
      //  name: '杰克',
      //  time: '11-5  10:21',
      //  CompleteNumber: 100,
      //  likeNumber: 120,
      //   isLiked: false
      //  likeImg: require('../images/icon/thumbs.png'),
      //  headerImg: require('../images/home/picture1.jpg'),
      //  recommendImg: require('../images/home/thought01.png'),
      //  recommendBgImg: require('../images/bg.png'),
      //  discussionList: []
      // }, {
      //  discuss: '创世神话里的秘密',
      //  name: '杰克',
      //  time: '11-5  10:21',
      //  CompleteNumber: 100,
      //  likeNumber: 120,
      //   isLiked: false
      //  likeImg: require('../images/icon/thumbs.png'),
      //  headerImg: require('../images/home/picture1.jpg'),
      //  recommendImg: require('../images/home/thought01.png'),
      //  recommendBgImg: require('../images/bg.png'),
      //  discussionList: []
      // }
      // ]
    }
  }, {
    /* ======================================第二本书============================================ */
    bookID: '2',
    bookName: '有点特别的“叙事诗”',
    bookImg: require('../images/home/picture2.jpg'),
    bookContent: '',
    bookIntroduce: '&emsp;&emsp;在很多人眼里诗歌是跳跃的，诗歌主要是用来抒情。但是很多诗歌，它完整地讲了一个故事，不讲究对仗，也不讲究押韵。如果不分行，把诗句串联起来，就像一篇小小说。这样的诗歌，共有一个名字——叙事诗。',
    bookTheme: '&emsp;&emsp;在很多人眼里诗歌是跳跃的，诗歌主要是用来抒情。但是很多诗歌，它完整地讲了一个故事，不讲究对仗，也不讲究押韵。如果不分行，把诗句串联起来，就像一篇小小说。这样的诗歌，共有一个名字——叙事诗。',
    bookGarde: 9.0, // 评分
    evaluationNumber: 1380, // 评分
    releaseTime: '今日11:20', // 发布时间
    lookedNumber: 3283, // 参与人数
    lookedProgress: 68,
    isCollect: false,
    collectText: '+收藏',
    // 读群文状态
    readArticleStye: 0,
    // 读群文列表
    articleList: [{
      id: 1,
      titel: '空罐子',
      imag: '',
      article: '<h1>空罐子</h1>' +
      '<h2>佚名</h2>' +
      '<span>生气的时候把罐子砰</span>' +
      '<span>砰</span>' +
      '<span>用脚踢一下是多么爽快的事</span>' +
      '<span>被脚尖踢到的罐子就滚来滚去</span>' +
      '<span>高兴地滚动</span>' +
      '<span>我的心就不知不觉</span>' +
      '<span>慢慢地，慢慢地火气就平息</span>' +
      '<span>但是今天却不是如此</span>' +
      '<span>被朋友排挤之后回家的路上</span>' +
      '<span>无力地叩一声</span>' +
      '<span>踢罐子反而更让我的心情闷闷不乐</span>' +
      '<span>是谁在里面放了小石头</span>' +
      '<span>发出咯啦咯啦的声音</span>' +
      '<span>那个声音在我心中</span>' +
      '<span>发出更大的回响声</span>'
    }, {
      id: 2,
      titel: '南山大侠 ',
      imag: '',
      article: '<h1>南山大侠</h1>' +
      '<h2>渡也</h2>' +
      '<span>今天下午小强来找我出去打仗</span>' +
      '<span>他左腰插着一根破竹棒</span>' +
      '<span>妈妈站在门口告诉他：</span>' +
      '<span>“我们家的阿明生病了，</span>' +
      '<span>改天再来玩好不好？”</span>' +
      '<span>小强说吃了他的仙丹</span>' +
      '<span>病马上就会好的</span>' +
      '<span>还从口袋里摸出两粒</span>' +
      '<span>脏兮兮的健素糖</span>' +
      '<span>很正经地说：</span>' +
      '<span>“是要给贵府的南山大侠吃的。”</span>' +
      '<span>妈妈听了</span>' +
      '<span>捧腹大笑起来</span>' +
      '<span>小强就很生气</span>' +
      '<span>头也不回地走了</span>'
    }, {
      id: 3,
      titel: '融化的雪',
      imag: '',
      article: '<h1>融化的雪</h1>' +
      '<h2>【韩】尹硕中  佚名/译</h2>' +
      '<span>阿顺的家</span>' +
      '<span>阿明的家</span>' +
      '<span>两个家是面对面的</span>' +
      '<br>' +
      '<span>下雪的早上</span>' +
      '<span>阿顺走出来</span>' +
      '<span>把雪全部扫到</span>' +
      '<span>阿明的家门口</span>' +
      '<span>阿明出来看到后</span>' +
      '<span>因为火冒三丈</span>' +
      '<span>便把自己家门口的雪集合起来</span>' +
      '<span>全部又用扫把推到</span>' +
      '<span>阿顺家门口</span>' +
      '<span>这样来回几次</span>' +
      '<span>“阿明，你是来真的哦？”</span>' +
      '<span>“阿顺，你是来真的哦？”</span>' +
      '<br>' +
      '<span>两人最后相互挑衅打来打去</span>' +
      '<span>可是到了学校的时间</span>' +
      '<span>所以只好延后</span>' +
      '<span>“晚一点你走着瞧…….”</span>' +
      '<span>“晚一点你走着瞧…….”</span>' +
      '<br>' +
      '<span>下课后放学回家才发现</span>' +
      '<span>因为太阳已经把雪融掉</span>' +
      '<span>所以就想要继续吵架</span>' +
      '<span>已经没有理由了</span>'
    }, {
      id: 4,
      titel: '野蔷薇',
      imag: '',
      article: '<h1>野蔷薇</h1>' +
      '<h2>【德】 歌德  佚名/译</h2>' +
      '<span>少年看到一朵蔷薇，</span>' +
      '<span>荒野上的小蔷薇，</span>' +
      '<span>那样娇嫩而鲜艳，</span>' +
      '<span>急急忙忙走向前，</span>' +
      '<span>看得非常欣喜。</span>' +
      '<span>蔷薇，蔷薇，红蔷薇，</span>' +
      '<span>荒野的小蔷薇。</span>' +
      '<br>' +
      '<span>少年说：“我要采你，</span>' +
      '<span>荒野的小蔷薇！”</span>' +
      '<span>蔷薇说：“我要刺你，</span>' +
      '<span>让你永不会忘记，</span>' +
      '<span>我不愿被你采折。”</span>' +
      '<span>蔷薇，蔷薇，红蔷薇，</span>' +
      '<span>荒野的小蔷薇。</span>' +
      '<br>' +
      '<span>野蛮少年去采她，</span>' +
      '<span>荒野的小蔷薇；</span>' +
      '<span>蔷薇自卫去刺他，</span>' +
      '<span>她徒然含悲忍泪，</span>' +
      '<span>还是遭到采折。</span>' +
      '<span>蔷薇，蔷薇，红蔷薇，</span>' +
      '<span>荒野的小蔷薇。</span>'
    }, {
      id: 5,
      titel: '性急的弟弟 ',
      imag: '',
      article: '<h1>性急的弟弟 </h1>' +
      '<h2>雁翼</h2>' +
      '<span>弟弟从爷爷家里，</span>' +
      '<span>带回了一包落花生。</span>' +
      '<span>选了几颗肥胖的仁儿，</span>' +
      '<span>在院里扒开了土，下了种。</span>' +
      '<span>他盼望落花生发芽、生长，</span>' +
      '<span>不要让爷爷的希望落空。</span>' +
      '<span>为防备鸡鸭捣乱，</span>' +
      '<span>还特地罩上竹笼。</span>' +
      '<span>鸡鸭是防住了，却没有防住</span>' +
      '<span>他发痒的手，</span>' +
      '<span>早晨起来扒开土看看，</span>' +
      '<span>仿佛担心仁儿还没有睡醒；</span>' +
      '<span>放学回家又扒开了土，</span>' +
      '<span>仔细观察仁儿的动静。</span>' +
      '<span>就这样，他一天扒开三遍，</span>' +
      '<span>总不见芽儿萌生。</span>' +
      '<span>是弟弟性急的爱，吓得仁儿</span>' +
      '<span>躲在红帐里面不敢动。</span>'
    }],
    // 闯关状态
    topicStype: 0,
    // 创关时间
    topicTimer: 0,
    // 错题列表
    wrongTopicList: [],
    // 勇挑战时间
    challengTimer: 0,
    // 闯关列表
    topicList: [{
      id: 1,
      titel: '这个议题一共有几篇文章？',
      number: '第一关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '5篇',
      options: [
        {option: 'A', optionDetails: '5篇', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '4篇', standardAnswer: false, result: false},
        {option: 'C', optionDetails: '3篇', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '2篇', standardAnswer: false, result: false}]
    }, {
      id: 2,
      titel: '小强的左腰插着的是什么？',
      number: '第二关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '竹棒',
      options: [
        {option: 'A', optionDetails: '钥匙', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '健素糖 ', standardAnswer: false, result: false},
        {option: 'C', optionDetails: '仙丹', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '竹棒', standardAnswer: true, result: false}]
    }, {
      id: 3,
      titel: '阿顺和阿明因为什么事吵架？',
      number: '第三关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '扫雪',
      options: [
        {option: 'A', optionDetails: '扫把', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '太阳', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 扫雪', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '学校', standardAnswer: false, result: false}]
    }, {
      id: 4,
      titel: '荒野上的花朵是什么花？',
      number: '第四关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '蔷薇',
      options: [
        {option: 'A', optionDetails: '牵牛花', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '牡丹', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 蔷薇', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '百合', standardAnswer: false, result: false}]
    }, {
      id: 5,
      titel: '弟弟种得是什么？',
      number: '第五关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '落花生',
      options: [
        {option: 'A', optionDetails: '土豆', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '红薯', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 辣椒', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '落花生', standardAnswer: true, result: false}]
    }, {
      id: 6,
      titel: '弟弟为防备鸡鸭捣乱为仁儿特地做了什么？',
      number: '第六关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '竹笼',
      options: [
        {option: 'A', optionDetails: '竹笼', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '帘子', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 箱子', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '板凳', standardAnswer: false, result: false}]
    }, {
      id: 7,
      titel: '以下说法哪个是对的？',
      number: '第七关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '生气时，用脚踢空罐子，火气慢慢就平息了。',
      options: [
        {option: 'A', optionDetails: '生气时，用脚踢空罐子，火气慢慢就平息了。', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '下课后，阿明和阿顺放学回家继续吵架。', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 蔷薇用刺自卫，最终没遭到采折。', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '在弟弟的盼望下，落花生发芽生长了。', standardAnswer: false, result: false}]
    }, {
      id: 8,
      titel: '以下哪一篇文章是德国歌德的作品？',
      number: '第八关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '野蔷薇',
      options: [
        {option: 'A', optionDetails: '空罐子', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '融化的雪 ', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 野蔷薇', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '性急的弟弟', standardAnswer: false, result: false}]
    }, {
      id: 9,
      titel: '叙事诗有什么特点？',
      number: '第九关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '以上都不讲究',
      options: [
        {option: 'A', optionDetails: '对仗', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '押韵', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 抒情', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '以上都不讲究', standardAnswer: true, result: false}]
    }, {
      id: 10,
      titel: ' “有点特别的‘叙事诗’”特别在哪里？',
      number: '第十关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '如果不分行，把诗句串起来，就像一篇小小说。',
      options: [
        {option: 'A', optionDetails: '虽然不对仗但是很押韵。', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '如果不分行，把诗句串起来，就像一篇小小说。', standardAnswer: true, result: false},
        {option: 'C', optionDetails: ' 它有诗歌的抒情，也有小说的叙事。', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '都是讲述作者自身发生的事情，属于真人真事。', standardAnswer: false, result: false}]
    }],
    //  排行榜
    topList: [
      {imgUrl: require('../images/乐创编/JINSHANSHAN.png'), title: '金闪闪', describe: '深圳南山实验小学五年级（2）班', score: '100', usedTime: '03：05'},
      {imgUrl: require('../images/乐创编/JINYOUYOU.png'), title: '金悠悠', describe: '深圳南山实验小学五年级（3）班', score: '90', usedTime: '04：10'},
      {imgUrl: require('../images/乐创编/JINGNAN.png'), title: '金娜娜', describe: '深圳宝安实验小学五年级（1）班', score: '80', usedTime: '02：55'},
      {imgUrl: require('../images/乐创编/JINGGANGAN.png'), title: '金敢敢', describe: '深圳坪洲小学五年级（1）班', score: '80', usedTime: '03：50'},
      {imgUrl: require('../images/乐创编/JINSHANSHAN.png'), title: '艾莉丝', describe: '深圳天骄小学五年级（4）班', score: '70', usedTime: '05：40'}],
    // 探议题状态
    discussionStype: 0,
    // 用户提议隐藏显示状态
    showUserDiscussion: false,
    //  探议题
    discussionMeun: [{
      act: '1',
      content: '&emsp;&emsp;用一首诗的形式，来记叙一件事。不讲究对仗，也不讲究押韵，你喜欢这样的诗吗？',
      discussionList: [
        {
          headerImg: require('../images/乐创编/JINSHANSHAN.png'),
          name: '金闪闪',
          time: '11-5  10:21',
          likeNumber: 120,
          isLiked: false,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '我很喜欢叙事诗。这些诗简洁明了，而且非常有趣。'
        }, {
          headerImg: require('../images/乐创编/JINYOUYOU.png'),
          name: '金悠悠',
          time: '11-5  10:21',
          likeNumber: 120,
          isLiked: false,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '这些诗浓厚的诗意，又有简练的叙事，太棒了。'
        }
      ]
    }, {
      act: '2',
      content: '&emsp;&emsp;叙事诗《南山大侠》的诗句连起来就成了一篇文章（其他几首诗也是一样）。那是不是每一篇文章分行排列就是叙事诗了呢？你可以找一篇短小的叙事文章，然后分行排列，看看像不像一首诗。',
      inputMasgges: '',
      discussionList: [
        {
          headerImg: require('../images/乐创编/JINYOUYOU.png'),
          name: '方小直',
          time: '11-5  10:21',
          likeNumber: 120,
          isLiked: false,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '我也在想为什么不同地方的原始人都认为原始世界像一个蛋？我猜想是因为大陆漂移的原因。'
        }, {
          headerImg: require('../images/乐创编/JINYOUYOU.png'),
          name: '艾莉丝',
          time: '11-5  10:21',
          likeNumber: 120,
          isLiked: false,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '我认为鸡蛋里面黑乎乎的，当时混沌的世界也是黑色的。'
        }, {
          headerImg: require('../images/乐创编/JINYOUYOU.png'),
          name: '罗伯特',
          time: '11-5  10:21',
          likeNumber: 120,
          isLiked: false,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '我认为有两个原因。一个是世界上所有的星球都是圆的；还有一个是鸡蛋是封闭的，我估计原始人也认为宇宙是永远都走不出去的。所以，他们想到了蛋。'
        }, {
          headerImg: require('../images/乐创编/JINYOUYOU.png'),
          name: '杰克',
          time: '11-5  10:21',
          likeNumber: 120,
          isLiked: false,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '人们往往觉得世界上的很多事情都是很奇妙的，以人类的力量是不能做到的。所以想到了神的魔力。'
        }
      ]
    }, {
      userDiscussionList: [],
      act: '3'
    }],
    //  乐创编
    createObj: {
      recommendImg: require('../images/home/thought02.png'),
      recommendBgImg: require('../images/bg.png'),
      discuss: '有点特别的“叙事诗”',
      chooseImg: '',
      createList: []
    }
  }, {
    /* ======================================第三本书============================================ */
    bookID: '3',
    bookName: '折柳送别诗',
    bookImg: require('../images/home/picture3.jpg'),
    bookContent: '',
    bookIntroduce: '&emsp;&emsp;在我国古代，亲朋好友分离时，送行者总要折一支柳条赠给远行者。下面这组诗中都出现了“柳”，请你比较异同，说说你的发现。',
    bookTheme: '&emsp;&emsp;在我国古代，亲朋好友分离时，送行者总要折一支柳条赠给远行者。下面这组诗中都出现了“柳”，请你比较异同，说说你的发现。',
    bookGarde: 8.4, // 评分
    evaluationNumber: 600, // 评分
    releaseTime: '今日12:20', // 发布时间
    lookedNumber: 3699, // 参与人数
    lookedProgress: 56,
    isCollect: false,
    collectText: '+收藏',
    // 读群文状态
    readArticleStye: 0,
    // 读群文列表
    articleList: [{
      id: 1,
      titel: '采薇（节选）',
      imag: '',
      article: '<h1>采薇（节选）</h1>' +
      '<h2>《诗经》</h2>' +
      '<span>昔<sup>①</sup>我往矣<sup>②</sup>，杨柳依依<sup>③</sup>。</span>' +
      '<span>今我来思<sup>④</sup>，雨雪霏霏<sup>⑤</sup>。</span>' +
      '<span>行道迟迟，载渴载饥。</span>' +
      '<span>我心伤悲，莫知我哀。</span>' +
      '<div class="annotation">' +
      '<br>' +
      '<br>' +
      '<span>【注释】</span>' +
      '<span>①昔：从前。</span>' +
      '<span>②矣：语气助词。</span>' +
      '<span>③依依：形容树枝柔弱，随风摇摆的样子。</span>' +
      '<span>④思：语气助词。</span>' +
      '<span>⑤霏霏：雪花飞舞的样子。</span>' +
      '</div>'
    }, {
      id: 2,
      titel: '送别',
      imag: '',
      article: '<h1>送别</h1>' +
      '<h2>《佚名》</h2>' +
      '<span>杨柳青青著<sup>①</sup>地垂，</span>' +
      '<span>杨花<sup>②</sup>漫漫揽天飞。</span>' +
      '<span>柳条折尽花飞尽，</span>' +
      '<span>借问<sup>③</sup>行人归不归？</span>' +
      '<div class="annotation">' +
      '<br>' +
      '<br>' +
      '<span>【注释】</span>' +
      '<span>①著：同“着”。</span>' +
      '<span>②杨花：柳絮。</span>' +
      '<span>③借问：敬辞，用于向别人询问事情；请问。</span>' +
      '</div>'
    }, {
      id: 3,
      titel: '送元二使安西',
      imag: '',
      article: '<h1>送元二使安西<sup>①</sup></h1>' +
      '<h2>【唐】王维</h2>' +
      '<span>渭城<sup>②</sup>朝雨<sup>③</sup>浥<sup>④</sup>轻尘，</span>' +
      '<span>客舍<sup>⑤</sup>青青柳色新。</span>' +
      '<span>劝君更尽一杯酒，</span>' +
      '<span>借问西出阳光<sup>⑥</sup>无故人。</span>' +
      '<div class="annotation">' +
      '<br>' +
      '<br>' +
      '<span>【注释】</span>' +
      '<span>①送元二使安西：元二，姓元，名常，排行第二，作者的朋友。使，出使。安西，指唐代安西都护府（今新疆库车附近）。</span>' +
      '<span>②渭城：秦时咸阳城，汉改渭城，在长安西北，渭水北岸。</span>' +
      '<span>③朝雨：早晨下的雨。</span>' +
      '<span>④浥（yì）:湿。</span>' +
      '<span>⑤客舍：旅店。</span>' +
      '<span>⑥阳关：是古代通西域的要道（今甘肃敦煌）。</span>' +
      '</div>'
    }, {
      id: 4,
      titel: '折杨柳 ',
      imag: '',
      article: '<h1>折杨柳 </sup></h1>' +
      '<h2>【唐】张九龄</h2>' +
      '<span>纤纤<sup>①</sup>折杨柳，持此寄情人。</span>' +
      '<span>一枝何足贵，怜<sup>②</sup>是故园春。</span>' +
      '<span>迟景那能久，芳菲<sup>③</sup>不及新。</span>' +
      '<span>更愁征戍客<sup>④</sup>，容鬓老边尘<sup>⑤</sup>。</span>' +
      '<div class="annotation">' +
      '<br>' +
      '<br>' +
      '<span>【注释】</span>' +
      '<span>①纤纤：细小，形容女性的手柔软细腻。</span>' +
      '<span>②怜：怜爱，爱惜。</span>' +
      '<span>③芳菲：形容花草芳香。</span>' +
      '<span>④征戍客：远行去守边的人。这里指情人。</span>' +
      '<span>⑤边尘：指战争。</span>' +
      '</div>'
    }, {
      id: 5,
      titel: '春夜洛城闻笛 ',
      imag: '',
      article: '<h1>春夜洛城<sup>①</sup>闻笛 </h1>' +
      '<h2>【唐】李白</h2>' +
      '<span>谁家玉笛<sup>②</sup>暗飞声<sup>③</sup>，</span>' +
      '<span>散入春风<sup>④</sup>满洛城。</span>' +
      '<span>此夜曲中闻<sup>⑤</sup>折柳<sup>⑥</sup>，</span>' +
      '<span>何人不起故园<sup>⑦</sup>情。</span>' +
      '<div class="annotation">' +
      '<br>' +
      '<br>' +
      '<span>【注释】</span>' +
      '<span>①洛城：今河南洛阳。</span>' +
      '<span>②玉笛：精美的笛子。玉，指玉石。</span>' +
      '<span>③暗飞声：声音不知从何处传来。</span>' +
      '<span>④春风：指春天的风，比喻恩泽，融和的气氛等引申含义。</span>' +
      '<span>⑤闻：听；听见。</span>' +
      '<span>⑥折柳：即《折杨柳》笛曲，乐府“鼓角横吹曲”调名，内容多描写离情别绪。</span>' +
      '<span>⑦故园：指故乡，家乡。</span>' +
      '</div>'
    }, {
      id: 6,
      titel: '杨柳枝词（其一） ',
      imag: '',
      article: '<h1>杨柳枝词（其一）</h1>' +
      '<h2>【唐】 刘禹锡</h2>' +
      '<span>塞北梅花<sup>①</sup>羌笛吹，</span>' +
      '<span>淮南桂树小山洞<sup>②</sup>。</span>' +
      '<span>请君莫奏前朝曲，</span>' +
      '<span>听唱新翻杨柳枝。</span>' +
      '<div class="annotation">' +
      '<br>' +
      '<br>' +
      '<span>【注释】</span>' +
      '<span>①梅花：指汉乐府横吹曲中的《梅花落》曲，用羌笛吹奏。</span>' +
      '<span>②淮南桂树小山词：这句讲的是《楚辞》中的《招隐士》篇。相传西汉淮南王刘安门客小山之徒作《招隐士》篇来表现对屈原的哀悼。《招隐士》篇。《梅花落》曲原出塞北，歌咏梅花；《招隐士》出自淮南王门下，屡屡咏及桂树。它们都以树木为咏对象，在内容上有相通的地方，所以刘禹锡拿它们来与《杨柳枝词》相比。</span>' +
      '</div>'
    }],
    // 闯关状态
    topicStype: 0,
    // 创关时间
    topicTimer: 0,
    // 错题列表
    wrongTopicList: [],
    // 勇挑战时间
    challengTimer: 0,
    // 闯关列表
    topicList: [{
      id: 1,
      titel: '古人送别用什么表示？',
      number: '第一关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '折柳',
      options: [
        {option: 'A', optionDetails: '扇子', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '折柳', standardAnswer: true, result: false},
        {option: 'C', optionDetails: '唱歌', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '喝酒', standardAnswer: false, result: false}]
    }, {
      id: 2,
      titel: '“杨花漫漫揽天飞”中的“杨花”指的是？',
      number: '第二关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '柳絮',
      options: [
        {option: 'A', optionDetails: '杨树的花', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '杨柳的花', standardAnswer: false, result: false},
        {option: 'C', optionDetails: '柳絮', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '杨桃树的花', standardAnswer: false, result: false}]
    }, {
      id: 3,
      titel: '以下哪首诗的作者与其他三首不是同一朝代的？',
      number: '第三关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '《采薇》',
      options: [
        {option: 'A', optionDetails: '《送元二使安西》', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '《采薇》', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 《春夜洛城闻笛》', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '《杨柳枝词（其一）》', standardAnswer: false, result: false}]
    }, {
      id: 4,
      titel: '“容鬓老边尘”中的“边尘”指的是？',
      number: '第四关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '战争',
      options: [
        {option: 'A', optionDetails: '边疆的人', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '边疆的尘土', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 战争', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '白发', standardAnswer: false, result: false}]
    }, {
      id: 5,
      titel: '“昔我往矣，杨柳依依。”与下面哪一句都是表达思想之情？',
      number: '第五关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '此夜曲中闻折柳，何人不起故园情。',
      options: [
        {option: 'A', optionDetails: '劝君更尽一杯酒，西出阳关无故人。', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '纤纤折杨柳，持此寄情人。', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 此夜曲中闻折柳，何人不起故园情。', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '请君莫奏前朝曲，听唱新翻杨柳枝。', standardAnswer: false, result: false}]
    }, {
      id: 6,
      titel: '下面哪首诗不是表达对朋友依依惜别、思念之情？',
      number: '第六关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '《春夜洛城闻笛》 ',
      options: [
        {option: 'A', optionDetails: '《送别》', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '《春夜洛城闻笛》', standardAnswer: true, result: false},
        {option: 'C', optionDetails: ' 《送元二使安西》', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '《杨柳枝词（其一）》', standardAnswer: false, result: false}]
    }, {
      id: 7,
      titel: '“雨雪霏霏”中的“霏霏”指的是？',
      number: '第七关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '雪花飞舞的样子',
      options: [
        {option: 'A', optionDetails: '小雨淅淅的样子', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '微风习习的样子', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 雪花飞舞的样子', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '雾霭茫茫的样子', standardAnswer: false, result: false}]
    }, {
      id: 8,
      titel: '“迟景那能久，芳菲不及新” 是哪首诗中的诗句？',
      number: '第八关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '《折杨柳》',
      options: [
        {option: 'A', optionDetails: '《送元二使安西》', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '《折杨柳》', standardAnswer: true, result: false},
        {option: 'C', optionDetails: ' 《杨柳枝词（其一）》 ', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '《送别》 ', standardAnswer: false, result: false}]
    }, {
      id: 9,
      titel: '“此夜曲中闻折柳，何人不起故园情。”这句古诗采用了什么修辞手法？',
      number: '第九关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '借代',
      options: [
        {option: 'A', optionDetails: '借代', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '设问 ', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 比喻', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '反语', standardAnswer: false, result: false}]
    }, {
      id: 10,
      titel: '李白，字_______，号___________。',
      number: '第十关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '太白，青莲居士',
      options: [
        {option: 'A', optionDetails: '乐天，香山居士', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '太白，青莲居士', standardAnswer: true, result: false},
        {option: 'C', optionDetails: ' 子瞻，东坡居士', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '介甫，半山', standardAnswer: false, result: false}]
    }],
    //  排行榜
    topList: [
      {imgUrl: require('../images/乐创编/JINSHANSHAN.png'), title: '金闪闪', describe: '深圳南山实验小学五年级（2）班', score: '100', usedTime: '03：05'},
      {imgUrl: require('../images/乐创编/JINYOUYOU.png'), title: '金悠悠', describe: '深圳南山实验小学五年级（3）班', score: '90', usedTime: '04：10'},
      {imgUrl: require('../images/乐创编/JINGNAN.png'), title: '金娜娜', describe: '深圳宝安实验小学五年级（1）班', score: '80', usedTime: '02：55'},
      {imgUrl: require('../images/乐创编/JINGGANGAN.png'), title: '金敢敢', describe: '深圳坪洲小学五年级（1）班', score: '80', usedTime: '03：50'},
      {imgUrl: require('../images/乐创编/JINSHANSHAN.png'), title: '艾莉丝', describe: '深圳天骄小学五年级（4）班', score: '70', usedTime: '05：40'}],
    // 探议题状态
    discussionStype: 0,
    // 用户提议隐藏显示状态
    showUserDiscussion: false,
    //  探议题
    discussionMeun: [{
      act: '1',
      content: '&emsp;&emsp;古人送别为什么要“折柳送别”呢？我们大胆猜一猜其中的原因。',
      discussionList: [
        {
          headerImg: require('../images/乐创编/JINSHANSHAN.png'),
          name: '金闪闪',
          time: '11-5  10:21',
          likeNumber: 120,
          isLiked: false,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '我觉得“柳”与“留”谐音，古人“折柳”是挽留之意，表示对朋友的依依惜别之情。'
        }, {
          headerImg: require('../images/乐创编/JINYOUYOU.png'),
          name: '金悠悠',
          time: '11-5  10:21',
          likeNumber: 120,
          isLiked: false,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '据说柳树随处可活。“折柳”送给朋友，可能希望朋友到新的地方，能很快地生根发芽，我觉得“折柳”可能是表达对友人的美好祝愿。'
        }, {
          headerImg: require('../images/乐创编/JINGNAN.png'),
          name: '金娜娜',
          time: '11-5  10:21',
          likeNumber: 120,
          isLiked: false,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '听说古人“折柳送别”时，要吹笛，有时还要放声歌唱，所以，“折柳”是表达依依惜别的深情。'
        }
      ]
    }, {
      act: '2',
      content: '&emsp;&emsp;这组诗中都出现了“柳”,但是“折柳”表达的情感是不同的：有的表达了思乡之情，有的表达了对朋友依依惜别、思念之情，有的表达了对朋友的美好祝愿。',
      discussionList: [
        {
          headerImg: require('../images/乐创编/JINYOUYOU.png'),
          name: '方小直',
          time: '11-5  10:21',
          likeNumber: 120,
          isLiked: false,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '我喜欢杨柳随风飘扬的感觉。'
        }
      ]
    }, {
      userDiscussionList: [],
      act: '3'
    }],
    //  乐创编
    createObj: {
      recommendImg: require('../images/home/thought03.png'),
      recommendBgImg: require('../images/bg.png'),
      discuss: '折柳送别诗',
      chooseImg: '',
      createList: []
    }
  }, {
    /* ======================================第四本书============================================ */
    bookID: '4',
    bookName: '经典动物故事的结局',
    bookImg: require('../images/home/picture4.jpg'),
    bookContent: '',
    bookIntroduce: '&emsp;&emsp;如果你喜欢动物故事，那么“西顿”是一个绕不过去的名字。西顿，并不是第一个写动物故事的作家，但是却被誉为“动物小说之父”，他的作品一直是喜爱野生动物者的必读经典。他写的动物故事到底有什么与众不同的地方呢？让我们一起去看一看。',
    bookTheme: '&emsp;&emsp;如果你喜欢动物故事，那么“西顿”是一个绕不过去的名字。西顿，并不是第一个写动物故事的作家，但是却被誉为“动物小说之父”，他的作品一直是喜爱野生动物者的必读经典。他写的动物故事到底有什么与众不同的地方呢？让我们一起去看一看。',
    bookGarde: 9.4, // 评分
    evaluationNumber: 800, // 评分
    releaseTime: '今日10:20', // 发布时间
    lookedNumber: 6823, // 参与人数
    lookedProgress: 72,
    isCollect: false,
    collectText: '+收藏',
    // 读群文状态
    readArticleStye: 0,
    // 读群文列表
    articleList: [{
      id: 1,
      titel: '遛蹄的野马',
      imag: '',
      article: '<h1>遛蹄的野马（节选）</h1>' +
      '<h2>[加]西顿</h2>' +
        '<p class="text_introduces">&emsp;&emsp;/前情提要/ 遛蹄的野马皮毛黑亮、身体强壮、脚步稳健，具有领导者的气质。他黑黑的鬃毛迎风飘展，像流星一般，率领母马们疾驰而去。他富有节奏地起伏跃动，仿佛充满永不疲倦的活力。黑野马从不四蹄腾空，总是以侧对步遛蹄跑，并因此威名远扬。然而这样的好马也最难驯服，许多猎人纷纷惨败而回。直到他遇到了老牧人鸡爪印汤姆。</p>' +
      '<br>&emsp;&emsp;鸡爪印汤姆是专门为几位骑手做饭的。同样，他也对这次的追捕行动很感兴趣。当行动失败后，他曾经对着面前的铁锅说道：“要换成我啊，早就该捉到他了，除非我是个傻瓜。”接着他去《圣经》中寻找先例，又对着铁锅说：“想想当年菲利士人不就是利用了参孙天生的缺陷才逮到他的吗？而亚当没能继续在伊甸园中过着逍遥的日子，不就是有一个众人皆知的缺点吗？我有足够的能力可以一个人逮到野马，又何必要和别人分享那奖金呢？”' +
      '<br>&emsp;&emsp;多次的追捕行加深了野马的野性，但他从未离开过羚羊泉。因为那里方圆一英里都是开阔的，敌人无处容身，自然是唯一安全的饮水地。野马每天中午都会来饮水，先向四周勘察一番，再走过去饮水。' +
      '<br>&emsp;&emsp;鸡爪印汤姆很清楚：自从母马们被捉走之后，野马已经度过了一个孤单的冬季了。汤姆的朋友拥有一匹漂亮的棕色小母马，他则决定利用这一点来捕捉野马。于是，他带了两个结实的马脚绊、一把铁楸、绳套和木桩，骑着小母马向羚羊泉出发了。' +
      '<br>&emsp;&emsp;清晨，空气中弥漫着一股爱的气息。小母马被拴到木桩上，小母马一会儿低着头吃草，一会儿仰头嘶鸣，那一定是她的“情歌”。' +
      '<br>&emsp;&emsp;鸡爪印汤姆考察了周围的地形和风向。他选好了一个莎草丛生的土堆，将木桩栽进土堆，在附近挖了个容身的洞。接着，又将套马索解开，扑在拴马桩和藏身的洞之间的地面上。把长的那一端固定在木桩上，又盖住了绳子。准备好之后便藏在洞中。 ' +
      '<br>&emsp;&emsp;等到中午，那匹赫赫有名的黑马终于出现了。' +
      '<br>&emsp;&emsp;他踏着侧对步跑来，时不时停下来抬头凝望，还发出阵阵嘶鸣，而小母马的回应显然已经让他心动了。此时，守护天使在他耳边说：“别去！”但黑马终究抵挡不住母马呼唤声的诱惑，继续向危险靠近。而这次他收到的小母马的答复一下子点燃了他心中的烈火。' +
      '<br>&emsp;&emsp;于是野马上前去触碰了一下母马的鼻子，而母马的反应正如他所想的那样热烈，于是他抛开了所有的忧虑。正当他在四周跳跃的时候，他的双脚踩进了绳索，接着绳索的活结就被猛地拉紧了——黑马被套住了。 ' +
      '<br>&emsp;&emsp;剧烈的恐惧感使得黑马的速度和力量倍增，但挣扎过后，还是沦为了阶下囚。这时，丑陋的老汤姆出来完成他最后的征服。野马力量巨大也抵不过老头儿的聪明。他不停地冲撞、挣脱，想摆脱束缚，但无济于事。' +
      '<br>&emsp;&emsp;鸡爪印汤姆一系列熟练的动作过后，野马被牢牢地绑了起来。他绝望地倒在地上挣扎，直到筋疲力尽，浑身抽搐，眼泪一滴滴落了下来。' +
      '<br>&emsp;&emsp;老牧人看到眼前的一幕，突然间不知所措。但这种感觉稍纵即逝。他利落地给野马上了鞍，又解下一个绳索拴住野马的脖子，再捆上马腿，这下便万无一失了。这时，鸡爪印汤姆突然发现自己没有带印章。因为按照当地的法律，野马会属于第一个在他身上烙上印章的人。这该怎么办呢？' +
      '<br>&emsp;&emsp;鸡爪印汤姆取下了母马蹄子上一个较松动的马掌，然后收集了一堆可以作为燃料的东西，点燃了火。接着便把马掌的弯子烧红，笨拙地在野马身上印上了火鸡爪印，这可是这个烙印首次派上用场。黑马被烫得战栗不已，此刻，他已经失去了自由身。' +
      '<br>&emsp;&emsp;接下来就该把马带回去了，他松开了一个绳索。野马以为重获自由了，却重重地摔倒在地。原来，他的两只前蹄还被捆绑着。所以野马只能被拖着或是拼命地蹦跳着前进。他多次尝试挣脱，却总是摔倒在地。鸡爪印汤姆不停地驱赶、吓唬和引诱，才将这个满口白沫、狂野的家伙赶往了皮尼亚韦蒂托河谷。但野马毫不妥协，一次次试图逃跑。经过之前的搏斗，野马的身上沾满了黑沫和血斑。曾经那一整天的追逐也未曾使他摔倒和疲惫，但如今，他一次次摔倒在地，已经疲惫不堪。但捕猎人却依旧残忍地往前行走。' +
      '<br>&emsp;&emsp;最终，在快到木舍和畜栏的时候，鸡爪印汤姆想到即将收服黑马而欣喜若狂，而野马则用了最后的力量拼命地改变路线，不顾那频频挥舞的皮鞭和胡乱扫射的枪弹，他最终还是站到了悬崖边上。随后，他纵身一跃，落入了一个深达两百多英尺的深渊，最终成为了一具躯体——尽管他失去了生命，却重获了自由。'
    }, {
      id: 2,
      titel: '泉原狐',
      imag: '',
      article: '<h1>泉原狐（节选）</h1>' +
      '<h2>[加]西顿</h2>' +
      '<p class="text_introduces">&emsp;&emsp;/前情提要/ 我回泉原度假得知叔叔家的母鸡接二连三地丢失。有着丰富捕猎经验的我被委以重任，追查凶手。经过分析判明狐狸是背后的元凶。我一路追踪，发现“疤脸”狐和一只母狐带着四只出生不久的小狐狸在村旁松树林安了家。一连几天我兴致勃勃地观察母狐狸用偷来的母鸡和周围的动物教授小狐狸生存技能，动物有着如此强烈的母爱，那份真挚的母爱甚至使不相干的我受到感染。母鸡继续失踪，叔父开始嘲弄我的狩猎水平，而我却谎称没有线索，保守着狐狸的秘密。他极不耐烦并亲自出马，终于“疤脸”爸爸死在他的枪下。然而母鸡仍然离奇消失，狐狸妈妈继续演绎其高超盗艺。被激怒的叔父发动村民和猎狗展开了灭狐战役。战斗结束，三只小狐狸命丧铁铲之下，狐狸窝被荡平，母狐在逃，一只小狐狸被链条拴在院子里囚养。狐狸妈妈将小狐狸的尸体清理干净，悲痛欲绝。母鸡失踪仍然在继续，是母狐用它们喂养自己被困的孩子。接连三个晚上，她冒着被猎狗追杀和猎人枪杀的风险，竭力去营救自己被困的孩子。</p>' +
      '<br>&emsp;&emsp;俘虏狄普，是那一窝中最弱小的一个，现在成了她所有的爱的承受者。狗被放出来保护母鸡。雇来的工人得到命令，只要看到这只老狐狸就射杀她。我也被告知这么做，但我决心不与她碰面。狐狸喜欢而狗不会碰的鸡头被掺上了毒药，投放在树林里。通向拴着狄普的院子只有一条路径，得冒着风险爬上木头堆才能进去。然而母狐还是每晚都出现。她来喂养幼儿，带来新杀死的母鸡和猎物。' +
      '<br>&emsp;&emsp;小狐狸被俘的第二夜，我听到链子发出的当啷声，然后清楚地看到老母狐来了。她在小狐狸的窝旁辛苦地挖一个洞。当洞深到足够埋到她一半时，她把链子所有松弛的部分都放进洞里用土埋上。然后她以为她已成功地消灭了这根链子，衔着狄普的脖子扭头向木头堆跑去。可是天啊，这只能使小狐狸被狠狠地从她嘴里拽出来。' +
      '<br>&emsp;&emsp;可怜的小家伙向木箱子爬去，悲伤地哭泣着。过了半个小时，几只狗发出了巨大的叫声。我看见他们对着远处的树林大叫，知道他们正在追赶狐母狐。第二天早晨，狗还没有回来，不久我们就知道了缘故。狐狸很早就知道铁路是什么东西，他们很快便发明了几种利用铁路的方法。其中之一就是在受到猎狗追赶时，在火车快要开过来之前，先在铁路上跑长长的一段距离。留在铁轨上的气味本来就很弱，还容易被火车破坏掉，在这种情况下猎犬被火车撞死的可能性极大。还有更保险但也更难做到的一招。在火车前面领着猎犬跑上高架桥，当火车在桥上超过他们时，猎狗必定会冲向死亡。' +
      '<br>&emsp;&emsp;这个计谋实施得非常巧妙，在铁路下面我们找到了罗杰支离破碎的身体。我们明白了这是母狐在进行报复。' +
      '<br>&emsp;&emsp;当天夜里，母狐回到了院子里，她杀死一只母鸡并把猎物带给狄普。在他身旁，她喘着气平躺下去给他哺乳。她似乎认为假使她不带食物来，她可怜的孩子就得不到吃的东西。' +
      '<br>&emsp;&emsp;正是这只母鸡使我叔叔知道了她夜间的光顾。' +
      '<br>&emsp;&emsp;我所有的同情都转向母狐这一边。但在阻止捕杀她的计划上，我却无能为力。第二夜，叔叔亲自站岗，手里拿着枪守候了一个小时。不久云彩遮住了月亮，天气渐渐变凉，他想起有件重要的事得去办，于是便把爱尔兰人叫来替他。' +
      '<br>&emsp;&emsp;然而，夜晚的寂静使守夜的爱尔兰人非常“焦累不安”。一个小时以后听到了砰砰声，我们确信他开了枪。' +
      '<br>&emsp;&emsp;早上我们发现，母狐并没有让小狐狸失望。因为又被偷去了一只母鸡，夜里还是叔叔担任警戒。夜里再次响起了枪声。于是第二天从链子的光亮程度上可以看出她已经来过了，她曾几小时徒劳无益地要斩断那个可恶的束缚。' +
      '<br>&emsp;&emsp;这样的勇气和顽强的忠诚，如果不能得到人们的宽容，也必定能赢得尊重。总之，第二天夜里，当一切重归静寂之后，院子里没有再埋伏枪手。第四夜，随着小家伙颤抖的哀鸣，木头堆上又出现了一个黑影。' +
      '<br>&emsp;&emsp;但是，我没看到母狐带来家禽或食物。难道热情的女猎手终于失败了吗？生活在荒野里的母亲的爱和恨是实实在在的。她唯一的念头曾经是使小狐狸重获自由。她尝试了一切她知道的手段，经历了种种危险，尽心尽力地看护他，想要帮助他自由。然而，这一切都失败了。' +
      '<br>&emsp;&emsp;像一个黑影子，母狐来了，但只一会儿工夫她就走了。狄普抓住她丢在地上的东西，津津有味地咀嚼起来。但就在这时，刀割般的剧痛突然发作，他发出一声痛苦的尖叫。接着是一阵短促的挣扎，小狐狸死了。' +
      '<br>&emsp;&emsp;母狐非常清楚毒饵的作用，如果小狐狸活着，她本来要教给他这方面的知识并要他躲开这些有毒的东西。但是现在她必须为他做出选择，要么是凄惨的囚徒生活，要么是突然的死亡。她尽力抑制住内心的母爱，引导他走向唯一敞开的自由之门。' +
      '<br>&emsp;&emsp;开始下雪了，我们巡视了树林。当冬季到来后，我再也没有发现母狐在埃林岱尔树林里出没过。谁都不知道她上哪儿去了。但有一点是肯定的，她走了。' +
      '<br>&emsp;&emsp;她可能去了某个远方的狩猎场，把她对被杀害小家伙和伴侣的悲惨记忆留在身后。也许她一心要摆脱自己心酸的生活，像许多森林中野性的母亲那样，作为家庭中的最后一员，她使用了自己解放幼儿的方式。'
    }, {
      id: 3,
      titel: '信鸽阿诺',
      imag: '',
      article: '<h1>信鸽阿诺（节选）</h1>' +
      '<h2>[加]西顿</h2>' +
      '<p class="text_introduces">&emsp;&emsp;/前情提要/ 阿诺是一只有口皆碑的出色的信鸽。在飞行比赛中曾多次获奖并打破记录。它能飞行很远。并且从来不迷失方向。它曾经以四小时四十分钟在浓雾弥漫的海上飞行了三百四十千米的速度回来送求救信；它曾挽救过老银行家的事业，甚至命运；它战胜了那只体型较大的大蓝鸟并娶到了心仪的母鸽，可是在一次超长距离的大型比赛中，阿诺因口渴落下来喝水，不幸被一个训鸽人捉住。当他得知它就是神奇的信鸽阿诺时，他自私地将它占为已有，并精心养护。两年后，当训鸽人以为阿诺已忘记家乡时，阿诺却找到了一个机会逃跑，飞向了回家的路。</p>' +
      '<br>&emsp;&emsp;当鸽舍门一打开，阿诺便像箭一般飞了出去。两年来在鸽舍里的生活丝毫没有减弱它对家的思念。在万里无云的蓝天上，阿诺转着巨大的圆圈不断地往上飞。它翅膀上的羽毛在阳光下闪闪发亮。如果阿诺会唱歌的话，它此时一定是在引吭高歌，歌声里充满了自由的快乐和兴奋。' +
      '<br>&emsp;&emsp;风吹着它的翅膀发出了沙沙声，已融进蓝天里的阿诺正以火箭般的速度向东南方向的家乡飞去。那个自私自利的鸽舍主人抬头看着已经飞远的阿诺，才忽然明白信鸽对自由的家的渴望是不能被限制住的。' +
      '<br>&emsp;&emsp;在阿诺前方很远的山谷里开出了一列火车，火车冒着蒸汽在铁轨上疾驰着。阿诺很快就追上并超过了火车。它在山谷的上空高高地飞翔着，经过身下的一座座山峦，掠过风中如波涛一样汹涌的松涛。就这样，阿诺忘情地向故乡飞去。' +
      '<br>&emsp;&emsp;一只鹰在高高的橡树林中盘旋飞翔着，它已经注意到空中的这个猎物。' +
      '<br>&emsp;&emsp;也不知道阿诺有没有发现鹰，反正它一点儿都没有改变方向，没有提升或者降低自己的飞行速度，没有减慢一点儿速度，也没有片刻停止煽动自己的翅膀，鹰在山谷中埋伏起来，等待着阿诺的经过。就像一只壮年的鹿从鹰的面前飞过的时候，鹰还来不及做出反应，阿诺已经远远地离开了鹰的视野。' +
      '<br>&emsp;&emsp;阿诺全身心地向家乡飞去，像箭一样快的速度没有丝毫减缓，道路也似乎渐渐熟悉了。一个小时后，卡茨基尔山脉已经很近了，越过这个山脉，家就出现了。就像口干舌燥的行人看见前方的绿洲一样，阿诺那钻石一样的眼睛里似乎也看见了纽约上空的炊烟。' +
      '<br>&emsp;&emsp;这个时候，卡茨基尔山脉悬崖上飞起了一只大鸟，是一只游隼。在鸟类中，它的速度最快，绝不会轻易让自己的猎物跑掉，它是一个可怕的空中杀手。而此时，它已经盯上了阿诺。当阿诺飞到游隼面前的时候，游隼一下子就扑了过来，可是它锋利的爪子只抓到了一闪而过的影子。阿诺只不过是以加快向家飞奔的速度来应对危险。当利爪出现的时候，阿诺已经向火箭一样冲了过去。' +
      '<br>&emsp;&emsp;这个时候，卡茨基尔山脉悬崖上飞起了一只大鸟，是一只游隼。在鸟类中，它的速度最快，绝不会轻易让自己的猎物跑掉，它是一个可怕的空中杀手。而此时，它已经盯上了阿诺。当阿诺飞到游隼面前的时候，游隼一下子就扑了过来，可是它锋利的爪子只抓到了一闪而过的影子。阿诺只不过是以加快向家飞奔的速度来应对危险。当利爪出现的时候，阿诺已经向火箭一样冲了过去。' +
      '<br>&emsp;&emsp;之后面前出现了海面，海面上又出现了一小块的陆地，这是多么熟悉的地方啊！阿诺简直是太熟悉顺着哈得逊河谷而下的飞行路线了，尽管这是一条已经两年没有飞过的令人怀念的线路。' +
      '<br>&emsp;&emsp;然而，真正的危险出现了。' +
      '<br>&emsp;&emsp;虽然是六月，却有一个枪手徘徊在山谷里。这个枪手发现了在空中飞行的阿诺。高空的风大了起来，阿诺将飞行的高度降低了一些，而那个枪手已经将枪高高地举起，瞄准了飞过来的阿诺。' +
      '<br>&emsp;&emsp;“砰”的一声枪响，一道火光一闪，致命的枪弹向阿诺的身体射了过来，阿诺身上的羽毛一下子纷乱地飘落下来，连书写过辉煌记录的羽毛也被打落了几根。' +
      '<br>&emsp;&emsp;枪弹巨大的冲击力并没有使阿诺从空中落下来，翅膀上有了洞，可并不是不能飞翔。阿诺曾经在海上冒着迷雾飞行救助海轮的记录是75千米/小时，现在得除以10了，变成了7.5千米/小时。振动翅膀的前胸肌肉中已经镶进了一些铁砂，这使得它的飞行速度一下子慢了下来。但是它并没有坠落下来，并没有落在枪手的手中。' +
      '<br>&emsp;&emsp;虽然被子弹打得已经有洞的翅膀漏着风，而且发出让人感觉不舒服的声音，翅膀的力量也减弱了许多，可以阿诺依然忍着疼痛尽力地飞翔着。' +
      '<br>&emsp;&emsp;新泽西岛的悬崖上，一只常年栖息在这里的游隼盯上了阿诺。阿诺非常清楚这里的游隼，以前它总能避开游隼的攻击，但是这一次，阿诺因为受伤，身上的力量慢慢地消失，飞行的速度已经不足以躲避游隼了。但是为了回家，阿诺仍然像以前一样冲着悬崖飞了过去。' +
      '<br>&emsp;&emsp;悬崖拐角处的两只游隼迅速地飞了出去，以闪电般的速度猛然向阿诺扑了过去，锋利的鹰瓜嵌进了阿诺的肉体。两只游隼带着阿诺回到了巢穴，很快就撕碎了阿诺的身体，曾经以速度创造过无数次记录的翅膀也被撕开了两半，记录着辉煌历史的羽毛四处飘散，凌乱地掉落在游隼的巢穴中。' +
      '<br>&emsp;&emsp;两年来，谁也不知道参加远距离比赛的阿诺去了哪里。直到有一天，猎人打死了游隼，并爬上了悬崖找到了游隼的巢穴，这才发现许多信鸽的脚环和一些写着记录的信鸽羽毛。而其中有一个银质的脚环，上面写着：' +
      '<br>&emsp;&emsp;阿诺，2590C'
    }, {
      id: 4,
      titel: '威尼佩格狼',
      imag: '',
      article: '<h1>威尼佩格狼（节选）</h1>' +
      '<h2>[加]西顿</h2>' +
      '<p class="text_introduces">&emsp;&emsp;/前情提要/ 威尼佩格狼是一只从小在酒吧里被养大的狼。顾客常常让狗与小狼撕咬，有时会害得小狼几乎丧命。只有酒吧老板的小儿子吉姆关心、爱护这只小狼。他俩的友谊变得越来越深厚。当小狼越长越强壮的时候，小吉姆生病离开了人世。狼参加了吉姆的葬礼，当酒吧老板想重新用铁链把它栓在院子里时，它挣脱后逃走了。可是，它并未离开这个城镇，而且专门与酒鬼和所有的狗为敌，因为他们是它受苦受难的根源；而对几乎所有的小孩子，它却保持着一种感情，从来不去伤害他们。终于，威尼佩格狼组织许多猎人与狗对它进行围剿……</p>' +
      '<br>&emsp;&emsp;威尼佩格狼就那么淡定地站在那里，它仍是那副嘲笑的表情，就跟我第一次在火车上见到它的样子一样。它的嘴角往上翘起，漏出了尖利的白牙；结实的腹部微微地起伏着，黄绿色的眼睛闪烁着镇定的光芒。' +
      '<br>&emsp;&emsp;那些狗开始向它逼近。带头的并不是那几只曾经同它打过照面的爱斯基摩狗，而是一只城里的虎头狗，很多狗都跟随在它的身后。它们一步一步地逼近，很快，一场恶战开始了。撕咬声不断地响起，狼狗交战在一起，有一阵子，根本就分不清哪是狼哪是狗。过了一会儿，撕咬声就变成了低沉的哼哼声，很多猎狗都受伤了，威尼佩格狼露出了血淋淋的嘴巴，一下子跳出了狗群，在外圈叉着腿一动不动地站着。看上去简直是一个可怕又勇猛的山贼。袭击暂时告一段落。' +
      '<br>&emsp;&emsp;过了一会儿，袭击队伍又开始骚动了，还是没能取胜，而受伤的狗又多了一些。就这样，那些狗进攻了三次，但三次都被它击退了。它的周围横卧着最勇敢的几只狗，头一个倒下的当然是那只勇往直前的虎头狗。其他的狗这时候也都学乖了，没有谁会再挑头往前上了。他们全都退得远远的。但是，威尼佩格狼仍然站在原地，仍然是一副不容侵犯的样子。就这么僵持了一会儿，威尼佩格狼好像等得不耐烦了，它往前走了两三步。可是，这就给那些拿枪的猎人制造了机会，他们同时举枪开始向它射击，随着“砰砰砰”的三声枪响，威尼佩格狼终于躺倒在了雪地上，结束了它那战斗的一声。在威尼佩格狼离开酒吧的日子里，它过着任性而又无拘无束的生活。只可惜它的生命太短暂了。' +
      '<br>&emsp;&emsp;它原本可以无忧无虑地生活的，而且这种生活可以让它活上很多年，但是它却选择了紧张的生活方式，并且一直坚持下去。在这三年当中，它尝尽了各种苦楚。到最后，它宁愿一口气喝完生命的酒，然后很果断地把酒杯砸碎——但是它的名字却为很多人所熟悉，并且永远被人传诵着。世上有谁知道威尼佩格狼的心里是怎么想的呢？为什么它要选择那样的生活方式呢？' +
      '<br>&emsp;&emsp;难道说它是为了报仇才留在这里的吗？绝对不是，世界上没有任何一类动物是专门为了报仇而活着的，它们不可能拿自己的全部生活当赌注，即使是人类，也不会有这样变态的想法，何况野生动物，它们总是向往和平和自由的。' +
      '<br>&emsp;&emsp;那么，到底是什么促使它坚持留下来呢？那就是它和小吉姆的感情。吉姆是唯一一个对它好的男孩，所以，它连带着不会伤害所有的孩子。' +
      '<br>&emsp;&emsp;威尼佩格狼死了以后，它的尸体被做成了标本，被一所中学收藏，可是一场大火，把所有的痕迹都烧掉了。' +
      '<br>&emsp;&emsp;然而，直到今天，威尼佩格狼小镇的教堂里的神职人员还肯定地说，每当教堂的钟声敲响的时候，在距离墓地一百步以外长满树木的森林里，总会听到那令人毛骨悚然的狼嚎。因为那里埋葬着那个唯一深爱威尼佩格狼的吉姆——那个也被威尼佩格狼深爱的少年。'
    }],
    // 闯关状态
    topicStype: 0,
    // 创关时间
    topicTimer: 0,
    // 错题列表
    wrongTopicList: [],
    // 勇挑战时间
    challengTimer: 0,
    // 闯关列表
    topicList: [{
      id: 1,
      titel: '作者西顿是__________，被誉为“世界动物小说之父”。',
      number: '第一关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '加拿大人',
      options: [
        {option: 'A', optionDetails: '美国人', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '英国人', standardAnswer: false, result: false},
        {option: 'C', optionDetails: '加拿大人', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '中国人', standardAnswer: false, result: false}]
    }, {
      id: 2,
      titel: '遛蹄的野马异常珍惜自己的________。',
      number: '第二关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '自由',
      options: [
        {option: 'A', optionDetails: '自由', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '生命', standardAnswer: false, result: false},
        {option: 'C', optionDetails: '皮毛', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '小母马', standardAnswer: false, result: false}]
    }, {
      id: 3,
      titel: '当小狐狸狄普被捉住时，母狐救不了它时，就将自己的孩子________。',
      number: '第三关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '毒死',
      options: [
        {option: 'A', optionDetails: '毒死', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '离弃', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 拽出来', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '枪杀', standardAnswer: false, result: false}]
    }, {
      id: 4,
      titel: '母狐用偷来的 ________ 喂养小狐狸。',
      number: '第四关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '母鸡',
      options: [
        {option: 'A', optionDetails: '母鸡', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '猎狗', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 小鸭', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '植物', standardAnswer: false, result: false}]
    }, {
      id: 5,
      titel: '真正关爱威尼派克狼和被威尼派克狼关爱的人是 ________。',
      number: '第五关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '吉姆',
      options: [
        {option: 'A', optionDetails: '吉姆', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '酒吧老板', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 神职人员', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '袭击人员', standardAnswer: false, result: false}]
    }, {
      id: 6,
      titel: '母狐利用铁路的方法进行报复，猎狐犬 _______ 就死在此方法下。',
      number: '第六关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '罗杰',
      options: [
        {option: 'A', optionDetails: '点子', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '罗杰', standardAnswer: true, result: false},
        {option: 'C', optionDetails: ' 巫利', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '狄普', standardAnswer: false, result: false}]
    }, {
      id: 7,
      titel: '信鸽阿诺最终在_______ 被找到。',
      number: '第七关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '巢穴里',
      options: [
        {option: 'A', optionDetails: '巢穴里', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '悬崖上', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 海面上', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '山谷里', standardAnswer: false, result: false}]
    }, {
      id: 8,
      titel: '西顿通过描写一些真实的动物，主要围绕动物 _______ 这一关键。',
      number: '第八关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '生存斗争',
      options: [
        {option: 'A', optionDetails: '悲惨命运', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '生存斗争', standardAnswer: true, result: false},
        {option: 'C', optionDetails: ' 与人类斗争', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '强大的力量', standardAnswer: false, result: false}]
    }, {
      id: 9,
      titel: '西顿笔下的故事没有表现动物们_______。',
      number: '第九关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '凶残的个性',
      options: [
        {option: 'A', optionDetails: '顽强的生命力 ', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '聪明的头脑', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 感人的真情', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '凶残的个性', standardAnswer: true, result: false}]
    }, {
      id: 10,
      titel: '以上四个小故事中，文章中没有提到以下哪种动物？',
      number: '第十关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '熊',
      options: [
        {option: 'A', optionDetails: '狐狸 ', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '母鸡', standardAnswer: false, result: false},
        {option: 'C', optionDetails: '野马', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '熊', standardAnswer: true, result: false}]
    }],
    //  排行榜
    topList: [
      {imgUrl: require('../images/乐创编/JINSHANSHAN.png'), title: '金闪闪', describe: '深圳南山实验小学五年级（2）班', score: '100', usedTime: '03：05'},
      {imgUrl: require('../images/乐创编/JINYOUYOU.png'), title: '金悠悠', describe: '深圳南山实验小学五年级（3）班', score: '90', usedTime: '04：10'},
      {imgUrl: require('../images/乐创编/JINGNAN.png'), title: '金娜娜', describe: '深圳宝安实验小学五年级（1）班', score: '80', usedTime: '02：55'},
      {imgUrl: require('../images/乐创编/JINGGANGAN.png'), title: '金敢敢', describe: '深圳坪洲小学五年级（1）班', score: '80', usedTime: '03：50'},
      {imgUrl: require('../images/乐创编/JINSHANSHAN.png'), title: '艾莉丝', describe: '深圳天骄小学五年级（4）班', score: '70', usedTime: '05：40'}],
    // 探议题状态
    discussionStype: 0,
    // 用户提议隐藏显示状态
    showUserDiscussion: false,
    //  探议题
    discussionMeun: [{
      act: '1',
      content: '&emsp;&emsp;为什么西顿的动物故事都以悲剧结尾呢？你喜欢这样的结尾吗？',
      discussionList: [
        {
          headerImg: require('../images/乐创编/JINSHANSHAN.png'),
          name: '金闪闪',
          time: '11-5  10:21',
          likeNumber: 120,
          isLiked: false,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '不喜欢这样的结尾'
        }]
    }, {
      act: '2',
      content: '&emsp;&emsp;有人说：西顿的动物小说最大的特点是“真实”，它是用小说的形式为动物写传记，写动物的生活，写动物最基本的感情——仇恨、寂寞、饥饿、痛苦等。除了这一点，你觉得西顿的动物小说还有哪些特点呢？',
      discussionList: [
        {
          headerImg: require('../images/乐创编/JINYOUYOU.png'),
          name: '方小直',
          time: '11-5  10:21',
          likeNumber: 120,
          isLiked: false,
          secDisNum: 5,
          secDisNumImg: require('../images/icon/Chat.png'),
          likeImg: require('../images/icon/thumbs.png'),
          discuss: '都是以悲剧结尾，看了让人难受。'
        }]
    }, {
      userDiscussionList: [],
      act: '3'
    }],
    //  乐创编
    createObj: {
      recommendImg: require('../images/home/thought04.png'),
      recommendBgImg: require('../images/bg.png'),
      discuss: '经典动物故事的结局',
      chooseImg: '',
      createList: []
    }
  }, {
    /* ======================================第五本书============================================ */
    bookID: '5',
    bookName: '合理推测那些消失的文明',
    bookImg: require('../images/home/picture5.jpg'),
    bookContent: '',
    bookIntroduce: '&emsp;&emsp;中国罗布荒原，曾经有一座气势宏伟、繁华一时的古城——楼兰。但是在距今1000多年前，这座古城竟一下子从中国的所有史册中消失了。为什么会消失？是怎样消失的？成了千古之谜。',
    bookTheme: '&emsp;&emsp;中国罗布荒原，曾经有一座气势宏伟、繁华一时的古城——楼兰。但是在距今1000多年前，这座古城竟一下子从中国的所有史册中消失了。为什么会消失？是怎样消失的？成了千古之谜。',
    bookGarde: 7.4, // 评分
    evaluationNumber: 400, // 评分
    releaseTime: '今日15:20', // 发布时间
    lookedNumber: 1233, // 参与人数
    lookedProgress: 40,
    isCollect: false,
    collectText: '+收藏',
    // 读群文状态
    readArticleStye: 0,
    // 读群文列表
    articleList: [{
      id: 1,
      titel: '玛雅文明为什么突然消失了？',
      imag: '',
      article: '<h1>玛雅文明为什么突然消失了？</h1>' +
      '<h2>月明日</h2>' +
      '<br>&emsp;&emsp;曾经辉煌一时的玛雅文明突然消失了，这究竟是为什么呢？历史学家、考古学家、地理学家众说纷纭。总的来说不外乎以下几种情况：' +
      '<br>&emsp;&emsp;生态危机说。自古以来，玛雅农民采用一种极原始的耕作法：他们先把树木统统砍光，过一段时间干燥以后，在雨季到来之前放火焚毁，以草木灰作肥料，覆盖住贫瘠的雨林土壤。烧一次种一茬，其后要休耕一到三年，有的地方甚至要长达六年，待草木长得比较茂盛之后再烧再种。当古典期文明繁盛、人口大增时，农业的压力越来越大，人们更多地毁林开荒，同时把休耕时间尽量缩短，这样一来，土壤肥力下降，玉米产量越来越少。当城市周围贫瘠的荒地连成一片，饥饿就迫使玛雅人弃城而去。经过百年衰败动荡之后，中央低地各城邦都湮没在热带丛莽之中，绿色植物悄悄覆盖起一切，像掩藏起一个久远的秘密。' +
      '<br>&emsp;&emsp;太阳周期说。美国佛罗里达州大学地质学家戴维•霍尔德在最近的研究中发现：玛雅文明的消失与太阳的周期性活动增强有关。每208年，当地就发生一次旱灾。最严重的一次发生在公元750年至850年，这正是玛雅文明消失的年代。而208年这个周期，和目前太阳活动每206年就有一次增强的周期正好吻合。专家们也认为，这两个周期的吻合，决不是偶然的巧合。霍尔德在地质学家上的研究，为解决这个历史之谜带来了突破。一些学者还猜测，在三大印第安文明中，玛雅文明尤其以天文历法和宗教体系著称，这或许也和旱灾的发生有关。也许在1000多年前，玛雅文明就已经发现，天体的运动和他们的生活息息相关，所以他们才会以一种古代印第安人中少有的热情和执着，来观察各类天体的运动。' +
      '<br>&emsp;&emsp;等级划分说。有学者认为，严格的等级划分是导致后古典期文明衰落之后，玛雅文明销声匿迹的首要原因。玛雅高深的知识和文明只掌握在极少数贵族和祭司的手中，而玛雅人口绝大多数的下层劳动者完全是文盲。这些养尊处优的贵族知识分子，在繁华殆尽后难以生存，乃至很快消失，也带走了辉煌无比的玛雅文明。留下来的为数众多的普通玛雅农民，自然无法读懂那些本来就一无所知的文字和史书了。'
    }, {
      id: 2,
      titel: '特奥蒂瓦砍突然衰落之谜',
      imag: '',
      article: '<h1>特奥蒂瓦砍突然衰落之谜</h1>' +
      '<h2>月明日</h2>' +
      '<br>&emsp;&emsp;特奥蒂瓦坎古城是墨西哥古印第安文化的城市遗址。位于今墨西哥城东北四十八千米处。名称在印第安语中意为神之都城或天神降生处。始建于公元前1世纪，至公元5世纪达到全胜，8世纪后半期遭外族人入侵而衰败。20世纪进行正式考古发掘。' +
      '<br>&emsp;&emsp;特奥蒂瓦坎古城的主要经济活动是手工业，其手工艺品美观大方，富有超凡的想像力。鼎盛时期的特奥蒂瓦坎城，已不仅是个宗教首府，同时也是一个朝气蓬勃的制陶工业中心，出产大量陶罐、火盆等各种各类陶器，以品质纯美、花样繁多著称。此外又用模子制造成千上万的小塑像，使用浮雕、直接上色和类似景泰蓝的珐琅彩釉等不同的制作方法。' +
      '<br>&emsp;&emsp;特奥蒂瓦坎最具特色的产品是鼎状陶罐，有三只扁足，罐口有盖，他们的这种陶器手工业，使中美洲各地的贸易广泛发展起来。同时，该城的农业也有相当水平，能修筑梯田，挖渠灌溉，种植玉米、番茄、南瓜、可可、棉花和烟草等作物。由于城市日益繁荣，商业也随之发展起来。外地的棉花、纺织品、玉石、朱砂和黑曜石等商品在市场上随处可以买到。有人认为，特奥蒂瓦坎垄断了黑曜石制品的生产和买卖。黑曜石是一种火山岩石，很像绿色或黑色的玻璃，硬度很高，可以作为武器使用。对当时的中美洲人来说，黑曜石就像现代人的钢铁。' +
      '<br>&emsp;&emsp;然而，就是这样的一个生气勃勃、繁荣富足的名城，为什么惨遭废弃突然衰亡呢？' +
      '<br>&emsp;&emsp;千年时光的流逝，并未驱散笼罩在特奥蒂瓦坎神秘和悬念，面对着重重迷雾，最简单的一种说法是遭到了外敌入侵。但是，特奥蒂瓦坎的社会发展水平，诸如组织能力、科学技术、经济实力等方面，远远领先于当时美洲的其他所有民族。如果说这样一种文明会被某些尚未开化的原始民族的入侵而灭亡，那无异于像是说今天科学技术高度发达的美国会在一夜之间被某个美洲或非洲的土著部落消灭一样，实在令人难以置信。' +
      '<br>&emsp;&emsp;另一些考古学家勘探了一些遗迹后认为特奥蒂瓦坎后期曾经发生过大火灾，有些大火好像还有人为施放的痕迹。他们相信，火灾就是这座古城衰落的原因。那么，纵火者是谁？为什么？是敌对的入侵者，还是特奥蒂瓦坎人自己？' +
      '<br>&emsp;&emsp;还有人认为，特奥蒂瓦坎的衰亡是内部斗争引起的。但是从内乱到崩溃、衰亡，总要先引起整个社会内部的巨变和阵痛，总要有一个量变到质变的时间和过程，绝没有一下子就消亡的道理。还有，特奥蒂瓦坎衰亡后，它那么多卓越非凡的智者、精英、能工巧匠以及几十万的居民都到哪里去了呢？如果说他们融合在周围的其他民族中了，那他们掌握的高度发达的科学技术，怎么也消失得无影无踪了呢？' +
      '<br>&emsp;&emsp;随着特奥蒂瓦坎发掘和研究的不断深入，使得考古学家们陷入更多的魔团，变得越来越迷茫。其中众多的证据，都可以使人得出相互矛盾的结论。倒是最先发现特奥蒂瓦坎遗址的阿兹特克人说得最简明而清楚：神建造了特奥蒂瓦坎，又离开了特奥蒂瓦坎。'
    }, {
      id: 3,
      titel: '黄金之国的传说',
      imag: '',
      article: '<h1>黄金之国的传说</h1>' +
      '<h2>[日]庄司浅水</h2>' +
      '<br>&emsp;&emsp;当哥伦布横渡大西洋、到达新大陆的消息传开之后，全欧洲的青年们都活跃起来了。' +
      '<br>&emsp;&emsp;“太好了，我也去新大陆捞它一把。”' +
      '<br>&emsp;&emsp;　当时怀有这种野心的人确实不少。出生于西班牙的弗朗西斯科•皮萨罗就是其中一个。皮萨罗自愿参加开赴美洲的部队，到达新大陆后，他又加入了巴尔波总督率领的军队。他们横越了巴拿马地峡，看到了“大南海”（太平洋）。' +
      '<br>&emsp;&emsp;皮萨罗因横越巴拿马地峡有功，被晋升为下士官。有一天，他在酒馆喝酒的时候，听一个农民讲：“据印第安人说，从这里一直向南走去，那里有一个印加帝国，那儿可是一个黄金遍地的国家呀！”' +
      '<br>&emsp;&emsp;被这种传说搅得神魂颠倒的皮萨罗，在得到巴尔波总督允许之后，于1525年1月，率领一百二十名士兵，分乘三艘帆船，从巴拿马出发了。但由于遭到强烈风暴，船队偷偷地窥视一下，就匆匆忙忙的返航了。 ' +
      '<br>&emsp;&emsp;1532年，皮萨罗率领一百八十名士兵，携带二十七匹马，两门小炮，分乘两艘帆船，两次来到印加帝国。不久，阿尔马格罗队长指挥的一百吨级“伊莎贝拉”号帆船，载着八十名士兵，十八匹马，几条狗，外加六门大炮，在皮萨罗的接应下也来到这里。' +
      '<br>&emsp;&emsp;当时印加帝国的领土北起哥伦比亚，南至阿根廷，蜿蜒四千多公里，面积达二百四十多万平方千米，拥有很高的文化。九世纪初，印加人已经在安第斯山脉东部的一个海拔三千几百米高的山顶上，用花岗岩建造起了宏伟的都城，起名为马楚皮克楚。在马楚皮克楚，还专门为皇帝建造了宏伟的神庙、宫殿和阳台。在神庙的祭坛上，用一块一百多吨重的花岗岩石板，建造起一个祭台。这些石料建筑没有用一点儿灰浆和水泥，但一点儿也看不出石块与石块之间的缝隙。' +
      '<br>&emsp;&emsp;后来，因为人口不断增加，食物和用水发生了困难，部落从山区迁移到库斯科高原，在的的喀喀湖的西北面建起了美丽的库斯科城。因为印加人得到了大量黄金，所以无论制作什么东西，都用黄金，就像我们今天使用钢铁那样随便。崇拜太阳神的印加人认为，黄澄澄的金子很像太阳的光辉，所以在建造神庙和宫殿时，大量使用黄金。' +
      '<br>&emsp;&emsp;印加帝国在16世纪初达到全盛时期。生产以农业为主，土地全部属于国有，国民可以得到足够的土地耕种。六十岁以上的人不劳动可以得到国家照顾，并设有养老院、医院、寡妇之家等。' +
      '<br>&emsp;&emsp;印加人第一次看到皮萨罗一伙时，吓得魂不附体。他们还是第一次看见马。当时皮萨罗的军队总共不到一百七十人，装备也不过是十三支火枪、两门大炮、二十匹马罢了。而印加军队如何呢？据说有五万七千人之多，可是皮萨罗的军队没有遇到任何抵抗就占领了卡哈马卡城。' +
      '<br>&emsp;&emsp;之后，皮萨罗假借设宴招待阿塔瓦尔帕皇帝，把他骗来卡哈马卡。从印加帝国首都库斯科城到卡哈马卡有一千二百多公里的路程，在当时交通极不发达的情况下，起码要走一个月。' +
      '<br>&emsp;&emsp;阿塔瓦尔帕皇帝和他的随从们经过长途跋涉，风尘仆仆地来到卡哈马卡。但万万没有想到，惨无人道的皮萨罗竟然将皇帝的二千多名赤手空拳的卫兵杀死，将皇帝扣起来做人质，要求皇帝用装满关押他的房间那样多的黄金来赎身。当时关押皇帝的那间房子长七米，宽五米，高三米左右。我们可以算一算，这样大的一间房子得需要多少黄金才能填满呀！' +
      '<br>&emsp;&emsp;皇帝的使者被放回去后，很快就收集到能堆满那间房子而且有余的黄金。然而皮萨罗到底是一个心毒手狠的家伙。当他得到这一大笔赎金之后，立即给阿塔瓦尔帕皇帝扣上一个谋反的罪名，将皇帝处死了。皮萨罗杀死皇帝以后，他的魔爪又贪婪地伸向了库斯科城。他向他的部下说道：“听说首都库斯科城的神庙和宫殿里，收藏着无数的财宝。太阳尼僧院里还有一百名侍候太阳神的美丽的姑娘。我们快去那里呀！”' +
      '<br>&emsp;&emsp;皮萨罗的军队一路上烧、杀、抢、掠无恶不作。一个月以后，皮萨罗的军队虽然开进了库斯科城，但是，他们在宫殿和神庙里什么也没有捞到，太阳尼僧院里也是空空如也。原来库斯科城的居民们早就听到皮萨罗军队的残暴行径，在他们没来到之前，就已经带着历代皇帝、皇后的木乃伊和皇宫里的无数财宝逃走了。尼僧院的姑娘们也不见了。' +
      '<br>&emsp;&emsp;有一群印加人悄悄地出现在的的咯咯湖畔。因为传说的的咯咯湖畔是印加人所崇拜的太阳神、月亮神的儿子下凡创建的印加帝国的地方。这一群从库斯科城逃出来的印加人，携带者印加帝国皇帝和皇后的木乃伊以及无数的珠宝乘坐芦苇筏子向湖心划去。到湖中心时，一个神官站了起来，冲天祈祷之后，将筏子上面的东西，一件一件地投入湖中。' +
      '<br>&emsp;&emsp;尼僧院的一百名尼姑又怎么样了呢？据说，这些姑娘们逃出库斯科城后，穿过一条秘密的近路，来到印加帝国的古都——马楚皮克楚，在那里默默地侍奉着太阳神。' +
      '<br>&emsp;&emsp;皮萨罗因侵占印加帝国有功，西班牙国王封了他个侯爵，并任命他为秘鲁总督。后来他由于受到同伙的妒忌，1541年6月26日被暗杀了，死时六十五岁。从那以后，印加帝国沦为西班牙的殖民地。又过了三百年，这块土地上的主人宣布独立，这就是今天的秘鲁。'
    }, {
      id: 4,
      titel: '古巴比伦的悲哀',
      imag: '',
      article: '<h1>古巴比伦的悲哀</h1>' +
      '<h2>古巴比伦的悲哀</h2>' +
      '<br>&emsp;&emsp;底格里斯河与幼发拉底河流域的美索不达米亚平原大约在公元前19世纪就孕育了有史以来最早的文明——古巴比伦文明。这个地区没有天然的屏障，所以产生了古巴比伦多样化的文化发展趋势。' +
      '<br>&emsp;&emsp;底格里斯河和幼发拉底河中间的地方叫“美索不达米亚”，意思就是“两河之间”。每年春天，高原地区的积雪融化，这两条河就在美索不达米亚泛滥成灾。特别是下游一带，地势低凹，几乎全被淹没。一个流传到今天的巴比伦神话，生动地反映了这种情形：一位巴比伦国王的祖先梦见他遇到了神仙。神告诉他，洪水就要淹没大地，来惩罚人类的罪恶。因为他一向对神十分虔诚，所以神要搭救他。这个人听从神的吩咐，造了一只方舟，把全家人都搬到舟上，还带了几只动物和一些种子。没过多久，乌云布满天空，黑暗笼罩了大地，狂风暴雨袭来，滔滔洪水淹没了一切生命，只有那只方舟在茫茫无边的水面上漂行。到了第七天，风住了，河水平静下来。这时候，方舟漂到一座山旁。舟上的人把动物放出方舟，将种子撒在山上，大地的生命重新开始了。人类许多民族的神话都受到巴比伦这个古老传说的影响。西方著名的诺亚方舟的故事也是从这个传说演变来的。' +
      '<br>&emsp;&emsp;巴比伦人在和洪水斗争中，学会了修堤筑坝，开渠造河。当洪水被制服以后，他们和埃及人一样，也享受到了河流定期泛滥的好处。泛滥的洪水带来大量淤泥，使两岸的土壤变得十分肥沃。再加上这里阳光强烈，水量充足，庄稼年年丰收。据说，小麦最早就是生长在巴比伦的。 ' +
      '<br>&emsp;&emsp;住在巴比伦北面的亚述人十分强悍。公元前8世纪（中国已经进入春秋时代），亚述成为一个庞大的军事帝国。巴比伦被它征服了，叙利亚、腓尼基、巴勒斯坦、小亚细亚、埃及，也都先后归入它的版图。除了希腊和意大利，地中海沿岸几乎都被它占领了。亚述的首都叫尼尼微，那里修建了许多宏伟的宫殿。' +
      '<br>&emsp;&emsp; 公元前612年，居住在巴比伦的迦勒底人联合东边的米堤亚人进攻亚达。他们手执带血的长矛和盾牌冲进了尼尼微。全城居民遭到屠杀，甚至连儿童也不能幸免。亚述最后一代国王辛沙立希孔和他的宫殿一起被烧成灰烬。从此，这个庞大帝国连同它的首都就从地面上消失了。'
    }],
    // 闯关状态
    topicStype: 0,
    // 创关时间
    topicTimer: 0,
    // 错题列表
    wrongTopicList: [],
    // 勇挑战时间
    challengTimer: 0,
    // 闯关列表
    topicList: [{
      id: 1,
      titel: '玛雅文明在人口增长之后所面临的问题是_________.',
      number: '第一关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '以上三项都是',
      options: [
        {option: 'A', optionDetails: '生态环境恶化', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '生活资源枯竭 ', standardAnswer: false, result: false},
        {option: 'C', optionDetails: '生产供应不足', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '以上三项都是', standardAnswer: true, result: false}]
    }, {
      id: 2,
      titel: '关于玛雅文明消失的原因，文章没有提到以下哪种学说？',
      number: '第二关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '地震说',
      options: [
        {option: 'A', optionDetails: '地震说 ', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '生态危机说 ', standardAnswer: false, result: false},
        {option: 'C', optionDetails: '太阳周期说', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '等级划分说', standardAnswer: false, result: false}]
    }, {
      id: 3,
      titel: '特奥蒂瓦坎古城是 ________ 的发源地。',
      number: '第三关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '古印第安文化',
      options: [
        {option: 'A', optionDetails: '古巴比伦', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '玛雅文明', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 古印第安文化', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '古印度文明', standardAnswer: false, result: false}]
    }, {
      id: 4,
      titel: '特奥蒂瓦坎古城的主要的经济活动是 ________。',
      number: '第四关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '手工业',
      options: [
        {option: 'A', optionDetails: '手工业', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '农业', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 工业', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '建筑业', standardAnswer: false, result: false}]
    }, {
      id: 5,
      titel: '印加帝国的领土北起 ________。',
      number: '第五关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '哥伦比亚',
      options: [
        {option: 'A', optionDetails: '阿根廷', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '哥伦比亚', standardAnswer: true, result: false},
        {option: 'C', optionDetails: ' 马楚皮克楚', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '库斯科城', standardAnswer: false, result: false}]
    }, {
      id: 6,
      titel: '巴比伦在和 ________ 斗争中学会了修堤建坝。',
      number: '第六关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '洪水',
      options: [
        {option: 'A', optionDetails: '洪水', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '干旱', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 泥石流', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '地震', standardAnswer: false, result: false}]
    }, {
      id: 7,
      titel: '玛雅文明以 ________ 著称。',
      number: '第七关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '天文历法',
      options: [
        {option: 'A', optionDetails: '天文历法', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '手工陶瓷', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 象形文字', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '运输工具', standardAnswer: false, result: false}]
    }, {
      id: 8,
      titel: '特奥蒂瓦坎在 ________ 没有领先当时美洲的其他民族。',
      number: '第八关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '武器',
      options: [
        {option: 'A', optionDetails: '组织能力', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '科学技术', standardAnswer: false, result: false},
        {option: 'C', optionDetails: '经济实力 ', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '武器', standardAnswer: true, result: false}]
    }, {
      id: 9,
      titel: '印加帝国的都城是 ________。',
      number: '第九关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '马楚皮克楚',
      options: [
        {option: 'A', optionDetails: '马楚皮克楚', standardAnswer: true, result: false},
        {option: 'B', optionDetails: '库斯科城', standardAnswer: false, result: false},
        {option: 'C', optionDetails: ' 卡哈马卡 ', standardAnswer: false, result: false},
        {option: 'D', optionDetails: '阿瓜迪卡城', standardAnswer: false, result: false}]
    }, {
      id: 10,
      titel: '以上几种古代文明的消失都与________ 有关。',
      number: '第十关',
      origin: '',
      isAnswered: false,
      analyze: '',
      rightAnwser: '人类自身 ',
      options: [
        {option: 'A', optionDetails: '自然灾害 ', standardAnswer: false, result: false},
        {option: 'B', optionDetails: '外星人侵入', standardAnswer: false, result: false},
        {option: 'C', optionDetails: '人类自身 ', standardAnswer: true, result: false},
        {option: 'D', optionDetails: '内部暴乱', standardAnswer: false, result: false}]
    }],
    //  排行榜
    topList: [
      {imgUrl: require('../images/乐创编/JINSHANSHAN.png'), title: '金闪闪', describe: '深圳南山实验小学五年级（2）班', score: '100', usedTime: '03：05'},
      {imgUrl: require('../images/乐创编/JINYOUYOU.png'), title: '金悠悠', describe: '深圳南山实验小学五年级（3）班', score: '90', usedTime: '04：10'},
      {imgUrl: require('../images/乐创编/JINGNAN.png'), title: '金娜娜', describe: '深圳宝安实验小学五年级（1）班', score: '80', usedTime: '02：55'},
      {imgUrl: require('../images/乐创编/JINGGANGAN.png'), title: '金敢敢', describe: '深圳坪洲小学五年级（1）班', score: '80', usedTime: '03：50'},
      {imgUrl: require('../images/乐创编/JINSHANSHAN.png'), title: '艾莉丝', describe: '深圳天骄小学五年级（4）班', score: '70', usedTime: '05：40'}],
    // 探议题状态
    discussionStype: 0,
    // 用户提议隐藏显示状态
    showUserDiscussion: false,
    //  探议题
    discussionMeun: [{
      act: '1',
      content: '&emsp;&emsp;一个文明古国突然消失，大概有哪些原因？请你根据上面这些文章梳理总结。',
      discussionList: []
    }, {
      act: '2',
      content: '&emsp;&emsp;请你查阅一些关于古楼兰的资料，根据上面关于文明古国突然消失的原因的梳理总结，大胆做出自己的推测。',
      discussionList: []
    }, {
      userDiscussionList: [],
      act: '3'
    }],
    //  乐创编
    createObj: {
      recommendImg: require('../images/home/thought05.png'),
      recommendBgImg: require('../images/bg.png'),
      discuss: '合理推测那些消失的文明',
      chooseImg: '',
      createList: []
    }
  }]
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
