var currentJob = "";

$(document).ready(function () {
    showJobs();

    $('.apply-button').on('click', function () {
        showForms();
        currentJob = $(this).id;

    });
    $('#back-btn').on('click', function () {
        showJobs();

    });
    $('#toConfirmation').on('click', function () {
        $("#nav-confirmation-tab").tab('show')

    });

    $('button[data-bs-toggle="tab"]').on('show.bs.tab', function () {
        displaySummary()
    })
});

function displaySummary() {
    $("#output-confirmation").empty()
    displayTitle("Personal Info")
    displayThis("Name", $("#first-name").val() + " " + $('#middle-name').val() + " " + $('#last-name').val());
    displayThis("Address", $("#street").val());
    displayThis("", $("#city").val() + " " + $("#state").val() + " " + $("zip").val());
    displayThis("", $("#country option:selected").text());
    displayThis("Phone", $("#phone").val());
    displayThis("Email", $("#email").val());
    displayNewline()

    displayTitle("Employment")
    displayThis("Job 1", "", true)
    displayThis("Company", $("#e1-company").val());
    displayThis("Address", $("#e1-street").val());
    displayThis("", $("#e1-city").val() + " " + $("#e1-state").val() + " " + $("#e1-zip").val());
    displayThis("", $("#e1-country").val());
    displayThis("Phone", $("#e1-phone").val());
    displayThis("Position", $("#e1-position").val());
    displayThis("Duties", $("#e1-duty").val());
    displayThis("Dates Working", $("#e1-start-date").val() + "-" + $("#e1-end-date").val());
    displayThis("Reason for leaving", $("#e1-leave-reason").val());
    displayThis("Permission", "We can " + ($("e1-contact-permission").is(':checked') ? '' : "not") + " contact this employer");
    displayNewline()

    displayTitle("Education");
    displayThis("School 1", "", true)
    displayThis("School", $('#school-1-name').val());
    displayThis("Location", $('#school-1-city').val() + ", " + $('#school-1-state').val());
    displayThis("", $('#school-1-country').val());
    displayThis("Degree", $('#school-1-degree').val());
    displayThis("Field of Study", $('#school-1-field').val());
    displayThis("Graduated", $('#school-1-graduated').is(':checked') ? 'True' : 'False');
    displayThis("Other Skills", $('#school-additional-skills'))
    displayNewline()

    


}


function displayTitle(title) {
    $('#output-confirmation').append("<h1 class='h4'>" + title + "</h1>")
}

function displayNewline() {
    $('#output-confirmation').append("<hr class='my-3'>")
}

function displayRow1(value) {
    return "<div class='col-2 text-primary'>" + value + "</div>"
}

function displayRow2(value) {
    return "<div class='col-10'>" + value + "</div>"
}

function displayThis(title, value, ignoreValidation) {
    const value2 = ignoreValidation ? value : (value.trim() === '' ? "---" : value);
    $('#output-confirmation').append("<div class='row'>" + displayRow1(title) + displayRow2(value2) + "</div>")
}

function showJobs() {
    $('#jobsCard').removeAttr('hidden');
    $('#formsCard ').attr('hidden', '');
}

function showForms() {
    $('#formsCard').removeAttr('hidden');
    $('#jobsCard ').attr('hidden', '');
}
