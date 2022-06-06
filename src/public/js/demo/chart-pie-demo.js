

// Set new default font family and font color to mimic Bootstrap's default styling



// Pie Chart Example
var ctx = document.getElementById("myPieChart");

var myPieChart = new Chart(ctx, {

  type: 'doughnut',
  data: {
    labels: ["IMO's", "Godfather's", "Pizza hut", "Dominnos"],
    datasets: [{
      data: [23386, 138477, 134539,102728],
      backgroundColor: ['#11760f', '#FF3E00', '#FFC500','#2e59d9'],
      hoverBackgroundColor: ['#11760f', '#FF3E00', '#FFC500','#2e59d9'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
