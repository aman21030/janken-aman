$(function(){
	$('Button').click(function(){
		var pikachuHand = $(this).find('img').attr('src');
		// console.log(pikachuHand);
		$('.myhand').children('img').attr('src', pikachuHand);

	
	// イーブイの手をランダムで変える
	var imglist = new Array('img/gu.jpg','img/choki.jpg','img/pa.jpg');
	var selectimg = Math.floor(Math.random() * imglist.length);
	var evHand =  imglist[selectimg];
	$('.yourhand').children('img').attr('src', evHand);

	var hand1 = 'img/gu.jpg';
	var hand2 = 'img/choki.jpg';
	var hand3 = 'img/pa.jpg';

	if(pikachuHand === hand1 && evHand === hand2){
		alert('ピカチュウの勝ち☆');
	}else if(pikachuHand === hand2 && evHand === hand3){
		alert('ピカチュウの勝ち☆');
	}else if(pikachuHand === hand3 && evHand === hand1){
		alert('ピカチュウの勝ち☆');
	}else if(pikachuHand === evHand){
		alert('あいこだよー');
	}else{
		alert('イーブイの勝ち★');
	}
	// else if(pikachuHand === hand1 && evHand === hand3){
	// 	alert('イーブイの勝ち★');
	// }else if(pikachuHand === hand2 && evHand === hand1){
	// 	alert('イーブイの勝ち★');
	// }else if(pikachuHand === hand3 && evHand === hand2){
	// 	alert('イーブイの勝ち★');
	// }


	// あいこ
	// ピカチュウの手がグー、イーブイの手がグー
	// ピカチュウの手がチョキ、イーブイの手がチョキ
	// ピカチュウの手がパー、イーブイの手がパー

	// 勝ち
	// ピカチュウの手がグー、イーブイの手がチョキ
	// ピカチュウの手がチョキ、イーブイの手がパー
	// ピカチュウの手がパー、イーブイの手がグー

	// 負け
	// ピカチュウの手がグー、イーブイの手がパー
	// ピカチュウの手がチョキ、イーブイの手がグー
	// ピカチュウの手がパー、イーブイの手がチョキ



	});
});

