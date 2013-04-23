function saveTest() {
	if (confirm("途中経過を保存しますか？前のデータは消えてしまいます")) {
		mainGameField.turn = turncamp;
		localStorage.setItem("mapInstance",JSON.stringify(mainGameField));
		alert("完了しました!");
	}
}

function loadTest() {
	if (confirm("前回保存したゲームを復元しますか？現在のゲームは終了しまいます")) {
		mainGameField = JSON.parse(localStorage.mapInstance);
		turncamp = mainGameField.turn;
		testMapDisplay();
	}
}
