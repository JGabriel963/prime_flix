import Container from "./Components";
import Header from "./Components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Container>
          <div className="w-[90%] md:w-[400px]">
              <h1 className="text-6xl font-extrabold mb-5">Make remote work</h1>

              <p className="text-grey mb-6">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>

              <button className="bg-black text-white py-2 px-2 rounded-md">Lear more</button>

              <div className="md:w-auto flex items-center justify-between mt-10 mx-auto">
                <img className="w-[20%] md:w-[90px]" src="../images/client-databiz.svg" alt="" />
                <img className="w-[20%] md:w-[90px]" src="../images/client-audiophile.svg" alt="" />
                <img className="w-[20%] md:w-[90px]" src="../images/client-meet.svg" alt="" />
                <img className="w-[20%] md:w-[90px]" src="../images/client-maker.svg" alt="" />
              </div>
          </div>
          <div className="w-[90%] md:w-[500px] mb-10">
            <img className="w-full h-full" src="../images/image-hero-desktop.png" alt="" />
          </div>
      </Container>
    </div>
  )
}





{/* <img src="../images/image-hero-desktop.png" alt="" /> 
'../images/icon-arrow-down.svg'
'../images/icon-arrow-up.svg'
*/}