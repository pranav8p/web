$(document).ready(function () {
    // Load existing projects from localStorage
    loadProjects("course");
    loadProjects("dt");
  
    // Handle Course Project form submission
    $("#course-form").submit(function (e) {
      e.preventDefault();
      const title = $("#course-title").val();
      const desc = $("#course-desc").val();
      saveProject("course", { title, desc });
      this.reset();
    });
  
    // Handle DT Project form submission
    $("#dt-form").submit(function (e) {
      e.preventDefault();
      const title = $("#dt-title").val();
      const desc = $("#dt-desc").val();
      saveProject("dt", { title, desc });
      this.reset();
    });
  
    // Save project to localStorage
    function saveProject(type, project) {
      let data = JSON.parse(localStorage.getItem(type)) || [];
      data.push(project);
      localStorage.setItem(type, JSON.stringify(data));
      loadProjects(type);
    }
  
    // Load and display projects
    function loadProjects(type) {
      let data = JSON.parse(localStorage.getItem(type)) || [];
      let tableId = type + "-list";
      $("#" + tableId).empty();
      data.forEach((project, index) => {
        $("#" + tableId).append(
          `<tr>
            <td>${project.title}</td>
            <td>${project.desc}</td>
            <td>
              <button class="btn btn-sm btn-danger delete-btn" data-type="${type}" data-index="${index}">
                🗑️ Delete
              </button>
            </td>
          </tr>`
        );
      });
    }
  
    // Delete individual project
    $(document).on("click", ".delete-btn", function () {
      const type = $(this).data("type");
      const index = $(this).data("index");
      let data = JSON.parse(localStorage.getItem(type)) || [];
      data.splice(index, 1); // Remove the project
      localStorage.setItem(type, JSON.stringify(data));
      loadProjects(type);
    });
  
    // Optional: Clear all projects (if you add buttons for that)
    $("#clear-course").click(function () {
      if (confirm("Are you sure you want to delete all Course Projects?")) {
        localStorage.removeItem("course");
        loadProjects("course");
      }
    });
  
    $("#clear-dt").click(function () {
      if (confirm("Are you sure you want to delete all DT Projects?")) {
        localStorage.removeItem("dt");
        loadProjects("dt");
      }
    });
  });
  