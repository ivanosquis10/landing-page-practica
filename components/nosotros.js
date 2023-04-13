export default function Nosotros() {
  return (
    <section id='nosotros' className='bg-white dark:bg-gray-900'>
      <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
        <div className='font-light text-gray-100 sm:text-lg '>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>
            Sobre ApolloSports
          </h2>
          <p className='mb-4'>
            ApolloSport es un complejo deportivo enfocado en la enseñanza de
            deportes. Ofrecemos una amplia variedad de deportes,{' '}
            <span className='text-red-600 font-bold tracking-wider'>
              desde béisbol a fútbol, tenis, voleibol y atletismo,{' '}
            </span>{' '}
            así como la oportunidad de mejorar sus habilidades y participar en
            torneos. Nuestro enfoque innovador se centra en dar a los miembros
            la experiencia más completa y enriquecedora posible, enfatizando en
            habilidades de liderazgo, trabajo en equipo, y responsabilidad.
          </p>
          <p>
            ¡Ven a <span className='text-red-600 font-bold'>Apollo Sports</span>{' '}
            y únete a nuestra comunidad de atletas apasionados y comprometidos
            en alcanzar sus metas deportivas y personales!
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-8'>
          <img
            width={100}
            height={100}
            className='w-full rounded-lg'
            src='/img/futbol-nosotros.jpg'
            alt='imagen de un campo de futbol'
            loading='lazy'
          />
          <img
            width={100}
            height={100}
            className='mt-4 w-full lg:mt-10 rounded-lg'
            src='/img/beisbol-nosotros.jpg'
            alt='imagen de un campo de beisbol'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  )
}
