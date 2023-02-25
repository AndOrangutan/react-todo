import Button from './Button'

// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//     </header>
//   )
// }

// Can also destructure props to directly acces title
const Header = ({ title, onAdd, onShowAddTask}) => {
  const onClick = () => {
    console.log('Clicked special button')
  }
  return (
    <header className='header'> 
      <h1>{title}</h1>
      <Button color={ !onShowAddTask ?  'green' : 'red' } text={ !onShowAddTask ? 'Add' : 'close'} onClick={onAdd} />
      
    </header>
  )
}



export default Header
