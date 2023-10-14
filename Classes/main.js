import { Human } from './classes/Human';
import {
  AGE_BY_DEFAULT,
  BALANCE_BY_DEFAULT,
  SALARY_BY_DEFAULT,
} from './constants';
import '../Classes/style.css';

document.getElementById('createHumanButton').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const gender = document.getElementById('gender').value;

  const human = new Human(
    name,
    surname,
    AGE_BY_DEFAULT,
    SALARY_BY_DEFAULT,
    gender,
    BALANCE_BY_DEFAULT
  );

  const humanDisplay = document.getElementById('humanDisplay');
  const commonInfo = `
  <div><h2>Human Information</h2>
  <p>Name: ${human.firsName}</p>
  <p>Surname: ${human.surname}</p>
  <p>Age: ${human.age}</p>
  <p>Gender: ${human.gender}</p>
  <button type="button" id="live__month__btn" class="live__btn">Live a month</button>
  <button type="button" id="live__year__btn" class="live__btn">Live a year</button></div>
  
`;
  if (name.length && surname.length !== 0) {
    if (human.gender === 'male') {
      humanDisplay.innerHTML = `     
    ${commonInfo} 
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg" alt="Human Image">`;
    }
    if (human.gender === 'female') {
      humanDisplay.innerHTML = `
    ${commonInfo} 
    <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/03/New-Witcher-Game-And-Saga-Could-Be-About-Ciri-And-Not-Geralt-Cat-Medallion-Teaser.jpg" alt="Human Image">`;
    }
    if (human.gender === 'other') {
      humanDisplay.innerHTML = `  
    ${commonInfo} 
    <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/EHAIKCVG6NLBNNVXZE7AXPAAJ4.jpg" alt="Human Image">`;
    }
    console.log(human);
  }
});
