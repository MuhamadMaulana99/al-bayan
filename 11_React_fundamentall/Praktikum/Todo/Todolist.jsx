import styled from '@emotion/styled'

const WrapperList = styled.li`
.coret{
  background: blue;
}
`

const Todolist = () => {


  const data = [
    {
        id: 1,
        title: "Muhamad Maulana",
        completed: true,
    },
    {
        id: 2,
        title: "Sonia Sugandi",
        completed: false,
    },
    {
        id: 3,
        title: "Fitrotunissa",
        completed: true,
    },
    {
        id: 4,
        title: "Fani",
        completed: false,
    }
]

  
  return (
    <div className="w-full ">
    <header
    className='w-full bg-slate-300'
    >To dolist</header>
    <div className="sidebar" >
        <ul>
          {data.map((datax) =>(
            <li
            style={{textDecoration : datax.completed ?  'line-through' : "none"}}
            className='border-4 border-indigo-600 border-width: 2px'
            >
              {datax.title}
            </li>

          ))}
        </ul>
    </div>
</div>
  )
}

export default Todolist
