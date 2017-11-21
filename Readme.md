1. In order to test anything you first have to install required items from http://webdriver.io/guide.html.
2. Once you install all necessary things you can start testing.
3. In my case my tests are being done under the test directory test/specs/test.js file
4.   A.
     The first test was fairly easy, the biggest block I had was reading through the documents, but managed to find the solution was I used a function that check all img tags and check if they were visible. The return is a boolean of true!
     [ true, true ]

     1 passing (8.30s)

     At least that's what I thought as I inspected the page, I found that most images and graphics are background images....
     I will have to take that in consideration 
     B.
