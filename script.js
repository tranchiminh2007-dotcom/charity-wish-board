// Dữ liệu giả lập (Sau này có thể lấy từ Google Sheets)
const wishes = [
    { name: "Bé An, 8 tuổi", wish: "Một bộ bút màu sáp", story: "An rất thích vẽ nhưng chỉ có 2 cây bút chì màu ngắn củn." },
    { name: "Bé Bình, 10 tuổi", wish: "Đôi giày bata size 34", story: "Bình đi bộ 3km đến trường mỗi ngày bằng đôi dép tổ ong đã đứt." },
    { name: "Bé Chi, 6 tuổi", wish: "Gấu bông nhỏ", story: "Chi mới vào mái ấm, em cần một người bạn nhỏ để ôm khi ngủ." },
    { name: "Bé Đạt, 12 tuổi", wish: "Sách giáo khoa lớp 6", story: "Đạt học rất giỏi nhưng thư viện trường không đủ sách cho em." }
];

const container = document.getElementById('wish-container');

// Chạy vòng lặp để tạo từng thẻ
wishes.forEach(item => {
    // Tạo 1 div mới
    const card = document.createElement('div');
    card.classList.add('wish-card');

    // Gắn nội dung vào div
    card.innerHTML = `
        <h3>${item.name}</h3>
        <p><strong>Ước:</strong> ${item.wish}</p>
        <p><i>"${item.story}"</i></p>
        <button class="donate-btn" onclick="alert('Cảm ơn bạn! Tính năng xác nhận tặng quà đang được phát triển.')">Tặng quà này</button>
    `;

    // Nhét thẻ này vào giao diện chính
    container.appendChild(card);
});