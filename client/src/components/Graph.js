import Plot from "react-plotly.js";

const template = {
  layout: {
    colorway: [
      "#636efa",
      "#EF553B",
      "#00cc96",
      "#ab63fa",
      "#FFA15A",
      "#19d3f3",
      "#FF6692",
      "#B6E880",
      "#FF97FF",
      "#FECB52",
    ],
    font: {
      color: "transparent",
    },
    hovermode: "closest",
    hoverlabel: {
      align: "left",
    },
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    coloraxis: {
      colorbar: {
        outlinewidth: 0,
        ticks: "",
      },
    },
    xaxis: {
      gridcolor: "transparent",
      linecolor: "transparent",
      ticks: "",
      title: {
        standoff: 15,
      },
      zerolinecolor: "transparent",
      automargin: true,
      zerolinewidth: 0,
    },
    yaxis: {
      gridcolor: "transparent",
      linecolor: "transparent",
      ticks: "",
      title: {
        standoff: 15,
      },
      zerolinecolor: "transparent",
      automargin: true,
      zerolinewidth: 0,
    },
    shapedefaults: {
      line: {
        color: "#000",
      },
    },
    annotationdefaults: {
      arrowcolor: "#000",
      arrowhead: 0,
      arrowwidth: 1,
    },
    geo: {
      bgcolor: "white",
      landcolor: "#E5ECF6",
      subunitcolor: "white",
      showland: true,
      showlakes: true,
      lakecolor: "white",
    },
    title: {
      x: 0.05,
    },
    mapbox: {
      style: "light",
    },
  },
};

const emotionToColor = {
  angry: "rgb(247, 149, 157)",
  calm: "rgb(250, 235, 167)",
  disgust: "rgb(179, 228, 199)",
  fear: "rgb(105, 83, 120)",
  happy: "rgb(250, 235, 167)",
  neutral: "#e9eaec",
  sad: "#dbe1e1",
  surprise: "#fcdca9",
};

const Graph = ({ x, y, title, emotions }) => {
  return (
    <div style={{ position: "relative" }}>
      {emotions.map((x, i) => (
        <div
          style={{
            position: "absolute",
            width: `calc(${100 / emotions.length}%)`,
            left: `${i * (100 / emotions.length)}%`,
            bottom: "-10px",
            borderTopLeftRadius: i === 0 ? "10px" : 0,
            borderBottomLeftRadius: i === 0 ? "10px" : 0,
            borderTopRightRadius: i === emotions.length - 1 ? "10px" : 0,
            borderBottomRightRadius: i === emotions.length - 1 ? "10px" : 0,
            height: "40px",
            backgroundColor: emotionToColor[x],
            zIndex: 999999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {
            <span style={{ color: "#000" }}>{`${x[0].toUpperCase()}${x.slice(
              1
            )}`}</span>
          }
        </div>
      ))}
      <Plot
        data={[
          {
            x,
            y,
            type: "scatter",
            mode: "lines",
          },
        ]}
        layout={{
          title,
          height: 300,
          autosize: true,
          margin: { l: 10, r: 10, b: 30, t: 40 },
          template,
        }}
        useResizeHandler
        style={{ width: "100%" }}
        //   onInitialized={(figure) => this.setState(figure)}
        //   onUpdate={(figure) => this.setState(figure)}
      />
    </div>
  );
};

export default Graph;
