
import useNotification from '../utils/notification'


const Notify = () => {

  const { message, type, show } = useNotification((state) => state);
  console.log(show)
  return (
    <div className={`absolute left-1/2 my-5 duration-500 ${show ? "bottom-0" : "-bottom-20"} `}>


      <div className={`${type == "success" ? "bg-green-500" : "bg-red-500"} px-4 py-2 rounded`}>
        <p className='text-white font-medium'>{message}</p>
      </div>
    </div>
  );
}

export default Notify