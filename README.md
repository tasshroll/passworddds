# passwords
Application that an employee can use to generate a random password based on criteria they've selected.


User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
“Check all that you want to apply to your new password”
Lowercase letters a,b,c,d,e,f,g,h,I,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
Uppercase letters A,B,C,DD,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z
Numeric 0,1,2,3,4,5,6,7,8,9
Special Characters !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

Build an array with all valid choices, var [] choiceSet

What length do you want for your new password (8-128?

for let i=0, i<length, i++ {
  newPswd[i] = randomPick from choiceSet;



WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
