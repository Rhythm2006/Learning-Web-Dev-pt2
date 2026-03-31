import './index.css'
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'
import { routes } from "./routes/routes";
import SectionComponent from "./components/sectionComponent";
import liveImage from "./assets/liveimage.webp";
import classroomImage from "./assets/classroomallen.webp";
import selfStudyImage from "./assets/selfstudyallen.png";
import testSeriesImage from "./assets/testseriesallen.png";
import Classroom from "./pages/classroom";
import OnlineCourses from "./pages/onlinecourses";
import TestSeries from "./pages/testseries";
import Results from "./pages/results";
import StudyMaterials from "./pages/studymaterails";
import Scholarships from "./pages/scholarship";
import EStore from "./pages/estore";
import More from "./pages/more";


function App(){
  return (
    <div style={{width: '100%', height: '100vh', backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            {routes.map((route,index)=>(
              <Route key={index} path={route.path} element={route.element}/>
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Header(){
  return (
    <div style={{
      display:'flex',
      justifyContent: 'space-between',
      alignItems: 'center',  
      margin: '20px 50px',
      backgroundColor: '#f8f9fa',
      padding: '10px 0'
    }}>
      <div style={{fontSize: '24px', fontWeight: 'bold', color: '#1976B5'}}>Allen</div>

      <div style={{
        display:'flex',
        alignItems: 'center', 
        gap: '16px'
      }}>
        <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <span>📞</span>
          <span style={{fontSize: '14px'}}>Call us</span>
        </span>

        <div style={{
          border: "2px solid #1976B5",
          borderRadius:"20px",
          padding:"8px 16px",
          cursor:"pointer",
          backgroundColor: '#f0f7ff',
          color: '#1976B5',
          fontWeight: '500'
        }}>
          Login
        </div>
      </div>
    </div>
  )
}

function HeaderPart2(){
  return (
    <div style={{
      display: 'flex',
      justifyContent: "space-around",
      marginLeft:'50px',
      marginRight:'50px',
      marginTop:'20px',
      paddingBottom: '20px',
      borderBottom: '1px solid #e0e0e0',
      gap: '20px',
      flexWrap: 'wrap'
    }}>
      <Link to="classes/classroom" style={{color: '#1976B5', fontWeight: '500', cursor: 'pointer', textDecoration: 'none'}}>Classroom</Link>

      <Link to="classes/onlinecourses" style={{color: '#1976B5', fontWeight: '500', cursor: 'pointer', textDecoration: 'none'}}>Online Courses</Link>

      <Link to="classes/testseries" style={{color: '#1976B5', fontWeight: '500', cursor: 'pointer', textDecoration: 'none'}}>Test Series</Link>
      
      <Link to="classes/results" style={{color: '#1976B5', fontWeight: '500', cursor: 'pointer', textDecoration: 'none'}}>Results</Link>

      <Link to="classes/studymaterials" style={{color: '#1976B5', fontWeight: '500', cursor: 'pointer', textDecoration: 'none'}}>Study Materials</Link>
      
      <Link to="classes/scholarships" style={{color: '#1976B5', fontWeight: '500', cursor: 'pointer', textDecoration: 'none'}}>Scholarships</Link>

      <Link to="classes/estore" style={{color: '#1976B5', fontWeight: '500', cursor: 'pointer', textDecoration: 'none'}}>ALLEN E-Store</Link>

      <Link to="classes/more" style={{color: '#1976B5', fontWeight: '500', cursor: 'pointer', textDecoration: 'none'}}>More</Link>
    </div>
  )
}

function Homepage(){
  return <div style={{padding: '30px', fontSize: '24px', fontWeight: '600'}}>
    World's Best Coaching
  </div>
}
function Layout(){
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh"
    }}>
      
      <div style={{paddingBottom: "20px"}}>
        <Header/>
        <HeaderPart2/>
      </div>

      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px'
      }}>
        <Outlet/>
      </div>

    </div>
  )
}
export default App 
