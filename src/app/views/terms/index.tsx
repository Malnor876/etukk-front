import "./Terms.scss"

import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
import { Route, Routes } from "react-router-dom"

function TermsView() {
  return (
    <div className="terms">
      <h2 className="heading">Правовая информация</h2>
      <Buttons>
        <ButtonLink outline nav to="rules">Правила пользования сайтом</ButtonLink>
        <ButtonLink outline nav to="policy">Политика конфиденциальности</ButtonLink>
        <ButtonLink outline nav to="" end>Договор оферты</ButtonLink>
      </Buttons>
      <Routes>
        <Route path="rules" element={<TermsViewIndex />} />
        <Route path="policy" element={<TermsViewIndex />} />
        <Route index element={<TermsViewIndex />} />
      </Routes>
    </div>
  )
}

// function TermsViewRules() { }
// function TermsViewPolicy() { }

function TermsViewIndex() {
  return (
    <div>
      <h3 className="heading">ПУБЛИЧНАЯ ОФЕРТА</h3>
      <b> об условиях предоставления сервиса «Безопасная сделка» (далее – ОФЕРТА)</b>
      <p>
        В настоящей Оферте содержатся условия предоставления Общество с ограниченной ответственностью «АМО Групп» (ООО «АМО Групп») услуг, возникающих при использовании сервиса «Безопасная сделка» на указанных в настоящей Оферте условиях.
        Изложенный ниже текст Оферты является официальным публичным предложением адресованным физическим лицам, являющимся Пользователями www.Etukk.ru  (НАИМЕНОВАНИЕ/АДРЕС САЙТА, ПРИЛОЖЕНИЯ).
        Акцепт условий настоящей Оферты осуществляется в форме конклюдентных действий, предусмотренных Офертой, и означает безоговорочное принятие физическим лицом всех условий настоящей Оферты без каких-либо изъятий или ограничений на условиях присоединения согласно ст. 437 и ст. 428 Гражданского кодекса Российской Федерации.
        Акцепт условий настоящей оферты подтверждает факт заключения Договора об использовании сервиса «Безопасная сделка».
        Актуальная версия Оферты размещена в сети Интернет по адресу:
      </p>
      <h3 className="heading">1.ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ</h3>
      <p>
        В настоящем документе термины, написанные с заглавной буквы, имеют следующее значение:
        <br />
        Авторизация – процедура запроса и получения Банком ответа на такой запрос в виде разрешения или запрета на проведение операции по Карте от Банка-эмитента Карты или от Платежной системы.
        Банк – Акционерное общество «Тинькофф Банк» (лицензия ЦБ РФ № 2673, ОГРН 1027739642281, местонахождение: 123060, Москва, 1-ый Волоколамский проезд, д.10, стр.1), предоставляющее Пользователям Услуги Банка на условиях, предусмотренных настоящей Офертой.
        Банк-эмитент – кредитная организация, осуществляющая эмиссию Карты.
        Верификация – процедура дополнительной проверки Банком Держателя карты и Карты, осуществляемая с целью снижения рисков проведения несанкционированной/незаконной операции по Карте отправителя.
        Держатель Карты – Пользователь, на имя которого Банком или Банком-эмитентом эмитирована Карта.
        Личный кабинет — персональный раздел Пользователя на Сайте/ Приложении, связанный с Учетной записью Пользователя, в котором Пользователю доступно управление Сервисом.
        Общество — ООО «АМО Групп» (НАИМЕНОВАНИЕ ОРГАНИЗАЦИИ), ОГРН 1213100012058 обеспечивающее использования Сервиса Пользователями.
        Объявление — информационное сообщение с предложением о Товаре (включая контактную информацию, фотографии и любую сопутствующую информацию), размещаемое Продавцом на Сайте/Приложении, адресованное неопределенному кругу лиц.
        Платежная страница Банка — интерфейс Банка, который размещен на Сайте/Приложении, используемый Пользователем для ввода реквизитов Карты и составлении, и передаче Поручения.
        Пользователь — дееспособное физическое лицо, зарегистрированное на Сайте/Приложении, и присоединившееся к настоящей Оферте, а также Продавец и Покупатель при совместном упоминании.
        Покупатель — Пользователь Сайта/Приложения, зарегистрированный на Сайте/в Приложении, осуществляющий просмотр размещенного Продавцом Объявления, взаимодействие с Продавцом в отношении Товара, заключивший с Продавцом Сделку с использованием Сервиса.
        Поручение — направленные в Банк посредством использования Сайта /Приложения и Платежной страницы Банка акцепт Пользователя, содержащий информацию о присоединении к настоящей оферте и распоряжение Пользователя на совершение Банком перевода на основании предоставленной Клиентом и Обществом информации.
        Продавец — Пользователь Сайта/Приложения, зарегистрированный на Сайте/в Приложении и размещающий там Объявления с предложением заключить Сделку в отношении Товара с использованием Сервиса.
        Приложение (НАЗВАНИЕ ЕСЛИ ЕСТЬ), Приложение - приложение, представляющее собой совокупность программного обеспечения Общества, устанавливаемого на мобильное устройство (телефон и/или планшетный компьютер, и/или портативный плеер и/или иное устройство, поддерживающие установку такого программного обеспечения) Пользователя, предоставляющее возможность размещения Продавцами Объявлений о продаже Товаров, а также предоставляющий Покупателям возможность поиска, просмотра предложений Продавцов с целью последующего приобретения Товара с использованием Сервиса.
        Сайт — интернет ресурс Общества, размещенный в сети интернет по адресу www.Etukk.ru  (НАИМЕНОВАНИЕ/АДРЕС САЙТА, ПРИЛОЖЕНИЯ), предоставляющий возможность размещения Продавцами Объявлений о продаже Товаров, а также предоставляющий Покупателям возможность поиска, просмотра предложений Продавцов с целью последующего приобретения Товара с использованием Сервиса.
        Сервис «Безопасная сделка» (Сервис) - сервис, позволяющий Продавцу и Покупателю при исполнении ими своих обязательств по Сделке использовать услуги, оказываемые Банком и Обществом в соответствии с настоящей Офертой, в порядке, предусмотренном настоящей Офертой.
        Сделка – соглашение, заключенное между Покупателем и Продавцом, в порядке, предусмотренном настоящей Офертой, предметом которого является купля-продажа Товара с использованием Сервиса, и устанавливающее порядок выполнения сторонами Сделки (Покупателем и Продавцом) ее условий.
        Товар — товар, услуга (работа), в отношении которого Продавец размещает на Сайте/Приложении Объявление, являющийся предметом Сделки.
        Стоимость Товара - цена Товара, выраженная исключительно в рублях Российской Федерации, которая была согласована Покупателем и Продавцом при заключении Сделки на Сайте/в Приложении.
        Учетная запись Пользователя - хранимая Обществом совокупность данных о Пользователе, предоставляющая собой комбинацию уникального логина и пароля, используемая для аутентификации Пользователя при входе в Личный кабинет с целью получения доступа к Сервису.
      </p>

      <h3 className="heading">2.ОБЩИЕ ПОЛОЖЕНИЯ</h3>

      <p>
        2.1. Общество и Банк предлагает Пользователям на условиях настоящей Оферты воспользоваться Сервисом.
        2.2. В рамках Сервиса Общество оказывает услуги по предоставлению Пользователям функциональности Сайта/Приложения, обеспечивающей возможность оплаты Покупателем и получения Продавцом Стоимости Товара в безналичном порядке с использованием Карты (ее реквизитов), а также услуги по обмену информацией между Продавцом и Покупателем с целью заключения и исполнения Сделки, совершенной в рамках использования Сервиса.
        Расчеты в рамках Сервиса осуществляются Банком на условиях настоящей Оферты.
        2.3. Настоящая Оферта считается акцептованной Пользователем в момент совершения Пользователем соответствующих действий:
        2.3.1. Настоящая Оферта считается акцептованной Покупателем в момент подтверждения Покупателем своего согласия на оплату Товара в пользу Продавца в рамках Сделки с использованием Сервиса путем нажатия специальной кнопки в интерфейсе Сайта/Приложения;
        2.3.2. Настоящая Оферта считается акцептованной Продавцом в момент подтверждения Продавцом своего согласия продать Товар с использованием Сервиса путем нажатия специальной кнопки в интерфейсе Сайта/Приложения.
        2.4. Фиксация факта акцепта настоящей Оферты осуществляется Обществом в электронном виде и хранится в аппаратно-программном комплексе Общества. Выписки из аппаратно-программного комплекса Общества могут использоваться в качестве доказательств при рассмотрении споров, в том числе в судебном порядке.
        2.5. Сайт является площадкой, позволяющей Продавцам самостоятельно на свой страх и риск размещать предложения, адресованные неопределенному кругу лиц на совершение сделки в отношении Товара, которым Продавец правомочен распоряжаться (делать предложения), а Покупателям принимать на свое усмотрение и под свою ответственность предложения, размещенные на Сайте Продавцами, заключая соответствующую сделку с Продавцом.
        При заключении Сделки Покупатель вступает в прямые договорные отношения с Продавцом, у которого Покупатель приобретает Товар. Общество не является стороной по Сделке, организатором Сделки, Покупателем, Продавцом, посредником, агентом или представителем какого-либо Пользователя и/или иным заинтересованным лицом в отношении предлагаемой/заключаемой между Пользователями Сделки. Все совершаемые Сделки между Пользователями заключаются и исполняются без прямого или косвенного участия Общества.
        2.6. Осуществляя доступ к Сервису и заключая договоры, путем акцепта настоящей Оферты, Пользователь гарантирует, что обладает всеми правами и полномочиями, необходимыми для заключения и исполнения таких договоров, в том числе является совершеннолетним и полностью дееспособным лицом, либо несовершеннолетним лицом, объявленным по решению уполномоченного органа полностью дееспособным (эмансипация) либо несовершеннолетним лицом, достигшим четырнадцати лет и получившим письменное разрешение в требуемой законом форме от своих родителей или иных законных представителей на заключение договоров. Общество вправе в любое время потребовать от Пользователя предоставление информации и документов, подтверждающих права и полномочия, как указано выше.
      </p>

      <h3 className="heading">3.ПОРЯДОК И УСЛОВИЯ ПРЕДОСТАВЛЕНИЯ СЕРВИСА</h3>

      <p>
        3.1. Размещение Объявления осуществляется при помощи программно-технических средств Сайта/Приложения через Личный кабинет. Объявление считается размещенным Продавцом с момента его публикации на Сайте/Приложении. Объявление должно содержать в себе всю необходимую информацию, которая предусмотрена требованиями действующего законодательства Российской Федерации. Объявление не может содержать предложение о продаже Товара, который запрещен или ограничен в обороте в соответствии с законодательством Российской Федерации и Правилами.
        3.2. Условия Сделки, заключаемой между Продавцом и Покупателем, указываются Продавцом в Объявлении. До заключения Сделки с использованием Сервиса Покупатель обязуется внимательно ознакомиться со всеми условиями Сделки и характеристиками Товара, указанными Продавцом в Объявлении. Покупатель вправе обратиться к Продавцу с целью уточнения условий продажи Товара путем направления текстового сообщения в Личном кабинете или иным способом. Оформление заказа на Товар означает согласие Покупателя со всеми условиями, указанными в Объявлении.
        3.3. До момента подтверждения Продавцом отправки Товара с использованием Сервиса, Покупатель имеет право отказаться от покупки Товара.
        3.4. Для использования Сервиса Покупатель вправе привязать к его Личному кабинету Карту - для более удобной и быстрой оплаты Товара, для осуществления возврата/частичного возврата денежных средств в случаях, предусмотренных в настоящей Оферте. В случае привязки Карты Банк осуществляет сохранение реквизитов (привязку) Карты Пользователя, с целью предоставления возможности проведения повторных операций с данной Картой в рамках Сервиса без повторного ввода ее реквизитов. Также Покупатель вправе осуществлять оплату Товара путём ввода данных своей Карты каждый раз при совершении Сделки (без привязки платежной карты).
        3.5. При подтверждении Покупателем согласия на оплату Товара путем нажатия на специальную кнопку в интерфейсе Сайта/Приложения с использованием Сервиса выводится Платежная страница Банка для ввода данных платежной карты Покупателя, если она не была привязана ранее, и подтверждения оплаты по Сделке. Совершая указанные в настоящем пункте действия Покупатель дает Поручение Банку на списание денежных средств в размере Стоимости Товара с Карты Покупателя с целью осуществления последующих расчётов с Продавцом.
        3.6. При наличии у Покупателя привязанной к его Личному кабинету Карты либо при вводе данных Карты на соответствующей Платежной странице Банка при оплате заказа, при условии, что Банком получено разрешение на проведение операции по Карте в результате Авторизации и/или Верификации, при наличии на счете Карты денежной суммы, равной Стоимости Товара, а также комиссии Банка, происходит списание денежных средств с Карты Покупателя и их зачисление на Карту Продавца. Зачисление денежных средств на Карту Продавца осуществляется по факту получения от Общества информации о наступлении условий по оплате Товара, согласно условиям Сделки, в частности информации о получении Товара от Продавца и отсутствии претензий Клиента к Продавцу (если применимо). В случае неполучения от Общества соответствующей информации, Банк осуществляет возврат денежных средств в размере стоимости Товара за вычетом комиссии Банка по реквизитам Карты Покупателя. Расчеты в рамках Договора осуществляются исключительно в валюте Российской Федерации.
        3.7. При подтверждении продажи Товара с использованием Сервиса Продавец должен привязать к своему Личному кабинету платежную карту путём ввода данных Карты на соответствующей Платежной страницы Банка. В случае привязки Карты Банк осуществляет сохранение реквизитов (привязку) Карты Пользователя, с целью предоставления возможности проведения повторных операций с данной Картой в рамках Сервиса без повторного ввода ее реквизитов. Также Продавец вправе ввести данные своей Карты без ее привязки.
        3.8. После оплаты Продавцу автоматически направляется уведомление о необходимости в течение установленного Обществом срока подтвердить факт заключения Сделки и готовность Продавца к отправке Товара Покупателю.
        3.9. Покупатель и Продавец самостоятельно уплачивают все необходимые налоги, сборы и взносы, подлежащие уплате в связи с заключением Сделки, в соответствии с применимым правом и самостоятельно несут соответствующие риски и ответственность в случае их неуплаты.
        3.10Покупатель и Продавец понимают и соглашаются, что при переводах денежных средств на карты и с карту могут взиматься дополнительные комиссии. Банк не несет ответственности за комиссии, взимаемые банком-получателем и/или банком-отправителем денежных средств.
        3.11. За оказание услуг в рамках Сервиса Банк имеет право взимать с Клиента комиссию согласно Тарифам по платежам, переводам и дополнительным услугам, размещенным по адресу https://static.tinkoff.ru/documents/tariffs/acquiring.pdf. Комиссия рассчитывается от суммы операции и включается в общую сумму авторизационного запроса, проводимого по Карте, и подлежит списанию без дополнительных распоряжений с Карты отправителя сверх суммы операции в дату списания с Карты отправителя суммы операции.
        3.12. При использовании Сервиса Пользователи обязуются:
        3.12.1. Надлежащим образом исполнять обязанности, предусмотренные настоящей Офертой, а также обязательства по Сделке, заключенной между Пользователями;
        3.12.2. При осуществлении расчетов соблюдать условия его предоставления, предусмотренные настоящей Офертой;
        3.12.3. Не использовать Сервис в целях осуществления предпринимательской деятельности;
        3.12.4. При заключении Сделки проявлять осмотрительность;
        3.12.5. Не осуществлять реализацию в рамках Сделки товаров, не указанных в Объявлении;
        3.13. Информационно-технологическое взаимодействие между Банком и Покупателем/Продавцом в части осуществления переводов денежных средств за Товар обеспечивается Обществом с использованием программных, аппаратных и технических средств Сайта/Приложения.
        Банк при осуществлении переводов денежных средств руководствуется Поручениями Покупателя, данными в интерфейсе Сайта/Приложения.
        3.14. Стороны считают данные, полученные от Общества, достаточным и надлежащим подтверждением тех или иных событий и действий Сторон, связанных с доставкой Товара в рамках Сервиса и исполнением обязательств Пользователей в рамках Сервиса. Факт предоставления Пользователю услуг в рамках Сервиса и их объем определяются на основании статистических данных учетной системы Общества.
      </p>

      <h3 className="heading">4.ОБМЕН ИНФОРМАЦИЕЙ ПРИ ИСПОЛЬЗОВАНИИ СЕРВИСА</h3>

      <p>
        4.1. В рамках Сервиса Общество и Банк могут направлять Пользователям информационные сообщения, связанные с оказанием услуг в рамках Сервиса. Сообщения Общества и Банка, предназначенные для Пользователей, могут рассылаться индивидуально по электронным адресам или на абонентские номера Пользователей, предоставленные Пользователями при регистрации Личного кабинета, размещении Объявлений на Сайте или оформлении заказа. При этом Пользователь понимает, принимает и соглашается, что рассылаемые сообщения и/или их отдельные части могут иметь рекламный характер, а также могут содержать рекламные, информационные и иные сообщения контрагентов Общества. Сообщения, опубликованные на Сайте/Приложении, считаются доставленными Пользователю с момента их публикации. Общество может направлять Пользователям транзакционные и сервисные сообщения, связанные с действиями Пользователей в рамках Сервиса.
        4.2. Сообщения, обращения Пользователей, предусмотренные настоящей Офертой, а также любые иные обращения Пользователей, предназначенные для Общества, пересылаются способами, предложенными на Сайте/Приложении, включая форму обратной связи для обращений на Сайте/Приложении.
        4.3. Обращения Пользователя к Обществу по вопросам, связанным с использованием Сервиса, рассматриваются в порядке, предусмотренном настоящей Офертой. Взаимодействие Общества с Пользователем в рамках рассмотрения обращения Пользователя осуществляется с использованием указанного Пользователем адреса электронной почты.
        4.4. Сообщения Пользователей друг другу могут быть направлены посредством специально предложенной формы связи для Пользователей в рамках Сервиса. Пользователь понимает и соглашается с тем, что переписка с другими Пользователями в рамках Сервиса, осуществляемая с помощью специально предложенной формы связи, не является личной. Общество в любой момент имеет право осуществлять просмотр отправляемых через специально предложенную форму связи сообщений, включая, без ограничений, в целях исполнения условий настоящей Оферты.
        Общество не гарантирует, что на сообщение, направленное одним Пользователем другому Пользователю, будет дан ответ, а также не гарантирует доставку такого сообщения Пользователю.
        4.5. Порядок рассмотрения Обществом обращений Пользователей:
        4.5.1. В случае наличия претензий Пользователя в отношении Сервиса или спора между Пользователями, связанного с исполнением Пользователями своих обязательств по Сделке, Пользователь вправе обратиться в Общество с целью разрешения указанных претензий и споров, направив соответствующее сообщение в службу поддержки;
        4.5.2. Обращение должно содержать описание проблемы, документы, подтверждающие позицию Пользователя, документы, предусмотренные условиями настоящей Оферты, а также иные необходимые документы. Общество вправе запросить у Пользователя иные документы и сведения, необходимые для рассмотрения обращения (в т.ч., без ограничений, заключение независимой экспертизы, если таковое необходимо для рассмотрения обращения). В случае непредоставления Пользователем запрошенных Обществом документов и сведений, Общество вправе рассмотреть обращение Пользователя без учета таких документов или приостановить рассмотрение обращения до момента предоставления Пользователем необходимых документов или сведений;
        4.5.3. В ходе рассмотрения обращения Общество вправе обращаться к другой стороне Сделки с целью выяснения обстоятельств спора между Пользователями и получения необходимых документов или сведений. В случае рассмотрения Обществом спора между Пользователями, каждый из Пользователей вправе предоставлять аргументы и доказательства надлежащего исполнения своих обязательств по Сделке;
        4.5.4. По результатам рассмотрения обращения Пользователя Общество принимает решение на основании имеющихся у Общества документов и доводов;
        4.5.5. Пользователи принимают и соглашаются, что решение, принятое Обществом по результатам рассмотрения обращения Пользователей, может служить основанием для осуществления расчетов между Пользователями в Сервиса (возврата денежных средств Покупателю или перевода денежных средств Продавцу).
      </p>

      <h3 className="heading">5.ГАРАНТИИ И ОТВЕТСТВЕННОСТЬ</h3>

      <p>
        5.1. Пользователь несет ответственность за действия, совершаемые в рамках Сервиса, в соответствии с действующим законодательством Российской Федерации и условиями настоящей Оферты, включая ответственность за содержание размещаемой им информации и нарушение прав третьих лиц в отношении Товаров и/или информации, размещаемой на Сайте/приложении и пр.
        5.2. Пользователь несет ответственность за предлагаемые в отношении Товаров и заключаемые в связи с ними Сделки в рамках Сервиса, за выбор контрагентов для сделки и вытекающие из сделки последствия. Все Сделки в отношении Товаров заключаются между Пользователями напрямую. Общество/Банк не являются участниками и/или посредниками Сделок в рамках Сервиса, совершаемых Пользователями исходя из информации, полученной на Сайте/Приложении, не контролируют и не несут ответственности за такие сделки.
        5.3. Сервис предназначен для использования в целях, не связанных с осуществлением предпринимательской деятельности. Отношения, являющиеся предметом Сделки, регулируются законодательством Российской Федерации, при этом Пользователи понимают, что отдельные положения законодательства Российской Федерации, в т.ч. в части защиты прав потребителей, могут не применяться к отношениям Пользователей, являющимся предметом Сделки.
        5.4. Пользователь согласен, что Общество и/или Банк не несет ответственности за возможные убытки, причиненные Пользователю в связи с принятием мер пресечения или предотвращения нарушений на Сайте, связанных с ограничением/блокировкой доступа Пользователей к Сервису.
        5.5. Общество не несет ответственности за неисполнение или затруднения в исполнении обязательств Пользователей, в т.ч. обязательств по Сделке, вследствие обстоятельств непреодолимой силы, последствия которых невозможно избежать или преодолеть.
        5.6.Банк не несет ответственности в случаях, когда зачисление средств на Карту Продавца осуществлено с нарушениями сроков и иных требований, установленных правилами ПС и законодательством РФ по вине Банка-эмитента или иных лиц.
        5.7.Банк не несет ответственность за несвоевременное сообщение Покупателем и/или Обществом информации о получении Товара и отсутствии претензий к Продавцу.
        5.8.Банк не несет ответственности за ошибки, допущенные Пользователями при оформлении Поручения, а также за предоставление некорректных реквизитов Карты. В указанных случаях услуги считаются оказанными Банком Покупателю надлежащим образом и в полном соответствии с настоящим договором, и Покупатель самостоятельно урегулирует дальнейшие взаиморасчеты с Продавцом или Обществом.
        5.9.Банк имеет право отказать Пользователю в оказании услуг Банка в одностороннем порядке и без объяснения причин, в том числе, если у Банка отсутствует техническая возможность для их оказания, если параметры операции не соответствуют установленным Банком и/или ПС и/или применимым законодательством ограничениям по суммам и количеству операций по Картам, в случае выявления операций Пользователей, содержащих признаки необычных операций или несущих репутационные и/или финансовые риски для Банка, а также, если у Банка возникли подозрения в том, что операция осуществляется с нарушением требований законодательства РФ и/или правил ПС.
      </p>

      <h3 className="heading">6.СРОК ДЕЙСТВИЯ ДОГОВОРА</h3>

      <p>
        6.1. Заключаемые путем акцепта настоящей Оферты договоры вступают в силу с момента акцепта условий настоящей Оферты Пользователем в порядке, предусмотренном настоящей Офертой, и действует до полного исполнения Сторонами своих обязательство по нему.
        6.2. Общество оставляет за собой право по собственному усмотрению прекратить или ограничить доступ Пользователя к Сервису.
        6.3. Общество и/или Банк вправе изменять и/или дополнять условия Оферты в той мере, в какой это допускается действующим законодательством, а также отозвать Оферту в любое время. Датой изменения Оферты является дата опубликования новой редакции Оферты. Пользователь должен ознакомиться с действующей редакцией Оферты, размещенной на Сайте/Приложении, и с условиями каждой сделки до присоединения к Оферте и совершения сделки.
        6.4. Заключение Пользователями Сделки с использованием Сервиса после вступления в силу изменений в Оферте означает, что стороны пришли к согласию о внесении соответствующих изменений и/или дополнений в Оферте.
        6.5. Общество вправе расторгнуть договоры в порядке, предусмотренном действующим законодательством Российской Федерации, с уведомлением об этом Пользователя через интерфейс Сайта, по адресу электронной почты или иным способом.
        6.6. Действие договора об использовании Сервиса может быть прекращено досрочно по инициативе Пользователя путем обращения Пользователя в Компанию в порядке, предусмотренном настоящей Офертой.
      </p>

      <h3 className="heading">7.СПОРЫ И ДЕЙСТВУЮЩЕЕ ЗАКОНОДАТЕЛЬСТВО</h3>

      7.1. При разрешении всех споров, вытекающих из настоящей Оферты, применяется действующее законодательство Российской Федерации.
      7.2. Споры, возникшие в рамках настоящего договора, должны быть переданы на рассмотрение в соответствии с действующим законодательством Российской Федерации.
      7.3. Признание отдельных частей настоящей Оферты недействительными не отменяет действие других ее положений.

      <h3 className="heading">8.ПРОЧИЕ УСЛОВИЯ</h3>

      <p>
        8.1. Общество и/или Банк имеет право, а Пользователь соглашается, на обработку любой информации, относящейся к персональным и/или контактным данным Пользователя, с использованием средств автоматизации или без таковых, включая сбор, систематизацию, накопление, хранение, уточнение, использование, распространение (в том числе передачу партнерам Банка и/или Общества, трансграничную передачу), обезличивание, блокирование, уничтожение персональных данных, предоставленных Банку в связи с использованием Сервиса, и иные действия, предусмотренные Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных». Пользователь выражает согласие Банку на предоставление сведений, указанных в настоящем пункте, Банку-эмитенту Карты получателя и/или ПС, для целей исполнения условий настоящей Оферты, а также в любых других целях, прямо или косвенно связанных с исполнением Банком обязательств в рамках настоящей Оферты, и предложение продуктов Банка.
        8.2. Пользователь гарантирует, что все условия настоящей Оферты ему понятны, и он принимает условия без оговорок и в полном объеме.
        8.3. В случае, если отдельные положения настоящей Оферты прекращают действие по основаниям, предусмотренным законодательством Российской Федерации, это не влечет прекращения или недействительности заключенных между сторонами договоров и его приложений в целом.
        8.4. Все действия Пользователей, совершаемые в соответствии с настоящей Офертой, обрабатываются и учитываются Банком и Обществом по московскому времени. В качестве языка Договора, заключаемого на условиях настоящей Оферты, а также языка, используемого при любом взаимодействии сторон (включая ведение переписки, предоставление требований/уведомлений/разъяснений, предоставление документов и т.д.), стороны определили русский язык.
      </p>

    </div>
  )
}

export default TermsView