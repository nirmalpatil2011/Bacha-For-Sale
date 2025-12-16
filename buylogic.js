document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from actually submitting

    // Get both names from the form inputs
    const fname = document.getElementById("fname").value.trim();
    const mname = document.getElementById("mname").value.trim();
    const fullName = `MR.${fname} and MRS.${mname}`;

    swal({
      title: "Are you sure?",
      text: "Do you want to submit the form?",
      icon: "warning",
      buttons: ["No, Cancel", "Yes, Submit"],
      dangerMode: true,
    }).then((willSubmit) => {
      if (willSubmit) {
        swal({
          title: "Submitted!",
          content: {
            element: "div",
            attributes: {
              innerHTML:
                `Dear <b style="color:#007bff;">${fullName}</b>, your form has been successfully submitted.`,
            },
          },
          icon: "success",
        });
        // 👉 To actually submit: uncomment this line
        // form.submit();
      } else {
        swal({
          title: "Cancelled",
          content: {
            element: "div",
            attributes: {
              innerHTML:
                `Dear <b style="color:#007bff;">${fullName}</b>, your form submission has been cancelled.`,
            },
          },
          icon: "error",
        });
      }
    });
  });
});
