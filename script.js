const makeScores = (...entries) => Object.fromEntries(entries);
const makeTraits = (heart, polish, drive, bond, spark) => ({
  heart,
  polish,
  drive,
  bond,
  spark
});

const dimensions = {
  heart: {
    name: "真心浓度",
    low: "你会保护内心，不轻易把太多感受摆到台面上。",
    high: "你很难把重要的人和情绪只当成“就那样吧”。"
  },
  polish: {
    name: "体面雷达",
    low: "你不太愿意为了好看而多绕一圈。",
    high: "你对形象、场面和赢法的敏感度一直在线。"
  },
  drive: {
    name: "执行压强",
    low: "你更像先蓄力的人，不急着立刻出手。",
    high: "你习惯先推进，再在路上修正。"
  },
  bond: {
    name: "关系执念",
    low: "你不会把所有关系都抓得很紧。",
    high: "重要的人和局，对你来说真的是重要。"
  },
  spark: {
    name: "野生直觉",
    low: "你更依赖秩序、节奏和可控感。",
    high: "你很相信那一下突然对了的感觉。"
  }
};

const profiles = {
  tomori: {
    name: "高松灯",
    band: "MyGO!!!!!",
    alias: "把心事攥成星星的人",
    overview: "你不是轻飘飘地活着的人。很多别人路过就算了的瞬间，你会认真放进心里反复感受，所以你看起来安静，实际内里非常深。",
    tags: ["敏感真诚", "慢热但深", "意义感很重"],
    strengths: ["能看见别人忽略的情绪细节", "一旦认定就很认真", "表达虽慢，但真心浓度很高"],
    blindSpot: "容易把很多事都当真，也容易因为太在意而把自己困住。你不是不想说，只是怕说了还是没有被听懂。",
    connection: "你对关系的期待不是热闹，而是被真正看见。别人一句认真回应，可能会在你心里留很久。",
    role: "写词的人、把乐队真正灵魂留下来的人、让大家想起“我们为什么开始”的那个人。",
    shareLine: "我测出来是高松灯型：安静是真安静，真心也是真的很重。",
    accent: "linear-gradient(160deg, #31446d, #7391d3)"
  },
  anon: {
    name: "千早爱音",
    band: "MyGO!!!!!",
    alias: "先把场子撑住的人",
    overview: "你很懂得进入场域，也知道怎样让自己看起来不狼狈。你不一定每一步都百分百有底，但你很会先把局面打开，再边走边补。",
    tags: ["社交感强", "适应快", "体面感在线"],
    strengths: ["能迅速融入陌生环境", "懂得用轻松感减压", "翻车之后还有很强的补救本能"],
    blindSpot: "有时候会先装得很会，心里却在疯狂打补丁。你很怕自己显得笨拙，所以偶尔会比真实状态更用力。",
    connection: "你希望被喜欢，也希望自己拿得出手。你很会让关系开始，但也需要有人接住你那些没那么轻松的时候。",
    role: "对外窗口、气氛调节器、能把大家从尴尬里拎出来的人。",
    shareLine: "我测出来是千早爱音型：先别慌，场子和体面我都尽量给你保住。",
    accent: "linear-gradient(160deg, #b55363, #ef9e7f)"
  },
  taki: {
    name: "椎名立希",
    band: "MyGO!!!!!",
    alias: "嘴硬手快的护短型选手",
    overview: "你不太信空话，更信事情有没有被做成。你急、你直、你容易烦，但你的责任感也是真的强，尤其一旦把谁划进自己人范围，就会很难不管。",
    tags: ["行动派", "护短", "边界清晰"],
    strengths: ["关键时刻很能顶住", "执行力强，不爱空转", "虽然不温柔包装，但很可靠"],
    blindSpot: "你太容易被低效和含糊点着火，明明是在意，表达出来却像在发脾气。",
    connection: "你不擅长把好听话挂在嘴边，但会用行动护人。你能接受复杂，却不接受含混和不负责。",
    role: "推进器、节奏机、在所有人快散掉时把活硬扛起来的人。",
    shareLine: "我测出来是椎名立希型：嘴不一定甜，但事我真会做。",
    accent: "linear-gradient(160deg, #364153, #7d8694)"
  },
  soyo: {
    name: "长崎爽世",
    band: "MyGO!!!!!",
    alias: "把局面稳得很漂亮的人",
    overview: "你很会照顾气氛，也很懂得在关系里找到合适位置。你表面上的温柔和周到不是假的，只是你也没那么容易放手，很多执念都藏在平静下面。",
    tags: ["温柔稳场", "会读空气", "关系导向"],
    strengths: ["擅长维持局面与秩序", "照顾他人时非常细腻", "能在复杂关系里找到操作空间"],
    blindSpot: "你太清楚失去是什么感觉，所以有时会下意识地想把重要的人和东西留在自己能控制的范围里。",
    connection: "你既想被需要，也想确认自己对别人来说是特别的。你会照顾关系，但不是无欲无求地照顾。",
    role: "润滑剂、关系接口、让乐队看起来还能继续运转的人。",
    shareLine: "我测出来是长崎爽世型：看着温柔，其实对重要的人和局很有执念。",
    accent: "linear-gradient(160deg, #7a5472, #d7a6b5)"
  },
  rana: {
    name: "要乐奈",
    band: "MyGO!!!!!",
    alias: "按直觉拐弯的猫系自由人",
    overview: "你不是不认真，你只是对“有趣、对味、值得靠近”的判断特别诚实。你不爱解释，也不太愿意为了融入而磨平自己，灵感来了就会非常亮。",
    tags: ["自由", "直觉强", "猫系天才"],
    strengths: ["对新鲜感和灵感反应快", "不容易被无聊规则套住", "在关键时刻能给出很独特的解法"],
    blindSpot: "你太看感觉，容易让别人追不上你的节奏。你不是故意消失，只是经常被更有意思的风景拐走。",
    connection: "你喜欢能一起乱晃、不逼问、不强行定义的关系。越是被框住，你越想溜。",
    role: "天才位、灵感位、让作品突然发光的人。",
    shareLine: "我测出来是要乐奈型：像猫，也像突然拐进来的一小段天才。",
    accent: "linear-gradient(160deg, #314f3b, #9cbf57)"
  },
  sakiko: {
    name: "丰川祥子",
    band: "Ave Mujica",
    alias: "连崩溃都想维持体面的人",
    overview: "你对自己要求很高，甚至高到不愿意让别人看见你狼狈的样子。你既骄傲又理想主义，既想掌控，也真的想把一切做到配得上那个标准。",
    tags: ["高要求", "掌控欲", "骄傲又脆"],
    strengths: ["目标感和审美标准都很高", "在混乱里依然会维持姿态", "有把一件事做成作品的野心"],
    blindSpot: "你太不想输，也太不想被看见脆弱，所以很容易一个人扛到快断掉，还要装作一切都在计划内。",
    connection: "你希望别人理解你真正的心气，但又很难允许自己低头。你对关系的防线很高，越重要越难示弱。",
    role: "总策划、世界观搭建者、把“随便做做”视为侮辱的人。",
    shareLine: "我测出来是丰川祥子型：可以输局势，但不能输姿态。",
    accent: "linear-gradient(160deg, #1f2230, #77506d)"
  },
  mutsumi: {
    name: "若叶睦",
    band: "Ave Mujica",
    alias: "把整片海缩进沉默里的人",
    overview: "你很多时候不是没有感受，而是感受太多，反而很难顺畅地拿出来说。别人看到的是安静和迟钝，你心里其实藏着很长很复杂的回声。",
    tags: ["寡言", "压抑感", "内里很深"],
    strengths: ["对细微变化非常敏感", "不会随便表态，但一旦动心就很真", "沉默里有很强的观察和承受力"],
    blindSpot: "你太容易把情绪和误会都往里咽，外面的人看不见，你自己却会越积越重。",
    connection: "你不是不在乎关系，而是太在乎了，才会更怕说错、怕添乱、怕自己不够好。",
    role: "低频感应器、把暗流全部接住的人、安静但很难被替代的存在。",
    shareLine: "我测出来是若叶睦型：话不多，但心里那片海一点也不浅。",
    accent: "linear-gradient(160deg, #526176, #90a8bf)"
  },
  uika: {
    name: "三角初华",
    band: "Ave Mujica",
    alias: "会发光，也会爱得很绝对的人",
    overview: "你既有舞台感，也有很强的情感投入。你看起来能量很足、很会发光，但真正驱动你的，往往不是表面热闹，而是那些你非常在意的人和瞬间。",
    tags: ["投入型", "舞台感", "感情很满"],
    strengths: ["感染力强，容易把热度点起来", "喜欢谁、在意什么都很真", "既能营业也能真情上场"],
    blindSpot: "你一旦认真喜欢某个人、某件事，就容易烧得太满。热烈是优点，失衡时也会很明显。",
    connection: "你想要的是带回应的热情。你会主动靠近，也希望自己的认真不是单向投递。",
    role: "主舞台、聚光点、把情绪和魅力一起推到最前面的人。",
    shareLine: "我测出来是三角初华型：能发光，也很容易为重要的人认真过头。",
    accent: "linear-gradient(160deg, #be6b3a, #efbf7a)"
  },
  umiri: {
    name: "八幡海铃",
    band: "Ave Mujica",
    alias: "把情绪折叠整齐的专业选手",
    overview: "你很清楚自己在做什么，也习惯用结果证明自己。你未必冷，只是比起把情绪摊开来，你更擅长把它们收好，然后把事先做成。",
    tags: ["冷静", "专业", "效率优先"],
    strengths: ["执行力稳定，工作质量高", "不容易被情绪拖偏", "知道什么时候该出手、出到什么程度"],
    blindSpot: "你对失控和低效容忍度很低，所以容易显得疏离。很多时候不是没感情，只是你不打算让情绪接管系统。",
    connection: "你更信靠谱，而不是热烈。想走近你的人，得先让你觉得这段关系有真实的分量。",
    role: "技术位、稳定器、在幕后把完成度抬起来的人。",
    shareLine: "我测出来是八幡海铃型：先把事做好，情绪可以以后再聊。",
    accent: "linear-gradient(160deg, #2b3342, #6685a0)"
  },
  nyamu: {
    name: "祐天寺若麦",
    band: "Ave Mujica",
    alias: "天生懂镜头也懂规则的野心家",
    overview: "你很清楚人会被什么吸引，也很清楚怎样让自己不被埋没。你不是空有表现欲，而是对舞台、机会和现实规则都有天然嗅觉。",
    tags: ["镜头感", "野心", "现实敏锐"],
    strengths: ["存在感强，知道怎么抓注意力", "目标明确，很会利用场域", "既能玩得开，也很懂现实怎么算"],
    blindSpot: "你太知道怎么赢了，所以有时会显得用力、显得算。别人看到的是野心，你自己知道那里面也有不想被忽视的焦虑。",
    connection: "你希望被看到，也希望自己配得上被看到。对你来说，喜欢和认可是分不开的。",
    role: "话题制造机、舞台经营者、把关注度引到自己和团队身上的人。",
    shareLine: "我测出来是祐天寺若麦型：镜头别关，我还没演完。",
    accent: "linear-gradient(160deg, #7a314e, #f07aa1)"
  }
};

