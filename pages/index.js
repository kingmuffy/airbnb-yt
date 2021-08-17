import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import Tesi from '../components/Tesi'
import Footer from '../components/Footer'

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>muffy airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}

      <Header />

      <Banner />
      <main className="max-w-7xl mx-auto    px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 ">explore nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8 ">live anywhere</h2>
          <div className="flex space-x-3 caret-gray-20 overflow-scroll  scrollbar-hide p-3 ml-3">
            {cardData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        {/* <section>
          <div className="p-5 mr-4">
            <Tesi />
          </div>
        </section> */}
        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="the Greatest Outdoor"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />

      {/* RIGHT */}

      {/* CENTRE */}

      {/* FOOTER */}
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  const cardData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )
  return {
    props: {
      exploreData,
      cardData,
    },
  }
}
