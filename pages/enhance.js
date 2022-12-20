import { useState } from "react"
const Enhance = () => {
  const enhanceData = {
    name: '크리스티안 한반두',
    ovr: [
      108, 109, 110, 112, 114, 116, 119, 123, 127, 132
    ],
    price: [
      0, 1000, 3000, 5000, 9000, 15000, 25000, 50000, 110000, 400000 
    ],
    percentage: [
      100, 81, 64, 50, 26, 15, 7, 4, 2
    ],
    enhancePrice: [
      1000, 1000, 1000, 1000, 2000, 2000, 2000, 2000, 3000, 3000,
    ]
  }

  const [enhanceContent, setEnhanceContent] = useState({
    level: 1,
    myMoney: 10000
  })

  // 

  // 강화 확률 로직
  const random = (num) => {
    const number = num / 100;
 
    console.log('강화확률 : ', number);
    if (Math.random() < number) {
      return true;
    } else {
      return false;
    }
  }

  const goEnhance = () => {
    console.log('강화버튼 클릭');

    // 강화 비용이 있는지 체크
    if (enhanceContent.myMoney < enhanceData.enhancePrice[enhanceContent.level - 1]) {
      return alert('강화비용이 부족합니다.')
    }

    console.log(enhanceData.percentage[enhanceContent.level - 1] + '원 강화비용으로 차감 후 ' + (enhanceContent.level + 1) + '강 강화 시도');

    if (random(enhanceData.percentage[enhanceContent.level - 1])) {
      setEnhanceContent({
        ...enhanceContent,
        level: enhanceContent.level + 1,
        myMoney: enhanceContent.myMoney - enhanceData.enhancePrice[enhanceContent.level - 1]
      });
      console.log((enhanceContent.level + 1) + '강 강화에 성공했습니다.');
    } else {
      console.log((enhanceContent.level + 1) + '강 강화에 실패하였습니다.');
      setEnhanceContent({
        ...enhanceContent,
        level: enhanceContent.level - 1,
        myMoney: enhanceContent.myMoney - enhanceData.enhancePrice[enhanceContent.level - 1]
      });
    }
  }

  
  
  const goSell = () => {
    setEnhanceContent({
      myMoney: enhanceContent.myMoney + enhanceData.price[enhanceContent.level - 1],
      level: 1
    });
  }

  return (
    <div className='enhance-page'>
      <div>
        <h3>{enhanceData.name}</h3>
        <p>내돈 : {enhanceContent.myMoney }</p>
        <ul>
          <li>오버롤: { enhanceData.ovr[enhanceContent.level - 1] }</li>
          <li>강화레벨: { enhanceContent.level }</li>
          <li>가격: { enhanceData.price[enhanceContent.level - 1] }</li>
        </ul>
      </div>
      <button onClick={goEnhance}>강화하기</button>
      <button onClick={goSell}>팔기</button>
    </div>
  )
}


export default Enhance;