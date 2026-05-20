/* REAL TIME CLOCK */

function updateClock(){

  const now = new Date();

  document.getElementById("currentTime")
  .innerText = now.toLocaleString();
}

setInterval(updateClock,1000);

updateClock();

/* BAR CHART*/

const barCtx =
document.getElementById("barChart");

new Chart(barCtx,{

  type:"bar",

  data:{

    labels:[
      "Math",
      "Science",
      "English",
      "History",
      "Programming"
    ],

    datasets:[{

      label:"Average Score",

      data:[
        92,
        88,
        90,
        84,
        97
      ],

      backgroundColor:[
        "#3b82f6",
        "#60a5fa",
        "#2563eb",
        "#1d4ed8",
        "#93c5fd"
      ],

      borderRadius:8
    }]
  },

  options:{

    responsive:true,

    plugins:{
      legend:{
        labels:{
          color:"white"
        }
      }
    },

    scales:{

      x:{
        ticks:{
          color:"white"
        },

        grid:{
          color:"rgba(255,255,255,0.05)"
        }
      },

      y:{
        ticks:{
          color:"white"
        },

        grid:{
          color:"rgba(255,255,255,0.05)"
        }
      }
    }
  }
});

/*  LINE CHART */

const lineCtx =
document.getElementById("lineChart");

new Chart(lineCtx,{

  type:"line",

  data:{

    labels:[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun"
    ],

    datasets:[{

      label:"Attendance Rate",

      data:[
        82,
        84,
        87,
        89,
        91,
        94
      ],

      borderColor:"#60a5fa",

      backgroundColor:"rgba(96,165,250,0.2)",

      fill:true,

      tension:0.4
    }]
  },

  options:{

    responsive:true,

    plugins:{
      legend:{
        labels:{
          color:"white"
        }
      }
    },

    scales:{

      x:{
        ticks:{
          color:"white"
        },

        grid:{
          color:"rgba(255,255,255,0.05)"
        }
      },

      y:{
        ticks:{
          color:"white"
        },

        grid:{
          color:"rgba(255,255,255,0.05)"
        }
      }
    }
  }
});

/* PIE CHART*/

const pieCtx =
document.getElementById("pieChart");

new Chart(pieCtx,{

  type:"doughnut",

  data:{

    labels:[
      "Excellent",
      "Good",
      "Average",
      "Needs Support"
    ],

    datasets:[{

      data:[
        35,
        40,
        18,
        7
      ],

      backgroundColor:[
        "#22c55e",
        "#3b82f6",
        "#facc15",
        "#ef4444"
      ],

      borderWidth:0
    }]
  },

  options:{

    responsive:true,

    plugins:{
      legend:{
        labels:{
          color:"white"
        }
      }
    }
  }
});

/* AI ANALYTICS*/

console.log(
  "AI Analytics System Initialized"
);