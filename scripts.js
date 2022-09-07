$(document).ready(function () {
    $('#toPayment').on('click', function () {
        $("#nav-payment-tab").click()

    });
    $('#toConfirmation').on('click', function () {
        $("#nav-confirmation-tab").tab('show')

    });

    $('button[data-bs-toggle="tab"]').on('show.bs.tab', function () {
        $('#output-confirmation').html(
            getLineData('Name: ', $('#firstName').val() + ' ' + $('#lastName').val()) + '\n' +
            getLineData('CC number: ', $('#cc-number').val())
        )
    })
});

function showJobs() {
    $('#jobsCard').removeAttr('hidden');
    $('#formsCard ').attr('hidden','');
}

function showForms() {
    $('#formsCard').removeAttr('hidden');
    $('#jobsCard ').attr('hidden','');
}
