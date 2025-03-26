<h1><strong>Responsive Navbar with jQuery</strong></h1>
This project features a responsive navigation bar with a sidebar menu for mobile screens, built using HTML, CSS, and jQuery. The navigation bar becomes fixed on scroll, and the sidebar includes smooth animations, a background overlay, and a mechanism to disable body scrolling when opened.

<h3><strong>Features</strong></h3>
✅ Fixed Header on Scroll – The header remains visible when scrolling down, improving user navigation.<br>
✅ Mobile Sidebar Menu – A sliding sidebar navigation appears when clicking the hamburger button on smaller screens.<br>
✅ Smooth Animations – The sidebar and overlay smoothly appear and disappear using jQuery animations.<br>
✅ No Scroll While Sidebar is Open – The page scroll is disabled when the sidebar opens, preventing background movement.<br>
✅ Restores Scroll Position – When closing the sidebar, the page returns to the same scroll position.<br>

<h3><strong>How It Works</strong></h3>
<ul>
  <li>The hamburger-btn triggers the sidebar menu.</li>
  <li>The sidebar slides in from the left (left: 0), and a semi-transparent overlay (bg-tablet) appears.</li>
  <li>Scrolling is disabled (overflow: hidden; height: 100vh;) when the menu is open.</li>
  <li>Clicking outside the menu (bg-tablet) or the close button hides the sidebar and restores scrolling.</li>
</ul>
<h3><strong>Technologies Used</strong></h3>
<ul>
  <li><strong>HTML – </strong>Markup for the navbar and structure.</li>
  <li><strong>CSS – </strong>Styling for desktop and mobile responsiveness.</li>
  <li><strong>jQuery – </strong>Handles the sidebar animations, scroll behavior, and event listeners.</li>
</ul>

<h3><strong>How It Works</strong></h3>
<ol>
  <li>Store Scroll Position:
    <ul>
       <li>When the sidebar opens, the current scroll position is saved to prevent page movement.</li>
    </ul>
  </li>
  <li>Open Sidebar:
    <ul>
      <li>Moves the .navbar to left: 0 with an animation.</li>
      <li>Shows the .bg-tablet overlay with a fade-in effect.</li>
      <li>Disables scrolling on html and body.</li>
    </ul>
  </li>
  <li>Close Sidebar:
    <ul>
      <li>Moves the .navbar back to left: -100%.</li>
      <li>Hides the .bg-tablet overlay with a fade-out effect.</li>
      <li>Restores scrolling and sets the page back to its original scroll position.</li>
    </ul>
  </li>
</ol>

<h3><strong>Setup & Usage</strong></h3>
<ol>
  <li>Clone the repository:
    <ul>
      <li>git clone https://github.com/your-username/your-repo.git<br></li>
      <li>cd your-repo</li>
    </ul>
  </li>
  <li>Open index.html in your browser</li>
  <li>Click the hamburger menu to open/close the sidebar.</li>
</ol>
