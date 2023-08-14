function load() {
    fetch("assets/js/tour.json")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          let h = "";
          for (let p of data) {
            h += `
              <div class="col l-4 m-6 c-12">
                <div class="imgBox">
                  <img class="image" src="${p.image}" alt="${p.alt}" title="${p.title}">
                  <div class="goodPrice">
                    Giá tốt: <span class="price">${p.price}</span>
                  </div>
                </div>
    
                <h3>
                  <a href="${p.link}" title="${p.title}">${p.title}</a>
                </h3>
    
                <div>
                  <i class="fa-solid fa-location-dot"></i>
                  <span class="fp">Điểm xuất phát:</span>
                  <span class="lp">${p.departure}</span>
                </div>
    
                <div>
                  <i class="fa-solid fa-signs-post"></i>
                  <span class="fp">Điểm đến:</span>
                  <span class="lp">${p.destination}</span>
                </div>
    
                <div>
                  <i class="fa-solid fa-bus"></i>
                  <span class="fp">Phương tiện:</span>
                  <span class="lp">${p.vehicle}</span>
                </div>
              </div>
            `;
          }
    
          let e = document.querySelector(".grid");
          e.innerHTML = h;
    
          img();
          icon();
        }
      });
  }
  
  function img() {
    const images = document.querySelectorAll('.image');
  
    images.forEach(function(image) {
      // Thêm sự kiện 'mouseenter' để thêm class "scaleImg"
      image.addEventListener('mouseenter', function() {
        image.classList.add('scaleImg');
      });
  
      // Thêm sự kiện 'mouseleave' để xóa class "scaleImg"
      image.addEventListener('mouseleave', function() {
        image.classList.remove('scaleImg');
      });
    });
  }
  
  function icon() {
    const fpElements = document.querySelectorAll('.fp');
    const lpElements = document.querySelectorAll('.lp');
  
    fpElements.forEach(function(fp) {
      const parentDiv = fp.parentNode;
      const icon = parentDiv.querySelector('i');
  
      parentDiv.addEventListener('mouseenter', function() {
        icon.classList.add('iconAni');
      });
  
      parentDiv.addEventListener('mouseleave', function() {
        icon.classList.remove('iconAni');
      });
  
      lpElements.forEach(function(lp) {
        const lpParentDiv = lp.parentNode;
        const lpIcon = lpParentDiv.querySelector('i');
  
        lpParentDiv.addEventListener('mouseenter', function() {
          lpIcon.classList.add('iconAni');
        });
  
        lpParentDiv.addEventListener('mouseleave', function() {
          lpIcon.classList.remove('iconAni');
        });
      });
    });
  }
  
  window.onload = function() {
    load();
  };