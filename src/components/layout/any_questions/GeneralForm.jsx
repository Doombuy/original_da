import { useForm } from 'react-hook-form';
import './GeneralForm.scss'
const GeneralForm=()=>{
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className='General_f'>
        <h1>Остались вопросы?</h1>
        <p>Оставьте заявку и наши специалисты свяжутся с вами <br/>для предоставления интересующей информации</p>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <input {...register('firstName')} placeholder="Имя"  id='name_form'/>
            <div id='form_slice'>
                <input id='number' {...register('number', { required: true })} placeholder="Телефон"/>
                {errors.lastName && <p>Введите ваш номер телефона.</p>}
                <input id='email' {...register('email', { pattern: /\d+/ })} placeholder="Email"/>
                {errors.age && <p>Введите ваш Email</p>}
            </div>
            <textarea {...register('text')} placeholder="Сообщение" id='text_input'/>
            <input type="submit"  id="send_form" value="Отправить заявку"/>
            
        </form>
        
    </div>
     
  );
}
export default GeneralForm