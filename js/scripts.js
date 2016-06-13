
$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    var location = $("#location").val();
    var landmark = $("#landmark").val();
    var date = $("#date").val();
    var notes = $("#notes").val();
    var travelLog = new Place(location, landmark, date, notes);
    $("#result").append("<li>" + travelLog.location + "<br>" + travelLog.landmark + "<br>" + travelLog.date + "<br>" + travelLog.notes + "</li>")

  });
});

function Place(location, landmark, date, notes) {
  this.location = location;
  this.landmark = landmark;
  this.date = date;
  this.notes = notes;
};
