$(document).ready(function () {
  let clubs = JSON.parse(localStorage.getItem('vitClubs')) || [];

  const renderClubs = (category = "Technical", search = "") => {
    const container = $('#clubList');
    container.empty();
    const filtered = clubs.filter(club =>
      club.category === category &&
      club.name.toLowerCase().includes(search.toLowerCase())
    );
    if (filtered.length === 0) {
      container.append(`<div class="col-12 text-muted">No clubs found.</div>`);
    }
    filtered.forEach((club, index) => {
      const card = `
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${club.name}</h5>
              <p class="card-text">${club.description}</p>
              <button class="btn btn-sm btn-danger" onclick="deleteClub(${index})">Delete</button>
            </div>
          </div>
        </div>`;
      container.append(card);
    });
  };

  // Initial render
  renderClubs();

  // Save to localStorage
  const saveClubs = () => {
    localStorage.setItem('vitClubs', JSON.stringify(clubs));
  };

  // Add club
  $('#clubForm').submit(function (e) {
    e.preventDefault();
    const name = $('#clubName').val().trim();
    const category = $('#clubCategory').val();
    const description = $('#clubDescription').val().trim();

    if (!name || !category || !description) return;

    clubs.push({ name, category, description });
    saveClubs();
    renderClubs(category);
    this.reset();
    $('.nav-link').removeClass('active').filter(`[data-category="${category}"]`).addClass('active');
  });

  // Delete club
  window.deleteClub = function (index) {
    const category = clubs[index].category;
    clubs.splice(index, 1);
    saveClubs();
    renderClubs(category);
  };

  // Tab click
  $('.nav-link').click(function () {
    const category = $(this).data('category');
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    renderClubs(category, $('#searchInput').val());
  });

  // Search
  $('#searchInput').on('input', function () {
    const activeTab = $('.nav-link.active').data('category');
    renderClubs(activeTab, $(this).val());
  });
});
