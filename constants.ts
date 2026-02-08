
import { BingoItem } from './types';

export const BINGO_ITEMS: BingoItem[] = [
  { 
    id: '1', keyword: 'Mật khẩu mạnh', icon: '🔐',
    explanation: 'Sử dụng mật khẩu khó đoán như "NguaVang2026!@" để bảo vệ tài khoản mạnh mẽ.',
    question: 'Theo em, mật khẩu nào dưới đây là an toàn nhất cho năm mới 2026?',
    options: ['12345678', 'ten_cua_em', 'NguaVang2026!@#'],
    correctAnswer: 2
  },
  { 
    id: '2', keyword: 'Không chia sẻ thông tin', icon: '🙅',
    explanation: 'Đừng bao giờ nói địa chỉ nhà hay số điện thoại cho người lạ trên mạng.',
    question: 'Một người lạ trên mạng hỏi địa chỉ nhà em để gửi quà Tết, em nên làm gì?',
    options: ['Cung cấp ngay để nhận quà', 'Từ chối và báo cho cha mẹ', 'Hỏi xem quà là gì rồi mới cho'],
    correctAnswer: 1
  },
  { 
    id: '3', keyword: 'Lời chúc tử tế', icon: '💌',
    explanation: 'Gửi những lời chúc tốt đẹp đến bạn bè, người thân qua mạng xã hội.',
    question: 'Khi thấy bạn đăng ảnh đi chơi Tết, em nên bình luận như thế nào?',
    options: ['Chê ảnh xấu quá', 'Chúc bạn năm mới vui vẻ', 'Không nói gì và báo cáo ảnh'],
    correctAnswer: 1
  },
  { 
    id: '4', keyword: 'Thoát tài khoản', icon: '🚪',
    explanation: 'Luôn đăng xuất sau khi sử dụng máy tính ở trường hoặc nơi công cộng.',
    question: 'Sau khi dùng máy tính ở thư viện để vào email, em cần làm gì trước khi về?',
    options: ['Tắt màn hình là xong', 'Cứ để thế rồi về', 'Đăng xuất (Logout) tài khoản'],
    correctAnswer: 2
  },
  { 
    id: '5', keyword: 'Hỏi ý kiến cha mẹ', icon: '🙋',
    explanation: 'Luôn xin phép người lớn trước khi tải bất kỳ trò chơi hay ứng dụng nào.',
    question: 'Em thấy một trò chơi rất hay trên mạng và muốn tải về, em nên làm gì đầu tiên?',
    options: ['Tự bấm tải ngay', 'Hỏi ý kiến cha mẹ/thầy cô', 'Rủ bạn cùng tải'],
    correctAnswer: 1
  },
  { 
    id: '6', keyword: 'Không bấm link lạ', icon: '🔗',
    explanation: 'Cảnh giác với các đường link "Nhận Lì Xì Khủng" giả mạo.',
    question: 'Em nhận được tin nhắn: "Bấm vào đây để nhận lì xì 5 triệu đồng". Em nên làm gì?',
    options: ['Bấm ngay kẻo hết', 'Gửi cho các bạn cùng bấm', 'Xóa tin nhắn vì đó là link lừa đảo'],
    correctAnswer: 2
  },
  { 
    id: '7', keyword: 'Webcam', icon: '📷',
    explanation: 'Tắt hoặc che webcam khi không sử dụng để bảo vệ sự riêng tư.',
    question: 'Tại sao chúng ta nên che webcam khi không sử dụng máy tính?',
    options: ['Để webcam không bị bụi', 'Để tránh bị kẻ xấu quay lén', 'Để máy tính chạy nhanh hơn'],
    correctAnswer: 1
  },
  { 
    id: '8', keyword: 'Kết bạn an toàn', icon: '🤝',
    explanation: 'Chỉ kết bạn với những người mà em thực sự biết rõ ngoài đời.',
    question: 'Một người lạ gửi lời mời kết bạn trên Facebook, em nên làm gì?',
    options: ['Đồng ý ngay để có nhiều bạn', 'Chỉ đồng ý nếu em biết rõ họ', 'Để đó không làm gì'],
    correctAnswer: 1
  },
  { 
    id: '9', keyword: 'Tin giả', icon: '🧐',
    explanation: 'Kiểm chứng thông tin trước khi tin tưởng hoặc chia sẻ cho người khác.',
    question: 'Em thấy tin đồn "Ngày mai được nghỉ học" trên mạng, em làm gì?',
    options: ['Chia sẻ ngay cho cả lớp', 'Hỏi cha mẹ hoặc giáo viên để xác nhận', 'Tin là thật và nghỉ học'],
    correctAnswer: 1
  },
  { 
    id: '10', keyword: 'Dấu chân số', icon: '👣',
    explanation: 'Mỗi việc em làm trên mạng đều để lại dấu vết mãi mãi.',
    question: 'Dấu chân số (Digital Footprint) là gì?',
    options: ['Dấu chân của robot', 'Những thông tin em để lại khi dùng Internet', 'Một loại trò chơi điện tử'],
    correctAnswer: 1
  },
  { 
    id: '11', keyword: 'Bắt nạt qua mạng', icon: '🛡️',
    explanation: 'Nếu thấy ai đó bị bắt nạt, hãy báo ngay cho người lớn.',
    question: 'Nếu em thấy một bạn bị người khác nói xấu, chế giễu trên mạng, em làm gì?',
    options: ['Vào hùa nói xấu cùng', 'Im lặng và bỏ qua', 'Báo cho cha mẹ hoặc giáo viên'],
    correctAnswer: 2
  },
  { 
    id: '12', keyword: 'Thời gian hợp lý', icon: '⏳',
    explanation: 'Không nên dùng máy tính quá lâu, hãy dành thời gian chơi cùng gia đình.',
    question: 'Theo em, dùng máy tính bao lâu mỗi ngày là hợp lý cho học sinh?',
    options: ['Cả ngày không nghỉ', 'Khoảng 30-60 phút và có nghỉ giải lao', 'Không bao giờ dùng'],
    correctAnswer: 1
  },
  { 
    id: '13', keyword: 'Virus máy tính', icon: '🦠',
    explanation: 'Cẩn thận với các phần mềm lạ, chúng có thể làm hỏng máy tính.',
    question: 'Máy tính bị nhiễm "Virus" thường do nguyên nhân nào?',
    options: ['Do máy tính bị bụi', 'Do bấm vào link lạ hoặc tải file không an toàn', 'Do dùng quá nhiều'],
    correctAnswer: 1
  },
  { 
    id: '14', keyword: 'Email', icon: '📧',
    explanation: 'Hòm thư điện tử giúp em trao đổi thông tin học tập an toàn.',
    question: 'Khi nhận được email từ người lạ có đính kèm file, em nên làm gì?',
    options: ['Mở file ra xem ngay', 'Xóa email và không mở file', 'Gửi file đó cho bạn bè'],
    correctAnswer: 1
  },
  { 
    id: '15', keyword: 'Internet', icon: '🌐',
    explanation: 'Thế giới Internet rộng lớn và thú vị nếu biết dùng đúng cách.',
    question: 'Internet mang lại lợi ích gì cho việc học tập?',
    options: ['Chỉ để chơi game', 'Tra cứu kiến thức và học trực tuyến', 'Để trốn làm bài tập'],
    correctAnswer: 1
  },
  { 
    id: '16', keyword: 'Robot', icon: '🤖',
    explanation: 'Học lập trình Robot giúp em thông minh và sáng tạo hơn.',
    question: 'Robot có thể giúp con người việc gì?',
    options: ['Làm các việc nguy hiểm hoặc lặp đi lặp lại', 'Thay thế hoàn toàn con người', 'Chỉ để trang trí'],
    correctAnswer: 0
  },
  { 
    id: '17', keyword: 'Bình luận lịch sự', icon: '💬',
    explanation: 'Luôn dùng ngôn từ nhã nhặn khi bình luận trên mạng.',
    question: 'Khi không đồng ý với ý kiến của bạn trên mạng, em nên làm gì?',
    options: ['Mắng bạn là đồ ngốc', 'Giải thích nhẹ nhàng và lịch sự', 'Dùng từ ngữ thô tục'],
    correctAnswer: 1
  },
  { 
    id: '18', keyword: 'Tài khoản cá nhân', icon: '👤',
    explanation: 'Giữ bí mật tên đăng nhập và mật khẩu như giữ tiền lì xì!',
    question: 'Em có nên cho bạn mượn tài khoản học tập của mình không?',
    options: ['Có, bạn thân là phải chia sẻ', 'Không, mỗi người nên có tài khoản riêng để bảo mật', 'Cho mượn nếu bạn trả tiền'],
    correctAnswer: 1
  },
  { 
    id: '19', keyword: 'Mã QR an toàn', icon: '🔳',
    explanation: 'Chỉ quét các mã QR từ nguồn tin cậy.',
    question: 'Thấy một mã QR dán trên cột điện ghi "Quét để nhận quà", em nên làm gì?',
    options: ['Quét ngay xem quà gì', 'Không quét vì có thể là mã độc lừa đảo', 'Rủ cả lớp cùng quét'],
    correctAnswer: 1
  },
  { 
    id: '20', keyword: 'Chia sẻ niềm vui', icon: '🏮',
    explanation: 'Đăng những tấm hình Tết ấm cúng để lan tỏa hạnh phúc.',
    question: 'Trước khi đăng ảnh có mặt bạn thân lên mạng, em cần làm gì?',
    options: ['Đăng luôn không cần hỏi', 'Hỏi ý kiến bạn xem bạn có đồng ý không', 'Gắn thẻ bạn thật nhiều'],
    correctAnswer: 1
  }
];

export const WIN_COMBINATIONS = [
  // Rows
  [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
  // Columns
  [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
  // Diagonals
  [0, 5, 10, 15], [3, 6, 9, 12]
];
