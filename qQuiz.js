  const qQuiz = [
  {
    question: "Là kim mà chẳng biết khâu\nNgắn, dài cứ chạy cùng nhau suốt đời\nĐứng lại là «chết» mất rồi\nMiệt mài, chăm chỉ giúp người sớm trưa",
    answer: "Đồng hồ",
    explanation: "Kim đồng hồ chạy liên tục để chỉ thời gian, không phải kim khâu."
  },
  {
    question: "Đèn gì chỉ có 3 màu\nChỉ bật từng chiếc, đứng đầu ngã tư",
    answer: "Đèn giao thông",
    explanation: "Đèn giao thông gồm 3 màu đỏ, vàng, xanh để điều khiển phương tiện."
  },
  {
    question: "Đèn gì không thắp trong nhà\nThắp trên sóng biển từ xa cho tàu",
    answer: "Đèn hải đăng",
    explanation: "Đèn hải đăng giúp tàu thuyền định hướng vào ban đêm."
  },
  {
    question: "Muốn tìm nam, bắc, đông, tây\nNhìn mặt tôi sẽ biết ngay hướng nào?",
    answer: "La bàn",
    explanation: "La bàn dùng kim chỉ nam để định hướng địa lý."
  },
  {
    question: "Cây gì không lá, không hoa\nSáng đêm sinh nhật cả nhà vây quanh",
    answer: "Cây nến",
    explanation: "Nến là vật phát sáng không có hoa lá, thường dùng trong sinh nhật."
  },
  {
    question: "Dù đứng yên một chỗ\nVẫn đưa bạn lên cao\nBạn bước cho cẩn thận\nKẻo có khi ngã nhào",
    answer: "Cái thang",
    explanation: "Thang giúp leo lên cao nhưng cần cẩn thận khi sử dụng."
  },
  {
    question: "Các bà, các chị, các dì đều thương\nEm đi, em lại bốn phương\nDọc ngang lắm lối, lách luồn nhiều nơi\nTấm thân hiến trọn cho người\nSang hèn chẳng chê chuộng, giúp người chẳng quản công",
    answer: "Cây kim",
    explanation: "Kim là vật nhỏ giúp may vá, được ví như người chăm chỉ tận tụy."
  },
  {
    question: "Thân em xưa ở bụi tre.\nMùa đông xếp lại mùa hè mở ra.",
    answer: "Cây quạt giấy",
    explanation: "Quạt giấy thường làm từ tre, dùng để quạt mát mùa hè."
  },
  {
    question: "Thân bằng gỗ\nMặt bằng da\nHễ động đến\nLà kêu la\nGọi bạn tới\nTiễn bạn về\nĐứng đầu hè\nCho người đánh",
    answer: "Cái trống",
    explanation: "Cái trống dùng để phát hiệu lệnh trong học đường hoặc nghi lễ."
  },
  {
    question: "Mình tròn thân trắng\nDáng hình thon thon\nThân phận cỏn con\nMòn dần theo chữ",
    answer: "Viên phấn",
    explanation: "Viên phấn dùng để viết bảng, dần mòn đi theo thời gian sử dụng."
  },
  {
    question: "Tất cả các môn học\nXếp hàng trong từng ô\nGiúp cho bạn biết được\nSách vở cho mỗi giờ",
    answer: "Thời khóa biểu",
    explanation: "Thời khóa biểu là bảng liệt kê các tiết học theo từng thời điểm."
  },
  {
    question: "Cái gậy cạnh quả trứng gà\nĐem về khoe mẹ cả nhà mừng vui",
    answer: "Số 10",
    explanation: "Số 1 như cái gậy, số 0 giống quả trứng tạo thành số 10 – điểm tuyệt đối."
  },
  {
    question: "Con gì đến chán\nGiống ngỗng, giống ngan\nBơi trên bài làm\nCủa anh lười học",
    answer: "Số 2",
    explanation: "Hình dạng số 2 giống con vịt và là điểm thấp trong bài kiểm tra."
  },
  {
    question: "Cậu em một tuổi đi đầu\nBa anh lên chín theo sau thẳng hàng\nRiêng anh chín cuối rất ngang\nTrồng cây chuối ngược cho làng biết tay",
    answer: "1996",
    explanation: "Câu thơ mô tả hình dạng các số tạo thành năm 1996."
  },
    {
    question: "Con gì không chân không tay\nSuốt ngày bơi lội, tối ngày phun mưa?",
    answer: "Đám mây",
    explanation: "Đám mây trôi trên trời và tạo ra mưa, không có tay chân."
  },
  {
    question: "Cái gì càng rửa càng bẩn?",
    answer: "Nước rửa chén",
    explanation: "Rửa chén xong thì nước đó sẽ bẩn."
  },
  {
    question: "Cái gì sáng thì nhỏ, tối lại to?",
    answer: "Con ngươi",
    explanation: "Con ngươi mắt giãn ra trong bóng tối để nhìn rõ hơn."
  },
  {
    question: "Con gì đầu dê mình ốc?",
    answer: "Con dốc",
    explanation: "Chơi chữ: “dốc” có “đầu dê” (chữ D) và “mình ốc” (chữ OC)."
  },
  {
    question: "Tôi là anh em với mặt trời\nBan đêm tôi đến, ánh sáng dần vơi\nTròn, khuyết rồi lại đầy vơi\nTrẻ em nhìn ngắm, gọi tôi là gì?",
    answer: "Mặt trăng",
    explanation: "Mặt trăng là vệ tinh của Trái Đất, sáng vào ban đêm."
  },
  {
    question: "Sáng ra mặt trắng phau phau\nTối vào lại đen sì sì là ai?",
    answer: "Cục tẩy",
    explanation: "Tẩy sạch giấy trắng, dùng nhiều thì bẩn đen."
  },
  {
    question: "Càng đánh tôi lại càng to\nKhông đánh thì bé, khó mà vang xa",
    answer: "Cái trống",
    explanation: "Trống càng đánh mạnh thì âm thanh càng vang."
  },
  {
    question: "Bốn chân mà chẳng biết đi\nLúc nào cũng đứng một khiêm nhường nhàng?",
    answer: "Cái bàn",
    explanation: "Bàn có 4 chân nhưng không biết đi."
  },
  {
    question: "Vừa dài vừa cứng, học trò dùng nhiều\nBẻ gãy, gọt nhọn đủ điều\nDùng xong hết ngòi thì thôi!",
    answer: "Bút chì",
    explanation: "Bút chì dùng để viết, khi hết ngòi thì bỏ."
  },
  {
    question: "Không là chim mà biết bay\nMang ta tới những chân trời xa xăm",
    answer: "Máy bay",
    explanation: "Máy bay không phải chim nhưng có thể bay xa."
  },
  {
    question: "Có họ nhưng không có tên\nNgắn dài tùy ý, vẫn bền người ơi",
    answer: "Dây thun",
    explanation: "Dây thun có thể co giãn, không có tên gọi cụ thể."
  },
  {
    question: "Đầu tròn, thân gỗ, sắc màu\nTrẻ em tô vẽ, điểm màu lung linh",
    answer: "Bút sáp màu",
    explanation: "Bút sáp màu dùng để tô vẽ trong học tập và giải trí."
  },
  {
    question: "Có tên mà chẳng có hình\nLịch ghi rõ ràng, gọi là gì đây?",
    answer: "Tháng",
    explanation: "Tháng có tên gọi nhưng không có hình thù cụ thể."
  },
  {
    question: "Không tay mà vỗ liên hồi\nKhông chân mà chạy quanh đời chẳng yên",
    answer: "Sóng biển",
    explanation: "Sóng biển không có tay chân nhưng vỗ liên tục."
  },
  {
    question: "Không phổi mà biết thở\nKhông miệng mà biết hô\nCó thân mà chẳng đi đâu",
    answer: "Cái quạt",
    explanation: "Quạt tạo gió như thở, không di chuyển nhưng có tác dụng làm mát."
  },
  {
    question: "Gọi là ‘em’ nhưng to hơn anh\nCùng cha cùng mẹ, trông thật là xinh?",
    answer: "Em họ",
    explanation: "Chơi chữ: 'em' có thể lớn tuổi hơn nhưng vẫn là em họ."
  },
  {
    question: "Không cần gió vẫn bay\nĐưa bạn đi thật xa ngay\nLà gì vậy bạn ơi đây?",
    answer: "Máy bay",
    explanation: "Máy bay hoạt động bằng động cơ không cần gió tự nhiên."
  },
  {
    question: "Không đi học cũng có bảng\nKhông làm toán cũng dùng phấn\nLà gì?",
    answer: "Bảng tên",
    explanation: "Chơi chữ: bảng tên dùng để ghi tên, không liên quan học tập."
  },
  {
    question: "Sáng đến lớp em khoác vai\nChiều về nhà em mở toang\nChứa sách, bút, giấy vở ngăn\nLà ai vậy nhỉ cả làng đều mang?",
    answer: "Cặp sách",
    explanation: "Cặp sách là đồ vật thân quen của học sinh."
  },
  {
    question: "Không biết nói mà lại kể chuyện\nKhông biết nhìn mà vẫn cho xem\nLà gì?",
    answer: "Cuốn sách",
    explanation: "Sách là kho kiến thức dù không nói được."
  },
    {
    question: "Tôi có mặt khắp nơi\nMà không ai nhìn thấy\nKhông màu và không mùi\nCon người luôn cần tôi",
    answer: "Không khí",
    explanation: "Không khí không nhìn thấy được nhưng là thứ không thể thiếu cho sự sống."
  },
  {
    question: "Sáng sớm thì mọc\nChiều muộn thì lặn\nTỏa sáng ban ngày\nLà ai vậy nhỉ?",
    answer: "Mặt trời",
    explanation: "Mặt trời mọc và lặn mỗi ngày, chiếu sáng ban ngày."
  },
  {
    question: "Không ai mời mà đến\nKhông ai đuổi mà đi\nĐến thì ướt sũng cả khi\nLà gì vậy nhỉ?",
    answer: "Cơn mưa",
    explanation: "Mưa đến bất chợt, không ai điều khiển được."
  },
  {
    question: "Nhà nào cũng có tôi\nTôi kêu chẳng ai vui\nKêu hoài chẳng ai thích\nLà ai?",
    answer: "Chuông báo thức",
    explanation: "Chuông báo thức thường gây khó chịu khi kêu vào sáng sớm."
  },
  {
    question: "Mắt chẳng thấy, mũi chẳng ngửi\nNghe được nhưng không cầm được\nLà gì?",
    answer: "Âm thanh",
    explanation: "Âm thanh là thứ ta chỉ cảm nhận bằng tai."
  },
  {
    question: "Tôi có bốn chân nhưng chẳng thể chạy\nNgồi cả ngày mà chẳng mỏi mệt\nLà gì?",
    answer: "Cái ghế",
    explanation: "Ghế có bốn chân nhưng không di chuyển."
  },
  {
    question: "Càng chơi tôi lại càng ngắn\nCàng ngắn tôi càng hay\nTôi là ai thế?",
    answer: "Bút chì",
    explanation: "Bút chì ngắn dần khi dùng để viết."
  },
  {
    question: "Tròn như quả bóng\nKhông đá mà chạy\nKhông máy mà quay\nLà ai vậy nhỉ?",
    answer: "Quả địa cầu",
    explanation: "Quả địa cầu hình tròn, thường được quay bằng tay."
  },
  {
    question: "Ngày nào cũng gặp mặt tôi\nTôi cho bạn biết bạn là ai\nMỗi sáng soi tôi bạn thấy bạn\nLà gì đây?",
    answer: "Gương",
    explanation: "Gương phản chiếu hình ảnh của bạn."
  },
  {
    question: "Trước thì đỏ, sau thì xanh\nLá thì cuốn, thân thì thẳng\nTrồng xuống đất, lớn dần lên\nLà gì?",
    answer: "Cây ớt",
    explanation: "Ớt có trái chín đỏ, khi còn non có thể màu xanh."
  },
  {
    question: "Không chân mà chạy khắp nhà\nKhông tay mà biết đưa qua đưa lại\nLà gì?",
    answer: "Robot hút bụi",
    explanation: "Robot hút bụi tự chạy mà không có tay chân."
  },
  {
    question: "Tôi là bạn tốt của đêm\nCó muôn vàn anh em lung linh\nTỏa sáng nhưng chẳng đốt ai\nLà ai?",
    answer: "Ngôi sao",
    explanation: "Ngôi sao lấp lánh trên trời về đêm."
  },
  {
    question: "Không phải cá mà bơi tung tăng\nKhông phải chim mà bay giữa không trung\nLà gì?",
    answer: "Máy bay",
    explanation: "Máy bay lượn trên không như chim."
  },
  {
    question: "Mỗi sáng dậy em gặp tôi\nNhắc em đánh răng, rửa mặt rồi đi\nCố nhìn tôi bạn sẽ thấy bạn\nLà gì vậy?",
    answer: "Gương soi",
    explanation: "Gương soi dùng hàng ngày để nhìn khuôn mặt mình."
  },
  {
    question: "Tôi là đường, nhưng không để ăn\nNgười đi, xe chạy, tôi giúp đỡ\nCó vạch kẻ trắng thật là ngay\nLà gì?",
    answer: "Đường giao thông",
    explanation: "Đường để di chuyển, không phải để ăn."
  },
  {
    question: "Mặc áo trắng, nằm im lìm\nNgười đến vẽ chữ, làm toán nhanh\nLà gì?",
    answer: "Cuốn vở",
    explanation: "Vở là nơi viết chữ, học tập."
  },
  {
    question: "Hai tai, một miệng, cắm dây mà nghe\nDùng để học, nghe nhạc mê\nLà gì vậy nhỉ?",
    answer: "Tai nghe",
    explanation: "Tai nghe giúp nghe âm thanh riêng tư."
  },
  {
    question: "Không cần cắm điện vẫn sáng\nKhông sợ mưa gió vẫn bay\nLà ai vậy?",
    answer: "Đom đóm",
    explanation: "Đom đóm phát sáng tự nhiên trong đêm tối."
  },
  {
    question: "Cái gì càng kéo thì càng dài\nKhông phải sợi dây mà ai cũng dùng?",
    answer: "Cuộn giấy vệ sinh",
    explanation: "Giấy vệ sinh càng kéo càng dài ra để dùng."
  },
  {
    question: "Con gì không có xương\nMà vẫn mềm, vẫn nhảy, vẫn bơi?",
    answer: "Sứa",
    explanation: "Sứa là động vật không xương sống sống ở biển."
  },
  {
    question: "Tôi luôn ở sau bạn\nKhông bao giờ đi trước bạn\nTôi là ai?",
    answer: "Cái bóng",
    explanation: "Bóng luôn đi theo sau bạn khi có ánh sáng."
  },
  {
    question: "Vừa là mặt, vừa là tay\nGắn tường, có kim, quay hoài không ngưng",
    answer: "Đồng hồ treo tường",
    explanation: "Đồng hồ treo tường có mặt và kim giờ."
  },
  {
    question: "Sáng ra xếp thành hàng\nTối về lộn xộn ngang\nĐưa các bạn đi học\nMà chẳng biết kêu vang?",
    answer: "Giày dép học sinh",
    explanation: "Giày dép xếp hàng gọn gàng lúc đi học."
  },
  {
    question: "Con gì nhỏ xíu\nThích chui vào lỗ\nThấy mùi là tìm\nHay cắn đồ ăn?",
    answer: "Chuột",
    explanation: "Chuột thường ẩn nấp trong lỗ và ăn vụng đồ."
  },
  {
    question: "Thường xuất hiện mỗi buổi sáng\nBên khung cửa đọng từng giọt long lanh\nKhông phải nước rơi từ trên\nLà gì?",
    answer: "Sương mai",
    explanation: "Sương mai đọng trên lá, cửa sổ vào sáng sớm."
  },
  {
    question: "Mình tròn vo, nhỏ như hạt\nDùng nấu ăn mỗi ngày\nKhông phải gia vị cay\nLà gì?",
    answer: "Hạt gạo",
    explanation: "Gạo là lương thực chính của người Việt."
  },
  {
  question: "Không có miệng mà biết nói\nKhông có tai vẫn nghe lời\nBấm nhẹ là lời tuôn rơi\nLà ai vậy nhỉ, bạn ơi đoán nào?",
  answer: "Điện thoại",
  explanation: "Điện thoại giúp giao tiếp từ xa mà không cần miệng thật để nói."
},
{
  question: "Có đầu mà chẳng có tóc\nCó cổ mà chẳng có thân\nMỗi ngày cùng em đến lớp\nGiữ nước trong suốt cả ngày",
  answer: "Bình nước",
  explanation: "Bình nước có hình đầu và cổ, thường mang đến trường để uống."
},
{
  question: "Cái gì có nhiều mặt nhưng không có mồm\nCó thể kể chuyện muôn trùng\nTrẻ em, người lớn đều dùng để xem?",
  answer: "Tivi",
  explanation: "Tivi có màn hình (mặt) và phát hình ảnh nhưng không có miệng thật."
},
{
  question: "Sáng ra được mở ra\nTối về lại đóng lại\nChở bao điều em học mãi\nGọn gàng bên em mỗi ngày",
  answer: "Sách giáo khoa",
  explanation: "Sách được mở học vào ban ngày và đóng khi nghỉ ngơi."
},
{
  question: "Tôi nhỏ mà thông minh\nBiết nghe và biết nói\nKhi bạn nói, tôi trả lời\nLà gì thế bạn ơi?",
  answer: "Trợ lý ảo",
  explanation: "Trợ lý ảo (như Siri, Google Assistant) giúp thực hiện mệnh lệnh qua giọng nói."
},
{
  question: "Không phải gương mà soi rõ mặt\nKhông phải nước mà phản chiếu xinh\nTay chạm nhẹ là hiện hình\nAi cũng nhìn thấy dáng mình trong tôi?",
  answer: "Màn hình điện thoại",
  explanation: "Màn hình phản chiếu ánh sáng và có thể hiển thị ảnh người dùng."
},
{
  question: "Không phải cửa mà có khoá\nKhông phải nhà vẫn canh giữ\nThường mang bên mình mỗi bữa\nCất giữ tiền, thẻ, giấy tùy thân",
  answer: "Chiếc ví",
  explanation: "Ví nhỏ gọn, có khoá, chứa các vật dụng quan trọng cá nhân."
},
{
  question: "Tôi có chân, chẳng thể đi\nTôi có mặt, chẳng biết nhìn\nNgười gõ tôi, tôi sẽ kêu\nGiúp bạn học điều kỳ diệu",
  answer: "Máy tính",
  explanation: "Máy tính có chân đế, có màn hình và bàn phím, là công cụ học tập và làm việc."
},
{
  question: "Không có bút, vẫn viết hoài\nKhông cần giấy, chữ hiện ngay\nBấm nhẹ một cái là xong\nKết quả hiện rõ ràng trong nháy mắt",
  answer: "Máy tính bỏ túi",
  explanation: "Máy tính dùng để tính toán nhanh, không cần giấy bút."
},
{
  question: "Dài như sợi chỉ\nGiúp nối liền đôi tai\nKhông để nhạc vang ngoài\nChỉ riêng bạn nghe thấy",
  answer: "Tai nghe có dây",
  explanation: "Tai nghe truyền âm thanh qua dây nối giữa thiết bị và tai."
},
{
  question: "Bốn chân gỗ thẳng đứng\nMột mặt phẳng phiu ngay\nLàm việc hay học bài\nĐều cần tôi mỗi ngày",
  answer: "Cái bàn học",
  explanation: "Bàn học là nơi học sinh ngồi học tập, có bốn chân và mặt phẳng."
},
{
  question: "Nhỏ như hạt cát\nDài như sợi dây\nCắm vào là chạy ngay\nChứa cả thế giới bên trong",
  answer: "USB",
  explanation: "USB là thiết bị lưu trữ dữ liệu nhỏ gọn nhưng dung lượng lớn."
},
{
  question: "Không chân mà chạy liên hồi\nMang bạn qua núi đồi khắp nơi\nKêu vang mỗi khi khởi động\nAi nhìn cũng gọi tôi là gì?",
  answer: "Xe máy",
  explanation: "Xe máy là phương tiện phổ biến, không có chân thật nhưng di chuyển được."
},
{
  question: "Tôi có tai nhưng chẳng nghe\nCó mồm mà chẳng hề nói\nBụng tôi chứa điều bạn cần\nHễ gọi thì tôi mở lời",
  answer: "Máy tính",
  explanation: "Máy tính có các bộ phận mô phỏng con người như tai nghe, mic nhưng là thiết bị điện tử."
},
{
  question: "Không phải nước mà trong veo\nAi nhìn cũng thấy bóng mình\nKhông phải gương cũng lung linh\nTreo tường đẹp tựa hình xinh",
  answer: "Tranh kính",
  explanation: "Tranh kính có độ bóng và hình ảnh, thường được dùng để trang trí."
},
{
  question: "Tôi mỏng nhưng chứa nhiều điều\nGiữ bao kiến thức rất nhiều trong tôi\nCứ lật từng trang dần thôi\nBạn sẽ hiểu biết tuyệt vời mỗi ngày",
  answer: "Sách",
  explanation: "Sách lưu trữ tri thức và giúp con người học hỏi."
},
{
  question: "Mỗi năm thay áo mới\nGhi nhớ từng ngày qua\nSinh nhật hay ngày cha\nKhông quên khi tôi ở nhà",
  answer: "Cuốn lịch",
  explanation: "Lịch giúp ghi nhớ thời gian và các sự kiện quan trọng."
},
{
  question: "Không phải trời nhưng biết mưa\nKhông phải máy nhưng vẫn kêu\nNgười ta xách tôi mỗi chiều\nGặp mưa là tôi xoè đều",
  answer: "Cái ô",
  explanation: "Ô dù dùng che mưa, mở ra hình tròn như trời mưa."
},
{
  question: "Tôi dài và nhiều răng\nĂn giấy, chẳng ăn người\nTừng tờ đi qua tôi\nLà biến mất một phần",
  answer: "Máy hủy giấy",
  explanation: "Máy hủy giấy có lưỡi cắt như răng, giúp tiêu hủy tài liệu."
},
{
  question: "Không phải sách nhưng đầy chữ\nKhông phải bút vẫn vẽ hình\nTay bạn chạm nhẹ linh tinh\nTôi hiểu bạn muốn điều gì ngay",
  answer: "Màn hình cảm ứng",
  explanation: "Màn hình cảm ứng cho phép tương tác trực tiếp qua tay."
},
{
  question: "Tôi là vật nhỏ, thường giấu kín\nMà chẳng ai muốn bị quên tên\nDù đi đâu hay đến đâu\nCũng cần có tôi bên mình",
  answer: "Chìa khóa",
  explanation: "Chìa khóa dùng để mở cửa, xe... luôn phải mang theo."
},
{
  question: "Không có mắt vẫn sáng rực\nKhông có lửa mà phát quang\nDùng để soi đường ban đêm\nLà gì?",
  answer: "Đèn pin",
  explanation: "Đèn pin giúp chiếu sáng, dùng điện thay vì lửa."
},
{
  question: "Tôi không có cánh vẫn bay\nKhông có lông vẫn biết bay trên trời\nCó thể đưa bạn thật xa\nNhưng chẳng thể bơi dưới nước",
  answer: "Khinh khí cầu",
  explanation: "Khinh khí cầu bay bằng khí nóng, không cần cánh như máy bay."
},
{
  question: "Tôi nằm yên không biết nói\nNhưng ai ai cũng thích tôi\nLúc vui lúc buồn đến chơi\nMỗi khi cảm xúc đầy vơi tràn đầy",
  answer: "Nhật ký",
  explanation: "Nhật ký ghi lại cảm xúc, suy nghĩ cá nhân mỗi ngày."
},
{
  question: "Không phải mắt mà vẫn sáng\nKhông phải lửa mà vẫn cháy\nKhông khói nhưng vẫn nóng đầy\nDùng để sưởi ấm mỗi ngày mùa đông",
  answer: "Máy sưởi",
  explanation: "Máy sưởi làm ấm không khí mà không sinh ra lửa."
},
{
  question: "Dài như con rắn\nMà chẳng biết trườn\nMang điện đi khắp nơi\nGiúp mọi thiết bị sống lại",
  answer: "Dây điện",
  explanation: "Dây điện truyền dòng điện đến thiết bị điện tử."
},
{
  question: "Không phải máy nhưng có mặt\nKhông phải người vẫn biết nghe\nCảnh báo mọi điều xảy ra\nGắn trên trần hoặc phía sau nhà",
  answer: "Camera an ninh",
  explanation: "Camera ghi hình để đảm bảo an toàn cho người dùng."
},
{
  question: "Không biết hát mà tạo nhạc\nKhông biết nói mà phát thanh\nBật lên, ai cũng thích nghe\nNhất là những bản vui vẻ",
  answer: "Đài radio",
  explanation: "Radio phát sóng âm thanh như nhạc, tin tức."
},
{
  question: "Tôi mặc áo nhưng không phải người\nTôi có túi nhưng chẳng đựng gì\nBảo vệ bạn dưới nắng gió\nBạn mặc tôi mỗi ngày đi học",
  answer: "Áo khoác",
  explanation: "Áo khoác che mưa nắng và giữ ấm cho người mặc."
},
{
  question: "Tôi có thể nói mọi thứ\nKhông miệng vẫn phát thành lời\nKhi bạn tìm kiếm điều chi\nTôi hiện đáp án tức thì",
  answer: "Google",
  explanation: "Google là công cụ tìm kiếm thông tin nhanh chóng."
},
{
  question: "Thân tôi có lỗ chi chít\nNhưng chẳng để lọt thứ gì\nRửa chén ai cũng cần tôi\nChà mạnh là sạch tức thì",
  answer: "Miếng bọt biển",
  explanation: "Dù có lỗ nhưng bọt biển vẫn giữ chất lỏng tốt."
},
{
  question: "Một chiếc áo trắng tinh khôi\nKhoác lên người bạn mỗi ngày\nTới lớp hay ngồi học bài\nAi ai cũng mặc không sai tí nào",
  answer: "Đồng phục học sinh",
  explanation: "Đồng phục là trang phục chung cho học sinh."
},
{
  question: "Mỗi lần bạn gõ tôi\nLà một ký tự hiện lên\nKhi sai, bạn lại xóa đi\nTôi là ai nhỉ bạn hiền?",
  answer: "Bàn phím",
  explanation: "Bàn phím dùng để nhập liệu vào máy tính hoặc điện thoại."
},
{
  question: "Tròn tròn như quả bóng\nLăn qua, lăn lại thật nhanh\nDùng trong máy tính mỗi ngày\nGiúp bạn điều khiển thật hay",
  answer: "Chuột máy tính",
  explanation: "Chuột máy tính là thiết bị điều khiển con trỏ."
},
{
  question: "Tôi có thể đọc mọi thứ\nMà không cần đi học đâu\nĐưa tôi đến sách thật mau\nTôi giúp bạn tìm điều sâu",
  answer: "Máy quét (scanner)",
  explanation: "Máy quét đọc văn bản và hình ảnh vào máy tính."
},
{
  question: "Chân thì cứng, đầu thì mềm\nGắn trên tường để người xem\nChiếu hình ảnh cho cả lớp\nCô giáo dùng mỗi ngày thêm",
  answer: "Máy chiếu",
  explanation: "Máy chiếu trình chiếu nội dung lên màn hình lớn."
},
{
  question: "Tôi đen nhưng không bẩn\nDùng để viết từng dòng\nTay chạm tôi là sáng ngời\nLà gì trong lớp học đó?",
  answer: "Bảng trắng",
  explanation: "Bảng trắng dùng bút lông để viết, dễ lau sạch."
},
{
  question: "Không cần nói cũng hiểu\nKhông cần nghe vẫn hay\nChỉ cần tay bạn chạm ngay\nLà tôi làm việc hàng ngày",
  answer: "Điện thoại thông minh",
  explanation: "Smartphone là công cụ đa năng, hoạt động qua thao tác cảm ứng."
}
];
