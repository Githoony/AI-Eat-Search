const chatGPT = async (messages, parameters = {}) => {
  const apikey = 'YOUR_API_KEY';
  if (messages.length === 0 || messages[0].constructor === String) {
    return await chatGPT([['user', messages[0]]]);
  }
  messages = messages.map(line => ({ role: line[0], content: line[1].trim() }));
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apikey}` },
    body: JSON.stringify({ model: 'gpt-3.5-turbo', messages, ...parameters }),
  });
  const data = await response.json();
  if (data?.error?.message) throw new Error(data.error.message);
  return data.choices[0].message.content.trim();
};


async function getAnswer() {
  const questionInput = document.getElementById('question-input').value.trim();

  if (!questionInput) {``
    alert('질문을 입력하세요');
    return;
  }

  document.getElementById('question-input').value = '';

  try {
    alert('확인버튼을 누르시고 잠시만 기다려주세요');

    document.getElementById('question-input').value = '';

    const placeholderElement = document.getElementById('question-input');
    let placeholderValue = '잠시만 기다려주세요';

    const placeholderInterval = setInterval(() => {
      placeholderValue += '.';
      placeholderElement.placeholder = placeholderValue;
    }, 850);
    const answer = await chatGPT([
    ['system', '입맛이 없을 때 음식 몇가지를 추천해드리겠습니다.'],
    ['user', '냉면'],
    ['assistant', '냉면은 한국의 전통적인 면 요리 중 하나로, 시원한 국물과 차가운 면을 함께 즐기는 대표적인 여름 음식입니다. 면은 보통 밀가루로 만들어지며, 국물은 육수 또는 육수를 강화시킨 얼음 물이 사용됩니다. 냉면의 국물은 진하고 시원하며, 고기, 야채, 계란 등 다양한 재료를 첨가하여 맛을 더해줍니다. 전통적인 냉면은 고명과 함께 제공되며, 고명은 오이, 배추, 무 등을 고춧가루와 함께 양념한 것입니다. 냉면은 여름철에 많이 섭취되며, 시원하고 상큼한 맛으로 인기가 있습니다.'],
    ['user', '삼계탕'],
    ['assistant', '삼계탕은 한국의 전통 음식으로, 닭고기와 약재를 사용하여 국물을 내는 요리입니다. 주 재료인 닭고기는 보통 약속된 방법으로 처리되어 사용되며, 함께 끓여지는 약재에는 인삼, 대추, 생강, 마늘 등이 포함됩니다. 삼계탕의 국물은 푸짐하고 감칠맛이 나며, 닭고기는 부드럽고 고소한 맛을 가지고 있습니다. 주로 여름철에 체력을 보충하기 위해 섭취되는데, 열을 내고 체력을 회복시켜주는 효능이 있다고 알려져 있습니다. 입맛이없는건 기력이 약해졌다는 뜻 입니다 원기회복에 좋은 삼계탕은 어떨까요?'],
    ['user', '김치말이국수'],
    ['assistant', '김치말이국수는 김치와 말이국수를 함께 사용하는 한국의 면 요리입니다. 김치말이국수는 면발이 쫄깃하고 김치의 매콤하고 산뜻한 맛이 어우러져 독특한 맛을 내며, 국물은 진하고 고소합니다. 김치와 함께 말이국수를 끓여내는 과정에서 김치의 맛과 향이 면에 스며들어 특별한 맛을 만들어줍니다. 김치말이국수는 얼큰하고 매콤한 면 요리를 좋아하는 사람들에게 인기가 있습니다. 새콤달콤한 김치말이국수로 집나간 입맛을 돌아오게하는건 어떨까요?'],
    ['user', '떡볶이'],
    ['assistant', '떡볶이는 한국의 대표적인 길거리 음식으로, 고추장을 기반으로 만든 양념 소스로 떡과 다양한 재료를 함께 볶아내는 요리입니다. 떡볶이의 주 재료는 떡으로, 쫄깃하고 탱글한 식감을 가지고 있습니다. 떡과 함께 양념 소스에 익혀지는 고추장의 매콤하고 감칠맛이 특징이며, 야채, 어묵, 달걀 등 다양한 재료를 추가하여 맛과 풍미를 더해줍니다. 떡볶이는 매운 맛과 함께 고소하고 달콤한 맛을 느낄 수 있으며, 한국에서 가장 사랑받는 길거리 음식 중 하나입니다. 입맛을 돋우기에 좋은 음식입니다.'],
    ['user', '냉채족발'],
    ['assistant', '냉채족발은 족발을 미리 삶아 차갑게 식혀서 먹는 요리로, 대표적인 한국의 반찬이자 술안주입니다. 족발을 삶아서 부드럽게 익힌 후, 차가운 상태로 얇게 썬 다양한 야채와 함께 양념하여 맛을 내줍니다. 주로 고추장이나 간장, 마늘 등을 사용하여 양념을 만들며, 매콤하고 짭짤한 맛이 특징입니다. 냉채족발은 시원하고 고소한 맛을 가지고 있으며, 족발의 풍부한 탄력과 씹는 재미를 느낄 수 있습니다. 보통 야채와 함께 선물상으로도 인기가 있습니다.'],
    ['user', '해물파전'],
    ['assistant', '해물파전은 해산물과 파를 함께 사용하여 만든 전골로, 바삭하고 고소한 맛이 특징입니다. 해물파전은 송송 썬 파와 다양한 해산물을 부침에 넣어 야들야들한 식감을 즐길 수 있으며, 고소한 소스와 함께 섭취합니다. 해물파전은 전체적으로 가볍고 상큼한 맛이라 입맛을 돋우기에 좋은 선택입니다.'],

    ['user', questionInput],

    ]);

    clearInterval(placeholderInterval);

    console.log('Answer:', answer);
    
    const answerContainer = document.getElementById('answer-container');

    const answerDiv1 = document.createElement('div');
    answerDiv1.classList.add('chat-bubble');
    answerDiv1.innerHTML = `
      <p class="question">Q: ${questionInput}</p>
      <p class="answer">A: ${answer.replace(/\n/g, '<br>')}</p>`;
    answerContainer.appendChild(answerDiv1);
    

    alert('완료되었습니다!');


  } catch (e) {
    console.log(e.message);
  }

  document.getElementById('question-input').value = '';
  document.getElementById('question-input').placeholder = '사용법 예시: 부모님 결혼기념일에 대접할 저녁식사메뉴 추천해줘';

}


document.getElementById('usage-button').addEventListener('click', () => {
  alert("뭐먹지? 사용법\n\n뭐먹지 웹은 뭔가를 먹고싶지만 뭘 먹어야 할지 모를때, 기념일인데 뭘 먹어야할지 고민일때 등.. 자신의 상황을 말해주면 사용자의 상황에맞게 AI가 메뉴를 추천해주는 웹 입니다.\n\n구체적으로 질문할수록 더욱 높은 질의 정보를 얻으실수있습니다.\n\n사용법 예시: 부모님 결혼기념일에 대접할 저녁식사 추천해줘.");
});