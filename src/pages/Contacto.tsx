import { useState, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";

interface Expresiones {
  [key: string]: RegExp;
}

export const Contacto = () => {
  const [campos, setCampos] = useState<{ [key: string]: boolean }>({
    nombre: false,
    email: false,
    asunto: false,
    mensaje: false,
  });

  const handleReset = () => {
    setForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
    setCampos({
      nombre: false,
      email: false,
      asunto: false,
      mensaje: false,
    });
  };

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const expresiones: Expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    mensaje: /^[a-zA-ZÀ-ÿ0-9\s]{1,200}$/,
  };

  const validarCampo = (expresion: RegExp, valor: string, campo: string) => {
    if (expresion.test(valor)) {
      setCampos({ ...campos, [campo]: true });
    } else {
      setCampos({ ...campos, [campo]: false });
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name in expresiones) {
      validarCampo(expresiones[name], value, name);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevenir el comportamiento de envío de formulario predeterminado
    if (Object.values(campos).every((campo) => campo)) {
      const mailtoLink = `mailto:fernandocsp19@gmail.com?subject=${encodeURIComponent(
        `Nombre:${form.nombre},E-mail:${form.email},Asunto:${form.asunto}`
      )}&body=${encodeURIComponent(form.mensaje)}`;
      window.location.href = mailtoLink;
      handleReset();
      toast.success("Éxito, se abrio tu cliente de correo para el envio", {
        position: "top-right",
      });
    } else {
      toast.error("Por favor, complete todos los campos correctamente", {
        position: "top-right",
      });
    }
  };

  return (
    <Layout>
      <div className="w-full relative  bg-preto-05 overflow-hidden  ">
        <div className=" items-center justify-center mt-20 mb-10 flex  md:flex-row mq450:flex-col mq750:flex-col bg-blue-100 p-8 box-border gap-8">
          {/* Columna de la izquierda */}
          <div className="">
            <img
              className=" w-[70%] mq750:w-[50%] mq450:w-[30%] h-auto"
              src="/assets/images/mailbox.png"
              alt="Teléfono"
            />
          </div>
          {/* Columna de la derecha */}
          <div className="">
            <form
              className="bg-white p-8 rounded-md"
              onSubmit={handleSubmit}
              action={`mailto:fernandocsp19@gmail.com`}
              method="GET"
            >
              <h3 className="text-3xl font-bold font-raleway text-black mb-4">
                Contacto
              </h3>
              <p className="text-base font-medium text-black mb-4">
                ¿Quieres contactarme? Complete el siguiente formulario y me
                pondré en contacto con usted lo antes posible.
              </p>
              <div className="mb-4">
                <input
                  className={`w-full border-b-2 ${
                    campos.nombre ? "border-gray-300" : "border-black"
                  } py-2 px-3 focus:outline-none focus:border-blue-500`}
                  placeholder="Nombre completo"
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className={`w-full border-b-2 ${
                    campos.email ? "border-gray-300" : "border-black"
                  } py-2 px-3 focus:outline-none focus:border-blue-500`}
                  placeholder="Correo electrónico"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className={`w-full border-b-2 ${
                    campos.asunto ? "border-gray-300" : "border-black"
                  } py-2 px-3 focus:outline-none focus:border-blue-500`}
                  placeholder="Asunto"
                  type="text"
                  name="asunto"
                  value={form.asunto}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <textarea
                  className={`w-full border-b-2 ${
                    campos.mensaje ? "border-gray-300" : "border-black"
                  } py-2 px-3 focus:outline-none focus:border-blue-500`}
                  rows={4}
                  placeholder="Mensaje"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                type="submit"
              >
                Enviar mensaje
              </button>
              <ToastContainer className={`mt-10`} />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
