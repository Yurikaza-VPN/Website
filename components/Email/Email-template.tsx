import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <table width="100%">
      <tr>
        <td align="center">
          <table width="600">
            <tr>
              <td align="center">
                <h1>Thank You for Connecting with Yurikaza VPN!</h1>
              </td>
            </tr>
            <tr>
              <td>
                <p>Dear {firstName},</p>
                <p>
                  Thank you for signing up to receive updates and news from
                  Yurikaza VPN! We’re thrilled to have you as part of our
                  growing community dedicated to ensuring a more secure and
                  private internet.
                </p>
                <p>
                  At Yurikaza, we’re constantly working on innovative ways to
                  protect your online privacy through our decentralized VPN
                  network. By staying connected, you’ll be the first to know
                  about new features, updates, and opportunities to contribute
                  to the project.
                </p>
                <p>
                  In the meantime, if you have any questions or feedback, feel
                  free to reach out to us at.
                </p>
                <p>
                  Thank you for supporting a more private and decentralized web!
                </p>
                <p>Best regards,</p>
                <p>The Yurikaza VPN Team</p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <p>&copy; 2024 Yurikaza VPN. All rights reserved.</p>
                <p>
                  You are receiving this email because you signed up for updates
                  on our website.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
);
