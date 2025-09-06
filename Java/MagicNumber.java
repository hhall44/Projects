public class Magic {
	public static void main(String[] args) {
  int myNumber = 44;
  // for future reference myNumber will be refered to as the original number
  /* Create an int variable called stepOne.
  
  Set it equal to the original number (myNumber) multiplied by itself. */
  int stepOne = myNumber * myNumber;

  /* Create an int variable called stepTwo.
  
  Set it equal to the previous result (stepOne) plus the original number (myNumber).*/
  int stepTwo = stepOne + myNumber;

  /* Create an int variable called stepThree.
  
  Set it equal to the previous result (stepTwo) divided by the original number. */
	int stepThree = stepTwo / myNumber;

  /* Create an int variable called stepFour.
  
  Set it equal to the previous result (stepThree) plus 17. */
  int stepFour = stepThree + 17;

  /*Create an int variable called stepFive.
  
  Set it equal to the previous result (stepFour) minus the original number. */
  int stepFive = stepFour - myNumber;

  /*Create an int variable called stepSix.
  
  Set it equal to the previous result (stepFive) divided by 6. */
  int stepSix = stepFive / 6;
  

  /* Print out the value of the last step. Then, save and run your code!
  
  What number is printed to the console? */
  System.out.println(stepSix);

  /* Note: Due to the range of the int primitive data type, only set myNumber to integer values between -46,341 and 46,340 (both inclusive). Values outside of this range for myNumber will cause the value of stepOne to exceed the maximum possible value of int when we multiply myNumber by itself, which can cause the program to produce unexpected results! */


	}
}