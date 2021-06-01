{
  const Y = 'Да';
  const N = 'Нет';

  class RadioQuestionEntity {
    choices = [Y, N];
    type = 'radiogroup';
    isRequired = true;

    constructor(name, title) {
      this.name = name;
      this.title = title;
    }
  }


  const steps = [
    {
      question: 'Я перфекционист и любое дело для меня - это стресс',
      advice: 'Я не обесцениваю свою работу, если она не идеальна'
    },
    {
      question: 'Выступить перед аудиторией - огромный стресс',
      advice: 'Перед аудиторией я чувствую себя так же, как при общении с одним человеком. Это открывает новые возможности'
    },
    {question: 'Мне задали вопрос. Я не знаю ответа, я чувствую себя неловко и боюсь сказать, что не знаю', advice: 'Я спрашиваю, когда чего-то не знаю. Так я быстро решаю проблемы и развиваюсь.'},
    /*{question: 'Мне трудно признаться, когда я что-то не понял. Я редко задаю уточняющие вопросы', advice: 'Я уточняю, если что-то не понял. Поэтому я в теме беседы. Это помогает мне совершенствоваться.'},
    {question: 'Мне неудобно просить о возврате долга или одолженной вещи', advice: 'Я не стесняюсь требовать свои деньги/вещи и тратить своё драгоценное время на обдумывание ситуации невозврата.'},
    {question: 'Мне трудно отказывать людям', advice: 'Я отказываю, если мне неудобно выполнять просьбу. Поэтому с моим мнением считаются и я больше трачу время на себя и на близких.'},
    {question: 'Я очень стараюсь избегать конфликтов', advice: 'Если доходит до конфликта, я могу за себя постоять. Никто не сядет мне на шею.'},
    {question: 'Когда мне делают комплименты, в душе я им не до конца верю', advice: 'Мне всегда приятно когда меня хвалят.'},
    {question: 'Объективно, я крутой специалист. Но я все равно считаю свой уровень недостаточным', advice: 'Даже если я не лучший специалист, я уважаю себя как профессионала.'},
    {question: 'Мне трудно звонить незнакомым людям', advice: 'Я легко звоню незнакомым людям и не трачу впустую время на ожидание ответа на email.'},
    {question: 'Я предпочитаю не высказывать свою точку зрения первым', advice: 'Я смело высказаваю свою точку зрения и отстаиваю её. Поэтому я не делаю лишнюю работу, к моему мнению прислушиваются.'},
    {question: 'Если продавец тратит на меня много сил и времени, я чувствую себя обязанным купить', advice: 'Я не покупаю то, что выгодно продавцу. Мне не портят настроение некачественные покупки.'},
    {question: 'Я веду себя глупо в неловких ситуациях', advice: 'Любая неловкая ситуация не может выбить меня из колеи надолго. Я не трачу драгоценное время на негативные воспоминания.'},
    {question: 'Я очень неловко чувствую себя, если пауза в разговоре затянулась', advice: 'Затянувшаяся пауза, не значит ничего. Я не кручу в голове негативные предположения на свой счёт.'},
    {question: 'Я чувствую себя дискомфортно в присутствии начальника', advice: 'Я спокойно общаюсь с руководством. Они это чувствуют. Это открывает большие возможности.'},
    {question: 'Мне неловко просить о помощи', advice: 'Я легко прошу помощь и получаю. Многие помогают с радостью.'},
    {question: 'Стараюсь избегать новых знакоств', advice: 'Я легко завожу новые знакомства. Новые знакомства открывают новые перспективы в личной жизни и на работе.'},
    {question: 'Я молчу, когда кто-то лезет в очереди вперед меня', advice: 'Я спокойно делаю замечание тем, кто хочет получить что-то, в ущерб мне.'},
    {question: 'Мне неудобно говорить сколько мне нужно заплатить за работу', advice: 'Я смело озвучиваю цену за свою работу и даже выше рынка. Я уверен в своем профессионализме.'},
    {question: 'Если мне хамит незнакомый человек, я впадаю в ступор и мне стыдно', advice: 'Я всегда отвечаю на хамство.'},
    {question: 'Наверное, мне должны платить больше. Я просто подожду когда начальство заметит меня', advice: 'Если мне платят недостаточно, я прошу прибавки. Моя зарплата не может быть ниже рынка.'},
    {question: 'После конфликта мне долго не удается прийти в себя и избавиться от навязчивых мыслей', advice: 'Я быстро отхожу после конфликта. Негатив не разрушает меня изнутри.'},*/
  ];

  const _advices = [
    'Я не обесцениваю свою работу, если она не идеальна',
    'Перед аудиторией я чувствую себя так же, как при общении с одним человеком. Это открывает новые возможности',
    'Я спрашиваю, когда чего-то не знаю. Так я быстро решаю проблемы и развиваюсь.',
    'Я уточняю, если что-то не понял. Поэтому я в теме беседы. Это помогает мне совершенствоваться.',
    'Я не стесняюсь требовать свои деньги/вещи и тратить своё драгоценное время на обдумывание ситуации невозврата.',
    'Я отказываю, если мне неудобно выполнять просьбу. Поэтому с моим мнением считаются и я больше трачу время на себя и на близких.',
    'Если доходит до конфликта, я могу за себя постоять. Никто не сядет мне на шею.',
    'Мне всегда приятно когда меня хвалят.',
    'Даже если я не лучший специалист, я уважаю себя как профессионала.',
    'Я легко звоню незнакомым людям и не трачу впустую время на ожидание ответа на email.',
    'Я смело высказаваю свою точку зрения и отстаиваю её. Поэтому я не делаю лишнюю работу, к моему мнению прислушиваются.',
    'Я не покупаю то, что выгодно продавцу. Мне не портят настроение некачественные покупки.',
    'Любая неловкая ситуация не может выбить меня из колеи надолго. Я не трачу драгоценное время на негативные воспоминания.',
    'Затянувшаяся пауза, не значит ничего. Я не кручу в голове негативные предположения на свой счёт.',
    'Я спокойно общаюсь с руководством. Они это чувствуют. Это открывает большие возможности.',
    'Я легко прошу помощь и получаю. Многие помогают с радостью.',
    'Я легко завожу новые знакомства. Новые знакомства открывают новые перспективы в личной жизни и на работе.',
    'Я спокойно делаю замечание тем, кто хочет получить что-то, в ущерб мне.',
    'Я смело озвучиваю цену за свою работу и даже выше рынка. Я уверен в своем профессионализме.',
    'Я всегда отвечаю на хамство.',
    'Если мне платят недостаточно, я прошу прибавки. Моя зарплата не может быть ниже рынка.',
    'Я быстро отхожу после конфликта. Негатив не разрушает меня изнутри.',
  ]

  createAdviseList(_advices.slice(0, 3))
  Survey
    .StylesManager
    .applyTheme('orange');

  const pages = steps.map((step, i) => ({
      questions: [new RadioQuestionEntity(i.toString(), step.question)]
    })
  );

  window.survey = new Survey.Model({
    title: 'Насколько вы любите себя',
    showProgressBar: 'bottom',
    goNextPageAutomatic: true,
    pages: pages,
  });

  const advices = [];
  survey
    .onComplete
    .add(function (result) {
      let pros = 0;
      let cons = 0;
      for (const key in result.data) {
        if (result.data[key] === Y) {
          cons++;
          advices.push(steps[key].advice);
        } else {
          pros++;
        }
      }
      console.log(result.data, advices);

      const positive = Math.round(100 * pros / steps.length);
      console.log(positive)

      if (positive < 25) {

      } else if (positive >= 25 && positive < 50) {

      } else if (positive >= 50 && positive < 85) {

      } else /*percent > 85*/{

      }
      createAdviseList(advices)

    });
  survey.locale = 'ru';
  $('#surveyElement').Survey({model: survey});

  function onEnd() {

  }

  function createAdviseList(advices) {
    if (advices.length) {
      const $adviceList = $('<ul></ul>').addClass('advice-list').appendTo('#advices');
      $('#advices').removeClass('none')
      advices.forEach(advice => {
        $(`<li>${advice}</li>`)
          .addClass('advice-list-item')
          .appendTo($adviceList);
      })
    }
  }
}
