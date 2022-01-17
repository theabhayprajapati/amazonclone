import { getProviders, signIn } from 'next-auth/react'
// import Header from '../../components/Header'

const signinpage = ({ providers }) => {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex">tsiasklfalsdfjlk
      
      
      </div>
    </div>
  )
}

export default signinpage

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
