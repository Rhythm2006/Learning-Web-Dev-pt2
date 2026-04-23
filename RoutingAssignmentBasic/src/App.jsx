import {BrowserRouter,Link,Outlet,Route,Routes,useNavigate,useParams} from 'react-router-dom'

const courses = [
  {id: "1",title: "React Basics", description: "Learn about React  from basics"},
  {id: "2",title: "Python", description: "Learn about Python  from basics"},
  {id: "3",title: "Javascript", description: "Learn about Javascript  from basics"},
  {id: "4",title: "Django", description: "Learn about Django  from basics"},
  {id: "5",title: "C", description: "Learn about C  from basics"},


]



function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Homepage/>}/>
      <Route path="courses" element={<Courses/>}/>
      <Route path="courses/:id" element={<CourseDetails/>}/>
      <Route path="*" element={<ErrorPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

function Layout(){
  return <>
  <nav>
    <Link to={"/"}>HomePage</Link> |  <Link to={"/courses"}>Courses</Link>
  </nav>
  <hr/>
  <Outlet/>
  </>
}

function ErrorPage(){
  return (<div>
  Sorry! Page Not Found.
  </div>)
}

function Homepage(){
return (<div>
Welcome to biggest course Edtech Company 
</div>)
}

function Courses(){
const navigate = useNavigate()
function redirectUser(){
    navigate(-1) //act as a browser back button.
}
return (<div>
  {courses.map(c=>(
    <div key={c.id}>
      <Link to={`/courses/${c.id}`}>
        {c.title}
      </Link>
    </div>
    
  ))}
  <button onClick={redirectUser}>Go Back</button>
  </div>)
}

function CourseDetails(){
const navigate = useNavigate()
function redirectUser(){
    navigate(-1) //act as a browser back button.
}
  
  const {id} = useParams();

  const course = courses.find(c=> c.id === id);

  if(!course){
    return( 
    <div>
    Course Not Found
    </div>)
  }

  return (
  <div>
    <h2>{course.title}</h2>
    <p>{course.description}</p>
    <button onClick={redirectUser}>Go back</button>
  </div>)
  
}

export default App