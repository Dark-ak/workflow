import '@xyflow/react/dist/style.css';
import Workflow from './components/Workflow';
import Topbar from './components/topBar';
import SideBar from './components/sideBar';
import UserNode from './components/customNodes/userNode';
import useWorkFlowStore from './utils/store';
import Notify from './components/notify';
import Charts from './components/charts';





export default function App() {
  const loadfromLocalStorage = useWorkFlowStore((state) => state.loadfromLocalStorage);


  loadfromLocalStorage();



  return (
    <div className=''>
      <Workflow />
      <Topbar />
      <div className='absolute top-24 left-0'>
        <SideBar />
        <UserNode />
      </div>

      <div className='absolute top-24 right-0 lg:block hidden'>
        <Charts />
      </div>

      <div>
        <Notify />
      </div>
    </div>
  );
}