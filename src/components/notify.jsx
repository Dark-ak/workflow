
import useNotification from '../utils/notification'


const Notify = () => {

  const { message, type, show} = useNotification((state) => state);
  console.log(show)
  return (
    <div className='absolute left-1/2 bottom-0'>


      {/* Display the notification */}
      {!show && (
        <div className={`notification ${type}`}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );}

export default Notify