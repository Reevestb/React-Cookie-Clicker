# User Stories

🐿️ As a user, I want to be able to click the cookie and increment the counter
🐿️ As a user, I want to see the counter automatically increment using an interval timer
🐿️ As a user, I want to purchase items i can afford in the shop and increase the number of cookies every time the interval passes

# Requirements

🎯 Create state variables to store the current number of cookies and the cookies PerSecond value (useState)

🎯 Set up a timer to increment the number of cookies by the cookiesPerSecond value (useEffect). Be sure to handle clearing the timer using the useEffect return value.

🎯 Set up an array of objects containing the items available for purchase in the store, their cost and their increment increase value. Map through these and create buttons for each.

🎯 Create a function to handle the purchase of an item. This should check if the user has enough cookies to purchase the item, and if so, subtract the cost of the item from the number of cookies and add the increment value to the cookiesPerSecond value.

# Stretch Goals

🏹 Store the cookies and cookiesPerSecond values in localStorage so they persist between page refreshes

💭 You can load saved values from localStorage as the default value passed to the useState hook

const [cookies, setCookies] = useState(
parseInt(localStorage.getItem("cookies")) || 0 // parseInt converts the string from local storage to a number
);
const [cookiesPerSecond, setCookiesPerSecond] = useState(
parseInt(localStorage.getItem("cookiesPerSecond")) || 1
);

💭 The useEffect dependency array can be used to trigger a function to save the values to localStorage every time they change

// Store cookies and cookiesPerSecond to local storage
useEffect(() => {
localStorage.setItem("cookies", cookies.toString()); // local storage supports strings so we convert it to a string before saving it
localStorage.setItem("cookiesPerSecond", cookiesPerSecond.toString());
}, [cookies, cookiesPerSecond]);

🏹 Retrieve data to populate your cookie upgrades from a third-party API using fetch and useEffect().
https://cookie-upgrade-api.vercel.app/api/upgrades

# Required

🎯 Please mention the requirements you met and which goals you achieved for this assignment.

🎯 Were there any requirements or goals that you were not quite able to achieve?

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

## (Optional)

🏹 Feel free to add any other reflections you would like to share about your submission e.g.

- What went really well and what could have gone better?
- Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
- Describing errors or bugs you encountered while completing your assignment.

# My Reflection

After initially struggling with understanding the prop levels and where to put certain functions once I had sorted this the cookie button, reset button and cookie counter came together pretty quickly. My next issue was my Shop, although getting it displayed on the page wasn't an issue I struggled to make the buy button work with the buyUpgrades function as it wasn't able to read the mapped API. So I put that function in its own component to return the buy button and then imported that component into my shop component and used props to be able to define the cost and increase.
I really tried to not use position relative and absolute in my css this time and found that it made styling my game much easier, so that went well. I did struggle with stylying my buy button but I found a nice website which had alot of examples on and then used that to style my button how I wanted. I have attached the link to the website below.
As usual typo's caused the majority of my bugs so where easily fixable...

## Links that helped me

https://www.sliderrevolution.com/resources/css-button-hover-effects/ = used to activate the hover element to my buttons to show buy instead of cost.
