import Navbar from "@/components/layouts/Navbar";
import SidebarLeft from "@/components/layouts/sidebar-left";
import SidebarRight from "@/components/layouts/SidebarRight";

export default function Home() {
  return (
    <>
      <Navbar />
      <SidebarLeft />
      <SidebarRight />

      {/* 
        El área de contenido principal. 
        El padding superior (pt-28) es para el Navbar (70px) y un poco de espacio.
        Los paddings laterales (pl-[344px] pr-[344px]) son para las barras laterales fijas (320px) y un poco de espacio.
        Estos paddings deberían ser dinámicos si las barras laterales pueden colapsarse.
      */}
      <div className="pt-[110px] transition-all duration-300 flex justify-center">
        {/*
          Este es el contenedor principal que tiene el ancho máximo de 1300px y está centrado.
          Usamos flexbox para las tres columnas como sugeriste, es una excelente alternativa a Grid.
        */}
        <main className="w-full max-w-[1300px] flex flex-row">
          {/* Columna Izquierda */}
          <aside className="w-[325px] shrink-0 hidden lg:block px-[15px]">
            <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
              <h2 className="font-bold text-lg text-gray-800">Columna Izquierda</h2>
              <p className="text-gray-600">Contenido para la columna izquierda.</p>
            </div>
          </aside>

          {/* Columna Central (flex-1 para ocupar el espacio restante) */}
          <section className="flex-1 min-w-0 px-[15px]">
            <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
              <h2 className="font-bold text-lg text-gray-800">Área Central</h2>
              <p className="text-gray-600">El contenido principal va aquí.</p>
            </div>
          </section>

          {/* Columna Derecha */}
          <aside className="w-[325px] shrink-0 hidden lg:block px-[15px]">
            <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
              <h2 className="font-bold text-lg text-gray-800">Columna Derecha</h2>
              <p className="text-gray-600">Contenido para la columna derecha.</p>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}
