$(function() {
    $("#getResult").click(function() {
        // 名前の取得
        var name = $("#name").val();
        if (name === "") {
        	alert("名前を入力して下さい");
        	return;
        }

        // 運勢候補の定義
        var situations = ["web教室", "渋谷", "コンビニ", "自宅", "職場"];
        var partners   = ["先生", "友達", "恋人"];
        var actions    = ["スクー", "マラソン", "プログラミング", "食事", "デート"];

        // 運勢候補から結果を生成
        var situation = pickUpAtRandom(situations);
        var partner   = pickUpAtRandom(partners);
        var action    = pickUpAtRandom(actions);
        var result    = "『" + name + "』さんは明日『" + situation + "』で『" + partner + "』と『" + action + "』すると運気がアップします！";

        // 結果をHTML出力用に整形
        var resultHtml = "<h2>結果</h2><p>" + result + "</p>";

        // tweetリンクを生成 参考: https://dev.twitter.com/web/tweet-button/web-intent
        var tweetHtml = "<p><a href='https://twitter.com/intent/tweet?hashtags=schoo&text=" + encodeURIComponent(result) + " 【jQuery実践 姓名占いの作成】 https://schoo.jp/course/199" + "'>結果をツイート</a></p>";

        // 結果の出力
        $("#result").html(resultHtml + tweetHtml);
    });
});
/**
 * 配列を受け取り、要素の一つをランダムで返します
 */
function pickUpAtRandom(ary) {
    return ary[Math.floor(Math.random() * (ary.length))];
}