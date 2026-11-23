// ===== DỮ LIỆU SẢN PHẨM =====
// Muốn có ảnh thật: thêm image: "images/ten-anh.jpg" vào từng sản phẩm
// colors: các màu để khách chọn. Size được lấy theo danh mục (xem SIZES bên dưới)
const products = [
  { id: 1,  name: "Áo thun nam cotton basic form rộng", price: 129000, oldPrice: 199000, category: "quan-ao",  sold: 1200, colors: ["Trắng", "Đen", "Xám", "Be"],
    description: "Áo thun chất liệu 100% cotton dày dặn, thấm hút mồ hôi tốt. Form rộng thoải mái, dễ phối với quần jean, quần short hoặc quần kaki." },
  { id: 2,  name: "Quần jean nữ ống rộng lưng cao",     price: 259000, oldPrice: 350000, category: "quan-ao",  sold: 860,  colors: ["Xanh nhạt", "Xanh đậm", "Đen"],
    description: "Quần jean lưng cao giúp tôn dáng, ống rộng che khuyết điểm chân. Chất jean co giãn nhẹ, mặc cả ngày không bị bí." },
  { id: 3,  name: "Váy hoa nhí dáng xòe đi biển",       price: 189000, oldPrice: 290000, category: "quan-ao",  sold: 540,  colors: ["Hoa vàng", "Hoa trắng", "Hoa xanh"],
    description: "Váy voan hoa nhí nhẹ nhàng, dáng xòe bay bổng, rất hợp đi biển, đi chơi hoặc chụp ảnh. Có lớp lót bên trong không bị lộ." },
  { id: 4,  name: "Áo sơ mi công sở tay dài",           price: 219000, oldPrice: 279000, category: "quan-ao",  sold: 330,  colors: ["Trắng", "Xanh nhạt", "Hồng"],
    description: "Áo sơ mi vải lụa mềm, ít nhăn, phù hợp đi làm và đi học. Thiết kế đơn giản, thanh lịch." },
  { id: 5,  name: "Giày sneaker trắng unisex",          price: 399000, oldPrice: 599000, category: "giay-dep", sold: 2100, colors: ["Trắng", "Trắng đen"],
    description: "Giày sneaker đế cao su êm, chống trơn trượt. Kiểu dáng basic dễ phối đồ, phù hợp cả nam và nữ." },
  { id: 6,  name: "Giày cao gót mũi nhọn 7cm",          price: 289000, oldPrice: 390000, category: "giay-dep", sold: 410,  colors: ["Đen", "Kem", "Đỏ"],
    description: "Giày cao gót 7cm mũi nhọn thanh lịch, gót vững chắc, lót đệm êm chân. Thích hợp đi làm, dự tiệc." },
  { id: 7,  name: "Dép quai ngang đế êm chống trượt",   price: 79000,  oldPrice: 120000, category: "giay-dep", sold: 3400, colors: ["Đen", "Trắng", "Xanh", "Hồng"],
    description: "Dép quai ngang đế EVA siêu nhẹ, êm chân, chống trượt khi đi mưa. Dùng đi trong nhà hoặc đi chơi đều được." },
  { id: 8,  name: "Boot da cổ ngắn phong cách Hàn",     price: 459000, oldPrice: 650000, category: "giay-dep", sold: 220,  colors: ["Đen", "Nâu"],
    description: "Boot da PU cao cấp, cổ ngắn có khóa kéo bên hông, dễ mang. Phong cách Hàn Quốc cá tính." },
  { id: 9,  name: "Túi xách nữ đeo vai thời trang",     price: 239000, oldPrice: 320000, category: "phu-kien", sold: 780,  colors: ["Đen", "Trắng", "Nâu"],
    description: "Túi xách da mềm, nhiều ngăn tiện lợi, đựng vừa điện thoại, ví và đồ trang điểm. Có dây đeo vai điều chỉnh được." },
  { id: 10, name: "Mũ lưỡi trai thêu chữ",              price: 69000,  oldPrice: 99000,  category: "phu-kien", sold: 1500, colors: ["Đen", "Trắng", "Be", "Xanh navy"],
    description: "Mũ lưỡi trai vải kaki, thêu chữ sắc nét, có khóa điều chỉnh vòng đầu phía sau." },
  { id: 11, name: "Kính mát chống tia UV",              price: 149000, oldPrice: 250000, category: "phu-kien", sold: 640,  colors: ["Đen", "Trà"],
    description: "Kính mát tròng chống tia UV400, gọng nhựa dẻo nhẹ. Tặng kèm hộp đựng và khăn lau kính." },
  { id: 12, name: "Balo laptop chống nước",             price: 329000, oldPrice: 450000, category: "phu-kien", sold: 910,  colors: ["Đen", "Xám"],
    description: "Balo vải chống nước, có ngăn chống sốc cho laptop 15.6 inch, cổng sạc USB tiện lợi." },
];

