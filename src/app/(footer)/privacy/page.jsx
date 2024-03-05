import GeneralUsePage from "@/components/general/GeneralUsePage";

export default function Privacy() {
  return (
    <div>
      <GeneralUsePage
        title={"Privacy Policy"}
        body={
          <div>
            <p>Last updated: 05 March 2024</p>
            <p>Welcome to American Diner. Your privacy is important to us.</p>
            <p>
              This Privacy Policy explains how we collect, use, and protect your
              personal information when you visit our restaurant or use our
              services. By using our services, you agree to the collection and
              use of information in accordance with this policy.
            </p>
            <h2>Information Collection and Use</h2>
            <p>
              We collect information that you provide to us when you place an
              order or create an account. This may include your name, email
              address, phone number, and payment information. We use this
              information solely for processing your orders and managing your
              account.
            </p>
            <p>
              If you choose to create an account, you have the option to save
              your login information for future convenience. We do not sell any
              customer information to third parties.
            </p>
            <h2>Log Data</h2>
            <p>
              We may also collect information that your browser sends whenever
              you visit our website or when you access our services by or
              through a mobile device.
            </p>
            <h2>Cookies</h2>
            <p>
              Cookies are files with a small amount of data which may include an
              anonymous unique identifier. We use cookies to enhance your
              experience, gather general visitor information, and track visits
              to our website. You have the option to accept or refuse these
              cookies.
            </p>
            <h2>Security</h2>
            <p>
              The security of your personal information is important to us, but
              remember that no method of transmission over the Internet or
              method of electronic storage is 100% secure. While we strive to
              use commercially acceptable means to protect your personal
              information, we cannot guarantee its absolute security.
            </p>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes.
            </p>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us.
            </p>
          </div>
        }
      />
    </div>
  );
}
