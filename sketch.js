
var child,school,flag;
var backgroundImg, happyImg, sadImg, schoolImg, flagImg;

function preload(){
  backgroundImg = loadImage("background.jpg");
  happyImg  = loadImage("happy emoji.png");
  sadImg = loadImage("sad emoji.png");
  schoolImg = loadImage("school.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  school = createSprite(displayWidth/2,50,10,10);
  school.addImage(schoolImg);


  child = createSprite(displayWidth/2,displayHeight/2,10,10);
  child.addImage(happyImg);
  child.scale = 0.16;

}



function draw() {
  background(backgroundImg);

  
  camera.y = child.y;
  camera.x = child.x; 

  allOldText();
  allNewText();

  if(keyDown(LEFT_ARROW)){
    child.x = child.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
    child.x = child.x+2;
  }

  if(keyDown(UP_ARROW)){
    child.y = child.y-2;
  }

  if(keyDown(DOWN_ARROW)){
    child.y = child.y+2;
  }

  if(child.x < displayWidth/2){
    child.addImage(sadImg)
  }

  if(child.x > displayWidth/2){
    child.addImage(happyImg)
  }

  
  line(displayWidth/2,-20000,displayWidth/2,displayHeight+20000)
  textSize(32);
  textFont("Georgia");
  fill(255);
  text("OLD EDUCATION POLICY",100,50)
  text("NEW EDUCATION POLICY",displayWidth/2 + 250,50)
  drawSprites();
}

function allOldText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text("10 + 2 ", displayWidth/2 - 300,displayHeight/2);
  text("शिक्षा प्रणाली", displayWidth/2 - 300,displayHeight/2 + 50);

  text("यो नीति केवल अंक र शिक्षाविद्हरूमा फोकस गर्दछ", displayWidth/2 - 700,displayHeight/2 - 200);

  text("यो नीतिले विद्यार्थीहरूलाई उनीहरूको भाषामा पढ्न अनुमति दिँदैन", displayWidth/2 - 1300,displayHeight/2 - 100);
  
  text("हामीले हाम्रो कुनै पनि सीपमा ईन्टर्नशिप पाइरहेका छैनौं", displayWidth/2 - 1000,displayHeight/2 + 200);

  text("परीक्षाहरू भर्खरै अंग्रेजी र हिन्दीमा आयोजित हुन्छन्", displayWidth/2 - 1000,displayHeight/2 + 70);

  text("शिक्षकसँग मात्र विद्यार्थीलाई दर्जा दिने अधिकार छ", displayWidth/2 -700, displayHeight/2 +300);

  text("विद्यार्थीहरू शैक्षिक प्रदर्शनको आधारमा मात्र क्रमबद्ध हुन्छन्", displayWidth/2 - 1500,displayHeight/2 - 270);

  text("विद्यार्थीहरूलाई कुनै पनि सीपहरू सिकाउँदैनन् जस्तो कोडि,, भाँडाकुँडाहरू आदि", displayWidth/2 - 1200,displayHeight/2  + 400);

  text("बोर्ड परीक्षा वार्षिक रूपमा आयोजित गरिन्छ", displayWidth/2 - 1400,displayHeight/2 + 10);

  text("कुनै सांस्कृतिक अध्ययन प्रदान गरिएको छैन", displayWidth/2 - 1400,displayHeight/2 +300);

  text("योग्यता पूर्ण पाठ्यक्रम पछि मात्र प्रदान गरिन्छ", displayWidth/2 - 1600,displayHeight/2 + 140);

  text("१२ अंकहरू कलेज प्रवेशका लागि महत्त्वपूर्ण छन्", displayWidth/2 - 1800,displayHeight/2 - 200);

  text("शुल्क प्रतिबन्धित छैन", displayWidth/2 - 1400,displayHeight/2 + 480);

  text("विद्यार्थीहरू विषयहरूमा प्रतिबन्धित छन्", displayWidth/2 - 1750,displayHeight/2 + 350);
  
}

function allNewText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text(" 5 + 3 + 3 + 4 ", displayWidth/2 + 50,displayHeight/2);
  text("शिक्षा प्रणाली", displayWidth/2 + 50,displayHeight/2 + 50);

  text("यो नीति केवल अंक र शिक्षाविद्हरूमा मात्र केन्द्रित छैन, यसले कौशल र गैर-शैक्षिक गतिविधिहरूमा पनि ध्यान केन्द्रित गर्दछ", displayWidth/2 + 200,displayHeight/2 - 250);

  text("विद्यार्थीहरू अब उनीहरूको क्षेत्रीय भाषामा अध्ययन गर्न सक्दछन्", displayWidth/2 + 300,displayHeight/2 - 100);
  
  text("हामी हाम्रो स्कूल उमेर मा हाम्रो कौशल मा इंटर्नशिप प्राप्त गर्न सक्छौं", displayWidth/2 + 500,displayHeight/2 + 200);

  text("अब परीक्षा क्षेत्रीय भाषाहरूमा उपलब्ध छन्", displayWidth/2 + 250,displayHeight/2 + 120);

  text("शिक्षक र विद्यार्थीहरूले एक बच्चाको दर्जा दिन्छ", displayWidth/2 +250, displayHeight/2 +300);

  text("विद्यार्थीहरू शैक्षिक प्रदर्शन र रचनात्मकताको आधारमा पनि क्रमबद्ध हुन्छन्", displayWidth/2 + 1000,displayHeight/2 - 310);

  text("विद्यार्थीहरूलाई कुनै पनि सीपहरू जस्तै कोडि are, भाँडाकुँडाहरू आदि सिकाइन्छ", displayWidth/2 + 700,displayHeight/2  + 400);

  text("अब बोर्ड परीक्षा दुई सेमेस्टर मा आयोजित छ", displayWidth/2 + 900,displayHeight/2 + 10);

  text("भारतीय संस्कृति स्कूलमा पढाइन्छ", displayWidth/2 + 900,displayHeight/2 +300);

  text("योग्यता पूर्ण पाठ्यक्रम पछि प्रदान गरिन्छ र प्रमाणपत्रहरू र डिप्लोमा कोर्सहरूको बीचमा प्रदान गरिन्छ", displayWidth/2 + 1100,displayHeight/2 + 140);

  text("१२ अंकले कलेज प्रवेशका लागि महत्त्वपूर्ण छैन, विद्यार्थीहरूले प्रवेश परीक्षा दिन सक्छन्", displayWidth/2 + 800,displayHeight/2 - 200);

  text("शुल्क प्रतिबन्धित छ", displayWidth/2 + 300,displayHeight/2 + 400);

  text("विद्यार्थीहरू आफूले चाहेको कुनै पनि विषय लिन सक्दछन्", displayWidth/2 + 1250,displayHeight/2 + 350);
  
}