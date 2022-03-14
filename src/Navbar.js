import { AiOutlineQuestionCircle } from 'react-icons/ai'
import {BiBarChartAlt2} from 'react-icons/bi';
import {BsGearFill} from 'react-icons/bs';

export default function Navbar() {
  return (
    <header id="header-container">
      <i><AiOutlineQuestionCircle/></i>
      <h3 className="title">WORDLE</h3>
      <div>
        <i><BiBarChartAlt2/></i>
        <i><BsGearFill/></i>
      </div>
    </header>
  );
}