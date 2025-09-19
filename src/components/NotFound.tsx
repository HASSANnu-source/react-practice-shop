import { Footer } from "./Footer"
import { Header } from "./Header"

export const NotFound = () => {
  return (
    <div className="flex flex-col h-screen mx-6">
      <Header />
      <div className="flex items-center justify-center mt-7 flex-grow">
        Page Not Found
      </div>
      <Footer page="home" />
    </div>
  )
}
