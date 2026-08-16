// マヤンエッセンス — 20の太陽の紋章／ウェイブスペル データ + KIN計算
// c: 紋章の色（red/white/blue/yellow）, pid: 太陽の紋章エッセンス, wpid: ウェイブスペルエッセンス
window.SEAL_COLORS = {
  red:    { label:"赤", accent:"oklch(0.52 0.14 30)",  bg:"oklch(0.93 0.04 30)",   deep:"oklch(0.40 0.11 30)" },
  white:  { label:"白", accent:"oklch(0.62 0.025 85)", bg:"oklch(0.965 0.012 90)", deep:"oklch(0.42 0.03 85)" },
  blue:   { label:"青", accent:"oklch(0.50 0.09 250)", bg:"oklch(0.93 0.035 250)", deep:"oklch(0.38 0.08 250)" },
  yellow: { label:"黄", accent:"oklch(0.68 0.12 85)",  bg:"oklch(0.94 0.06 90)",   deep:"oklch(0.46 0.09 80)" }
};
window.MONSHOU_DATA = [
{no:1,name:"赤い龍",en:"IMIX",c:"red",kw:["誕生","生命力","母性"],text:"新しいいのちを生み出す力と、母のようにあたたかく包み込む心を持つ人。面倒見がよく、困っている人を放っておけません。その分、頼まれると断れず、頑張りすぎてしまうことも。",support:"頑張りすぎる優しさをそっとほどき、自分自身のことも大切に育てられるように寄り添うブレンドです。",flowers:[{f:"カーネーション",m:"思いを形に"},{f:"茱萸",r:"ぐみ",m:"エネルギーアップ"},{f:"鳳凰木",r:"ほうおうぼく",m:"輝く個性",fpid:"188130426"}],photos:["assets/seal1-2.jpg","assets/seal1-3.jpg","assets/houougi-dragon.webp"],tw:"assets/seal1-1.jpg",art:"assets/art/seal1.jpg",pid:"146249892",wpid:"146255913"},
{no:2,name:"白い風",en:"IK",c:"white",kw:["霊感","メッセージ","共感"],text:"繊細な感受性で、目に見えないものや人の気持ちを感じ取る人。心に受け取ったメッセージを、言葉や歌、表現として伝えることで輝きます。ためこむと苦しくなりやすいのが弱点。",support:"胸の内にたまった想いを素直に表へ運び、風のように軽やかに伝えられるよう支えるブレンドです。",flowers:[{f:"桜",r:"さくら",m:"コミュニケーション"},{f:"大亀の木",r:"おおかめのき",m:"以心伝心"}],photos:["assets/seal2-2.jpg","assets/seal2-3.jpg"],tw:"assets/seal2-1.jpg",art:"assets/art/seal2.jpg",pid:"146250226",wpid:"146255929"},
{no:3,name:"青い夜",en:"AKBAL",c:"blue",kw:["夢","直感","豊かさ"],text:"自分だけの世界を大切にする、マイペースな夢見人。壁があるように見えて、夢を語るときには人を惹きつける大きな力を発揮します。豊かさを引き寄せる紋章でもあります。",support:"心の扉をやわらかくひらき、あたためてきた夢を現実へ運ぶ最初の一歩を後押しするブレンドです。",flowers:[{f:"寒葵",r:"かんあおい",m:"秘めたる目標を達成する"},{f:"紫陽花",r:"あじさい",m:"私は雨が好き"},{f:"鉄線",r:"てっせん",m:"精神力"}],photos:["assets/seal3-2.jpg","assets/seal3-3.jpg","assets/seal3-4.jpg"],tw:"assets/seal3-1.jpg",art:"assets/art/seal3.jpg",pid:"146250240",wpid:"146255949"},
{no:4,name:"黄色い種",en:"KAN",c:"yellow",kw:["気づき","開花","探究心"],text:"納得するまでとことん掘り下げる探究の人。ひとつの「気づき」が人生を大きく開かせます。考えすぎて動けなくなるときは、まず小さく蒔いてみることが鍵になります。",support:"迷いの中でも自分の中の種を信じ、芽吹きのときを安心して待てるよう寄り添うブレンドです。",flowers:[{f:"大楠",r:"おおくす",m:"宇宙の温もり"},{f:"たんぽぽ",m:"グラウンディング"}],photos:["assets/seal4-2.jpg","assets/seal4-3.jpg"],tw:"assets/seal4-1.jpg",art:"assets/art/seal4.jpg",pid:"146250258",wpid:"146255964"},
{no:5,name:"赤い蛇",en:"CHICCHAN",c:"red",kw:["情熱","生命力","本能"],text:"鋭い感覚と、燃えるような情熱を持つ人。好き嫌いははっきりしていて、心が決まったときの集中力は誰にも負けません。体の声に敏感で、スキンシップや自然に触れると整います。",support:"高ぶる感情をしなやかに整え、情熱をすこやかに燃やしつづけられるよう支えるブレンドです。",flowers:[{f:"洋種山牛蒡",r:"ようしゅやまごぼう",m:"生きる力"},{f:"曼珠沙華",r:"まんじゅしゃげ",m:"感情を知る"}],photos:["assets/seal5-2.jpg","assets/seal5-3.jpg"],tw:"assets/seal5-1.jpg",art:"assets/art/seal5.jpg",pid:"146250282",wpid:"146255980"},
{no:6,name:"白い世界の橋渡し",en:"CIMI",c:"white",kw:["橋渡し","おもてなし","手放す"],text:"人と人、世界と世界をつなぐ橋の人。おもてなしの心にあふれ、あの世とこの世さえつなぐと言われます。こだわりを手放すほど、より大きく立派な橋を架けられるようになります。",support:"握りしめてきたものをそっと手放し、新しいご縁へ心をひらけるよう寄り添うブレンドです。",flowers:[{f:"桜",r:"さくら",m:"コミュニケーション"},{f:"吊花",r:"つりばな",m:"全ては繋がっていることを知る"}],photos:["assets/seal6-2.jpg","assets/seal6-3.jpg"],tw:"assets/seal6-1.jpg",art:"assets/art/seal6.jpg",pid:"146250315",wpid:"146255993"},
{no:7,name:"青い手",en:"MANIK",c:"blue",kw:["癒やし","遂行","チャンス"],text:"手を動かし、体験することで理解していく人。その手には癒やしの力が宿ると言われます。目の前のことを丁寧にやり遂げる姿が、チャンスと信頼を呼び込みます。",support:"疲れた心と体をいたわり、目の前のことをひとつずつ形にしていけるよう支えるブレンドです。",flowers:[{f:"辛夷",r:"こぶし",m:"頑なさを溶かす"},{f:"桔梗",r:"ききょう",m:"Noと言える"}],photos:["assets/seal7-2.jpg","assets/seal7-3.jpg"],tw:"assets/seal7-1.jpg",art:"assets/art/seal7.jpg",pid:"146250331",wpid:"146256001"},
{no:8,name:"黄色い星",en:"LAMAT",c:"yellow",kw:["美","調和","職人気質"],text:"美しいものを愛し、何ごとも丁寧に仕上げる職人気質の人。星のように輝き、周囲との調和を大切にします。理想が高い分、自分にも人にも厳しくなりすぎることがあります。",support:"完璧を求めて硬くなった心をゆるめ、あるがままの美しさに気づけるよう寄り添うブレンドです。",flowers:[{f:"金木犀",r:"きんもくせい",m:"霊力を増やす"},{f:"銀木犀",r:"ぎんもくせい",m:"霊力を集める"},{f:"木香薔薇",r:"もっこうばら",m:"純真"}],photos:["assets/seal8-2.jpg","assets/seal8-3.jpg","assets/seal8-4.jpg"],tw:"assets/seal8-1.jpg",art:"assets/art/seal8.jpg",pid:"146250344",wpid:"146256011"},
{no:9,name:"赤い月",en:"MULUC",c:"red",kw:["浄化","新しい流れ","使命"],text:"「もっとよくしたい」という気持ちが人一倍強い、浄化と改革の人。使命感を持って流れに乗ったとき、驚くほどの推進力を発揮します。感情の波を上手に流すことが鍵です。",support:"古い感情をやさしく洗い流し、新しい流れへ心地よく乗っていけるよう支えるブレンドです。",flowers:[{f:"月見草",r:"つきみそう",m:"遠くからあなたを思う"},{f:"ブーゲンビリア",m:"情熱"},{f:"鳳凰木",r:"ほうおうぼく",m:"もっと受け取る"}],photos:["assets/seal9-2.jpg","assets/seal9-3.jpg"],tw:"assets/seal9-1.jpg",art:"assets/art/seal9.jpg",pid:"146250352",wpid:"146256040"},
{no:10,name:"白い犬",en:"OC",c:"white",kw:["忠実","愛","家族"],text:"信じた人にまっすぐな、愛と忠誠の人。家族や仲間と喜びを分かち合うことで大きな力を発揮します。人を信じるがゆえに、裏切られると深く傷つきやすい一面も。",support:"人との間で傷ついた心を癒やし、すこやかな信頼をもう一度結び直せるよう寄り添うブレンドです。",flowers:[{f:"大待雪草",r:"おおまつゆきそう",m:"愛されていることを知る"},{f:"苺",r:"いちご",m:"幸せな家庭"}],photos:["assets/seal10-1.jpg","assets/seal10-2.jpg"],tw:"assets/seal10-3.jpg",art:"assets/art/seal10.jpg",pid:"146250358",wpid:"146256049"},
{no:11,name:"青い猿",en:"CHUEN",c:"blue",kw:["遊び心","ユーモア","ひらめき"],text:"楽しむことの天才。遊びとユーモアの中にこそ本質を見つける人です。深刻さは苦手で、場を明るくするひらめきに恵まれています。楽しんでいるとき、物ごとは不思議とうまく運びます。",support:"深刻になりすぎた心をほぐし、いまここを楽しむ軽やかさを取り戻せるよう支えるブレンドです。",flowers:[{f:"紫陽花",r:"あじさい",m:"私は雨が好き"},{f:"朝顔",r:"あさがお",m:"明晰な判断力"},{f:"露草",r:"つゆくさ",m:"本当の自分を知る"}],photos:["assets/seal11-2.jpg","assets/seal11-3.jpg","assets/seal11-4.jpg"],tw:"assets/seal11-1.jpg",art:"assets/art/seal11.jpg",pid:"146250442",wpid:"146256059"},
{no:12,name:"黄色い人",en:"EB",c:"yellow",kw:["自由意志","道","感化"],text:"自分の道を自分で選ぶことを大切にする自由人。こだわりの分野で才能を発揮し、その生き方そのものが周りの人を感化していきます。枠にはめられることが何より苦手です。",support:"人と比べて揺れる心を静め、自分の道を自分で選ぶ勇気を支えるブレンドです。",flowers:[{f:"金糸梅",r:"きんしばい",m:"魂の真実を生きる"},{f:"姫河骨",r:"ひめこうほね",m:"自分軸"}],photos:["assets/seal12-1.jpg","assets/seal12-3.jpg"],tw:"assets/seal12-2.jpg",art:"assets/art/seal12.jpg",pid:"146250462",wpid:"146256077"},
{no:13,name:"赤い空歩く人",en:"BEN",c:"red",kw:["探索","成長","人助け"],text:"現場に自ら足を運び、人の成長にとことん寄り添うボランティア精神の人。天と地をつなぐ柱とも言われます。人の世話を焼くうちに、自分のことが後回しになりがちです。",support:"抱え込みがちな責任感をやわらげ、自分のための軽やかな一歩を後押しするブレンドです。",flowers:[{f:"犬蓼",r:"いぬたで",m:"お役に立ちたい"},{f:"屁糞葛",r:"へくそかずら",m:"私らしく"}],photos:["assets/seal13-2.jpg","assets/seal13-3.jpg"],tw:"assets/seal13-1.jpg",art:"assets/art/seal13.jpg",pid:"146250485",wpid:"146256087"},
{no:14,name:"白い魔法使い",en:"IX",c:"white",kw:["魅了","受容","いま"],text:"ありのままを受け容れる大きな度量で、人を魅了する人。根はとても真面目な頑張り屋です。「許すこと」がテーマで、許せた分だけ魔法のような追い風が吹くと言われます。",support:"「許せない」を抱えた心をふんわりとゆるめ、いまこの瞬間に心を向けられるよう寄り添うブレンドです。",flowers:[{f:"芹葉黄連",r:"せりばおうれん",m:"やるせなさ"},{f:"胡瓜草",r:"きゅうりぐさ",m:"水に流す"}],photos:["assets/seal14-2.jpg","assets/seal14-3.jpg"],tw:"assets/seal14-1.jpg",art:"assets/art/seal14.jpg",pid:"146250579",wpid:"146256093"},
{no:15,name:"青い鷲",en:"MEN",c:"blue",kw:["ビジョン","観察力","心"],text:"大空から全体を見渡すように、先を見通す力を持つ戦略家。観察力と分析力に優れています。よく見えるがゆえに、心がネガティブに傾きやすいので、心のケアが何よりの鍵です。",support:"曇りがちな視界を澄ませ、高く大きな空から自分をやさしく眺められるよう支えるブレンドです。",flowers:[{f:"不死鳥",r:"ふしちょう",m:"ありえないほどの変容"},{f:"紫陽花",r:"あじさい",m:"私は雨が好き"},{f:"栴檀",r:"せんだん",m:"抽象度を上げる"}],photos:["assets/seal15-2.jpg","assets/seal15-3.jpg"],tw:"assets/seal15-1.jpg",art:"assets/art/seal15.jpg",pid:"146250627",wpid:"146256263"},
{no:16,name:"黄色い戦士",en:"CIB",c:"yellow",kw:["挑戦","知性","自問自答"],text:"困難にまっすぐ立ち向かうチャレンジャー。自分に問いを立て、答えを探しつづけることで進化していきます。戦いつづけて、知らないうちに疲れをためてしまうことも。",support:"戦い疲れた心をゆっくり休ませ、恐れではなく希望から挑戦できるよう寄り添うブレンドです。",flowers:[{f:"菜の花",r:"なのはな",m:"前向きに考える力"},{f:"タイム",m:"勇気"}],photos:["assets/seal16-2.jpg","assets/seal16-3.jpg"],tw:"assets/seal16-1.jpg",art:"assets/art/seal16.jpg",pid:"146250640",wpid:"146256282"},
{no:17,name:"赤い地球",en:"CABAN",c:"red",kw:["シンクロ","絆","舵取り"],text:"心の絆をなにより大切にする人。シンクロニシティ（意味のある偶然）に導かれて生きる紋章です。リズムに乗ると、周りを巻き込みながら大きく前へ進んでいきます。",support:"孤独に冷えた心をあたため、地に足をつけて絆を育んでいけるよう支えるブレンドです。",flowers:[{f:"ハイビスカス",m:"魂の分かち合い"},{f:"姫檜扇水仙",r:"ひめひおうぎずいせん",m:"陽気さ"}],photos:["assets/seal17-2.jpg","assets/seal17-3.jpg"],tw:"assets/seal17-1.jpg",art:"assets/art/seal17.jpg",pid:"146250657",wpid:"146256371"},
{no:18,name:"白い鏡",en:"ETZNAB",c:"white",kw:["映し出す","秩序","果てしなさ"],text:"曇りのない鏡のように、現実をありのまま映し出す人。礼節と秩序を重んじる美学の持ち主です。人の感情まで映し取ってしまうので、自分と他人の境界線を保つことが大切です。",support:"映り込んだ他人の感情をそっと手放し、澄んだ境界線を保てるよう寄り添うブレンドです。",flowers:[{f:"鏡蓋",r:"ががぶた",m:"蓋を外す"},{f:"鷺草",r:"さぎそう",m:"霊性を高める"}],photos:["assets/seal18-2.jpg","assets/seal18-3.jpg"],tw:"assets/seal18-1.jpg",art:"assets/art/seal18.jpg",pid:"146250682",wpid:"146256560"},
{no:19,name:"青い嵐",en:"CAUAC",c:"blue",kw:["変容","エネルギー","巻き込む"],text:"嵐のような集中力とエネルギーで、周囲を巻き込みながら物ごとを変えていく人。思い込んだときの馬力は20紋章いち。休むことも仕事のうち、と覚えておくとうまくいきます。",support:"変化の渦の中でも中心は静かに保ち、嵐を恵みの雨に変えていけるよう支えるブレンドです。",flowers:[{f:"一位",r:"いちい",m:"それはある"},{f:"蔓日々草",r:"つるにちにちそう",m:"霊的に生きる"}],photos:["assets/seal19-2.jpg","assets/seal19-3.jpg"],tw:"assets/seal19-1.jpg",art:"assets/art/seal19.jpg",pid:"146250846",wpid:"146256681"},
{no:20,name:"黄色い太陽",en:"AHAU",c:"yellow",kw:["太陽","公平","円満"],text:"分けへだてなく、あまねく照らす太陽の人。そこにいるだけで場が明るくなる存在です。「与えること」がテーマですが、与えてばかりで自分が空っぽにならないよう気をつけて。",support:"与えつづけて疲れた心に光を返し、自分自身のこともあたたかく照らせるよう支えるブレンドです。",flowers:[{f:"向日葵",r:"ひまわり",m:"男性性"},{f:"姫河骨",r:"ひめこうほね",m:"自分軸"}],photos:["assets/seal20-2.jpg","assets/seal20-3.jpg"],tw:"assets/seal20-1.jpg",art:"assets/art/seal20.jpg",pid:"146250859",wpid:"146256750"}
];
window.MONSHOU_SHOP = function(pid){ return "https://hananoshizuku.jp/?pid=" + pid; };
// KIN計算（ドリームスペル：基準 2012-12-21 = KIN207、2/29は数えない）
window.calcKin = function(y, m, d) {
  if (m === 2 && d === 29) d = 28;
  var anchor = Date.UTC(2012, 11, 21);
  var t = Date.UTC(y, m - 1, d);
  if (isNaN(t)) return null;
  var diff = Math.round((t - anchor) / 86400000);
  var lo = Math.min(t, anchor), hi = Math.max(t, anchor);
  var y1 = new Date(lo).getUTCFullYear(), y2 = new Date(hi).getUTCFullYear(), c = 0;
  for (var yy = y1; yy <= y2; yy++) {
    if ((yy % 4 === 0 && yy % 100 !== 0) || yy % 400 === 0) {
      var f = Date.UTC(yy, 1, 29);
      if (f > lo && f <= hi) c++;
    }
  }
  var eff = diff >= 0 ? diff - c : diff + c;
  var kin = ((206 + eff) % 260 + 260) % 260 + 1;
  var sealIdx = (kin - 1) % 20;
  var tone = (kin - 1) % 13 + 1;
  var wsIdx = (Math.floor((kin - 1) / 13) * 13) % 20;
  return { kin: kin, tone: tone, seal: window.MONSHOU_DATA[sealIdx], ws: window.MONSHOU_DATA[wsIdx] };
};

// 紋章の色テーマ（Organicパレットに調和）
window.SEAL_COLORS = {
  red:    { accent: "var(--color-accent)",      bg: "var(--color-accent-100)",  deep: "var(--color-accent-800)" },
  white:  { accent: "var(--color-neutral-400)", bg: "var(--color-neutral-100)", deep: "var(--color-neutral-700)" },
  blue:   { accent: "oklch(0.55 0.06 250)",     bg: "oklch(0.94 0.02 250)",     deep: "oklch(0.42 0.07 250)" },
  yellow: { accent: "oklch(0.72 0.12 90)",      bg: "oklch(0.95 0.05 95)",      deep: "oklch(0.50 0.10 90)" }
};
