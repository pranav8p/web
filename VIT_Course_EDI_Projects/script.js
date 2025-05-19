$(document).ready(function () {
    // Load existing projects from localStorage
    loadProjects("course");
    loadProjects("edi");
  
    // Handle Course Project form submission
    $("#course-form").submit(function (e) {
      e.preventDefault();
      const title = $("#course-title").val();
      const desc = $("#course-desc").val();
      saveProject("course", { title, desc });
      this.reset();
    });
  
    // Handle EDI Project form submission
    $("#edi-form").submit(function (e) {
      e.preventDefault();
      const title = $("#edi-title").val();
      const desc = $("#edi-desc").val();
      saveProject("edi", { title, desc });
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
      data.splice(index, 1); // Remove that project
      localStorage.setItem(type, JSON.stringify(data));
      loadProjects(type);
    });
  
    // Optional: Clear all projects (if you added buttons for that)
    $("#clear-course").click(function () {
      if (confirm("Are you sure you want to delete all Course Projects?")) {
        localStorage.removeItem("course");
        loadProjects("course");
      }
    });
  
    $("#clear-edi").click(function () {
      if (confirm("Are you sure you want to delete all EDI Projects?")) {
        localStorage.removeItem("edi");
        loadProjects("edi");
      }
    });
  });
  