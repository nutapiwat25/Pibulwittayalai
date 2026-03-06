const navbarHTML = `
<header class="header">
    <div class="brand">
        <img src="รูป/New_PibulLogo2556.png" alt="โลโก้โรงเรียน" class="school-logo">
        <div class="school-name-wrapper">
            <span class="en-name">PIBULWITTHAYALAI SCHOOL</span>
            <span class="th-name">โรงเรียนพิบูลวิทยาลัย</span>
        </div>
    </div>
    <div class="menu-toggle" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
    </div>

    <nav class="nav-links" id="navLinks">
        <a href="index.html">หน้าแรก</a>
        <a href="page2.html">ความในใจ</a>
        <a href="page4.html">เขียนความในใจ</a>
    </nav>
</header>
`;

document.addEventListener("DOMContentLoaded", function() {
    const navDiv = document.getElementById('navbar-container');
    if (navDiv) navDiv.innerHTML = navbarHTML;
});

// ระบบบันทึกข้อมูล (สำหรับหน้า 4 และ 6)
function saveConfession(event) {
    event.preventDefault();
    
    // ดึงค่าจาก Select box
    const genSelect = document.getElementById('gen');
    
    const data = {
        name: document.getElementById('name').value,
        gen: genSelect.value, // จะได้ค่าเป็น 125, 126, 127 หรือ 128
        msg: document.getElementById('msg').value
    };

    let list = JSON.parse(localStorage.getItem('messages')) || [];
    list.push(data);
    localStorage.setItem('messages', JSON.stringify(list));
    
    alert('ส่งความในใจรุ่น ' + data.gen + ' เรียบร้อยแล้ว!');
    window.location.href = 'page6.html';
}

function loadMessages() {
    const tableBody = document.getElementById('msgList');
    if (!tableBody) return;
    const list = JSON.parse(localStorage.getItem('messages')) || [];
    tableBody.innerHTML = list.map(item => `
        <tr><td>${item.name}</td><td>${item.gen}</td><td>${item.msg}</td></tr>
    `).join('') || '<tr><td colspan="3">ยังไม่มีข้อมูล</td></tr>';
}
// ฟังก์ชันสำหรับ เปิด-ปิด เมนู
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active'); // สลับคลาส active เพื่อแสดง/ซ่อนเมนู
    }
}
