const customerAge = 19, movieRating = "T18", seatType = "VIP", roomFormatCode = 2;
const dayOfWeek = 4, isStudent = true, isPhysicalTicket = true, comboOptionCode = 1;

let isOrderValid = true, baseSeatPrice = 0, seatDescription = "", roomSurcharge = 0;
let roomFormatName = "", discountAmount = 0, netTicketPrice = 0, comboFee = 0;
let comboName = "", physicalTicketFee = 0, totalPayable = 0, logisticsGift = "";

if (isNaN(customerAge) || !Number.isInteger(customerAge) || customerAge < 1 || customerAge > 120) {
    isOrderValid = false;
    console.log("[LỖI] Dữ liệu độ tuổi không hợp lệ.");
} else if (movieRating === "T13" && customerAge < 13 ||
    movieRating === "T16" && customerAge < 16 ||
    movieRating === "T18" && customerAge < 18) {
    isOrderValid = false;
    console.log("[TỪ CHỐI] Khán giả không đủ độ tuổi theo quy định của bộ phim.");
} else if (movieRating !== "P" && movieRating !== "T13" && movieRating !== "T16" && movieRating !== "T18") {
    isOrderValid = false;
    console.log("[LỖI] Mã phân loại phim không tồn tại.");
}

if (isOrderValid) {
    if (seatType === "STANDARD") { baseSeatPrice = 80000; seatDescription = "Ghế Tiêu Chuẩn"; }
    else if (seatType === "VIP") { baseSeatPrice = 95000; seatDescription = "Ghế VIP"; }
    else if (seatType === "COUPLE") { baseSeatPrice = 160000; seatDescription = "Ghế Đôi Sweetbox"; }
    else { isOrderValid = false; console.log("[LỖI] Hạng ghế không hợp lệ."); }
}

if (isOrderValid) {
    switch (roomFormatCode) {
        case 1: roomSurcharge = 0; roomFormatName = "2D Tiêu Chuẩn"; break;
        case 2: roomSurcharge = 40000; roomFormatName = "3D IMAX (Kèm Kính Chuyên Dụng)"; break;
        case 3: roomSurcharge = 60000; roomFormatName = "4DX Đa Giác Quan (Chuyển Động & Hiệu Ứng)"; break;
        default: isOrderValid = false; console.log("[LỖI] Định dạng phòng chiếu không tồn tại.");
    }
}

if (isOrderValid) {
    discountAmount = (isStudent && dayOfWeek >= 2 && dayOfWeek <= 6) ? baseSeatPrice * 0.2 : 0;
    netTicketPrice = baseSeatPrice - discountAmount;

    switch (comboOptionCode) {
        case 0: comboName = "Không chọn bắp nước"; comboFee = 0; break;
        case 1: comboName = "Solo Box (1 Bắp Ngọt + 1 Nước)"; comboFee = 65000; break;
        case 2: comboName = "Couple Box (1 Bắp Ngọt + 2 Nước + 1 Snack)"; comboFee = 99000; break;
        default: comboName = "Gói không hợp lệ"; comboFee = 0; console.log("[CẢNH BÁO] Mã combo không hợp lệ.");
    }
    physicalTicketFee = isPhysicalTicket ? 5000 : 0;
    totalPayable = netTicketPrice + roomSurcharge + comboFee + physicalTicketFee;
    logisticsGift = totalPayable >= 200000 ? "Voucher Bắp Ngọt Miễn Phí Suất Chiếu Kế Tiếp" : "Không có quà tặng kèm";
}
if (isOrderValid) {
    console.log(`========================================
              PHIẾU ĐIỀU PHỐI HẬU CẦN VÀ VÉ XEM PHIM
========================================
Độ tuổi khán giả     : ${customerAge} tuổi (Mác phim: ${movieRating})
Hạng ghế lựa chọn    : ${seatDescription} - ${baseSeatPrice} VNĐ
Định dạng phòng chiếu: ${roomFormatName} (Phụ phí: ${roomSurcharge} VNĐ)
Giảm giá ưu đãi HSSV : -${discountAmount} VNĐ
Tiền vé sau ưu đãi   : ${netTicketPrice} VNĐ
Dịch vụ bắp nước     : ${comboName} (${comboFee} VNĐ)
Ấn phẩm vé cứng      : ${isPhysicalTicket ? "Có yêu cầu in" : "Không in"} (${physicalTicketFee} VNĐ)
----------------------------------------
TỔNG THANH TOÁN      : ${totalPayable} VNĐ
QUÀ TẶNG KÈM THEO    : ${logisticsGift}
========================================`);
}
