class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.input2 = createInput("correct option is ....");
    
   //Create a input box to enter the number
   


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
  }
   display() { 
    this.title.html("my quiz")
    this.title.position(200,200)
   this.question.html('who is spiderman?')
   this.question.position(100,100)
   this.option1.html('1-an avenger')
   this.option1.position(120,100)
   this.option2.html('2-a god')
   this.option2.position(130,100)
   this.option3.html('3-a villan')
   this.option3.position(100,120)
   this.option4.html('4-venom')
   this.option4.position(160,100)
   this.input1.position(150,120)
   this.input2.position(180,140)
   this.button.position(300,340)
   }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message.html("you played well")
    this.message.position(200,200);
    })


  }
}
