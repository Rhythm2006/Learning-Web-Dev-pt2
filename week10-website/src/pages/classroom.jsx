import SectionComponent from "../components/sectionComponent";
import liveImage from "../assets/liveimage.webp";
import classroomImage from "../assets/classroomallen.webp";
import selfStudyImage from "../assets/selfstudyallen.png";
import testSeriesImage from "../assets/testseriesallen.png";

function Classroom() {
  return (
    <div>
    <SectionComponent image={liveImage} index="Live Classes" />
    <SectionComponent image={classroomImage} index="Classrooms" />
    <SectionComponent image={selfStudyImage} index="Self Study" />
    <SectionComponent image={testSeriesImage} index="Test Series" />
    </div>
  );
}

export default Classroom;