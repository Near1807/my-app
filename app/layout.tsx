import Link from 'next/link'
import NavBar from './components/navbar'
import './globals.css'


export default function RootLayout(props) {
  return (
    <html>
      <body>
          <NavBar/>
          {props.children}
      </body>
    </html>
  )
}