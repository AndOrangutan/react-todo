// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//     </header>
//   )
// }

// Can also destructure props to directly acces title
const Header = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}



export default Header
