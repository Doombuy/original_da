import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const MyElementRef = () => {
    const companyRef = useRef(null);
    const valuesRef = useRef(null);
    const leadersRef = useRef(null);
    const vacanciesRef = useRef(null);

    const scrollToElement = (ref) => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    // Получаем текущее положение прокрутки
    const scrollY = window.scrollY;

    // Если прокрутка больше или равна 50 пикселей, делаем кнопку фиксированной
    if (scrollY >= 200) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Убираем обработчик при размонтировании
    };
  }, []);
    return(
        <div className='full_page_about_page'>
                <div className='anchors_about_us' style={{position: isFixed ? 'fixed' : 'absolute',  top: isFixed ? '50px' : 'auto', }}>
                    <h1 style={{overflow:'hidden', color:'#222222', visibility:'none'}}>.</h1>
                    <ul>
                        
                        <li onClick={() => scrollToElement(companyRef)}>О компании</li>
                        <li onClick={() => scrollToElement(valuesRef)}>Основные ценности</li>
                        <li onClick={() => scrollToElement(leadersRef)}>Руководители</li>
                        <li onClick={() => scrollToElement(vacanciesRef)}>Вакансии</li>
                    </ul>
                </div>
                <div className='about_company' ref={companyRef}>

                    <h1> О компании</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat enim unde est mollitia nostrum dolores vel porro totam eius sequi veniam officia adipisci blanditiis necessitatibus rem, iste nam accusamus. Excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, iste! Deleniti incidunt laboriosam commodi rem aperiam nemo rerum eveniet et cumque dolore nam at modi, temporibus dignissimos assumenda, ab eum!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quos distinctio commodi, ducimus quibusdam quia temporibus nobis eaque eius.<br></br><br></br> Tenetur ab praesentium blanditiis ipsam omnis? Assumenda veritatis delectus non eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat enim unde est mollitia nostrum dolores vel porro totam eius sequi veniam officia adipisci blanditiis necessitatibus rem, iste nam accusamus. Excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br><br></br>Voluptate, iste! Deleniti incidunt laboriosam commodi rem aperiam nemo rerum eveniet et cumque dolore nam at modi, temporibus dignissimos assumenda, ab eum!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quos distinctio commodi, ducimus quibusdam quia temporibus nobis eaque eius. Tenetur ab praesentium blanditiis ipsam omnis? Assumenda veritatis delectus non eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat enim unde est mollitia nostrum dolores vel porro totam eius sequi veniam officia adipisci blanditiis necessitatibus rem, iste nam accusamus. Excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, iste! Deleniti incidunt laboriosam commodi rem aperiam nemo rerum eveniet et cumque dolore nam at modi, temporibus dignissimos assumenda, ab eum!Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br></br><br></br>Optio quos distinctio commodi, ducimus quibusdam quia temporibus nobis eaque eius. Tenetur ab praesentium blanditiis ipsam omnis? Assumenda veritatis delectus non eius.
                    </p>
                </div>
                <div className='general_values' ref={valuesRef}>
                    <h1> Основные ценности</h1>
                    <ul>
                        <li>
                            <div className='mb_about_img'><img src="/public/images/client.png" alt="" /></div>
                            <h4>Сервис для клиентов <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim corrupti doloremque animi atque, numquam ea id ullam officia voluptatum maxime eos similique aperiam magni, nobis, voluptate explicabo maiores quo!</p></h4>
                        </li>
                        <li>
                            <div className='mb_about_img'><img src="/public/images/one.png" alt="" /></div>
                            <h4>Стремимся быть первыми в своем деле! <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim corrupti doloremque animi atque, numquam ea id ullam officia voluptatum maxime eos similique aperiam magni, nobis, voluptate explicabo maiores quo!</p></h4>

                        </li>
                        <li>
                            <div className='mb_about_img'><img src="/public/images/employee.png" alt="" /></div>
                            <h4>Сотрудники <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim corrupti doloremque animi atque, numquam ea id ullam officia voluptatum maxime eos similique aperiam magni, nobis, voluptate explicabo maiores quo!</p></h4>

                        </li>
                    </ul>
                </div>
                <div className='leaders' ref={leadersRef}>
                
                    <h1>Руководители</h1>
                    <div className='rucovod' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>

                    
                        <div className='firsr_own'>
                            <div className='owns_mb'>
                                <img src="/public/images/mask.png" alt="" />
                            </div>
                            <h3>Георгий Алкацев<p>Владелец</p></h3>
                        </div>
                        <div className='second_own'>
                            <div className='owns_mb'>
                                <img src="/public/images/mask.png" alt="" />
                            </div>
                            <h3>Direct Lorem<p>Владелец</p></h3>
                        </div>
                        <div className='general_dir'>
                            <div className='owns_mb'>
                                <img src="/public/images/mask.png" alt="" />
                            </div>
                            <h3>No Name<p>Генеральный директор</p></h3>
                        </div>
                    </div>
                </div>
                <div className='vacancies' ref={vacanciesRef}>
                    <h1>Мы всегда рады новым людям</h1>
                    <div className='vacansies_mb' style={{display:'flex', }}>
                        <div className='vacancies_view'>
                            <img src="/public/images/vacancies.png" alt="" />
                            <h4>Вакансии</h4>
                            <p>Хотите присоединится к нашей команде профессионалов?</p>
                            <Link to={'*'}>Смотреть вакансии</Link>
                        </div>
                        <div className='vacancies_cont'>
                            <img src="/public/images/contact.png" alt="" />
                            <h4>Контакты</h4>
                            <p>Мы всегда онлайн! Просто позвоните нам, или оставьте заявку.</p>
                            <Link to={'*'}>Связаться с нами</Link>
                        </div>
                    </div>

                </div>
            </div>
    )
};
export default MyElementRef;