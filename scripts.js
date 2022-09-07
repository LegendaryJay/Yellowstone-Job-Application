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
}


function displayTitle(title) {
    $('#output-confirmation').append(
        "<h1 class='h4'>" + title + "</h1>"
    )
}

function displayNewline() {
    $('#output-confirmation').append(
        "<hr>"
    )
}

function displayThis(title, value) {

    $('#output-confirmation').append(
        "<div class='row'>" +
        "<div class='col-2 text-primary'>" + title + "</div>" +
        "<div class='col-10'>" + (value.trim() === '' ? "---" : value) + "</div>" +
        "</div>"
    )
}

function showJobs() {
    $('#jobsCard').removeAttr('hidden');
    $('#formsCard ').attr('hidden', '');
}

function showForms() {
    $('#formsCard').removeAttr('hidden');
    $('#jobsCard ').attr('hidden', '');
}
