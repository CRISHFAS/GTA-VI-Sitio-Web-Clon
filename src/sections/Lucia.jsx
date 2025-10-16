import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Lucia = () => {
  useGSAP(() => {
    gsap.set('.lucia-life', { marginTop: '-80vh'});

    gsap.timeline({
      scrollTrigger: {
        trigger: '.lucia-life',
        start: 'top 80%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.second-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.lucia-life .img-box', {
      scrollTrigger: {
        trigger: '.lucia-life',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -200, duration: 1, ease: 'power1.inOut'
    }, '<')
  });

  return (
    <section className="lucia-life">
      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
        <div className="lucia-1">
          <img src="/images/lucia-1.webp" />
        </div>
        <div className="lucia-3">
          <img src="/images/lucia-3.webp" />
        </div>
      </div>

      <div className="lg:w-1/2 lucia-life-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>Lucia Caminos</h1>
          <h2>El padre de Lucía le enseñó a luchar tan pronto como pudo caminar.</h2>
          <p>Desde entonces, la vida la ha estado castigando duramente. Luchar por su familia la llevó a la Penitenciaría Leonida. La suerte la sacó. Lucía aprendió la lección - de ahora en adelante, solo hay que tomar decisiones inteligentes.</p>
        </div>

        <div className="lucia-2">
          <img src="/images/lucia-2.webp" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10">Más que nada, Lucía desea la buena vida que su madre ha soñado desde sus días en Liberty City, pero en lugar de fantasías a medias, Lucía está preparada para tomar el asunto en sus propias manos.</p>
      </div>
    </section>
  )
}

export default Lucia