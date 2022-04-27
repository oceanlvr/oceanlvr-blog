import NavBar from './NavBar'
import Footer from './Footer'
import SectionContainer from './SectionContainer'

type Prop = {
  children: JSX.Element
}

const LayoutWrapper = ({ children }: Prop) => {
  return (
    <SectionContainer>
      <div className="h-screen flex flex-col">
        <NavBar />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer >
  )
}

export default LayoutWrapper
