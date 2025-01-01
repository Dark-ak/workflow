import '@xyflow/react/dist/style.css';
import Workflow from './components/Workflow';
import Topbar from './components/topBar';
import SideBar from './components/sideBar';
import UserNode from './components/customNodes/userNode';
import useWorkFlowStore from './utils/store';
import Notify from './components/notify';





export default function App() {
  const loadfromLocalStorage = useWorkFlowStore((state) => state.loadfromLocalStorage);


  loadfromLocalStorage();



  return (
    <div>
      <Workflow />
      <Topbar />
      <div className='absolute top-24 left-0'>
        <SideBar />
        <UserNode />
      </div>

      <div>
      <Notify />
      </div>
    </div>
  );
}