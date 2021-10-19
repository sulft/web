const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = `It was :temperature: outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs :weight:, and it was a hot day.`;

let insertX = ["Willy the Goblin",
"Big Daddy",
"Father Christmas"];

let insertY = ["the soup kitchen",
"Disneyland",
"the White House"];

let insertZ = ["spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertX);

    let insertx = xItem;
    let inserty = yItem;
    let insertz = zItem;

    let newStory = storyText;

    newStory = newStory.replace(":insertx:",insertx);
    newStory = newStory.replace(":insertx:",insertx);
    newStory = newStory.replace(":inserty:",inserty);
    newStory = newStory.replace(":insertz:",insertz);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace("Bob",name);
  }

  let weight;
  let temperature;

  if(document.getElementById("uk").checked) {
    weight = Math.round(300/14) + ' stone ';
    temperature = Math.round(((94-32)*5)/9) + ' centigrade ';
  } else {
    weight = Math.round(300) + ' pounds ';
    temperature = Math.round(94) + ' fahrenheit ';
  }

  newStory = newStory.replace(":temperature:",temperature);
  newStory = newStory.replace(":weight:",weight);


  story.textContent = newStory;
  customName.value = '';
  story.style.visibility = 'visible';
}