// Size theo từng danh mục (phụ kiện không có size)
const SIZES = {
  "quan-ao":  ["S", "M", "L", "XL", "XXL"],
  "giay-dep": ["36", "37", "38", "39", "40", "41", "42", "43"],
  "phu-kien": [],
};

const CATEGORY_NAMES = {
  "quan-ao": "Quần áo",
  "giay-dep": "Giày dép",
  "phu-kien": "Phụ kiện",
};

// ===== GIỎ HÀNG (LƯU BẰNG localStorage) =====
// Giỏ hàng là một mảng: [{ id: 1, color: "Đen", size: "L", qty: 2 }, ...]
// Cùng sản phẩm nhưng khác màu/size thì là 2 dòng khác nhau
const CART_KEY = "modashop_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (!el) return;
  const total = getCart().reduce((sum, item) => sum + item.qty, 0);
  el.textContent = total;
}

function addToCart(id, color = "", size = "", qty = 1) {
  const cart = getCart();
  const item = cart.find(i => i.id === id && (i.color || "") === color && (i.size || "") === size);
  if (item) {
    item.qty += qty;
  } else {
    cart.push({ id, color, size, qty });
  }
  saveCart(cart);
  showToast("Đã thêm vào giỏ hàng!");
}

// index = vị trí của dòng trong giỏ hàng
function changeQty(index, delta) {
  const cart = getCart();
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1200);
}

// ===== HÀM TIỆN ÍCH =====
function formatPrice(number) {
  return "₫" + number.toLocaleString("vi-VN");
}

// Có ảnh thì hiện ảnh, chưa có thì hiện ô chữ "Ảnh sản phẩm"
function productImage(p) {
  return p.image
    ? `<img src="${p.image}" alt="${p.name}">`
    : `<span class="no-img">Ảnh sản phẩm</span>`;
}

function formatSold(number) {
  return number >= 1000 ? (number / 1000).toFixed(1) + "k" : number;
}

function getDiscount(p) {
  return Math.round((1 - p.price / p.oldPrice) * 100);
}

// Thẻ sản phẩm dùng chung cho trang chủ và mục "Sản phẩm tương tự"
function productCardHTML(p) {
  return `
    <a href="product.html?id=${p.id}" class="product-card">
      <div class="product-img">
        ${productImage(p)}
        <span class="discount">-${getDiscount(p)}%</span>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div>
          <span class="product-price">${formatPrice(p.price)}</span>
          <span class="old-price">${formatPrice(p.oldPrice)}</span>
        </div>
        <div class="product-meta">
          <span>4.8 / 5</span>
          <span>Đã bán ${formatSold(p.sold)}</span>
        </div>
      </div>
    </a>
  `;
}

// ===== TRANG CHỦ: DANH SÁCH SẢN PHẨM =====
let currentCategory = "all";
let searchText = "";

const productGrid  = document.getElementById("productGrid");
const searchForm   = document.getElementById("searchForm");
const searchInput  = document.getElementById("searchInput");
const categoryBtns = document.querySelectorAll(".category");

function renderProducts() {
  if (!productGrid) return; // không phải trang chủ thì bỏ qua
  const list = products.filter(p =>
    (currentCategory === "all" || p.category === currentCategory) &&
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (list.length === 0) {
    productGrid.innerHTML = `<p class="empty">Không tìm thấy sản phẩm nào.</p>`;
    return;
  }
  productGrid.innerHTML = list.map(productCardHTML).join("");
}

categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.cat;
    renderProducts();
  });
});

