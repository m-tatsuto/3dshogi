/**
* メインゲームのマップを設定をする
*/
function setInitMapObject(){
	var mainMap = new map3D();
	var mainZone1 = new stockZone0();
	var mainZone2 = new stockZone1();

	mainGameField = new gameField(mainMap,mainZone1,mainZone2);
	console.log(mainGameField);

	setComaInitObjectInMainMap();
}

/**
* 説明用の駒をセットする 
*/
function setComaInitObjectInMainMap(){
	var selectObject = null;
	var reqParams = location.search.replace(/^\?(.*)$/, '$1').split("&");
	for (params in reqParams) {
		var param = reqParams[params].split("=");

		if ( param[0] == "coma" ) {
			switch( param[1] ) {
				case "fu" :
				selectObject = new fu(0);
				break;

				case "keima" :
				selectObject = new keima(0);
				break;

				case "kyosha" :
				selectObject = new kousha(0);
				break;

				case "gin" :
				selectObject = new gin(0);
				break;

				case "kin" :
				selectObject = new kin(0);
				break;

				case "hisha" :
				selectObject = new hisha(0);
				break;

				case "ryu" :
				selectObject = new nari_hisha(0);
				break;

				case "kaku" :
				selectObject = new kaku(0);
				break;

				case "uma" :
				selectObject = new nari_kaku(0);
				break;

				case "gyoku" :
				selectObject = new gyoku(0);
				break;
			}
		}
	}

	mainGameField.map.cell3d[4][4][4] = selectObject;
}

