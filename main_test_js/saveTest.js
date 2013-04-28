function saveTest() {
  if (confirm("途中経過を保存しますか？前保存したデータは消えてしまいます")) {
    mainGameField.turn = turncamp;
    mainGameField.timestamp = new Date();
    window.localStorage.setItem("mapInstance",JSON.stringify(mainGameField));
    if (JSON.stringify(mainGameField) === window.localStorage.mapInstance) {
      alert("完了しました!");
    }
  }
}

function loadTest() {
  if (confirm("前回保存したゲームを復元しますか？現在のゲームは終了しまいます")) {
    mainGameField = JSON.parse(window.localStorage.mapInstance);
    turncamp = mainGameField.turn;
    testMapDisplay();
  }
}
