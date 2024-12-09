import { useRegFormContext } from "../../Context/RegFromProvider";
import { useForm } from "react-hook-form";
import imgPeople from "../../assets/img/medium-shot-blurry-couple-indoors 2.png";
import ProgresBar from "../ProgresBar/ProgresBar";
import { Link } from "react-router-dom";

const RegisterLegal = () => {
    const [dispatch] = useRegFormContext();
    const {
      register,
      handleSubmit,
      formState: { IsValid },
    } = useForm();
  
    const onSubmit = (values) => {
      if (IsValid) {
        dispatch({ type: "SET_COMMON_DATA", data: values });
      }
    };
    return (
      <div className="flex justify-between">
        <div className="">
          <img
            className="h-screen w-[550px] object-cover"
            src={imgPeople}
            alt=""
          />
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
            className="flex flex-col gap-3 w-[500px] bg-[#F5F5F5] p-4 border-[#D1D1D1] border rounded-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="font-inter text-center">Completa todos los campos</h3>
              <div className="flex flex-col gap-1">
                <label className="font-inter">Nombre de la empresa</label>
                <input
                  {...register("nombre", { required: true })}
                  className="w-full rounded-lg border py-2 px-3 border-gray-300"
                />
              </div>
            <div className="flex flex-col gap-1">
              <label className="font-inter">CUIT</label>
              <input
                type="text"
                {...register("documento", { required: true })}
                className="w-full border px-3 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-inter">Pais de residencia</label>
              <input
                {...register("documento", { required: true })}
                className="w-full border px-3 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-inter">Telefono/Celular</label>
              <input
                {...register("documento", { required: true })}
                className="w-full border px-3 py-2 rounded-lg"
              />
            </div>
          </form>
          <Link to="/document1">
            <button
              type="submit"
              className="bg-[#396AD3] text-white px-4 py-2 rounded w-80"
            >
              Siguiente
            </button>
          </Link>
        </div>
      </div>
  )
}

export default RegisterLegal