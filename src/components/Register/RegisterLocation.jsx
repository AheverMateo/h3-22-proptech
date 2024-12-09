import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRegFormContext } from "../../Context/RegFromProvider";
import people2 from "../../assets/img/couple-holding-small-house-medium-shot 1.png";
import ProgresBar from "../ProgresBar/ProgresBar";
import { Link } from "react-router-dom";

const RegisterLocation = () => {
  const [, dispatch] = useRegFormContext();
  const {
    register,
    handleSubmit,
    formState: { IsValid },
  } = useForm();

  useEffect(() => {
    dispatch({ type: "CHANGE_PERCENT", data: 50 });
  }, []);

  const onSubmit = (values) => {
    if (IsValid) {
      dispatch({ type: "SET_ADDRESS_DATA", data: values });
    }
  };

  return (
    <div className="flex justify-between">
      <div className="">
        <img className="h-screen w-[550px] object-cover" src={people2} alt="" />
      </div>

      <div className="flex flex-col items-center justify-evenly w-[450px] mr-44">
        <h1 className="text-2xl font-semibold">Crea tu cuenta para comenzar</h1>
        <div className="mt-3">
          <ProgresBar />
          <p className="text-center font-inter font-bold mt-6">
            Datos personales
          </p>
        </div>
        <form
          className="flex flex-col gap-2 w-[500px] bg-[#F5F5F5] p-5 border-[#D1D1D1] border rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="font-inter text-center">Completa todos los campos</h3>

          <div className="">
            <label className="font-inter">Provincia</label>
            <input
              {...register("provincia", { required: true })}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
          <div className="">
            <label className="font-inter">Localidad</label>
            <input
              {...register("localidad", { required: true })}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
          <div className="">
            <label className="font-inter">Calle</label>
            <input
              {...register("documento", { required: true })}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
          <div className="flex gap-2 justify-center">
            <div className="">
              <label className="font-inter">Numeracion/Altura</label>
              <input
                {...register("numeracion", { required: true })}
                className="w-full rounded-md border py-2 px-3 border-gray-300"
              />
            </div>
            <div className="">
              <label className="font-inter">Codigo Poatal</label>
              <input
                {...register("codigo", { required: true })}
                className="w-full rounded-md border py-2 px-3 border-gray-300"
              />
            </div>
          </div>
        </form>
        <Link to="/document2">
          <button
            type="submit"
            className="bg-[#396AD3] text-white px-4 py-2 rounded w-80"
          >
            Siguiente
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterLocation;
