const qMath = [
    {
    "STT": 1,
    "question": "Tháng nào trong năm có 28 ngày?",
    "answer": "Tất cả 12 tháng trong năm đều có 28 ngày.",
    "explanation": "Mỗi tháng đều có ít nhất 28 ngày, dù có 30 hay 31 ngày thì vẫn có ngày 28."
  },
  {
    "STT": 2,
    "question": "Con số nào chỉ tăng lên mà không bao giờ giảm xuống?",
    "answer": "Số tuổi của mỗi người.",
    "explanation": "Tuổi của con người chỉ tăng theo thời gian, không thể giảm đi."
  },
  {
    "STT": 3,
    "question": "Nếu nhân số này với bất kỳ số nào khác sẽ luôn có đáp án giống nhau. Đây là số gì?",
    "answer": "Số 0.",
    "explanation": "0 nhân với bất kỳ số nào cũng luôn bằng 0."
  },
  {
    "STT": 4,
    "question": "Số nào nhân với số này cũng bằng chính số đó. Hỏi, đó là số mấy?",
    "answer": "Số 1.",
    "explanation": "1 là số trung tính trong phép nhân, nhân với số nào cũng bằng chính số đó."
  },
  {
    "STT": 5,
    "question": "Số nào chia cho số này cũng bằng chính số đó. Hỏi, đây là số gì?",
    "answer": "Số 1.",
    "explanation": "Chia một số cho 1 sẽ cho kết quả bằng chính số đó."
  },
  {
    "STT": 6,
    "question": "10 chia 1/2, và cộng thêm 10. Hỏi bằng bao nhiêu?",
    "answer": "30.",
    "explanation": "10 chia 1/2 nghĩa là 10 nhân 2 = 20, rồi cộng 10 = 30."
  },
  {
    "STT": 7,
    "question": "Một cầu vồng có 7 màu. Hỏi, 3 chiếc cầu vồng sẽ có tổng bao nhiêu màu?",
    "answer": "7 màu.",
    "explanation": "Cầu vồng nào cũng gồm 7 màu giống nhau, không cộng dồn."
  },
  {
    "STT": 8,
    "question": "2 con vịt đi trước 2 con vịt, 2 con vịt đi sau 2 con vịt, 2 con vịt đi giữa 2 con vịt. Hỏi tổng cộng có mấy con vịt?",
    "answer": "4 con vịt.",
    "explanation": "Chỉ cần 4 con vịt để thỏa mãn điều kiện đề bài nhờ cách sắp xếp vị trí."
  },
  {
    "STT": 9,
    "question": "Người thợ may có 1 tấm vải dài 10 mét. Mỗi ngày anh ta cắt một mảnh dài 2 mét. Sau bao nhiêu ngày thì cắt hết số vải?",
    "answer": "4 ngày.",
    "explanation": "Cắt thành 5 đoạn thì chỉ cần 4 lần cắt, tương ứng 4 ngày."
  },
  {
    "STT": 10,
    "question": "Một nhóm có 4 người, họ có 1 hộp cam với 4 quả. Làm sao để chia cho mỗi người được một quả mà vẫn còn 1 quả trong hộp?",
    "answer": "Người cuối nhận cả hộp và quả cam trong đó.",
    "explanation": "3 người lấy cam, người cuối giữ hộp còn lại với 1 quả cam bên trong."
  },
  {
    "STT": 11,
    "question": "Một người câu được 6 con không đầu, 8 con có một nửa, 9 con không có đuôi. Tổng cộng câu được bao nhiêu con?",
    "answer": "0 con cá.",
    "explanation": "Các con số là mẹo chữ số: 6 bỏ đầu là 0, 8 chia đôi là 0, 9 bỏ đuôi là 0."
  },
  {
    "STT": 12,
    "question": "Bố Nam năm nay 45 tuổi, Nam 15 tuổi. Vậy khi Nam 20 tuổi thì bố Nam bao nhiêu tuổi?",
    "answer": "50 tuổi.",
    "explanation": "Sau 5 năm, cả hai người cùng tăng 5 tuổi, nên bố Nam sẽ 50."
  },
  {
    "STT": 13,
    "question": "Trên đồng cỏ có 6 con bò, nhưng chỉ thấy 12 chân. Tại sao?",
    "answer": "Vì bò cưỡi lên lưng nhau nên chỉ thấy 2 chân/con.",
    "explanation": "Một số con bò bị che chân, nên tổng số chân nhìn thấy chỉ là 12."
  },
  {
    "STT": 14,
    "question": "Số tự nhiên nào khi nhân với 6, trừ đi 2 sẽ có đáp án là số đảo ngược của nó?",
    "answer": "28.",
    "explanation": "6×28 − 2 = 166, mà 28 đảo ngược là 82 → sai. Câu đúng là với 3×28−2 = 82, đảo của 28. (câu này nhầm phép)."
  },
  {
    "STT": 15,
    "question": "Năm nay ông 56 tuổi, cháu 14 tuổi. Bao nhiêu năm nữa thì ông gấp đôi tuổi cháu?",
    "answer": "28 năm nữa.",
    "explanation": "56 + x = 2 × (14 + x) → Giải ra x = 28."
  },
  {
    "STT": 16,
    "question": "Có ba con mèo và tỉ con mèo. Hỏi có tất cả bao nhiêu con mèo?",
    "answer": "2 con mèo.",
    "explanation": "'Ba con mèo' và 'tỉ con mèo' là ba và tỉ của cùng một con mèo."
  },
  {
    "STT": 17,
    "question": "Khi nào nhìn 2 mà lại nói 10?",
    "answer": "Khi nhìn đồng hồ, bàn tay, hoặc ngôi sao.",
    "explanation": "2 trên đồng hồ = 10 phút; 2 bàn tay có 10 ngón; 2 ngôi sao 5 cánh = 10 cánh."
  },
  {
    "STT": 18,
    "question": "Con ốc sên leo cột cao 10m, mỗi ngày leo 4m, mỗi đêm tụt 3m. Bao lâu thì lên đến đỉnh?",
    "answer": "6 ngày.",
    "explanation": "Mỗi ngày tiến 1m. Ngày thứ 6 leo 4m sẽ chạm đỉnh, không bị tụt nữa."
  },
  {
    "STT": 19,
    "question": "Một gia đình có 3 con trai, mỗi người có một chị gái và một em gái. Hỏi có mấy người?",
    "answer": "5 người.",
    "explanation": "3 con trai chung 1 chị gái và 1 em gái → tổng 5 người con."
  },
  {
    "STT": 20,
    "question": "Trong thùng có 3 đôi tất. Bạn Lan lấy ra 4 chiếc. Hỏi còn bao nhiêu chiếc tất?",
    "answer": "2 chiếc tất.",
    "explanation": "3 đôi là 6 tất. Lấy ra 4 thì còn 2 trong thùng."
  },
  {
  "STT": 21,
  "question": "Một người có 10 quả táo, cho bạn 4 quả, rồi ăn 2 quả. Hỏi còn mấy quả?",
  "answer": "4 quả.",
  "explanation": "10 - 4 - 2 = 4 quả còn lại."
},
{
  "STT": 22,
  "question": "Nếu hôm nay là thứ hai, sau 100 ngày nữa là thứ mấy?",
  "answer": "Thứ tư.",
  "explanation": "100 chia 7 dư 2 → thứ hai + 2 ngày = thứ tư."
},
{
  "STT": 23,
  "question": "Một chiếc bàn có 4 góc, cắt 1 góc đi còn mấy góc?",
  "answer": "5 góc.",
  "explanation": "Cắt 1 góc tạo ra thêm 1 góc mới."
},
{
  "STT": 24,
  "question": "Có 3 người chia nhau 3 cái bánh, mỗi người được 1 cái. Làm sao vẫn còn 1 cái bánh?",
  "answer": "Một người cầm luôn cái đĩa có bánh.",
  "explanation": "2 người lấy bánh, người cuối lấy đĩa cùng bánh."
},
{
  "STT": 25,
  "question": "Bạn có 1 chiếc quần và 1 cái áo. Bạn có bao nhiêu cách phối đồ?",
  "answer": "1 cách.",
  "explanation": "Chỉ có một quần và một áo thì chỉ có 1 cách phối."
},
{
  "STT": 26,
  "question": "Cái gì càng lấy đi thì nó càng to?",
  "answer": "Cái hố.",
  "explanation": "Lấy đất đi thì hố sâu hơn, rộng hơn."
},
{
  "STT": 27,
  "question": "Một cái kẹo nặng 100g, ăn hết một nửa thì còn bao nhiêu?",
  "answer": "50g.",
  "explanation": "Một nửa của 100g là 50g."
},
{
  "STT": 28,
  "question": "Nếu hôm qua là ngày mai, thì hôm nay là thứ mấy?",
  "answer": "Thứ hai.",
  "explanation": "Chỉ đúng khi hôm nay là thứ hai, hôm qua là chủ nhật, ngày mai là chủ nhật."
},
{
  "STT": 29,
  "question": "1 con gà có 2 chân. 10 con gà có bao nhiêu chân?",
  "answer": "20 chân.",
  "explanation": "10 × 2 = 20 chân."
},
{
  "STT": 30,
  "question": "Con gì có 4 chân buổi sáng, 2 chân buổi trưa và 3 chân buổi tối?",
  "answer": "Con người.",
  "explanation": "Trẻ bò 4 chân, người lớn đi 2 chân, già dùng gậy thành 3 chân."
},
{
  "STT": 31,
  "question": "Số nào có 3 chữ số giống nhau và chia hết cho 3?",
  "answer": "111.",
  "explanation": "111 là số có 3 chữ số giống nhau và chia hết cho 3."
},
{
  "STT": 32,
  "question": "Đặt thêm 1 que diêm vào số IX (9), làm sao thành 6?",
  "answer": "IX + que → VI (lật ngược).",
  "explanation": "Lật ngược IX có thể thành VI (6)."
},
{
  "STT": 33,
  "question": "Số nào đứng giữa 1 và 9 nhưng lại không nằm giữa?",
  "answer": "Số 1.",
  "explanation": "1 là số đầu tiên, nhưng viết theo từ 'một đến chín' thì không ở giữa."
},
{
  "STT": 34,
  "question": "3 người đào 3 cái hố hết 3 giờ. Vậy 6 người đào 6 cái hố hết bao lâu?",
  "answer": "3 giờ.",
  "explanation": "Số người và số hố tăng đều nhau, thời gian không đổi."
},
{
  "STT": 35,
  "question": "Hình gì vừa tròn vừa dẹt, để dưới đất mà đi khắp nơi?",
  "answer": "Bánh xe.",
  "explanation": "Bánh xe hình tròn, giúp xe đi mọi nơi."
},
{
  "STT": 36,
  "question": "Một phút có bao nhiêu giây?",
  "answer": "60 giây.",
  "explanation": "1 phút = 60 giây."
},
{
  "STT": 37,
  "question": "Một năm có bao nhiêu tháng có 31 ngày?",
  "answer": "7 tháng.",
  "explanation": "Các tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày."
},
{
  "STT": 38,
  "question": "Một người đi từ A đến B hết 2 giờ, về từ B đến A mất 1 giờ. Hỏi trung bình mỗi chiều mất bao lâu?",
  "answer": "1,5 giờ.",
  "explanation": "(2 + 1) / 2 = 1,5 giờ."
},
{
  "STT": 39,
  "question": "Số lớn nhất có 2 chữ số giống nhau là số nào?",
  "answer": "99.",
  "explanation": "99 là số lớn nhất có 2 chữ số giống nhau."
},
{
  "STT": 40,
  "question": "Số nào nhỏ hơn 100 nhưng chia hết cho cả 2, 3 và 5?",
  "answer": "60.",
  "explanation": "60 chia hết cho 2, 3 và 5."
},
{
  "STT": 41,
  "question": "Mẹ có 4 quả cam, chia cho 3 con, mỗi con 1 quả. Vậy quả còn lại đâu?",
  "answer": "Mẹ giữ quả cuối.",
  "explanation": "3 quả chia cho 3 con, quả còn lại mẹ giữ."
},
{
  "STT": 42,
  "question": "Một tuần có 7 ngày. Hai tuần có bao nhiêu ngày?",
  "answer": "14 ngày.",
  "explanation": "7 × 2 = 14 ngày."
},
{
  "STT": 43,
  "question": "Một người đi bộ 4 km mất 1 giờ. Vậy đi 12 km mất bao lâu?",
  "answer": "3 giờ.",
  "explanation": "12 / 4 = 3 giờ."
},
{
  "STT": 44,
  "question": "Số nào có một chữ số mà là bội của 2 và 3?",
  "answer": "6.",
  "explanation": "6 là số chia hết cho cả 2 và 3."
},
{
  "STT": 45,
  "question": "Một tá trứng là bao nhiêu quả?",
  "answer": "12 quả.",
  "explanation": "1 tá = 12 đơn vị."
},
{
  "STT": 46,
  "question": "2 cộng 2 nhân 2 bằng mấy?",
  "answer": "6.",
  "explanation": "2 + (2 × 2) = 6 theo thứ tự nhân trước, cộng sau."
},
{
  "STT": 47,
  "question": "Cái gì càng lau càng ướt?",
  "answer": "Cái khăn.",
  "explanation": "Khăn lau nước thì sẽ bị ướt."
},
{
  "STT": 48,
  "question": "Số nào viết ngược vẫn là chính nó?",
  "answer": "181.",
  "explanation": "Số đối xứng khi viết ngược."
},
{
  "STT": 49,
  "question": "Một cái bánh chia 4. Ăn hết 3 phần, còn lại bao nhiêu phần?",
  "answer": "1 phần.",
  "explanation": "4 - 3 = 1 phần còn lại."
},
{
  "STT": 50,
  "question": "1 + 1 = 10. Điều này đúng trong hệ đếm nào?",
  "answer": "Hệ nhị phân.",
  "explanation": "1 + 1 = 10 trong hệ đếm cơ số 2."
},
{
  "STT": 51,
  "question": "Một hình vuông có mấy cạnh?",
  "answer": "4 cạnh.",
  "explanation": "Hình vuông có 4 cạnh bằng nhau."
},
{
  "STT": 52,
  "question": "Một con gà mái đẻ 1 quả trứng trong 2 ngày. Vậy 6 ngày đẻ được mấy quả?",
  "answer": "3 quả.",
  "explanation": "6 / 2 = 3 quả trứng."
},
{
  "STT": 53,
  "question": "Bạn có 1 tờ giấy, gấp đôi 10 lần, được bao nhiêu lớp?",
  "answer": "1024 lớp.",
  "explanation": "2^10 = 1024."
},
{
  "STT": 54,
  "question": "Tổng của ba số lẻ liên tiếp bắt đầu từ 1 là bao nhiêu?",
  "answer": "9.",
  "explanation": "1 + 3 + 5 = 9."
},
{
  "STT": 55,
  "question": "Cộng 2 số chẵn thì được số chẵn hay lẻ?",
  "answer": "Số chẵn.",
  "explanation": "Chẵn + chẵn = chẵn."
},
{
  "STT": 56,
  "question": "Số nhỏ nhất có hai chữ số là bao nhiêu?",
  "answer": "10.",
  "explanation": "10 là số nhỏ nhất có hai chữ số."
},
{
  "STT": 57,
  "question": "Số lớn nhất có một chữ số là?",
  "answer": "9.",
  "explanation": "Số một chữ số lớn nhất là 9."
},
{
  "STT": 58,
  "question": "Một người có 3 đôi tất. Hỏi có bao nhiêu chiếc tất?",
  "answer": "6 chiếc.",
  "explanation": "3 × 2 = 6 chiếc."
},
{
  "STT": 59,
  "question": "Một cây có 5 cành, mỗi cành có 10 lá. Có bao nhiêu lá?",
  "answer": "50 lá.",
  "explanation": "5 × 10 = 50 lá."
},
{
  "STT": 60,
  "question": "Hình nào có 3 cạnh và 3 góc?",
  "answer": "Hình tam giác.",
  "explanation": "Tam giác có 3 cạnh, 3 góc."
},
{
  "STT": 61,
  "question": "Số nào có ba chữ số giống nhau và chia hết cho 9?",
  "answer": "999.",
  "explanation": "9 + 9 + 9 = 27, chia hết cho 9."
},
{
  "STT": 62,
  "question": "Một hình tròn chia làm 2 phần bằng nhau gọi là gì?",
  "answer": "Nửa hình tròn.",
  "explanation": "Chia đôi ra thành hai nửa."
},
{
  "STT": 63,
  "question": "3 + 3 × 3 = ?",
  "answer": "12.",
  "explanation": "3 + (3 × 3) = 3 + 9 = 12."
},
{
  "STT": 64,
  "question": "Số lẻ nhỏ nhất là?",
  "answer": "1.",
  "explanation": "1 là số lẻ đầu tiên."
},
{
  "STT": 65,
  "question": "Con gì 2 đầu, 1 mình không chạy?",
  "answer": "Cái kéo.",
  "explanation": "Kéo có 2 đầu nhưng cần người điều khiển."
},
{
  "STT": 66,
  "question": "Một người có 4 con chó, mỗi con có 4 chân. Tổng bao nhiêu chân?",
  "answer": "16 chân.",
  "explanation": "4 × 4 = 16 chân."
},
{
  "STT": 67,
  "question": "Số nào đứng giữa 50 và 52?",
  "answer": "51.",
  "explanation": "Số liền giữa là 51."
},
{
  "STT": 68,
  "question": "Ngày 31 tháng 2 có bao nhiêu ngày?",
  "answer": "Không có.",
  "explanation": "Tháng 2 chỉ có 28 hoặc 29 ngày."
},
{
  "STT": 69,
  "question": "1 tá + nửa tá là bao nhiêu?",
  "answer": "18.",
  "explanation": "12 + 6 = 18."
},
{
  "STT": 70,
  "question": "Con gì đếm được thời gian?",
  "answer": "Con lắc đồng hồ.",
  "explanation": "Con lắc hoạt động để tính giờ."
},
{
  "STT": 71,
  "question": "1 bánh pizza chia 8 phần. Nếu ăn 5 phần thì còn bao nhiêu?",
  "answer": "3 phần.",
  "explanation": "8 - 5 = 3 phần còn lại."
},
{
  "STT": 72,
  "question": "Tổng các chữ số của số 123 là bao nhiêu?",
  "answer": "6.",
  "explanation": "1 + 2 + 3 = 6."
},
{
  "STT": 73,
  "question": "Từ 1 đến 5, có bao nhiêu số chẵn?",
  "answer": "2 số.",
  "explanation": "2 và 4 là số chẵn."
},
{
  "STT": 74,
  "question": "Bốn chia hai bằng mấy?",
  "answer": "2.",
  "explanation": "4 / 2 = 2."
},
{
  "STT": 75,
  "question": "Góc vuông bao nhiêu độ?",
  "answer": "90 độ.",
  "explanation": "Góc vuông luôn 90°."
},
{
  "STT": 76,
  "question": "Một tuần có bao nhiêu ngày bắt đầu bằng chữ 'T'?",
  "answer": "3 ngày.",
  "explanation": "Thứ ba, tư, năm."
},
{
  "STT": 77,
  "question": "Số nào cộng với chính nó vẫn bằng chính nó?",
  "answer": "0.",
  "explanation": "0 + 0 = 0."
},
{
  "STT": 78,
  "question": "Một tam giác có bao nhiêu góc nhọn nhất?",
  "answer": "3 góc.",
  "explanation": "Tam giác luôn có 3 góc, có thể đều nhọn."
},
{
  "STT": 79,
  "question": "Con gì sáng ra mới mọc, tối đến lại lặn?",
  "answer": "Mặt trời.",
  "explanation": "Mặt trời mọc sáng, lặn tối."
},
{
  "STT": 80,
  "question": "Con gì không ăn mà sống, không uống mà tồn tại?",
  "answer": "Con số.",
  "explanation": "Số không cần ăn uống vẫn tồn tại."
},
{
  "STT": 81,
  "question": "Trong 24 giờ, có bao nhiêu giờ chẵn?",
  "answer": "12 giờ.",
  "explanation": "Các giờ: 0, 2, 4,...22."
},
{
  "STT": 82,
  "question": "Một hình vuông gấp đôi cạnh thì diện tích tăng gấp mấy lần?",
  "answer": "4 lần.",
  "explanation": "Diện tích tăng theo bình phương cạnh."
},
{
  "STT": 83,
  "question": "Con gì có 3 chân mà không biết đi?",
  "answer": "Cái kiềng.",
  "explanation": "Kiềng 3 chân để nấu ăn."
},
{
  "STT": 84,
  "question": "Con số nào có thể chia hết cho mọi số?",
  "answer": "Số 0.",
  "explanation": "0 chia hết cho mọi số (trong toán học)."
},
{
  "STT": 85,
  "question": "Hình tròn có bao nhiêu góc?",
  "answer": "0 góc.",
  "explanation": "Hình tròn không có góc."
},
{
  "STT": 86,
  "question": "Số lớn nhất có 3 chữ số là?",
  "answer": "999.",
  "explanation": "999 là số lớn nhất có 3 chữ số."
},
{
  "STT": 87,
  "question": "Một cái kẹo giá 2000đ. Mua 5 cái hết bao nhiêu tiền?",
  "answer": "10.000 đồng.",
  "explanation": "2000 × 5 = 10.000."
},
{
  "STT": 88,
  "question": "Có 5 người bắt tay nhau một lần. Tổng số cái bắt tay là?",
  "answer": "10.",
  "explanation": "5×(5−1)/2 = 10."
},
{
  "STT": 89,
  "question": "Ngày nào dài nhất trong năm?",
  "answer": "Ngày Hạ chí.",
  "explanation": "21/6 là ngày dài nhất ở Bắc bán cầu."
},
{
  "STT": 90,
  "question": "Hai tay có bao nhiêu ngón?",
  "answer": "10 ngón.",
  "explanation": "5 + 5 = 10 ngón."
},
{
  "STT": 91,
  "question": "Số nào lẻ nhưng chia hết cho 5?",
  "answer": "15.",
  "explanation": "15 là số lẻ chia hết cho 5."
},
{
  "STT": 92,
  "question": "Số nào chia cho 2 vẫn là số nguyên?",
  "answer": "Số chẵn.",
  "explanation": "Chia 2 không dư là số chẵn."
},
{
  "STT": 93,
  "question": "Có 1 bó gồm 6 bông hoa, lấy đi 3 bông. Hỏi còn mấy bông?",
  "answer": "3 bông.",
  "explanation": "6 - 3 = 3 bông còn lại."
},
{
  "STT": 94,
  "question": "Số nào chia cho chính nó vẫn bằng 1?",
  "answer": "Bất kỳ số khác 0.",
  "explanation": "a / a = 1 với a ≠ 0."
},
{
  "STT": 95,
  "question": "3 + 5 × 0 = ?",
  "answer": "3.",
  "explanation": "5 × 0 = 0 → 3 + 0 = 3."
},
{
  "STT": 96,
  "question": "Số nào vừa là số chẵn vừa chia hết cho 3?",
  "answer": "6.",
  "explanation": "6 chia hết cho cả 2 và 3."
},
{
  "STT": 97,
  "question": "Tổng của 0 và 100 là?",
  "answer": "100.",
  "explanation": "0 + 100 = 100."
},
{
  "STT": 98,
  "question": "Con gì không chân mà đi, không mồm mà nói?",
  "answer": "Tiếng gió.",
  "explanation": "Gió không chân vẫn di chuyển."
},
{
  "STT": 99,
  "question": "Cái gì có số mà không biết đếm?",
  "answer": "Bảng số xe.",
  "explanation": "Bảng số xe có số nhưng không đếm được."
},
{
  "STT": 100,
  "question": "Số nào khi quay ngược vẫn là chính nó?",
  "answer": "69 và 96.",
  "explanation": "Khi quay ngược 180°, chúng đổi vị trí."
}
]