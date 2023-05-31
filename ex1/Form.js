

const Form = (props) => {

  const { setTodoList,saveData } = props // ? 
  // console.log(props)

  const onSubmit = (e) => {
      e.preventDefault();
      const todoText = e.target.input.value;
      setTodoList((prevState) => {
          
          const newTodoItem = {
              title: todoText,
              id: Math.random(),

          }
          saveData([...prevState, newTodoItem])
          return [...prevState, newTodoItem]
      });


      
  };
  
  return (
    <form className="form" onSubmit={onSubmit}>
      <input placeholder="Enter task ..." name="input" />
      <button >Submit</button>
    </form>
  );
};

export default Form;