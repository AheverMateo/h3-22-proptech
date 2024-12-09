import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ReactECharts from "echarts-for-react";

const Financing = () => {
  const chartOptions = {
    title: {
      text: "{title|Total estimado de ganancia} {subtext|16%}", // Combina título y subtítulo
      left: "", // Centra el texto
      textStyle: {
        rich: {
          title: {
            color: "#000", // Color del título
            fontSize: 16, // Tamaño del título
            fontWeight: "bold", // Peso del título
          },
          subtext: {
            color: "#02C009", // Color del subtítulo
            fontSize: 14, // Tamaño del subtítulo
            fontWeight: "bold", // Peso del subtítulo
          },
        },
      },
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Hoy", "12 meses"],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "${value}",
      },
    },
    series: [
      {
        name: "Ganancia",
        type: "line",
        areaStyle: {},
        data: [0, 11000, 11600], // Datos iniciales
        itemStyle: {
          color: "#6269F2", // Color del área
        },
      },
    ],
    grid: {
        top:"15%",
      left: "1%",
      right: "4%",
      bottom: "4%",
      containLabel: true,
    },
  };
  return (
    <div className="flex justify-between p-10">
      <div className="flex flex-col justify-evenly ml-3">
        <h3 className="font-inter font-semibold text-white text-3xl">
          Simulador de inversiones
        </h3>
        <form className="flex flex-col gap-3 w-64">
          <label className="text-white font-inter text-sm">Monto*</label>
          <input type="text" className="bg-white px-3 py-2 rounded-md" />
          <label className="text-white font-inter text-sm">
            Plazo (en meses)*
          </label>
          <input type="text" className="bg-white px-3 py-2 rounded-md" />
          <button className=" flex items-center justify-between w-52 rounded-md py-2 px-4 bg-[#D9FB41]">
            Calcular <IoIosArrowForward />
          </button>
          <p className=" text-[#EEEEEE] font-inter w-96 pt-6 text-[10px]">
            Descubre cómo nuestro sistema estima los rendimientos
          </p>
        </form>
      </div>

      <div className="flex justify-center">
        <div className="bg-white h-80 w-[700px] rounded-md shadow-lg p-4">
          <ReactECharts
            option={chartOptions}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Financing;
