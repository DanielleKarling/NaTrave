import { Navigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

export function Home() {
  const [auth] = useLocalStorage("auth", {});

  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />;
  }
  return (
    <>
      <header className="md:p-8 p-2 border-b-2 border-red-500 bg-red-700">
        <div className="container max-w-xl flex justify-center">
          <img src="/imgs/logo-red.svg" className="w-32 md:w-40" />
        </div>
      </header>

      <div className="h-screen bg-red-700 text-white flex flex-col items-center space-y-6 overflow-auto">
        <div className="container max-w-5xl flex-1 p-4 flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <div className="md:flex-1 flex justify-center">
            <img
              src="/imgs/photo5.png"
              className="w-full max-w-xs md:max-w-md md:mr-10"
            />
          </div>

          <div className="md:flex-1 flex flex-col space-y-6">
            <h1 className="text-3xl text-center md: text-left font-bold p-6">
              Dê o seu palpite na Copa do Mundo de 2022!
            </h1>

            <a
              href="/signup"
              className="font-bold text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl"
            >
              Criar minha conta
            </a>

            <a
              href="/login"
              className="font-bold text-center text-white border border-white text-xl px-8 py-4 rounded-xl"
            >
              Fazer Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
