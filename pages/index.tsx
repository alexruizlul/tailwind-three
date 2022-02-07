import Head from 'next/head'

export default function Home() {
  return (
    <body className="">
      <section className="w-auto h-screen">
        <nav className="hidden lg:flex w-full h-14 bg-white justify-between p-4">
          <div className="w-auto h-auto">
            <p className="font-black text-principal text-lg ">Platzi Travel</p>
          </div>
          <div className=" flex flex-row space-x-10">
            <a href="#home" className="font-bold text-principal">Inicio</a>
            <a href="#recomendados" className="font-bold text-principal">Recomendados</a>
            <a href="#rentas_destacadas" className="font-bold text-principal">Rentas</a>
            <a href="#faqs" className="font-bold text-principal">FAQS</a>
            <a href="#nosotros" className="font-bold text-principal">Sobre nosotros</a>
          </div>
          <div className="flex space-x-4">
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-current text-principal" fill-rule="evenodd" clip-rule="evenodd"
                d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"
                fill="#3F3F46" /> </svg>
            <button id="toggle">
              <svg width="22" height="22" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z"
                  fill="#CC2D4A" /></svg>
            </button>
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-current text-gray-300" fill-rule="evenodd" clip-rule="evenodd"
                d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
                fill="#3F3F46" /></svg>
          </div>
        </nav>
        <div className="w-full h-3/4" id="home">
          <div
            className=" w-full h-full flex flex-col items-center py-4 space-y-96 lg:space-y-0 lg:items-start lg:justify-start lg:pt-56 absolute">

            <input
              className="lg:hidden p-3 outline-none transition duration-300 rounded-full shadow-lg focus-within:shadow-sm focus:outline-none focus:ring-2  focus:w-11/12 "
              type="search" name="Searchbar" placeholder="San Francisco" id="" />
            <div className=" hidden h-auto lg:w-2/5 lg:flex pb-6 ">
              <p className=" lg:flex text-4xl ml-16 font-bold">Encuentra más ubicaciones como esta</p>
            </div>
            <button
              className="bg-white w-48 h-auto p-3 lg:ml-16 rounded-full shadow-md font-semibold text-principal transition duration-500 ease-in-out hover:bg-principal hover:text-white transform hover:-translate-y-1 hover:scale-110 transition-all"
              id='explore-more'>
              Explorar
            </button>
          </div>
          <div className="w-full h-full bg-cover lg:bg-cover lg:bg-sanFranciscoDesktop lg:bg-center">
            <img className="w-full h-full lg:hidden" src="sanFrancisco.jpg" alt="" />
          </div>
        </div>
        <div className="w-full h-auto lg:px-2">

          <div className="p-6" id="recomendados">
            <p className="text-3xl font-semibold text-principal ">Recomendados</p>
            <div
              className="w-auto h-80 lg:h-80 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-4 lg:space-x-6 scrollbar">
              <div className="Card">
                <div id="image-container" className="w-full h-3/5 rounded-t-lg bg-yosemite bg-cover"></div>
                <div className="bg-secondary h-2/5 rounded-b-lg">
                  <p className="text-xl px-4 py-2 font-semibold text-white">Yosemite</p>
                  <p className="text-sm px-4 overflow-ellipsis pr-2 text-white">Un respiro del mundo</p>
                </div>
              </div>
              <div className="Card">
                <div id="image-container" className="w-full h-3/5 rounded-t-lg bg-new_york bg-cover"></div>
                <div className=" h-2/5 rounded-b-lg">
                  <p className="text-xl px-4 py-2 font-semibold text-tertiary">New York</p>
                  <p className="text-sm px-4 overflow-ellipsis pr-2 text-tertiary">Gran ciudad, explora
                    ahora!</p>
                </div>
              </div>
              <div className="Card">
                <div id="image-container" className="w-full h-3/5 rounded-t-lg bg-norway bg-cover"></div>
                <div className=" bg-secondary h-2/5 rounded-b-lg">
                  <p className="text-xl px-4 py-2 font-semibold text-white">Norway</p>
                  <p className="text-sm px-4 overflow-ellipsis pr-2 text-white">Conoce nuevos lugares</p>
                </div>
              </div>
              <div className="Card">
                <div id="image-container" className="w-full h-3/5 rounded-t-lg bg-seattle bg-cover"></div>
                <div className="h-2/5 rounded-b-lg">
                  <p className="text-xl px-4 py-2 font-semibold text-tertiary">Seattle</p>
                  <p className="text-sm px-4 overflow-ellipsis pr-2 text-tertiary">Una ciudad para
                    disfrutar al máximo</p>
                </div>
              </div>
              <div className="Card">
                <div id="image-container" className="w-full h-3/5 rounded-t-lg bg-switzerland bg-cover"></div>
                <div className="bg-secondary h-2/5 rounded-b-lg">
                  <p className="text-xl px-4 py-2 font-semibold text-white">Switzerland</p>
                  <p className="text-sm px-4 overflow-ellipsis pr-2 text-white">El mejor chocolate caliente que probarás
                  </p>
                </div>
              </div>
              <div className="Card">
                <div id="image-container" className="w-full h-3/5 rounded-t-lg bg-sydney bg-center bg-cover"></div>
                <div className=" h-2/5 rounded-b-lg">
                  <p className="text-xl px-4 py-2 font-semibold text-tertiary">Sydney</p>
                  <p className="text-sm px-4 overflow-ellipsis pr-2 text-tertiary">Conoce la famosísima
                    Opera</p>
                </div>
              </div>
              <div className="Card">
                <div id="image-container" className="w-full h-3/5 rounded-t-lg bg-europe bg-center bg-cover"></div>
                <div className="bg-secondary h-2/5 rounded-b-lg">
                  <p className="text-xl px-4 py-2 font-semibold text-white">Edinburgh</p>
                  <p className="text-sm px-4 overflow-ellipsis pr-2 text-white">Castillos y tiempos medievales</p>
                </div>
              </div>
              <div className="Card">
                <div id="image-container" className="w-full h-3/5 rounded-t-lg bg-europe bg-center bg-cover"></div>
                <div className="bg-secondary h-2/5 rounded-b-lg">
                  <p className="text-xl px-4 py-2 font-semibold text-white">Edinburgh</p>
                  <p className="text-sm px-4 overflow-ellipsis pr-2 text-white">Castillos y tiempos
                    medievales</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 h-full lg:px-14" id="rentas_destacadas">
            <p className="text-3xl font-semibold text-principal pb-6">Estancias destacadas</p>
            <div className="w-full h-full flex flex-col items-center justify-center lg:flex-col">
              <div className="w-full h-96 bg-chicago bg-cover rounded-2xl mb-8 lg:flex-none lg:bg-center ">
                <p className="CardTitle lg:text-black">Chicago</p>
                <p className="text-md pl-8 text-white mr-24 lg:text-black">2 habitaciones, baño y cocina</p>
              </div>
              <div className="lg:flex lg:w-full lg:h-1/3 lg:flex-none">
                <div className="w-full h-96 bg-LA bg-cover rounded-2xl mb-8 lg:w-3/5 lg:h-auto">
                  <p className="CardTitle">Los Angeles</p>
                  <p className="text-md pl-8 text-white mr-24">4 habitaciones, 3 baños, cocina y piscina privada</p>
                </div>
                <div className="lg:flex lg:flex-col lg:w-full lg:pl-8">
                  <div className="w-full h-96 bg-miami bg-cover rounded-2xl mb-8">
                    <p className="CardTitle">Miami</p>
                    <p className="text-md pl-8 text-white mr-24 ">3 habitaciones, 2 baños, cocina y excelente vista al
                      mar</p>
                  </div>
                  <div className="w-full h-96 bg-bali bg-cover rounded-2xl mb-8">
                    <p className="CardTitle ">Bali</p>
                    <p className="text-md pl-8 text-white mr-24 ">2 habitaciones, baño, cocina y piscina privada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:px-8" id="faqs">
            <div className="w-full h-full px-6 flex flex-col space-y-4">
              <p className="text-3xl font-semibold text-principal lg:text-5xl lg:pb-4">FAQS</p>
              <div>
                <p className="text-xl font-medium text-principal">Política de Cancelación</p>
                <p className="text-md pt-2">Para estancias menores a una semana es importante avisar con
                  3 días de
                  anticipación, de caso contario será sancionado.</p>
              </div>
              <div>
                <p className="text-xl font-medium text-principal">Métodos de pago</p>
                <p className="text-md pt-2">Aceptamos distintos métodos de pago: VISA, MasterCard,
                  American Express,
                  Paypal y Binance </p>
              </div>
              <div>
                <p className="text-xl font-medium text-principal">Mascotas</p>
                <p className="text-md pt-2">El tema de las mascotas dependerá directamente del
                  anfitrión.</p>
              </div>
              <div>
                <p className="text-xl font-medium text-principal">Información de Seguridad</p>
                <p className="text-md pt-2">Todas nuestras estancias cuentan con seguro en caso de
                  accidentes</p>
              </div>
              <div>
                <p className="text-xl font-medium text-principal">Estancias Largas</p>
                <p className="text-md pt-2">Contamos con estancias de hasta 3 meses, en este caso es
                  requerido un anticipo
                  con un monto del 50% del valor de la renta</p>
              </div>
            </div>
          </div>
          <footer className="w-full h-auto bg-gray-50 p-6 mt-8  space-y-2 lg:px-14" id="nosotros">
            <p className="text-lg">Acerca de</p>
            <p className="text-sm text-gray-300">Inversionistas</p>
            <p className="text-sm text-gray-300">Empleos</p>
            <p className="text-sm text-gray-300">Política de Privacidad</p>
            <p className="text-sm text-gray-300">Terminos y Condiciones</p>
            <p className="text-sm text-gray-300">Platzi Travel,Inc</p>
            <p className="text-sm text-gray-300">Síguenos</p>
          </footer>
        </div>
      </section>
      <div
        className="w-full h-16 bg-white fixed left-0 bottom-0 shadow-md flex space-x-8 items-center justify-center lg:hidden">
        <a href="#home">
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-gray-200"
              d="M10.707 2.29303C10.5195 2.10556 10.2652 2.00024 10 2.00024C9.73488 2.00024 9.48057 2.10556 9.29304 2.29303L2.29304 9.29303C2.11088 9.48163 2.01009 9.73423 2.01237 9.99643C2.01465 10.2586 2.11981 10.5094 2.30522 10.6948C2.49063 10.8803 2.74144 10.9854 3.00364 10.9877C3.26584 10.99 3.51844 10.8892 3.70704 10.707L4.00004 10.414V17C4.00004 17.2652 4.1054 17.5196 4.29293 17.7071C4.48047 17.8947 4.73482 18 5.00004 18H7.00004C7.26526 18 7.51961 17.8947 7.70715 17.7071C7.89468 17.5196 8.00004 17.2652 8.00004 17V15C8.00004 14.7348 8.1054 14.4805 8.29293 14.2929C8.48047 14.1054 8.73482 14 9.00004 14H11C11.2653 14 11.5196 14.1054 11.7071 14.2929C11.8947 14.4805 12 14.7348 12 15V17C12 17.2652 12.1054 17.5196 12.2929 17.7071C12.4805 17.8947 12.7348 18 13 18H15C15.2653 18 15.5196 17.8947 15.7071 17.7071C15.8947 17.5196 16 17.2652 16 17V10.414L16.293 10.707C16.4816 10.8892 16.7342 10.99 16.9964 10.9877C17.2586 10.9854 17.5095 10.8803 17.6949 10.6948C17.8803 10.5094 17.9854 10.2586 17.9877 9.99643C17.99 9.73423 17.8892 9.48163 17.707 9.29303L10.707 2.29303Z"
              fill="#3F3F46" /></svg>
        </a>
        <a href="#rentas_destacadas">
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-principal" fill-rule="evenodd" clip-rule="evenodd"
              d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"
              fill="#3F3F46" /></svg>
        </a>
        <a href="#recomendados">
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-gray-200" fill-rule="evenodd" clip-rule="evenodd"
              d="M3.172 5.17202C3.92211 4.42214 4.93934 4.00087 6 4.00087C7.06066 4.00087 8.07789 4.42214 8.828 5.17202L10 6.34302L11.172 5.17202C11.541 4.78998 11.9824 4.48525 12.4704 4.27561C12.9584 4.06598 13.4833 3.95563 14.0144 3.95102C14.5455 3.9464 15.0722 4.04761 15.5638 4.24873C16.0554 4.44986 16.502 4.74687 16.8776 5.12244C17.2532 5.49801 17.5502 5.94462 17.7513 6.4362C17.9524 6.92779 18.0536 7.45451 18.049 7.98562C18.0444 8.51674 17.934 9.04162 17.7244 9.52964C17.5148 10.0177 17.21 10.459 16.828 10.828L10 17.657L3.172 10.828C2.42212 10.0779 2.00085 9.06068 2.00085 8.00002C2.00085 6.93936 2.42212 5.92213 3.172 5.17202Z"
              fill="#3F3F46" /></svg>
        </a>
        <button id="toggle-sm">
          <svg width="30" height="30" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-gray-200"
              d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z"
              fill="#CC2D4A" /></svg>
        </button>
        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current text-gray-200" fill-rule="evenodd" clip-rule="evenodd"
            d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
            fill="#3F3F46" /></svg>
      </div>
    </body>

    // <div classNameName="flex min-h-screen flex-col items-center justify-center py-2">
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main classNameName="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
    //     <h1 classNameName="text-6xl font-bold">
    //       Welcome to{' '}
    //       <a classNameName="text-blue-600" href="https://nextjs.org">
    //         Next.js!
    //       </a>
    //     </h1>

    //     <p classNameName="mt-3 text-2xl">
    //       Get started by editing{' '}
    //       <code classNameName="rounded-md bg-gray-100 p-3 font-mono text-lg">
    //         pages/index.tsx
    //       </code>
    //     </p>

    //     <div classNameName="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
    //       <a
    //         href="https://nextjs.org/docs"
    //         classNameName="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    //       >
    //         <h3 classNameName="text-2xl font-bold">Documentation &rarr;</h3>
    //         <p classNameName="mt-4 text-xl">
    //           Find in-depth information about Next.js features and API.
    //         </p>
    //       </a>

    //       <a
    //         href="https://nextjs.org/learn"
    //         classNameName="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    //       >
    //         <h3 classNameName="text-2xl font-bold">Learn &rarr;</h3>
    //         <p classNameName="mt-4 text-xl">
    //           Learn about Next.js in an interactive course with quizzes!
    //         </p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         classNameName="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    //       >
    //         <h3 classNameName="text-2xl font-bold">Examples &rarr;</h3>
    //         <p classNameName="mt-4 text-xl">
    //           Discover and deploy boilerplate example Next.js projects.
    //         </p>
    //       </a>

    //       <a
    //         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         classNameName="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    //       >
    //         <h3 classNameName="text-2xl font-bold">Deploy &rarr;</h3>
    //         <p classNameName="mt-4 text-xl">
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer classNameName="flex h-24 w-full items-center justify-center border-t">
    //     <a
    //       classNameName="flex items-center justify-center"
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" classNameName="ml-2 h-4" />
    //     </a>
    //   </footer>
    // </div>
  )
}