// ===== TRANG CHI TIẾT SẢN PHẨM =====
let selectedColor = "";
let selectedSize = "";
let selectedQty = 1;
let currentProduct = null;

function renderProductDetail() {
  const detail = document.getElementById("productDetail");
  if (!detail) return; // không phải trang chi tiết thì bỏ qua

  const id = Number(new URLSearchParams(location.search).get("id"));
  const p = products.find(x => x.id === id);

  if (!p) {
    detail.innerHTML = `
      <div class="cart-empty">
        <p>Không tìm thấy sản phẩm.</p>
        <a href="index.html" class="btn-main">Về trang chủ</a>
      </div>`;
    return;
  }

  currentProduct = p;
  document.title = p.name + " - ModaShop";
  const sizes = SIZES[p.category];

  // Đường dẫn: Trang chủ > Danh mục > Tên sản phẩm
  document.getElementById("breadcrumb").innerHTML = `
    <a href="index.html">Trang chủ</a> &gt;
    <a href="index.html">${CATEGORY_NAMES[p.category]}</a> &gt;
    <span>${p.name}</span>`;

  detail.innerHTML = `
    <div class="detail-box">
      <!-- Ảnh -->
      <div class="detail-gallery">
        <div class="detail-main-img">${productImage(p)}</div>
        <div class="detail-thumbs">
          <div class="detail-thumb active">${productImage(p)}</div>
          <div class="detail-thumb">${productImage(p)}</div>
          <div class="detail-thumb">${productImage(p)}</div>
          <div class="detail-thumb">${productImage(p)}</div>
        </div>
      </div>

      <!-- Thông tin -->
      <div class="detail-info">
        <h1 class="detail-name">${p.name}</h1>
        <div class="detail-stats">
          <span class="stat-main">4.8</span> Đánh giá
          <span class="divider">|</span>
          <span class="stat-main">${formatSold(p.sold)}</span> Đã bán
        </div>

        <div class="detail-price-box">
          <span class="old-price">${formatPrice(p.oldPrice)}</span>
          <span class="detail-price">${formatPrice(p.price)}</span>
          <span class="detail-discount">${getDiscount(p)}% GIẢM</span>
        </div>

        <div class="detail-row">
          <div class="detail-label">Vận chuyển</div>
          <div>Miễn phí vận chuyển cho đơn từ ₫150.000</div>
        </div>

        <div class="detail-row">
          <div class="detail-label">Màu sắc</div>
          <div class="option-list" id="colorOptions">
            ${p.colors.map(c => `<button class="option-btn" data-value="${c}">${c}</button>`).join("")}
          </div>
        </div>

        ${sizes.length ? `
        <div class="detail-row">
          <div class="detail-label">Kích cỡ</div>
          <div class="option-list" id="sizeOptions">
            ${sizes.map(s => `<button class="option-btn" data-value="${s}">${s}</button>`).join("")}
          </div>
        </div>` : ""}

        <div class="detail-row">
          <div class="detail-label">Số lượng</div>
          <div class="qty-box">
            <button onclick="changeDetailQty(-1)">−</button>
            <span id="detailQty">1</span>
            <button onclick="changeDetailQty(1)">+</button>
          </div>
        </div>

        <p class="detail-error" id="detailError"></p>

        <div class="detail-actions">
          <button class="btn-outline" onclick="detailAddToCart(false)">Thêm vào giỏ hàng</button>
          <button class="btn-main" onclick="detailAddToCart(true)">Mua ngay</button>
        </div>
      </div>
    </div>

    <!-- Mô tả -->
    <section class="section detail-desc">
      <h2 class="desc-title">MÔ TẢ SẢN PHẨM</h2>
      <p>${p.description}</p>
      <ul>
        <li>Danh mục: ${CATEGORY_NAMES[p.category]}</li>
        <li>Màu sắc: ${p.colors.join(", ")}</li>
        ${sizes.length ? `<li>Kích cỡ: ${sizes.join(", ")}</li>` : ""}
        <li>Đổi trả miễn phí trong 7 ngày nếu lỗi do nhà sản xuất</li>
      </ul>
    </section>
  `;

  // Bấm chọn màu / size
  setupOptions("colorOptions", value => selectedColor = value);
  setupOptions("sizeOptions",  value => selectedSize = value);

  // Sản phẩm tương tự: cùng danh mục, bỏ sản phẩm đang xem
  const related = products.filter(x => x.category === p.category && x.id !== p.id);
  document.getElementById("relatedGrid").innerHTML = related.map(productCardHTML).join("");
}

