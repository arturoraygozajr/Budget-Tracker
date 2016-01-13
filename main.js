$(document).ready(init)

function init(){
	$('.add').on('click', addTransaction)


}var sum = 0;

function addTransaction(){
	var amount = $('#amount').val();
	var date = $('#date').val();
	var name = $('#transactionName').val();
	var newRow = $('#template').clone();
	newRow.find('.transaction').text(name);
	if(amount < 0) {
		newRow.find('.amount').addClass('negative').text(parseFloat(amount).toFixed(2));
	} else {
		newRow.find('.amount').addClass('positive').text(parseFloat(amount).toFixed(2));
	}
	
	newRow.find('.date').text(date);
	newRow.attr("id", '');
	$('tbody').prepend(newRow);
	//clear input here. Empty string.
}