import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from './FormComponent/Form';
import { Card } from '@material-ui/core';

function App() {
  return (
    <div className="container text-center">
      <h1 className='text-primary'>Welcome!</h1>
      <Card className='w-sm-100 w-md-75 w-50 m-auto' variant="outlined">{<Form className=""/>}</Card>
    </div>
  );
}

export default App;
