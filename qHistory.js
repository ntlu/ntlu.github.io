const qHistory = [
   {
    stt: 1,
    question: "Ai là người lãnh đạo cuộc khởi nghĩa chống quân Nguyên lần thứ ba?",
    answer: "Trần Hưng Đạo",
    explanation: "Trần Hưng Đạo là vị tướng tài ba, ba lần chỉ huy chiến thắng quân Nguyên xâm lược."
  },
  {
    stt: 2,
    question: "Bác Hồ sinh năm nào?",
    answer: "1890",
    explanation: "Chủ tịch Hồ Chí Minh sinh ngày 19 tháng 5 năm 1890 tại Nghệ An."
  },
  {
    stt: 3,
    question: "Ai là vị vua đầu tiên của nước Việt Nam?",
    answer: "Đinh Bộ Lĩnh",
    explanation: "Năm 968, Đinh Bộ Lĩnh lên ngôi hoàng đế, đặt tên nước là Đại Cồ Việt."
  },
  {
    stt: 4,
    question: "Chiến thắng lịch sử năm 1954 diễn ra ở đâu?",
    answer: "Điện Biên Phủ",
    explanation: "Chiến thắng Điện Biên Phủ đánh dấu sự thất bại của thực dân Pháp tại Việt Nam."
  },
  {
    stt: 5,
    question: "Ai là vị nữ anh hùng cưỡi voi đánh giặc từ thời xa xưa?",
    answer: "Bà Trưng",
    explanation: "Hai Bà Trưng là những nữ tướng đầu tiên khởi nghĩa chống giặc ngoại xâm vào năm 40."
  },
  {
    stt: 6,
    question: "Quốc hiệu nước ta dưới thời Lý là gì?",
    answer: "Đại Việt",
    explanation: "Thời Lý Thái Tổ, quốc hiệu được đổi thành Đại Việt vào năm 1054."
  },
  {
    stt: 7,
    question: "Ngày Quốc khánh Việt Nam là ngày nào?",
    answer: "2 tháng 9",
    explanation: "Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình."
  },
  {
    stt: 8,
    question: "Ai là người đánh bại quân Minh trong khởi nghĩa Lam Sơn?",
    answer: "Lê Lợi",
    explanation: "Lê Lợi lãnh đạo cuộc khởi nghĩa Lam Sơn, đánh đuổi giặc Minh và lập ra nhà Hậu Lê."
  },
  {
    stt: 9,
    question: "Thủ đô của nước Việt Nam là gì?",
    answer: "Hà Nội",
    explanation: "Hà Nội là thủ đô của Việt Nam từ năm 1945 đến nay."
  },
  {
    stt: 10,
    question: "Dưới triều đại nào, chữ Quốc ngữ bắt đầu được phổ biến?",
    answer: "Triều Nguyễn",
    explanation: "Chữ Quốc ngữ được dùng rộng rãi vào thời kỳ Pháp thuộc và triều Nguyễn."
  },
  {
    stt: 11,
    question: "Nhà Trần nổi tiếng với trận đánh trên sông nào?",
    answer: "Sông Bạch Đằng",
    explanation: "Trận Bạch Đằng năm 1288 là chiến thắng vang dội của quân Trần trước quân Nguyên."
  },
  {
    stt: 12,
    question: "Ai là người sáng lập triều Tây Sơn?",
    answer: "Nguyễn Huệ",
    explanation: "Nguyễn Huệ là một trong ba anh em Tây Sơn và sau này lên ngôi hoàng đế, lấy hiệu Quang Trung."
  },
  {
    stt: 13,
    question: "Chiếc cột cờ nổi tiếng ở thủ đô Hà Nội có tên là gì?",
    answer: "Cột cờ Hà Nội",
    explanation: "Cột cờ Hà Nội là biểu tượng của lòng yêu nước và lịch sử thủ đô."
  },
  {
    stt: 14,
    question: "Tượng đài Chiến thắng Điện Biên Phủ đặt ở tỉnh nào?",
    answer: "Điện Biên",
    explanation: "Tượng đài Chiến thắng nằm tại đồi D1, thành phố Điện Biên Phủ, tỉnh Điện Biên."
  },
  {
    stt: 15,
    question: "Người anh hùng áo vải nào đánh tan 29 vạn quân Thanh?",
    answer: "Nguyễn Huệ (Quang Trung)",
    explanation: "Nguyễn Huệ đại thắng quân Thanh vào mùa xuân năm 1789."
  },
  {
    stt: 16,
    question: "Chiếc nón lá thường gắn với hình ảnh của ai trong thời chiến?",
    answer: "Người mẹ Việt Nam",
    explanation: "Nón lá gắn liền với hình ảnh người phụ nữ Việt Nam kiên cường trong chiến tranh."
  },
  {
    stt: 17,
    question: "Ai là vị vua dời đô từ Hoa Lư ra Thăng Long?",
    answer: "Lý Thái Tổ",
    explanation: "Năm 1010, Lý Thái Tổ dời đô từ Hoa Lư về Thăng Long (nay là Hà Nội)."
  },
  {
    stt: 18,
    question: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập ở đâu?",
    answer: "Quảng trường Ba Đình",
    explanation: "Ngày 2/9/1945, Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, Hà Nội."
  },
  {
    stt: 19,
    question: "Chợ Bến Thành là biểu tượng nổi tiếng của thành phố nào?",
    answer: "TP. Hồ Chí Minh",
    explanation: "Chợ Bến Thành là biểu tượng nổi bật của TP. Hồ Chí Minh."
  },
  {
    stt: 20,
    question: "Bác Hồ tên thật là gì?",
    answer: "Nguyễn Sinh Cung",
    explanation: "Tên khai sinh của Bác Hồ là Nguyễn Sinh Cung."
  },
  {
    stt: 21,
    question: "Ai được mệnh danh là 'Người thầy thuốc của nhân dân'?",
    answer: "Hải Thượng Lãn Ông",
    explanation: "Ông tên thật là Lê Hữu Trác, là danh y nổi tiếng thời Lê."
  },
  {
    stt: 22,
    question: "Chiếc áo dài là biểu tượng văn hóa của ai?",
    answer: "Phụ nữ Việt Nam",
    explanation: "Áo dài là trang phục truyền thống tôn vinh vẻ đẹp người phụ nữ Việt."
  },
  {
    stt: 23,
    question: "Khu di tích Cố đô Huế thuộc tỉnh nào?",
    answer: "Thừa Thiên Huế",
    explanation: "Huế từng là kinh đô của triều Nguyễn, nay là di sản văn hóa thế giới."
  },
  {
    stt: 24,
    question: "Lễ hội Gióng được tổ chức để tưởng nhớ ai?",
    answer: "Thánh Gióng",
    explanation: "Thánh Gióng là vị anh hùng đánh giặc Ân khi còn là thiếu niên."
  },
  {
    stt: 25,
    question: "Lăng Chủ tịch Hồ Chí Minh nằm ở đâu?",
    answer: "Hà Nội",
    explanation: "Lăng Bác nằm tại Quảng trường Ba Đình, thủ đô Hà Nội."
  },
  {
    stt: 26,
    question: "Tết Nguyên đán có nguồn gốc từ đâu?",
    answer: "Văn hóa phương Đông",
    explanation: "Tết Nguyên đán bắt nguồn từ văn hóa lúa nước, mang đậm bản sắc Á Đông."
  },
  {
    stt: 27,
    question: "Chiếc trống đồng là biểu tượng văn hóa của thời nào?",
    answer: "Thời Hùng Vương",
    explanation: "Trống đồng Đông Sơn có từ thời Văn Lang – Âu Lạc."
  },
  {
    stt: 28,
    question: "Ai là người đặt nền móng cho nền giáo dục nước ta?",
    answer: "Chu Văn An",
    explanation: "Chu Văn An là thầy giáo mẫu mực thời Trần, nổi tiếng thanh liêm, chính trực."
  },
  {
    stt: 29,
    question: "Dinh Độc Lập hiện nay có tên là gì?",
    answer: "Dinh Thống Nhất",
    explanation: "Sau năm 1975, Dinh Độc Lập đổi tên thành Dinh Thống Nhất."
  },
  {
    stt: 30,
    question: "Quốc hiệu đầu tiên của nước ta là gì?",
    answer: "Văn Lang",
    explanation: "Văn Lang là quốc hiệu đầu tiên, dưới thời các vua Hùng."
  },
    {
    stt: 31,
    question: "Người phát minh ra bảng chữ cái Quốc ngữ là ai?",
    answer: "Alexandre de Rhodes",
    explanation: "Linh mục Alexandre de Rhodes là người có công hoàn thiện chữ Quốc ngữ."
  },
  {
    stt: 32,
    question: "Tên gọi của nhà nước đầu tiên ở Việt Nam là gì?",
    answer: "Văn Lang",
    explanation: "Văn Lang là quốc gia đầu tiên do các vua Hùng thành lập."
  },
  {
    stt: 33,
    question: "Bác Hồ ra đi tìm đường cứu nước năm nào?",
    answer: "1911",
    explanation: "Năm 1911, Bác Hồ rời bến cảng Nhà Rồng ra đi tìm đường cứu nước."
  },
  {
    stt: 34,
    question: "Ai là người đầu tiên dựng cờ khởi nghĩa chống Pháp?",
    answer: "Phan Đình Phùng",
    explanation: "Phan Đình Phùng là lãnh tụ phong trào Cần Vương chống Pháp cuối thế kỷ 19."
  },
  {
    stt: 35,
    question: "Chiến thắng nào buộc Mỹ phải ngồi vào bàn đàm phán ở Paris?",
    answer: "Chiến dịch Điện Biên Phủ trên không",
    explanation: "Chiến dịch năm 1972 làm nên chiến thắng vang dội trên bầu trời Hà Nội."
  },
  {
    stt: 36,
    question: "Người anh hùng thiếu niên nào hy sinh khi còn rất nhỏ trong kháng chiến chống Pháp?",
    answer: "Kim Đồng",
    explanation: "Kim Đồng là đội viên thiếu niên dũng cảm, làm liên lạc cho cách mạng."
  },
  {
    stt: 37,
    question: "Tên cây cầu nổi tiếng gắn với Hà Nội và kiến trúc sư người Pháp là gì?",
    answer: "Cầu Long Biên",
    explanation: "Cầu Long Biên do người Pháp xây dựng và từng là biểu tượng giao thông Hà Nội."
  },
  {
    stt: 38,
    question: "Chiến dịch Hồ Chí Minh kết thúc vào ngày nào?",
    answer: "30 tháng 4 năm 1975",
    explanation: "Ngày giải phóng miền Nam, thống nhất đất nước."
  },
  {
    stt: 39,
    question: "Thành cổ nào ở Huế từng là kinh đô của triều Nguyễn?",
    answer: "Kinh thành Huế",
    explanation: "Kinh thành Huế là nơi ở và làm việc của vua chúa triều Nguyễn."
  },
  {
    stt: 40,
    question: "Người Việt Nam đầu tiên bay vào vũ trụ là ai?",
    answer: "Phạm Tuân",
    explanation: "Phạm Tuân bay vào không gian năm 1980 cùng tàu Liên Xô."
  },
    {
    stt: 41,
    question: "Ai là người phụ nữ lãnh đạo cuộc khởi nghĩa chống quân Đông Hán sau Hai Bà Trưng?",
    answer: "Bà Triệu",
    explanation: "Bà Triệu (Triệu Thị Trinh) khởi nghĩa năm 248, được xem là nữ anh hùng dân tộc."
  },
  {
    stt: 42,
    question: "Ai là Tổng Bí thư đầu tiên của Đảng Cộng sản Việt Nam?",
    answer: "Trần Phú",
    explanation: "Trần Phú là Tổng Bí thư đầu tiên, nổi tiếng với Luận cương chính trị năm 1930."
  },
  {
    stt: 43,
    question: "Cuộc khởi nghĩa của Lý Bí đã thành lập nhà nước nào?",
    answer: "Vạn Xuân",
    explanation: "Lý Bí lập nên nhà nước Vạn Xuân vào năm 544, xưng là Lý Nam Đế."
  },
  {
    stt: 44,
    question: "Người có công xây dựng Văn Miếu - Quốc Tử Giám là ai?",
    answer: "Lý Thánh Tông",
    explanation: "Vua Lý Thánh Tông cho xây Văn Miếu năm 1070, là trường đại học đầu tiên của nước ta."
  },
  {
    stt: 45,
    question: "Chiến thắng nào mở đầu cho thời kỳ Nam tiến của Đại Việt?",
    answer: "Chiến thắng Chiêm Thành",
    explanation: "Thời Lý và Trần, chiến thắng Chiêm Thành mở rộng lãnh thổ về phía nam."
  },
  {
    stt: 46,
    question: "Ngọn núi nào gắn liền với căn cứ cách mạng của Bác Hồ ở Cao Bằng?",
    answer: "Núi rừng Pác Bó",
    explanation: "Pác Bó là nơi Bác Hồ về nước năm 1941, lập căn cứ kháng chiến."
  },
  {
    stt: 47,
    question: "Cuộc khởi nghĩa chống Pháp tiêu biểu ở Bắc Kỳ do ai lãnh đạo?",
    answer: "Hoàng Hoa Thám",
    explanation: "Hoàng Hoa Thám lãnh đạo nghĩa quân Yên Thế chống Pháp suốt hơn 20 năm."
  },
  {
    stt: 48,
    question: "Di tích nào ở TP.HCM gắn liền với cuộc Tổng tiến công Tết Mậu Thân 1968?",
    answer: "Dinh Độc Lập",
    explanation: "Dinh Độc Lập là nơi diễn ra nhiều sự kiện lớn trong chiến tranh và giải phóng miền Nam."
  },
  {
    stt: 49,
    question: "Chợ Rồng là chợ nổi tiếng ở tỉnh nào, gắn liền với kháng chiến?",
    answer: "Nam Định",
    explanation: "Chợ Rồng ở Nam Định từng là nơi hoạt động cách mạng thời chống Pháp."
  },
  {
    stt: 50,
    question: "Lễ hội nào tưởng nhớ vua Hùng?",
    answer: "Giỗ Tổ Hùng Vương",
    explanation: "Giỗ Tổ Hùng Vương diễn ra vào mùng 10 tháng 3 âm lịch hàng năm."
  },
  {
    stt: 51,
    question: "Tên gọi cũ của Sài Gòn là gì?",
    answer: "Gia Định",
    explanation: "Sài Gòn từng được gọi là Gia Định, là trung tâm hành chính của miền Nam thời Nguyễn."
  },
  {
    stt: 52,
    question: "Người anh hùng nào hy sinh tại Nhà tù Côn Đảo, được gọi là 'hoa sen thép'?",
    answer: "Võ Thị Sáu",
    explanation: "Võ Thị Sáu là nữ liệt sĩ trẻ tuổi, bị xử bắn khi mới 19 tuổi."
  },
  {
    stt: 53,
    question: "Chiến thắng nào được ví như 'Điện Biên Phủ trên biển'?",
    answer: "Chiến thắng Vạn Tường",
    explanation: "Chiến thắng Vạn Tường năm 1965 là chiến thắng lớn đầu tiên của quân dân miền Nam trước Mỹ."
  },
  {
    stt: 54,
    question: "Vị tướng nào nổi tiếng trong kháng chiến chống Mỹ, còn gọi là 'Đại tướng của nhân dân'?",
    answer: "Võ Nguyên Giáp",
    explanation: "Đại tướng Võ Nguyên Giáp là Tổng tư lệnh Quân đội Nhân dân Việt Nam, chỉ huy nhiều chiến dịch lớn."
  },
  {
    stt: 55,
    question: "Ai là nhà yêu nước nổi tiếng với phong trào Đông Du?",
    answer: "Phan Bội Châu",
    explanation: "Phan Bội Châu kêu gọi thanh niên sang Nhật học để cứu nước đầu thế kỷ 20."
  },
  {
    stt: 56,
    question: "Đền Hùng nằm ở tỉnh nào?",
    answer: "Phú Thọ",
    explanation: "Đền Hùng là nơi thờ các vua Hùng, nằm ở xã Hy Cương, thành phố Việt Trì, tỉnh Phú Thọ."
  },
  {
    stt: 57,
    question: "Chiến thắng Rạch Gầm - Xoài Mút do ai chỉ huy?",
    answer: "Nguyễn Huệ",
    explanation: "Nguyễn Huệ tiêu diệt 5 vạn quân Xiêm trong trận này năm 1785."
  },
  {
    stt: 58,
    question: "Bút tích 'Không có gì quý hơn độc lập, tự do' do ai viết?",
    answer: "Hồ Chí Minh",
    explanation: "Câu nói nổi tiếng này thể hiện tinh thần kiên cường của Bác Hồ và dân tộc Việt Nam."
  },
  {
    stt: 59,
    question: "Chiến dịch Tây Nguyên năm 1975 diễn ra ở tỉnh nào đầu tiên?",
    answer: "Buôn Ma Thuột",
    explanation: "Buôn Ma Thuột là nơi mở đầu chiến dịch Tây Nguyên - bước ngoặt giải phóng miền Nam."
  },
  {
    stt: 60,
    question: "Thành phố nào được mệnh danh là 'Thủ đô kháng chiến'?",
    answer: "Tuyên Quang",
    explanation: "Tuyên Quang là trung tâm đầu não cách mạng trong thời kỳ kháng chiến chống Pháp."
  },
  {
    stt: 61,
    question: "Lễ hội Lam Kinh tưởng nhớ vị vua nào?",
    answer: "Lê Lợi",
    explanation: "Lễ hội Lam Kinh được tổ chức hằng năm để tưởng nhớ Lê Lợi, vị vua sáng lập nhà Hậu Lê."
  },
  {
    stt: 62,
    question: "Ai là người Việt Nam đầu tiên giữ chức Chủ tịch Quốc hội?",
    answer: "Tôn Đức Thắng",
    explanation: "Ông Tôn Đức Thắng là Chủ tịch Quốc hội đầu tiên và sau này là Chủ tịch nước."
  },
  {
    stt: 63,
    question: "Thành phố nào được xem là nơi xuất phát của đường mòn Hồ Chí Minh?",
    answer: "Quảng Trị",
    explanation: "Đường mòn Hồ Chí Minh bắt đầu từ tỉnh Quảng Trị, xuyên dọc Trường Sơn."
  },
  {
    stt: 64,
    question: "Phong trào Xô Viết Nghệ Tĩnh diễn ra vào năm nào?",
    answer: "1930–1931",
    explanation: "Phong trào nổi dậy của nông dân và công nhân tại Nghệ An và Hà Tĩnh dưới sự lãnh đạo của Đảng."
  },
  {
    stt: 65,
    question: "Lễ hội Côn Sơn – Kiếp Bạc tưởng nhớ danh nhân nào?",
    answer: "Trần Hưng Đạo",
    explanation: "Lễ hội tưởng niệm Hưng Đạo Đại Vương – người 3 lần đánh bại quân Nguyên."
  },
  {
    stt: 66,
    question: "Ai là người đặt nền móng cho nền giáo dục phong kiến Việt Nam?",
    answer: "Khổng Tử (qua Nho giáo)",
    explanation: "Khổng Tử không phải người Việt nhưng học thuyết Nho giáo ảnh hưởng sâu sắc tới giáo dục cổ đại Việt Nam."
  },
  {
    stt: 67,
    question: "Phong trào nào do Phan Chu Trinh khởi xướng?",
    answer: "Phong trào Duy Tân",
    explanation: "Phan Chu Trinh chủ trương cải cách, học tập phương Tây để canh tân đất nước."
  },
  {
    stt: 68,
    question: "Ai là người đọc bản Tuyên ngôn Độc lập thứ hai của Việt Nam?",
    answer: "Nguyễn Trãi",
    explanation: "Nguyễn Trãi viết và thay Lê Lợi công bố 'Bình Ngô đại cáo' sau chiến thắng quân Minh."
  },
  {
    stt: 69,
    question: "Hội nghị nào đánh dấu bước ngoặt lịch sử với quyết định Tổng khởi nghĩa giành chính quyền?",
    answer: "Hội nghị Tân Trào",
    explanation: "Hội nghị Tân Trào (8/1945) là sự kiện quan trọng trước Cách mạng Tháng Tám."
  },
  {
    stt: 70,
    question: "Chiến dịch nào kết thúc cuộc kháng chiến chống Mỹ cứu nước?",
    answer: "Chiến dịch Hồ Chí Minh",
    explanation: "Chiến dịch Hồ Chí Minh giải phóng Sài Gòn ngày 30/4/1975, thống nhất đất nước."
  },
  {
    stt: 71,
    question: "Vị vua nào nổi tiếng với câu nói 'Thà làm quỷ nước Nam còn hơn làm vua đất Bắc'?",
    answer: "Trần Bình Trọng",
    explanation: "Ông là tướng thời nhà Trần, bị bắt và hiên ngang trước quân Nguyên."
  },
  {
    stt: 72,
    question: "Thành nhà Hồ hiện nằm ở tỉnh nào?",
    answer: "Thanh Hóa",
    explanation: "Thành nhà Hồ là di sản văn hóa thế giới, được xây dưới thời Hồ Quý Ly."
  },
  {
    stt: 73,
    question: "Phong trào nào của thanh niên học sinh nổ ra mạnh mẽ ở Sài Gòn trước 1975?",
    answer: "Phong trào đô thị Sài Gòn",
    explanation: "Thanh niên, sinh viên biểu tình, đấu tranh chống chiến tranh, đòi hòa bình và dân chủ."
  },
  {
    stt: 74,
    question: "Ai là người Việt Nam đầu tiên làm Tổng Thư ký ASEAN?",
    answer: "Lê Lương Minh",
    explanation: "Ông Lê Lương Minh giữ chức Tổng thư ký ASEAN giai đoạn 2013–2017."
  },
  {
    stt: 75,
    question: "Chiến thắng nào đã mở đường cho Cách mạng Tháng Tám thành công?",
    answer: "Chiến dịch Việt Bắc 1947",
    explanation: "Chiến thắng này bảo vệ căn cứ địa kháng chiến, giữ vững phong trào cách mạng."
  },
  {
    stt: 76,
    question: "Nhà thơ nào được gọi là 'Anh hùng áo vải, thi sĩ yêu nước' thời chống Pháp?",
    answer: "Nguyễn Đình Chiểu",
    explanation: "Nguyễn Đình Chiểu dùng thơ văn để kêu gọi lòng yêu nước, tiêu biểu là 'Văn tế nghĩa sĩ Cần Giuộc'."
  },
  {
    stt: 77,
    question: "Bút danh của Chủ tịch Hồ Chí Minh trong thời kỳ hoạt động cách mạng là gì?",
    answer: "Nguyễn Ái Quốc",
    explanation: "Tên Nguyễn Ái Quốc được Bác sử dụng khi hoạt động tại Pháp và quốc tế."
  },
  {
    stt: 78,
    question: "Tỉnh nào có nghĩa trang Trường Sơn nổi tiếng?",
    answer: "Quảng Trị",
    explanation: "Nghĩa trang Trường Sơn là nơi an nghỉ của hàng chục nghìn liệt sĩ trên tuyến đường Trường Sơn."
  },
  {
    stt: 79,
    question: "Ai là tác giả của 'Tuyên ngôn độc lập' năm 1945?",
    answer: "Hồ Chí Minh",
    explanation: "Chủ tịch Hồ Chí Minh là người soạn và đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình."
  },
  {
    stt: 80,
    question: "Tỉnh nào được mệnh danh là 'đất học', có nhiều danh nhân khoa bảng?",
    answer: "Hà Tĩnh",
    explanation: "Hà Tĩnh là quê hương của nhiều danh nhân như Nguyễn Du, Phan Đình Phùng."
  },
  {
    stt: 81,
    question: "Ai là nhà yêu nước tiêu biểu trong phong trào Đông Kinh nghĩa thục?",
    answer: "Lương Văn Can",
    explanation: "Ông là người sáng lập trường Đông Kinh nghĩa thục, góp phần chấn hưng văn hóa và giáo dục."
  },
  {
    stt: 82,
    question: "Chiến dịch nào được gọi là 'cuộc tập dượt lần thứ hai cho Tổng khởi nghĩa'?",
    answer: "Khởi nghĩa Nam Kỳ",
    explanation: "Khởi nghĩa Nam Kỳ năm 1940 dù thất bại nhưng là bước chuẩn bị cho Cách mạng Tháng Tám."
  },
  {
    stt: 83,
    question: "Nhà văn nào nổi tiếng với truyện 'Chí Phèo' phản ánh xã hội Việt Nam thời phong kiến?",
    answer: "Nam Cao",
    explanation: "Nam Cao là cây bút hiện thực xuất sắc giai đoạn 1930–1945."
  },
  {
    stt: 84,
    question: "Địa danh nào là nơi đóng đô của triều đại nhà Đinh và Tiền Lê?",
    answer: "Hoa Lư",
    explanation: "Hoa Lư thuộc Ninh Bình, là cố đô thời Đinh Tiên Hoàng và Lê Đại Hành."
  },
  {
    stt: 85,
    question: "Ai là người lãnh đạo cuộc khởi nghĩa Bãi Sậy?",
    answer: "Nguyễn Thiện Thuật",
    explanation: "Ông là thủ lĩnh nghĩa quân chống Pháp tại vùng đồng bằng Bắc Bộ cuối thế kỷ 19."
  },
  {
    stt: 86,
    question: "Di tích địa đạo nổi tiếng nào được mệnh danh là 'thành phố dưới lòng đất'?",
    answer: "Địa đạo Củ Chi",
    explanation: "Địa đạo Củ Chi dài hơn 200 km, là căn cứ kháng chiến kiên cường trong thời kỳ chống Mỹ."
  },
  {
    stt: 87,
    question: "Người đầu tiên giữ chức Chủ tịch nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là ai?",
    answer: "Tôn Đức Thắng",
    explanation: "Sau khi Bác Hồ mất, ông Tôn Đức Thắng là Chủ tịch nước đầu tiên của nước CHXHCN Việt Nam."
  },
  {
    stt: 88,
    question: "Nguyễn Trãi từng bị vu oan trong vụ án nào nổi tiếng trong lịch sử?",
    answer: "Vụ án Lệ Chi Viên",
    explanation: "Nguyễn Trãi và gia đình bị tru di tam tộc sau cái chết của vua Lê Thái Tông."
  },
  {
    stt: 89,
    question: "Vị vua nào trị vì lâu nhất trong lịch sử phong kiến Việt Nam?",
    answer: "Lê Thánh Tông",
    explanation: "Ông trị vì 38 năm (1460–1497), đưa đất nước phát triển mạnh mẽ."
  },
  {
    stt: 90,
    question: "Thời kỳ Bắc thuộc của nước ta kéo dài bao nhiêu năm?",
    answer: "Hơn 1000 năm",
    explanation: "Từ năm 179 TCN đến năm 938 SCN, Việt Nam trải qua hơn 1.000 năm đô hộ phương Bắc."
  },
   {
    stt: 91,
    question: "Ai là người viết tác phẩm 'Bình Ngô đại cáo'?",
    answer: "Nguyễn Trãi",
    explanation: "Tác phẩm được xem là bản tuyên ngôn độc lập thứ hai của Việt Nam."
  },
  {
    stt: 92,
    question: "Chiến thắng nào đánh dấu chấm dứt thời kỳ Bắc thuộc?",
    answer: "Chiến thắng Bạch Đằng năm 938",
    explanation: "Ngô Quyền đánh bại quân Nam Hán, giành độc lập cho dân tộc."
  },
  {
    stt: 93,
    question: "Ai là vị vua cuối cùng của triều Nguyễn?",
    answer: "Bảo Đại",
    explanation: "Vua Bảo Đại thoái vị năm 1945, chấm dứt chế độ phong kiến Việt Nam."
  },
  {
    stt: 94,
    question: "Cầu Hiền Lương bắc qua sông nào, chia cắt hai miền Nam - Bắc?",
    answer: "Sông Bến Hải",
    explanation: "Cầu Hiền Lương là biểu tượng chia cắt đất nước tại vĩ tuyến 17."
  },
  {
    stt: 95,
    question: "Nơi nào được gọi là Thủ đô kháng chiến chống Pháp?",
    answer: "ATK Định Hóa – Thái Nguyên",
    explanation: "Đây là căn cứ an toàn của Trung ương Đảng và Chủ tịch Hồ Chí Minh thời kháng chiến."
  },
  {
    stt: 96,
    question: "Chiến dịch nào buộc Pháp ký Hiệp định Genève năm 1954?",
    answer: "Chiến dịch Điện Biên Phủ",
    explanation: "Chiến thắng Điện Biên Phủ kết thúc sự thống trị của Pháp tại Đông Dương."
  },
  {
    stt: 97,
    question: "Ai là người được phong làm 'Quốc công tiết chế' thời Trần?",
    answer: "Trần Hưng Đạo",
    explanation: "Ông được trao toàn quyền chỉ huy quân đội, lập nhiều chiến công hiển hách."
  },
  {
    stt: 98,
    question: "Kinh đô Phú Xuân thuộc thời kỳ nào trong lịch sử Việt Nam?",
    answer: "Thời Tây Sơn và nhà Nguyễn",
    explanation: "Phú Xuân (Huế ngày nay) là kinh đô của triều Tây Sơn và triều Nguyễn."
  },
  {
    stt: 99,
    question: "Di tích lịch sử nào gắn với chiến thắng lẫy lừng của quân dân Thủ đô năm 1946?",
    answer: "Thành Hà Nội",
    explanation: "Nơi diễn ra 60 ngày đêm chiến đấu giữ Thủ đô chống thực dân Pháp xâm lược."
  },
  {
    stt: 100,
    question: "Chủ tịch Hồ Chí Minh mất năm nào?",
    answer: "1969",
    explanation: "Bác Hồ mất ngày 2/9/1969, để lại niềm tiếc thương vô hạn cho dân tộc Việt Nam."
  }
];
