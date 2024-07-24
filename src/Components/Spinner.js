import loading from './loading.gif';

const Spinner =()=> {
 
    return (
      <div className="d-flex justify-content-center align-items-center my-3">
        <img src={loading} alt='loading' width='5%' height='5%' />
      </div>
    );
  }


export default Spinner;
