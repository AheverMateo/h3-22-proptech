import { IoIosArrowForward } from "react-icons/io";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
} from "@tremor/react";

const Investment = () => {
  const data = [
    {
      cuota: 1,
      capitalInicial: "$10,000.00",
      amortizacion: "$0.64",
      interes: "$358.33",
      pagoTotal: "$358.97",
    },
    {
      cuota: 2,
      capitalInicial: "$9,999.36",
      amortizacion: "$0.66",
      interes: "$358.31",
      pagoTotal: "$358.97",
    },
    {
      cuota: 3,
      capitalInicial: "$9,998.71",
      amortizacion: "$0.68",
      interes: "$358.29",
      pagoTotal: "$358.97",
    },
    {
      cuota: 4,
      capitalInicial: "$9,998.03",
      amortizacion: "$0.71",
      interes: "$358.26",
      pagoTotal: "$358.97",
    },
  ];

  return (
    <div className="flex justify-between p-8">
      <div className="flex flex-col justify-evenly ml-5">
        <h3 className="font-inter font-semibold text-white text-3xl">
          Simulador de inversiones
        </h3>
        <form className="flex flex-col gap-3 w-64">
          <label className="text-white font-inter text-sm">Monto*</label>
          <input type="text" className="bg-white px-3 py-2 rounded-md" />
          <label className="text-white font-inter text-sm">Cuotas*</label>
          <input type="text" className="bg-white px-3 py-2 rounded-md" />
          <label className="text-white font-inter text-sm">TNA(%)*</label>
          <input type="text" className="bg-white px-3 py-2 rounded-md" />
          <button className=" flex items-center justify-between w-52 rounded-md py-2 px-4 bg-[#D9FB41]">
            Calcular <IoIosArrowForward />
          </button>
          <p className=" text-[#EEEEEE] font-inter w-96 pt-6 text-[10px]">
            Descubre cómo nuestro sistema estima los rendimientos
          </p>
        </form>
      </div>

      <div className="w-[700px]">
        <p className="text-end text-white p-2">Ver completo</p>
          <Table className="bg-white rounded-md shadow">
            <TableHead className="bg-[#EDEDED]">
              <TableRow className="border border-gray-800">
                <TableHeaderCell className=" font-inter border border-gray-500">Cuota Nº</TableHeaderCell>
                <TableHeaderCell className=" font-inter border border-gray-500">Capital Inicial</TableHeaderCell>
                <TableHeaderCell className=" font-inter border border-gray-500">Amortización</TableHeaderCell>
                <TableHeaderCell className=" font-inter border border-gray-500">Interés</TableHeaderCell>
                <TableHeaderCell className=" font-inter border border-gray-500">Pago Total</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="border border-[#5B5B5B] font-inter">{row.cuota}</TableCell>
                  <TableCell className="border border-[#5B5B5B] font-inter">{row.capitalInicial}</TableCell>
                  <TableCell className="border border-[#5B5B5B] font-inter">{row.amortizacion}</TableCell>
                  <TableCell className="border border-[#5B5B5B] font-inter">{row.interes}</TableCell>
                  <TableCell className="border border-[#5B5B5B] font-inter">{row.pagoTotal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-end pt-5 gap-5">
          <button className="bg-[#D9FB41] px-7 py-2 rounded-md font-inter">Quiero mi simulacion</button>
          <button className="border border-white px-9 py-2  rounded-md font-inter text-white">Imprimir PDF</button>
          </div>
      </div>
    </div>
  );
};

export default Investment;
