import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Jason = () => {
  useGSAP(() => {
    gsap.set('.jason', { marginTop: '-80vh' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.jason',
        start: 'top 90%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.jason .img-box', {
      scrollTrigger: {
        trigger: '.jason',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -300, duration: 1, ease: 'power1.inOut'
    }, '<')
  }) 

  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Jason Duval</h1>
        <h2>Jason quiere una vida fácil, pero las cosas se complican cada vez más.</h2>
        <p>Jason creció rodeado de estafadores y delincuentes. Tras una temporada en el ejército intentando superar su problemática adolescencia, se encontró en los Cayos haciendo lo que mejor sabe hacer: trabajando para narcotraficantes locales. Quizás sea el momento de probar algo nuevo.</p>

        <div className="jason-2">
          <img src="/images/jason-2.webp" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img src="/images/jason-1.webp" />
        </div>
        <div className="jason-3">
          <img src="/images/jason-3.webp" />
        </div>
      </div>
    </section>
  )
}

export default Jason