const questions = [
  {
    prompt: "刚到一个半熟不熟的局，你通常会：",
    options: [
      {
        title: "先缩在边上读空气",
        text: "让心里先有个底，再决定自己怎么出现。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 2, 1)
      },
      {
        title: "马上给自己找个切入口",
        text: "至少别让自己像个落单背景板。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 2, 2, 2)
      },
      {
        title: "谁缺人手我就先顶上",
        text: "有事做反而更自然，省得尬站着。",
        scores: makeScores(["taki", 3], ["umiri", 2]),
        traits: makeTraits(2, 2, 4, 2, 1)
      },
      {
        title: "先被有意思的东西拐跑",
        text: "先按感觉移动，别急着合群。",
        scores: makeScores(["rana", 3], ["uika", 2]),
        traits: makeTraits(3, 1, 1, 1, 4)
      }
    ]
  },
  {
    prompt: "朋友回你消息忽快忽慢，你心里更像：",
    options: [
      {
        title: "完了，我是不是说错话了",
        text: "嘴上不说，心里已经开始小作文。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "先发个表情包装没事",
        text: "至少场面别先死在这里。",
        scores: makeScores(["anon", 3], ["nyamu", 1]),
        traits: makeTraits(2, 4, 2, 2, 2)
      },
      {
        title: "先不说，但这事我记住了",
        text: "下次要么说清楚，要么少浪费时间。",
        scores: makeScores(["taki", 2], ["umiri", 3]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "先给对方找个台阶下",
        text: "但我会悄悄记住这段关系现在是什么温度。",
        scores: makeScores(["soyo", 3], ["sakiko", 2]),
        traits: makeTraits(2, 4, 2, 4, 1)
      }
    ]
  },
  {
    prompt: "你更容易被哪种瞬间击中？",
    options: [
      {
        title: "一句别人说完就忘的话",
        text: "但我会记很久。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "所有人突然都在看我",
        text: "而且我刚好状态不错。",
        scores: makeScores(["nyamu", 3], ["anon", 2]),
        traits: makeTraits(2, 4, 3, 2, 3)
      },
      {
        title: "关键时刻真有人扛住了",
        text: "那种靠谱会让我立刻加分。",
        scores: makeScores(["taki", 3], ["umiri", 2]),
        traits: makeTraits(2, 2, 4, 2, 1)
      },
      {
        title: "那种一秒点亮全场的瞬间",
        text: "像舞台灯忽然全亮了。",
        scores: makeScores(["uika", 3], ["rana", 2]),
        traits: makeTraits(3, 3, 2, 2, 4)
      }
    ]
  },
  {
    prompt: "如果要和人一起做项目，你最容易变成：",
    options: [
      {
        title: "会一直追问“我们到底想说啥”的人",
        text: "方向不对，做再多都像空转。",
        scores: makeScores(["tomori", 2], ["sakiko", 2], ["uika", 1]),
        traits: makeTraits(4, 2, 2, 2, 2)
      },
      {
        title: "先把场子和门面都架起来的人",
        text: "至少大家看上去先像一支队伍。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 3, 2, 2)
      },
      {
        title: "会说“别聊了先开干”的人",
        text: "先别聊理想，先动。",
        scores: makeScores(["taki", 3], ["umiri", 2]),
        traits: makeTraits(1, 2, 4, 2, 1)
      },
      {
        title: "一边稳人心一边稳流程的人",
        text: "别让项目先死于内部爆炸。",
        scores: makeScores(["soyo", 3], ["sakiko", 2]),
        traits: makeTraits(2, 4, 3, 4, 1)
      }
    ]
  },
  {
    prompt: "你更怕哪种社交事故？",
    options: [
      {
        title: "认真说的话被当成怪发言",
        text: "那种错位感很伤。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "在所有人面前当场社死",
        text: "我可以失误，但别在那么多人面前。",
        scores: makeScores(["anon", 2], ["nyamu", 3]),
        traits: makeTraits(2, 4, 3, 1, 2)
      },
      {
        title: "磨了半天结果还在原地",
        text: "比丢脸更让我崩溃。",
        scores: makeScores(["umiri", 3], ["taki", 2]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "表面和气，背地里已经裂了",
        text: "这种暗流最难处理。",
        scores: makeScores(["soyo", 3], ["sakiko", 1], ["uika", 1]),
        traits: makeTraits(2, 4, 2, 4, 1)
      }
    ]
  },
  {
    prompt: "你被夸奖时，最吃这一套：",
    options: [
      {
        title: "“你真的很会认真喜欢东西”",
        text: "这种评价会让我安静高兴很久。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 2, 2)
      },
      {
        title: "“有你在就不会冷场”",
        text: "这说明我场子没白撑。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 2, 2, 2)
      },
      {
        title: "“这事交给你我就放心了”",
        text: "这种夸法非常对我胃口。",
        scores: makeScores(["taki", 2], ["umiri", 3]),
        traits: makeTraits(1, 2, 4, 2, 1)
      },
      {
        title: "“你一来，整个画面就对了”",
        text: "很像在夸我的存在方式。",
        scores: makeScores(["uika", 3], ["rana", 2]),
        traits: makeTraits(3, 3, 2, 2, 4)
      }
    ]
  },
  {
    prompt: "计划临时取消，你通常会：",
    options: [
      {
        title: "会闷闷地失落好一阵",
        text: "因为我已经认真期待过了。",
        scores: makeScores(["tomori", 2], ["mutsumi", 2], ["uika", 1]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "脑子里立刻开第二套方案",
        text: "今天总不能就这么塌了。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 3, 1, 2)
      },
      {
        title: "骂两句就直接切备用路线",
        text: "抱怨可以有，活还是得接着过。",
        scores: makeScores(["taki", 3], ["umiri", 2]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "算了，干脆顺着意外乱逛",
        text: "说不定会拐出更好玩的东西。",
        scores: makeScores(["rana", 3], ["uika", 2]),
        traits: makeTraits(2, 1, 1, 1, 4)
      }
    ]
  },
  {
    prompt: "你做决定时更依赖：",
    options: [
      {
        title: "那个解释不清但一直在响的直觉",
        text: "讲不明白，不代表它不存在。",
        scores: makeScores(["tomori", 2], ["rana", 2], ["mutsumi", 1]),
        traits: makeTraits(4, 1, 1, 2, 4)
      },
      {
        title: "这条路够不够体面、够不够顺",
        text: "做法和做相都不能太难看。",
        scores: makeScores(["anon", 2], ["nyamu", 2], ["sakiko", 1]),
        traits: makeTraits(2, 4, 2, 2, 2)
      },
      {
        title: "哪种做法最省事、最能解题",
        text: "情绪可以等，卡点不能等。",
        scores: makeScores(["umiri", 3], ["taki", 2]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "怎么做最不容易把局搞砸",
        text: "不是每个问题都适合硬砍。",
        scores: makeScores(["soyo", 3], ["sakiko", 2]),
        traits: makeTraits(2, 4, 2, 4, 1)
      }
    ]
  },
  {
    prompt: "你更像哪种嘴硬选手？",
    options: [
      {
        title: "越在意越说不出来",
        text: "最后全变成沉默。",
        scores: makeScores(["mutsumi", 3], ["tomori", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "心里发虚，脸上还得装稳",
        text: "场面不能先输。",
        scores: makeScores(["anon", 2], ["nyamu", 2], ["sakiko", 1]),
        traits: makeTraits(2, 4, 2, 1, 2)
      },
      {
        title: "明明在担心，开口却像在凶人",
        text: "我知道，但就是改不太掉。",
        scores: makeScores(["taki", 3], ["umiri", 1]),
        traits: makeTraits(2, 1, 4, 3, 1)
      },
      {
        title: "心里早翻江倒海，脸上还像没事",
        text: "先把表情管理好再说。",
        scores: makeScores(["sakiko", 3], ["soyo", 2]),
        traits: makeTraits(2, 4, 3, 3, 1)
      }
    ]
  },
  {
    prompt: "你最难忍受别人哪一点？",
    options: [
      {
        title: "把别人的认真当空气",
        text: "这种事会直接让我心冷。",
        scores: makeScores(["tomori", 3], ["uika", 2]),
        traits: makeTraits(4, 1, 2, 3, 2)
      },
      {
        title: "让我在外头特别下不来台",
        text: "这笔账我会记很清楚。",
        scores: makeScores(["nyamu", 3], ["anon", 2]),
        traits: makeTraits(2, 4, 3, 1, 2)
      },
      {
        title: "摆烂了还说得像自己有理",
        text: "光想想就开始上火。",
        scores: makeScores(["taki", 2], ["umiri", 3]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "把重要的人说算了就算了",
        text: "这种轻飘飘我真的不行。",
        scores: makeScores(["soyo", 3], ["sakiko", 2]),
        traits: makeTraits(2, 4, 2, 4, 1)
      }
    ]
  },
  {
    prompt: "你理想中的“被喜欢”，更接近：",
    options: [
      {
        title: "有人能读懂我那些没讲明白的部分",
        text: "不是热闹，是看见。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "大家都觉得我好相处又拿得出手",
        text: "被喜欢最好也带一点体面。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 2, 2, 2)
      },
      {
        title: "别人知道我嘴硬，但关键时刻真能靠",
        text: "我更在乎这种评价。",
        scores: makeScores(["taki", 3], ["umiri", 2]),
        traits: makeTraits(2, 2, 4, 2, 1)
      },
      {
        title: "被放在“你跟别人不一样”的位置上",
        text: "不是谁都可以替代的那种。",
        scores: makeScores(["soyo", 2], ["sakiko", 2], ["uika", 1]),
        traits: makeTraits(3, 4, 2, 4, 2)
      }
    ]
  },
  {
    prompt: "遇到特别厉害的人，你通常会：",
    options: [
      {
        title: "会佩服到有一点点自卑",
        text: "然后默默把那种光感记很久。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 2, 2)
      },
      {
        title: "先佩服，然后偷偷把自己绷起来",
        text: "我可以紧张，但不能太掉价。",
        scores: makeScores(["anon", 2], ["nyamu", 2], ["sakiko", 1]),
        traits: makeTraits(2, 4, 3, 1, 2)
      },
      {
        title: "承认你强，但我还是想跟你碰一下",
        text: "越强的人越能激发我的不服输。",
        scores: makeScores(["sakiko", 3], ["taki", 2]),
        traits: makeTraits(2, 4, 4, 2, 1)
      },
      {
        title: "只要对味，我会自己贴过去",
        text: "想看看和这种人一起会碰出什么。",
        scores: makeScores(["uika", 3], ["rana", 2]),
        traits: makeTraits(3, 2, 2, 2, 4)
      }
    ]
  },
  {
    prompt: "你对“规则”的态度更像：",
    options: [
      {
        title: "会照做，但总觉得自己没那么适配",
        text: "不是反抗，只是常常没那么贴合。",
        scores: makeScores(["tomori", 2], ["mutsumi", 2], ["rana", 1]),
        traits: makeTraits(3, 1, 1, 2, 3)
      },
      {
        title: "规则能帮我上分的话当然用",
        text: "规则有时候也是工具。",
        scores: makeScores(["anon", 2], ["nyamu", 2], ["sakiko", 1]),
        traits: makeTraits(1, 4, 2, 1, 2)
      },
      {
        title: "规则本来就是拿来提效率的",
        text: "别浪费大家时间。",
        scores: makeScores(["umiri", 3], ["taki", 2]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "不碍事就行，碍事我就自己拐弯",
        text: "有些感觉比规矩更值得信。",
        scores: makeScores(["rana", 3], ["uika", 2]),
        traits: makeTraits(2, 1, 2, 1, 4)
      }
    ]
  },
  {
    prompt: "你发深夜动态更可能是：",
    options: [
      {
        title: "发一句别人多半看不懂的话",
        text: "但懂的人应该会懂。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 2, 2)
      },
      {
        title: "发张很会拍的图，再装轻松一下",
        text: "氛围要对，情绪不能太狼狈。",
        scores: makeScores(["anon", 2], ["nyamu", 3]),
        traits: makeTraits(1, 4, 2, 1, 3)
      },
      {
        title: "丢一句表面平静、实际含义很多的话",
        text: "懂的人会开始复盘。",
        scores: makeScores(["soyo", 2], ["sakiko", 3]),
        traits: makeTraits(2, 4, 2, 3, 1)
      },
      {
        title: "扔张月亮、路灯或甜品图，什么都不写",
        text: "解释太多就不浪漫了。",
        scores: makeScores(["rana", 3], ["uika", 2]),
        traits: makeTraits(2, 2, 1, 1, 4)
      }
    ]
  },
  {
    prompt: "如果朋友状态很差，你第一反应会：",
    options: [
      {
        title: "先安静陪在旁边",
        text: "不一定说很多，但我会在。",
        scores: makeScores(["tomori", 2], ["mutsumi", 2], ["uika", 1]),
        traits: makeTraits(4, 1, 1, 4, 1)
      },
      {
        title: "先想办法让他别继续往下掉",
        text: "别让他一直往下掉。",
        scores: makeScores(["anon", 3], ["nyamu", 1]),
        traits: makeTraits(2, 4, 2, 2, 2)
      },
      {
        title: "问清楚出了什么事，能解决就解决",
        text: "先把问题处理掉再说。",
        scores: makeScores(["taki", 2], ["umiri", 3]),
        traits: makeTraits(2, 2, 4, 2, 1)
      },
      {
        title: "先照顾他的情绪和体面",
        text: "哪怕我自己还没完全想好。",
        scores: makeScores(["soyo", 3], ["uika", 2]),
        traits: makeTraits(3, 4, 2, 4, 1)
      }
    ]
  },
  {
    prompt: "你最常见的内心状态是：",
    options: [
      {
        title: "情绪很多，但都堆在里面",
        text: "开口比感受本身难多了。",
        scores: makeScores(["mutsumi", 3], ["tomori", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "表面轻松，心里一直在修自己的漏洞",
        text: "别人看不出来最好。",
        scores: makeScores(["anon", 2], ["nyamu", 2], ["sakiko", 1]),
        traits: makeTraits(2, 4, 2, 1, 2)
      },
      {
        title: "明明想管，但又嫌别人烦",
        text: "很多时候不是想凶，是被磨没耐心。",
        scores: makeScores(["taki", 3], ["umiri", 1]),
        traits: makeTraits(2, 1, 4, 2, 1)
      },
      {
        title: "一边活得很用力，一边假装很稳",
        text: "像在高台上自己扶自己。",
        scores: makeScores(["sakiko", 3], ["soyo", 1], ["uika", 1]),
        traits: makeTraits(2, 4, 3, 3, 1)
      }
    ]
  },
  {
    prompt: "你更相信哪种关系？",
    options: [
      {
        title: "不用说太多也能懂",
        text: "少，但要真。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "一起热闹、一起冲的关系",
        text: "聊得来还要玩得动。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 3, 2, 2)
      },
      {
        title: "有事一定会来的关系",
        text: "别的都可以慢慢看。",
        scores: makeScores(["taki", 3], ["umiri", 2]),
        traits: makeTraits(2, 2, 4, 3, 1)
      },
      {
        title: "就算复杂也不会轻易断掉的关系",
        text: "这种才算有分量。",
        scores: makeScores(["soyo", 3], ["sakiko", 2]),
        traits: makeTraits(2, 4, 2, 4, 1)
      }
    ]
  },
  {
    prompt: "你最容易因为什么破防？",
    options: [
      {
        title: "自己的真心被略过",
        text: "像话说进空气里。",
        scores: makeScores(["tomori", 3], ["mutsumi", 1], ["uika", 1]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "被别人当众比下去",
        text: "不一定会说，但我会很在意。",
        scores: makeScores(["nyamu", 3], ["sakiko", 2]),
        traits: makeTraits(1, 4, 3, 1, 2)
      },
      {
        title: "自己拼命收拾残局，别人还在添乱",
        text: "我真的会冒火。",
        scores: makeScores(["taki", 2], ["umiri", 3]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "花很多心力维持，最后还是失控",
        text: "那种无力感很伤。",
        scores: makeScores(["soyo", 2], ["sakiko", 3]),
        traits: makeTraits(2, 4, 3, 4, 1)
      }
    ]
  },
  {
    prompt: "如果今天计划全乱了，你会：",
    options: [
      {
        title: "整个人乱一天",
        text: "得慢慢把自己捡回来。",
        scores: makeScores(["mutsumi", 2], ["tomori", 2], ["soyo", 1]),
        traits: makeTraits(3, 2, 1, 2, 1)
      },
      {
        title: "强行重整节奏",
        text: "至少不能让今天彻底报废。",
        scores: makeScores(["anon", 2], ["nyamu", 2], ["sakiko", 1]),
        traits: makeTraits(1, 4, 3, 1, 2)
      },
      {
        title: "切方案B，继续干",
        text: "计划只是手段，不是信仰。",
        scores: makeScores(["umiri", 3], ["taki", 2]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "既然乱了，那就顺势玩",
        text: "说不定正好看见别的路。",
        scores: makeScores(["rana", 3], ["uika", 2]),
        traits: makeTraits(2, 1, 1, 1, 4)
      }
    ]
  },
  {
    prompt: "重要场合前，你更像：",
    options: [
      {
        title: "反复确认自己想表达的是不是真的",
        text: "形式可以后补，内核不能空。",
        scores: makeScores(["tomori", 2], ["sakiko", 1], ["uika", 2]),
        traits: makeTraits(4, 2, 2, 2, 2)
      },
      {
        title: "很在意整体呈现是不是好看",
        text: "我不想把“凑合”端上去。",
        scores: makeScores(["nyamu", 3], ["anon", 2]),
        traits: makeTraits(1, 4, 3, 1, 3)
      },
      {
        title: "一遍遍练到出错率最低",
        text: "稳定比花活更重要。",
        scores: makeScores(["umiri", 3], ["taki", 2]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "等那个“状态来了”的瞬间",
        text: "真对味的时候，东西会自己亮起来。",
        scores: makeScores(["rana", 2], ["uika", 3]),
        traits: makeTraits(3, 2, 2, 2, 4)
      }
    ]
  },
  {
    prompt: "面对旧关系/旧回忆，你通常：",
    options: [
      {
        title: "一直记得，而且记得很深",
        text: "不是故意不放下，是它们本来就还在。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "会提，但更在意现在怎么处理得漂亮",
        text: "过去可以存在，姿态不能失控。",
        scores: makeScores(["anon", 1], ["nyamu", 2], ["sakiko", 2]),
        traits: makeTraits(1, 4, 2, 2, 2)
      },
      {
        title: "过去了就别一直回头看",
        text: "留太久只会拖效率。",
        scores: makeScores(["umiri", 3], ["taki", 2]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "嘴上说过去了，心里未必",
        text: "重要的东西哪有那么容易翻篇。",
        scores: makeScores(["soyo", 3], ["sakiko", 2]),
        traits: makeTraits(2, 4, 2, 4, 1)
      }
    ]
  },
  {
    prompt: "别人最容易误会你的地方是：",
    options: [
      {
        title: "以为我太怪，其实我只是太认真",
        text: "我不是故意和别人不一样。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 2, 2)
      },
      {
        title: "以为我很轻松，其实我一直在用力",
        text: "自然感常常是硬撑出来的。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 2, 1, 2)
      },
      {
        title: "以为我脾气差，其实我只是急",
        text: "我受不了事情一直卡着。",
        scores: makeScores(["taki", 3], ["umiri", 1]),
        traits: makeTraits(2, 1, 4, 2, 1)
      },
      {
        title: "以为我温柔稳定，就没别的了",
        text: "其实我也不是没棱角。",
        scores: makeScores(["soyo", 3], ["sakiko", 2]),
        traits: makeTraits(2, 4, 2, 3, 1)
      }
    ]
  },
  {
    prompt: "哪种评价最像扎你一下？",
    options: [
      {
        title: "你想太多了吧",
        text: "这句话会让我很想沉下去。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 2, 1)
      },
      {
        title: "你也就那样",
        text: "表面无所谓，心里一定记住。",
        scores: makeScores(["nyamu", 3], ["anon", 1], ["sakiko", 1]),
        traits: makeTraits(1, 4, 3, 1, 2)
      },
      {
        title: "算了，靠你也没用",
        text: "这句会直接点燃我。",
        scores: makeScores(["taki", 2], ["umiri", 3]),
        traits: makeTraits(1, 2, 4, 2, 1)
      },
      {
        title: "你没那么重要",
        text: "这种轻描淡写很伤人。",
        scores: makeScores(["soyo", 3], ["sakiko", 2]),
        traits: makeTraits(2, 4, 2, 4, 1)
      }
    ]
  },
  {
    prompt: "你买东西或收藏东西，更可能因为：",
    options: [
      {
        title: "它有只有我懂的意义",
        text: "说出来反而会变轻。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 2, 2)
      },
      {
        title: "它拿出来很好看，很有感觉",
        text: "审美也是一种理由。",
        scores: makeScores(["anon", 2], ["nyamu", 3]),
        traits: makeTraits(1, 4, 2, 1, 3)
      },
      {
        title: "它真的有用",
        text: "不然留着干嘛。",
        scores: makeScores(["umiri", 3], ["taki", 2]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "喜欢就是喜欢，解释不了",
        text: "心动比理由先到。",
        scores: makeScores(["rana", 3], ["uika", 2]),
        traits: makeTraits(3, 1, 1, 1, 4)
      }
    ]
  },
  {
    prompt: "你的防御机制，更接近：",
    options: [
      {
        title: "把话吞回去",
        text: "等它们在心里自己结块。",
        scores: makeScores(["mutsumi", 3], ["tomori", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "先把姿态摆漂亮",
        text: "至少别让人看见我乱。",
        scores: makeScores(["sakiko", 2], ["nyamu", 2], ["anon", 1]),
        traits: makeTraits(1, 4, 2, 1, 2)
      },
      {
        title: "先把事情做完再说",
        text: "忙起来总比乱想强。",
        scores: makeScores(["umiri", 3], ["taki", 2]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "先跑一会儿",
        text: "不一定是真走，只是先从那个局里退开。",
        scores: makeScores(["rana", 2], ["uika", 1], ["soyo", 1], ["tomori", 1]),
        traits: makeTraits(2, 1, 1, 1, 4)
      }
    ]
  },
  {
    prompt: "如果必须承认自己的一个问题，你会选：",
    options: [
      {
        title: "太容易把很多事当真",
        text: "别人一句话，我能记好久。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "有时候会先装会，再边做边补",
        text: "不能先显得太不会。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 2, 1, 2)
      },
      {
        title: "说话不够软，脾气也有点急",
        text: "尤其在拖拉场景里。",
        scores: makeScores(["taki", 3], ["umiri", 1]),
        traits: makeTraits(2, 1, 4, 2, 1)
      },
      {
        title: "太想抓住某些东西，不肯轻易松手",
        text: "知道这样不一定好，但很难改。",
        scores: makeScores(["soyo", 3], ["sakiko", 2]),
        traits: makeTraits(2, 4, 2, 4, 1)
      }
    ]
  },
  {
    prompt: "你对“赢”这件事的理解，更像：",
    options: [
      {
        title: "至少我说出了真正想说的话",
        text: "哪怕不够漂亮，我也认。",
        scores: makeScores(["tomori", 3], ["uika", 1], ["taki", 1]),
        traits: makeTraits(4, 1, 2, 2, 2)
      },
      {
        title: "我表现得不错，而且别人看见了",
        text: "这才像真正赢过。",
        scores: makeScores(["nyamu", 3], ["anon", 2]),
        traits: makeTraits(1, 4, 3, 1, 2)
      },
      {
        title: "事情成了，就是赢",
        text: "别把结果交给氛围感。",
        scores: makeScores(["umiri", 3], ["taki", 2]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "我想保住的人和局还在，就是赢",
        text: "不是所有胜负都写在台面上。",
        scores: makeScores(["soyo", 2], ["sakiko", 2], ["uika", 1]),
        traits: makeTraits(3, 4, 2, 4, 1)
      }
    ]
  },
  {
    prompt: "哪种人最容易吸引你？",
    options: [
      {
        title: "能听懂拐弯情绪的人",
        text: "不用我每次都翻译自己。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "会发光、会来事、能把我带进场域的人",
        text: "跟这种人待着不容易无聊。",
        scores: makeScores(["anon", 3], ["nyamu", 1], ["uika", 1]),
        traits: makeTraits(2, 4, 2, 2, 3)
      },
      {
        title: "靠谱、有执行力、不废话的人",
        text: "稳定会让我很有安全感。",
        scores: makeScores(["taki", 2], ["umiri", 3]),
        traits: makeTraits(1, 2, 4, 2, 1)
      },
      {
        title: "有灵气、有怪劲、不可复制的人",
        text: "不一定好定义，但很想靠近。",
        scores: makeScores(["rana", 2], ["uika", 3]),
        traits: makeTraits(3, 2, 2, 2, 4)
      }
    ]
  },
  {
    prompt: "哪种环境最消耗你？",
    options: [
      {
        title: "必须把自己讲得很外向很轻松",
        text: "那种表演感撑久了会累。",
        scores: makeScores(["mutsumi", 2], ["tomori", 3]),
        traits: makeTraits(4, 1, 1, 2, 1)
      },
      {
        title: "所有人都在看你出丑",
        text: "这比事情本身更让我窒息。",
        scores: makeScores(["nyamu", 2], ["anon", 2], ["sakiko", 1]),
        traits: makeTraits(1, 4, 2, 1, 2)
      },
      {
        title: "一堆人空谈但不做",
        text: "我的耐心会掉得很快。",
        scores: makeScores(["taki", 2], ["umiri", 3]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "一切都太规整、太可预测",
        text: "没有风，也没有火花。",
        scores: makeScores(["rana", 3], ["uika", 2]),
        traits: makeTraits(2, 1, 1, 1, 4)
      }
    ]
  },
  {
    prompt: "如果你带队，你的风格最可能是：",
    options: [
      {
        title: "先确认大家是不是真的认同这件事",
        text: "不然心散着，做什么都虚。",
        scores: makeScores(["tomori", 2], ["uika", 2], ["soyo", 1]),
        traits: makeTraits(4, 2, 2, 3, 2)
      },
      {
        title: "让大家觉得跟着我走不会太难看",
        text: "先把信心和气氛撑起来。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 3, 2, 2)
      },
      {
        title: "定目标、分任务、少废话",
        text: "做事别太浪漫化。",
        scores: makeScores(["umiri", 3], ["taki", 2]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "把人心和秩序都捏在手里",
        text: "局面要稳，节奏也得稳。",
        scores: makeScores(["sakiko", 3], ["soyo", 2]),
        traits: makeTraits(2, 4, 3, 4, 1)
      }
    ]
  },
  {
    prompt: "你最容易在哪方面逞强？",
    options: [
      {
        title: "假装自己没那么在意",
        text: "其实已经在心里来回过很多遍了。",
        scores: makeScores(["tomori", 2], ["mutsumi", 3]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "假装自己很熟、很会、很自然",
        text: "哪怕我其实也在现学现卖。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 2, 1, 2)
      },
      {
        title: "假装自己一个人就能全扛",
        text: "求助对我来说有点别扭。",
        scores: makeScores(["taki", 2], ["umiri", 2], ["sakiko", 1]),
        traits: makeTraits(1, 2, 4, 2, 1)
      },
      {
        title: "假装自己什么都掌控得住",
        text: "哪怕心里早就不平静了。",
        scores: makeScores(["sakiko", 3], ["soyo", 2]),
        traits: makeTraits(2, 4, 3, 3, 1)
      }
    ]
  },
  {
    prompt: "如果别人突然很认真地说“我很需要你”，你会：",
    options: [
      {
        title: "先愣住，然后很久都忘不掉",
        text: "这种话对我杀伤力很大。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 4, 1)
      },
      {
        title: "有点开心，也开始想自己得更像样一点",
        text: "不能辜负这个期待。",
        scores: makeScores(["anon", 2], ["nyamu", 1], ["uika", 2]),
        traits: makeTraits(3, 3, 2, 3, 2)
      },
      {
        title: "嘴上不说，行动上会更负责",
        text: "知道了，那我就接住。",
        scores: makeScores(["taki", 3], ["umiri", 2]),
        traits: makeTraits(2, 2, 4, 3, 1)
      },
      {
        title: "会立刻把这句话放进很重要的位置",
        text: "这之后很多事都会变重。",
        scores: makeScores(["soyo", 2], ["sakiko", 1], ["uika", 2]),
        traits: makeTraits(3, 3, 2, 4, 2)
      }
    ]
  },
  {
    prompt: "你更像哪种秘密型选手？",
    options: [
      {
        title: "心里藏了一整个海，但只给人一滴水",
        text: "不是没有，只是拿不出来。",
        scores: makeScores(["mutsumi", 3], ["tomori", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "表面很会社交，其实很多时候在演熟练",
        text: "只是不想让自己看起来太生。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 2, 1, 2)
      },
      {
        title: "很少说自己的累",
        text: "说了也不见得能解决问题。",
        scores: makeScores(["umiri", 3], ["taki", 2]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "知道很多，但不会全说",
        text: "有些牌不适合都摊开。",
        scores: makeScores(["soyo", 2], ["sakiko", 3]),
        traits: makeTraits(2, 4, 3, 3, 1)
      }
    ]
  },
  {
    prompt: "哪种剧情最像你的人生母题？",
    options: [
      {
        title: "明明很想传达，却总差一点",
        text: "那一点点错位特别真实。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "先别慌，我还能把场子救回来",
        text: "有点狼狈，但还能顶。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 3, 1, 2)
      },
      {
        title: "大家让开，我来把这事做完",
        text: "抱怨归抱怨，最后还是会接。",
        scores: makeScores(["taki", 3], ["umiri", 2]),
        traits: makeTraits(1, 2, 4, 2, 1)
      },
      {
        title: "我不能失去这个人或这个局",
        text: "哪怕这件事有时候很难看。",
        scores: makeScores(["soyo", 3], ["sakiko", 2]),
        traits: makeTraits(2, 4, 2, 4, 1)
      }
    ]
  },
  {
    prompt: "如果你必须站上舞台，你会更在意：",
    options: [
      {
        title: "自己说出来的东西到底是不是真的",
        text: "空心的光很快就会灭。",
        scores: makeScores(["tomori", 2], ["uika", 2], ["sakiko", 1]),
        traits: makeTraits(4, 2, 2, 2, 2)
      },
      {
        title: "观众有没有记住我",
        text: "舞台就是要让人看见。",
        scores: makeScores(["nyamu", 3], ["anon", 2]),
        traits: makeTraits(1, 4, 3, 1, 3)
      },
      {
        title: "完成度够不够高",
        text: "我宁愿稳，也不愿空转的炫。",
        scores: makeScores(["umiri", 3], ["sakiko", 2]),
        traits: makeTraits(1, 3, 4, 1, 1)
      },
      {
        title: "那一刻有没有真正燃起来",
        text: "对味的时候，人会自己亮。",
        scores: makeScores(["uika", 3], ["rana", 2]),
        traits: makeTraits(3, 2, 2, 2, 4)
      }
    ]
  },
  {
    prompt: "别人说你“有点难懂”，你会：",
    options: [
      {
        title: "有点难过，但也不知道怎么解释",
        text: "很多东西我自己都还在摸。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 2, 1)
      },
      {
        title: "笑着说没有，然后努力表现得更好懂一点",
        text: "先别让气氛太僵。",
        scores: makeScores(["anon", 3], ["nyamu", 1]),
        traits: makeTraits(2, 4, 2, 1, 2)
      },
      {
        title: "难懂就难懂，没义务谁都照顾到",
        text: "不是每个人都值得解释。",
        scores: makeScores(["taki", 2], ["umiri", 2], ["sakiko", 1]),
        traits: makeTraits(1, 2, 3, 1, 1)
      },
      {
        title: "难懂不是挺好吗",
        text: "我不想被概括得太扁。",
        scores: makeScores(["rana", 3], ["uika", 2]),
        traits: makeTraits(3, 1, 1, 1, 4)
      }
    ]
  },
  {
    prompt: "你最想避免的人生状态是：",
    options: [
      {
        title: "再也说不出真正想说的话",
        text: "那样会像自己慢慢变空。",
        scores: makeScores(["tomori", 3], ["uika", 1], ["mutsumi", 1]),
        traits: makeTraits(4, 1, 2, 2, 2)
      },
      {
        title: "变得普通、没存在感、没人看见",
        text: "这件事会让我很不甘心。",
        scores: makeScores(["nyamu", 3], ["anon", 2]),
        traits: makeTraits(1, 4, 3, 1, 2)
      },
      {
        title: "什么都想做，结果什么都没做好",
        text: "我不能接受这种失手。",
        scores: makeScores(["umiri", 3], ["sakiko", 2]),
        traits: makeTraits(1, 3, 4, 1, 1)
      },
      {
        title: "好不容易留下的关系又散掉",
        text: "有些东西散一次就够了。",
        scores: makeScores(["soyo", 3], ["sakiko", 2]),
        traits: makeTraits(2, 4, 2, 4, 1)
      }
    ]
  },
  {
    prompt: "你和人吵架时，最像哪种模式？",
    options: [
      {
        title: "当场卡住，回家越想越清楚",
        text: "等我想明白时架已经吵完了。",
        scores: makeScores(["mutsumi", 2], ["tomori", 3]),
        traits: makeTraits(4, 1, 1, 2, 1)
      },
      {
        title: "先想办法别太难看",
        text: "哪怕生气，场面也要尽量顾一下。",
        scores: makeScores(["anon", 2], ["soyo", 1], ["nyamu", 2]),
        traits: makeTraits(2, 4, 2, 2, 2)
      },
      {
        title: "忍不了，直接把问题点出来",
        text: "憋着只会更烦。",
        scores: makeScores(["taki", 3], ["umiri", 2]),
        traits: makeTraits(1, 2, 4, 2, 1)
      },
      {
        title: "一边控制局面，一边把细节全记住",
        text: "我不一定会爆，但我会记。",
        scores: makeScores(["sakiko", 2], ["soyo", 2], ["mutsumi", 1]),
        traits: makeTraits(2, 4, 3, 3, 1)
      }
    ]
  },
  {
    prompt: "如果喜欢的人今天状态不对，你更可能：",
    options: [
      {
        title: "先陪着，等对方自己愿意开口",
        text: "我不想把关心变成逼问。",
        scores: makeScores(["tomori", 2], ["mutsumi", 2], ["uika", 1]),
        traits: makeTraits(4, 1, 1, 4, 1)
      },
      {
        title: "找个轻松点的话题把气氛拉开",
        text: "总得先让人喘口气。",
        scores: makeScores(["anon", 3], ["uika", 1], ["nyamu", 1]),
        traits: makeTraits(2, 4, 2, 2, 2)
      },
      {
        title: "直接问发生了什么，能帮就帮",
        text: "不想猜太久。",
        scores: makeScores(["taki", 2], ["umiri", 3]),
        traits: makeTraits(2, 2, 4, 2, 1)
      },
      {
        title: "会特别在意，甚至比平时更上心",
        text: "我装得再平静，心里也不会轻。",
        scores: makeScores(["uika", 2], ["soyo", 2], ["sakiko", 1]),
        traits: makeTraits(3, 3, 2, 4, 2)
      }
    ]
  },
  {
    prompt: "面对突然来的机会，你会：",
    options: [
      {
        title: "先想想自己是不是真的想要",
        text: "不是每个机会都适合捡。",
        scores: makeScores(["tomori", 2], ["mutsumi", 2], ["umiri", 1]),
        traits: makeTraits(3, 2, 1, 2, 2)
      },
      {
        title: "先抓住再说",
        text: "很多事就是先上车再补票。",
        scores: makeScores(["anon", 2], ["nyamu", 3]),
        traits: makeTraits(1, 4, 3, 1, 3)
      },
      {
        title: "先判断投入产出和值不值",
        text: "不是机会大就一定要接。",
        scores: makeScores(["umiri", 3], ["sakiko", 2]),
        traits: makeTraits(1, 3, 4, 1, 1)
      },
      {
        title: "看那个瞬间有没有打中我",
        text: "对味才是第一门槛。",
        scores: makeScores(["rana", 3], ["uika", 2]),
        traits: makeTraits(3, 1, 1, 1, 4)
      }
    ]
  },
  {
    prompt: "你最容易在哪种场合突然发光？",
    options: [
      {
        title: "别人终于愿意认真听我说话的时候",
        text: "那种被接住的瞬间会让我特别亮。",
        scores: makeScores(["tomori", 3], ["uika", 1], ["mutsumi", 1]),
        traits: makeTraits(4, 1, 2, 3, 2)
      },
      {
        title: "需要活跃气氛、救场的时候",
        text: "场子一冷，我就会自动上线。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 3, 2, 2)
      },
      {
        title: "大家都快掉链子的时候",
        text: "这种时候我反而会更稳。",
        scores: makeScores(["taki", 2], ["umiri", 3]),
        traits: makeTraits(1, 2, 4, 2, 1)
      },
      {
        title: "灵感突然对上频道的时候",
        text: "像有人把灯一下全按亮了。",
        scores: makeScores(["rana", 2], ["uika", 3]),
        traits: makeTraits(3, 2, 2, 2, 4)
      }
    ]
  },
  {
    prompt: "如果只能留一句最像你的自我介绍，你会选：",
    options: [
      {
        title: "我可能有点难懂，但我很认真",
        text: "认真到有时连自己都招架不住。",
        scores: makeScores(["tomori", 3], ["mutsumi", 2]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "先别分析我，跟我相处就知道了",
        text: "很多东西是现场感。",
        scores: makeScores(["anon", 3], ["nyamu", 2]),
        traits: makeTraits(2, 4, 2, 1, 2)
      },
      {
        title: "说那么多干嘛，做事吧",
        text: "我比较信结果。",
        scores: makeScores(["umiri", 3], ["taki", 2]),
        traits: makeTraits(1, 2, 4, 1, 1)
      },
      {
        title: "我只是顺着感觉走到这里",
        text: "至于为什么，可能不用都解释。",
        scores: makeScores(["rana", 3], ["uika", 2]),
        traits: makeTraits(3, 1, 1, 1, 4)
      }
    ]
  },
  {
    prompt: "最后一道，如果朋友问“你到底是个什么样的人”，你会更像：",
    options: [
      {
        title: "一个很多话都留在心里的人",
        text: "但那些话都不是假的。",
        scores: makeScores(["tomori", 2], ["mutsumi", 3]),
        traits: makeTraits(4, 1, 1, 3, 1)
      },
      {
        title: "一个不想被忽略的人",
        text: "我想被看到，也想配得上被看到。",
        scores: makeScores(["nyamu", 3], ["anon", 2]),
        traits: makeTraits(2, 4, 3, 1, 2)
      },
      {
        title: "一个有点难搞但很能扛的人",
        text: "别废话，遇事我会上。",
        scores: makeScores(["taki", 3], ["umiri", 2]),
        traits: makeTraits(2, 2, 4, 2, 1)
      },
      {
        title: "一个对重要的人和东西不太舍得放手的人",
        text: "看着平静，不代表真的轻。",
        scores: makeScores(["soyo", 2], ["sakiko", 2], ["uika", 1]),
        traits: makeTraits(3, 4, 2, 4, 1)
      }
    ]
  }
];

const introPanel = document.getElementById("intro-panel");
const quizPanel = document.getElementById("quiz-panel");
const resultPanel = document.getElementById("result-panel");
const questionCount = document.getElementById("question-count");
const progressBadge = document.getElementById("progress-badge");
const progressBar = document.getElementById("progress-bar");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const shareButton = document.getElementById("share-button");
const copyButton = document.getElementById("copy-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

const resultTitle = document.getElementById("result-title");
const resultAlias = document.getElementById("result-alias");
const resultOverview = document.getElementById("result-overview");
const resultTags = document.getElementById("result-tags");
const resultBand = document.getElementById("result-band");
const resultBadge = document.getElementById("result-badge");
const resultBadgeName = document.getElementById("result-badge-name");
const resultShareLine = document.getElementById("result-shareline");
const dimensionGrid = document.getElementById("dimension-grid");
const rankingList = document.getElementById("ranking-list");
const strengthList = document.getElementById("strength-list");
const blindSpot = document.getElementById("blind-spot");
const connectionStyle = document.getElementById("connection-style");
const bandRole = document.getElementById("band-role");

let currentIndex = 0;
let activeQuestions = [];
let scoreState = {};
let traitState = {};
let latestResultProfile = null;
let answers = [];

function resetState() {
  currentIndex = 0;
  activeQuestions = questions.map((question) => ({
    ...question,
    options: shuffleArray(question.options)
  }));

  scoreState = Object.fromEntries(Object.keys(profiles).map((key) => [key, 0]));
  traitState = Object.fromEntries(Object.keys(dimensions).map((key) => [key, 0]));
  latestResultProfile = null;
  answers = new Array(questions.length).fill(null);
}

function shuffleArray(items) {
  const clone = [...items];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function startQuiz() {
  resetState();
  introPanel.classList.add("hidden");
  resultPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const question = activeQuestions[currentIndex];
  const progress = ((currentIndex + 1) / activeQuestions.length) * 100;

  questionCount.textContent = `第 ${currentIndex + 1} / ${activeQuestions.length} 题`;
  progressBadge.textContent = `进度 ${Math.round(progress)}%`;
  progressBar.style.width = `${progress}%`;
  questionText.textContent = question.prompt;
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.innerHTML = `<strong>${String.fromCharCode(65 + index)}. ${option.title}</strong>`;
    if (answers[currentIndex] === option.title) {
      button.classList.add("selected");
    }
    button.addEventListener("click", () => selectOption(button, option));
    optionsContainer.appendChild(button);
  });

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = !answers[currentIndex];
  nextButton.textContent = currentIndex === activeQuestions.length - 1 ? "查看结果" : "下一题";
}

function selectOption(button, option) {
  Array.from(optionsContainer.children).forEach((node) => node.classList.remove("selected"));
  button.classList.add("selected");
  answers[currentIndex] = option.title;
  nextButton.disabled = false;
}

function normaliseTrait(value) {
  return Math.round((value / (questions.length * 4)) * 100);
}

function describeTrait(key, score) {
  const meta = dimensions[key];
  return score >= 55 ? meta.high : meta.low;
}

function sortedProfiles() {
  return Object.entries(scoreState)
    .sort((a, b) => b[1] - a[1])
    .map(([key, score]) => ({ key, score, profile: profiles[key] }));
}

function buildShareText(primary, secondary) {
  const url = window.location.href;
  return [
    `我测出来是「${primary.name}型」`,
    primary.alias,
    primary.shareLine,
    `副人格倾向：${secondary.name}`,
    `来测：${url}`
  ].join(" | ");
}

function showResult() {
  rebuildScoresFromAnswers();

  const ranked = sortedProfiles();
  const primary = ranked[0];
  const secondary = ranked[1];
  const traitScores = Object.fromEntries(
    Object.entries(traitState).map(([key, value]) => [key, normaliseTrait(value)])
  );

  latestResultProfile = { primary, secondary, shareText: buildShareText(primary.profile, secondary.profile) };

  quizPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");

  resultTitle.textContent = `你是 ${primary.profile.name} 型`;
  resultAlias.textContent = primary.profile.alias;
  resultOverview.textContent = primary.profile.overview;
  resultBand.textContent = primary.profile.band;
  resultBadgeName.textContent = primary.profile.name;
  resultShareLine.textContent = primary.profile.shareLine;
  resultBadge.style.background = primary.profile.accent;

  resultTags.innerHTML = primary.profile.tags.map((tag) => `<span>${tag}</span>`).join("");
  strengthList.innerHTML = primary.profile.strengths.map((item) => `<span>${item}</span>`).join("");
  blindSpot.textContent = primary.profile.blindSpot;
  connectionStyle.textContent = primary.profile.connection;
  bandRole.textContent = primary.profile.role;

  dimensionGrid.innerHTML = Object.entries(traitScores)
    .map(([key, score]) => `
      <article class="dimension-card">
        <div class="dimension-top">
          <h4>${dimensions[key].name}</h4>
          <span class="dimension-score">${score}</span>
        </div>
        <div class="dimension-meter" aria-hidden="true">
          <div class="dimension-fill" style="width:${score}%"></div>
        </div>
        <div class="dimension-copy">
          <p>${describeTrait(key, score)}</p>
        </div>
      </article>
    `)
    .join("");

  const maxScore = primary.score || 1;
  rankingList.innerHTML = ranked.slice(0, 3).map((item, index) => {
    const percent = Math.max(60, Math.round((item.score / maxScore) * 100));
    return `
      <article class="rank-item">
        <div class="rank-top">
          <strong>${index + 1}. ${item.profile.name}</strong>
          <span class="rank-score">${percent}%</span>
        </div>
        <p class="ranking-meta">${item.profile.band} · ${item.profile.alias}</p>
      </article>
    `;
  }).join("");
}

function rebuildScoresFromAnswers() {
  scoreState = Object.fromEntries(Object.keys(profiles).map((key) => [key, 0]));
  traitState = Object.fromEntries(Object.keys(dimensions).map((key) => [key, 0]));

  activeQuestions.forEach((question, index) => {
    const selectedTitle = answers[index];
    if (!selectedTitle) {
      return;
    }

    const selectedOption = question.options.find((option) => option.title === selectedTitle);
    if (!selectedOption) {
      return;
    }

    Object.entries(selectedOption.scores).forEach(([key, value]) => {
      scoreState[key] += value;
    });

    Object.entries(selectedOption.traits).forEach(([key, value]) => {
      traitState[key] += value;
    });
  });
}

function goPrevQuestion() {
  if (currentIndex === 0) {
    return;
  }

  currentIndex -= 1;
  renderQuestion();
}

function goNextQuestion() {
  if (!answers[currentIndex]) {
    return;
  }

  if (currentIndex === activeQuestions.length - 1) {
    showResult();
    return;
  }

  currentIndex += 1;
  renderQuestion();
}

async function shareResult() {
  if (!latestResultProfile) {
    return;
  }

  const payload = {
    title: "MyGO!!!!! / Ave Mujica 人格测试结果",
    text: latestResultProfile.shareText,
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(payload);
      return;
    } catch (error) {
      if (error && error.name === "AbortError") {
        return;
      }
    }
  }

  await navigator.clipboard.writeText(latestResultProfile.shareText);
  shareButton.textContent = "分享文案已复制";
  setTimeout(() => {
    shareButton.textContent = "生成分享文案";
  }, 1600);
}

async function copyResult() {
  if (!latestResultProfile) {
    return;
  }

  await navigator.clipboard.writeText(latestResultProfile.shareText);
  copyButton.textContent = "已复制";
  setTimeout(() => {
    copyButton.textContent = "复制结果";
  }, 1400);
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
shareButton.addEventListener("click", shareResult);
copyButton.addEventListener("click", copyResult);
prevButton.addEventListener("click", goPrevQuestion);
nextButton.addEventListener("click", goNextQuestion);
