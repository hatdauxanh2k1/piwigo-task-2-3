// Ngăn chặn sự kiện nổi bọt khi click vào <a> hoặc <li> cha
document.querySelectorAll('.tree-menu-parent > a').forEach(function (menuItem) {
  menuItem.addEventListener('click', function (event) {
    // Ngăn chặn sự kiện nổi bọt (không cho sự kiện lan truyền lên các phần tử cha)
    event.stopPropagation();
    
    // Bạn có thể thêm các hành động khác như hiển thị hoặc ẩn các submenu nếu muốn
    const submenu = this.nextElementSibling;
    if (submenu) {
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
  });
});
document.querySelectorAll('.tree-menu-item').forEach(function (menuItem) {
  menuItem.addEventListener('click', function (event) {
    // Ngăn chặn sự kiện nổi bọt (không cho sự kiện lan truyền lên các phần tử cha)
    event.stopPropagation();
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Chọn tất cả các mục cha trong menu
  const parents = document.querySelectorAll('.tree-menu-parent > .tree-menu-item-link');

  parents.forEach(parent => {
      // Thêm sự kiện click vào mục cha
      parent.addEventListener('click', function (event) {
          event.preventDefault(); // Ngăn chuyển hướng liên kết
          const parentLi = this.parentElement;

          // Bật tắt class "open" để hiển thị menu con
          parentLi.classList.toggle('open');
      });
  });
});



// Lấy phần tử DOM
const titleMenu = document.getElementById('rv-menu-tree');
const containerMenu = document.getElementById('rv-menu-container');

titleMenu.addEventListener('click', () => {
  if (containerMenu.classList.contains('hidden')) {
    containerMenu.classList.remove('hidden');
    containerMenu.classList.add('active');
  } else {
    containerMenu.classList.remove('active');
    containerMenu.classList.add('hidden');
  }
});


