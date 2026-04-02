// Dữ liệu giả lập (Sau này có thể lấy từ Google Sheets)
const wishes = [
    { name: "Bé Châu, 18 tuổi", wish: "Xây được nhà to ở yb", story: "Ước mơ từ bé làm kiến trúc sư xây nhà =))." },
    { name: "Bé Hiền, 18 tuổi", wish: "Săn được vé vip GD Concert", story: "Fan a GD từ bé." },
    
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