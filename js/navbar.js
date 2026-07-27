 function initializeNavbar() {

    
// Dropdown menus open on hover or click, and now STAY open even after the
  // mouse leaves the nav bar. They only close when you click elsewhere on
  // the page, click the trigger again, or open a different dropdown.
  document.querySelectorAll('.nav-center > li').forEach(function (li) {
    var menu = li.querySelector('.dropdown-menu');
    var trigger = li.querySelector('a');
    if (!menu || !trigger) return;

    function closeAllExcept(exceptMenu) {
      document.querySelectorAll('.dropdown-menu.show').forEach(function (m) {
        if (m !== exceptMenu) m.classList.remove('show');
      });
    }

    function openMenu() {
      closeAllExcept(menu);
      menu.classList.add('show');
    }

    // Hovering the trigger or the menu opens it (no close-on-leave anymore)
    li.addEventListener('mouseenter', openMenu);
    menu.addEventListener('mouseenter', openMenu);

    // Clicking the trigger toggles it open/closed — useful for touch and
    // for keeping it open without needing to hover at all
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = menu.classList.contains('show');
      closeAllExcept(menu);
      menu.classList.toggle('show', !isOpen);
    });
  });

  // Clicking anywhere outside the nav closes any open dropdown
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-center')) {
      document.querySelectorAll('.dropdown-menu.show').forEach(function (m) {
        m.classList.remove('show');
      });
    }
  });

  // Mobile menu toggle
  var mobileBtn = document.getElementById('mobileMenuBtn');
  var mobileNav = document.getElementById('mobileNav');
  mobileBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!mobileNav.contains(e.target) && !mobileBtn.contains(e.target)) {
      mobileNav.classList.remove('active');
    }
  });

  // Mobile accordion fold sections (Who is it for / Capabilities / Resources)
  document.querySelectorAll('.mobile-section-title').forEach(function (title) {
    title.addEventListener('click', function () {
      var fold = document.getElementById('fold-' + title.dataset.fold);
      var isOpen = fold.classList.contains('open');
      document.querySelectorAll('.mobile-fold').forEach(function (f) { f.classList.remove('open'); });
      if (!isOpen) fold.classList.add('open');
    });
  });

}
 
 