import GeneralUsePage from "@/components/general/GeneralUsePage";

export default function Accessibility() {
  return (
    <div>
      <GeneralUsePage
        title={"ACCESSIBLITY"}
        body={
          <div>
            <h1>Accessibility Statement</h1>
            <p>
              We are committed to ensuring digital accessibility for people with
              disabilities. We are continually improving the user experience for
              everyone, and applying the relevant accessibility standards.
            </p>
            <h2>Conformance status</h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines
              requirements for designers and developers to improve accessibility
              for people with disabilities. It defines three levels of
              conformance: Level A, Level AA, and Level AAA. Our goal is to be
              fully compliant with Level AA.
            </p>
            <h2>Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of our site. Please
              let us know if you encounter accessibility barriers:
            </p>
            <ul>
              <li>Phone: (555) 123-4567</li>
              <li>
                E-mail:{" "}
                <a href="mailto:accessibility@example.com">
                  accessibility@example.com
                </a>
              </li>
              <li>Visitor address: 123 Accessibility Lane, Inclusivity City</li>
            </ul>
            <p>We try to respond to feedback within 2 business days.</p>
          </div>
        }
      />
    </div>
  );
}
