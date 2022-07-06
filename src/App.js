import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import HappyLearner from './components/HappyLearner';
import HelpStudyAbroad from './components/HelpStudyAbroad';
import LanguageTraining from './components/LanguageTraining';
import Navbar from './components/Navbar';
import OurStudent from './components/OurStudent';
import Scholarship from './components/Scholarship';
import StudyAbroad from './components/StudyAbroad';
import UniversityExp from './components/UniversityExp';

function App() {
  return (
    <>
    <Navbar />
    <Banner />
    <About />
    <UniversityExp />
    <StudyAbroad />
    <HelpStudyAbroad />
    <OurStudent />
    <LanguageTraining />
    {/* Glimps Sections */}
    <Scholarship />
    <HappyLearner />
    <Footer />
    </>
    
  );
}

export default App;
