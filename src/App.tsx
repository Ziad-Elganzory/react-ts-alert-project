import Alert from "./components/ui/Alert"
import { Ban } from 'lucide-react';

const App = () => {
  return (
    <div style={{margin: "2rem"}}>
      <Alert 
        type={"alert-danger"} 
        icon={<Ban size={20}/>}
        title={"Something went wrong!"}
        description="An error occurred while processing your request. Please try again later."
        />
    </div>
  )
}

export default App
