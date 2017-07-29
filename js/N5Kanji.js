// gloval namespace (loaded before main.js)
//var globalLib = {
//	globalLib.N5KanjiTable = []
//};




var N5KanjiTable = [ //  id, "kanji", "on", "kun", x, y
	//  数字と時間
	1, "一", "イチ, イツ", "ひと-, ひと.つ", 1, 1,
	2, "二", "ニ, ジ", "ふた, ふた.つ, ふたた.び", 1, 2,
	3, "三", "サン, ゾウ", "み, み.つ, みっ.つ", 1, 3,
	4, "四", "シ", "よ, よ.つ, よっ.つ, よん", 1, 4,
	5, "五", "ゴ", "いつ, いつ.つ", 1, 5,
	6, "六", "ロク, リク", "む, む.つ, むっ.つ, むい", 1, 6,
	7, "七", "シチ", "なな, なな.つ, なの", 1, 7,
	8, "八", "ハチ", "や, や.つ, やっ.つ, よう", 1, 8,
	
	9, "九", "キュウ, ク", "ここの, ここの.つ", 2, 1,
	10, "十", "ジュウ, ジッ, ジュッ", "とお, と", 2, 2,
	11, "百", "ヒャク, ビャク", "もも", 2, 3,
	12, "千", "セン", "ち", 2, 4,
	13, "万", "マン, バン", "よろず", 2, 5,
	14, "円", "エン", "まる, まど", 2, 6,
	15, "午", "ゴ", "うま", 2, 7,
	16, "今", "コン, キン", "いま", 2, 8,
	
	17, "半", "ハン", "なか.ば", 3, 1,
	18, "年", "ネン", "とし", 3, 2,
	20, "毎", "マイ", "ごと, -ごと.に", 3, 3,
	21, "時", "ジ", "とき, -どき", 3, 4,
	
	// 自然について
	22, "山", "サン, セン", "やま", 3, 5,
	23, "川", "セン", "かわ", 3, 6,
	24, "天", "テン", "あまつ, あめ, あま-", 3, 7,	
	25, "日", "ニチ, ジツ", "ひ, -び, -か", 3, 8,
	
	26, "空", "クウ", "そら, あ.く, から, むな.しい", 4, 1,	
	27, "月", "ゲツ, ガツ", "つき", 4, 2,
	28, "木", "ボク, モク", "き, こ-", 4, 3,
	29, "水", "スイ", "みず", 4, 4,
	31, "火", "カ", "ひ, -び, ほ-", 4, 5,
	32, "土", "ド, ト", "つち", 4, 6,
	33, "魚", "ギョ", "うお, さかな, -ざかな", 4, 7,
	33, "生", "セイ, ショウ", "い-, う-, は-, き, なま, な-, む-", 4, 8,	// い.きる, い.かす, い. は.やす, き, なま.....
	
	34, "気", "キ, ケ", "いき", 5, 1,		
	35, "雨", "ウ", "あめ, あま-, -さめ", 5, 2,
	36, "金", "キン, コン, ゴン", "かね, かな-", 5, 3,
	37, "電", "デン", "", 5, 4,
	38, "花", "カ, ケ", "はな", 5, 5,
	
	//  所在地
	39, "上", "ジョウ, ショウ, シャン", "うえ, のぼ.る", 5, 6,
	//  うえ, -うえ, うわ-, かみ, あ.げる, -あ.げる, あ.がる, -あ.がる, あ.がり, -あ.がり, のぼ.る, のぼ.り, のぼ.せる, のぼ.す, よ.す
	40, "下", "カ, ゲ", "した, しも, もと, さ.げる", 5, 7,
	// した, しも, もと, さ.げる, さ.がる, くだ.る, くだ.り, くだ.す, -くだ.す, くだ.さる, お.ろす, お.りる
	41, "中", "チュウ", "なか, うち, あた.る", 5, 8,	
	
	42, "北", "ホク", "きた", 6, 1,		
	43, "外", "ガイ, ゲ", "そと, ほか, はず.す, と-", 6, 2,  
	44, "右", "ウ, ユウ", "みぎ", 6, 3,
	45, "左", "サ, シャ", "ひだり", 6, 4,
	46, "西", "セイ, サイ, ス", "にし", 6, 5,
	47, "東", "ウ", "ひがし", 6, 6,
	48, "先", "セン", "さき, ま.ず", 6, 7,
	49, "口", "コウ, ク", "くち", 6, 8,	
	
	50, "前", "ゼン", "まえ", 7, 1,		
	51, "南", "ナン, ナ", "みなみ", 7, 2,  
	52, "後", "ゴ, コウ", "のち, うし.ろ, あと, おく.れる", 7, 3, 
	53, "間", "カン, ケン", "あいだ, ま, あい", 7, 4,
	54, "校", "コウ, キョウ", "", 7, 5,
	55, "国", "コク", "くに", 7, 6,
	56, "店", "テン", "みせ, たな", 7, 7,
	57, "社", "シャ", "やしろ", 7, 8,	
		
	58, "道", "ドウ, トウ", "みち", 8, 1,		
	59, "駅", "エキ", "", 8, 2,  
	
	// 人
	60, "人", "ジン, ニン", "ひと, -り, -と", 8, 3, 
	61, "女", "ジョ, ニョ, ニョウ", "おんな, め", 8, 4,
	62, "男", "ダン, ナン", "おとこ, お", 8, 5,
	63, "父", "フ", "ちち", 8, 6,
	64, "母", "ボ", "はは, も", 8, 7,
	65, "子", "シ, ス, ツ", "こ, ね", 8, 8,	//  
	
	66, "友", "ユウ", "とも", 9, 1,		
	67, "名", "メイ, ミョウ", "な", 9, 2,  
	68, "目", "モク, ボク", "め, ま-", 9, 3, 
	69, "耳", "ジ", "みみ", 9, 4,
	70, "足", "ソク", "あし, た.る", 9, 5,
	71, "語", "ゴ", "かた.る", 9, 6,
	72, "本", "ホン", "もと", 9, 7,
	73, "車", "シャ", "くるま", 9, 8,	
	
	// 形容詞
	74, "大", "ダイ, タイ", "おお-", 10, 1,		
	75, "小", "ショウ", "ちい.さい, こ-, お-, さ-", 10, 2,  
	76, "長", "チョウ", "なが.い, おさ", 10, 3, 
	77, "高", "コウ", "たか.い, たか", 10, 4,   // たか.い, たか, -だか, たか.まる, たか.める
	78, "多", "タ", "おお.い, まさ.に", 10, 5,
	79, "少", "ショウ", "すく.ない, すこ.し", 10, 6,
	80, "新", "シン", "あたら.しい, あら-, にい-", 10, 7,
	81, "古", "コ", "ふる.い", 10, 8,	
	
	82, "白", "ダハク, ビャク", "しろ, しら-", 11, 1,		
	
	// 行動
	83, "入", "ニュウ, ジュ", "い.る, はい.る", 11, 2,  // い.る, -い.る, -い.り, い.れる, -い.れ, はい.る
	84, "出", "シュツ, スイ", "で.る, -だ.す, い.でる", 11, 3,  // で.る, -で, だ.す, -だ.す, い.でる, い.だす
	85, "行", "コウ,ギョウ", "い-, ゆ-,おこな-", 11, 4,   // い.く, ゆ.く, -ゆ.き, -ゆき, -い.き, -いき, おこな.う, おこ.なう
	86, "来", "ライ, タイ", "く.る, きた.る, き, こ", 11, 5, // く.る, きた.る, きた.す, き.たす, き.たる, き, こ
	87,  "休", "キュウ", "やす.む", 11, 6,
	88, "食", "ショク, ジキ", "く.う, た.べる, は.む", 11, 7,
	89, "飲", "コイン, オン", "の.む, -の.み", 11, 8,	
	
	90, "学", "ガク", "まな.ぶ", 12, 1,		
	91, "書", "ショ", "か.く, -が.き, -がき", 12, 2,  
	92, "言", "ゲン, ゴン", "い.う, こと", 12, 3, 
	93, "読", "ドク, トク, トウ", "よ.む, -よ.み", 12, 4,   
	94, "話", "ワ", "はな.す, はなし", 12, 5,
	95, "買", "バイ", "か.う", 12, 6,
	96, "立", "リツ, リュウ, リットル", "た.つ", 12, 7,
	// た.つ, -た.つ, た.ち-, た.てる, -た.てる, た.て-, たて-, -た.て, -だ.て, -だ.てる
	97, "見", "コケン", "み.る", 12, 8,	
	
	98, "聞", "ブン, モン", "き.く", 13, 1,		
	99, "何", "カ", "なに, なん", 13, 2,  
	
	//  ソートされていない
	100, "会", "カイ, エ", "あ.う, あつ.まる", 13, 3, 
	101, "分", "ブン, フン, ブ", "わ.かる", 13, 4,
	102, "安", "アン", "やす.い", 13, 5, // やす.い, やす.まる, やす, やす.らか
	103, "手", "シュ, ズ", "て, た-", 13, 6,		
	104, "週", "シュウ", "", 13, 7,		
];