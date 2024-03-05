import GeneralUsePage from "@/components/general/GeneralUsePage";

export default function Cookie() {
  return (
    <div>
      <GeneralUsePage
        title={"COOKIE POLICY"}
        body={
          <div>
            <p>
              At American Diner, we use cookies to improve your experience on
              our website. By using our site, you agree to our use of cookies.
            </p>
            <h2>What are cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They help in remembering your preferences and
              some details, making your next visit easier and the site more
              useful to you.
            </p>
            <h2>How we use cookies</h2>
            <p>
              We use cookies to understand how you use our site and to improve
              your experience. This includes personalizing content and
              advertising. To learn more, click here.
            </p>
            <h2>Your choices regarding cookies</h2>
            <p>
              If you would like to change your cookie preferences, you can do so
              at any time by clicking on the 'Settings' button located at the
              bottom right of the screen. Here you can customize which types of
              cookies you consent to allow while browsing our site.
            </p>
            <h2>More information</h2>
            <p>
              If you have any questions about our use of cookies, please contact
              us.
            </p>
          </div>
        }
      />
    </div>
  );
}
