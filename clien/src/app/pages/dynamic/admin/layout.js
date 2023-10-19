import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.css";
import SideNav from "@/components/nav/sideNav/sideNav";
import "./admin.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Edu Web',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="container-fluid container-fluid_layout">
          <div className="row row_layout">
              <div className="col-2 col_layout">
                  <SideNav/>
              </div>
              <div className="col-10 col_layout bg-dark text-white">
                  {children}
              </div>
          </div>
      </div>
      </body>
    </html>
  )
}