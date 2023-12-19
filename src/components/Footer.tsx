import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container' style={{maxWidth: 70 + 'rem'}}>
            <div className='row p-3'>
                <div className='col-sm-4 mb-3'>
                    <h6>Компания</h6>
                    <div>О нас</div>
                    <div>Наши услуги</div>
                    <div>Вакансии</div>
                    <div>Контакты</div>
                </div>
                <div className='col-sm-4 mb-3'>
                    <h6>Помощь</h6>
                    <div>Доставка</div>
                    <div>Возвраты</div>
                    <div>Статус заказа</div>
                    <div>Способы оплаты</div>
                </div>
                <div className='col-sm-4 mb-3'>
                    <h6>Следи за нами на</h6>
                    <div>ВКонтакте</div>
                    <div>Facebook</div>
                    <div>Instagram</div>
                    <div>Twitter</div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;