function setupOptions(containerId, onSelect) {
  const box = document.getElementById(containerId);
  if (!box) return;
  box.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      box.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      onSelect(btn.dataset.value);
      document.getElementById("detailError").textContent = "";
    });
  });
}

function changeDetailQty(delta) {
  selectedQty = Math.max(1, selectedQty + delta);
  document.getElementById("detailQty").textContent = selectedQty;
}

function detailAddToCart(buyNow) {
  const p = currentProduct;
  const needSize = SIZES[p.category].length > 0;
  const error = document.getElementById("detailError");

  if (!selectedColor) {
    error.textContent = "Vui lòng chọn màu sắc.";
    return;
  }
  if (needSize && !selectedSize) {
    error.textContent = "Vui lòng chọn kích cỡ.";
    return;
  }

  addToCart(p.id, selectedColor, selectedSize, selectedQty);
  if (buyNow) location.href = "cart.html";
}

// ===== TRANG GIỎ HÀNG =====
function renderCart() {
  const cartList = document.getElementById("cartList");
  if (!cartList) return; // không phải trang giỏ hàng thì bỏ qua

  const cart = getCart();
  const summary = document.getElementById("cartSummary");

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="cart-empty">
        <p>Giỏ hàng của bạn đang trống</p>
        <a href="index.html" class="btn-main">Mua sắm ngay</a>
      </div>`;
    summary.style.display = "none";
    return;
  }

  let totalQty = 0;
  let totalPrice = 0;

  cartList.innerHTML = cart.map((item, index) => {
    const p = products.find(x => x.id === item.id);
    if (!p) return "";
    const lineTotal = p.price * item.qty;
    totalQty += item.qty;
    totalPrice += lineTotal;
    const variant = [item.color, item.size].filter(Boolean).join(", ");
    return `
      <div class="cart-row">
        <div class="cart-product">
          <a href="product.html?id=${p.id}" class="cart-thumb">${productImage(p)}</a>
          <div>
            <a href="product.html?id=${p.id}">${p.name}</a>
            ${variant ? `<div class="cart-variant">Phân loại: ${variant}</div>` : ""}
          </div>
        </div>
        <div class="cart-unit">${formatPrice(p.price)}</div>
        <div class="qty-box">
          <button onclick="changeQty(${index}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>
        <div class="cart-line-total">${formatPrice(lineTotal)}</div>
        <button class="remove-btn" onclick="removeFromCart(${index})">Xóa</button>
      </div>`;
  }).join("");

  summary.style.display = "flex";
  document.getElementById("totalQty").textContent = totalQty;
  document.getElementById("totalPrice").textContent = formatPrice(totalPrice);
}

function checkout() {
  if (getCart().length === 0) return;
  alert("Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại ModaShop.");
  saveCart([]);
  renderCart();
}

// ===== TÌM KIẾM =====
if (searchForm) {
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    // Đang ở trang khác thì quay về trang chủ kèm từ khóa
    if (!productGrid) {
      location.href = "index.html?q=" + encodeURIComponent(searchInput.value.trim());
      return;
    }
    searchText = searchInput.value.trim();
    renderProducts();
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });
}

// Nhận từ khóa tìm kiếm từ trang khác (index.html?q=...)
const urlQuery = new URLSearchParams(location.search).get("q");
if (urlQuery && searchInput) {
  searchText = urlQuery;
  searchInput.value = urlQuery;
}

// ===== TÀI KHOẢN: ĐĂNG KÝ / ĐĂNG NHẬP =====
// Lưu ý: đây là bản học tập, tài khoản được lưu trong localStorage của trình duyệt.
// Trang web thật phải lưu tài khoản ở máy chủ (backend) và mã hóa mật khẩu.
const USERS_KEY = "modashop_users";        // danh sách tài khoản đã đăng ký
const CURRENT_USER_KEY = "modashop_user";  // tài khoản đang đăng nhập

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
  } catch (e) {
    return null;
  }
}

function setCurrentUser(user) {
  // Không lưu mật khẩu vào thông tin đăng nhập hiện tại
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ name: user.name, account: user.account }));
}

function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
  location.reload();
}

// Kiểm tra email hoặc số điện thoại Việt Nam (10 số, bắt đầu bằng 0)
function isValidAccount(value) {
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isPhone = /^0\d{9}$/.test(value);
  return isEmail || isPhone;
}

function setFieldError(id, message) {
  const el = document.getElementById(id);
  if (el) el.textContent = message;
  const input = document.getElementById(id.replace("Error", ""));
  if (input) input.classList.toggle("input-error", message !== "");
}

// Hiện "Xin chào, tên | Đăng xuất" ở đầu trang khi đã đăng nhập
function renderAuthLinks() {
  const box = document.getElementById("authLinks");
  if (!box) return;
  const user = getCurrentUser();
  if (user) {
    box.innerHTML = `
      <span class="hello-user">Xin chào, ${user.name}</span>
      <a href="#" onclick="logout(); return false;">Đăng xuất</a>`;
  }
}

// Nút "Hiện / Ẩn" mật khẩu
document.querySelectorAll(".toggle-pass").forEach(btn => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    btn.textContent = show ? "Ẩn" : "Hiện";
  });
});

// --- Form đăng ký ---
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", e => {
    e.preventDefault();
    const name     = document.getElementById("regName").value.trim();
    const account  = document.getElementById("regAccount").value.trim().toLowerCase();
    const password = document.getElementById("regPassword").value;
    const confirm  = document.getElementById("regConfirm").value;
    let ok = true;

    // Xóa lỗi cũ
    ["regNameError", "regAccountError", "regPasswordError", "regConfirmError"].forEach(id => setFieldError(id, ""));

    if (name.length < 2) {
      setFieldError("regNameError", "Vui lòng nhập họ tên.");
      ok = false;
    }
    if (!isValidAccount(account)) {
      setFieldError("regAccountError", "Email hoặc số điện thoại không hợp lệ.");
      ok = false;
    } else if (getUsers().some(u => u.account === account)) {
      setFieldError("regAccountError", "Tài khoản này đã được đăng ký.");
      ok = false;
    }
    if (password.length < 6) {
      setFieldError("regPasswordError", "Mật khẩu phải có ít nhất 6 ký tự.");
      ok = false;
    }
    if (confirm !== password || confirm === "") {
      setFieldError("regConfirmError", "Mật khẩu nhập lại không khớp.");
      ok = false;
    }
    if (!ok) return;

    const users = getUsers();
    const newUser = { name, account, password };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // Đăng ký xong thì đăng nhập luôn và về trang chủ
    setCurrentUser(newUser);
    showToast("Đăng ký thành công!");
    setTimeout(() => location.href = "index.html", 1000);
  });
}

// --- Form đăng nhập ---
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const account  = document.getElementById("loginAccount").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;
    const formError = document.getElementById("loginError");
    let ok = true;

    setFieldError("loginAccountError", "");
    setFieldError("loginPasswordError", "");
    formError.textContent = "";

    if (account === "") {
      setFieldError("loginAccountError", "Vui lòng nhập email hoặc số điện thoại.");
      ok = false;
    }
    if (password === "") {
      setFieldError("loginPasswordError", "Vui lòng nhập mật khẩu.");
      ok = false;
    }
    if (!ok) return;

    const user = getUsers().find(u => u.account === account && u.password === password);
    if (!user) {
      formError.textContent = "Tài khoản hoặc mật khẩu không đúng.";
      return;
    }

    setCurrentUser(user);
    showToast("Đăng nhập thành công!");
    setTimeout(() => location.href = "index.html", 1000);
  });
}

// Đã đăng nhập rồi mà vào trang đăng nhập / đăng ký thì quay về trang chủ
if ((loginForm || registerForm) && getCurrentUser()) {
  location.href = "index.html";
}

// ===== CHẠY KHI MỞ TRANG =====
renderAuthLinks();
updateCartCount();
renderProducts();
renderProductDetail();
renderCart();
