import './Input.css'

export const Input = ({handleChange}) => {
  const handleSubmit = (event) =>{
    event.preventDefault()
  }
  return (
    <>
      <div className='container-form'>
        <form>
          {/* <label htmlFor="">escribe aqui</label> */}
          <input onChange={handleChange} onSubmit={handleSubmit} className="input" type="text" placeholder="Search character"/>
        </form>
      </div>
    </>
  );
};
